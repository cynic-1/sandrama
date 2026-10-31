# art_character_3d.md
# 3D Animation Character Base Image Generation · Constraint Manual

---

## I. Base Image Principles

1. **Face is the Soul** — Facial features are the character's sole anchor point, rendered with cel-anim level precision
2. **Character-First** — Base attire is determined by the character description (identity/occupation/gender/scene) to define their regular clothing; specific costume variations are added as overlay layers
3. **Four-View Consistency** — Face/body type/hair style/base clothing must be highly consistent across views
4. **Warm & Healing** — Even in a no-makeup state, the character's temperament (cheerful/gentle/energetic) must be reflected

---

## II. Facial Constraints

> Fixed facial feature parameters are no longer used. AI freely generates facial features driven by the character description (gender/age/personality/temperament) to ensure visual differentiation between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial Features | Naturally derived from character description; no preset face shape/eye shape/brow shape/nose shape/lip shape |
| Style Base | 3D cel-animation rendering, warm color palette, cartoon proportions, joyful and healing atmosphere |
| Temperament | Must extract overall temperament keywords (e.g., warm/energetic/healing/sunny) from the character description and include them in the prompt |
| Expression | Neutral micro-expression, consistent with character temperament |

---

## III. Skin Texture Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Warm white skin, uniform across the body, translucent feel | warm white skin, peach skin, peach skin |
| Sheen | Soft-light skin, inner glow, non-matte | soft-light skin, inner glow, soft glow |
| Texture | Fine and smooth, cel-animation rendering texture | fine skin texture, cel-animation texture |
| Exposed Skin | Face/neck/collarbone/hands | elegant shoulder and neck lines, warm white translucent skin |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Warm beige tone, healthy look, uniform across the body | warm beige tone, healthy skin tone |
| Sheen | Fresh soft light, natural sheen | soft-light skin, clear and fresh skin |
| Texture | Clean and fine, cel-animation sheen | fine skin texture, fresh facial appearance |

---

## IV. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 155-165cm | {height}cm tall, {height description e.g., petite girl} |
| Head-to-Body Ratio | 6 to 7 heads tall, head-to-body ratio = height ÷ head length | 6-7 heads tall proportion, petite build |
| Height Conversion | Head length = height ÷ head-to-body ratio (e.g., 160cm ÷ 6.5 = 24.6cm head length) | cute proportions, harmonious head-to-body ratio |
| Shoulders & Neck | Smooth shoulders and neck, flowing lines | smooth shoulder line, elegant neck |
| Hands | Small and rounded, soft finger joints | rounded small hands, distinct finger joints |
| Posture | Energetic girl, light posture | light posture, agile stance |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 170-180cm | {height}cm tall, {height description e.g., tall cute boy} |
| Head-to-Body Ratio | 6.5 to 7.5 heads tall, head-to-body ratio = height ÷ head length | 6.5-7.5 heads tall proportion, balanced build |
| Height Conversion | Head length = height ÷ head-to-body ratio (e.g., 175cm ÷ 7 = 25cm head length) | cute proportions, harmonious head-to-body ratio |
| Shoulders & Neck | Rounded shoulders, natural neck | rounded shoulders, natural neck line |
| Hands | Rounded palms, soft finger joints | rounded palms, distinct finger joints |
| Posture | Sunny boy/gentle senior (based on character) | upright posture, sunny build |

### Height-to-Head Ratio Conversion Reference

| Height (cm) | Head-to-Body Ratio | Head Length (cm) | Applicable Description |
|---|---|---|---|
| 150-155 | 6.0 | ~25cm | Petite and cute |
| 155-160 | 6.0-6.5 | ~25cm | Sweet and petite |
| 160-165 | 6.5 | ~24.6cm | Fresh girl (female default) |
| 165-170 | 6.5-7.0 | ~25cm | Slender girl |
| 170-175 | 7.0 | ~25cm | Refined boy |
| 175-180 | 7.0-7.5 | ~25cm | Sunny boy (male default) |
| 180-185 | 7.5 | ~25cm | Handsome and tall |

---

## V. Base Hairstyle Constraints

> Only defines natural loose hair/simple tied hair; hair accessories are added in the costume derivation stage.

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Warm brown/light chestnut/chocolate | warm brown long hair, chestnut like gold |
| Hair Length | Shoulder-length or long hair | long hair reaching shoulders |
| Hair Texture | Distinct strands, clear filaments, cel-animation texture | distinct hair strands, fine hair rendering |
| Style | Natural loose hair, center/side part, no accessories | long hair naturally falling, smooth like a waterfall |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Warm brown/dark coffee | dark brown short hair, coffee-colored hair |
| Hair Length | Short to medium-long hair | short hair, ear-length short hair |
| Hair Texture | Distinct strands, clear texture | distinct hair strands, fine hair rendering |
| Style | Natural loose hair or side part, no accessories | short hair naturally falling, side-parted style |

---

## VI. Base Clothing Constraints

> Base clothing is determined by the character description (identity/occupation/gender/scene) to define their most natural regular attire, serving as the character's "daily default state"; formal attire/special derivatives are added in the costume derivation stage. **Underwear base layers are prohibited**.

### Attire Selection Principles

| Character Identity | Default Attire Direction |
|---|---|
| Student | School uniform / Academy attire |
| Office Worker | Professional casual wear (shirt + pants/skirt, light suit) |
| Home/Casual | Urban casual wear (hoodie/T-shirt + pants/dress) |
| Energetic/Lively | Sports set / Modified school uniform |
| Special Occupation | Corresponding identity attire (doctor/police/teacher, etc.) |
| Character Description Unclear | Urban everyday wear, warm color palette |

### Attire Consistency Rules

- Clothing style must be consistent with 3D animation cel-rendering aesthetics (warm color palette, cartoon proportions)
- Colors should be primarily warm-toned, with no complex patterns/decorations, to facilitate subsequent derivative overlays
- Clothing style must be completely consistent across the four views
- Base clothing is the "daily default state"; focus remains on face and posture
- Strictly prohibit underwear/exposure/sexualized base layers

---

## VII. Four-View Setting Diagram Specifications

### View Definitions

| Position | View | Angle | Shot Size | Requirement | Prompt |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Head to collarbone | Complete display from head to collarbone without cropping, face occupies 60%+, clear facial features | portrait closeup, face detail, head to collarbone complete, no crop |
| Left 2 | Front View | Front 0° | Full body standing | Facing camera, arms natural, complete display from head to toe | front view, full body head to toe, height mark |
| Right 2 | Side View | Right 90° | Full body standing | Clear pure side profile, complete display from head to toe | side view, profile, full body head to toe, height mark |
| Right 1 | Back View | Rear 180° | Full body standing | Clear back of head/back/hair ends/feet, complete display from head to toe | back view, rear view, full body head to toe, height mark |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Pure neutral gray #E8E8E8 |
| Stance | Natural standing, feet parallel and slightly apart, arms hanging naturally or slightly extended |
| Full Body Display | Full body standing figure must be completely in frame from head to toe; cropping head or feet is strictly prohibited |
| Close-up Display | Portrait close-up must be completely in frame from head to collarbone; cropping head is strictly prohibited; hair, forehead, and chin must be complete |
| Expression | Neutral micro-expression, consistent with character temperament |
| Lighting | Even soft light, main light from front + fill light from both sides, no hard shadows |
| Consistency | Skin tone/body type/hairstyle/face/base clothing must be completely consistent across the four views |
| Frame Ratio | Recommended 4:1 or 3:1 |

---

## VIII. Prompt Templates

```
{Gender} character four-view design sheet, 3D animation rendering, cinematic lighting, lively celluloid texture, high-detail materials, pleasant and healing atmosphere, cartoon urban style, high-detail cartoon materials, moderate cartoon proportions, warm color palette, 8K ultra-high definition, cinematic composition, soft light and shadow layers, bright cartoon rendering style, warm and healing,
character design sheet, character turnaround,
{Facial features corresponding to the character description - naturally derived from the character description}, {Overall temperament}, bare face without makeup,
{Skin tone}, soft light skin, translucent and glowing skin, fine skin texture, celluloid texture,
{Height description, e.g., 165cm tall, petite cute girl}, {Head-to-body ratio, e.g., 6.5 heads tall proportion}, {Body description}, {Posture description},
{Hair color}{Hair length}, distinct individual hair strands, {Basic hairstyle}, no hair accessories,
{Regular attire corresponding to the character's identity, e.g., school uniform / professional casual wear / urban casual wear}, warm tones, no complex patterns,
Arranged side by side from left to right in the same frame: portrait close-up + front view + side view + back view,
Portrait close-up fully displayed from the top of the head to the collarbone, no cropping of the top of the head, head to collarbone complete,
Full-body standing figure fully displayed from the top of the head to the feet, full body head to toe, no cropping of the top of the head and feet,
Natural standing pose, pure neutral gray background, uniform soft light, no hard shadows,
Four-view consistency, delicate rendering of facial features, delicate rendering of hair strands
No text of any kind in the image
```


---

## IX. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Must be in a "bare-faced, no makeup" state |
| R2 | Must declare appropriate regular attire as the base outfit based on the character description (e.g., student → school uniform, office worker → business casual, at home → urban casual wear); underwear/base layers are prohibited |
| R3 | Must declare "no hair accessories, no accessories" |
| R4 | Must specify a "pure neutral gray background" |
| R5 | Must specify "four-view consistency" |
| R6 | Full-body standing figures must be displayed completely from the top of the head to the soles of the feet; cropping is strictly prohibited |
| R7 | Must declare the character's height and constrain the full-body proportion through head-to-body ratio conversion (default for females: 155–165 cm / 6–7 head heights; default for males: 170–180 cm / 6.5–7.5 head heights) |
| R8 | Portrait close-ups must be displayed completely from the top of the head to the collarbone; cropping the top of the head is strictly prohibited |

### Prohibited

| ID | Prohibited |
|---|---|
| X1 | Underwear/exposure/sexualized base layers; attire clearly inconsistent with the character description; overly complex patterns/decorations that interfere with subsequent costume and makeup overlays |
| X2 | Direct overhead hard light / direct bottom light / colored light |
| X3 | Excessive whitening resulting in no blood color / grayish skin tone |
| X4 | Complex scene backgrounds (must be a pure gray background) |
| X5 | Exaggerated expressions / dynamic poses |
| X6 | Cropping the top of the head or the soles of the feet in full-body standing figures; must be fully framed from head to toe |
| X7 | Cropping the top of the head in portrait close-ups; must be fully framed from the top of the head to the collarbone |
| X8 | Ignoring height and head-to-body ratio constraints; height must be explicitly declared and full-body proportions must be reflected through head-to-body ratio conversion |