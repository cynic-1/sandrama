# Clay Stop-Motion Character Base Image Generation · Constraint Handbook

---

## I. Base Image Principles

1. **Clay Texture is the Soul** — Visible hand-sculpting marks on the surface; finger impressions/clay textures are clearly distinguishable
2. **3D Cartoon Base Model** — The base is a simplified clay character; subsequent costumes and makeup are overlay layers
3. **Four-View Consistency** — Face/body type/hair style/base clothing must be highly uniform across views
4. **Healing Atmosphere** — Even in a no-makeup state, the character's personality must be reflected (soft/rounded/approachable)

---

## II. Facial Constraints

> Fixed facial feature parameters are no longer used. AI freely generates facial features driven by character descriptions (gender/age/personality/temperament), ensuring visual differentiation between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial Features | Naturally derived from character description; no preset face shape/eye shape/brow shape/nose shape/lip shape; maintain overall clay roundness (no sharp edges) |
| Style Base | Clay stop-motion animation, 3D cartoon rendering, matte clay texture, warm-toned lighting |
| Temperament | Must extract overall temperament keywords from character description (e.g., warm and healing/steady and reliable/lively and approachable) and include them in the prompt |
| Expression | Neutral micro-expression, consistent with character temperament |

---

## III. Skin Texture Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Warm cream tone, soft and even | Warm cream skin, soft complexion |
| Sheen | Matte clay texture, no highlights | Matte clay texture, matte clay texture |
| Texture | Clear clay texture, visible sculpting marks | Clay surface, hand-sculpting marks |
| Exposed Skin | Face/neck/hands | Warm skin, clay texture |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Warm beige tone, soft and even | Warm beige skin, soft complexion |
| Sheen | Matte clay texture, no highlights | Matte clay texture, matte clay texture |
| Texture | Clear clay texture, visible finger impressions | Clay surface, clear hand marks |

---

## IV. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Default 155-165cm, reflected in head-to-body ratio | {height}cm tall |
| Head-to-Body Ratio | 6 to 7 heads tall, large head/small body | 6-7 heads tall, rounded proportions |
| Shoulders & Neck | Rounded shoulder line, no sharp edges | Rounded shoulders and neck, soft lines |
| Hands | Rounded fingers, simplified joints | Rounded small hands, simplified hand details |
| Posture | Soft curves, non-aggressive stance | Soft posture, rounded curves |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Default 170-180cm, reflected in head-to-body ratio | {height}cm tall |
| Head-to-Body Ratio | 6.5 to 7.5 heads tall | 6.5-7.5 heads tall, rounded proportions |
| Shoulders & Neck | Rounded broad shoulders, soft shoulder line | Rounded shoulders, gentle shoulder line |
| Hands | Rounded palms, simplified finger joints | Rounded palms, simplified finger joints |
| Posture | Steady and dignified, soft lines | Steady posture, rounded lines |

---

## V. Base Hairstyle Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Natural tones such as warm brown, chestnut, dark brown | Warm brown long hair, chestnut hair |
| Hair Length | Shoulder-length or waist-length | Shoulder-length long hair |
| Hair Texture | Clay sculpting, blocky hair strands | Clay hairstyle, blocky hair strands |
| Styling | Natural loose, simple tied hair, no complex hair accessories | Natural hair strands, simple tied hair |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Warm brown, dark brown, black | Warm brown short hair, dark hairstyle |
| Hair Length | Short or medium length | Short hair, medium-length hair |
| Hair Texture | Clay sculpting, blocky hair strands | Clay hairstyle, blocky hair strands |
| Styling | Natural loose, simple tied hair | Natural hair strands, simple hairstyle |

---

## VI. Base Clothing Constraints

> Base clothing is a simplified design with no complex details.

### Female Base Clothing

Simplified dress or top + skirt, in low-saturation warm tones, no pattern decorations.

### Male Base Clothing

Simplified shirt + pants, in low-saturation warm tones, no pattern decorations.

### Uniform Dressing Rules

- Uniform clothing style to ensure no color interference when overlaying subsequent costumes
- Basically covers everything except face/hands/neck
- Clothing style is completely consistent across the four views
- Base clothing is only a safe base; the focus is on face and body type

---

## VII. Four-View Reference Sheet Specifications

### View Definitions

| Position | View | Angle | Shot Size | Requirement | Prompt |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Top of head to collarbone | Face occupies 60%+, clear facial features | portrait closeup, face detail |
| Left 2 | Front View | Front 0° | Full-body standing figure | Facing camera, complete from top of head to feet | front view, full body |
| Right 2 | Side View | Right 90° | Full-body standing figure | Clear side profile, complete from head to feet | side view, profile, full body |
| Right 1 | Back View | Rear 180° | Full-body standing figure | Clear back of head/back/hair ends/feet | back view, rear view, full body |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Pure neutral gray #E8E8E8 |
| Stance | Natural standing, feet parallel and slightly apart, arms hanging naturally |
| Full-Body Display | Full-body standing figure must be complete from head to feet in the frame; cropping is strictly prohibited |
| Close-up Display | Portrait close-up must be complete from top of head to collarbone in the frame; cropping is strictly prohibited |
| Expression | Neutral micro-expression, consistent with character personality |
| Lighting | Warm-toned soft light, main light from front + fill light from both sides, no hard shadows |
| Consistency | Skin tone/body type/hairstyle/face/base clothing must be completely consistent across the four views |
| Aspect Ratio | Recommended 4:1 or 3:1 |

---

## VIII. Prompt Template

```
Clay stop-motion animation {gender} character four-view design sheet, stop-motion style, 3D cartoon rendering, warm-toned lighting,
character design sheet, character turnaround,
{facial features corresponding to character description - naturally derived from character description, overall maintaining clay roundness}, {overall temperament},
{skin tone}, matte clay texture, clear clay texture, hand-sculpted traces,
{height description}, {head-to-body ratio, e.g.: 7 heads tall proportion}, {body description}, {posture description},
{hair color}{hair length}, clay hairstyle, {basic style}, no complex hair accessories,
(Female: simplified dress / Male: simplified shirt + pants), low-saturation warm tones, no patterns,
Arranged side by side from left to right in the same frame: portrait close-up + front view + side view + back view,
Portrait close-up fully displayed from top of head to collarbone, head to collarbone complete,
Full-body standing figure fully displayed from top of head to feet, full body head to toe,
Natural standing, pure neutral gray background, warm soft light, no hard shadows,
Four-view consistency, fine clay texture rendering, soft and healing expression
No text of any kind in the image
```

---

## IX. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Must be in a "matte clay texture" state |
| R2 | Must declare basic clothing (Female: simplified dress; Male: simplified shirt + trousers) |
| R3 | Must declare "no complex hair accessories, no modern accessories" |
| R4 | Must specify a "pure neutral gray background" |
| R5 | Must specify "four-view consistency" |
| R6 | Full-body standing figures must be shown completely from head to toe; cropping is strictly prohibited |
| R7 | Must specify character height and constrain full-body proportions via head-to-body ratio (default 6–7 heads) |
| R8 | Portrait close-ups must be shown completely from the top of the head to the collarbone; cropping the top of the head is strictly prohibited |

### Strictly Prohibited

| ID | Prohibition |
|---|---|
| X1 | Photorealistic human photography texture / photo-grade realism |
| X2 | Cold, hard lighting / hard shadows / high contrast |
| X3 | Sharp angles / aggressive postures |
| X4 | Complex scene backgrounds (must be pure gray background) |
| X5 | Exaggerated expressions / dynamic poses |
| X6 | Cropping the top of the head or the feet in full-body standing figures |
| X7 | Cropping the top of the head in portrait close-ups |
| X8 | Ignoring height and head-to-body ratio constraints |