# Prop Derived State Generation · Constraint Manual

---

## 1. Derivation Principles

1. **Silhouette Anchoring** — The core shape/silhouette of the prop must remain recognizable across all states
2. **State Readability** — State differences must be immediately obvious, allowing the audience to distinguish them instantly
3. **Narrative Service** — Each state variant serves a specific plot point
4. **Progressive Degradation** — Damage/aging states must follow reasonable physical logic
5. **Pure Prop Independent Display** — Only the prop itself may appear in the frame. The presence of any person, hand, or limb is strictly prohibited. The prop must not be in a held/worn/gripped state; it must be presented independently as a still-life display

---

## 2. State Types

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
| Bloodstained | Blood stains attached | Weapons/Clothing/Keepsakes | Mottled bloodstains, bloodstained |
| Waterlogged/Wet | Water stains, wet reflection | Scrolls/Keepsakes/Clothing | Waterlogged, wet paper, ink bleeding |
| Burnt/Charred | Charred edges, fire marks | Scrolls/Keepsakes/Wooden Items | Charred edges, fire marks |
| Glowing/Activated | Inner energy, radiating light | Keepsakes/Magical Artifacts/Jade | Faint glow, inner radiance |
| Wrapped/Sealed | Wrapped in cloth/boxed | Keepsakes/Ornaments/Secret Items | Silk cloth wrapped, wooden box sealed |

---

## 3. State Variant Visual Standards

### Single State Image

| Item | Constraint |
|---|---|
| Background | Pure neutral gray #E8E8E8 (consistent with the design sheet) |
| Lighting | Even illumination, no hard shadows |
| Angle | Consistent with the front view of the original design sheet |
| Scale | Prop occupies 70%+ of the frame |

### State Comparison Image

| Item | Constraint |
|---|---|
| Layout | Display 2-3 states side-by-side in the same frame |
| Labeling | Label the state name below each state |
| Consistency | Angle/lighting/background must be identical; only the state differs |

---

## 4. Material State Change Rules

| Material | Brand New → Daily | Daily → Aged | Damage Manifestation |
|---|---|---|---|
| Metal | Bright gloss → Slight patina | Patina → Rust spots | Chips/burred edges/fractures |
| Jade | Translucent and warm → Minor wear | Wear → Surface micro-cracks | Cracks/shattering/chipped corners |
| Wood | New wood grain → Natural patina | Patina → Dull color | Cracking/fracturing/insect damage |
| Porcelain | Glaze gloss → Minor scratches | Scratches → Dull glaze | Cracks/shattering/chips |
| Cloth/Paper | Brand new and flat → Minor wrinkles | Wrinkles → Yellowing and brittleness | Tearing/charred edges/ink bleeding |

---

## 5. Prompt Templates

### Single State Variant

```
Based on the {item name} setting image, realistic live-action photography style, ancient-style realistic documentary, high contrast, extreme detail,
{item type}, {material description},
Current state: {state name}, {state visual description},
{material surface change description},
Pure item still life display, item displayed independently, not held by anyone, not worn by anyone,
Four-panel grid in the same frame (2×2): top-left front view + top-right side view + bottom-left back view + bottom-right detail closeup,
Pure neutral gray background, uniform soft light, no hard shadows,
Ultra-clear material texture, realistic texture, state details discernible
No text of any kind in the image,
No people, hands, fingers, or limbs may appear in the frame, the item must not be in a state of being held or worn
```

---

## VI. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The core shape/outline of the prop must be recognizable in all states |
| R2 | State changes must conform to physical logic |
| R3 | A four-panel (2×2) layout must be used: top-left front view + top-right side view + bottom-left back view + bottom-right detail close-up |
| R4 | A "pure neutral gray background" must be specified, with even soft lighting and no hard shadows |

### Prohibited

| ID | Prohibited |
|---|---|
| X1 | The prop becoming unrecognizable after a state change |
| X2 | Damage that violates physical logic (e.g., jade rusting) |
| X3 | Overly gory or horrifying depictions of damage |
| X4 | Any depiction of human figures, including full body, half body, or partial views (hands, fingers, arms, or other limbs) |
| X5 | The prop being in a state of being held, gripped, worn, or in use |
| X6 | Elements implying the presence of a person (e.g., hand-holding marks, wearing perspective, usage posture) |


