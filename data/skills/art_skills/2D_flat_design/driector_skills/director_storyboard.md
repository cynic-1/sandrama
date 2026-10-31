---
name: director_storyboard
description: Director Storyboard Prompt Techniques · 2D Flat Style (Flat Design)
metaData: director_skills
---

# Storyboard Prompts · 2D Flat Style · Style-Specific Techniques

---

## Scope of Application

This Skill is exclusively for generating storyboard prompts in the **2D Flat Style (Flat Design)**.

---

## Emotion → Facial/Eye Word Mapping

| Emotion Input | Facial Words | Eye Words | Micro-expression Supplement |
|----------|--------|--------|-----------|
| Infatuation / Joy | Simple lines, orange color blocks | Round eyes, bright gaze | Simple smile, flattened |
| Sadness / Loss | Simple lines, cool color tones | Oval eyes, soft gaze | Downward mouth corners, flattened |
| Surprise / Curiosity | Round eyes, enlarged expression | Focused gaze, curious look | O-shaped mouth, flattened |
| Tenderness / Deep Affection | Soft lines, warm color tones | Focused gaze, soft look | Upward mouth corners, flattened |
| Determination / Courage | Straight lines, cool color tones | Determined gaze, focused look | Clear expression, flattened |
| Shyness / Embarrassment | Pink color blocks, rounded lines | Eyes down, avoiding direct eye contact | Blushing cheeks, flattened |
| Warmth / Moving | Warm lines, soft expression | Warm gaze, soft look | Upturned mouth corners, flattened |
| Loneliness / Nostalgia | Cool lines, simple expression | Blank gaze, pensive look | Calm expression, flattened |
| Happiness / Excitement | Round lines, bright expression | Crescent-shaped eyes, lively expression | Light and quick movements, flattened |
| Tension / Anxiety | Thinner lines, frown symbol | Smaller eyes, uncertain gaze | Tense hand position, flattened |

---

## Color Atmosphere Vocabulary (Flat Style)

### Hue Usage

| Scene Type | Primary Color Words | Secondary Color Words | Atmosphere Words |
|--------|--------|--------|---------|
| Daily Life | Bright blue + off-white | Warm orange accents | Clean feel, modern feel |
| Office Space | Cool gray + cool blue | White + light gray | Rational, efficient feel |
| Leisure Space | Warm orange + warm pink | Off-white + light yellow | Relaxed, comfortable feel |
| Romantic Scene | Warm pink + warm orange | Off-white + light purple | Cozy, sweet feel |
| Night Scene | Deep blue + purple | Warm yellow accents | Serene, mysterious feel |
| Memory Scene | Light yellow + light gray | Warm pink accents | Nostalgic, soft feel |

### Emotion Color Blocks

| Emotional Tone | Color Block Type | Supplementary Constraints |
|----------|----------|---------|
| Infatuation / Warmth | Warm contrasting color blocks | More white space, prominent primary color |
| Sadness / Loss | Cool monochromatic blocks | Lower saturation, larger white space |
| Happiness / Vitality | Multi-color contrasting blocks | High saturation, rich colors |
| Nostalgia / Memory | Low-saturation monochromatic blocks | Unified tone, more white space |
| Daily / Cozy | Warm primary color blocks | Soft contrast, moderate white space |
| Night / Serene | Cool primary color blocks | Warm accents, clear layers |

---

## Scene Texture Constraint Words (By Scene Type)

| Scene Type | Mandatory Constraint Words |
|----------|-----------|
| Flat Characters | Geometric shapes, simple lines, no shadows no gradients, solid color block fill |
| Flat Scenes | Solid color background, geometric shapes, simple structure, no textures no details |
| Office Space | Simple furniture, geometric shapes, cool tones, modern design feel |
| Home Space | Minimalist furniture, warm tones, geometric lines, cozy atmosphere |
| Cityscape | Simplified buildings, geometric shapes, cool tones, modern urban feel |
| Natural Environment | Geometric trees, solid color grass, simple shapes, flattened nature |
| Traffic Scene | Simplified vehicles, geometric shapes, cool tones, modern traffic feel |
| Indoor Space | Simple partitions, solid color walls, geometric doors/windows, modern minimalist |

---

## Fixed Style Anchoring Words (Must be included in all outputs)

**Flat Style Anchoring (Mandatory):**

2D Flat Style, Flat Design, no shadows no gradients, solid color blocks, simple lines

**Color Block Texture (Mandatory for all outputs):**

Solid color fill, no textures no gradients, geometric shapes, flattened design

**Outline Lines (Mandatory for all outputs):**

Clear outline lines, uniform and consistent lines, no broken lines no rough edges

**Color Layers (Mandatory for all outputs):**

Moderate color saturation, clear color block contrast, no complex light and shadow layers

**Atmosphere Anchoring (Mandatory):**

Minimalist modern atmosphere, flat design aesthetics, clear emotional expression, modern visual feel

**Image Quality Locking Words (Must be included in all outputs, placed after the style closing):**

Mode A (Chinese) — Default:
High-definition quality, clear lines, pure colors, no stray colors or noise in the frame, no shadows no gradients

Mode A (Chinese) — In-frame Text Scene (when the scene description contains prop text such as signs/labels):
High-definition quality, clear lines, pure colors, no stray colors or noise in the frame, no shadows no gradients, text on signs/labels and other props is clear and legible

Mode B (English) — Default:
high-quality 2D flat design, clean lines, pure colors, no shadows, no gradients, no noise, no artifacts

Mode B (English) — In-frame Text Scene:
high-quality 2D flat design, clean lines, pure colors, no shadows, no gradients, no noise, no artifacts, legible text on signs and props

**Negative Prompt Template (Must be included in Mode B, placed at the end of the prompt):**

> ⚠️ Seedream (Mode A) **does not support negative prompts**; negative prompts are only applicable to Mode B. Mode A ensures image quality through texture anchoring and image quality locking in the positive prompt.

Mode B (English):
no 3D rendering, no photorealism, no shadows, no gradients, no textures, no realistic lighting, no realistic materials, no complex details, no detailed backgrounds, no realistic faces, no realistic hair, no realistic clothing

---

## Aesthetic Prohibitions (Strictly avoid during generation)

The following words/styles must not appear in the output prompt:

- ❌ Realistic rendering / photo-realistic style
- ❌ Shadow / gradient / texture-related words
- ❌ High-saturation fluorescent colors / over-contrasted color schemes
- ❌ Complex details / fine texture descriptions
- ❌ 3D perspective / depth descriptions
- ❌ Realistic characters / realistic clothing / realistic buildings
- ❌ Overlaid text outside the frame (subtitles, watermarks, title cards, voiceover overlays, and other UI-layer text; the frame must be a pure visual image)

> 💡 **Exception**: Prop text within the story world (signs, road signs, labels, books, and other text naturally present in the scene) is **not prohibited**. When the storyboard frame description includes such content, its existence should be described truthfully and the text should be required to be clear.

---

## Complete Generation Example

> The following shows a comparison of the same input using Mode A and Mode B respectively. In actual use, **only one of them should be output**.

### Input (Storyboard Table Row Data)

| No. | Frame Description | Scene | Related Asset Name | Duration | Shot Size | Camera Movement | Character Action | Emotion | Light & Atmosphere |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | Flat style two people meeting, orange and blue color block contrast, simple background | City | Character A/B | 5s | Medium Shot | Static | Smiling eye contact, simple lines | Infatuation / Warmth | Warm contrast + white space |

### Example Output A (Mode A · Seedream)

[Prompt]
2D Flat Style, Flat Design, no shadows no gradients, solid color blocks, simple lines, medium shot composition, two flat characters half-body in frame, solid color fill, no textures no gradients, geometric shapes, flattened design, clear outline lines, uniform and consistent lines, no broken lines no rough edges, moderate color saturation, clear color block contrast, no complex light and shadow layers, flat style two people meeting, orange and blue color block contrast, simple background, smiling eye contact, simple lines, bright gaze, warm contrast, more white space, minimalist modern atmosphere, flat design aesthetics, clear emotional expression, modern visual feel, high-definition quality, clear lines, pure colors, no stray colors or noise in the frame, no shadows no gradients.
Based on the reference image of Character A/B, maintain consistent: face features, hairstyle, costume details. Generate a new scene: two flat characters meeting in city, orange and blue color block contrast, simple background, smiling and looking at each other. Keep character appearance identical to reference.

### Example Output B (Mode B · Nanobanana)

```xml
<role>
You are a 2D flat design storyboard artist.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: Character A/B — flat design characters, geometric shapes, simple lines, pure colors
</character_reference>
<continuity_rules>
- Same color palette, face features, hairstyle across ALL shots
- Same environment, background color, geometric style
- Only framing, angle, action, expression may change
- Do NOT introduce new characters not in reference images
</continuity_rules>
<shot>
Medium shot, two flat characters meeting in city, orange and blue color block contrast, simple background, smiling and looking at each other, geometric shapes, simple lines, pure colors, no shadows, no gradients, clean lines, high-quality 2D flat design, no noise, no artifacts.
</shot>
<negative>
no 3D rendering, no photorealism, no shadows, no gradients, no textures, no realistic lighting, no realistic materials, no complex details, no detailed backgrounds, no realistic faces, no realistic hair, no realistic clothing
</negative>
```

## Quick Reference Card

### Emotion → Visual Keyword Quick Lookup

| Emotion | Facial Keywords | Color Match |
|------|-----------|---------|
| Infatuation | Rounded lines, orange color blocks | Warm pink + warm orange contrast |
| Sadness | Straight lines, cool color tones | Cool blue + gray monochrome |
| Tenderness | Soft lines, warm color tones | Warm yellow + cream white softness |
| Romance | Curved lines, pink tones | Warm pink + warm orange contrast |
| Moved | Upward lines, warm color tones | Warm orange + warm yellow primary colors |
| Loneliness | Cool color lines, simple expression | Cool blue + purple monochrome |
| Joy | Circular lines, bright expression | Warm orange + yellow contrast |

