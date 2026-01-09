# Okosun, Okosun & Partners - Home Page Architecture

## 1. Design Philosophy & Theme

**Thematic Direction:** "Cinematic White & Gold Luxury"
**Core Palette:**

- **Primary:** Deep Charcoal/Black (`#0E0E12`) - Used for text and strong contrast elements.
- **Base:** Ivory/Off-White (`#F9F9F7`) - The dominant background color for a clean, expensive feel.
- **Accent:** Metallic Gold (`#D4AF37`) - Used for gradients, borders, highlights, and primary CTAs.
  **Typography:**
- **Headings:** _Playfair Display_ (Serif, Italic) - Evokes tradition, elegance, and authority.
- **Body:** _Inter_ (Sans-serif) - Modern, clean, and highly readable.

---

## 2. Header (Navigation)

- **Type:** Sticky, Glassmorphism (White/95% opacity with blur).
- **Logo (Left):**
  - Custom `logo.png` (Height: 48px/12 classes).
  - Text: "Okosun, Okosun & Partners" (Bold Primary) + "Strategic Legal Counsel" (Uppercase tracking).
- **Menu (Center/Right):**
  - Links: Home, About, Team, Practice, Contact.
  - Style: Uppercase, small font (10px), wide tracking, hover underline effect (Gold).
- **Action Area (Right):**
  - **Primary CTA:** "Consult Now" Button (Black background, Gold hover, phone icon).
  - **Secondary:** External Link icon (Circular button).

---

## 3. Hero Section (The "Hook")

- **Background Composition:**
  - **Base:** Ivory (`bg-ivory`).
  - **Image:** `benigno-hoyuela-rb70_pV4nAE-unsplash.jpg` (Courthouse).
  - **Treatment:** Grayscale, 50% opacity, seamless fade into white/ivory using gradients.
  - **Atmosphere:** Subtle ambient gold glows (top-right, bottom-left).
- **Typography (Left):**
  - **Badge:** "Okosun, Okosun & Partners" (Pill shape, glass effect, pulsing gold dot).
  - **Headline:** "Defending" (Black Gradient) + "Your Legacy." (Gold Gradient).
  - **Subtext:** "Strategic legal counsel for Nigeria's elite. Uncompromising excellence since 2010."
- **CTAs:**
  - **"Priority Consult"**: Gold background, white hover effect, "Priority" branding.
  - **"Our Practice"**: White Glass button, subtle border.
- **Visuals (Right - Desktop Only):**
  - **Card 1 (Back):** 3D tilted card with "Success Rate: 98.5%" over a dark justice image.
  - **Card 2 (Front):** White glass card hovering over Card 1.
    - **Key Stat:** "Recovered: **₦5 Billion**" (Prominent Gold styling).
    - **Breakdown:** Corporate (40%), Property (35%), Civil (25%) bars.

---

## 4. Practice Areas (The "Expertise")

- **Layout:** Reveal Section (fades in on scroll).
- **Heading:** "Mastery across the legal spectrum."
- **Grid:** 4 Cards (Civil, Criminal, Property, Company).
- **Card Design:**
  - **Style:** 3D Glass Cards (`glass-card` class).
  - **Interaction:** Hover lifts card, rotates icon, and reveals a "Brief Details" button.
  - **Icons:** Lucide icons (Users, Scale, Building, Briefcase) in Gold.

---

## 5. About & Narrative (The "Trust")

- **Layout:** Split 2-Column Design.
- **Left Column (Story):**
  - **Headline:** "Since 2010, we've refined the art of victory."
  - **Watermark:** Huge "O&P" serif letter behind text.
  - **Key Pillars:** 3 horizontal cards (Experienced Advocates, Personalized Service, Proven Results).
- **Right Column (Visuals):**
  - **Main Image:** Portrait of Chambers/Office (Grayscale -> Color on hover).
  - **Floating Badge:** "Total Recovered: **$50M+**" (Note: This specific section might still use the unified $ or ₦ depending on recent edits, currently documented as $50M+ in the codebase logic for this specific specific "Since 2010" section, whereas Hero is ₦5B).

---

## 6. Client Testimonials (The "Proof")

- **Background:** Clean White.
- **Heading:** "Client Voices" / "Testimonials".
- **Grid:** 3 Columns.
- **Cards:**
  - Bordered white cards (`border-primary/10`).
  - **Content:** 5-Star rating (Gold stars), Italicized quote, Client Name & Role.
  - **Voices:** Chief Adebayo Ogunlesi, Mrs. Folake Adeyemi, Mr. Chukwuma Nwosu.

---

## 7. Our Process (The "Method")

- **Layout:** Vertical Timeline (Step 01 -> Step 04).
- **Steps:**
  1.  **Initial Consultation:** Case assessment & confidential discussion.
  2.  **Strategy Development:** Custom risk analysis & timeline.
  3.  **Expert Execution:** Court proceedings & professional representation.
  4.  **Successful Resolution:** Favorable outcomes & transparency.
- **Visuals:** Alternating Text/Icon layout for each step. Large "01", "02" background numbers.

---

## 8. Footer (The "Contact")

- **Background:** Deep Charcoal (Primary).
- **Top Section:**
  - **Address:** 1st Ewasede, Benin City.
  - **Phone:** +234 805 528 2602.
  - **Email:** counsel@okosunpartners.com.
  - **Hours:** Mon-Fri 9AM-6PM.
- **Map Section:** Full-width Google Map embedded with a grayscale filter.
- **Bottom Bar:** Copyright, Privacy Policy, Terms of Service.
