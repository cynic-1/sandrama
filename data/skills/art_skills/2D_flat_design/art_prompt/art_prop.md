# Prop Image Generation · Flat-Style Constraint Manual

---

## I. Prop Design Principles

1. **Functional Readability** — The purpose of the prop is immediately clear; the form serves the function.
2. **Minimal Color Blocks** — Material textures must be distinguished by color blocks; complex details are prohibited.
3. **Period Consistency** — All props must conform to the ancient-style worldview; modern elements are prohibited.
4. **Clear Scale** — The real size of the prop is implied through reference objects or annotations.
5. **Pure Prop Independent Display** — Only the prop itself may appear in the frame. Any characters, hands, or limbs are strictly prohibited. The prop must not be in a state of being held, worn, or gripped; it must be presented independently in a still-life display manner.

---

## II. Prop Categories and Aesthetic Constraints

### 2.1 Weapons

| Item | Constraint | Prompt |
|---|---|---|
| Type | Sword/Dagger/Bow/Spear/Fan | {weapon type}, flat ancient-style weapon |
| Material | Solid color blocks, line outlines | Flat sword, line weapon, solid color sword |
| Decoration | Line carving, color block decoration | Line decoration, flat carving |
| Sheen | No sheen, solid color fill | No sheen, flat weapon, matte sword |
| Prompt | Flat ancient-style {weapon}, solid color weapon, line decoration | — |

### 2.2 Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Type | Hairpin/Tiara/Necklace/Jade Pendant/Bracelet/Earring | {accessory type}, flat ancient-style jewelry |
| Material | Solid color blocks, single-color fill | Flat jewelry, color block jewelry, solid color jewelry |
| Craftsmanship | Simple lines, minimal craftsmanship | Flat craftsmanship, line jewelry |
| Sheen | No sheen, no reflection | No sheen, flat jewelry, matte finish |
| Prompt | Flat ancient-style {accessory}, {material}, simple craftsmanship, line jewelry | — |

### 2.3 Household Objects

| Item | Constraint | Prompt |
|---|---|---|
| Type | Tea set/Wine set/Incense burner/Chessboard/Scroll/Lantern | {object type}, flat ancient-style object |
| Material | Solid color blocks, line outlines | Flat object, color block object, solid color object |
| Texture | Distinguished by color blocks, no texture | Flat texture, no texture, flat texture |
| Style | Elegant/Luxurious depending on scene | Flat elegant / Flat luxurious |
| Prompt | Flat ancient-style {object}, {material} color block, clear lines | — |

### 2.4 Tokens/Key Props

| Item | Constraint | Prompt |
|---|---|---|
| Type | Token/Order/Scroll/Medicine bottle/Jade seal | {prop type}, flat ancient-style prop |
| Specificity | Flattened form, simple recognizability | Flat form, simple prop |
| State | Flat aging can be added | Flat old item / Flat new item |
| Prompt | Flat ancient-style {prop}, {material} color block, flat state, simple form | — |

---

## III. Multi-Angle Setup Diagram Standards

### View Definitions

| Position | View | Angle | Requirement | Prompt |
|---|---|---|---|---|
| Top Left | Front View | Front 0° | Complete front form of the prop | front view |
| Top Right | Side View | Side 90° | Clear thickness/outline/structure | side view |
| Bottom Left | Back View | Back 180° | Back structure/decoration of the prop | back view |
| Bottom Right | Detail Close-up | Local magnification | Line/color block details | detail closeup |

### Frame Standards

| Item | Constraint |
|---|---|
| Layout | Four-quadrant grid (2×2) in the same frame, four views: top, bottom, left, right |
| Background | Pure neutral gray #E8E8E8 |
| Lighting | No shadows, pure flat color blocks |
| Ratio | Prop occupies 70%+ of the main subject in each grid |
| Projection | No projection, pure flat plane |
| Frame Ratio | Recommended 1:1 |

---

## IV. Material Rendering Constraints

| Material | Rendering Requirement | Prompt |
|---|---|---|
| Metal | Solid color fill, no reflection | Flat metal, solid color metal, solid metal |
| Jade | Solid color fill, no transparency | Flat jade, solid color jade, solid jade |
| Wood | Solid color fill, no wood grain | Flat wood, solid color wood, solid wood |
| Porcelain | Solid color fill, no glaze | Flat porcelain, solid color porcelain, solid porcelain |
| Cloth/Paper | Solid color fill, no fiber | Flat fabric, solid color fabric, solid fabric |
| Gemstone | Solid color fill, no refraction | Flat gemstone, solid color gemstone, solid gem |

---

## V. Prompt Templates

```
Flat ancient-style prop concept art,
2d flat design, vector art, flat illustration,
minimalist, clean lines, solid colors,
{prop type}, {material description}, {craftsmanship/decoration description}, {state description},
Pure prop still life display, prop displayed independently, not held by anyone, not worn by anyone,
Four-panel grid in the same frame (2×2): top-left front view + top-right side view + bottom-left back view + bottom-right detail close-up,
Pure neutral gray background, no shadows, no gradients,
Clear lines, distinct color blocks, {material gloss description}
No text of any kind in the image,
No people, hands, fingers, or limbs may appear in the frame; the prop must not be in a state of being held or worn
```

---

## VI. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Must specify a "pure neutral gray background" |
| R2 | Must clearly define prop materials and craftsmanship (flat representation) |
| R3 | Prop design must conform to the ancient-style worldview |

### Strictly Prohibited

| ID | Prohibition |
|---|---|
| X1 | Complex scene backgrounds |
| X2 | Props and characters in the same frame (this stage is for pure prop images only) |
| X3 | Any character figures, including full body, half body, or partial limbs (hands, fingers, arms, etc.) |
| X4 | Props in a state of being held, gripped, worn, or in use |
| X5 | Elements implying the presence of a character (e.g., hand-holding marks, wearing perspective, usage posture) |
| X6 | Adding gradient/shadow/highlight/3D effects |
| X7 | Overly complex materials or unclear color block distinctions |
| X8 | Modern elements or non-ancient-style designs |