import React from 'react';

const ScaleModel: React.FC = () => {
  return (
    <div className="scene-3d">
      <div className="scale-model">
        <div className="scale-base"></div>
        <div className="scale-pole"></div>
        <div className="scale-beam-wrapper">
          <div className="scale-beam"></div>
          <div className="scale-pan-string string-left">
            <div className="scale-pan"></div>
          </div>
          <div className="scale-pan-string string-right">
            <div className="scale-pan"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScaleModel;
