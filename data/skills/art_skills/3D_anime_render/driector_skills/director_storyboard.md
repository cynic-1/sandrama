---
name: director_storyboard
description: Director Storyboard Prompt Techniques · 3D Animation Rendering
metaData: director_skills
---

# Storyboard Prompts · 3D Animation Rendering · Style-Specific Techniques

---

## Scope

This Skill is exclusively for generating storyboard prompts in the **3D Animation Rendering** style.

---

## Emotion → Facial Expression/Eye Gaze Mapping

| Emotion Input | Facial Terms | Eye Gaze Terms | Micro-expression Supplements |
|----------|--------|--------|-----------|
| Infatuation / Joy | Corners of mouth slightly upturned, cheeks slightly flushed | Bright eyes, gentle gaze | Eyes curved like a crescent, lively expression |
| Sadness / Loss | Downturned expression, eyes slightly reddened | Dim eyes, wandering gaze | Slight frown between brows, restrained expression |
| Surprise / Curiosity | Eyes widened, lively expression | Focused eyes, curious gaze | Mouth slightly open, natural movement |
| Tenderness / Deep Affection | Soft expression, gentle eyebrows and eyes | Focused eyes, affectionate gaze | Corners of mouth slightly upturned, restrained and warm expression |
| Determination / Courage | Serious expression, determined eyes | Clear gaze, focused eyes | Determined expression, clear aura |
| Shyness / Bashfulness | Cheeks flushed, natural expression | Downcast eyes, avoiding direct eye contact | Fingers lightly touching cheeks, gentle movement |
| Warmth / Moved | Soft expression, smiling eyes | Warm eyes, gentle gaze | Corners of mouth upturned, sincere expression |
| Loneliness / Nostalgia | Quiet expression, distant eyes | Blank gaze, pensive | Calm expression, quiet aura |
| Happiness / Excitement | Bright smile, bright eyes | Vivid eyes, lively expression | Body leaning forward, light movement |
| Tension / Anxiety | Slightly stiff expression, brows slightly furrowed | Wandering eyes, uncertain gaze | Fingers clenched, tense movement |

---

## Lighting and Atmosphere Vocabulary (3D Animation Rendering)

### Time-of-Day Lighting

| Time of Day | Key Light Terms | Color Tone Terms | Atmosphere Terms |
|--------|--------|--------|---------|
| Early Morning | Soft morning light, scattered light | Warm yellow tones + light blue accents | Fresh feel, light filtering through windows |
| Afternoon | Soft oblique side light, diffused light | Predominantly warm tones | Dappled light and shadow, warm feel |
| Dusk / Sunset | Backlit sunset glow, orange afterglow | Warm orange + pink accents | Stretched long shadows, romantic feel |
| Night | Neon glow, localized warm light | Predominantly warm orange + cool accents | Urban feel, layered light and shadow |
| Indoor Daily | Warm side light, even and soft | Predominantly warm yellow | Cozy feel, domestic atmosphere |
| City Empty Shot | Diffused sunset glow, soft halo | Predominantly warm orange | Open feel, urban aesthetics |

### Emotional Lighting

| Emotional Tone | Light Type | Supplementary Constraints |
|----------|----------|---------|
| Infatuation / Warmth | Soft side light, warm diffused light | Shallow depth of field, slight background blur |
| Sadness / Loss | Cool side light, low-key lighting | Retain local shadows on face |
| Romance / Sweetness | Backlit sunset glow, rim light | Warm color halo, slight background overexposure |
| Nostalgia / Memory | Soft-focus warm light, mist effect | Slight edge blur, overall softness |
| Daily / Cozy | Even diffused light, neutral warm tones | Soft light, no distinct shadows |
| Night / Urban | Neon glow, cool-warm contrast | Clear light-dark contrast, distinct layers |

---

## Scene Texture Constraints (By Scene Type)

| Scene Type | Mandatory Constraint Terms |
|----------|-----------|
| Modern City | Detailed architectural structures, skyscrapers, glass curtain walls, city skyline |
| Café / Restaurant | Wooden tables and chairs, warm lighting, street view outside window, coffee cup details |
| Home Space | Modern furniture, warm table lamps, details of daily clutter, cozy atmosphere |
| Office | Glass partitions, desks, computer screens, modern office chairs |
| Street / Plaza | Asphalt road surface, street lamps, pedestrians, modern buildings |
| Mall / Indoor | Marble flooring, glass display windows, commercial space, lighting fixtures |
| Park / Green Space | Grass texture, tree shadows, benches, distant buildings |
| Inside Car / Public Transport | Seat fabric, window reflections, dashboard light, blurred street view outside |

---

## Fixed Style Anchoring Terms (Must be included in all outputs)

**3D Animation Anchoring (Mandatory):**

3D animation rendering, cel-shading texture, cinematic lighting, high-detail materials

**Outline Lines (Mandatory for all outputs):**

Clear outline lines, bright cartoon rendering, uniform and consistent outline lines, no broken lines or rough edges

**Material Texture (Mandatory when including material shots):**

High-detail materials, combination of realistic materials and cartoon proportions, clear material textures, delicate surface quality

**Lighting Layers (Mandatory when including lighting scenes):**

Soft lighting layers, clear light-dark contrast, soft and natural light effects, warm tones dominant

**Atmosphere Anchoring (Mandatory):**

Joyful and healing atmosphere, 3D animation aesthetics, warm emotional expression, modern urban vibe

**Image Quality Locking Terms (Must be included in all outputs, placed after the style closing):**

Mode A (Chinese) — Default:
8K ultra HD, clear lines, delicate materials, rich colors, no stray colors or noise in the image

Mode A (Chinese) — In-frame Text Scene (when the scene description contains prop text such as signs/labels):
8K ultra HD, clear lines, delicate materials, rich colors, no stray colors or noise in the image, text on signs/labels and other props is clearly legible

Mode B (English) — Default:
8K ultra HD, clear cel-shading, detailed materials, warm tones, no digital artifacts, no grain, no noise

Mode B (English) — In-frame Text Scene:

8K ultra HD, clear cel-shading, detailed materials, warm tones, no digital artifacts, no grain, no noise

Mode B (English) — In-frame Text Scene:

8K ultra HD, clear cel-shading, detailed materials, warm tones, no digital artifacts, no grain, no noise, legible text on signs and props

**Negative Prompt Template (Must be included in Mode B, placed at the end of the prompt):**

> ⚠️ Seedream (Mode A) **does not support negative prompts**; negative prompts are only applicable to Mode B. Mode A ensures image quality through texture anchoring and image quality locking in the positive prompts.

Mode B (English):
no photorealism, no realistic rendering, no CG realism, no dark tones, no heavy shading, no oversaturated colors, no neon colors, no cyberpunk, no sci-fi elements, no futuristic design, no plastic look, no cartoon flat coloring without depth

---

## Aesthetic Prohibitions (Strictly avoid during generation)

The following terms/styles must not appear in the output prompts:

- ❌ Photorealistic rendering / photo-realistic style
- ❌ Dark tones / heavy shadows / excessive contrast style
- ❌ High-saturation fluorescent colors / neon color palette
- ❌ Lack of modern elements (modern scenes must be explicitly stated)
- ❌ Deformed descriptions such as cartoon proportions, big eyes, chibi style
- ❌ Cyberpunk / Steampunk / Fantasy Western elements
- ❌ Overlaid text outside the frame (subtitles, watermarks, title cards, voiceover overlays, and other UI-layer text; the frame must be a pure visual image)

> 💡 **Exception**: Prop text within the story world (signs, road signs, labels, books, and other text naturally present in the scene) **is not prohibited**. When the storyboard frame description includes such content, its existence should be described truthfully, and the text should be required to be clear.

---

## Complete Generation Example

> The following shows a comparison of the same input using Mode A and Mode B respectively. In actual use, **only one of them should be output**.

### Input (Storyboard Table Row Data)

| No. | Frame Description | Scene | Related Asset Name | Duration | Shot Size | Camera Movement | Character Action | Emotion | Lighting Atmosphere |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | On a street at dusk, a girl stands at the intersection, sunset glow on her hair | Street | Girl | 5s | Medium Shot | Slow Push | Holding a shopping bag, smiling sideways while looking into the distance | Anticipation / Warmth | Dusk sunset glow + warm side light |

### Example Output A (Mode A · Seedream)

[Prompt]
3D animation rendering, cel-shading texture, cinematic lighting, high-detail materials, medium shot composition, half-body character in frame, clear outline lines, bright cartoon rendering, uniform and consistent outline lines, no broken lines or rough edges, high-detail materials, combination of realistic materials and cartoon proportions, clear material textures, delicate surface quality, on a street at dusk, a girl stands at the intersection, holding a shopping bag, smiling sideways while looking into the distance, eyes full of anticipation and warmth, sunset glow on her hair, backlit sunset glow, warm orange dominant, pink accents, soft lighting layers, clear light-dark contrast, soft and natural light effects, joyful and healing atmosphere, 3D animation aesthetics, warm emotional expression, modern urban vibe, 8K ultra HD, clear lines, delicate materials, rich colors, no stray colors or noise in the image.
Based on the reference image of the girl, maintain consistent: face features, hairstyle, costume details. Generate a new scene: standing on a street corner at sunset, holding a shopping bag, smiling gently at the distance. Keep character appearance identical to reference.

### Example Output B (Mode B · Nanobanana)

```xml
<role>
You are a 3D animation storyboard artist.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: Girl — long brown hair, gentle eyes, modern casual outfit, slim body shape
</character_reference>
<continuity_rules>
- Same wardrobe, hairstyle, face features across ALL shots
- Same environment, lighting style, color grade
- Only framing, angle, action, expression may change
- Do NOT introduce new characters not in reference images
</continuity_rules>
<shot>
Medium shot, character standing on a street corner at sunset, holding a shopping bag with one hand, smiling gently at the distance, eyes filled with expectation and warmth, sunset backlight on hair, warm cel-shading, detailed materials, clear outline lines, cinematic lighting, warm tones, soft shallow depth of field, modern urban aesthetic, healing atmosphere, high-quality 3D animation, 8K ultra HD, clear line art, detailed materials, no digital artifacts, no grain.
</shot>
<negative>
no photorealism, no realistic rendering, no CG realism, no dark tones, no heavy shading, no oversaturated colors, no neon colors, no cyberpunk, no sci-fi elements, no futuristic design, no plastic look, no cartoon flat coloring without depth
</negative>
```

## Quick Reference Card

### Emotion → Visual Keyword Quick Lookup

| Emotion | Facial Keywords | Lighting Match |
|------|-----------|---------|
| Infatuation | Slight upturn at the corners of the mouth, slight blush on the cheeks | Backlit sunset glow, warm tones |
| Sadness | Downcast expression, slightly reddened eyes | Cool-toned side lighting, low-key |
| Tenderness | Soft expression, gentle eyes and brows | Even diffused warm light |
| Romance | Focused gaze, deep affection in the eyes | Backlit warm tones with a halo effect |
| Moved | Smiling eyes, sincere expression | Warm-toned side lighting, soft |
| Loneliness | Quiet expression, distant gaze | Cool-toned side lighting, shadows |
| Joy | Bright smile, bright eyes | Warm-toned diffused light |
| Sweetness | Bright eyes, lively expression | Backlit rim light |
