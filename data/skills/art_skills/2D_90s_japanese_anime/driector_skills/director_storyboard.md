---
name: director_storyboard
description: Director Storyboard Prompt Techniques · 90s Japanese Animation Aesthetic
metaData: director_skills
---

# Storyboard Prompts · 90s Japanese Animation · Style-Specific Techniques

---

## Scope

This Skill is exclusively for generating storyboard prompts in the **90s Japanese Animation Aesthetic** style.

---

## Emotion → Facial Expression/Eye Gaze Mapping

| Emotion Input | Facial Expression Terms | Eye Gaze Terms | Micro-Expression Supplements |
|----------|--------|--------|-----------|
| Heart-flutter / Delight | Slight upturn of mouth corners, slight blush on cheeks | Bright eyes, gentle gaze | Moon-shaped eyes, restrained expression |
| Sadness / Loss | Downcast expression, slightly reddened eyes | Dim eyes, wandering gaze | Slight frown between brows, introverted expression |
| Surprise / Shock | Slightly stunned expression, widened eyes | Surprised eyes, focused gaze | Raised eyebrows, vivid expression |
| Tenderness / Deep Affection | Soft expression, warm brows and eyes | Focused eyes, affectionate gaze | Slight upturn of mouth corners, restrained yet warm expression |
| Determination / Resolve | Serious expression, determined eyes | Clear gaze, focused eyes | Determined expression, crisp demeanor |
| Shyness / Bashfulness | Blushing cheeks, evasive eyes | Downcast gaze, avoiding direct eye contact | Fingers lightly touching cheek, natural expression |
| Warmth / Moved | Soft expression, smiling eyes | Warm eyes, gentle gaze | Upturned mouth corners, sincere expression |
| Loneliness / Nostalgia | Quiet expression, distant eyes | Vacant gaze, pensive look | Calm expression, quiet demeanor |
| Joy / Excitement | Radiant smile, moon-shaped eyes | Bright eyes, vivid expression | Arms spread wide, light movements |
| Tension / Anxiety | Slightly stiff expression, furrowed brows | Wandering eyes, uncertain gaze | Fingers lightly gripping the hem of clothing, natural movement |

---

## Lighting and Atmosphere Vocabulary (90s Japanese Animation)

### Time-of-Day Lighting

| Time of Day | Key Light Terms | Color Tone Terms | Atmosphere Terms |
|--------|--------|--------|---------|
| Early Morning | Soft morning light, diffused light | Warm yellow tones + light blue accents | Fresh feel, light filtering through leaves |
| Afternoon | Soft oblique side light, diffused light | Predominantly warm tones | Dappled light and shadow, warm feel |
| Dusk/Sunset | Backlit warm tones, orange afterglow | Amber warm + pink accents | Stretched long shadows, nostalgic feel |
| Night | Cold moonlight tones, localized warm light | Predominantly light blue tones + warm accents | Serene feel, layered light and shadow |
| Rainy Day | Diffused cold light, uniform and soft | Gray-blue tones + localized warm accents | Moist feel, fresh feel |
| Memory/Flashback | Soft-focus warm light, misty effect | Predominantly warm yellow, slight fading | Nostalgic feel, blurred edges |

### Emotional Lighting

| Emotional Tone | Light Type | Supplementary Constraints |
|----------|----------|---------|
| Heart-flutter/Tenderness | Soft side light, warm diffused light | Shallow depth of field, slightly blurred background |
| Sadness/Loss | Cold-toned side light, low-key lighting | Retain localized shadows on face |
| Nostalgia/Memory | Soft-focus warm light, misty effect | Slightly blurred edges, overall softness |
| Romance/Sweetness | Backlit warm tones, rim light | Warm light halo, slightly overexposed background |
| Daily Life/Warmth | Uniform diffused light, neutral warm tones | Soft light, no distinct shadows |
| Night/Serenity | Cold moonlight tones, localized warm light | Clear contrast between light and dark, distinct layers |

---

## Scene Texture Constraints (By Scene Type)

| Scene Type | Mandatory Constraint Terms |
|----------|-----------|
| Japanese School | Wooden floor texture, chalk writing on blackboard, green trees outside window, classroom window lattice |
| Japanese Residence | Tatami texture, wooden sliding door frames, warm lighting, Japanese room layout |
| Street/Plaza | Stone-paved road, utility poles, convenience store signs, parked bicycles |
| Café/Restaurant | Wooden tables and chairs, warm pendant lights, street view outside window, coffee cup details |
| Park/Green Space | Grass texture, tree shadows, benches, distant buildings |
| Train/Carriage | Seat fabric, window reflections, scenery outside window, handrail details |
| Bedroom/Private Space | Bedding wrinkles, warm desk lamp light, stationery on desk, lived-in atmosphere |
| Shrine/Temple | Wooden torii pillars, stone path, maple leaves/cherry blossoms, incense smoke |

---

## Fixed Style Anchoring Terms (Must be included in all outputs)

**90s Animation Anchoring (Mandatory):**

90s Japanese animation style, hand-drawn texture, flat coloring, clear and smooth lines, soft warm tones

**Line Texture (Mandatory for all outputs):**

Fine and smooth lines, clear outline lines, uniform and consistent lines, no broken lines or rough edges

**Coloring Texture (Mandatory when including character shots):**

Flat coloring, even colors, no distinct gradients, moderate color saturation

**Lighting Layers (Mandatory when including lighting scenes):**

Cinematic lighting layers, clear contrast between light and dark, soft and natural light effects

**Atmosphere Anchoring (Mandatory):**

Nostalgic healing atmosphere, Japanese animation aesthetics, warm emotional expression

**Image Quality Locking Terms (Must be included in all outputs, placed after the style closing):**

Mode A (Chinese) — Default:
High-definition quality, clear lines, even coloring, soft colors, no noise or grain in the image

Mode A (Chinese) — In-frame Text Scene (when the scene description contains prop text such as signs/labels):
High-definition quality, clear lines, even coloring, soft colors, no noise or grain in the image, text on signs/labels and other props is clearly legible

Mode B (English) — Default:
high-quality 90s anime style, clear line art, even flat coloring, soft warm tones, no noise, no grain, no digital artifacts

Mode B (English) — In-frame Text Scene:
high-quality 90s anime style, clear line art, even flat coloring, soft warm tones, no noise, no grain, no digital artifacts, legible text on signs and props

**Negative Prompt Template (Must be included in Mode B, placed at the end of the prompt):**

> ⚠️ Seedream (Mode A) **does not support negative prompts**; negative prompts are only applicable to Mode B. Mode A ensures image quality through texture anchoring and image quality locking in the positive prompt.

Mode B (English):
no modern anime style, no digital 3D rendering, no CG animation, no cel-shading, no heavy shading, no gradient fills, no plastic look, no oversaturated colors, no neon colors, no cyberpunk, no sci-fi elements, no futuristic design

---

## Aesthetic Prohibitions (Strictly Avoid During Generation)

The following terms/styles must not appear in the output prompt:

- ❌ Modern Japanese animation style (e.g., late Makoto Shinkai, MAPPA style)
- ❌ 3D rendering/CG animation/digital painting related terms
- ❌ High-saturation fluorescent colors/neon color palettes
- ❌ Modern clothing/modern architectural elements
- ❌ Heavy shadows/excessive contrast/dark tone style
- ❌ Cartoon proportions, big eyes, chibi/deformed descriptions
- ❌ Cyberpunk/steampunk/fantasy Western elements
- ❌ Overlay text outside the frame (subtitles, watermarks, title cards, voiceover overlays, etc. UI layer text; the frame must be a pure visual image)

> 💡 **Exception**: Prop text within the story world (signs, road signs, labels, books, and other text naturally present in the scene) is **not prohibited**. When the storyboard scene description includes such content, it should be described as present and required to be clear.

---

## Complete Generation Example

> The following shows a comparison of the same input using Mode A and Mode B. In actual use, **only one of them should be output**.

### Input (Storyboard Table Row Data)

| No. | Scene Description | Scene | Related Asset Name | Duration | Shot Size | Camera Movement | Character Action | Emotion | Lighting Atmosphere |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | On the Asakusa platform, sunset afterglow falls on the girl | Station | Asakusa Station | 5s | Medium Shot | Slow Push | Holding a school bag, smiling sideways while looking into the distance | Anticipation / Warmth | Dusk backlit warm tones |

### Example Output A (Mode A · Seedream)

[Prompt]
90s Japanese animation style, hand-drawn texture, flat coloring, clear and smooth lines, soft warm tones, medium shot composition, character half-body in frame, fine and smooth lines, clear outline lines, uniform and consistent lines, no broken lines or rough edges, flat coloring, even colors, no distinct gradients, moderate color saturation, girl standing on the Asakusa platform, holding a school bag, smiling sideways while looking into the distance, eyes full of anticipation and warmth, dusk backlit warm tones, stretched long shadows, nostalgic atmosphere, clear wooden platform texture, utility poles in the background, cinematic lighting layers, clear contrast between light and dark, soft and natural light effects, nostalgic healing atmosphere, Japanese animation aesthetics, warm emotional expression, high-definition quality, clear lines, even coloring, soft colors, no noise or grain in the image.
Based on the reference image of the girl, maintain consistency in: facial features, hairstyle, and costume details. Generate a new scene: standing on a train station platform at sunset, holding a school bag, smiling into the distance. Keep the character's appearance identical to the reference.

### Example Output B (Mode B · Nanobanana)

```xml
<role>
You are a 90s anime storyboard artist.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: Girl — black long hair in twin tails, gentle eyes, school uniform, slim body shape
</character_reference>
<continuity_rules>
- Same wardrobe, hairstyle, face features across ALL shots
- Same environment, lighting style, color grade
- Only framing, angle, action, expression may change
- Do NOT introduce new characters not in reference images
</continuity_rules>
<shot>
Medium shot, character standing on a train station platform at sunset, holding a school bag with one hand, smiling gently at the distance, eyes filled with expectation and warmth, warm sunset backlight, long shadows, nostalgic atmosphere, wooden platform texture visible, electric poles in background, cinematic lighting layers, clear contrast between light and dark, soft natural light effects, healing anime aesthetic, high-quality 90s anime style, clear line art, even flat coloring, soft warm tones, no noise, no grain, no digital artifacts.
</shot>
<negative>
no modern anime style, no digital 3D rendering, no CG animation, no cel-shading, no heavy shading, no gradient fills, no plastic look, no oversaturated colors, no neon colors, no cyberpunk, no sci-fi elements, no futuristic design
</negative>
```

## Quick Reference Card

### Emotion → Visual Keyword Quick Lookup

| Emotion | Facial Keywords | Lighting Match |
|------|-----------|---------|
| Infatuation | Slight blush on cheeks, crescent-shaped eyes | Soft side light, warm tone |
| Sadness | Downcast expression, slightly reddened eyes | Cool-toned side light, low key |
| Tenderness | Gentle expression, soft and warm eyes and brows | Even diffused warm light |
| Nostalgia | Calm expression, distant gaze | Soft-focus warm light, haze |
| Moved | Smiling at the corners of the eyes, sincere expression | Backlight, warm tone, halo |
| Loneliness | Quiet expression, vacant gaze | Cool-toned side light, shadows |
| Joy | Radiant smile, bright eyes | Even diffused warm light |