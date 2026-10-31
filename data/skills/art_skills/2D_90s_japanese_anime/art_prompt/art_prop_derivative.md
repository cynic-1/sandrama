# 90s Retro Japanese Animation Style - Prop Derivative State Generation · Constraint Manual

---

## I. Derivation Principles

1. **Form Anchoring** — The core form/silhouette of the prop must be recognizable in all states
2. **State Readability** — State differences must be immediately obvious
3. **Narrative Service** — Each state variant serves a specific plot point
4. **Progressive Degradation** — Damage/aging states should follow reasonable physical logic
5. **Pure Prop Independent Display** — Only the prop itself may appear in the frame; any characters, hands, or limbs are strictly prohibited

---

## II. State Types

### 2.1 Usage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Brand New | Intact, glossy as new | All props | Brand new, intact |
| Daily Use | Minor wear, natural patina | Weapons/Artifacts/Ornaments | Daily use marks, minor wear |
| Aged | Obvious sense of age, dull color | Artifacts/Keepsakes/Scrolls | Old, aged |

### 2.2 Damage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Minor Damage | Small cracks/chips/minor wear | Porcelain/Jade pendants/Weapons | Fine cracks, minor chips |
| Broken | Obvious cracks/fractures/shattering | Porcelain/Ornaments/Weapons | Obvious cracks, shattered |
| Fragments | Only parts/fragments remain | Porcelain/Jade pendants/Keepsakes | Fragments, shards |

### 2.3 Special States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Bloodstained | Blood traces attached | Weapons/Keepsakes | Bloodstains, bloodstained |
| Waterlogged/Wet | Water stains, wet reflection | Scrolls/Keepsakes/Clothing | Waterlogged, wet |
| Burnt/Charred | Charred edges, fire burn marks | Scrolls/Keepsakes/Wooden items | Charred edges, fire burn marks |
| Glowing/Activated | Inner energy, radiating light | Keepsakes/Magical tools/Jade | Faint glow, inner radiance |
| Wrapped/Sealed | Wrapped in cloth/box | Keepsakes/Ornaments/Secret items | Wrapped, sealed |

---

## III. State Variant Visual Specifications

### Single State Image

| Item | Constraint |
|---|---|
| Background | Warm off-white #F8F4E8 (consistent with the design sheet) |
| Lighting | Soft cinematic light, even illumination, no hard shadows |
| Angle | Consistent with the front view of the original design sheet |
| Ratio | Prop occupies 70%+ of the frame |

### State Comparison Image

| Item | Constraint |
|---|---|
| Layout | Display 2-3 states side-by-side in the same frame |
| Labels | Label the state name below each state |
| Consistency | Angle/lighting/background must be identical; only the state differs |

---

## IV. Material State Change Rules

| Material | Brand New → Daily | Daily → Aged | Damage Manifestation |
|---|---|---|---|
| Metal | Bright gloss → Slight patina | Patina → Rust spots | Chips/Bent edges/Fractures |
| Jade | Translucent and warm → Minor wear | Wear → Surface micro-cracks | Cracks/Shattering/Chipped corners |
| Wood | New wood grain → Natural patina | Patina → Dull color | Cracks/Fractures/Insect damage |
| Porcelain | Glaze gloss → Minor scratches | Scratches → Dull glaze | Cracks/Shattering/Chips |
| Cloth/Paper | Brand new and flat → Minor creases | Creases → Yellowing and brittleness | Tears/Charred damage |

---

## V. Prompt Templates

### Single State Variant

```
Based on the {item name} setting image, 90s retro Japanese anime style, hand-drawn flat coloring, soft warm tones,
{item type}, {material description},
Current state: {state name}, {state visual description},
{material surface change description},
Pure item still life display, item displayed independently, not held by anyone, not worn by anyone,
Four-panel grid in the same frame (2×2): top-left front view + top-right side view + bottom-left back view + bottom-right detail closeup,
Warm beige-white background, soft cinematic lighting, even soft light, no hard shadows,
Ultra-clear material texture, hand-drawn texture, state details discernible
No text of any kind in the image,
No people, hands, fingers, or limbs may appear in the frame, the item must not be in a held or worn state
```

---

## VI. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The core design/silhouette of the prop must be recognizable in all states |
| R2 | State changes must conform to physical logic |
| R3 | A four-panel (2×2) layout must be used |
| R4 | A "warm-toned off-white background" with soft cinematic lighting must be specified |

### Strictly Prohibited

| ID | Prohibition |
|---|---|
| X1 | The prop becoming unrecognizable after a state change |
| X2 | Damage that violates physical logic |
| X3 | Excessively gory or horrifying depictions of damage |
| X4 | The appearance of any human figures |
| X5 | The prop being in a state of being held, gripped, worn, or in use |
| X6 | The appearance of elements implying the presence of a person |