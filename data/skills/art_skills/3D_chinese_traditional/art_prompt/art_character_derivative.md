---
name: art_character_derivative
description: Character Derivative Asset Generation · Constraint Manual
metaData: art_skills
---

# Character Derivative Asset Generation · Constraint Manual

---

## I. Overlay Principles

1. **Unchanged Face** — After overlaying, facial features must be identical to the base model; facial drift is prohibited.
2. **Unchanged Pose** — Maintain the natural standing pose of the base model; any changes in pose, action, or body posture are prohibited.
3. **Layer-by-Layer Control** — Each layer is described independently to facilitate layer-by-layer replacement (change costume without changing makeup).
4. **Style Consistency** — All costume and makeup elements must adhere to the same aesthetic system.
5. **No Quality Drop** — The texture standard after overlaying must not be lower than the base model.
6. **Pure Costume & Makeup Scope** — Only overlay makeup, hairstyle, clothing, and accessories; introducing props, scenes, environments, or actions is prohibited.

---

## II. Overlay Hierarchy

| Level | Content | Description |
|---|---|---|
| L0 | Base Model | Base image model, unmodified |
| L1 | Makeup (Decision Layer) | First analyze user cues, then decide the intensity of "Basic Makeup / Light Makeup / Formal Makeup" |
| L2 | Hairstyle & Styling | Buns/tied hair/braids + hair accessories |
| L3 | Inner Garment | Replaces the white basic inner garment |
| L4 | Outer Garment/Main Costume | Ancient-style elegant dress/formal dress/everyday wear, etc. |
| L5 | Accessories | Headwear/earrings/necklaces/waist ornaments/hand ornaments |

> **Scope Boundary**: Character derivative assets include only levels L0–L5 (costume, makeup, and styling). They do not include props (held items such as umbrellas/swords/fans/books/lanterns), scene environments (indoor/outdoor/weather, etc.), or poses/actions (walking/looking back/raising hand, etc.). These belong to other asset types.

---

## III. Makeup Constraints (L1)

### Strategy from Base Model to Derivative Makeup (Key)

> Although the character base model is bare-faced, derivative assets default to entering the makeup and styling process. The system should analyze makeup requirements based on cues provided by the user and decide the intensity among Basic Makeup, Light Makeup, and Formal Makeup, rather than remaining bare-faced.

### L1 Cue Analysis and Makeup Decision

| Step | Processing Content | Decision Result |
|---|---|---|
| S1 | Extract user cues: facial state words, emotion words, intensity words | Form a makeup requirement summary |
| S2 | Filter non-makeup cues: props/scene/action/pose words are not used as basis for makeup | Prevent misjudgment |
| S3 | Match the makeup style matrix and assign an intensity level | Basic Makeup / Light Makeup / Formal Makeup |
| S4 | Generate the final L1 prompt | Output only the conclusion, not the analysis process |

### Cue-to-Makeup Mapping (Execution Standard)

| Cue Type | Typical Cues | L1 Decision |
|---|---|---|
| No obvious facial emphasis cues | Only costume/hairstyle changes, no emphasis on emotion or state | Basic Makeup |
| Slight facial cues | Gentle, smiling, light eyelash flutter, slightly lifted complexion | Light Makeup (extremely light) |
| Clear everyday cues | Everyday, going out, casual | Basic Makeup (natural and clear) |
| Clear formal ceremony cues | Grand wedding, ceremony, important occasion | Formal Makeup (refined and luxurious) |

> Decision Principle: All derivative assets must have makeup and styling; first look at facial cues to determine intensity and style. Changes in props, scenes, or poses must not independently raise the makeup intensity.

### Female Makeup Style Matrix

| Style | Applicable Scene | Core Prompt |
|---|---|---|
| Elegant Plain Makeup | Everyday, first meeting, boudoir | Elegant makeup, lightly brushed eyebrows, plain makeup with clear face |
| Courtly Noble Makeup | Court, formal, power | Refined makeup, sharp eyebrow shape, red lip color |
| Romantic Peach Blossom Makeup | Date, heart-fluttering, sweet | Peach blossom makeup, slight redness at eye corners, moist lip color |
| Grand Wedding Makeup | Grand wedding, ceremony | Heavy and luxurious makeup, vermilion lips and phoenix eyes |
| Festival Celebration | Celebration, gathering | Bright colors, pastel makeup |

### Universal Base Skin (Shared by All Makeup)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | PBR material rendering, natural and translucent | PBR material, natural sheen, soft texture |
| Whiteness | Pink-white base, translucent not pale | Pink-white base, fair and translucent |
| Inner Glow | Soft light feeling from inside out | Inner glow, skin translucent and glowing |
| Prohibited | Matte/dead white/waxy/oiliness/overexposure | — |

### Basic Makeup Details (Default Level)

| Item | Constraint | Prompt |
|---|---|---|
| Eyebrows | Lightly groomed following the base model's eyebrow shape, do not change eyebrow type | Natural eyebrow grooming, clean eyebrow shape |
| Eyes | Extremely light eye makeup, emphasizing clarity and vitality | Clear eyes, extremely light eyeshadow |
| Cheeks | Extremely light complexion lift, pastel blush | Natural cheek complexion, pastel blush |
| Lips | Light pink or vermilion red, maintain restraint | Natural moist lip color, light pink lip color |
| Overall | Visible makeup, but very light makeup feel | Basic makeup, natural makeup feel, soft texture |

### Male Makeup

| Item | Constraint | Prompt |
|---|---|---|
| Base Skin | PBR material rendering, fair and translucent, fresh and natural | PBR material, fair and translucent, natural sheen |
| Principle | Fake bare face—looks like no makeup but skin is excellent | Fake bare face, naturally good skin |
| Eyebrows | Natural thick eyebrows, no drawn eyebrows | Natural sword-like eyebrows, heroic eyebrow shape |
| Lip Color | Natural blood color, slightly moist | Natural lip color, blood color feel |

---

## IV. Hairstyle & Styling Constraints (L2)

### Female Styling Types

| Style | Description | Application | Prompt |
|---|---|---|---|
| High Bun Cloud Hair | High bun updo + hair accessories | Court, formal | High bun cloud hair, refined updo |
| Double Ring Bun | Double ring symmetry, youthful | Young characters | Double ring bun, youthful style |
| Fallen Horse Bun | Side low bun, lazy | Everyday, casual | Fallen horse bun, lazy side bun |
| Loose Hair | Long hair fully loose, natural | Boudoir, private | Long hair scattered, natural fall |
| Tied High Ponytail | High tie, capable | Martial arts, action | High tied ponytail, capable and crisp |
| Half-Tied Hair | Top half tied + back hair hanging | Everyday, going out | Half-tied cloud bun, natural hanging hair |

### Female Hair Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Style | Luxurious and refined, matching the costume | Luxurious hair accessories, refined craftsmanship |
| Material | Gold/silver + pearls/jade + tassels | Gold/silver hairpins, pearls and jade everywhere |
| Craftsmanship | High-precision modeling, clear details | High-precision craftsmanship, fine carving |

### Male Styling Types

| Style | Application | Prompt |
|---|---|---|
| Tied Hair Half Crown | Everyday, scholar | Tied hair half crown, jade pin tied hair |
| Full Crown High Tie | Formal, court | Full crown high tie, jade crown tied hair |
| Loose Hair Over Shoulders | Private, injured | Loose hair over shoulders, long hair like ink |
| Tied High Ponytail | Combat, martial arts | High tied battle hair, crisp ponytail |

---

## V. Costume Constraints (L3+L4)

### Female Costume Matrix

| Style | Cut | Application | Prompt |
|---|---|---|---|
| Ancient Long Dress | Long dress, flowing | Everyday, boudoir | Ancient long dress, flowing dress |
| Court Formal Dress | Formal dress, luxurious | Court, formal | Court formal dress, luxurious dress |
| Light Everyday Wear | Short shirt, light | Action, martial arts | Light everyday wear, short shirt |
| Nightwear | Thin gauze inner shirt, plain color | Indoor, night | Nightwear, loose and comfortable |
| Grand Wedding Dress | Phoenix crown and gauze veil, layered red dress | Wedding | Phoenix crown and gauze veil, layered red dress |

### Female Costume General Constraints

| Item | Constraint | Prompt |
|---|---|---|
| Main Color | Traditional Chinese color tones are default | Traditional Chinese color tone clothes, refined costume |
| Material | Silk + embroidery + pearl luster fabric | Silk texture, embroidery details |
| Texture | Texture must be ultra-clear | Clear clothing texture, ultra-clear texture |
| Shoulders | Shawl/cloud shoulder/decoration | Luxurious cloud shoulder, decorated shoulders |
| Layers | Multi-layered wearing, distinct layers | Multi-layered wearing, distinct layers |

### Male Costume Matrix

| Style | Application | Prompt |
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
| Headwear | Luxurious and refined, not thin | Luxurious headwear, pearls and jade everywhere |
| Earrings | Dangling tassels/jade earrings | Tassel earrings, jade earring dangles |
| Neckwear | Necklace/neck ring | Luxurious necklace, refined neck ring |
| Waistwear | Court sash/jade pendant | Flowing court sash, jade pendant at waist |
| Handwear | Jade bracelet/armlet | Translucent jade bracelet, refined armlet |

### Male Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Hair Crown | Jade crown/gold crown, refined | Jade crown tied hair |
| Waist Belt | Wide waist belt/leather belt | Wide waist belt, distinct texture |
| Jade Pendant | Translucent and warm | Jade pendant at waist |
| Weapons | Sword/fan/flute (optional) | Long sword at side, folding fan half-hidden |

---

## VII. Costume & Makeup Combination Quick Reference

| Scene | Makeup | Hairstyle | Costume | Accessories |
|---|---|---|---|---|
| Boudoir Everyday | Elegant Plain Makeup | Loose hair/Half-tied hair | Ancient long dress | Medium |
| First Meeting | Elegant Plain Makeup | Half-tied hair/Fallen horse bun | Ancient long dress | Medium to high |
| Romantic Interaction | Romantic Peach Blossom Makeup | Half-tied hair/Fallen horse bun | Ancient long dress/Light | Medium |
| Formal Appearance | Courtly Noble Makeup | High bun cloud hair | Court formal dress | Extremely elaborate |
| Night Private | Elegant/Peach Blossom Makeup | Loose hair/Fallen horse bun | Nightwear | Minimal |
| Grand Wedding Ceremony | Grand Wedding Makeup | High bun cloud hair | Wedding dress | Extremely elaborate |
| Martial Arts Action | Plain Makeup (extremely light) | Tied ponytail | Light everyday wear | Simple |

---

> **🔍 Uncovered Scene Inference Rules**
>
> When the scene/situation described by the user is not in the table above, infer based on the core genes of this style:
>
> | Inference Dimension | National Style 3D Rendering Genes |
> |---|---|
> | Makeup Intensity | Default Elegant Plain Makeup; Court/Power/Formal → Courtly Noble Makeup; Heart-fluttering/Sweet → Romantic Peach Blossom Makeup; Grand Wedding/Ceremony → Grand Wedding Makeup; Festival Gathering → Festival Celebration Makeup |
> | Hairstyle | Everyday/Boudoir → Half-tied hair or Fallen horse bun; Court/Formal → High bun cloud hair; Private/Night → Loose hair; Martial Arts/Action → Tied ponytail |
> | Costume | Ancient style is the base; Emotional scenes → Flowing long dress; Power/Formal → Court formal dress; Action → Light everyday wear; PBR material always maintained |
> | Accessory Elaborateness | Everyday → Medium; Formal/Court → Extremely elaborate (gold/silver hair accessories + necklace + jade pendant); Private → Minimal; Action → Simple |
> | Texture Baseline | PBR material + cinematic lighting always locked; volume and sheen take priority over flat decorative feel |

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
| Background | Plain gray solid color #B8B8B8 |
| Standing Pose | Natural standing, feet parallel and slightly apart, arms hanging naturally or slightly extended (**any pose change is prohibited**) |
| Expression | Subtle expression matching the makeup style (e.g., Elegant Plain Makeup → calm, Peach Blossom Makeup → smiling), limited to facial micro-expressions, not involving body actions |
| Lighting | Even soft light, main light from front + fill light from both sides, no hard shadows |
| Consistency | Face/makeup/hairstyle/hair accessories/costume/accessories are completely consistent across the four views |
| Frame Ratio | Recommended 4:1 or 3:1 |

---

## IX. Prompt Template

### Output Format Constraints

| Item | Constraint |
|---|---|
| Output Content | **Output only the prompt text**, do not output any other content |
| Prohibited Output | Quick reference tables, layered construction plans, visual constraint tables, prohibition tables, derivative plans, output suggestions, core element tables, and any other non-prompt content |
| Prohibited Scenes | Character derivative assets **do not include scene/environment descriptions**, do not output any scene/environment/weather/background narrative content (scenes belong to the scene asset category) |
| Prohibited Props | **Do not include any prop interactions**, do not output held items or interactive items such as umbrellas/swords/fans/books/lanterns/wine cups (props belong to the prop asset category) |
| Prohibited Pose Changes | **Do not change the base model pose**, do not output any actions or body posture changes such as walking/looking back/raising hand/sideways/running, maintain natural standing |
| Format | Directly output the usable prompt code block, no titles, tables, explanations, or plan comparisons needed |

### Full Costume & Makeup Overlay (Four Views)

Using the character base image as the base, img2img overlay costume, makeup, and styling,
3D rendering style, high-precision modeling, PBR material, National Style 3D, cinematic lighting,
Ancient-style {gender} character four-view character sheet, 3D rendering, high-precision modeling, 8K, ultra-realistic
character design sheet, character turnaround,
Keep the base image face unchanged, {overall temperament},
【L1·Makeup】Decide based on user cues: {Basic Makeup/Light Makeup/Formal Makeup}; use {makeup style}, PBR material rendering, {eyebrow makeup}, {eye makeup}, {lip makeup},
【L2·Hairstyle】{styling type}, high-precision clear hair strands, {hair accessory description},
【L3+L4·Costume】{main color}{cut}, {material}, {decorative craftsmanship}, clear clothing texture, PBR material rendering,
【L5·Accessories】{headwear}, {earrings}, {neckwear}, {waistwear},
Arranged side-by-side from left to right in the same frame: portrait close-up + front view + side view + back view,
Natural standing, plain gray solid background, even soft light, no hard shadows,
Four-view consistency, clear 3D ancient-style modeling, clear high-precision modeling,
No text in the image

---## X. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The overlaid face must be consistent with the base model |
| R2 | Clothing must use "clear fabric texture + PBR material rendering" |
| R3 | Female accessories must be "luxurious and exquisite + finely crafted" |
| R4 | Makeup, hairstyle, clothing, and accessories must have a unified style |
| R5 | Must output a four-view character sheet (portrait close-up + front view + side view + back view) |
| R6 | Must specify "plain gray solid-color background" |
| R7 | Must specify "four-view consistency" |
| R8 | **Output prompts only** — Do not output any non-prompt content such as quick reference tables, layered schemes, visual constraints, prohibitions, derivative schemes, or output suggestions |
| R9 | **No scene descriptions** — Character derivative assets do not involve scenes, environments, weather, or background narratives; scenes belong to an independent asset type |
| R10 | **No prop interaction** — Do not include any handheld or interactive items (umbrellas, swords, fans, books, etc.); props belong to an independent asset type |
| R11 | **Pose remains unchanged** — Must maintain the natural standing pose of the base model; any changes in action, posture, or stance are prohibited |
| R12 | **L1 must analyze before deciding** — First parse the user's facial cues, then determine base makeup, light makeup, or formal makeup |
| R13 | **All derivative assets require makeup** — In normal cases, do not maintain a bare face; use at least base makeup |
| R14 | **Makeup intensity is controlled** — Even when applying makeup, it must be restrained; modern heavy makeup or exaggerated cosmetic effects are not allowed |
| R15 | **Props/scenes/actions are not grounds for intensity escalation** — Based solely on props, environment, or actions, base makeup must not be elevated to a stronger makeup level |

### Strictly Prohibited

| ID | Prohibition |
|---|---|
| X1 | Facial offset after overlay |
| X2 | Accessories too simple/modern (for females) |
| X3 | Conflicting styles between makeup and clothing |
| X4 | Complex scene backgrounds (must be solid color) |
| X5 | Inconsistency in clothing/makeup across the four views |
| X6 | Any content other than the prompt (tables, schemes, suggestions, explanations, variants, etc.) |
| X7 | Adding scene descriptions to character derivative assets (street scenes, rain scenes, interiors, streets, weather, and other environmental elements) |
| X8 | Outputting sections such as "Core Element Quick Reference," "Layered Construction Scheme," "Visual Constraints," "Prohibitions," or "Derivative Schemes" |
| X9 | Adding any prop interaction (holding umbrellas, swords, fans, books, lanterns, wine cups, etc.) |
| X10 | Changing the base model's pose (action descriptions such as walking, looking back, raising a hand, turning sideways, running, looking down, or looking up) |
| X11 | Adding descriptions linking expression and posture (e.g., narrative descriptions like "walking at a 45° side angle with a slight smile at the corner of the mouth") |
| X12 | Applying a fixed makeup style directly without analyzing the user's cues |
| X13 | Incorrectly maintaining a bare face, resulting in derivative assets lacking the required makeup |
| X14 | Incorrectly upgrading makeup solely due to prop/scene/action terms, leading to an incorrect decision on makeup intensity |