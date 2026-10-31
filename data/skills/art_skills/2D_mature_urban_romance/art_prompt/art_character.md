# 2D Character Base Appearance Generation · Constraint Manual

---

## I. Base Appearance Principles

1. **Face is the Soul** — Facial features are the character's sole anchor; detail level must match the animation style.
2. **Character-First** — Base attire is determined by the character description (identity/occupation/gender/scene) to define their regular clothing; subsequent specific costumes are added as overlay layers.
3. **Four-View Consistency** — Face/body type/hair/base clothing must be highly consistent across all views.
4. **Emotional Conveyance** — Even in a no-makeup state, the character's temperament (cool/soft/seductive/stern) must be reflected.

---

## II. Facial Constraints

> Fixed facial feature parameters are no longer used. AI is driven by the character description (gender/age/personality/temperament) to freely generate facial features, ensuring visual differentiation between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial Features | Naturally derived from character description; no preset face shape/eye shape/eyebrow shape/nose shape/lip shape |
| Style Base | 2D animation style, cel shading, low-saturation cool tones, cinematic composition |
| Temperament | Must extract overall temperament keywords (e.g., cool/warm/seductive) from character description and include them in the prompt |
| Expression | Neutral micro-expression, consistent with character temperament |

---

## III. Skin Texture Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Cool white skin, uniform across body, translucent white | Cool white skin, fair complexion |
| Sheen | Soft light effect, neither matte nor oily | Soft skin glow, delicate skin texture |
| Texture | Fine and smooth, cel-shading quality | Delicate skin, skin texture |
| Exposed Skin | Face/neck/collarbone/hands | Elegant shoulder and neck lines, fair skin |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Fair and translucent, healthy look, uniform across body | Fair skin tone, healthy complexion |
| Sheen | Fresh light effect, natural sheen | Fresh skin, translucent skin |
| Texture | Clean and crisp, cel-shading sheen | Delicate skin texture, crisp facial features |

---

## IV. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 160-170cm; height reflected via head-to-body ratio conversion | `{height}cm tall`, `{height description e.g., tall slender woman}` |
| Head-to-Body Ratio | 6.5 to 7.5 heads; ratio = height ÷ head length; strictly constrains full-body proportions | `6.5-7.5 heads tall proportion`, slender build |
| Shoulders & Neck | Slender shoulder line, clearly visible collarbone | Slender shoulder line, distinct collarbone |
| Hands | Slender and fair, distinct knuckles, five normal fingers | Slender hands, distinct knuckles |
| Posture | Modern urban female, natural posture | Natural posture, elegant stance |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 175-185cm; height reflected via head-to-body ratio conversion | `{height}cm tall`, `{height description e.g., tall imposing man}` |
| Head-to-Body Ratio | 7 to 8 heads; ratio = height ÷ head length; strictly constrains full-body proportions | `7-8 heads tall proportion`, tall build |
| Shoulders & Neck | Broad shoulders, strong neck | Broad shoulders, narrow waist |
| Hands | Distinct knuckles, large palms, five normal fingers | Distinct finger knuckles |
| Posture | Modern urban male, natural posture | Upright stance, composed posture |

### Height - Head-to-Body Ratio Conversion Reference

| Height (cm) | Head-to-Body Ratio | Head Length (cm) | Applicable Description |
|---|---|---|---|
| 155-160 | 6.5-7.0 | ~22cm | Petite and delicate |
| 160-165 | 7.0-7.5 | ~22cm | Slender and elongated |
| 165-170 | 7.0-7.5 | ~22cm | Tall and elegant (Female default) |
| 170-175 | 7.5-8.0 | ~22cm | Elongated and upright |
| 175-180 | 7.5-8.0 | ~22cm | Tall and heroic (Male default) |
| 180-185 | 8.0 | ~22.5cm | Tall and imposing |
| 185-190 | 8.0-8.5 | ~22cm | Tall and powerful |

---

## V. Base Hairstyle Constraints

> Only defines natural loose hair or simple tied hair; hair accessories are added in the costume derivation phase.

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Pure black, dark blue, or dark brown; no highlights | Black long hair, dark long hair |
| Hair Length | Shoulder-length, waist-length, or longer | Shoulder-length hair, waist-length hair |
| Hair Texture | Distinct layers, clear lines | Distinct hair layers, delicate hair rendering |
| Style | Natural loose hair, center/side part, no accessories | Long hair falling naturally, smooth long hair |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Pure black or dark brown | Black hair, dark short/medium hair |
| Hair Length | Short to medium-long | Short hair, medium-long hair |
| Hair Texture | Distinct layers, clear texture | Distinct hair layers, delicate hair rendering |
| Style | Natural loose hair or simple side part, no crown | Hair falling naturally, side-parted hairstyle |

---

## VI. Base Clothing Constraints

> Base clothing is determined by the character description (identity/occupation/gender/scene) to define their most natural regular attire, serving as the character's "daily default state"; formal/special derived costumes are added in the costume derivation phase. **Underwear base layers are prohibited**.

### Attire Selection Principles

| Character Identity | Default Attire Direction |
|---|---|
| Student | Modern school uniform / Academy attire |
| Office Worker | Professional casual wear (shirt + pants/skirt, light suit) |
| Home/Casual | Urban casual wear (hoodie/T-shirt + jeans/dress) |
| Fashion/Date | Urban trendy attire |
| Special Occupation | Corresponding identity attire (doctor/police/teacher, etc.) |
| Character Description Unclear | Urban everyday wear, low-saturation cool tones |

### Attire Uniformity Rules

- Clothing style must align with modern urban 2D aesthetics (cel shading, low-saturation cool tones)
- Colors must be low-saturation, no complex patterns/decorations, to facilitate subsequent derivation overlays
- Clothing style must be completely consistent across all four views
- Base clothing is the "daily default state"; focus remains on face and posture
- Strictly prohibit underwear/exposure/sexualized base layers

---

## VII. Four-View Character Sheet Specifications

### View Definitions

| Position | View | Angle | Shot Size | Requirements | Prompt |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Head to collarbone | Complete display from head to collarbone without cropping, face occupies 60%+, clear facial features | `portrait closeup`, `face detail`, `head to collarbone complete`, `no crop` |
| Left 2 | Front View | Front 0° | Full body standing | Facing camera, arms natural, complete display from head to toe | `front view`, `full body head to toe`, `height mark` |
| Right 2 | Side View | Right 90° | Full body standing | Clear pure side profile, complete display from head to toe | `side view`, `profile`, `full body head to toe`, `height mark` |
| Right 1 | Back View | Rear 180° | Full body standing | Clear back of head/back/hair ends/feet, complete display from head to toe | `back view`, `rear view`, `full body head to toe`, `height mark` |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Pure neutral gray `#E8E8E8` |
| Stance | Natural standing, feet parallel and slightly apart, arms hanging naturally or slightly extended |
| Full Body Display | Full body standing figures must be completely in frame from head to toe; cropping head or feet is strictly prohibited |
| Close-up Display | Portrait close-ups must be completely in frame from head to collarbone; cropping head is strictly prohibited; hair, forehead, and chin must be complete |
| Expression | Neutral micro-expression, consistent with character temperament |
| Lighting | Even soft light, main light from front + fill light from both sides, no hard shadows |
| Consistency | Skin tone/body type/hairstyle/face/base clothing must be completely consistent across all four views |
| Aspect Ratio | Recommended 4:1 or 3:1 |

---

## VIII. Prompt Template

{Gender} character four-view character sheet, 2D animation style, cel shading, modern urban style, high contrast, extreme detail,
character design sheet, character turnaround,
{Facial features corresponding to character description - naturally derived from character description}, {Overall temperament}, bare face no makeup,
{Skin tone}, soft skin glow, delicate skin, cel-shading quality,
{Height description, e.g., 170cm tall, tall slender woman}, {Head-to-body ratio, e.g., 7 heads tall proportion}, {Body description}, {Posture description},
{Hair color}{Hair length}, distinct hair layers, {Base style}, no hair accessories,
{Regular attire corresponding to character identity, e.g., modern school uniform/professional casual wear/urban casual wear}, low-saturation cool tones, no complex patterns,
Same frame left to right: Portrait close-up + Front view + Side view + Back view,
Portrait close-up complete display from head to collarbone, no head crop, head to collarbone complete,
Full body standing complete display from head to toe, full body head to toe, no head or foot crop,
Natural standing, pure neutral gray background, even soft light, no hard shadows,
Four-view consistency, delicate face rendering, delicate hair rendering
No text of any kind in the image

---

## IX. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Must be in a "bare face no makeup" state |
| R2 | Must declare appropriate regular attire as base clothing based on character description (e.g., Student → School uniform, Office Worker → Professional casual wear, Home → Urban casual wear); underwear base layers are prohibited |
| R3 | Must declare "no hair accessories, no jewelry" |
| R4 | Must specify "pure neutral gray background" |
| R5 | Must specify "four-view consistency" |
| R6 | Full body standing figures must be completely displayed from head to toe; cropping is strictly prohibited |
| R7 | Must declare character height and constrain full-body proportions via head-to-body ratio conversion (Female default 160-170cm/6.5-7.5 heads, Male default 175-185cm/7-8 heads) |
| R8 | Portrait close-ups must be completely displayed from head to collarbone; cropping head is strictly prohibited |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Underwear/exposure/sexualized base layers; attire clearly inconsistent with character description; overly complex patterns/decorations interfering with subsequent costume overlays |
| X2 | Hard light from directly above/directly below/colored light |
| X3 | Over-whitening to bloodless appearance / grayish skin tone |
| X4 | Complex scene backgrounds (must be pure gray background) |
| X5 | Exaggerated expressions/dynamic poses |
| X6 | Cropping head or feet in full body standing figures; must be completely in frame from head to toe |
| X7 | Cropping head in portrait close-ups; must be completely in frame from head to collarbone |
| X8 | Ignoring height and head-to-body ratio constraints; height must be explicitly declared and full-body proportions reflected via head-to-body ratio conversion |