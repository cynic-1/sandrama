---
name: art_character
description: Character Base Image Generation · Constraint Manual
metaData: art_skills
---

# Character Base Image Generation · Constraint Manual

---

## I. Base Image Principles

1. **Design is Soul** — Character design is the core anchor; Chinese-style 3D modeling with smooth lines
2. **Base Model is Foundation** — Basic undergarment + bare face; subsequent costume and makeup are overlay layers
3. **Four-View Consistency** — Face/body type/hair/basic clothing must be highly consistent across views
4. **Classical Temperament** — Even in a bare-face state, the character's temperament (elegant/graceful/heroic) must be reflected

---

## II. Facial Constraints

> Fixed facial feature parameters are no longer used. AI freely generates facial features driven by character descriptions (gender/age/personality/temperament) to ensure visual differentiation between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial Features | Naturally derived from character description; no preset face shape/eye shape/brow shape/nose shape/lip shape |
| Style Base | Chinese-style 3D rendering, high-precision modeling, PBR materials, cinematic lighting |
| Temperament | Must extract overall temperament keywords from character description (e.g., elegant and graceful/refined and heroic/chivalrous and tender) and include them in the prompt |
| Expression | Neutral micro-expression, consistent with character temperament |

---

## III. Skin Texture Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Pink-white base, uniform across body, fair and translucent | Pink-white base, fair and translucent, 3D modeling skin tone |
| Sheen | PBR material rendering, natural sheen, non-matte | PBR material rendering, natural sheen, soft texture |
| Texture | High-precision modeling, clear texture, soft edges | High-precision modeling, clear texture, soft edges |
| Exposed Skin | Face/neck/hands | Delicate hands, soft neck lines |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Fair base, uniform across body, healthy texture | Fair base, healthy texture, 3D modeling skin tone |
| Sheen | PBR material rendering, natural sheen | PBR material rendering, natural sheen, soft texture |
| Texture | High-precision modeling, clean and crisp | High-precision modeling, 3D rendering, soft |

---

## IV. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 160-170cm | {height}cm tall, {height description e.g., tall elegant woman} |
| Head-to-Body Ratio | Seven heads to seven and a half heads, classical proportion | 7 heads tall proportion, classical proportion |
| Shoulder/Neck | Swan neck, elegant shoulder/neck line | Swan neck, elegant shoulder/neck |
| Hands | Slender and fair, natural fingers | Slender and fair, natural fingers |
| Posture | Classical temperament, elegant and upright | Elegant posture, upright stance |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 175-185cm | {height}cm tall, {height description e.g., tall imposing man} |
| Head-to-Body Ratio | Seven heads to seven and a half heads, classical proportion | 7 heads tall proportion, classical proportion |
| Shoulder/Neck | Broad shoulders, strong neck | Broad shoulders, strong neck |
| Hands | Defined knuckles, natural fingers | Defined knuckles, natural fingers |
| Posture | Refined and heroic, upright and proper | Heroic posture, upright stance |

---

## V. Base Hairstyle Constraints

> Only natural hairstyles are defined. Hair accessories are overlaid in the costume and makeup derivation stage.

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Ink black, other colors prohibited | Ink black long hair, hair like a black silk waterfall |
| Hair Length | Long hair reaching waist | Long hair reaching waist, long hair |
| Hair Texture | High-precision modeling, clear strands | High-precision modeling, clear hair strands |
| Style | Natural loose hair, no hair accessories | Long hair naturally loose, no hair accessories |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Ink black, other colors prohibited | Ink black long hair, hair like ink |
| Hair Length | Long hair reaching shoulders or tied hair | Long hair reaching shoulders, tied hair |
| Hair Texture | High-precision modeling, clear strands | High-precision modeling, clear hair strands |
| Style | Natural loose hair or half-tied, no hair crown | Long hair naturally loose, half-tied long hair |

---

## VI. Base Clothing Constraints

> No special constraints for base clothing. Female wears a plain-colored ancient-style long dress; male wears a plain-colored ancient-style long robe. Formal attire is overlaid in the costume and makeup derivation stage.

### Female Base Clothing

Plain-colored ancient-style long dress, color primarily in basic tones, no pattern decoration.

### Male Base Clothing

Plain-colored ancient-style long robe, color primarily in basic tones, no pattern decoration.

### Dressing Uniformity Rules

- Uniform clothing style to ensure no color interference in subsequent costume overlays
- Basically covers the body except for face/hands/neck
- Clothing style is completely consistent across four views
- Base clothing is only a safe underlayer; focus is on face and posture

---

## VII. Four-View Setting Sheet Specifications

### View Definitions

| Position | View | Angle | Shot Size | Requirement | Prompt |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Head to collarbone | Complete display from head to collarbone, face occupies 60%+, clear facial features | portrait closeup, face detail |
| Left 2 | Front View | Frontal 0° | Full body standing | Facing camera, arms natural, complete display from head to feet | front view, full body |
| Right 2 | Side View | Right side 90° | Full body standing | Clear pure side profile, complete display from head to feet | side view, profile, full body |
| Right 1 | Back View | Rear 180° | Full body standing | Clear back of head/back/hair ends/feet, complete display from head to feet | back view, rear view, full body |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Plain gray solid color #B8B8B8 |
| Stance | Natural standing, feet parallel and slightly apart, arms hanging naturally |
| Full Body Display | Full body standing figure must be completely in frame from head to feet, cropping strictly prohibited |
| Close-up Display | Portrait close-up must be completely in frame from head to collarbone, cropping strictly prohibited |
| Expression | Neutral micro-expression, consistent with character temperament |
| Lighting | Uniform soft light, main light from front + fill light from both sides, no hard shadows |
| Consistency | Skin tone/body type/hairstyle/face/base clothing are completely consistent across four views |
| Frame Ratio | Recommended 4:1 or 3:1 |

---

## VIII. Prompt Template

{Gender} character four-view setting sheet, 3D rendering style, high-precision modeling, PBR materials, Chinese-style 3D, cinematic lighting,
character design sheet, character turnaround,
{Facial features corresponding to character description - naturally derived from character description}, {Overall temperament}, bare face state,
{Skin tone}, PBR material rendering, 3D rendering translucent texture, high-precision modeling, rich lighting layers,
{Height description, e.g., 165cm tall, tall elegant woman}, {Head-to-body ratio, e.g., 7 heads tall proportion}, {Body description}, {Posture description},
{Hair color}{Hair length}, high-precision clear hair strands, {Base style}, no hair accessories,
(Female: plain-colored ancient-style long dress / Male: plain-colored ancient-style long robe), basic color, no pattern decoration,
Same frame left to right side-by-side: portrait close-up + front view + side view + back view,
Portrait close-up complete display from head to collarbone, no cropping of head, head to collarbone complete,
Full body standing figure complete display from head to feet, full body head to toe, no cropping of head and feet,
Natural standing, plain gray solid background, uniform soft light, no hard shadows,
Four-view consistency, clear 3D ancient-style modeling, clear high-precision modeling,
No text in the image

---

## IX. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Must be in "bare face state" |
| R2 | Must declare base clothing (Female: plain-colored ancient-style long dress; Male: plain-colored ancient-style long robe) |
| R3 | Must declare "no hair accessories, no accessories" |
| R4 | Must specify "plain gray solid background" |
| R5 | Must specify "four-view consistency" |
| R6 | Full body standing figure must be completely displayed from head to feet, cropping strictly prohibited |
| R7 | Must specify character height and constrain full body proportion via head-to-body ratio conversion (Female default 160-170cm/7 heads, Male default 175-185cm/7 heads) |
| R8 | Portrait close-up must be completely displayed from head to collarbone, cropping of head strictly prohibited |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Any clothing/accessories/makeup other than base clothing |
| X2 | Direct top hard light/direct bottom light/cold-colored light |
| X3 | Over-whitening to no blood color / grayish skin tone |
| X4 | Complex scene background (must be solid color) |
| X5 | Exaggerated expressions/dynamic poses |
| X6 | Cropping head or feet in full body standing figure, must be completely in frame from head to feet |
| X7 | Cropping head in portrait close-up, must be completely in frame from head to collarbone |
| X8 | Ignoring height and head-to-body ratio constraints, height must be explicitly declared and full body proportion reflected via head-to-body ratio conversion |