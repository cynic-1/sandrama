# 3D Animation Rendering Urban Prop Derived State Generation · Constraint Manual

---

## I. Derivation Principles

1. **Form Anchoring** — The core form/outline of the prop must be recognizable in all states
2. **State Readability** — State differences must be immediately obvious, allowing the audience to distinguish them instantly
3. **Narrative Service** — Each state variant serves a specific plot point
4. **Progressive Degradation** — Damage/aging states must follow reasonable physical logic (celluloid presentation)
5. **Pure Prop Independent Display** — Only the prop itself may appear in the frame. The appearance of any person, hand, or limb is strictly prohibited. The prop must not be in a held/worn/gripped state; it must be presented independently as a still-life display

---

## II. State Types

### 2.1 Usage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Brand New | Intact, glossy as new | All props | Brand new, intact, glossy as new |
| Daily Use | Minor wear, natural usage traces (celluloidized) | All props | Daily usage traces, minor wear |
| Aged | Obvious usage feel, dull color (celluloidized) | Vessels/Accessories/Electronics | Usage traces, aged feel, dull color |

### 2.2 Damage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Minor Damage | Small cracks/chips/minor wear (celluloidized) | Glass/Ceramics/Electronics | Fine cracks, minor chips |
| Broken | Obvious cracks/fractures/shattering (celluloidized) | Glass/Ceramics/Electronics | Obvious cracks, shattered, fractured |
| Fragments | Only parts/fragments remain (celluloidized) | Glass/Ceramics/Electronics | Fragments, shards, only half remains |

### 2.3 Special States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Charging/Working | Screen lit up/indicator lights (celluloidized) | Electronics | Screen lit up, working indicator lights |
| Soaked/Wet | Water stains, wet reflections (celluloidized) | Electronics/Paper | Soaked, wet surface, reflections |
| Screen Damage | Screen cracks/display anomalies | Electronics | Screen cracks, display anomalies |
| Battery Depleted | Indicator lights off/battery icon | Electronics | Battery depleted, indicator lights off |
| Storage/Carrying | Storage bag/storage box | Accessories/Electronics | Storage bag, storage box |

---

## III. State Variant Image Specifications

### Single State Image

| Item | Constraint |
|---|---|
| Background | Pure neutral gray #E8E8E8 (consistent with the design sheet) |
| Lighting | Even lighting, no hard shadows |
| Angle | Consistent with the front view of the original design sheet |
| Ratio | Prop occupies 70%+ of the frame |

### State Comparison Image

| Item | Constraint |
|---|---|
| Layout | Display 2-3 states side-by-side in the same frame |
| Labels | Label the state name below each state |
| Consistency | Angle/lighting/background must be completely identical; only the state differs |

---

## IV. Material State Change Rules

| Material | Brand New → Daily | Daily → Aged | Damage Presentation (Celluloidized) |
|---|---|---|---|
| Metal | Bright gloss → Minor scratches | Scratches → Dull color | Chips/Bent edges/Fractures (celluloid treatment) |
| Glass | Transparency → Minor scratches | Scratches → Surface wear | Cracks/Shattering/Chipped corners (celluloid treatment) |
| Plastic | Smooth → Minor scratches | Scratches → Dull color | Cracking/Fracturing/Wear (celluloid treatment) |
| Leather | Smooth → Natural creases | Creases → Dull color | Wear/Cracks/Fading (celluloid treatment) |
| Paper | Flat → Minor wrinkles | Wrinkles → Yellowing | Tearing/Wear/Ink bleeding (celluloid treatment) |

---

## V. Prompt Templates

### Single State Variant

```
Based on the {item name} setting image, 3D animation rendering, cinematic lighting, vibrant cel-shaded texture, high-detail materials, pleasant and healing atmosphere, cartoon urban style, high-detail cartoon materials, moderate cartoon proportions, warm color palette, 8K ultra-high definition, cinematic composition, soft light and shadow layers, bright cartoon rendering style, warm and healing,
anime style, cel-shaded, 3D animation render,
{item type}, {material description},
Current state: {state name}, {state visual description},
{material surface change description}, (cel-shaded treatment)
Pure item still life display, item displayed independently, not held by anyone, not worn by anyone,
Four-panel grid in the same frame (2×2): top-left front view + top-right side view + bottom-left back view + bottom-right detail closeup,
Pure neutral gray background, uniform soft light, no hard shadows,
Clear material texture, cel-shaded rendering, state details distinguishable, cel-shaded treatment,
8K ultra-high definition, cinematic composition,
No text of any kind in the image,
No people, hands, fingers, or limbs may appear in the frame, the item must not be in a state of being held or worn
```

---

## VI. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The core shape/silhouette of the prop must be recognizable in all states |
| R2 | State changes must conform to physical logic (cel-shading) |
| R3 | A four-panel (2×2) layout must be used: top-left front view + top-right side view + bottom-left back view + bottom-right detail close-up |
| R4 | A "pure neutral gray background" must be specified, with uniform soft lighting and no hard shadows |
| R5 | 3D animation rendering keywords (cel-shaded, 3D animation render, anime style) must be included |
| R6 | 8K ultra-high-definition and cinematic composition keywords must be included |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | The prop becomes unrecognizable after state changes |
| X2 | Damage that violates physical logic (e.g., rust on electronic devices) |
| X3 | Excessively bloody or terrifying damage depictions (within the limits of cel-shading) |
| X4 | Any human figures, including full body, half body, or partial views (hands, fingers, arms, or other limbs) |
| X5 | The prop is in a state of being held, gripped, worn, or in use |
| X6 | Elements implying the presence of a person (e.g., hand-held marks, wearing perspective, usage posture) |
| X7 | Use of realistic photography terms (e.g., real photography, photorealistic, RAW photo, etc.) |
| X8 | Overly realistic damage textures that break the consistency of the cel-shaded style |
| X9 | Ancient/futuristic elements, non-modern urban style |