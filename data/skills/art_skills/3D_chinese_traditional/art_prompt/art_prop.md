---
name: art_prop
description: Prop Image Generation · Constraint Manual
metaData: art_skills
---

# Prop Image Generation · Constraint Manual

---

## I. Prop Design Principles

1. **Functional Readability** — The purpose of the prop is immediately clear; the form serves the function.
2. **Ultimate Texture** — Material textures must be clearly distinguishable (metal/jade/wood/cloth/paper).
3. **Period Consistency** — All props must conform to the ancient-style worldview; modern elements are prohibited.
4. **Clear Scale** — The real size of the prop is implied through reference objects or annotations.
5. **Pure Prop Independent Display** — Only the prop itself may appear in the frame. The appearance of any person, hand, or limb is strictly prohibited. The prop must not be in a state of being held, worn, or gripped; it must be presented independently in a still-life display manner.

---

## II. Prop Categories and Aesthetic Constraints

### 2.1 Weapons

| Item | Constraint | Prompt |
|---|---|---|
| Type | Sword/Dagger/Bow/Spear/Fan | {weapon type}, ancient-style weapon |
| Material | Refined steel/Black iron + gemstone inlay + silk sword tassel | Refined steel forging, gemstone inlay |
| Decoration | Carved sheath/hilt, tassels, hidden patterns | Intricate carving, hanging tassels |
| Sheen | Cold metallic sheen, blade edge reflection | Cold sheen, metallic texture |
| Prompt | Ancient-style {weapon}, refined steel forging, intricate carving | — |

### 2.2 Ornaments

| Item | Constraint | Prompt |
|---|---|---|
| Type | Hairpin/Tiara/Necklace/Jade Pendant/Bracelet/Earring | {ornament type}, ancient-style jewelry |
| Material | Gold/Silver/Jade/Pearl/Gemstone | Gold wire weaving, translucent jade |
| Craftsmanship | Ultimate precision, filigree/enamel/inlay | Fine craftsmanship, meticulous carving |
| Sheen | Pearl luster/Jade gloss/Metallic sheen | Lustrous pearl, metallic sheen |
| Prompt | Ancient-style {ornament}, {material}, fine craftsmanship, meticulous carving | — |

### 2.3 Daily Artifacts

| Item | Constraint | Prompt |
|---|---|---|
| Type | Tea set/Wine set/Incense burner/Chessboard/Scroll/Lantern | {artifact type}, ancient-style artifact |
| Material | Porcelain/Copper/Bamboo/Wood/Paper | Warm celadon, rustic purple copper |
| Texture | Clear glaze/wood grain/bamboo nodes | Glaze sheen, clear wood grain |
| Style | Elegant/Luxurious depending on scene | Elegant and rustic / Luxurious and refined |
| Prompt | Ancient-style {artifact}, {material} texture, clear texture | — |

### 2.4 Tokens / Key Props

| Item | Constraint | Prompt |
|---|---|---|
| Type | Token/Tally/Scroll/Medicine bottle/Jade seal | {prop type}, ancient-style prop |
| Uniqueness | Must have recognizability and narrative symbolic meaning | Unique form, profound symbolism |
| Aging | Age can be added according to plot needs | Old and mottled / Brand new and refined |
| Prompt | Ancient-style {prop}, {material}, {state}, unique form | — |

---

## III. Multi-Angle Setup Diagram Specifications

### View Definitions

| Position | View | Angle | Requirement | Prompt |
|---|---|---|---|---|
| Top Left | Front View | Front 0° | Complete front form of the prop | front view |
| Top Right | Side View | Side 90° | Clear thickness/outline/structure | side view |
| Bottom Left | Back View | Back 180° | Back structure/decoration of the prop | back view |
| Bottom Right | Detail Close-up | Local magnification | Material texture/craftsmanship details | detail closeup |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four-panel grid (2×2) in the same frame: top, bottom, left, right views |
| Background | Plain gray solid color #B8B8B8 |
| Lighting | Even soft light, no hard shadows |
| Ratio | Prop occupies 70%+ of the main subject in each panel |
| Shadow | Natural subtle ground shadow allowed |
| Aspect Ratio | Recommended 1:1 |

---

## IV. Material Rendering Constraints

| Material | Rendering Requirement | Prompt |
|---|---|---|
| Metal | Reflection/highlight/cold sheen, micro-scratches visible | Metallic texture, cold sheen, clear reflection |
| Jade | Internal translucency, warm, slightly translucent | Translucent jade, warm like fat |
| Wood | Clear wood grain, visible growth rings | Clear wood grain, warm texture |
| Porcelain | Glaze sheen, uniform color | Glaze sheen, warm porcelain texture |
| Cloth/Paper | Fiber texture, natural edges | Cloth texture, rustic paper |
| Gemstone | Refraction/internal light, clear facets | Brilliant gemstone, light refraction |

---

## V. Prompt Template

Ancient-style prop setup diagram, 3D rendering style, high-precision modeling, PBR materials, Chinese-style 3D, cinematic lighting,
{prop type}, {material description}, {craftsmanship/decoration description}, {state description},
Pure prop still-life display, prop displayed independently, no one holding, no one wearing,
Four-panel grid (2×2) in the same frame: Top-left front view + Top-right side view + Bottom-left back view + Bottom-right detail close-up,
Plain gray solid color background, even soft light, no hard shadows,
Ultra-clear material textures, PBR material rendering, {material sheen description}
No text of any kind in the image,
No person, hand, finger, or limb may appear in the frame; the prop must not be in a state of being held or worn

---

## VI. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Must specify "plain gray solid color background" |
| R2 | Must clearly define prop material and craftsmanship |
| R3 | Prop form must conform to the ancient-style worldview |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Complex scene backgrounds |
| X2 | Prop and person in the same frame (this stage is for pure prop images) |
| X3 | Appearance of any person, including full body, half body, or partial (hands, fingers, arms, etc.) |
| X4 | Prop in a state of being held, gripped, worn, or in use |
| X5 | Elements implying the presence of a person (e.g., hand-holding marks, wearing perspective, usage posture) |
