# Clay Stop-Motion Character Derivative Asset Generation · Constraint Manual

---

## I. Stacking Principles

1. **Unchanged Face** — After stacking, facial features must be identical to the base model
2. **Unchanged Pose** — Maintain the natural standing pose of the base model
3. **Layer-by-Layer Control** — Each layer is described independently to facilitate layer-specific replacement
4. **Unified Style** — All costume and makeup elements must adhere to the same clay aesthetic system
5. **No Quality Drop** — The clay texture standard after stacking must not be lower than the base model
6. **Costume & Makeup Scope Only** — Only makeup/hair/costume/accessories are stacked; props, scenes, and environments are prohibited

---

## II. Stacking Layers

| Layer | Content | Description |
|---|---|---|
| L0 | Base Model | Base character model, unmodified |
| L1 | Makeup | Basic decorative color accents |
| L2 | Hairstyle | Buns/tied hair + simple hair accessories |
| L3 | Undergarment/Inner Layer | Replaces the white basic undergarment |
| L4 | Outerwear/Main Costume | Coat/long robe/outer garment |
| L5 | Accessories | Headpieces/earrings/necklaces/waist ornaments |

> **Scope Boundary**: Character derivative assets include only L0–L5 layers (costume, makeup, and hair); they do not include props, scene environments, poses, or actions.

---

## III. Makeup Constraints (L1)

### L1 Decision Principles

| Clue Type | Typical Clues | L1 Decision |
|---|---|---|
| No obvious facial emphasis | Only costume/hair changes | Basic decorative makeup |
| Slight facial clues | Soft, smiling, brightened complexion | Light decorative makeup |
| Clear scene clues | Wedding, celebration, formal occasion | Formal decorative makeup |

### Female Makeup Style Matrix

| Style | Applicable Scene | Core Prompts |
|---|---|---|
| Fresh Bare Makeup | Daily, first meeting | Natural makeup, clear and elegant |
| Sweet Warm Peach Makeup | Sweet romance, date | Pink blush, warm-toned lip color |
| Festive Full Makeup | Celebration, grand wedding | Rich and ornate makeup, vibrant colors |
| Night Banquet Makeup | Night, party | Warm-toned eyeshadow, shimmering lip color |

### Universal Base Skin (Shared by all makeup styles)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | Matte clay texture | Matte clay, matte clay |
| Whiteness | Warm cream tone | Warm cream skin, cream warm tone |
| Prohibited | Highlights/oiliness/mirror effects | — |

### By Area (Example: Sweet Warm Peach Makeup)

| Area | Constraint | Prompt |
|---|---|---|
| Blush | Warm pink, light sweep on cheekbones | Warm pink blush, soft cheekbones |
| Eyeshadow | Warm brown/orange tones, very light | Warm brown eyeshadow, very light eye makeup |
| Lip Makeup | Warm pink/coral, matte | Warm pink lip color, matte lip makeup |
| Eyebrows | Natural arched brows, color matching hair | Natural arched brows, soft brow shape |

### Male Makeup

| Item | Constraint | Prompt |
|---|---|---|
| Base Skin | Matte clay texture, warm beige tone | Matte clay, warm beige tone |
| Principle | Pseudo-bare face — looks natural but even skin tone | Natural skin tone, pseudo-bare face |
| Blush | Very light complexion, no obvious color buildup | Very light complexion, natural complexion |
| Lip Color | Natural blood color, matte | Natural lip color, matte lips |

---

## IV. Hairstyle Constraints (L2)

### Female Hairstyle Types

| Style | Description | Applicable | Prompt |
|---|---|---|---|
| Half-Tied Bun | Top bun + hair hanging behind | Daily, outings | Half-tied bun, half-tied black hair |
| High Bun | High bun, elegant | Formal, celebration | High bun, elegant updo |
| Low Dangling Bun | Side low bun, lazy | Private, casual | Low dangling bun, lazy hairstyle |
| Double Buns | Symmetrical double buns, youthful | Young characters | Double buns, youthful hairstyle |
| Fully Loose Hair | Long hair fully loose | Injured, destitute | Long loose hair, smooth hair |

### Female Hair Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Style | Retro and cozy, not overly complex | Retro hair accessories, cozy decorations |
| Material | Clay material, simple metal | Clay hair accessories, simple metal |
| Decoration | Flowers/bead strings/ribbons | Flower hair accessories, bead string accents |

### Male Hairstyle Types

| Style | Applicable | Prompt |
|---|---|---|
| Tied Hair Half-Crown | Daily, simple | Tied hair half-crown, natural tied hair |
| Full Crown High Tie | Formal, ceremony | High tied hair crown, formal hairstyle |
| Loose Hair Over Shoulders | Private, casual | Loose hair over shoulders, natural long hair |
| Tied Hair Ponytail | Action, activity | Tied hair ponytail, sleek hairstyle |

---

## V. Costume Constraints (L3+L4)

### Female Costume Matrix

| Style | Cut | Applicable | Prompt |
|---|---|---|---|
| Daily Long Dress | Simple long dress | Daily, casual | Simple long dress, daily attire |
| Formal Long Dress | Layered long dress | Formal, celebration | Layered long dress, ornate formal dress |
| Light Everyday Wear | Short top + skirt | Action, activity | Light everyday wear, short top and skirt |
| Nightgown | Loose long dress | Indoor, night | Loose nightgown, comfortable long dress |
| Grand Wedding Dress | Red layered long dress | Wedding | Red wedding dress, layered red attire |

### Female Costume Universal Constraints

| Item | Constraint | Prompt |
|---|---|---|
| Main Color | Warm tones dominant, low saturation | Warm-toned clothes, soft colors |
| Material | Clay shaping, simple texture | Clay material, simple texture |
| Texture | Texture clearly visible | Clear clothing texture |
| Layers | Simple layering, distinct layers | Simple layering, distinct layers |

### Male Costume Matrix

| Style | Applicable | Prompt |
|---|---|---|
| Retro Everyday Wear | Daily, home | Retro long shirt, daily attire |
| Action Wear | Adventure, action | Action wear, adventure costume |
| Outer Robe/Cape | Appearance, night travel | Outer robe, dark cape |
| Everyday Casual Wear | Casual, private | Everyday wear, casual attire |
| Formal Dress | Celebration, ceremony | Formal dress, formal attire |

---

## VI. Accessory Constraints (L5)

### Female Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Headpiece | Not overly complex, cozy style | Simple headpiece, cozy decoration |
| Earring | Small drop earrings/hoops | Small drop earrings, delicate hoops |
| Necklace | Simple necklace/neck ring | Simple necklace, delicate neck ring |
| Waist Ornament | Simple belt/jade pendant | Simple belt, small jade pendant |
| Hand Ornament | Simple bracelet | Simple bracelet, small bracelet |

### Male Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Hair Crown | Simple hair crown/jade hairpin | Simple hair crown, jade hairpin tied hair |
| Waist Sash | Simple waist sash/leather belt | Simple waist sash, distinct texture |
| Jade Pendant | Transparent and warm | Waist jade pendant, warm jade pendant |
| Ornament | Simple hanging ornament/sword (optional) | Simple hanging ornament, small sword |

---

## VII. Costume & Makeup Combination Quick Reference

| Scene | Makeup | Hairstyle | Costume | Accessories |
|---|---|---|---|---|
| Daily in Boudoir | Fresh Bare Makeup | Half-Tied Bun | Daily Long Dress | Simple |
| First Meeting | Fresh Bare Makeup | Half-Tied/High Bun | Daily Long Dress | Medium |
| Sweet Romance Interaction | Sweet Warm Peach Makeup | Half-Tied/Low Dangling | Daily Long Dress | Medium |
| Formal Appearance | Festive Full Makeup | High Bun | Formal Long Dress | Elaborate |
| Night Secret Talk | Fresh/Peach Makeup | Fully Loose/Low Dangling | Nightgown | Minimal |
| Grand Wedding Ceremony | Festive Full Makeup | High Bun | Grand Wedding Dress | Elaborate |

---

> **🔍 Inference Rules for Uncovered Scenes**
>
> When the user's described scene/situation is not in the table above, infer based on the core genes of this style:
>
> | Inference Dimension | Clay Stop-Motion Gene |
> |---|---|
> | Makeup Intensity | Default Fresh Bare Makeup (matte clay texture); Sweet romance/Daily → Sweet Warm Peach Makeup; Celebration/Grand Wedding → Festive Full Makeup; Night/Indoor → Night Banquet Makeup |
> | Hairstyle | Daily → Half-Tied Bun; Formal/Celebration → High Bun; Private/Casual → Low Dangling Bun or Fully Loose Hair; All hairstyles maintain clay shaping feel |
> | Costume | Retro fantasy tone; Daily → Simple long dress; Formal → Layered formal long dress; Action → Light everyday wear; Material always uses clay shaping + simple texture |
> | Accessory Complexity | Maintain cozy, not overly elaborate; Celebration → Elaborate (flowers + bead strings); Daily → Simple; Action → Minimal |
> | Texture Baseline | Matte clay texture always locked; Highlights/metal reflections prohibited; Warm cream skin tone priority |

## VIII. Four-View Setting Sheet Specifications

### View Definitions

| Position | View | Angle | Shot Size | Requirement | Prompt |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Face to collarbone | Face occupies 60%+, clear facial features/makeup | portrait closeup, face detail |
| Left 2 | Front View | Frontal 0° | Full body standing | Facing camera, full front view of costume | front view, full body |
| Right 2 | Side View | Right side 90° | Full body standing | Pure side profile, side layers of costume | side view, profile, full body |
| Right 1 | Back View | Rear 180° | Full body standing | Clear back hair accessories/back costume/hair ends | back view, rear view, full body |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Pure neutral gray #E8E8E8 |
| Standing Pose | Natural standing, feet parallel and slightly apart, arms hanging naturally |
| Expression | Subtle expression matching makeup style, limited to facial micro-expressions |
| Lighting | Warm soft light, front key light + side fill lights, no hard shadows |
| Consistency | Face/makeup/hairstyle/hair accessories/costume/accessories must be completely consistent across all four views |
| Frame Ratio | Recommended 4:1 or 3:1 |

---

## IX. Prompt Templates

```
Using the character's base image as the base, clay stop-motion {gender} character four-view design sheet, stop-motion style, 3D cartoon rendering, warm-toned lighting,
character design sheet, character turnaround,
Keep the base facial features unchanged, {overall temperament},
【L1·Makeup】Decide based on user clues: {basic decorative makeup/light decorative makeup/formal decorative makeup}; use {makeup style}, matte clay texture, {eyebrow makeup}, {eye makeup}, {lip makeup},
【L2·Hairstyle】{style type}, clay hairstyle, {hair accessory description},
【L3+L4·Clothing】{main color}{style}, {material}, {decorative craft}, clear clothing texture,
【L5·Accessories】{headwear}, {earrings}, {necklace}, {waist accessory},
Arranged side by side from left to right in the same frame: portrait close-up + front view + side view + back view,
Natural standing pose, pure neutral gray background, warm soft light, no hard shadows,
Four-view consistency, fine clay texture rendering, soft and healing expression
No text in the image
```

---

## 10. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The overlaid face must be consistent with the base model |
| R2 | Clothing must use "clear clothing texture" |
| R3 | Female accessories must be "not overly complex, warm style" |
| R4 | Makeup, hairstyle, clothing, and accessory styles must be unified |
| R5 | Must output a four-view character sheet |
| R6 | Must specify "pure neutral gray background" |
| R7 | Must specify "four-view consistency" |
| R8 | **Output prompts only** — Non-prompt content is prohibited |
| R9 | **Scene descriptions are prohibited** |
| R10 | **Prop interaction is prohibited** |
| R11 | **Pose must remain unchanged** |
| R12 | **L1 must analyze before making decisions** |
| R13 | **All derivative assets require makeup and styling** |
| R14 | **Makeup intensity must be restrained** |
| R15 | **Props, scenes, and actions are not grounds for intensity escalation** |

### Strictly Prohibited

| ID | Prohibition |
|---|---|
| X1 | Overlaid face misalignment |
| X2 | Accessories that are too simple/modern |
| X3 | Conflicting makeup/clothing styles |
| X4 | Complex scene backgrounds (pure gray background required) |
| X5 | Inconsistent clothing, makeup, or styling across the four views |
| X6 | Outputting any content other than the prompt |
| X7 | Adding any prop interaction |
| X8 | Changing the base model's pose |
| X9 | Adding descriptions linking expressions and poses |
| X10 | Applying fixed makeup without analyzing user cues |
| X11 | Incorrectly maintaining a bare face |
| X12 | Incorrectly escalating makeup solely due to prop, scene, or action terms |