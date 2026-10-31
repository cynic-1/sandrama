---
name: director_storyboard
description: Director Storyboard Prompt Techniques · Stop-Motion Clay Texture
metaData: director_skills
---

# Storyboard Prompts · Stop-Motion Clay · Style-Specific Techniques

---

## Scope

This Skill is exclusively for generating storyboard prompts in the **Stop-Motion Clay Texture** style.

---

## Emotion → Facial Expression/Eye Gaze Mapping

| Emotion Input | Facial Terms | Eye Gaze Terms | Micro-Expression Supplements |
|----------|--------|--------|-----------|
| Heart-flutter / Delight | Slightly blushing cheeks, restrained expression | Bright eyes, gentle gaze | Slight upturn of mouth corners, clay indentation marks |
| Sadness / Loss | Downcast expression, soft demeanor | Dim eyes, wandering gaze | Slightly furrowed brows, introverted expression |
| Surprise / Curiosity | Widened eyes, lively expression | Focused eyes, curious gaze | Slightly open mouth, natural movement |
| Tenderness / Deep Affection | Soft expression, warm brows and eyes | Focused eyes, affectionate gaze | Slight upturn of mouth corners, restrained warmth |
| Determination / Courage | Serious expression, determined eyes | Clear gaze, focused eyes | Resolute expression, clear aura |
| Shyness / Bashfulness | Blushing cheeks, natural expression | Downcast gaze, avoiding direct eye contact | Fingers pinching the edge of clay clothing, gentle movement |
| Warmth / Moved | Soft expression, smiling eyes | Warm eyes, gentle gaze | Upturned mouth corners, sincere expression |
| Loneliness / Nostalgia | Quiet expression, distant eyes | Blank gaze, pensive look | Calm expression, quiet aura |
| Joy / Excitement | Radiant smile, bright eyes | Lively eyes, vibrant expression | Leaning forward, light and quick movements |
| Tension / Anxiety | Slightly stiff expression, furrowed brows | Wandering eyes, uncertain gaze | Fingers clenched, tense movement |

---

## Lighting and Atmosphere Vocabulary (Stop-Motion Clay)

### Time-of-Day Lighting

| Time of Day | Key Light Terms | Color Tone Terms | Atmosphere Terms |
|--------|--------|--------|---------|
| Early Morning | Soft morning light, diffused light | Warm yellow tones + light blue accents | Fresh feel, light filtering through windows |
| Afternoon | Soft oblique side light, diffused light | Predominantly warm tones | Dappled light and shadow, warm feel |
| Dusk/Sunset | Backlit warm tones, orange afterglow | Amber warmth + pink accents | Stretched long shadows, nostalgic feel |
| Night | Cold moonlight tones, localized warm light | Predominantly light blue tones + warm accents | Serene feel, layered light and shadow |
| Indoor Daily Life | Warm side light, even and soft | Predominantly warm yellow | Cozy feel, domestic atmosphere |
| Fantasy/Magic | Fantasy light effects, magical light points | Colorful light spots, soft-focus effect | Dreamy feel, magical atmosphere |

### Emotional Lighting

| Emotional Tone | Light Type | Supplementary Constraints |
|----------|----------|---------|
| Heart-flutter/Tenderness | Soft side light, warm diffused light | Shallow depth of field, slight background blur |
| Sadness/Loss | Cold side light, low-key lighting | Retain local shadows on the face |
| Fantasy/Dreamy | Magical light effects, colorful light points | Control halos, soft edge lighting |
| Nostalgia/Memory | Soft-focus warm light, misty effect | Slight edge blur, overall softness |
| Daily/Cozy | Even diffused light, neutral warm tones | Soft light, no distinct shadows |
| Night/Serene | Cold moonlight tones, localized warm light | Clear contrast between light and dark, distinct layers |

---

## Scene Texture Constraint Terms (By Scene Type)

| Scene Type | Mandatory Constraint Terms |
|----------|-----------|
| Retro Wooden House | Clear wood grain, clay brick walls, warm lighting, retro furniture |
| Fantasy Forest | Clay-textured trees, light spot effects, magical light points, natural ground |
| Indoor Daily Life | Clay-textured walls, furniture details, warm lighting, household clutter |
| Street Plaza | Clay-textured cobblestone roads, retro architecture, warm streetlights, clay crowd |
| Café/Restaurant | Clay-textured wooden tables and chairs, warm lighting, blurred street view outside window |
| Garden/Courtyard | Clay-shaped flowers and plants, soil texture, dappled sunlight, bench details |
| Cave/Underground | Clay-textured rocks, cave lighting, shadow layers, mysterious atmosphere |
| Castle/Palace | Clay-textured stone bricks, ornate decorations, warm lighting, grand space |

---

## Fixed Style Anchoring Terms (Must be included in all outputs)

**Stop-Motion Anchoring (Mandatory):**

Stop-motion style, clay texture, visible finger indentations, clay texture material, warm-toned lighting

**Clay Texture (Mandatory for all outputs):**

Clear clay texture, visible finger indentations, distinct material grain, preserved handmade marks

**Character Material (Mandatory when character shots are included):**

3D cartoon characters, fantasy style, soft shallow depth of field, clear clay material details

**Lighting Layers (Mandatory when lighting scenes are included):**

Cinematic lighting layers, clear light-dark contrast, soft and natural light effects, warm tones dominant

**Atmosphere Anchoring (Mandatory):**

Healing nostalgic atmosphere, stop-motion aesthetics, warm emotional expression, handmade texture

**Image Quality Locking Terms (Must be included in all outputs, placed after the style closing):**

Mode A (Chinese) — Default:
High-definition quality, clear clay texture, soft colors, no noise or artifacts in the image, shallow depth of field effect

Mode A (Chinese) — In-Frame Text Scenes (when the scene description includes prop text such as signs/labels):
High-definition quality, clear clay texture, soft colors, no noise or artifacts in the image, shallow depth of field effect, legible text on props and signs

Mode B (English) — Default:
high-quality stop-motion animation, clear clay texture, warm lighting, soft shallow depth of field, no digital artifacts, no plastic look

Mode B (English) — In-Frame Text Scenes:
high-quality stop-motion animation, clear clay texture, warm lighting, soft shallow depth of field, no digital artifacts, no plastic look, legible text on props and signs

**Negative Prompt Template (Must be included in Mode B, placed at the end of the prompt):**

> ⚠️ Seedream (Mode A) **does not support negative prompts**; negative terms apply only to Mode B. Mode A ensures image quality through texture anchoring and image quality locking in the positive prompt.

Mode B (English):
no modern digital 3D, no CGI rendering, no smooth plastic, no oversaturated colors, no neon colors, no cyberpunk, no sci-fi elements, no sharp edges, no clean lines, no vector art, no cartoon flat coloring, no cel-shading

---

## Aesthetic Prohibitions (Strictly Avoid During Generation)

The following terms/styles must not appear in the output prompt:

- ❌ Modern 3D animation style (Pixar/Disney late-era style)
- ❌ Smooth plastic/modern CG rendering related terms
- ❌ High-saturation fluorescent colors/neon color schemes
- ❌ Modern scenes/modern architectural elements
- ❌ Heavy shadows/excessive contrast/dark tone style
- ❌ Cartoon proportions, big eyes, chibi-style deformation descriptions
- ❌ Cyberpunk/Steampunk/fantasy Western elements
- ❌ Overlaid off-screen text (subtitles, watermarks, title cards, voiceover overlays, etc. UI-layer text; the frame must be a pure visual image)

> 💡 **Exception**: Prop text within the story world (signs, road signs, labels, books, etc. text naturally present in the scene) is **not prohibited**. When the storyboard frame description includes such content, describe its presence accurately and require the text to be clear.

---

## Complete Generation Example

> The following shows a comparison of the same input using Mode A and Mode B. In actual use, **only one of them should be output**.

### Input (Storyboard Table Row Data)

| No. | Frame Description | Scene | Related Asset Name | Duration | Shot Size | Camera Movement | Character Action | Emotion | Lighting Atmosphere |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | Inside a retro wooden house, two clay figures gaze at each other and smile under warm light | Wooden House | Protagonist A/B | 5s | Medium Shot | Slow Push | Sitting opposite each other, hands lightly touching, tender smile | Heart-flutter / Sweet | Warm side light + soft shallow depth of field |

### Example Output A (Mode A · Seedream)

[Prompt]
Stop-motion style, clay texture, visible finger indentations, clay texture material, warm-toned lighting, medium shot composition, two clay figures in a half-body shot, clear clay texture, visible finger indentations, distinct material grain, preserved handmade marks, 3D cartoon characters, fantasy style, soft shallow depth of field, clear clay material details, inside a retro wooden house, two clay figures sitting opposite each other under warm light, hands lightly touching, tender smile, eyes full of heart-flutter and sweetness, warm side light, soft shallow depth of field, clear wood grain, clay brick wall texture, cinematic lighting layers, clear light-dark contrast, soft and natural light effects, healing nostalgic atmosphere, stop-motion aesthetics, warm emotional expression, high-definition quality, clear clay texture, soft colors, no noise or artifacts in the image, shallow depth of field effect.
Based on the reference image of Protagonist A/B, maintain consistent: face features, hairstyle, costume details. Generate a new scene: two clay characters sitting across from each other inside a retro wooden room at warm light, touching hands gently, smiling tenderly. Keep character appearance identical to reference.

### Example Output B (Mode B · Nanobanana)

```xml
<role>
You are a stop-motion claymation director.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: Protagonist A/B — clay figurines, soft rounded features, warm earthy tones, small cute proportions
</character_reference>
<continuity_rules>
- Same clay texture, color palette, face features across ALL shots
- Same environment, lighting style, color grade
- Only framing, angle, action, expression may change
- Do NOT introduce new characters not in reference images
</continuity_rules>
<shot>
Medium shot, two clay characters sitting across from each other inside a retro wooden room at warm light, hands gently touching, smiling tenderly, eyes filled with warmth and affection, warm side light, soft shallow depth of field, wooden texture visible, clay brick wall texture, cinematic lighting layers, clear contrast between light and dark, soft natural light effects, healing nostalgic atmosphere, stop-motion animation aesthetic, high-quality stop-motion, clear clay texture, warm lighting, no digital artifacts, no plastic look.
</shot>
<negative>
no modern digital 3D, no CGI rendering, no smooth plastic, no oversaturated colors, no neon colors, no cyberpunk, no sci-fi elements, no sharp edges, no clean lines, no vector art, no cartoon flat coloring, no cel-shading
</negative>
```

## Quick Reference Card

### Emotion → Visual Keyword Quick Lookup

| Emotion | Facial Keywords | Lighting Match |
|------|-----------|---------|
| Infatuation | Slight blush on cheeks, clay indentations | Soft side light, warm tone |
| Sadness | Downcast expression, soft features | Cool-toned side light, low key |
| Tenderness | Gentle expression, warm eyes and brows | Even diffused warm light |
| Fantasy | Enlarged eyes, colored light spots | Fantasy light effects, halos |
| Moved | Smiling at the corners of the eyes, sincere expression | Warm-toned side light, soft |
| Loneliness | Quiet expression, vacant gaze | Cool-toned side light, shadows |
| Joy | Bright smile, bright eyes | Warm-toned diffused light |





