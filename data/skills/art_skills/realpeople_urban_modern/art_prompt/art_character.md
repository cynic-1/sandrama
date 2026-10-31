# Character Base Image Generation · Urban Realism Constraint Manual

---

## I. Base Image Principles

1. **Face is the Soul** — Facial features are the character's sole anchor point, rendered with pore-level precision
2. **Character-First** — Base attire is determined by the character description (identity/occupation/gender/scene) to define their regular clothing; subsequent specific costumes are layered on top
3. **Four-View Consistency** — Face/body type/hair/base clothing must be highly consistent across all views
4. **Natural Realism** — Even in a no-makeup state, the character's temperament (sharp/soft/cold/affable) must be reflected
5. **Live-Action Photography** — Anchored in real photography, preserving true skin texture (pores/minor imperfections)

---

## II. Facial Constraints

> Fixed facial feature parameters are no longer used. AI freely generates facial features driven by the character description (gender/age/personality/temperament), ensuring visual differentiation between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial Features | Naturally derived from the character description; no preset face shape/eye shape/brow shape/nose shape/lip shape |
| Style Base | Live-action realistic photography, pore-level precision rendering, realistic materials, natural lighting |
| Temperament | Must extract overall temperament keywords from the character description (e.g., sharp/soft/cold/affable) and include them in the prompt |
| Expression | Neutral micro-expression, consistent with the character's temperament |

---

## III. Skin Texture Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Natural skin tone, uniform across the body, can be pale or yellowish | Natural skin tone, uniform skin tone |
| Sheen | Natural sheen, neither matte nor oily | Natural skin, healthy glow |
| Texture | Delicate, retaining pore-level micro-texture, minor imperfections allowed | Delicate skin, pores slightly visible |
| Exposed Skin | Face/neck/collarbone/hands/part of arms | Natural shoulder and neck lines, healthy skin |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Natural skin tone, can be wheat-colored, uniform across the body | Natural skin tone, healthy skin tone |
| Sheen | Natural sheen, fresh feel | Natural skin, fresh texture |
| Texture | Clean and crisp, visible pores, minor imperfections allowed | Realistic skin texture, clear pores |

---

## IV. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 155-175cm | {height}cm tall |
| Head-to-Body Ratio | 7 to 8 heads tall, strictly constraining full-body proportions | 7-8 heads tall proportion |
| Shoulders & Neck | Natural shoulder and neck line, collarbone visible | Natural shoulder and neck lines |
| Hands | Natural hand shape, normal knuckles, neat nails | Natural hands, slender fingers |
| Posture | Natural standing, relaxed posture | Natural posture, relaxed stance |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 170-185cm | {height}cm tall |
| Head-to-Body Ratio | 7.5 to 8.5 heads tall, strictly constraining full-body proportions | 7.5-8.5 heads tall proportion |
| Shoulders & Neck | Natural shoulders, strong neck | Natural shoulders, neck and shoulder lines |
| Hands | Natural hand shape, moderate palm size, normal knuckles | Natural hands, slender fingers |
| Posture | Natural standing, upright posture | Upright stance, natural posture |

---

## V. Base Hairstyle Constraints

> Only defines natural loose hair or simple tied hair. Hair accessories are layered in the costume and makeup derivation stage.

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Natural hair color (black/dark brown), bleaching/dyeing prohibited | Natural hair color, dark brown |
| Hair Length | Shoulder-length/waist-length or longer, determined by character setting | Natural long hair, shoulder-length hair |
| Hair Texture | Clear strands, realistic texture | Distinct individual hair strands |
| Style | Natural loose hair, simple ponytail/half-up, no hair accessories | Natural hairstyle, no hair accessories |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Natural hair color (black/dark brown), bleaching prohibited | Natural hair color, black/dark brown |
| Hair Length | Short/medium-long hair, determined by character setting | Short hair, shoulder-length medium hair |
| Hair Texture | Clear strands, realistic texture | Distinct individual hair strands |
| Style | Natural loose hair/simple tied hair, no hair accessories | Natural hairstyle, no hair accessories |

---

## VI. Base Clothing Constraints

> Base clothing is determined by the character description (identity/occupation/gender/scene) to define their most natural regular attire, serving as the character's "daily default state"; formal attire/special derivatives are layered in the costume and makeup derivation stage. **Underwear base layers are prohibited**.

### Attire Selection Principles

| Character Identity | Default Attire Direction |
|---|---|
| Student | Modern school uniform / Academic attire |
| Office Worker | Professional casual wear (shirt + pants/skirt, suit) |
| Home/Casual | Urban casual wear (hoodie/T-shirt + jeans/dress) |
| Fashion/Date | Urban trendy attire |
| Special Occupation | Corresponding identity attire (doctor/police/teacher, etc.) |
| Character Description Unclear | Urban everyday wear, low-saturation neutral tones |

### Attire Consistency Rules

- Clothing style must be consistent with urban realistic photography aesthetics (natural tones, realistic materials)
- Colors should be low-saturation neutral tones, no complex patterns/decorations, to facilitate subsequent derivative layering
- Clothing style must be completely consistent across all four views
- Base clothing is the "daily default state"; focus remains on face and posture
- Strictly prohibit underwear/exposure/sexualized base layers

---

## VII. Four-View Character Sheet Specifications

### View Definitions

| Position | View | Angle | Shot Size | Requirements | Prompt |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Head to collarbone | Complete display from head to collarbone, face occupies 60%+, clear facial features | portrait closeup, face detail, head to collarbone complete |
| Left 2 | Front View | Frontal 0° | Full-body standing | Facing camera, arms natural, complete display from head to toe | front view, full body head to toe |
| Right 2 | Side View | Right side 90° | Full-body standing | Clear pure side profile, complete display from head to toe | side view, profile, full body head to toe |
| Right 1 | Back View | Rear 180° | Full-body standing | Clear back of head/back/hair ends/feet, complete display from head to toe | back view, rear view, full body head to toe |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Pure neutral gray #E8E8E8 |
| Stance | Natural standing, feet parallel and slightly apart, arms hanging naturally |
| Full-Body Display | Full-body standing figures must be completely in frame from head to toe; cropping is strictly prohibited |
| Close-up Display | Portrait close-ups must be completely in frame from head to collarbone; cropping the top of the head is strictly prohibited |
| Expression | Neutral micro-expression, consistent with the character's temperament |
| Lighting | Even soft light, main light from front + fill light from both sides, no hard shadows |
| Consistency | Skin tone/body type/hairstyle/face/base clothing must be completely consistent across all four views |
| Frame Ratio | Recommended 4:1 or 3:1 |

---

## VIII. Prompt Templates

```
{Gender} character four-view design sheet, realistic photography, urban realism, high contrast, extreme detail,
character design sheet, character turnaround,
{Facial features corresponding to the character description - naturally derived from the character description}, {Overall temperament}, natural state,
{Skin tone}, natural skin, healthy skin, fine skin texture, pores slightly visible,
{Height description, e.g., 170cm tall, tall slender woman}, {Head-to-body ratio, e.g., 7.5 heads tall proportion}, {Body description}, {Posture description},
{Hair color} {Hair length}, individual hair strands clearly defined, {Basic hairstyle}, no hair accessories,
{Regular attire corresponding to the character's identity, e.g., modern school uniform / professional casual wear / urban casual wear}, low-saturation neutral colors, no complex patterns,
Arranged side by side from left to right in the same frame: portrait close-up + front view + side view + back view,
Portrait close-up fully displayed from the top of the head to the collarbone, no cropping of the top of the head,
Full-body standing figure fully displayed from the top of the head to the feet, no cropping of the top of the head or the feet,
Natural standing pose, pure neutral gray background, even soft light, no hard shadows,
Consistency across the four views, delicate rendering of facial features, delicate rendering of hair strands, realistic skin texture
No text of any kind in the image
```


---

## IX. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Must be in a "natural state" |
| R2 | Must declare appropriate standard attire as the base outfit based on the character description (e.g., student → school uniform, office worker → business casual, at home → urban casual wear); underwear as base layer is prohibited |
| R3 | Must declare "no hair accessories, no accessories" |
| R4 | Must specify a "pure neutral gray background" |
| R5 | Must specify "four-view consistency" |
| R6 | Full-body standing figures must be displayed completely from the top of the head to the soles of the feet; cropping is strictly prohibited |
| R7 | Must declare the character's height and use the head-to-body ratio to constrain the full-body proportions |
| R8 | Portrait close-ups must be displayed completely from the top of the head to the collarbone; cropping the top of the head is strictly prohibited |
| R9 | Skin must retain realistic texture; excessive retouching is not allowed |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Underwear/exposure/sexualized base layers; attire clearly inconsistent with the character description; overly complex patterns/decorations that interfere with subsequent costume and makeup overlays |
| X2 | Hard light from directly above/light from directly below/colored light |
| X3 | Excessive whitening/excessive retouching resulting in loss of texture |
| X4 | Complex scene backgrounds (must be a pure gray background) |
| X5 | Exaggerated expressions/dynamic poses |
| X6 | Cropping the top of the head or the soles of the feet in full-body standing figures; must be fully framed from head to toe |
| X7 | Cropping the top of the head in portrait close-ups; must be fully framed from the top of the head to the collarbone |
| X8 | Ignoring height and head-to-body ratio constraints |