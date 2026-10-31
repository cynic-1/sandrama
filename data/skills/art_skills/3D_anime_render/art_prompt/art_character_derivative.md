# 3D Animation Rendering Urban Character Derivative Asset Generation · Constraint Manual

---

## I. Overlay Principles

1. **Face Invariance** — After overlay, facial features must be completely identical to the base model; facial deviation is prohibited.
2. **Pose Invariance** — Maintain the natural standing pose of the base model; any pose/action/posture changes are prohibited.
3. **Layer-wise Control** — Each layer is described independently to facilitate layer-by-layer replacement (change outfit without changing makeup).
4. **Style Unity** — All costume and makeup elements must conform to the same urban animation aesthetic system.
5. **Quality Non-Degradation** — The quality standard after overlay must not be lower than that of the base model.
6. **Pure Costume & Makeup Scope** — Only overlay makeup/hair/costume/accessories; introducing props, scenes, environments, or actions is prohibited.

---

## II. Overlay Layers

| Layer | Content | Description |
|---|---|---|
| L0 | Base Model | Base image model, no modifications |
| L1 | Makeup (Decision Layer) | First analyze user cues, then decide the intensity of "Basic Makeup / Light Makeup / Formal Makeup" |
| L2 | Hairstyle | Loose hair/Ponytail/Updo/Half-up + Hair accessories |
| L3 | Innerwear/Base Layer | Replace the white basic innerwear |
| L4 | Outerwear/Main Costume | Modern urban clothing |
| L5 | Accessories | Headwear/Earrings/Necklace/Waist accessories/Hand accessories |

> **Scope Boundary**: Character derivative assets only include layers L0–L5 (costume, makeup, and hair). They do not include props (umbrellas/phones/computers/coffee, etc., handheld items), scene environments (indoor/outdoor/weather, etc.), or poses/actions (walking/looking back/raising hand, etc.). These belong to the scope of other asset types.

---

## III. Makeup Constraints (L1)

### Strategy from Base Model to Derivative Makeup (Key)

> Although the character base model is bare-faced, derivative assets default to entering the makeup process. The system should analyze makeup needs based on cues provided by the user and decide the intensity among Basic Makeup, Light Makeup, and Formal Makeup, rather than remaining bare-faced.

### L1 Cue Analysis and Makeup Decision

| Step | Processing Content | Decision Result |
|---|---|---|
| S1 | Extract user cues: facial state words, emotion words, intensity words | Form a makeup requirement summary |
| S2 | Filter non-makeup cues: props/scene/action/pose words are not used as basis for makeup | Prevent misjudgment |
| S3 | Match makeup style matrix and assign intensity level | Basic Makeup / Light Makeup / Formal Makeup |
| S4 | Generate final L1 prompt | Output only the conclusion, not the analysis process |

### Cue-to-Makeup Mapping (Execution Standard)

| Cue Type | Typical Cues | L1 Decision |
|---|---|---|
| No obvious facial emphasis cues | Only costume/hair changes, no emphasis on emotion or state | Basic Makeup |
| Slight facial cues | Gentle, smiling, light eyelash flutter, slight complexion lift | Light Makeup (extremely light) |
| Clear frailty cues | Pale complexion, extremely pale lip color, slight redness under eyes | Frailty Makeup (Light Makeup) |
| Clear formal ceremony cues | Formal attire, ceremony, luxurious appearance | Formal Makeup (controlled) |

> **Judgment Principle**: All derivative assets must have makeup; first look at facial cues to determine intensity and style. Changes in props, scenes, or poses must not independently raise the makeup intensity.

### Female Makeup Style Matrix

| Style | Applicable Scenarios | Core Prompt |
|---|---|---|
| Elegant Natural Makeup | Daily, first meeting, work | Elegant makeup, lightly brushed eyebrows, natural clear face |
| Cold Frost Makeup | Formal, confrontation, power | Cold and glamorous makeup, sharp eyebrows and eyes, thin cold lips |
| Soft Peach Makeup | Sweet romance, ambiguity, heart-flutter | Peach makeup, slight redness at eye corners, moist lip color |
| Frailty Makeup | Injured, weak | Pale complexion, extremely pale lip color, slight redness under eyes |
| Luxurious Evening Makeup | Formal evening, formal attendance | Elaborate makeup, striking lip color |

### Universal Base Skin (Shared by All Makeup)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | Celluloid rendering, soft sheen | Cartoon skin, soft skin texture |
| Whiteness | Cool white skin, translucent not ashen | Milky skin, milky white skin |
| Subsurface Scattering | Soft light feeling from inside out | Subsurface scattering, translucent glowing skin |
| Prohibited | Matte/dead white/waxy/oily/overexposed | — |

### Basic Makeup Refinement (Default Level)

| Item | Constraint | Prompt |
|---|---|---|
| Eyebrows | Lightly groom along the base model's brow shape, do not change brow type | Natural brow grooming, clean brow shape |
| Eyes | Extremely light eye makeup, emphasize clarity and spirit | Clear eyes, extremely light inner eyeliner |
| Cheeks | Extremely light complexion lift, no obvious color buildup | Natural cheek complexion, slight complexion lift |
| Lips | Nude pink or light pink tint, maintain restraint | Natural moist lip color, light pink lip color |
| Overall | Visible makeup, but very light makeup feel | Basic makeup, bare-face makeup feel, natural refinement |

### By Area (Example: Elegant Natural Makeup)

| Area | Constraint | Prompt |
|---|---|---|
| Base Makeup | Thin and translucent, water-light micro-sheen | Thin base makeup, water-light creamy skin |
| Brow Makeup | Distant mountain brows/willow leaf brows, light gray-brown brush | Distant mountain dark brows, lightly brushed eyebrows |
| Eye Makeup | Extremely light eyeshadow, inner eyeliner, long lashes | Clear eye makeup, long lashes |
| Blush | Extremely light pink, light sweep on apple of cheeks | Extremely light blush, light pink flush |
| Lip Makeup | Moist light pink, micro-sheen | Moist light pink lip color |

### Male Makeup

| Item | Constraint | Prompt |
|---|---|---|
| Base Skin | Celluloid rendering, fair and translucent, fresh and natural | Cartoon skin, creamy skin, luminous skin |
| Principle | Bare-face look—appears unmade-up but skin is excellent | Bare-face look, naturally good skin |
| Eyebrows | Natural thick brows, no drawn brows | Natural sword brows, heroic brow shape |
| Lip Color | Natural blood color, slightly moist | Natural lip color, blood color feel |

---

## IV. Hairstyle Constraints (L2)

### Female Styling Types

| Style | Description | Application | Prompt |
|---|---|---|---|
| Natural Loose Hair | Long hair falling naturally, smooth and glossy | Daily, casual | Natural loose hair, smooth long hair |
| High Ponytail | High tied ponytail, energetic and capable | Sports, commute | High ponytail, energetic ponytail |
| Low Ponytail | Low tied ponytail, elegant and simple | Daily, business | Low ponytail, elegant ponytail |
| Half-Up Hair | Top half tied + bottom natural fall | Daily, date | Half-up hair, half-tied hairstyle |
| Twin Tails | Ponytails on both sides, youthful and lively | Lively scenes | Twin tails, lively hairstyle |
| Elegant Updo | Updo/bun, formal feel | Formal occasions | Elegant updo, low bun |

### Female Hair Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Style | Modern urban style, simple and exquisite, matching costume | Modern hair accessories, urban style |
| Material | Metal/Fabric/Acrylic | Metal hair clip, fabric hair accessory |
| Craft | Exquisite craftsmanship, cartoonized presentation | Fine craftsmanship, exquisite decoration |

### Male Styling Types

| Style | Application | Prompt |
|---|---|---|
| Fresh Short Hair | Daily, business | Fresh short hair, neat hairstyle |
| Side/Center Part | Formal, commute | Side-parted hairstyle, center-parted hairstyle |
| Fluffy Messy | Casual, artistic | Fluffy hairstyle, messy and casual |
| Medium-Length Natural | Casual, artistic | Medium-length hair, natural fall |

---

## V. Costume Constraints (L3+L4)

### Female Costume Matrix

| Style | Style/Item | Application | Prompt |
|---|---|---|---|
| Urban Commute Wear | Shirt/Suit/Skirt | Work, daily | Commute clothing, urban professional wear |
| Casual Everyday Wear | T-shirt/Jeans/Hoodie | Daily, casual | Casual clothing, comfortable outfit |
| Evening Gown | Dress/Gown | Banquet, date | Evening gown, elegant dress |
| Sportswear | Sports set/Sports vest | Sports, fitness | Sportswear, energetic outfit |
| Formal Gown | High-end custom gown | Formal occasions | Formal gown, luxurious dress |

### Female Costume General Constraints

| Item | Constraint | Prompt |
|---|---|---|
| Main Color | Warm tones dominant, fits urban feel | Warm-toned clothing, urban color scheme |
| Material | Real material feel + celluloid rendering | Clear clothing texture, celluloid material |
| Texture | Clear texture but not overly realistic | Clear clothing texture, cartoon texture |
| Shoulders | Natural shoulders, moderate decoration | Natural shoulders, moderate decoration |
| Layers | Moderate layers, not overly complex | Moderate layers, simple and distinct |

### Male Costume Matrix

| Style | Application | Prompt |
|---|---|---|
| Urban Casual Wear | Shirt/Jeans/Casual jacket | Daily, casual | Casual clothing, urban style |
| Business Formal Wear | Suit/Shirt/Tie | Work, formal | Business formal wear, professional look |
| Sports Set | Sportswear/Sports set | Sports, fitness | Sportswear, energetic outfit |
| Daily Casual Wear | T-shirt/Jeans/Hoodie | Casual, private | Daily casual wear, comfortable outfit |
| Formal Gown | High-end custom suit/Gown | Formal occasions | Formal gown, luxurious look |

---

## VI. Accessory Constraints (L5)

### Female Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Headwear | Modern urban style, not too thin | Modern hair accessories, exquisite headwear |
| Earrings | Exquisite studs/drop earrings | Exquisite earrings, urban style |
| Neckwear | Exquisite necklace/choker | Exquisite necklace, simple design |
| Waistwear | Simple belt/decorative band | Simple belt, urban accessory |
| Handwear | Exquisite bracelet/watch | Exquisite watch, urban accessory |

### Male Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Glasses | Modern glasses/sunglasses | Modern glasses, fashionable accessory |
| Belt | Simple belt/leather belt | Simple belt, urban style |
| Watch | Exquisite watch/sports watch | Exquisite watch, urban accessory |
| Backpack | Urban backpack/briefcase | Urban backpack, practical accessory |
| Keychain | Simple keychain | Simple keychain, urban detail |

---

## VII. Costume & Makeup Combination Quick Reference

| Scene | Makeup | Hairstyle | Costume | Accessories |
|---|---|---|---|---|
| Daily Commute | Elegant Natural Makeup | Half-up/Ponytail | Urban Commute Wear | Simple |
| Casual Date | Soft Peach Makeup | Half-up/Loose hair | Casual Everyday Wear | Medium |
| Business Meeting | Cold Frost Makeup | Half-up/Tied hair | Business Formal Wear | Exquisite |
| Sports Fitness | Light Makeup | Ponytail/Tied hair | Sportswear | Simple |
| Formal Evening | Luxurious Evening Makeup | Updo/Half-up | Evening Gown | Extremely elaborate |
| Weekend Shopping | Light Makeup | Loose hair/Half-up | Casual Everyday Wear | Medium |
| Sports Competition | Light Makeup | Ponytail/Tied hair | Sportswear | Simple |

---

> **🔍 Uncovered Scene Inference Rules**
>
> When the scene/situation described by the user is not in the table above, infer based on the core genes of this style:
>
> | Inference Dimension | 3D Animation Rendering Urban Gene |
> |---|---|
> | Makeup Intensity | Default Elegant Natural Makeup; Formal/Business → Cold Frost Makeup; Sweet Romance/Date → Soft Peach Makeup; Weak/Injured → Frailty Makeup; Evening/Formal Attire → Luxurious Evening Makeup |
> | Hairstyle | Daily/Commute → Half-up or Ponytail; Casual/Date → Natural Loose Hair; Formal → Updo; Sports → High Ponytail; Twin Tails for youthful lively scenes |
> | Costume | Full coverage of urban scenes; formality of occasion determines costume refinement (Commute < Daily < Date < Evening); 3D celluloid material always maintained |
> | Accessory Elaborateness | Sports → Simple; Daily/Commute → Simple; Date → Medium Exquisite; Formal Evening → Extremely Elaborate |
> | Quality Baseline | Celluloid rendering + soft lighting always locked; prohibited from sliding toward realistic photography or flat 2D anime texture |

## VIII. Four-View Setting Sheet Specification

> After derivative costume and makeup overlay, a four-view setting sheet must still be output to ensure consistency of costume, makeup, and hair from all angles.

### View Definitions

| Position | View | Angle | Shot Size | Requirement | Prompt |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Face to collarbone | Face occupies 60%+, clear facial features/makeup | portrait closeup, face detail, makeup detail |
| Left 2 | Front View | Front 0° | Full-body standing | Facing camera, full front view of costume | front view, height mark |
| Right 2 | Side View | Right 90° | Full-body standing | Pure side profile, side layers of costume | side view, profile, height mark |
| Right 1 | Back View | Rear 180° | Full-body standing | Clear back hair accessories/back costume/hair ends | back view, rear view, height mark |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Pure neutral gray #E8E8E8 |
| Standing Pose | Natural standing, feet parallel and slightly apart, arms hanging naturally or slightly extended (**any pose change is prohibited**) |
| Expression | Subtle expression matching the makeup style (e.g., Elegant Natural Makeup → calm, Peach Makeup → smiling), limited to facial micro-expressions, not involving body movements |
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
| Prohibited Scenes | Character derivative assets **do not include scene/environment descriptions**, do not output any scene/environment/weather/background narrative content (scenes belong to the scene asset scope) |
| Prohibited Props | **Do not include any prop interactions**, do not output handheld items or interactive items such as umbrellas/phones/computers/coffee (props belong to the prop asset scope) |
| Prohibited Pose Changes | **Do not change the base model pose**, do not output any actions or posture changes such as walking/looking back/raising hand/sideways/running, maintain natural standing |
| Format | Directly output the usable prompt code block, no titles, tables, explanations, or plan comparisons required |

### Full Costume & Makeup Overlay (Four Views)

```
Using the character's base image as the base, overlay makeup and styling via img2img,
3D animation rendering, cinematic lighting, vibrant cel-shaded texture, high-detail materials, pleasant and healing atmosphere, cartoon urban style, high-detail cartoon materials, moderate cartoon proportions, warm color palette, 8K ultra-high definition, cinematic composition, soft light and shadow layers, bright cartoon rendering style, warm and healing, {gender} character four-view setting sheet,
anime style, cel-shaded, 3D animation render, film lighting,
character design sheet, character turnaround,
Keep the base facial features unchanged, {overall temperament},
【L1·Makeup】Decide based on user clues: {base makeup/light makeup/formal makeup}; use {makeup style}, cel-shaded skin, {eyebrow makeup}, {eye makeup}, {lip makeup},
【L2·Hairstyle】{style type}, smooth hair strand rendering, {hair accessory description},
【L3+L4·Clothing】{main color}{style}, {material}, {decorative craft}, clear clothing texture, cel-shaded material,
【L5·Accessories】{headwear}, {earrings}, {necklace}, {waist accessory},
Arranged side-by-side from left to right in the same frame: portrait close-up + front view + side view + back view,
Natural standing pose, pure neutral gray background, even soft light, no hard shadows,
Four-view consistency, delicate facial rendering, delicate hair strand rendering, clear texture details,
Cel-shaded rendering style, soft light and shadow, moderate cartoon proportions, combined with realistic materials,
8K ultra-high definition, cinematic composition,
No text of any kind in the image
```

---

## X. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The overlaid face must be consistent with the base model |
| R2 | Clothing must use "clear fabric texture + cel-shaded material" |
| R3 | Female accessories must be "modern urban style + exquisite craftsmanship" |
| R4 | Makeup/hair/clothing/accessories styles must be unified |
| R5 | Must output a four-view character sheet (portrait close-up + front view + side view + back view) |
| R6 | Must specify "pure neutral gray background" |
| R7 | Must specify "four-view consistency" |
| R8 | **Output prompts only** — Prohibited from outputting any non-prompt content such as quick reference tables, layered schemes, visual constraints, prohibitions, derivative schemes, or output suggestions |
| R9 | **No scene descriptions** — Character derivative assets do not involve scenes/environments/weather/background narratives; scenes belong to an independent asset type |
| R10 | **No prop interaction** — Does not include any handheld/interactive items (umbrellas/phones/computers, etc.); props belong to an independent asset type |
| R11 | **Pose remains unchanged** — Must maintain the natural standing pose of the base model; any changes in action/posture/pose are prohibited |
| R12 | **L1 must analyze before deciding** — First parse the user's facial cues, then determine basic makeup/light makeup/formal makeup |
| R13 | **All derivative assets require makeup** — Under normal circumstances, do not maintain a bare face; use at least basic makeup |
| R14 | **Makeup intensity is controlled** — Even when applying makeup, it must be restrained; modern heavy makeup/exaggerated makeup effects are not allowed |
| R15 | **Props/scenes/actions are not grounds for intensity escalation** — Based solely on props, environment, or actions, basic makeup must not be elevated to stronger makeup |
| R16 | Must include 3D animation rendering keywords (cel-shaded, 3D animation render, anime style) |
| R17 | Must include 8K ultra-high-definition, cinematic composition keywords |
| R18 | Must include cinematic lighting keywords (film lighting) |

### Strictly Prohibited

| ID | Prohibition |
|---|---|
| X1 | Facial offset after overlay |
| X2 | Accessories too simple/modern (for females) |
| X3 | Makeup/clothing styles conflict with each other |
| X4 | Complex scene backgrounds (must be pure gray background) |
| X5 | Inconsistency in clothing/makeup across the four views |
| X6 | Any content other than the prompt (tables/schemes/suggestions/explanations/variants, etc.) |
| X7 | Adding scene descriptions to character derivative assets (mountain paths/rain scenes/indoors/streets/weather, etc. environmental elements) |
| X8 | Outputting sections such as "Core Elements Quick Reference," "Layered Construction Scheme," "Visual Constraints," "Prohibitions," or "Derivative Schemes" |
| X9 | Adding any prop interaction (holding phones/computers/coffee/bags, etc.) |
| X10 | Changing the base model's pose (action descriptions such as walking/looking back/raising hand/sideways/running/looking down/looking up) |
| X11 | Adding descriptions linking expression and pose (narrative descriptions such as "walking at a 45° angle with a slight smile at the corner of the mouth") |
| X12 | Applying fixed makeup directly without analyzing user cues |
| X13 | Incorrectly maintaining a bare face, resulting in derivative assets lacking the required makeup |
| X14 | Incorrectly upgrading makeup solely due to prop/scene/action terms, leading to incorrect makeup intensity decisions |
| X15 | Using realistic photography terms (such as real photography, photorealistic, RAW photo, etc.) |
| X16 | Cel-shaded texture being excessive or insufficient; must be kept moderate |