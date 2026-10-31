# Prop Image Generation · Constraint Manual

---

## I. Prop Design Principles

1. **Functional Legibility** — The purpose of the prop is immediately clear; the form serves the function.
2. **Ultimate Texture** — Material textures must be clearly distinguishable (metal/jade/wood/cloth/paper).
3. **Period Consistency** — All props must conform to the ancient-style worldview; modern elements are prohibited.
4. **Clear Scale** — The real-world size of the prop is implied through reference objects or annotations.
5. **Pure Prop Independent Display** — Only the prop itself may appear in the frame. Any characters, hands, or limbs are strictly prohibited. The prop must not be in a state of being held, worn, or gripped; it must be presented independently in a still-life display manner.

---

## II. Prop Categories and Aesthetic Constraints

### 2.1 Weapons

| Item | Constraint | Prompt |
|---|---|---|
| Type | Sword/Dagger/Bow/Spear/Fan | {weapon type}, ancient-style weapon |
| Material | Fine steel/Dark iron + gemstone inlay + silk sword tassel | Cold gleam, forged from fine steel |
| Decoration | Carved scabbard/hilt, tassels, hidden patterns | Exquisite carving, hanging tassels |
| Sheen | Cold metallic sheen, edge reflection | Flickering cold light, metallic texture |
| Prompt | Ancient-style {weapon}, forged from fine steel, cold gleam, exquisite carving | — |

### 2.2 Ornaments

| Item | Constraint | Prompt |
|---|---|---|
| Type | Hairpin/Tiara/Necklace/Jade Pendant/Bracelet/Earring | {ornament type}, ancient-style jewelry |
| Material | Gold/Silver/Jade/Pearl/Gemstone | Gold wire weaving, translucent jade |
| Craftsmanship | Ultimate precision, filigree/enamel/inlay | Master craftsmanship, finely carved |
| Sheen | Pearl luster/Jade sheen/Metallic sheen | Lustrous pearl, metallic sheen |
| Prompt | Ancient-style {ornament}, {material}, master craftsmanship, finely carved | — |

### 2.3 Daily Artifacts

| Item | Constraint | Prompt |
|---|---|---|
| Type | Tea set/Wine set/Incense burner/Chessboard/Scroll/Lantern | {artifact type}, ancient-style artifact |
| Material | Porcelain/Copper/Bamboo/Wood/Paper | Warm celadon, rustic purple copper |
| Texture | Clear glaze/wood grain/bamboo nodes | Glaze sheen, clear wood grain |
| Style | Elegant/Rich depending on scene | Elegant and rustic / Rich and exquisite |
| Prompt | Ancient-style {artifact}, {material} texture, clear texture | — |

### 2.4 Tokens / Key Props

| Item | Constraint | Prompt |
|---|---|---|
| Type | Token/Order/Scroll/Medicine bottle/Jade seal | {prop type}, ancient-style prop |
| Uniqueness | Must have distinctiveness and narrative symbolic meaning | Unique design, profound symbolism |
| Aging | Can add an aged look as required by the plot | Old and mottled / Brand new and exquisite |
| Prompt | Ancient-style {prop}, {material}, {state}, unique design | — |

---

## III. Multi-Angle Setup Image Standards

### View Definitions

| Position | View | Angle | Requirement | Prompt |
|---|---|---|---|---|
| Top Left | Front View | Front 0° | Complete front form of the prop | front view |
| Top Right | Side View | Side 90° | Clear thickness/outline/structure | side view |
| Bottom Left | Back View | Back 180° | Back structure/decoration of the prop | back view |
| Bottom Right | Detail Close-up | Local magnification | Material texture/craftsmanship details | detail closeup |

### Frame Standards

| Item | Constraint |
|---|---|
| Layout | Four-quadrant grid (2×2) in the same frame, four views: top, bottom, left, right |
| Background | Pure neutral gray #E8E8E8 |
| Lighting | Even soft light, no hard shadows |
| Ratio | Prop occupies 70%+ of the subject area within each grid |
| Shadow | Natural subtle ground shadow allowed |
| Aspect Ratio | 1:1 recommended |

---

## IV. Material Rendering Constraints

| Material | Rendering Requirement | Prompt |
|---|---|---|
| Metal | Reflection/highlight/cold sheen, micro-scratches visible | Metallic texture, cold sheen, clear reflection |
| Jade | Internal translucency, warm, slightly translucent | Translucent jade, warm as fat |
| Wood | Clear wood grain, visible growth rings | Clear wood grain, warm texture |
| Porcelain | Glaze sheen, uniform color | Glaze sheen, warm porcelain texture |
| Cloth/Paper | Fiber texture, natural edges | Cloth texture, rustic paper |
| Gemstone | Refraction/internal light, clear facets | Brilliant gemstone, light refraction |

---

## V. Prompt Templates

```
Ancient-style prop concept art, realistic photography style, ancient-style realistic documentary, strong contrast, extreme details,
{Prop Type}, {Material Description}, {Craftsmanship/Decoration Description}, {State Description},
Pure prop still life display, prop displayed independently, not held by anyone, not worn by anyone,
Four-panel grid in the same frame (2×2): top-left front view + top-right side view + bottom-left back view + bottom-right detail close-up,
Pure neutral gray background, uniform soft light, no hard shadows,
Ultra-clear material texture, realistic texture, {Material Gloss Description}
No text of any kind in the image,
No people, hands, fingers, or limbs may appear in the frame, the prop must not be in a state of being held or worn
```

---

## VI. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | A "pure neutral gray background" must be specified |
| R2 | The material and craftsmanship of the prop must be explicitly defined |
| R3 | The prop design must conform to the ancient-style worldview |

### Strictly Prohibited

| ID | Prohibition |
|---|---|
| X1 | Complex scene backgrounds |
| X2 | Props and characters appearing in the same frame (this stage is for pure prop images only) |
| X3 | Any depiction of a person, including full body, half body, or partial limbs (hands, fingers, arms, etc.) |
| X4 | Props in a state of being held, gripped, worn, or in use |
| X5 | Elements implying the presence of a person (such as hand-held marks, wearing perspective, or usage posture) |


