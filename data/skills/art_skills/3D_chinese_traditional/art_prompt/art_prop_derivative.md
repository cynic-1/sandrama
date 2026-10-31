---
name: art_prop_derivative
description: Prop Derivative State Generation · Constraint Manual
metaData: art_skills
---

# Prop Derivative State Generation · Constraint Manual

---

## I. Derivation Principles

1. **Form Anchoring** — The core form/silhouette of the prop must be recognizable in all states
2. **State Readability** — State differences must be immediately obvious, allowing the audience to distinguish them instantly
3. **Narrative Service** — Each state variant serves a specific plot point
4. **Progressive Degradation** — Damage/aging states must follow reasonable physical logic
5. **Pure Prop Independent Display** — Only the prop itself may appear in the frame. Any characters, hands, or limbs are strictly prohibited. The prop must not be in a held/worn/gripped state; it must be presented independently as a still life

---

## II. State Types

### 2.1 Usage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Brand New | Intact, glossy as new | All props | Brand new, intact, glossy as new |
| Daily Use | Minor wear, natural patina | Weapons/Artifacts/Ornaments | Daily use marks, natural patina |
| Aged | Obvious sense of age, dull color | Artifacts/Keepsakes/Scrolls | Ancient and mottled, sense of age, dull color |

### 2.2 Damage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Minor Damage | Small cracks/chips/minor wear | Porcelain/Jade pendants/Weapons | Fine cracks, minor chips |
| Broken | Obvious cracks/breaks/shattering | Porcelain/Ornaments/Weapons | Obvious cracks, shattered, broken |
| Fragments | Only parts/fragments remain | Porcelain/Jade pendants/Keepsakes | Fragments, shards, only half remains |

### 2.3 Special States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Bloodstained | Blood traces attached | Weapons/Clothing/Keepsakes | Mottled bloodstains, bloodstained |
| Soaked/Wet | Water stains, wet reflection | Scrolls/Keepsakes/Clothing | Soaked, wet paper, ink bleeding |
| Burnt/Charred | Charred edges, fire marks | Scrolls/Keepsakes/Wooden items | Charred edges, fire marks |
| Glowing/Activated | Inner energy, radiating light | Keepsakes/Magical artifacts/Jade | Faint glow, inner radiance |
| Wrapped/Sealed | Wrapped in cloth/box | Keepsakes/Ornaments/Secret items | Silk cloth wrapped, wooden box sealed |

---

## III. State Variant Visual Standards

### Single State Image

| Item | Constraint |
|---|---|
| Background | Plain gray solid color #B8B8B8 (consistent with the design sheet) |
| Lighting | Even illumination, no hard shadows |
| Angle | Consistent with the front view of the original design sheet |
| Ratio | Prop occupies 70%+ of the main frame |

### State Comparison Image

| Item | Constraint |
|---|---|
| Layout | Display 2-3 states side-by-side in the same frame |
| Labeling | Label the state name below each state |
| Consistency | Angle/lighting/background must be completely identical; only the state differs |

---

## IV. Material State Change Rules

| Material | Brand New → Daily Use | Daily Use → Aged | Damage Manifestation |
|---|---|---|---|
| Metal | Bright gloss → Slight patina | Patina → Rust spots | Chips/Bent edges/Breaks |
| Jade | Translucent and warm → Slight wear | Wear → Surface micro-cracks | Cracks/Shattering/Chipped corners |
| Wood | New wood grain → Natural patina | Patina → Dull color | Cracks/Breaks/Insect damage |
| Porcelain | Glaze gloss → Minor scratches | Scratches → Dull glaze | Cracks/Shattering/Chips |
| Cloth/Paper | Brand new and flat → Slight wrinkles | Wrinkles → Yellowing and brittleness | Tears/Charred edges/Ink bleeding |

---

## V. Prompt Templates

### Single State Variant

Based on the {Prop Name} design sheet, 3D rendering style, high-precision modeling, PBR materials, Chinese-style 3D, cinematic lighting,
{Prop Type}, {Material Description},
Current state: {State Name}, {State Visual Description},
{Material Surface Change Description},
Pure prop still life display, prop displayed independently, no one holding, no one wearing,
Four-grid layout in the same frame (2×2): Top-left front view + Top-right side view + Bottom-left back view + Bottom-right detail closeup,
Plain gray solid color background, even soft light, no hard shadows,
Ultra-clear material textures, PBR material rendering, state details distinguishable
No text of any kind in the image,
No characters, hands, fingers, or limbs may appear in the frame; the prop must not be in a held or worn state

---

## VI. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The core form/silhouette of the prop must be recognizable in all states |
| R2 | State changes must conform to physical logic |
| R3 | Must use a four-grid (2×2) layout: Top-left front view + Top-right side view + Bottom-left back view + Bottom-right detail closeup |
| R4 | Must specify "plain gray solid color background," even soft light, no hard shadows |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Prop becomes unrecognizable after state change |
| X2 | Damage violating physical logic (e.g., jade rusting) |
| X3 | Excessively bloody/horror-themed damage depiction |
| X4 | Appearance of any character figures, including full body, half body, or partial (hands, fingers, arms, etc.) |
| X5 | Prop in a held, gripped, worn, or in-use state |
| X6 | Appearance of elements implying the presence of a person (e.g., hand-held marks, wearing perspective, usage posture) |

