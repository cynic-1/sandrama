# 2D Prop Derivative State Generation · Constraint Manual

---

## I. Derivation Principles

1. **Silhouette Anchoring** — The core shape/silhouette of the prop must be recognizable in all states.
2. **State Legibility** — State differences must be immediately obvious, allowing the audience to distinguish them instantly.
3. **Narrative Service** — Each state variant serves a specific plot point.
4. **Progressive Degradation** — Damage/aging states must follow reasonable physical logic.
5. **Pure Prop Independent Display** — Only the prop itself may appear in the frame. Any characters, hands, or limbs are strictly prohibited. The prop must not be in a held/worn/gripped state; it must be presented independently as a still-life display.

---

## II. State Types

### 2.1 Usage States

| State | Description | Applicable Props | Prompt Keywords |
|---|---|---|---|
| Brand New | Intact, glossy as new | All props | Brand new, intact, glossy as new |
| Daily Use | Minor wear, natural patina | Office supplies/utensils/personal items | Daily use marks, natural wear |
| Aged | Obvious sense of age, dull color | Household items/personal items | Old and mottled, sense of age, dull color |

### 2.2 Damage States

| State | Description | Applicable Props | Prompt Keywords |
|---|---|---|---|
| Minor Damage | Small cracks/chips/minor wear | Glass cups/phone screens/notebooks | Fine cracks, minor chips |
| Broken | Obvious cracks/fractures/shattering | Glass/ceramics/plastics | Obvious cracks, shattered, fractured |
| Fragments | Only parts/fragments remaining | Glass/ceramics/keepsakes | Fragments, shards, only half remaining |

### 2.3 Special States

| State | Description | Applicable Props | Prompt Keywords |
|---|---|---|---|
| Stains | Stains attached/liquid residue | Cups/clothing/paper | Stain residue, liquid marks |
| Fingerprints | Fingerprints, usage marks | Phone screens/glass cups/metal surfaces | Clear fingerprints, usage marks |
| Wear | Edge wear, paint peeling | Electronic devices/furniture/accessories | Edge wear, paint peeling marks |
| Folding | Scroll/paper folding marks | Books/paper/keepsakes | Folding marks, obvious creases |
| Water Stains | Water stains, wet reflection | Paper/clothing/fabric | Water stain residue, wet reflection |

---

## III. State Variant Visual Standards

### Single State Image

| Item | Constraint |
|---|---|
| Background | Pure neutral gray `#E8E8E8` (consistent with the design sheet) |
| Lighting | Even lighting, no hard shadows |
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

| Material | Brand New → Daily | Daily → Aged | Damage Manifestation |
|---|---|---|---|
| Metal | Bright gloss → Minor scratches | Scratches → Oxidation spots | Chips/curling/fractures |
| Glass | Transparent and clear → Minor scratches | Scratches → Cracks/shattering | Cracks/shattering/chips |
| Wood | New wood grain → Natural patina | Patina → Dull color | Cracking/woodworm damage/wear |
| Plastic | Brand new and flat → Minor scratches | Scratches → Aging discoloration | Cracks/deformation/fading |
| Paper | Brand new and flat → Minor creases | Creases → Yellowing and brittleness | Tearing/scorching/stains |
| Ceramic | Glaze gloss → Minor scratches | Scratches → Dull glaze | Cracks/shattering/chips |

---

## V. Prompt Templates

### Single State Variant

Based on the {Prop Name} design sheet,
anime style, cel shading, modern urban style,
cinematic composition, ultra detailed, 8K, high quality,
shallow depth of field, film grain, lens vignette,
cel animation style, modern urban vibe, dramatic low-key lighting,
prop derivative design sheet, item concept art, no people, no characters, no human figures,
{Prop Type}, {Material Description},
Current state: {State Name}, {State Visual Description},
{Material Surface Change Description},
Pure prop still-life display, prop displayed independently, no one holding, no one wearing,
Four-panel grid (2×2) in the same frame: Top-left front view + Top-right side view + Bottom-left back view + Bottom-right detail closeup,
Pure neutral gray background, even soft light, no hard shadows,
Ultra-clear material texture, cel shading quality, state details discernible
No text of any kind in the image,
No characters, hands, fingers, or limbs may appear in the frame; the prop must not be in a gripped or worn state

---

## VI. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The core shape/silhouette of the prop must be recognizable in all states |
| R2 | State changes must conform to physical logic |
| R3 | Must use a four-panel grid (2×2) layout: Top-left front view + Top-right side view + Bottom-left back view + Bottom-right detail closeup |
| R4 | Must specify "pure neutral gray background", even soft light, no hard shadows |
| R5 | Must include "2D animation style" keywords (anime style / cel shading) |
| R6 | Must include depth-of-field features (at least one of shallow depth of field / vignette), maintaining the cel animation style |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Prop becomes unrecognizable after state change |
| X2 | Damage violating physical logic (e.g., metal rusting in ways inconsistent with the material) |
| X3 | Excessively bloody or horrifying damage depictions |
| X4 | Appearance of any character figures, including full body, half body, or partial (hands, fingers, arms, etc.) |
| X5 | Prop in a held, gripped, worn, or in-use state |
| X6 | Elements implying the presence of a person (e.g., hand-held marks, wearing perspective, usage posture) |
| X7 | Use of live-action realism/photography/3D rendering related terms |
| X8 | High-saturation fluorescent/neon colors |