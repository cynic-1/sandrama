# 90s Retro Japanese Animation Style - Character Base Image Generation · Constraint Manual

---

## I. Base Image Principles

1. **Lines are the Soul** — Hand-drawn, fluid lines are the core of the character; avoid digitally sharp edges.
2. **Character-First** — Base attire is determined by the character description (identity/occupation/gender/scene) to define their regular clothing; specific costumes are added as overlay layers later.
3. **Four-View Consistency** — Face/body type/hairstyle/base clothing must be highly consistent across all views.
4. **Restrained, Calm Emotion** — The makeup-free state must reflect the character's temperament (gentle/melancholic/serene).

---

## II. Facial Constraints

> Fixed facial feature parameters are no longer used. AI freely generates facial features driven by the character description (gender/age/personality/temperament), ensuring visual differentiation between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial Features | Naturally derived from the character description; no preset face shape/eye shape/brow shape/nose shape/lip shape |
| Style Base | 90s retro Japanese animation hand-drawn texture (soft warm tones, fluid lines, block shading) |
| Temperament | Must extract overall temperament keywords (e.g., gentle/melancholic/serene/sunny) from the character description and include them in the prompt |
| Expression | Neutral micro-expression, consistent with the character's temperament |

---

## III. Skin Texture Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Cool fair skin, warm beige tone | Cool fair skin, warm beige tone |
| Sheen | Flat color application, soft sheen | Flat color application, soft sheen |
| Texture | Hand-drawn texture, no digital artifacts | Hand-drawn texture, no digital artifacts |
| Exposed Skin | Face/neck/hands | Visible collarbone, clear neck line |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Healthy skin tone, natural warm tone | Healthy skin tone, natural warm tone |
| Sheen | Flat color application, natural sheen | Flat color application, natural sheen |
| Texture | Hand-drawn texture, simple texture | Hand-drawn texture, simple texture |

---

## IV. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default 155-165cm | {height}cm, {height description} |
| Head-to-Body Ratio | Six to six-and-a-half heads tall, common 90s proportion | 6-6.5 heads tall, 90s proportion |
| Shoulders & Neck | Slender, soft shoulder line | Slender shoulders, graceful neck line |
| Hands | Slender, distinct finger joints | Slender jade hands, long fingers |
| Posture | Elegant/gentle, light posture | Light posture, elegant stance |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default 170-180cm | {height}cm, {height description} |
| Head-to-Body Ratio | Six-and-a-half to seven-and-a-half heads tall | 6.5-7.5 heads tall, 90s proportion |
| Shoulders & Neck | Broad shoulders, strong neck line | Broad shoulders, strong neck |
| Hands | Distinct bone structure, balanced hand proportions | Distinct finger bone structure |
| Posture | Upright/robust, natural posture | Upright stance, robust build |

---

## V. Base Hairstyle Constraints

> Only defines natural loose hair or simple tied hair; hair accessories are added in the derivative stage.

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Natural hair color (black/brown/blonde) | Black hair, brown hair, blonde hair |
| Hair Length | Shoulder-length or longer | Long hair, shoulder-length hair |
| Hair Texture | Hand-drawn texture, fluid lines | Fluid hair strands, hand-drawn texture |
| Style | Natural loose hair, no accessories | Long hair naturally falling, no accessories |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Natural hair color (black/brown/gray) | Black hair, brown hair, silver hair |
| Hair Length | Medium to long | Medium-long hair, long hair |
| Hair Texture | Hand-drawn texture, fluid lines | Fluid hair strands, hand-drawn texture |
| Style | Natural loose hair or half-tied, no crown | Long hair naturally falling, half-tied hair |

---

## VI. Base Clothing Constraints

> Base clothing is determined by the character description (identity/occupation/gender/scene) to define their most natural regular attire, serving as the character's "daily default state"; formal attire/special derivatives are added in the costume derivative stage. **Underwear base layers are prohibited**.

### Attire Selection Principles

| Character Identity | Default Attire Direction |
|---|---|
| Student | 90s school uniform / academy uniform |
| Office Worker | Professional casual wear (shirt + pants/skirt) |
| Home/Casual | 90s retro casual wear (knitwear/dress/T-shirt) |
| Sports/Active | Sports set / modified school uniform |
| Special Occupation | Corresponding identity attire (doctor/police/teacher, etc.) |
| Character Description Unclear | 90s retro daily casual wear |

### Attire Consistency Rules

- Clothing style must be consistent with 90s retro Japanese animation aesthetics (soft warm tones, low saturation, hand-drawn texture)
- Colors should be low saturation, with no complex patterns/decorations, to facilitate subsequent derivative overlays
- Clothing style must be completely consistent across the four views
- Base clothing is the "daily default state"; focus remains on face and posture
- Strictly prohibit underwear/exposure/sexualized base layers

---

## VII. Four-View Reference Sheet Specifications

### View Definitions

| Position | View | Angle | Shot Size | Requirement | Prompt |
|---|---|---|---|---|---|
| Left 1 | Portrait Closeup | Frontal eye-level | Head to collarbone | Fully display from head to collarbone, face occupies 60%+ | portrait closeup, face detail |
| Left 2 | Front View | Frontal 0° | Full body standing | Facing camera, arms natural, complete from head to toe | front view, full body head to toe |
| Right 2 | Side View | Right 90° | Full body standing | Clear pure side profile, complete from head to toe | side view, profile, full body head to toe |
| Right 1 | Back View | Rear 180° | Full body standing | Clear back of head/back/hair ends/feet | back view, rear view, full body head to toe |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Warm beige #F8F4E8 |
| Stance | Natural standing, feet parallel and slightly apart, arms hanging naturally |
| Full Body Display | Complete from head to toe in frame, strictly no cropping of head or feet |
| Closeup Display | Complete from head to collarbone in frame, strictly no cropping of head |
| Expression | Neutral micro-expression, consistent with character temperament |
| Lighting | Soft cinematic light, main light from front + fill light from both sides |
| Consistency | Skin tone/body type/hairstyle/face/base clothing must be completely consistent across the four views |
| Aspect Ratio | Recommended 4:1 or 3:1 |

---

## VIII. Prompt Template

```
{Gender} character four-view design sheet, 90s anime style, retro Japanese animation style, hand-drawn flat coloring, soft warm tones, fine and smooth lines, cinematic lighting,
character design sheet, character turnaround,
{Facial features corresponding to the character description - naturally derived from the character description}, {Overall temperament}, bare face without makeup,
{Skin tone}, flat coloring, hand-drawn texture, delicate skin,
{Height description, e.g.: 165cm tall, slender woman}, {Head-to-body ratio, e.g.: 6.5 heads tall proportion}, {Body description}, {Posture description},
{Hair color} {Hair length}, smooth hair strands, {Basic hairstyle}, no hair accessories,
{Conventional attire corresponding to the character's identity, e.g.: 90s school uniform / professional casual wear / retro dress}, soft low-saturation tones, no complex patterns,
Arranged side by side from left to right in the same frame: portrait close-up + front view + side view + back view,
Portrait close-up fully displayed from the top of the head to the collarbone, head to collarbone complete,
Full-body standing figure fully displayed from the top of the head to the feet, full body head to toe, no cropping of the head or feet,
Natural standing pose, pure neutral gray background, soft cinematic light, no hard shadows,
Consistency across the four views, delicate rendering of the face, delicate rendering of the hair strands
No text of any kind in the image
```

---

## IX. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Must be in a "bare face, no makeup" state |
| R2 | Must declare appropriate regular attire as the base outfit based on the character description (e.g., student → school uniform, office worker → professional casual wear, at home → retro casual wear); innerwear/undergarments are prohibited |
| R3 | Must declare "no hair accessories, no accessories" |
| R4 | Must specify "warm-toned off-white background #F8F4E8" |
| R5 | Must specify "four-view consistency" |
| R6 | Full-body standing figures must be fully displayed from head to toe; cropping is strictly prohibited |
| R7 | Must specify the character's height and use the head-to-body ratio to constrain the full-body proportions (female default 155-165cm/6-6.5 heads, male default 170-180cm/6.5-7.5 heads) |
| R8 | Portrait close-ups must be fully displayed from the top of the head to the collarbone; cropping the top of the head is strictly prohibited |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Innerwear/exposure/sexualized undergarments; attire clearly inconsistent with the character description; overly complex patterns/decorations that interfere with subsequent costume and makeup overlays |
| X2 | Digitally sharp edges, oversaturated colors |
| X3 | Excessive whitening to the point of no blood color |
| X4 | Complex scene backgrounds (warm-toned background is required) |
| X5 | Exaggerated expressions/dynamic poses |
| X6 | Cropping the top of the head or the feet in full-body standing figures; must be fully framed from head to toe |
| X7 | Cropping the top of the head in portrait close-ups; must be fully framed from the top of the head to the collarbone |
| X8 | Ignoring height and head-to-body ratio constraints |