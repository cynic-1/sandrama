# Character Base Image Generation · Flat Style Constraint Manual

---

## I. Base Image Principles

1. **Silhouette is the Soul** — Lines are the character's sole anchor; flat color blocks are layered to build the form
2. **Character-First** — Base attire is determined by the character description (identity/occupation/gender/scene) to define their regular clothing; specific costumes are added as overlay layers later
3. **Four-View Consistency** — Silhouette/body type/hairstyle/base clothing must be highly consistent across views
4. **Color Block Expression** — No shadows or gradients; hierarchy is expressed through color block contrast

---

## II. Facial Constraints

> Fixed facial feature parameters are no longer used. AI freely generates facial features driven by the character description (gender/age/personality/temperament), ensuring visual differentiation between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial Features | Naturally derived from character description; no preset face shape/eye shape/brow shape/nose shape/lip shape |
| Style Base | Flat vector illustration, solid color blocks, clear lines, no gradients, no lighting/shadows |
| Temperament | Must extract overall temperament keywords from the character description and include them in the prompt |
| Expression | Neutral micro-expression, consistent with character temperament |

---

## III. Skin Texture Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Single-color fill, no gradient | solid skin color, flat skin tone |
| Sheen | No highlights, no reflections | matte finish, no gloss |
| Texture | Color block fill, no texture | flat texture, no texture |
| Exposed Skin | Face/neck/collarbone/hands | flat skin surface, color block skin tone |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Single-color fill, no gradient | solid skin color, flat skin tone |
| Sheen | No highlights, no reflections | matte finish, no gloss |
| Texture | Color block fill, no texture | flat texture, no texture |

---

## IV. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 160-170cm, reflected via head-to-body ratio | {height}cm tall, tall slender woman |
| Head-to-Body Ratio | 7 to 8 heads tall, strictly constraining full-body proportions | 7-8 heads tall proportion, slender build |
| Shoulders & Neck | Simple lines, color block expression | simple lines, flat shoulders and neck |
| Hands | Simplified hand contours | simplified hands, color block hands |
| Posture | Simple posture, no dynamic movement | simple posture, front-facing stance |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 175-185cm, reflected via head-to-body ratio | {height}cm tall, tall imposing man |
| Head-to-Body Ratio | 7.5 to 8.5 heads tall, strictly constraining full-body proportions | 7.5-8.5 heads tall proportion, tall build |
| Shoulders & Neck | Simple lines, color block expression | simple lines, flat shoulders and neck |
| Hands | Simplified hand contours | simplified hands, color block hands |
| Posture | Simple posture, no dynamic movement | simple posture, front-facing stance |

---

## V. Base Hairstyle Constraints

> Only defines natural loose hair or simple tied hair; hair accessories are added in the costume derivation stage.

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Pure black single color, no gradient | black hair, solid hair color |
| Hair Length | Waist-length or longer | long hair, waist-length hair |
| Hair Texture | Outlined with lines, no hair strand details | line-drawn hair, flat hair color, no hair strands |
| Style | Natural loose hair, center/side part, no accessories | long hair naturally falling, simple hair color |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Pure black or ink-black single color | black hair, ink-black hair color |
| Hair Length | Medium to long length | long hair, shoulder-length hair |
| Hair Texture | Outlined with lines, no hair strand details | line-drawn hair, flat hair color, no hair strands |
| Style | Natural loose hair or half-tied, no hair crown | long hair naturally falling, simple hairstyle |

---

## VI. Base Clothing Constraints

> Base clothing is determined by the character description (identity/occupation/gender/scene) to define their most natural regular attire, serving as the character's "daily default state"; formal attire/special derivatives are added in the costume derivation stage. **Underwear base layers are prohibited**.

### Attire Selection Principles

| Character Identity | Default Attire Direction |
|---|---|
| Student | School uniform / Academy attire |
| Office Worker | Professional casual wear (shirt + pants/skirt) |
| Home/Casual | Casual everyday wear (T-shirt + pants/dress) |
| Sporty/Lively | Sports set |
| Special Occupation | Corresponding identity attire (doctor/police/teacher, etc.) |
| Character Description Unclear | Simple everyday casual wear |

### Attire Consistency Rules

- Clothing style must be consistent with the flat vector illustration aesthetic (solid color blocks, no gradients, no lighting/shadows)
- Low-saturation solid color fills, no complex patterns/decorations, to facilitate subsequent derivative overlays
- Clothing style must be completely consistent across the four views
- Base clothing is the "daily default state"; focus remains on facial features and body posture
- Strictly prohibit underwear/exposure/sexualized base layers

---

## VII. Four-View Setting Diagram Specifications

### View Definitions

| Position | View | Angle | Shot Size | Requirements | Prompt |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Head to collarbone | Complete display from top of head to collarbone without cropping, face occupies 60%+, clear facial features | portrait closeup, face detail, head to collarbone complete, no crop |
| Left 2 | Front View | Frontal 0° | Full-body standing figure | Facing camera, arms natural, complete display from top of head to feet | front view, full body head to toe, height mark |
| Right 2 | Side View | Right side 90° | Full-body standing figure | Clear pure side profile, complete display from top of head to feet | side view, profile, full body head to toe, height mark |
| Right 1 | Back View | Rear 180° | Full-body standing figure | Clear back of head/back/hair ends/feet, complete display from top of head to feet | back view, rear view, full body head to toe, height mark |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Pure neutral gray #E8E8E8 |
| Stance | Natural standing, feet parallel and slightly apart, arms hanging naturally or slightly extended |
| Full-Body Display | Full-body standing figures must be completely framed from top of head to feet; cropping of head or feet is strictly prohibited |
| Close-up Display | Portrait close-ups must be completely framed from top of head to collarbone; cropping of the top of the head is strictly prohibited; hair, forehead, and chin must all be complete |
| Expression | Neutral micro-expression, consistent with character temperament |
| Lighting | No lighting/shadows, pure flat color blocks |
| Consistency | Skin tone/body type/hairstyle/facial features/base clothing must be completely consistent across the four views |
| Frame Ratio | Recommended 4:1 or 3:1 |

---

## VIII. Prompt Template

```
{Gender} character four-view flat style setting image,
2d flat design, vector art, flat illustration,
minimalist, clean lines, solid colors,
{Facial features corresponding to character description - naturally derived from character description}, {Overall temperament}, bare face without makeup,
{Skin tone}, monochrome skin, flat skin tone, solid skin color,
{Height description, e.g.: 170cm tall, tall slender woman}, {Head-to-body ratio, e.g.: 7.5 heads tall proportion}, {Body description}, {Posture description},
{Hair color}{Hair length}, line-based hairstyle, {Basic styling}, no hair accessories,
{Conventional attire corresponding to character identity, e.g.: school uniform / professional casual wear / casual everyday clothes}, basic color solid fill, no complex patterns,
Arranged side by side from left to right in the same frame: portrait close-up + front view + side view + back view,
Portrait close-up fully displayed from top of head to collarbone, no cropping of the top of the head, head to collarbone complete,
Full-body standing figure fully displayed from top of head to feet, full body head to toe, no cropping of the top of the head and feet,
Natural standing pose, pure neutral gray background, no shadows, no gradients,
Four-view consistency, simple lines, color block fill,
No text of any kind in the image
```

---

## IX. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Must be in a "bare face, no makeup" state |
| R2 | Must declare appropriate regular attire as the base outfit based on the character description (e.g., student → school uniform, office worker → business casual, at home → casual wear); underwear as base layer is prohibited |
| R3 | Must declare "no hair accessories, no accessories" |
| R4 | Must specify a "pure neutral gray background" |
| R5 | Must specify "four-view consistency" |
| R6 | Full-body standing figures must be shown completely from the top of the head to the soles of the feet; cropping is strictly prohibited |
| R7 | Must specify the character's height and use the head-to-body ratio to constrain the full-body proportions (default for females: 160–170 cm / 7–8 head heights; default for males: 175–185 cm / 7.5–8.5 head heights) |
| R8 | Portrait close-ups must be shown completely from the top of the head to the collarbone; cropping the top of the head is strictly prohibited |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Underwear/exposure/sexualized base layers; attire clearly inconsistent with the character description; overly complex patterns/decorations that interfere with subsequent costume and makeup overlays |
| X2 | Light/shadow/gradient effects |
| X3 | 3D rendering/CG texture |
| X4 | Complex scene backgrounds (must be a pure gray background) |
| X5 | Exaggerated expressions/dynamic poses |
| X6 | Cropping the top of the head or the soles of the feet in full-body standing figures; the figure must be fully framed from head to toe |
| X7 | Cropping the top of the head in portrait close-ups; the subject must be fully framed from the top of the head to the collarbone |
| X8 | Ignoring height and head-to-body ratio constraints; height must be explicitly declared and full-body proportions must be reflected through head-to-body ratio calculations |