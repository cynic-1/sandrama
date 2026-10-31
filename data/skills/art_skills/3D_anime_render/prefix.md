# Global Aesthetic Foundation · 3D Animation Rendering

---
Strictly and completely follow all style constraints and global rules below, and generate prompts strictly according to the prompt template format; output only the prompt body, without adding any explanations, notes, comments, titles, or other extra text.
## I. Style Genes

| Dimension | Definition |
|---|---|
| **Primary Style** | 3D Animation Rendering |
| **Secondary Style** | Cel-shaded texture · Cinematic lighting layers |
| **Emotional Tone** | Healing · Bright and Warm |
| **Texture Anchor Words** | Clear outline lines, high-detail materials, soft warm tones |

---

## II. Global Color Palette (Style Baseline, Not Hard-Locked)

> Goal: Unify aesthetics rather than restrict creativity. Except for "hard-constraint colors," other colors are used by default with priority and can be offset within a reasonable range.

### Color Usage Hierarchy

| Level | Constraint Strength | Description |
|---|---|---|
| L1 Hard Constraint | High | Locks only the core of character recognition: aesthetic direction of skin tone, hair color, and main costume base color |
| L2 Soft Constraint | Medium | Scene colors, accessory colors, and accent colors prioritize the palette, but can be fine-tuned according to shots and plot |
| L3 Exception Mechanism | Low | Romantic/climax/special scenes can temporarily break local colors, but must maintain the overall warm-tone logic |

| No. | Color Name | Hex Value | Usage |
|---|---|---|---|
| C1 | Warm Orange | #F5A673 | Skin tone base, dusk, sunset glow |
| C2 | Cherry Blossom Pink | #F4D5D5 | Cheek blush, romance, accents |
| C3 | Sky Blue | #87AEC9 | Sky, costumes, cool-tone accents |
| C4 | Dark Brown Hair | #4A3728 | Hair color, iris color |
| C5 | Premium Gray | #8A8A8A | Architecture, shadows, neutral colors |
| C6 | Light Purple | #D0C4D6 | Night, dreams, memories |
| C7 | Amber Warm | #C9A96E | Dusk, lighting, warmth |
| C8 | Mint Green | #9DC2A5 | Plants, nature, environment |
| C9 | Off-White | #F5F0E8 | Walls, costumes, background |
| C10 | Warm Yellow | #F5E6D0 | Interior, warm light, cozy feel |

### Hard-Constraint Colors (Default Locked)

| Color Item | Corresponding Color | Rule |
|---|---|---|
| Skin Tone Baseline | C1 Warm Orange | Default priority, allows minor adjustments in brightness/warmth |
| Hair/Iris Color Baseline | C4 Dark Brown Hair | Default priority, allows slight offset to dark brown/dark brown |

### Soft-Constraint Colors (Recommended Priority)

> C2/C3/C5/C6/C7/C8/C9/C10 are recommended color domains, used for costumes, decorations, backgrounds, warm light, environment, etc. Adjacent similar colors can be adjusted according to the shot atmosphere.

### Emotional Color Palette (Director Alignment Version)

| Emotional Scene | Primary Color | Secondary Color | Lighting & Contrast Suggestions | Visual Keywords |
|---|---|---|---|---|
| Daily Warmth | C10 Warm Yellow | C9 Off-White + C5 Premium Gray | Even warm tone, soft contrast | Life feel, warmth, calm |
| Heart-Fluttering Moment | C2 Cherry Blossom Pink | C1 Warm Orange + C10 Warm Yellow | Mid-close-up warmth boost, slight skin redness | Shyness, closeness, ambiguity |
| Urban Scenery | C9 Off-White | C5 Premium Gray + C3 Sky Blue | Clear light-dark layers, neutral dominant | Urban, open, natural |
| Dusk Romance | C7 Amber Warm | C1 Warm Orange + C2 Cherry Blossom Pink | Backlit sunset glow, rim light | Romance, warmth, emotion |
| Night Street Scene | C3 Sky Blue | C6 Light Purple + C1 Warm Orange | Cool tone dominant, warm accents | Urban, serene, vibrant |
| Indoor Daily Life | C10 Warm Yellow | C9 Off-White + C5 Premium Gray | Warm light soft focus, cozy feel | Home, comfort, safety |
| Memory/Flashback | C1 Warm Orange | C5 Premium Gray + C7 Amber Warm | Soft focus haze, slight fading | Nostalgia, old memories, dreamy |
| Parting/Sadness | C5 Premium Gray | C3 Sky Blue + C1 Warm Orange | Desaturation, increased cool-warm contrast | Distance, restraint, quiet pressure |

### Emotional Color Palette Usage Rules

| No. | Rule |
|---|---|
| E1 | Each prompt must specify at least 1 "emotional scene" and bind a primary + secondary color combination |
| E2 | No more than 2 primary colors per shot to avoid color narrative focus loss |
| E3 | When switching emotions, prioritize adjusting light ratio and color temperature, then saturation |
| E4 | Healing-oriented defaults follow "warm base + cool-warm contrast": warm colors as base, cool colors for background/shadows |
| E5 | If conflicting with the plot, the emotional color palette takes priority over general recommended colors, but must not violate prohibited items |

### Color Temperature Constraints

| Parameter | Value | Description |
|---|---|---|
| Overall Color Temperature | Warm 4800-5200K (Recommended) | Warm healing main tone |
| Skin Tone Color Temperature | Slightly Warm 5000-5400K (Recommended) | Warm orange but with a sense of life |
| Contrast | Medium (Recommended to maintain) | Clear light-dark layers, but not overly strong |
| Saturation | Medium-High 65-80% (Recommended Range) | High-end 3D animation color tones |

### Tolerance and Exceptions

| Item | Recommended Tolerance |
|---|---|
| Hue Offset | ±8° |
| Saturation Offset | ±10% |
| Brightness Offset | ±12% |

> Exception Scenes: Romantic, dusk, and emotional climax shots can use warmer or higher saturation local color blocks; however, high-saturation fluorescent colors and modern color language are prohibited from entering the frame.

---

## III. Global Constraint Rules

### Mandatory Rules (Inherited by all skills)

| No. | Rule |
|---|---|
| R1 | Must include "3D Animation Rendering + Cel-shaded texture" style anchor words |
| R2 | Must declare "Clear outline lines + High-detail materials" |
| R3 | Faces must use "Realistic materials combined with cartoon proportions + Soft lighting" |
| R4 | Hair strands must use "Clear outline lines + Natural lighting layers" |
| R5 | Lighting must declare "Cinematic lighting + Soft lighting layers" |

### Prohibited Items (Inherited by all skills)

| No. | Prohibited Content |
|---|---|
| X1 | Prohibited "Realistic rendering/Photo-grade realism" |
| X2 | Prohibited "Dark tones/Heavy shadows/Excessive contrast" |
| X3 | Prohibited "High-saturation fluorescent colors/Neon colors" |
| X4 | Prohibited "Facial distortion/Proportion imbalance/Abnormal limbs" tendency words |
| X5 | Prohibited "Missing modern elements" (Modern scenes must be explicitly stated) |
| X6 | Prohibited "Cyberpunk/Steampunk/Fantasy Western elements" |