import React, { useEffect, useRef, useState } from 'react';

interface Model3DProps {
  scrollY: number;
  currentScene: string;
}

const Model3D: React.FC<Model3DProps> = ({ scrollY, currentScene }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const modelRef = useRef<any>(null);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mouse interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Dynamically import Three.js
    const initThree = async () => {
      try {
        console.log('Initializing Three.js...');
        
        // Import Three.js from CDN
        const THREE = await import('https://esm.sh/three@0.160.0' as any);
        const { OBJLoader } = await import('https://esm.sh/three@0.160.0/examples/jsm/loaders/OBJLoader.js' as any);

        if (!canvasRef.current) return;

        console.log('Three.js loaded successfully');

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera setup - positioned to look at bottom of page
        const camera = new THREE.PerspectiveCamera(
          50,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.set(0, 5, 30); // Moved up to look down at bottom
        camera.lookAt(0, -8, 0); // Look at bottom area
        cameraRef.current = camera;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current,
          alpha: true,
          antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        rendererRef.current = renderer;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const directionalLight1 = new THREE.DirectionalLight(0xD4AF37, 1.2);
        directionalLight1.position.set(5, 5, 5);
        scene.add(directionalLight1);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight2.position.set(-5, 3, -5);
        scene.add(directionalLight2);

        const directionalLight3 = new THREE.DirectionalLight(0xD4AF37, 0.4);
        directionalLight3.position.set(0, -5, 0);
        scene.add(directionalLight3);

        // Create fallback geometry (in case model doesn't load)
        const createFallbackModel = () => {
          console.log('Creating fallback geometry...');
          const geometry = new THREE.TorusKnotGeometry(0.3, 0.1, 100, 16); // Smaller fallback
          const material = new THREE.MeshStandardMaterial({
            color: 0xD4AF37,
            metalness: 0.8,
            roughness: 0.2,
            emissive: 0xD4AF37,
            emissiveIntensity: 0.2,
          });
          const mesh = new THREE.Mesh(geometry, material);
          modelRef.current = mesh;
          scene.add(mesh);
          setIsLoaded(true);
          console.log('Fallback model created');
        };

        // Try to load OBJ model
        console.log('Attempting to load OBJ model...');
        const loader = new OBJLoader();
        
        // Set a timeout for loading
        const loadTimeout = setTimeout(() => {
          console.warn('Model loading timeout - using fallback');
          if (!modelRef.current) {
            createFallbackModel();
          }
        }, 5000);

        loader.load(
          './model_8.obj',
          (object: any) => {
            clearTimeout(loadTimeout);
            console.log('OBJ model loaded successfully!');
            
            // Center and scale the model
            const box = new THREE.Box3().setFromObject(object);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 0.15 / maxDim; // Very small scale
            
            object.scale.set(scale, scale, scale);
            object.position.sub(center.multiplyScalar(scale));
            
            // Position at bottom of viewport
            object.position.y = -8; // Move to bottom
            
            // Flipped 180 degrees - viewing from bottom up
            // Base at top, scales at bottom
            object.rotation.x = Math.PI;  // 180 degrees flip
            object.rotation.y = 0;        // Facing forward
            object.rotation.z = 0;        // No roll
            
            // Apply gold material
            object.traverse((child: any) => {
              if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                  color: 0xD4AF37,
                  metalness: 0.8,
                  roughness: 0.2,
                  emissive: 0xD4AF37,
                  emissiveIntensity: 0.2,
                });
              }
            });

            modelRef.current = object;
            scene.add(object);
            setIsLoaded(true);
            console.log('Model added to scene');
          },
          (xhr: any) => {
            const progress = (xhr.loaded / xhr.total) * 100;
            console.log(`Loading: ${progress.toFixed(2)}%`);
          },
          (error: any) => {
            clearTimeout(loadTimeout);
            console.error('Error loading OBJ model:', error);
            console.log('Using fallback geometry instead');
            setError('Using fallback geometry');
            createFallbackModel();
          }
        );

        // Animation loop
        const animate = () => {
          animationFrameRef.current = requestAnimationFrame(animate);
          
          if (modelRef.current) {
            // Gentle auto-rotation
            modelRef.current.rotation.y += 0.003;
            
            // Mouse interaction - smooth follow
            const targetRotationX = mouseRef.current.y * 0.3;
            const targetRotationY = mouseRef.current.x * 0.3;
            
            modelRef.current.rotation.x += (targetRotationX - modelRef.current.rotation.x) * 0.05;
            modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * 0.05;
          }
          
          renderer.render(scene, camera);
        };
        animate();

        // Handle resize
        const handleResize = () => {
          if (!cameraRef.current || !rendererRef.current) return;
          
          cameraRef.current.aspect = window.innerWidth / window.innerHeight;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
        };
      } catch (error) {
        console.error('Error initializing Three.js:', error);
        setError('Failed to initialize 3D');
      }
    };

    initThree();
  }, []);

  // Scroll-based animation
  useEffect(() => {
    if (!modelRef.current) return;

    const scrollProgress = Math.min(scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1);
    
    // Scale based on scroll - very small
    const scale = 0.15 + scrollProgress * 0.1; // Starts at 0.15, grows to 0.25
    const currentScale = modelRef.current.scale.x;
    modelRef.current.scale.set(
      currentScale + (scale - currentScale) * 0.1,
      currentScale + (scale - currentScale) * 0.1,
      currentScale + (scale - currentScale) * 0.1
    );
    
    // Keep at bottom - no vertical movement
    modelRef.current.position.y = -8;
  }, [scrollY]);

  // Scene-based visibility
  const opacity = currentScene === 'intro' ? 0.6 : 0.2;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-1000"
      style={{ opacity }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
      
      {/* Debug info */}
      {!isLoaded && !error && (
        <div className="absolute top-4 right-4 text-white/50 text-xs">
          Loading 3D model...
        </div>
      )}
      {error && (
        <div className="absolute top-4 right-4 text-accent/50 text-xs">
          {error}
        </div>
      )}
    </div>
  );
};

export default Model3D;
