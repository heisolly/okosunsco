# 🎨 Text Animation Quick Reference

## When to Use Each Animation

### 🎯 For Headings & Titles

#### **SplitText** - Main Headlines

- ✅ Hero headings
- ✅ Page titles
- ✅ Section headers
- 🎨 Effect: Letters appear one by one
- ⏱️ Best for: 3-10 words

#### **GradientText** - Highlighted Words

- ✅ Key phrases
- ✅ Brand values
- ✅ Important terms
- 🎨 Effect: Flowing gradient animation
- ⏱️ Best for: 1-5 words

#### **FuzzyText** - Soft Reveals

- ✅ Subheadings
- ✅ Section intros
- ✅ Testimonial headers
- 🎨 Effect: Blur to sharp
- ⏱️ Best for: Any length

---

### 🏷️ For Labels & Tags

#### **DecryptedText** - Tech/Modern Feel

- ✅ Section labels
- ✅ Category tags
- ✅ Status indicators
- 🎨 Effect: Matrix-style decryption
- ⏱️ Best for: UPPERCASE labels

#### **ScrambledText** - Mysterious Reveal

- ✅ Special sections
- ✅ Exclusive content
- ✅ Premium features
- 🎨 Effect: Characters scramble then settle
- ⏱️ Best for: Short labels

#### **ASCIIText** - Unique Character

- ✅ Footer sections
- ✅ Technical labels
- ✅ Retro aesthetic
- 🎨 Effect: ASCII block reveal
- ⏱️ Best for: Short text

---

### 🔘 For Buttons & CTAs

#### **ShinyText** - Premium Actions

- ✅ Primary buttons
- ✅ Important CTAs
- ✅ Submit buttons
- 🎨 Effect: Shine sweeps across
- ⏱️ Best for: Button text

#### **FallingText** - Dramatic Entrance

- ✅ Hero CTAs
- ✅ Main actions
- ✅ Key conversions
- 🎨 Effect: Letters fall into place
- ⏱️ Best for: 1-4 words

#### **TextPressure** - Interactive Feel

- ✅ Hover states
- ✅ Interactive links
- ✅ Menu items
- 🎨 Effect: Squash on hover
- ⏱️ Best for: Any clickable text

---

### 📝 For Body Text

#### **BlurText** - Smooth Reading

- ✅ Paragraphs
- ✅ Descriptions
- ✅ Quotes
- 🎨 Effect: Blur to sharp, word by word
- ⏱️ Best for: Long text

#### **TextType** - Typewriter Effect

- ✅ Introductions
- ✅ Welcome messages
- ✅ Loading states
- 🎨 Effect: Types out character by character
- ⏱️ Best for: 10-50 characters

#### **TextCursor** - Typing Simulation

- ✅ Chat interfaces
- ✅ Live updates
- ✅ Dynamic content
- 🎨 Effect: Types with blinking cursor
- ⏱️ Best for: Short messages

---

### 🎭 For Special Effects

#### **GlitchText** - Impact Words

- ✅ Power words
- ✅ Emphasis
- ✅ Warnings
- 🎨 Effect: RGB split glitch
- ⏱️ Best for: 1-3 words

#### **RotatingText** - Multiple Options

- ✅ Alternating headlines
- ✅ Feature highlights
- ✅ Value propositions
- 🎨 Effect: Cycles through words
- ⏱️ Best for: 2-5 word options

#### **ShuffleText** - Hover Surprise

- ✅ Logo text
- ✅ Brand names
- ✅ Interactive elements
- 🎨 Effect: Shuffles on hover
- ⏱️ Best for: Short text

---

### 🖱️ For Interactive Elements

#### **TrueFocus** - Hover Elegance

- ✅ Navigation links
- ✅ Menu items
- ✅ Interactive text
- 🎨 Effect: Scale + glow on hover
- ⏱️ Best for: Navigation

#### **VariableProximity** - Mouse Tracking

- ✅ Hero text
- ✅ Special headings
- ✅ Interactive displays
- 🎨 Effect: Scales based on mouse distance
- ⏱️ Best for: Large headings

---

### 📜 For Scroll Effects

#### **ScrollReveal** - Appear on Scroll

- ✅ Section content
- ✅ Cards
- ✅ Images with text
- 🎨 Effect: Fades in on scroll
- ⏱️ Best for: Any content

#### **ScrollFloat** - Parallax Effect

- ✅ Background text
- ✅ Decorative elements
- ✅ Hero sections
- 🎨 Effect: Moves with scroll
- ⏱️ Best for: Large text

#### **ScrollVelocity** - Speed-based

- ✅ Marquees
- ✅ Tickers
- ✅ Dynamic content
- 🎨 Effect: Moves based on scroll speed
- ⏱️ Best for: Continuous text

---

## 🎨 Combination Strategies

### Hero Section

```tsx
<SplitText text="Main Heading" />
<GradientText text="Highlighted Word" />
<BlurText text="Description paragraph..." />
<FallingText text="Call to Action" />
```

### Section Headers

```tsx
<DecryptedText text="SECTION LABEL" />
<FuzzyText text="Section Title" />
```

### Buttons

```tsx
<ShinyText text="Primary Action" />
<TextPressure text="Secondary Link" />
```

---

## ⚡ Performance Tips

### Fast Animations (< 0.5s)

- SplitText
- ShinyText
- TextPressure
- TrueFocus

### Medium Animations (0.5-1s)

- BlurText
- FuzzyText
- FallingText
- GradientText

### Slow Animations (> 1s)

- TextType
- DecryptedText
- ScrambledText
- RotatingText

---

## 🎯 Use Case Matrix

| Animation     | Headings | Labels | Buttons | Body   | Interactive |
| ------------- | -------- | ------ | ------- | ------ | ----------- |
| SplitText     | ⭐⭐⭐   | ⭐⭐   | ⭐      | ⭐     | ⭐          |
| BlurText      | ⭐⭐     | ⭐     | ⭐      | ⭐⭐⭐ | ⭐          |
| GradientText  | ⭐⭐⭐   | ⭐⭐   | ⭐⭐    | ⭐     | ⭐          |
| ShinyText     | ⭐⭐     | ⭐⭐   | ⭐⭐⭐  | ⭐     | ⭐⭐        |
| DecryptedText | ⭐       | ⭐⭐⭐ | ⭐      | ⭐     | ⭐          |
| FallingText   | ⭐⭐⭐   | ⭐     | ⭐⭐⭐  | ⭐     | ⭐          |
| TrueFocus     | ⭐       | ⭐     | ⭐⭐    | ⭐     | ⭐⭐⭐      |
| TextPressure  | ⭐⭐     | ⭐     | ⭐⭐    | ⭐     | ⭐⭐⭐      |
| GlitchText    | ⭐⭐⭐   | ⭐     | ⭐      | ⭐     | ⭐⭐        |
| RotatingText  | ⭐⭐⭐   | ⭐⭐   | ⭐⭐    | ⭐     | ⭐          |

⭐⭐⭐ = Highly Recommended
⭐⭐ = Good Choice
⭐ = Can Work

---

## 🎨 Design Principles

### 1. **Hierarchy**

- Bigger animations for important content
- Subtle animations for supporting text

### 2. **Consistency**

- Use same animation for similar elements
- Create patterns users can recognize

### 3. **Performance**

- Don't animate everything
- Choose 2-3 animations per page

### 4. **Purpose**

- Every animation should have a reason
- Guide user attention strategically

### 5. **Accessibility**

- Respect reduced motion preferences
- Ensure content is readable without animations

---

## 📱 Mobile Considerations

### Best for Mobile

- ✅ ShinyText
- ✅ FuzzyText
- ✅ BlurText
- ✅ TrueFocus

### Use Sparingly on Mobile

- ⚠️ VariableProximity (no hover)
- ⚠️ TextPressure (no hover)
- ⚠️ ScrollVelocity (performance)

### Disable on Mobile

- ❌ Complex scroll animations on low-end devices
- ❌ Mouse-dependent effects

---

## 🎯 Quick Decision Tree

**Q: Is it a heading?**
→ Yes: Use **SplitText** or **GradientText**
→ No: Continue

**Q: Is it a button/CTA?**
→ Yes: Use **ShinyText** or **FallingText**
→ No: Continue

**Q: Is it a label/tag?**
→ Yes: Use **DecryptedText** or **ASCIIText**
→ No: Continue

**Q: Is it body text?**
→ Yes: Use **BlurText** or **FuzzyText**
→ No: Continue

**Q: Is it interactive?**
→ Yes: Use **TrueFocus** or **TextPressure**
→ No: Use **ScrollReveal**

---

**Remember**: Less is more! Choose animations that enhance, not distract.
