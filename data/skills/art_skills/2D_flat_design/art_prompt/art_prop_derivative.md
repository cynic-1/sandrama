# Prop Derived State Generation · Flat Style Constraint Manual

---

## I. Derivation Principles

1. **Silhouette Anchoring** — The core shape/silhouette of the prop must be recognizable in all states
2. **State Readability** — State differences must be immediately obvious, allowing the audience to distinguish them instantly
3. **Narrative Service** — Each state variant serves a specific plot point
4. **Progressive Degradation** — Damage/aging states must follow reasonable physical logic
5. **Pure Prop Independent Display** — Only the prop itself may appear in the frame. The presence of any characters, hands, or limbs is strictly prohibited. The prop must not be in a held/worn/gripped state; it must be presented independently as a still-life display

---

## II. State Types

### 2.1 Usage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Brand New | Intact, solid color as new | All props | Flat brand new, intact, solid color as new |
| Daily Use | Minor wear, simple color block changes | Weapons/Vessels/Ornaments | Flat usage traces, simple wear |
| Aged | Obvious sense of age, dull colors | Vessels/Keepsakes/Scrolls | Flat aged, sense of age, dull colors |

### 2.2 Damage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Minor Damage | Small cracks/chips/light wear | Porcelain/Jade Pendants/Weapons | Flat minor damage, simple cracks |
| Broken | Obvious cracks/fractures/shattering | Porcelain/Ornaments/Weapons | Flat broken, simple fracture |
| Fragments | Only parts/fragments remaining | Porcelain/Jade Pendants/Keepsakes | Flat fragments, simple shards |

### 2.3 Special States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Bloodstained | Red color blocks attached | Weapons/Clothing/Keepsakes | Flat bloodstained, red traces |
| Soaked/Wet | Color bleeding, wet appearance | Scrolls/Keepsakes/Clothing | Flat soaked, color bleeding |
| Burnt/Charred | Black edges, flat burn marks | Scrolls/Keepsakes/Wooden items | Flat charred, simple burn |
| Glowing/Activated | Simple glowing color blocks, simple light | Keepsakes/Magical Tools/Jade | Flat glowing, simple light |
| Wrapped/Sealed | Wrapped in cloth/box | Keepsakes/Ornaments/Secret Items | Flat wrapped, simple sealed |

---

## III. State Variant Image Specifications

### Single State Image

| Item | Constraint |
|---|---|
| Background | Pure neutral gray #E8E8E8 (consistent with the design sheet) |
| Lighting | No shadows, pure flat color blocks |
| Angle | Consistent with the front view of the original design sheet |
| Ratio | Prop occupies 70%+ of the main frame |

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
| Metal | Solid color → Simple patina color blocks | Patina → Simple rust color blocks | Simple chips/chipped edges/fractures |
| Jade | Solid color → Simple wear color blocks | Wear → Simple surface cracks | Simple cracks/shattering/chipped corners |
| Wood | Solid color → Simple patina color blocks | Patina → Dull color | Simple cracking/fracture/insect damage |
| Porcelain | Solid color → Simple scratch color blocks | Scratches → Dull glaze color blocks | Simple cracks/shattering/chips |
| Cloth/Paper | Solid color flat → Simple wrinkle color blocks | Wrinkles → Yellowed/brittle color blocks | Simple tearing/burning/bleeding |

---

## V. Prompt Templates

### Single State Variant

```
Based on the {item name} setting image,
2d flat design, vector art, flat illustration,
minimalist, clean lines, solid colors,
{item type}, {material description},
Current state: {state name}, {state visual description},
{material surface change description},
Pure item still life display, item displayed independently, not held, not worn,
Four-panel grid in the same frame (2×2): top-left front view + top-right side view + bottom-left back view + bottom-right detail closeup,
Pure neutral gray background, no shadows, no gradients,
Clear lines, distinct color blocks, state details distinguishable
No text in the image,
No people, hands, fingers, or limbs in the frame, the item must not be in a held or worn state
```


---

## VI. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The core design/outline of the prop must be recognizable in all states |
| R2 | State changes must conform to physical logic |
| R3 | A four-panel (2×2) layout must be used: top-left front view + top-right side view + bottom-left back view + bottom-right detail close-up |
| R4 | A "pure neutral gray background" must be specified, with no lighting/shadows and no gradients |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | The prop becoming unrecognizable after a state change |
| X2 | Damage that violates physical logic (e.g., jade rusting) |
| X3 | Excessively bloody or terrifying depictions of damage |
| X4 | The appearance of any human figures, including full-body, half-body, or partial views (hands, fingers, arms, or other limbs) |
| X5 | The prop being in a state of being held, gripped, worn, or in use |
| X6 | The appearance of elements implying the presence of a person (e.g., hand-holding marks, wearing perspective, usage posture) |
| X7 | Adding gradient/shadow/highlight/3D effects |
| X8 | State changes being overly complex or color blocks being indistinct |
