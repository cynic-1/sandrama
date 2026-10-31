---
name: art_character_derivative
description: Character Derivative Asset Generation · Constraint Manual
metaData: art_skills
---

# Character Derivative Asset Generation · Constraint Manual

---

## I. Overlay Principles

1. **Unchanged Face** — After overlay, facial features must be identical to the base model; facial drift is prohibited.
2. **Unchanged Pose** — Maintain the natural standing pose of the base model; any changes in pose, action, or body posture are prohibited.
3. **Layer-by-Layer Control** — Each layer is described independently to facilitate layer-by-layer replacement (change costume without changing makeup).
4. **Unified Style** — All costume and makeup elements must adhere to the same aesthetic system.
5. **No Quality Degradation** — The quality standard after overlay must not be lower than the base model.
6. **Pure Costume & Makeup Scope** — Only overlay makeup, hairstyle, clothing, and accessories. Introducing props, scenes, environments, or actions is prohibited.

---

## II. Overlay Hierarchy

| Level | Content | Description |
|---|---|---|
| L0 | Base Model | Base image model, unmodified |
| L1 | Makeup (Decision Layer) | First analyze user clues, then decide the intensity of "Basic Makeup / Light Makeup / Formal Makeup" |
| L2 | Hairstyle | Buns/braids/updos + hair accessories |
| L3 | Inner Garment | Replace the white basic inner garment |
| L4 | Outer Garment/Main Costume | Ancient-style elegant attire/formal wear/everyday wear, etc. |
| L5 | Accessories | Headpieces/earrings/necklaces/waist ornaments/hand ornaments |

> **Scope Boundary**: Character derivative assets include only levels L0–L5 (costume, makeup, and styling). They do not include props (handheld items such as umbrellas/swords/fans/books/lanterns), scene environments (indoor/outdoor/weather, etc.), or poses/actions (walking/looking back/raising hands, etc.). These belong to the scope of other asset types.

---

## III. Makeup Constraints (L1)

### Strategy from Base Model to Derivative Makeup (Key)

> Although the character base model is bare-faced, derivative assets default to entering the makeup and styling process. The system should analyze makeup needs based on clues provided by the user and decide the intensity among Basic Makeup, Light Makeup, and Formal Makeup, rather than remaining bare-faced.

### L1 Clue Analysis and Makeup Decision

| Step | Processing Content | Decision Result |
|---|---|---|
| S1 | Extract user clues: facial state words, emotion words, intensity words | Form a summary of makeup requirements |
| S2 | Filter non-makeup clues: props/scene/action/pose words are not used as basis for makeup | Prevent misjudgment |
| S3 | Match makeup style matrix and assign intensity level | Basic Makeup / Light Makeup / Formal Makeup |
| S4 | Generate final L1 prompt | Output only the conclusion, not the analysis process |

### Clue-to-Makeup Mapping (Execution Standard)

| Clue Type | Typical Clues | L1 Decision |
|---|---|---|
| No obvious facial emphasis clues | Only costume/hairstyle changes, no emphasis on emotion or state | Basic Makeup |
| Slight facial clues | Gentle, smiling, slight eyelash flutter, subtle complexion lift | Light Makeup (extremely light) |
| Clear everyday clues | Everyday, going out, casual | Basic Makeup (natural and clear) |
| Clear formal ceremony clues | Grand wedding, ceremony, important occasion | Formal Makeup (refined and luxurious) |

> **Judgment Principle**: All derivative assets must have makeup and styling. First look at facial clues to determine intensity and style; changes in props, scenes, or poses must not independently raise the makeup intensity.

### Female Makeup Style Matrix

| Style | Applicable Scene | Core Prompt |
|---|---|---|
| Elegant Plain Makeup | Everyday, first meeting, boudoir | Elegant makeup, lightly brushed eyebrows, plain clear face |
| Courtly Noble Makeup | Court, formal, power | Refined makeup, sharp eyebrow shape, red lip color |
| Romantic Peach Blossom Makeup | Date, heart-flutter, sweet | Peach blossom makeup, slight redness at eye corners, moist lip color |
| Grand Wedding Makeup | Grand wedding, ceremony | Heavy luxurious makeup, vermilion lips and phoenix eyes |
| Festival Celebration | Celebration, gathering | Bright colors, pastel makeup |

### Universal Base Skin (Shared by All Makeup)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | Cel-look flat shading, natural translucency | Cel-look texture, natural sheen, soft texture |
| Whiteness | Pink-white base, translucent not pale | Pink-white base, fair and translucent |
| Inner Glow | Soft light from inside out | Inner glow, translucent glowing skin |
| Prohibited | Matte/dead white/waxy/oily/overexposed | — |

### Basic Makeup Details (Default Level)

| Item | Constraint | Prompt |
|---|---|---|
| Eyebrows | Lightly groomed along the base model's eyebrow shape, do not change eyebrow type | Natural eyebrow grooming, clean eyebrow shape |
| Eyes | Extremely light eye makeup, emphasizing clarity and spirit | Clear eyes, extremely light eyeshadow |
| Cheeks | Extremely light complexion lift, pastel blush | Natural cheek complexion, pastel blush |
| Lips | Light pink or vermilion red, maintaining restraint | Natural moist lip color, light pink lip color |
| Overall | Visible makeup, but very light makeup feel | Basic makeup, natural makeup feel, soft texture |

### Male Makeup

| Item | Constraint | Prompt |
|---|---|---|
| Base Skin | Cel-look flat shading, fair and translucent, fresh and natural | Cel-look texture, fair and translucent, natural sheen |
| Principle | Fake bare-face—looks like no makeup but skin is excellent | Fake bare-face, naturally good skin |
| Eyebrows | Natural thick eyebrows, no drawn eyebrows | Natural sword-like eyebrows, heroic eyebrow shape |
| Lip Color | Natural blood color, slightly moist | Natural lip color, blood-like tone |

---

## IV. Hairstyle Constraints (L2)

### Female Styling Types

| Style | Description | Applicable | Prompt |
|---|---|---|---|
| High Bun with Cloud Hair | High bun updo + hair accessories | Court, formal | High bun cloud hair, refined updo |
| Double Ring Bun | Symmetrical double rings, youthful | Young characters | Double ring bun, youthful style |
| Falling Horse Bun | Side low bun, lazy | Everyday, casual | Falling horse bun, lazy side bun |
| Loose Hair | Long hair fully loose, natural | Boudoir, private | Long hair scattered, natural fall |
| Tied High Ponytail | High tie, capable | Martial arts, action | High tied ponytail, capable and crisp |
| Half-Tied Hair | Top half tied + back hair hanging | Everyday, going out | Half-tied cloud bun, natural hanging hair |

### Female Hair Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Style | Luxurious and refined, matching the costume | Luxurious hair accessories, refined craftsmanship |
| Material | Gold/silver + pearls/jade + tassels | Gold/silver hairpins, pearls and jade everywhere |
| Craftsmanship | Delicate lines, clear details | Fine craftsmanship, delicate carving |

### Male Styling Types

| Style | Applicable | Prompt |
|---|---|---|
| Tied Hair with Half Crown | Everyday, scholar | Tied hair half crown, jade pin tied hair |
| Full Crown High Tie | Formal, court | Full crown high tie, jade crown tied hair |
| Loose Hair over Shoulders | Private, injured | Loose hair over shoulders, long hair like ink |
| Tied High Ponytail | Combat, martial arts | High tied combat hair, crisp ponytail |

---

## V. Costume Constraints (L3+L4)

### Female Costume Matrix

| Style | Cut | Applicable | Prompt |
|---|---|---|---|
| Ancient Long Skirt | Long skirt, flowing | Everyday, boudoir | Ancient long skirt, flowing dress |
| Court Formal Dress | Formal dress, luxurious | Court, formal | Court formal dress, luxurious gown |
| Light Everyday Wear | Short shirt, light | Action, martial arts | Light everyday wear, short shirt |
| Nightwear | Thin gauze inner shirt, plain color | Indoor, night | Nightwear, loose and comfortable |
| Grand Wedding Dress | Phoenix crown and gauze cape, layered red attire | Wedding | Phoenix crown and gauze cape, layered red robes |

### Female Costume General Constraints

| Item | Constraint | Prompt |
|---|---|---|
| Main Color | Traditional Chinese color tones are default | Traditional Chinese color tone clothes, refined costume |
| Material | Silk + embroidery + pearl-luster fabric | Silk texture, embroidery details |
| Texture | Texture must be ultra-clear | Clear clothing texture, ultra-clear texture |
| Shoulders | Shawl/cloud shoulder/decoration | Luxurious cloud shoulder, decorated shoulders |
| Layers | Multi-layered wearing, distinct layers | Multi-layered wearing, distinct layers |

### Male Costume Matrix

| Style | Applicable | Prompt |
|---|---|---|
| Scholar's Attire | Everyday, study | Scholar's attire, long shirt |
| Warrior's Sturdy Attire | Combat, martial training | Warrior's sturdy attire, battle robe |
| Court Robe | Court, ceremony | Court robe, formal dress |
| Everyday Casual Wear | Casual, private | Everyday casual wear, simple style |
| Formal Dress | Formal, celebration | Formal dress, luxurious and refined |

---

## VI. Accessory Constraints (L5)

### Female Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Headpiece | Luxurious and refined, not thin | Luxurious headpiece, pearls and jade everywhere |
| Earring | Dangling tassels/jade earrings | Tassel earrings, jade earrings dangling |
| Necklace | Yingluo/necklace | Luxurious yingluo, refined necklace |
| Waist Ornament | Gongtao/jade pendant | Flowing gongtao, jade pendant at waist |
| Hand Ornament | Jade bracelet/armlet | Translucent jade bracelet, refined armlet |

### Male Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Hair Crown | Jade crown/gold crown, refined | Jade crown tied hair |
| Waist Sash | Wide waist sash/leather belt | Wide waist sash, distinct texture |
| Jade Pendant | Translucent and warm | Jade pendant at waist |
| Weapon | Sword/fan/flute (optional) | Long sword at side, folding fan half-hidden |

---

## VII. Costume & Makeup Combination Quick Reference

| Scene | Makeup | Hairstyle | Costume | Accessories |
|---|---|---|---|---|
| Boudoir Everyday | Elegant Plain Makeup | Loose hair/Half-tied hair | Ancient long skirt | Medium |
| First Meeting | Elegant Plain Makeup | Half-tied hair/Falling horse bun | Ancient long skirt | Medium to high |
| Romantic Interaction | Romantic Peach Blossom Makeup | Half-tied hair/Falling horse bun | Ancient long skirt/Light | Medium |
| Formal Appearance | Courtly Noble Makeup | High bun cloud hair | Court formal dress | Extremely elaborate |
| Night Private | Elegant/Peach Blossom Makeup | Loose hair/Falling horse bun | Nightwear | Minimal |
| Grand Wedding Ceremony | Grand Wedding Makeup | High bun cloud hair | Wedding dress | Extremely elaborate |
| Martial Arts Action | Plain Makeup (extremely light) | Tied ponytail | Light everyday wear | Simple |

---

> **🔍 Inference Rules for Uncovered Scenes**
>
> When the scene/situation described by the user is not in the table above, infer based on the core genes of this style:
>
> | Inference Dimension | Chinese Style 2D Anime Gene |
> |---|---|
> | Makeup Intensity | Default Elegant Plain Makeup; festival/ceremony/formal keywords → Courtly Noble Makeup; sweet romance/heart-flutter words → Peach Blossom Makeup |
> | Hairstyle | Everyday/boudoir → Half-tied hair or Falling horse bun; formal/appearance → High bun cloud hair; private/night → Loose hair; action → Tied ponytail |
> | Costume | Emotional scenes/everyday → Ancient long skirt (light and flowing); power/formal → Court formal dress; action/combat → Light everyday wear |
> | Accessory Elaborateness | Everyday → Medium; formal → Extremely elaborate (pearl/jade hair accessories + yingluo + waist ornaments); private/casual → Simple; action → Simple |
> | Color Tone Tendency | Traditional Chinese colors as anchor (frost white/moon white/vermilion/indigo); night/private → lower saturation; festive → warm red + gold |

## VIII. Four-View Character Sheet Specification

> After overlaying derivative costume and makeup, a four-view character sheet must still be output to ensure consistency of costume, makeup, and styling from all angles.

### View Definitions

| Position | View | Angle | Shot Size | Requirement | Prompt |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Face to collarbone | Face occupies 60%+, clear facial features/makeup | portrait closeup, face detail, makeup detail |
| Left 2 | Front View | Front 0° | Full-body standing | Facing camera, full front view of costume | front view, height mark |
| Right 2 | Side View | Right side 90° | Full-body standing | Pure side profile, side layers of costume | side view, profile, height mark |
| Right 1 | Back View | Rear 180° | Full-body standing | Clear back hair accessories/back costume/hair ends | back view, rear view, height mark |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Moon white solid color #E8EAF5 |
| Standing Pose | Natural standing, feet parallel and slightly apart, arms hanging naturally or slightly extended (**any pose change is prohibited**) |
| Expression | Subtle expression matching the makeup style (e.g., Elegant Plain Makeup → calm, Peach Blossom Makeup → smiling), limited to facial micro-expressions, not involving body movements |
| Lighting | Even soft light, main light from front + fill light from both sides, no hard shadows |
| Consistency | Face/makeup/hairstyle/hair accessories/costume/accessories are completely consistent across the four views |
| Frame Ratio | Recommended 4:1 or 3:1 |

---

## IX. Prompt Template

### Output Format Constraints

| Item | Constraint |
|---|---|
| Output Content | **Output only the prompt text**, no other content |
| Prohibited Output | Quick reference tables, layered construction plans, visual constraint tables, prohibition tables, derivative plans, output suggestions, core element tables, and any non-prompt content |
| Prohibited Scenes | Character derivative assets **do not include scene/environment descriptions**, do not output any scene/environment/weather/background narrative content (scenes belong to the scene asset scope) |
| Prohibited Props | **Do not include any prop interactions**, do not output handheld items or interactive items such as umbrellas/swords/fans/books/lanterns/wine cups (props belong to the prop asset scope) |
| Prohibited Pose Changes | **Do not change the base model pose**, do not output any actions or posture changes such as walking/looking back/raising hands/turning sideways/running, maintain natural standing |
| Format | Directly output a usable prompt code block, no titles, tables, explanations, or plan comparisons required |

### Full Costume & Makeup Overlay (Four Views)

Using the character base image as the base, img2img overlay costume and makeup,
Chinese style 2D anime, New Chinese Chic aesthetic, Japanese anime rendering, cel-look flat shading, delicate brushstrokes,
Ancient style {gender} character four-view character sheet, Chinese style 2D anime, cel-look coloring, 8K, ultra-realistic
character design sheet, character turnaround,
Keep the base image face unchanged, {overall temperament},
[L1·Makeup] Decide based on user clues: {Basic Makeup/Light Makeup/Formal Makeup}; use {makeup style}, cel-look flat shading, {eyebrow makeup}, {eye makeup}, {lip makeup},
[L2·Hairstyle] {styling type}, delicate hair strands clear, {hair accessory description},
[L3+L4·Costume] {main color}{cut}, {material}, {decorative craftsmanship}, clear clothing texture, cel-look flat shading,
[L5·Accessories] {headpiece}, {earrings}, {necklace}, {waist ornament},
Same frame left to right side-by-side: portrait close-up + front view + side view + back view,
Natural standing, moon white solid color background, even soft light, no hard shadows,
Four-view consistency, clear Chinese style 2D anime styling, clear delicate lines,
No text in the image

---## X. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The overlaid face must be consistent with the base model |
| R2 | Costumes must use "clear fabric texture + cel-shaded flat coloring" |
| R3 | Female accessories must be "luxurious and exquisite + finely crafted" |
| R4 | Makeup, hairstyle, costume, and accessory styles must be unified |
| R5 | Must output a four-view character sheet (portrait close-up + front view + side view + back view) |
| R6 | Must specify "solid moon-white background" |
| R7 | Must specify "four-view consistency" |
| R8 | **Output prompts only** — Do not output any non-prompt content such as quick-reference tables, layering schemes, visual constraints, prohibitions, derivative schemes, or output suggestions |
| R9 | **No scene descriptions** — Character derivative assets do not involve scenes, environments, weather, or background narratives; scenes are an independent asset type |
| R10 | **No prop interaction** — Do not include any held or interactive items (umbrellas, swords, fans, books, etc.); props are an independent asset type |
| R11 | **Pose remains unchanged** — Must maintain the natural standing pose of the base model; any changes in action, posture, or stance are prohibited |
| R12 | **L1 must analyze before deciding** — First parse the user's facial cues, then determine basic makeup, light makeup, or formal makeup |
| R13 | **All derivative assets require makeup** — Do not maintain a bare face under normal circumstances; use at least basic makeup |
| R14 | **Makeup intensity is controlled** — Even when applying makeup, it must be restrained; modern heavy makeup or exaggerated makeup effects are not allowed |
| R15 | **Props/scenes/actions are not grounds for intensity escalation** — Basic makeup must not be elevated to stronger makeup based solely on props, environment, or actions |

### Strictly Prohibited

| ID | Prohibition |
|---|---|
| X1 | Facial offset after overlay |
| X2 | Accessories that are too simple or modern (for females) |
| X3 | Conflicting styles between makeup and costumes |
| X4 | Complex scene backgrounds (must be solid color) |
| X5 | Inconsistency in costume and makeup across the four views |
| X6 | Any content other than the prompt (tables, schemes, suggestions, explanations, variants, etc.) |
| X7 | Adding scene descriptions to character derivative assets (street scenes, rain scenes, interiors, streets, weather, and other environmental elements) |
| X8 | Outputting sections such as "Core Element Quick Reference," "Layered Construction Scheme," "Visual Constraints," "Prohibitions," or "Derivative Schemes" |
| X9 | Adding any prop interaction (holding umbrellas, swords, fans, books, lanterns, wine glasses, etc.) |
| X10 | Changing the base model's pose (action descriptions such as walking, looking back, raising a hand, turning sideways, running, looking down, or looking up) |
| X11 | Adding descriptions linking expressions and poses (narrative descriptions such as "walking at a 45-degree side angle with a slight smile at the corner of the mouth") |
| X12 | Applying a fixed makeup style directly without analyzing the user's cues |
| X13 | Incorrectly maintaining a bare face, resulting in derivative assets lacking the required makeup |
| X14 | Incorrectly upgrading makeup solely due to prop/scene/action terms, leading to incorrect makeup intensity decisions |