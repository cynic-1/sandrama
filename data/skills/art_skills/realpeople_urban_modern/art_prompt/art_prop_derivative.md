# Prop Derived State Generation · Constraint Manual (Live-Action Urban Edition)

---

## I. Derivation Principles

1. **Silhouette Anchoring** — The core shape/silhouette of the prop must be recognizable in all states
2. **State Readability** — State differences must be immediately obvious, allowing the audience to distinguish them instantly
3. **Narrative Service** — Each state variant serves a specific plot point
4. **Progressive Degradation** — Damage/aging states should follow reasonable physical logic

---

## II. State Types

### 2.1 Usage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Brand New | Intact, glossy as new | All props | Brand new, intact, glossy as new |
| Daily Use | Minor wear, natural traces | Electronics/Daily necessities | Daily use traces, natural wear |
| Aged | Visible usage marks, aging | Leather goods/Textiles | Usage marks, natural aging |

### 2.2 Damage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Minor Damage | Small scratches/small cracks | Phones/Notebooks | Fine scratches, slight cracks |
| Broken | Obvious cracks/breaks | Electronics/Glassware | Obvious cracks, shattered |
| Fragments | Only parts/fragments remain | Glass/Ceramics | Fragments, shards |

### 2.3 Special States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Stains | Stains attached | All props | Stains, dirt |
| Water Stains | Water stains, wet reflection | Paper goods/Textiles | Water stains, wet traces |
| Scratches | Obvious scratches | Metal/Glass | Obvious scratches, scrape marks |
| Wear | Surface wear | Leather/Textiles | Wear marks, aging |
| Broken Screen | Screen shattered | Electronics | Screen shattered, cracks |

---

## III. State Variant Visual Specifications

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
| Labeling | Label the state name below each state |
| Consistency | Angle/lighting/background must be identical; only the state differs |

---

## IV. Material State Change Rules

| Material | Brand New → Daily | Daily → Aged | Damage Manifestation |
|---|---|---|---|
| Metal | Bright gloss → Minor scratches | Scratches → Oxidation spots | Dents/Bending/Breaks |
| Glass | Transparent → Minor scratches | Scratches → Obvious cracks | Shattered/Chipped |
| Plastic | New gloss → Minor wear | Wear → Fading | Cracks/Deformation |
| Leather | Smooth → Minor wrinkles | Wrinkles → Cracks | Tears/Wear |
| Textile | Brand new → Minor wrinkles | Wrinkles → Fading | Tears/Stains |

---

## V. Prompt Templates

### Single State Variant

```

Based on the {prop name} design image, live-action realistic photography style, natural lighting, extreme detail,
{Prop Type}, {Material Description},
Current status: {status name}, {status visual description},
{Description of material surface changes},
Same frame, four-quadrant grid (2×2): top-left front view + top-right side view + bottom-left back view + bottom-right close-up detail,
Pure neutral gray background, even soft lighting, no hard shadows,
Ultra-clear material textures, realistic quality, and discernible state details

```


---

## VI. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The core shape/outline of the prop must be recognizable in all states |
| R2 | State changes must conform to physical logic |
| R3 | A four-panel (2×2) layout must be used |
| R4 | A "pure neutral gray background" must be specified, with even soft lighting and no hard shadows |

### Strictly Prohibited

| ID | Prohibition |
|---|---|
| X1 | The prop becoming unrecognizable after a state change |
| X2 | Damage that violates physical logic (e.g., metal rusting) |
| X3 | Excessive damage rendering the prop unrecognizable |
