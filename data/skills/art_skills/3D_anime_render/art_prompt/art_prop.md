# 3D Animation Rendered Urban Prop Image Generation · Constraint Handbook

---

## I. Prop Design Principles

1. **Functional Legibility** — The purpose of the prop is immediately clear; the form serves the function.
2. **Ultimate Texture** — Material textures must be clearly distinguishable (metal/glass/plastic/wood/fabric), but cel-shading rendering should be moderately simplified.
3. **Era Consistency** — All props must conform to the modern urban worldview; ancient/futuristic elements are prohibited.
4. **Clear Scale** — The real-world size of the prop is implied through reference objects or annotations.
5. **Pure Prop Independent Display** — Only the prop itself may appear in the frame. Any characters, hands, or limbs are strictly prohibited. Props must not be in a held/worn/gripped state; they must be presented independently in a still-life display manner.

---

## II. Prop Categories and Aesthetic Constraints

### 2.1 Office Supplies

| Item | Constraint | Prompt |
|---|---|---|
| Type | Notebook/pen/folder/calculator | {prop type}, urban office supplies |
| Material | Plastic/metal/paper | Modern materials, urban texture |
| Decoration | Minimalist design, brand logo | Minimalist design, urban style |
| Gloss | Moderate gloss, clear reflections | Moderate gloss, clear reflections |
| Prompt | 3D animation rendered urban {prop}, modern materials, minimalist design | — |

### 2.2 Household Items

| Item | Constraint | Prompt |
|---|---|---|
| Type | Coffee cup/water cup/tableware/lighting fixture | {item type}, urban household item |
| Material | Glass/ceramic/metal/plastic | Glass texture, modern design |
| Texture | Smooth surface, clear material | Smooth surface, clear material |
| Style | Minimalist/modern, switched by scene | Minimalist modern / urban style |
| Prompt | 3D animation rendered urban {item}, {material} texture, clear textures | — |

### 2.3 Electronic Devices

| Item | Constraint | Prompt |
|---|---|---|
| Type | Smartphone/tablet/headphones/camera | {device type}, urban electronic device |
| Material | Metal/glass/plastic | Modern device materials, smooth texture |
| Craftsmanship | Refined craftsmanship, brand design | Refined craftsmanship, brand design |
| Gloss | Moderate reflections, screen glow effect | Moderate reflections, screen glow |
| Prompt | 3D animation rendered urban {device}, modern materials, screen glow effect | — |

### 2.4 Apparel Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Type | Glasses/watch/bag/keychain | {accessory type}, urban apparel accessory |
| Material | Metal/leather/fabric/glass | Leather texture, metal texture |
| Craftsmanship | Brand craftsmanship, refined design | Brand craftsmanship, refined design |
| Gloss | Moderate gloss, clear brand logo | Moderate gloss, clear brand logo |
| Prompt | 3D animation rendered urban {accessory}, {material}, brand design | — |

---

## III. Multi-Angle Setup Diagram Standards

### View Definitions

| Position | View | Angle | Requirement | Prompt |
|---|---|---|---|---|
| Top Left | Front View | Front 0° | Complete front form of the prop | front view |
| Top Right | Side View | Side 90° | Clear thickness/outline/structure | side view |
| Bottom Left | Back View | Back 180° | Back structure/decoration of the prop | back view |
| Bottom Right | Detail Close-up | Local magnification | Material texture/craftsmanship details | detail closeup |

### Frame Standards

| Item | Constraint |
|---|---|
| Layout | Four-quadrant grid (2×2) in the same frame, four views: top, bottom, left, right |
| Background | Pure neutral gray #E8E8E8 |
| Lighting | Uniform soft light, no hard shadows |
| Ratio | Prop occupies 70%+ of the subject area within each grid |
| Shadow | Natural subtle ground shadow allowed (cel-shading treatment) |
| Aspect Ratio | Recommended 1:1 |

---

## IV. Material Rendering Constraints

| Material | Rendering Requirement | Prompt |
|---|---|---|
| Metal | Reflections/highlights/cold gloss (cel-shading treatment), micro-scratches visible | Metal texture, cel-shading gloss, clear reflections |
| Glass | Transparency/refraction/halo (cel-shading simplification) | Glass texture, clear transparency |
| Plastic | Smooth surface/slight reflection | Plastic texture, smooth surface |
| Leather | Clear texture/natural wrinkles | Leather texture, natural texture |
| Paper | Surface texture/slight wrinkles | Paper texture, surface texture |
| Fabric | Fiber texture/natural wrinkles | Fabric texture, natural texture |

---

## V. Prompt Templates

```
3D animation render, cinematic lighting, vibrant cel-shaded texture, high-detail materials, pleasant and healing atmosphere, cartoon urban style, high-detail cartoon materials, moderate cartoon proportions, warm color palette, 8K ultra-high definition, cinematic composition, soft light and shadow layers, bright cartoon rendering style, warm and healing, prop concept art,
anime style, cel-shaded, 3D animation render,
{prop type}, {material description}, {craftsmanship/decoration description}, {state description},
Pure prop still life display, prop displayed independently, not held by anyone, not worn by anyone,
Four-panel grid in the same frame (2×2): top-left front view + top-right side view + bottom-left back view + bottom-right detail close-up,
Pure neutral gray background, uniform soft light, no hard shadows,
Clear material textures, cel-shaded rendering, {material gloss description}, modern cartoon urban style,
8K ultra-high definition, cinematic composition,
No text of any kind in the image,
No people, hands, fingers, or limbs may appear in the frame; the prop must not be in a state of being held or worn
```

---

## VI. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Must specify a "pure neutral gray background" |
| R2 | Must clearly define the prop's material and craftsmanship |
| R3 | The prop design must conform to the modern urban worldview |
| R4 | Must include 3D animation rendering keywords (cel-shaded, 3D animation render, anime style) |
| R5 | Must include 8K ultra-high-definition and cinematic composition keywords |

### Strictly Prohibited

| ID | Prohibition |
|---|---|
| X1 | Complex scene backgrounds |
| X2 | Props and characters in the same frame (this stage is for pure prop images only) |
| X3 | Any character figures, including full body, half body, or partial body parts (hands, fingers, arms, etc.) |
| X4 | Props in a state of being held, grasped, worn, or in use |
| X5 | Elements implying the presence of a character (such as hand-holding marks, wearing perspective, or usage posture) |
| X6 | Use of realistic photography terms (such as real photography, photorealistic, RAW photo, etc.) |
| X7 | Overly realistic material textures that disrupt cel-shaded style consistency |
| X8 | Ancient/futuristic elements or non-modern urban styles |