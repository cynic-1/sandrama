---
name: art_prop_derivative
description: Prop Derivative State Generation · Constraint Manual
metaData: art_skills
---

# Prop Derivative State Generation · Constraint Manual

---

## I. Derivation Principles

1. **Silhouette Anchoring** — The core shape/silhouette of the prop must be recognizable in all states
2. **State Legibility** — State differences must be immediately obvious, allowing the audience to distinguish them instantly
3. **Narrative Service** — Each state variant serves a specific plot point
4. **Progressive Degradation** — Damage/aging states must follow reasonable physical logic
5. **Pure Prop Independent Display** — Only the prop itself may appear in the frame. The presence of any character, hand, or limb is strictly prohibited. The prop must not be in a state of being held, worn, or gripped; it must be presented independently as a still life

---

## II. State Types

### 2.1 Usage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Brand New | Intact, glossy as new | All props | Brand new, intact, glossy as new |
| Daily Use | Minor wear, natural patina | Weapons/Artifacts/Ornaments | Signs of daily use, natural patina |
| Aged | Obvious sense of age, dull color | Artifacts/Keepsakes/Scrolls | Ancient and mottled, sense of age, dull color |

### 2.2 Damage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Minor Damage | Small cracks/chips/minor wear | Porcelain/Jade Pendants/Weapons | Fine cracks, minor chips |
| Broken | Obvious cracks/fractures/shattering | Porcelain/Ornaments/Weapons | Obvious cracks, shattered, fractured |
| Fragments | Only parts/fragments remaining | Porcelain/Jade Pendants/Keepsakes | Fragments, shards, only half remaining |

### 2.3 Special States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Bloodstained | Blood stains attached | Weapons/Keepsakes/Scrolls | Mottled bloodstains, bloodstained, anime rendering |
| Waterlogged/Wet | Water stains, wet reflection | Scrolls/Keepsakes/Paper | Waterlogged, wet paper, ink bleeding |
| Burnt/Charred | Charred edges, fire marks | Scrolls/Keepsakes/Wooden items | Charred edges, fire marks, carbonized |
| Glowing/Activated | Inner energy, radiating light | Keepsakes/Magical artifacts/Jade | Faint glow, inner radiance, cel-shading light effect |
| Wrapped/Sealed | Wrapped in cloth/box | Keepsakes/Ornaments/Secret items | Silk cloth wrapping, wooden box sealing, ancient-style packaging |

### 2.4 Environmental Adaptation States (New)

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Snow-covered | Covered in snow | Weapons/Artifacts/Keepsakes | Snow-covered, snow accumulation, winter feel |
| Rain-wet | Wet from rain | Paper/Cloth/Wooden items | Rain-wet, water stains, damp feel |
| Wind-eroded | Worn by wind and sand | Outdoor artifacts/Weapons | Wind and sand marks, wear, sense of age |
| Rusted | Metal oxidation | Weapons/Metal ornaments | Rusted spots, oxidation, sense of years |

---

## III. State Variant Image Specifications

### Single State Image

| Item | Constraint |
|---|---|
| Background | Moon-white solid color #E8EAF5 (consistent with the design sheet) |
| Lighting | Even lighting, no hard shadows |
| Angle | Consistent with the front view of the original design sheet |
| Ratio | Prop occupies 70%+ of the frame |

### State Comparison Image

| Item | Constraint |
|---|---|
| Layout | Display 2-3 states side-by-side in the same frame |
| Labeling | Label the state name below each state |
| Consistency | Angle/lighting/background must be identical; only the state differs |

---

## IV. Material State Change Rules

| Material | Brand New → Daily | Daily → Aged | Damage Manifestation |
|---|---|---|---|
| Metal | Bright gloss → Slight patina | Patina → Rust spots | Chips/Dulled edge/Fracture |
| Jade | Translucent and warm → Minor wear | Wear → Surface micro-cracks | Cracks/Shattering/Chipped corner |
| Wood | New wood grain → Natural patina | Patina → Dull color | Cracking/Fracture/Insect damage |
| Porcelain | Glaze gloss → Minor scratches | Scratches → Dull glaze | Cracks/Shattering/Chips |
| Cloth/Paper | Brand new and flat → Minor wrinkles | Wrinkles → Yellowing and brittleness | Tearing/Charring/Ink bleeding |

---

## V. Prompt Templates

### Single State Variant

Based on the {Prop Name} design sheet, Chinese-style anime prop derivative state,
Chinese-style anime, New Chinese Chic aesthetic, Japanese animation rendering, cel-shading flat color, delicate brushstrokes,
{Prop Type}, {Material Description},
Current state: {State Name}, {State Visual Description},
{Material Surface Change Description},
Pure prop still life display, prop displayed independently, no one holding, no one wearing,
Four-panel grid (2×2) in the same frame: Top-left front view + Top-right side view + Bottom-left back view + Bottom-right detail closeup,
Moon-white solid color background, even soft light, no hard shadows,
Ultra-clear material texture, delicate quality, distinguishable state details,
Chinese-style anime high-resolution rendering, high detail, delicate lines, cel-shading flat color feel,
No subtitles, no watermarks, no title overlays in the frame,
No characters, hands, fingers, or limbs may appear in the frame; the prop must not be in a state of being gripped or worn

---

## VI. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The core shape/silhouette of the prop must be recognizable in all states |
| R2 | State changes must conform to physical logic |
| R3 | Must use a four-panel grid (2×2) layout: Front + Side + Back + Closeup |
| R4 | Must specify "Moon-white solid color background", even soft light, no hard shadows |
| R5 | Must include the keywords "Chinese-style anime + cel-shading flat color" |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Prop becomes unrecognizable after state change |
| X2 | Damage violating physical logic (e.g., rust on jade) |
| X3 | Excessively bloody or horrific damage depiction |
| X4 | Appearance of any character figure, including full body, half body, or partial limbs (hands, fingers, arms, etc.) |
| X5 | Prop in a state of being held, gripped, worn, or in use |
| X6 | Appearance of elements implying the presence of a character (e.g., hand-holding marks, wearing perspective, usage posture) |