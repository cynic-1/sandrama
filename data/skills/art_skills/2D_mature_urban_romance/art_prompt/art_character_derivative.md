# 2D Character Derivative Asset Generation · Constraint Manual

---

## I. Overlay Principles

1. **Unchanged Face** — After overlaying, facial features must be identical to the base model; facial deviation is prohibited.
2. **Unchanged Pose** — Maintain the base model's natural standing pose; any changes in pose, action, or body posture are prohibited.
3. **Layer-by-Layer Control** — Each layer is described independently to facilitate layer-by-layer replacement (change outfit without changing makeup).
4. **Unified Style** — All costume and makeup elements must adhere to the same aesthetic system.
5. **No Quality Degradation** — The quality standard after overlaying must not be lower than the base model.
6. **Pure Costume & Makeup Scope** — Only overlay makeup, hairstyle, clothing, accessories, and footwear. Introducing props, scenes, environments, or actions is prohibited.

---

## II. Overlay Hierarchy

| Layer | Content | Description |
|---|---|---|
| L0 | Base Model | Base character model, unmodified |
| L1 | Makeup (Decision Layer) | First analyze user cues, then decide the intensity of "Basic Makeup / Light Makeup / Formal Makeup" |
| L2 | Hairstyle | Buns/tied hair/braids + hair accessories |
| L3 | Innerwear | Replace the white basic innerwear |
| L4 | Outerwear/Main Outfit | Differentiated modern urban clothing (shirts/jackets/dresses/suits, etc.) |
| L5 | Accessories | Jewelry/watches/glasses/bags, etc. |
| L6 | Footwear | High heels/ankle boots/loafers/sneakers, etc., fully coordinated with the overall outfit |

> **Scope Boundary**: Character derivative assets include only layers L0–L6 (costume and makeup). They do not include props (handheld items such as phones/books/umbrellas/coffee cups), scene environments (indoor/outdoor/weather, etc.), or poses/actions (walking/looking back/raising hand, etc.). These belong to other asset categories.

---

## III. Makeup Constraints (L1)

### Strategy from Base Model to Derivative Makeup (Key)

> Although the character base model is bare-faced, derivative assets default to entering the makeup process. The system should analyze makeup needs based on user-provided cues and decide the intensity among Basic Makeup, Light Makeup, and Formal Makeup, rather than maintaining a bare face.

### L1 Cue Analysis and Makeup Decision

| Step | Processing Content | Decision Result |
|---|---|---|
| S1 | Extract user cues: facial state words, emotion words, intensity words | Form a makeup requirement summary |
| S2 | Filter non-makeup cues: props/scene/action/pose words are not used as basis for makeup | Prevent misjudgment |
| S3 | Match the makeup style matrix and provide an intensity level | Basic Makeup / Light Makeup / Formal Makeup |
| S4 | Generate the final L1 prompt | Output only the conclusion, not the analysis process |

### Cue-to-Makeup Mapping (Execution Standard)

| Cue Type | Typical Cues | L1 Decision |
|---|---|---|
| No obvious facial emphasis cues | Only clothing/hairstyle changes, no emphasis on emotion or state | Basic Makeup |
| Slight facial cues | Soft, smiling, light eyelash flutter, slightly lifted complexion | Light Makeup (very light) |
| Clear frailty cues | Pale complexion, very light lip color, slight redness under eyes | Frailty Makeup (Light Makeup) |
| Clear formal ceremony cues | Formal attire, ceremony, formal occasion | Formal Makeup (controlled) |

> **Decision Principle**: All derivative assets must have makeup. First look at facial cues to determine intensity and style; changes in props, scenes, or poses must not independently raise the makeup intensity.

### Female Makeup Style Matrix

| Style | Applicable Scene | Core Prompt |
|---|---|---|
| Elegant Natural Makeup | Daily, first meeting, workplace | Elegant makeup, lightly brushed eyebrows, natural clear face |
| Cold Elegant Frost Makeup | Formal, confrontation, business | Cold elegant makeup, sharp eyebrows and eyes, thin cold lips |
| Soft Coquettish Peach Makeup | Sweet romance, ambiguity, date | Peach makeup, slight redness at eye corners, moist lip color |
| Frailty Makeup | Injured, weak | Pale complexion, very light lip color, slight redness under eyes |
| Luxurious Evening Makeup | Party, banquet | Heavy luxurious makeup, striking red lips |

### Universal Base Skin (Shared by All Makeup)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | Celluloid texture, smooth and fine | Celluloid texture, smooth skin |
| Whiteness | Cool white skin, translucent not ashen | Cool white skin, fair skin |
| Inner Glow | Soft light from inside out | Inner glow, translucent skin |
| Prohibited | Matte/dead white/waxy/oily/overexposed | — |

### Basic Makeup Details (Default Level)

| Item | Constraint | Prompt |
|---|---|---|
| Eyebrows | Lightly groomed along the base model's brow shape, do not change brow type | Natural brow grooming, clean brow shape |
| Eyes | Very light eye makeup, emphasizing clarity and vitality | Clear eyes, very light inner eyeliner |
| Cheeks | Very light complexion lift, no obvious color buildup | Natural cheek complexion, subtle complexion lift |
| Lips | Nude pink or light pink tint, maintain restraint | Natural moist lip color, light pink lip color |
| Overall | Visible makeup, but very light makeup feel | Basic makeup, pseudo-bare-face makeup feel, natural |

### Male Makeup

| Item | Constraint | Prompt |
|---|---|---|
| Base Skin | Celluloid texture, fresh and natural | Celluloid texture, fresh skin |
| Principle | Pseudo-bare-face—looks like no makeup but skin is excellent | Pseudo-bare-face, naturally good skin |
| Eyebrows | Natural thick eyebrows, no drawn brows | Natural brow shape, strong brow shape |
| Lip Color | Natural blood color, slightly moist | Natural lip color, blood color feel |

---

## IV. Hairstyle Constraints (L2)

### Female Hairstyle Types

| Style | Description | Applicable | Prompt |
|---|---|---|---|
| Natural Loose Hair | Long hair falling naturally | Daily, workplace | Natural loose hair, smooth long hair |
| Half-Tied Hair | Top half tied, bottom hanging | Daily, commute | Half-tied hair, half-bun |
| Ponytail | High ponytail/low ponytail | Sports, casual | High ponytail, low ponytail |
| Updo | Elegant updo | Formal occasions | Elegant updo, updo |
| Twin Tails | Girl twin tails | Lively scenes | Twin tails, girl hairstyle |
| Full Tied Hair | Bun/bun head | Home, casual | Bun, bun head |

### Female Hair Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Style | Simple and exquisite, coordinated with clothing | Simple hair accessories, exquisite hair clips |
| Material | Metal/pearl fabric/cloth | Metal hair clips, pearl hair accessories |
| Craftsmanship | Exquisite craftsmanship, clear details | Exquisite craftsmanship, clear details |

### Male Hairstyle Types

| Style | Applicable | Prompt |
|---|---|---|
| Side-Parted Short Hair | Daily, business | Side-parted short hair, business hairstyle |
| Messy Medium Hair | Casual, artistic | Messy medium hair, artistic hairstyle |
| Sharp Short Hair | Sports, capable | Sharp short hair, fresh hairstyle |
| Medium-Long Hair | Formal, artistic | Medium-long hair, artistic hairstyle |

---

## V. Clothing Constraints (L3+L4)

### Female Clothing Matrix

| Style | Style | Applicable | Prompt |
|---|---|---|---|
| Business Formal | Suit skirt/shirt + suit pants | Workplace, formal | Business formal, professional suit |
| Casual Daily | T-shirt + jeans/dress | Daily, casual | Casual wear, daily clothing |
| Date Outfit | Dress/skirt | Date, date occasion | Date outfit, pretty dress |
| Sports Casual | Sportswear/hoodie/sport pants | Sports, casual | Sportswear, casual sports |
| Evening Gown | Formal evening gown | Party, dinner | Evening gown, formal gown |

### Differentiated Dressing Principles

| Item | Constraint | Description |
|---|---|---|
| Character Differentiation | Determine outfit refinement and cut based on age, profession, personality, and financial status | Prohibit all characters having the same style, color, and combination |
| Same Style Differentiation | Even if all are workplace wear, differentiate skirt/pants/outerwear cut/innerwear layers | Maintain unified aesthetics, do not uniformize |
| Scene Adaptation | Switch clothing plans for commute, date, home, and banquet respectively | Clothing should change with the context |

### Female Clothing Universal Constraints

| Item | Constraint | Prompt |
|---|---|---|
| Main Color | Soft color palette, low saturation, but different characters need their own color focus | Soft tones, low saturation colors, character-specific color scheme |
| Material | Modern fabric texture, clear texture | Modern fabric, clear texture |
| Quality | Clear fabric quality of clothing | Clear clothing quality, fabric texture |
| Layers | Clear clothing layers, reasonable coordination, no template-like uniform dressing | Clear clothing layers, proper coordination |

### Male Clothing Matrix

| Style | Applicable | Prompt |
|---|---|---|
| Business Formal | Shirt/suit/casual suit | Business formal, suit set |
| Casual Daily | Casual shirt/T-shirt + casual pants | Casual wear, daily clothing |
| Sports Casual | Sportswear/hoodie/sport pants | Sportswear, casual sports |
| Formal Gown | Formal gown, suit | Formal gown, suit gown |
| Home Casual | Loungewear, casual wear | Loungewear, casual clothing |

### Footwear Design (L6)

| Category | Applicable | Prompt |
|---|---|---|
| Female Commute Shoes | Workplace, formal | Pointed high heels, kitten heels, loafers, fine leather |
| Female Daily Shoes | Casual, date | Low-cut flats, ankle boots, white sneakers, exquisite shoe shape |
| Male Commute Shoes | Business, formal | Leather shoes, derby shoes, loafers, clean and crisp shoe surface |
| Male/Female Casual Shoes | Daily, sports | Sneakers, canvas shoes, simple casual shoes, coordinated with clothing |

> Footwear must explicitly state style, material, and color, and be consistent with the clothing style; omitting foot design or defaulting all characters to wear the same shoes is prohibited.

---

## VI. Accessory Constraints (L5)

### Female Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Jewelry | Simple and exquisite, not overly exaggerated | Simple jewelry, exquisite earrings |
| Watch | Exquisite watch, fashionable watch | Fashionable watch, exquisite wristwatch |
| Bag | Shoulder bag/handbag, clear quality | Handbag, quality bag |
| Glasses | Fashionable glasses/sunglasses (optional) | Fashionable glasses, exquisite sunglasses |
| Belt | Exquisite belt, clear details | Exquisite belt, fashionable belt |

### Male Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Watch | Fashionable watch, clear quality | Fashionable watch, exquisite wristwatch |
| Glasses | Fashionable glasses/sunglasses (optional) | Fashionable glasses, exquisite sunglasses |
| Belt | Exquisite belt, clear details | Exquisite belt, fashionable belt |
| Tie | Tie/bow tie (formal occasions) | Fashionable tie, exquisite bow tie |

---

## VII. Costume & Makeup Combination Quick Reference

| Scene | Makeup | Hairstyle | Clothing | Accessories | Footwear |
|---|---|---|---|---|---|
| Workplace Commute | Elegant Natural Makeup | Half-tied hair/Updo | Business formal (can differentiate suit skirt/suit pants/trench coat layering) | Simple jewelry/watch | High heels/Loafers/Leather shoes |
| First Date | Soft Coquettish Peach Makeup | Natural loose hair | Date outfit (dress/knit set/skirt) | Exquisite jewelry/bag | Flats/Ankle boots |
| Daily Casual | Basic Makeup | Ponytail/Natural loose hair | Casual daily (T-shirt jeans/shirt layering/hoodie) | Simple accessories | White sneakers/Canvas shoes |
| Formal Occasion | Cold Elegant Frost Makeup | Updo/Half-tied | Business formal/Evening gown | Exquisite jewelry/watch | High heels/Formal shoes/Leather shoes |
| Sports Casual | Basic Makeup (very light) | High ponytail/Sharp short hair | Sports casual | Sports watch/Sports accessories | Sneakers |
| Party Gathering | Formal Makeup | Elegant updo/Loose hair | Evening gown/Fashionable outfit | Exquisite jewelry/Exquisite accessories | Stiletto heels/Ankle boots/Formal shoes |
| Home Casual | Bare face/Basic Makeup | Bun/Natural loose hair | Home casual | None or few accessories | Soft-soled slippers/Simple home shoes |

---

> **🔍 Uncovered Scene Inference Rules**
>
> When the user-described scene/situation is not in the table above, infer based on the core genes of this style:
>
> | Inference Dimension | 2D Urban Romance Genes |
> |---|---|
> | Makeup Intensity | Default Elegant Natural Makeup; tension/confrontation/authority words → Cold Elegant Frost Makeup; sweet romance/ambition/heart flutter → Soft Coquettish Peach Makeup; weak/injured → Frailty Makeup; dinner/party → Luxurious Evening Makeup |
> | Hairstyle | Workplace/commute → Half-tied hair or Updo; daily/romance → Natural loose hair; sports/action → High ponytail; formal occasion → Elegant updo |
> | Clothing | Modern urban scenes preferred; higher emotional intensity → higher clothing refinement; tension scenes → Business formal/Cold color scheme |
> | Accessory Complexity | Daily → Simple; date → Exquisite jewelry + bag; formal/dinner → Exquisite jewelry + watch; sports → Simple or none |
> | Color Tone Tendency | Cool white skin + low saturation urban color scheme; ambiguous scenes → Warm pink tones; confrontation/tension → Cold gray + black/white contrast |

## VIII. Four-View Character Sheet Specification

> After overlaying derivative costume and makeup, a four-view character sheet must still be output to ensure consistency of costume and makeup from all angles.

### View Definitions

| Position | View | Angle | Shot Size | Requirement | Prompt |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Face to collarbone | Face occupies 60%+, clear facial features/makeup | `portrait closeup`, `face detail`, `makeup detail` |
| Left 2 | Front View | Front 0° | Full-body standing | Facing camera, full front view of clothing | `front view`, `height mark` |
| Right 2 | Side View | Right 90° | Full-body standing | Pure side profile, side layers of clothing | `side view`, `profile`, `height mark` |
| Right 1 | Back View | Rear 180° | Full-body standing | Clear hair accessories on back of head/back clothing/hair ends | `back view`, `rear view`, `height mark` |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Pure neutral gray `#E8E8E8` |
| Standing Pose | Natural standing, feet parallel and slightly apart, arms hanging naturally or slightly extended (**any pose change is prohibited**) |
| Expression | Subtle expression matching the makeup style (e.g., Elegant Natural Makeup → calm, Peach Makeup → smiling), limited to facial micro-expressions, not involving body actions |
| Lighting | Even soft light, main light from front + fill light from both sides, no hard shadows |
| Consistency | Face/makeup/hairstyle/hair accessories/clothing/accessories/footwear are completely consistent across the four views |
| Frame Ratio | Recommended 4:1 or 3:1 |

---

## IX. Prompt Template

### Output Format Constraints

| Item | Constraint |
|---|---|
| Output Content | **Output only the prompt text**, do not output any other content |
| Prohibited Output | Quick reference tables, layered construction plans, visual constraint tables, prohibition tables, derivative plans, output suggestions, core element tables, and any non-prompt content |
| Prohibited Scenes | Character derivative assets **do not include scene/environment descriptions**, do not output any scene/environment/weather/background narrative content (scenes belong to the scene asset category) |
| Prohibited Props | **Do not include any prop interactions**, do not output handheld items or interactive items such as phones/books/umbrellas/coffee cups (props belong to the prop asset category) |
| Prohibited Pose Changes | **Do not change the base model pose**, do not output any actions or posture changes such as walking/looking back/raising hand/sideways/running, maintain natural standing |
| Format | Directly output a usable prompt code block, no titles, tables, explanations, or plan comparisons required |

### Full Costume & Makeup Overlay (Four Views)

Using the character base image as the base, overlay costume and makeup via img2img,
2D {gender} character four-view character sheet, celluloid coloring, modern urban style, high contrast, extreme detail, 8K, ultra-realistic
character design sheet, character turnaround,
maintain base image face unchanged, {overall temperament},
【L1·Makeup】Decide based on user cues: {Basic Makeup/Light Makeup/Formal Makeup}; use {makeup style}, soft skin glow, {eyebrow makeup}, {eye makeup}, {lip makeup},
【L2·Hairstyle】{style type}, distinct hair layers, {hair accessory description},
【L3+L4·Clothing】{main color}{style}, {material}, {decorative craftsmanship}, differentiated coordination based on character identity and scene, avoid all characters having same style and color, clear clothing quality, ultra-clear texture,
【L5·Accessories】{headwear}, {earrings}, {watch}, {bag},
【L6·Footwear】{shoe type}, {shoe surface material}, {heel/sole description}, consistent with clothing style,
arranged side-by-side from left to right in the same frame: portrait close-up + front view + side view + back view,
natural standing, pure neutral gray background, even soft light, no hard shadows,
four-view consistency, delicate face rendering, delicate hair rendering, ultra-clear texture details
no text in the image

---## X. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The overlaid face must be consistent with the base model |
| R2 | Clothing must use "clear fabric texture + ultra-clear texture" |
| R3 | Female accessories must be "minimalist and exquisite + clear craftsmanship" |
| R4 | Makeup, hairstyle, clothing, accessories, and footwear must have a unified style |
| R5 | Must output a four-view character sheet (portrait close-up + front view + side view + back view) |
| R6 | Must specify "pure neutral gray background" |
| R7 | Must specify "four-view consistency" |
| R8 | **Output prompts only** — Do not output any non-prompt content such as quick reference tables, layered schemes, visual constraints, prohibited items, derivative schemes, or output suggestions |
| R9 | **No scene descriptions** — Character derivative assets do not involve scenes, environments, weather, or background narratives; scenes are an independent asset type |
| R10 | **No prop interaction** — Do not include any handheld or interactive items (phones, books, umbrellas, coffee cups, etc.); props are an independent asset type |
| R11 | **Posture remains unchanged** — Must maintain the natural standing posture of the base model; any changes in action, body shape, or pose are prohibited |
| R12 | **L1 must analyze before deciding** — First parse the user's facial cues, then determine base makeup, light makeup, or formal makeup |
| R13 | **All derivative assets require makeup and styling** — In normal cases, do not maintain a bare face; use at least base makeup |
| R14 | **Makeup intensity is controlled** — Even when applying makeup, it must be restrained; exaggerated makeup effects are not allowed |
| R15 | **Props/scenes/actions are not grounds for intensity escalation** — Based solely on props, environment, or actions, base makeup must not be elevated to stronger makeup |
| R16 | **Footwear design must be explicit** — At least two of shoe type, material, and color must be specified; foot coordination cannot be omitted |
| R17 | **Clothing must be differentiated** — Outfits must vary based on character identity, age, personality, and scene changes; using the same clothing template for all characters is prohibited |

### Strictly Prohibited

| ID | Prohibited |
|---|---|
| X1 | Facial offset after overlay |
| X2 | Accessories that are too simple or exaggerated |
| X3 | Conflicting styles between makeup, clothing, and footwear |
| X4 | Complex scene backgrounds (must be pure gray background) |
| X5 | Inconsistency in clothing, makeup, and styling across the four views |
| X6 | Any content other than the prompt (tables, schemes, suggestions, explanations, variants, etc.) |
| X7 | Adding scene descriptions to character derivative assets (modern indoor/outdoor/weather and other environmental elements) |
| X8 | Omitting footwear design, resulting in feet having only the default base model or no clear coordination |
| X9 | All characters using the same style, color, and cut of clothing, lacking character differentiation |
| X10 | Outputting sections such as "Core Elements Quick Reference," "Layered Construction Scheme," "Visual Constraints," "Prohibited Items," or "Derivative Schemes" |
| X11 | Adding any prop interaction (holding a phone, book, umbrella, coffee cup, etc.) |
| X12 | Changing the base model's posture (action descriptions such as walking, looking back, raising a hand, turning sideways, running, looking down, or looking up) |
| X13 | Adding descriptions linking expressions and posture (narrative descriptions such as "walking at a 45° side angle with a slight smile at the corner of the mouth") |
| X14 | Directly applying fixed makeup without analyzing the user's cues |
| X15 | Incorrectly maintaining a bare face, causing derivative assets to lack the required makeup and styling |
| X16 | Incorrectly upgrading makeup solely due to prop/scene/action terms, leading to incorrect makeup intensity decisions |

