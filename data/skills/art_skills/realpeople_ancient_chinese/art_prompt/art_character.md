# Character Base Image Generation · Constraint Manual


---

## I. Base Image Principles

1. **Face is the Soul** — Facial features are the character's sole anchor, rendered with pore-level precision
2. **Character-First** — Base attire is determined by the character description (identity/occupation/gender/scene) to define their regular clothing; specific costume variations are added as overlay layers
3. **Four-View Consistency** — Face/body type/hair/base clothing must be highly consistent across all views
4. **Cool Elegance with Emotion** — Even in a no-makeup state, the character's temperament (cool/refined/seductive) must be reflected

---

## II. Facial Constraints

> Fixed facial feature parameters are no longer used. AI freely generates facial features driven by the character description (gender/age/personality/temperament) to ensure visual differentiation between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial Features | Naturally derived from character description; no preset face shape/eye shape/brow shape/nose shape/lip shape |
| Style Base | Ancient-style realistic photography, pore-level precision rendering, natural lighting, physical light and shadow |
| Temperament | Must extract overall temperament keywords (e.g., cool/refined/seductive/heroic) from the character description and include them in the prompt |
| Expression | Neutral micro-expression, consistent with character temperament |

---

## III. Skin Texture Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Cool white skin, uniform across the body, translucent white | cool white skin, milky skin, milky white skin |
| Sheen | Dewy skin, inner glow, neither matte nor oily | dewy skin, luminous skin, dewy skin |
| Texture | Fine, retaining subtle pore texture | fine skin, subtly visible pores |
| Exposed Skin | Face/neck/collarbone/hands | elegant shoulder and neck lines, fair and translucent skin |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Fair and translucent, healthy appearance, uniform across the body | fair and translucent skin, creamy skin |
| Sheen | Fresh dewy glow, natural sheen | dewy skin, translucent and fresh skin |
| Texture | Clean and crisp, visible pores | fine skin texture, clear and crisp face |

---

## IV. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 160-170cm, height reflected through head-to-body ratio conversion | {height}cm tall, {height description e.g., tall slender woman} |
| Head-to-Body Ratio | 7 to 8 heads tall, head-to-body ratio = height ÷ head length, strictly constraining full-body proportions | 7-8 heads tall proportion, slender build |
| Height Conversion | Head length = height ÷ head-to-body ratio (e.g., 165cm ÷ 7.5 = 22cm head length), used to constrain proportions of head and body segments | balanced proportions, harmonious head-to-body ratio |
| Shoulder & Neck | Swan neck, elegant shoulder and neck line | swan neck, elegant shoulders and neck |
| Hands | Slender and fair, distinct knuckles, five normal fingers | slender fair hands, distinct knuckles |
| Posture | Classical lady, reserved and dignified | dignified posture, elegant stance |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 175-185cm, height reflected through head-to-body ratio conversion | {height}cm tall, {height description e.g., tall imposing man} |
| Head-to-Body Ratio | 7.5 to 8.5 heads tall, head-to-body ratio = height ÷ head length, strictly constraining full-body proportions | 7.5-8.5 heads tall proportion, tall build |
| Height Conversion | Head length = height ÷ head-to-body ratio (e.g., 180cm ÷ 8 = 22.5cm head length), used to constrain proportions of head and body segments | balanced proportions, harmonious head-to-body ratio, broad shoulders and narrow waist |
| Shoulder & Neck | Broad shoulders, strong neck | broad shoulders and narrow waist |
| Hands | Distinct knuckles, large palms, five normal fingers | distinct finger knuckles |
| Posture | Warrior/scholar build (based on character) | upright stance, composed posture |

### Height-to-Head-to-Body Ratio Conversion Reference

| Height (cm) | Head-to-Body Ratio | Head Length (cm) | Applicable Description |
|---|---|---|---|
| 155-160 | 7.0 | ~22cm | Petite and delicate |
| 160-165 | 7.0-7.5 | ~22cm | Slender and elongated |
| 165-170 | 7.5 | ~22cm | Tall and elegant (female default) |
| 170-175 | 7.5-8.0 | ~22cm | Elongated and upright |
| 175-180 | 8.0 | ~22.5cm | Tall and heroic (male default) |
| 180-185 | 8.0-8.5 | ~22cm | Tall and imposing |
| 185-190 | 8.5 | ~22cm | Tall and mighty |

---

## V. Base Hairstyle Constraints

> Only defines natural loose hair/simple tied hair; hair accessories are added in the costume derivation stage.

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Pure black, no brown/highlights | black long hair, ink-black hair like a waterfall |
| Hair Length | Waist-length or longer | waist-length long hair |
| Hair Texture | Distinct strands, clear filaments | distinct hair strands, fine hair rendering |
| Style | Natural loose hair, center/side part, no hair accessories | long hair naturally falling, black hair like a waterfall |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Pure black or ink-black | ink-black hair, black hair like ink |
| Hair Length | Medium to long | long hair, shoulder-length hair |
| Hair Texture | Distinct strands, clear texture | distinct hair strands, fine hair rendering |
| Style | Natural loose hair or half-tied, no hair crown | long hair naturally falling, half-tied long hair |

---

## VI. Base Clothing Constraints

> Base clothing is determined by the character description (identity/dynasty/occupation/scene) to define their most natural regular attire, serving as the character's "daily default state"; formal gowns/special derivations are added in the costume derivation stage. **Underwear base layers are prohibited**.

### Attire Selection Principles

| Character Identity | Default Attire Direction |
|---|---|
| Lady/Miss | Plain-colored ancient-style long dress (light and flowing) |
| Young Master/Scholar | Plain-colored ancient-style long robe |
| Warrior/Hero | Lightweight martial attire / casual battle robe |
| Commoner/Market | Simple short jacket / coarse cloth dress |
| Palace Maid/Servant | Simple palace attire / maid's outfit |
| Character description unclear | Plain-colored ancient-style daily wear (long dress/long robe matched by gender) |

### Attire Consistency Rules

- Clothing style must be consistent with ancient-style realistic aesthetics (traditional Chinese color tones, realistic materials)
- Low saturation colors, no complex patterns/decorations, to facilitate subsequent derivation overlays
- Clothing style must be completely consistent across all four views
- Base clothing is the "daily default state," with focus remaining on face and posture
- Strictly prohibit underwear/exposure/sexualized base layers

---

## VII. Four-View Setting Diagram Specifications

### View Definitions

| Position | View | Angle | Shot Size | Requirement | Prompt |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Top of head to collarbone | Complete display from top of head to collarbone without cropping, face occupies 60%+, clear facial features | portrait closeup, face detail, head to collarbone complete, no crop |
| Left 2 | Front View | Frontal 0° | Full-body standing figure | Facing camera, arms natural, complete display from top of head to feet | front view, full body head to toe, height mark |
| Right 2 | Side View | Right side 90° | Full-body standing figure | Clear pure side profile, complete display from top of head to feet | side view, profile, full body head to toe, height mark |
| Right 1 | Back View | Rear 180° | Full-body standing figure | Clear back of head/back/hair ends/feet, complete display from top of head to feet | back view, rear view, full body head to toe, height mark |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Pure neutral gray #E8E8E8 |
| Stance | Natural standing, feet parallel and slightly apart, arms hanging naturally or slightly extended |
| Full-Body Display | Full-body standing figure must be completely in frame from top of head to feet, strictly no cropping of head or feet |
| Close-up Display | Portrait close-up must be completely in frame from top of head to collarbone, strictly no cropping of head, hair, forehead, and chin must be complete |
| Expression | Neutral micro-expression, consistent with character temperament |
| Lighting | Even soft light, frontal key light + bilateral fill light, no hard shadows |
| Consistency | Skin tone/body type/hairstyle/face/base clothing must be completely consistent across all four views |
| Frame Ratio | Recommended 4:1 or 3:1 |

---

## VIII. Prompt Template

```
{Gender} character four-view design sheet, realistic photography, ancient style realistic documentary, strong contrast, extreme detail,
character design sheet, character turnaround,
{Facial features corresponding to character description - naturally derived from character description}, {Overall temperament}, bare face without makeup,
{Skin tone}, dewy skin, translucent glowing skin, fine skin texture, pores slightly visible,
{Height description, e.g.: 170cm tall, tall slender woman}, {Head-to-body ratio, e.g.: 7.5 heads tall proportion}, {Body description}, {Posture description},
{Hair color} {Hair length}, individual hair strands clearly defined, {Basic hairstyle}, no hair accessories,
{Conventional ancient costume corresponding to character identity, e.g.: plain long dress/plain long robe/lightweight martial arts outfit/coarse cloth short outfit}, traditional Chinese low-saturation colors, no complex patterns,
Arranged side by side from left to right in the same frame: portrait close-up + front view + side view + back view,
Portrait close-up fully displayed from top of head to collarbone, no cropping of the top of the head, head to collarbone complete,
Full-body standing figure fully displayed from top of head to feet, full body head to toe, no cropping of the top of the head and feet,
Natural standing pose, pure neutral gray background, uniform soft light, no hard shadows,
Four-view consistency, delicate facial rendering, delicate hair rendering
No text of any kind in the image
```

---

## IX. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must be in a "bare face, no makeup" state |
| R2 | Must declare appropriate standard period costume as the base outfit based on the character description (e.g., gentlewoman → plain long dress, scholar → plain long robe, general → lightweight martial attire); undergarments are prohibited |
| R3 | Must declare "no hair accessories, no jewelry" |
| R4 | Must specify a "pure neutral gray background" |
| R5 | Must specify "four-view consistency" |
| R6 | Full-body standing figures must be shown completely from the top of the head to the soles of the feet; cropping is strictly prohibited |
| R7 | Must declare the character's height and constrain the full-body proportion through head-to-body ratio conversion (default for females: 160–170 cm / 7–8 head-heights; default for males: 175–185 cm / 7.5–8.5 head-heights) |
| R8 | Portrait close-ups must be shown completely from the top of the head to the collarbone; cropping the top of the head is strictly prohibited |

### Prohibited

| No. | Prohibited |
|---|---|
| X1 | Undergarments/exposure/sexualized base layers; outfits clearly inconsistent with the character description; overly complex patterns/decorations that interfere with subsequent costume and makeup layering |
| X2 | Direct overhead hard light / direct bottom light / colored light |
| X3 | Excessive whitening resulting in no blood color / grayish skin tone |
| X4 | Complex scene backgrounds (must be a pure gray background) |
| X5 | Exaggerated expressions / dynamic poses |
| X6 | Cropping the top of the head or the soles of the feet in full-body standing figures; the figure must be fully framed from head to toe |
| X7 | Cropping the top of the head in portrait close-ups; the subject must be fully framed from the top of the head to the collarbone |
| X8 | Ignoring height and head-to-body ratio constraints; height must be explicitly declared and the full-body proportion must be reflected through head-to-body ratio conversion |


