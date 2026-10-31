# Clay Stop-Motion Prop Derivative State Generation · Constraint Handbook

---

## I. Derivation Principles

1. **Form Anchoring** — The core form/silhouette of the prop must be recognizable in all states
2. **State Readability** — State differences must be immediately obvious
3. **Narrative Service** — Each state variant serves a specific plot point
4. **Progressive Degradation** — Damage/aging states should follow reasonable physical logic
5. **Pure Prop Independent Display** — Only the prop itself should appear in the frame

---

## II. State Types

### 2.1 Usage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Brand New | Intact, matte and warm | All props | Brand new, intact, warm texture |
| Daily Use | Minor wear, natural patina | Weapons/Vessels/Ornaments | Daily use marks, natural patina |
| Aged | Obvious sense of age, soft color tones | Vessels/Keepsakes/Scrolls | Ancient and mottled, sense of age, soft color tones |

### 2.2 Damage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Minor Damage | Small cracks/chips/light wear | Porcelain/Jade pendants/Weapons | Fine cracks, minor chips |
| Broken | Obvious cracks/fractures/shattering | Porcelain/Ornaments/Weapons | Obvious cracks, shattered, fractured |
| Fragments | Only parts/fragments remain | Porcelain/Jade pendants/Keepsakes | Fragments, shards, only half remains |

### 2.3 Special States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Bloodstained | Blood stains attached | Weapons/Clothing/Keepsakes | Mottled bloodstains, bloodstained |
| Waterlogged/Wet | Water stains, wet reflection | Scrolls/Keepsakes/Clothing | Waterlogged, wet paper, ink bleeding |
| Burnt/Charred | Charred edges, fire marks | Scrolls/Keepsakes/Wooden items | Charred edges, fire marks |
| Glowing/Activated | Inner energy, faint glow | Keepsakes/Magical artifacts/Jade | Faint glow, inner radiance |
| Wrapped/Sealed | Wrapped in cloth/box | Keepsakes/Ornaments/Secret items | Silk cloth wrapped, wooden box sealed |

---

## III. State Variant Image Specifications

### Single State Image

| Item | Constraint |
|---|---|
| Background | Pure neutral gray #E8E8E8 (consistent with the design sheet) |
| Lighting | Warm-toned soft light, no hard shadows |
| Angle | Consistent with the front view of the original design sheet |
| Scale | Prop occupies 70%+ of the main frame |

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
| Clay | Matte and warm → Minor wear | Wear → Soft, dull color tones | Chips/Cracks/Shattering |
| Wood | New wood grain → Natural patina | Patina → Darkened color tones | Cracking/Fracturing/Worm damage |
| Ceramic | Warm glaze → Minor scratches | Scratches → Dull glaze | Cracks/Shattering/Chips |
| Metal | Slight sheen → Slight patina | Patina → Oxidation marks | Chips/Dulled edge/Fracturing |
| Cloth/Paper | Brand new and flat → Minor wrinkles | Wrinkles → Yellowing and brittleness | Tearing/Charred edges/Ink bleeding |

---

## V. Prompt Templates

### Single State Variant

```
Based on the {item name} setting image, clay stop-motion animation ancient-style prop derivative state, stop-motion animation style, 3D cartoon rendering, warm-toned lighting,
{item type}, {material description},
Current state: {state name}, {state visual description},
{material surface change description},
Pure prop still life display, prop displayed independently, not held by anyone, not worn by anyone,
Four-panel grid in the same frame (2×2): top-left front view (front view) + top-right side view (side view) + bottom-left back view (back view) + bottom-right detail closeup (detail closeup),
Pure neutral gray background, warm soft light, no hard shadows,
Ultra-clear material texture, clay matte texture, state details distinguishable
No text of any kind in the image,
No people, hands, fingers, or limbs may appear in the frame, the prop must not be in a held or worn state
```

---

## VI. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The core design/outline of the prop must be recognizable in all states |
| R2 | State changes must conform to physical logic |
| R3 | A four-panel (2×2) layout must be used |
| R4 | A "pure neutral gray background" with warm soft lighting and no hard shadows must be specified |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | The prop becomes unrecognizable after state changes |
| X2 | Damage that violates physical logic |
| X3 | Excessively gory or terrifying depictions of damage |
| X4 | Any depiction of human figures |
| X5 | The prop being in a state of being held, worn, or in use |
| X6 | Cold, hard lighting or high contrast |