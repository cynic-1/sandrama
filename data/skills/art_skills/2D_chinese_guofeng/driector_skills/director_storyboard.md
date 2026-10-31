---
name: director_storyboard
description: Director Storyboard Prompt Techniques · Chinese-Style 2D Neo-Chic
metaData: director_skills
---

# Storyboard Prompts · Chinese-Style 2D Neo-Chic · Style-Specific Techniques

---

## Scope

This Skill is exclusively for generating storyboard prompts in the **Chinese-Style 2D Neo-Chic** style.

---

## Emotion → Facial Expression/Eye Gaze Mapping

| Emotion Input | Facial Expression Terms | Eye Gaze Terms | Micro-Expression Supplements |
|----------|--------|--------|-----------|
| Gentle / Deep Affection | Gentle expression, eyes full of emotion | Focused, soft gaze, warm look | Slight upturn of lips, healing expression |
| Resolute / Brave | Serious expression, clear gaze | Determined gaze, looking forward | Chin slightly raised, resolute expression |
| Shy / Timid | Blushing cheeks, evasive eyes | Shy gaze, downcast eyes | Lips lightly pressed, cute expression |
| Sharp / Grim | Stern expression, gaze like a blade | Sharp gaze, firm look | Jaw tightened, majestic expression |
| Joyful / Cheerful | Radiant expression, crescent-shaped eyes | Bright gaze, lively look | Slight blush, vivid expression |
| Sorrowful / Melancholic | Melancholic expression, dim eyes | Tearful gaze, downcast eyes | Corners of mouth turned down, sorrowful expression |
| Surprised / Delighted | Eyes slightly wide open, vivid expression | Bright gaze, focused look | Mouth slightly open, surprised expression |
| Contemplative / Introspective | Faint expression, distant gaze | Blank gaze, unfocused look | Calm expression, reserved demeanor |
| Tired / Weary | Hazy eyes, soft expression | Slightly tired gaze, soft eyes | Slight yawn, languid expression |
| Expectant / Hopeful | Glowing eyes, vibrant expression | Expectant gaze, sparkling look | Upturned lips, lively expression |

---

## Lighting and Atmosphere Vocabulary (Chinese-Style 2D Neo-Chic)

### Time-of-Day Lighting

| Time of Day | Key Light Terms | Color Tone Terms | Atmosphere Terms |
|--------|--------|--------|--------|
| Early Morning | Soft morning light, warm side lighting | Moon white + Cyan-green | Thin mist, fresh air |
| Noon | Bright sunlight, direct soft light | Vermilion + Golden highlights | Clear light and shadow, vivid colors |
| Evening/Dusk | Backlit silhouette, warm gradient | Vermilion + Indigo gradient | Sunset afterglow, rim light |
| Night | Cool background + warm light accents | Indigo dominant + Warm yellow light points | Quiet and cozy, soft lighting |
| Rainy Day | Diffused cool light, no key light source | Cyan-green + Moon white | Humid air, low contrast |

### Emotional Lighting

| Emotional Tone | Light Type | Supplementary Constraints |
|----------|----------|----------|
| Xianxia Ethereal | Soft diffused light, ethereal dynamics | Cyan-green tones, depth-of-field blur, cel shading flat color |
| Imperial Opulence | Warm lighting, local highlights | Vermilion tones, emphasized highlights, depth layers |
| Girl's Daily Life | Local soft light, soft shadows | Rouge tones, close-up shots, fresh atmosphere |
| Wuxia Grim | Cool-toned shadows, hard light contrast | Indigo + Ink black, low saturation, tense atmosphere |
| Moonlit Poetic | Moonlight illumination, warm-cool contrast | Indigo background, warm light accents, aesthetic atmosphere |

---

## Scene Texture Constraint Terms (By Scene Type)

| Scene Type | Mandatory Constraint Terms |
|----------|-----------|
| Xianxia Scene | Swirling clouds, upturned eaves and pavilions, flowing sleeves, cyan-green landscapes, cel shading flat color |
| Imperial Scene | Vermilion palace walls, golden glazed roofs, carved beams and painted pillars, white marble railings, Neo-Chic decorations |
| Boudoir Interior | Screen-style fans, carved window lattices, gauze curtains and drapes, classical furniture, delicate brushstrokes |
| Wuxia Scene | Bamboo groves/Snowy fields/Cliffs, cool tones, oppressive atmosphere, sharp lines, Neo-Chic style |
| Festival Celebration | Lanterns/Ribbons/Fireworks, high-saturation warm colors, lively atmosphere, bustling crowds |
| Night Street Scene | Lanterns/Street lamps/Shops, warm light accents, cool background, reflections, Japanese rendering |

---

## Fixed Style Anchoring Terms (Must be included in all outputs)

**Chinese-Style 2D Anchoring (Mandatory):**

Chinese-Style 2D, Neo-Chic aesthetic, Japanese animation rendering, cel shading flat color, delicate brushstrokes

**Character Texture (Mandatory when character shots are included):**

2D Chinese-style character design, clear lines, cel shading coloring, exquisite costume details, rich light and shadow layers

**Scene Texture (Mandatory when scene shots are included):**

Chinese-Style 2D scene, rich traditional architectural details, Japanese rendering technique, delicate light and shadow texture

**Consistency Anchoring (Mandatory for Reference Image Mode):**

Maintain character design consistent with the reference image, maintain scene style consistent with the reference image, maintain unified light and color tone

**Style Closing (Fixed):**

Chinese-Style 2D cinematic quality, Eastern ancient charm, Neo-Chic style, Japanese animation rendering technique

**Image Quality Locking Terms (Must be included in all outputs, placed after the style closing):**

Mode A (Chinese) — Default (when no in-frame text is required):
Chinese-Style 2D high-definition rendering, high detail, delicate lines, cel shading flat color feel, cinematic quality, no subtitles, no watermarks, no title overlays in the frame

Mode A (Chinese) — In-frame Text Scenes (when the scene description includes props with text such as plaques/couplets/books):
Chinese-Style 2D high-definition rendering, high detail, delicate lines, cel shading flat color feel, cinematic quality, no subtitles, no watermarks, no title overlays in the frame, text on scene props such as plaques and couplets is clearly legible

Mode B (English) — Default:
Chinese style anime, neo-chic aesthetic, Japanese animation rendering technique, cel shading, fine brushstrokes, cinematic quality, high detail, no subtitles, no captions, no watermark, no title overlay

Mode B (English) — In-frame Text Scenes:
Chinese style anime, neo-chic aesthetic, Japanese animation rendering technique, cel shading, fine brushstrokes, cinematic quality, high detail, no subtitles, no captions, no watermark, no title overlay, legible text on in-scene props such as plaques and couplets

**Negative Prompt Template (Must be included in Mode B, placed at the end of the prompt):**

> ⚠️ Seedream (Mode A) **does not support negative prompts**; negative prompts are only applicable to Mode B. Mode A ensures image quality through texture anchoring and image quality locking in the positive prompt.

Mode B (English):
no photorealistic, no realistic photography, no 3D render, no low-poly, no rough modeling, no plastic texture, no harsh lines, no western fantasy, no cyberpunk, no sci-fi, no modern elements, no cartoon style without anime quality, no subtitles, no captions, no watermark, no title overlay, no UI text

---

## Aesthetic Prohibitions (Strictly Avoid During Generation)

The following terms/styles must not appear in the output prompt:

- ❌ Realistic photography/3D realistic rendering/photo-level realism terms
- ❌ High-saturation fluorescent colors/Neon colors/Strong digital feel
- ❌ Western fantasy/Cyberpunk/Excessive modern elements
- ❌ Rough lines/Blurry image quality/Low-precision modeling
- ❌ Cartoon/Anime/2D style without refinement
- ❌ Flat design/Lack of 2D depth
- ❌ Color chaos/Lighting errors/Perspective errors
- ❌ Modern architecture/Modern clothing elements

> 💡 **Exception**: Certain modern rendering techniques (such as volumetric light, depth-of-field blur) can be used reasonably, but the Chinese-Style 2D aesthetic tone must be maintained.

---

## Complete Generation Example

> The following shows a comparison of the same input using Mode A and Mode B. In actual use, **only one of them should be output**.

### Input (Storyboard Table Row Data)

| No. | Frame Description | Scene | Related Asset Name | Duration | Shot Size | Camera Movement | Character Action | Emotion | Lighting Atmosphere |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | Ancient-costume girl standing in front of a palace, holding a flower branch, gentle eyes | Palace | Ancient-costume girl | 6s | Medium Shot | Slow Push | Standing sideways holding a flower, gentle eyes | Gentle / Elegant | Warm light illumination |

### Example Output A (Mode A · Seedream)

[Prompt]
Chinese-Style 2D, Neo-Chic aesthetic, Japanese animation rendering, cel shading flat color, delicate brushstrokes, 2D Chinese-style character design, clear lines, cel shading coloring, exquisite costume details, rich light and shadow layers, medium shot composition, ancient-costume girl standing in front of a palace, standing sideways holding a flower branch, gentle expression, gentle eyes, vermilion palace wall background, golden highlights, volumetric light atmosphere, depth-of-field blur, Chinese-Style 2D cinematic quality, Eastern ancient charm, Neo-Chic style, Japanese animation rendering technique, Chinese-Style 2D high-definition rendering, high detail, delicate lines, cel shading flat color feel, cinematic quality, no subtitles, no watermarks, no title overlays in the frame.
Based on the reference image of the ancient-costume girl, maintain consistent: facial features, hairstyle, costume details. Generate a new scene: standing in front of the palace at dusk, holding a flower branch. Keep visual style identical to the reference.


### Example Output B (Mode B · Nanobanana)

```xml
<role>
You are an anime storyboard artist.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: Ancient costume girl — Chinese style 2D design, elegant attire, Neo-Chinese Chic aesthetic
</character_reference>
<continuity_rules>
- Same outfit, hairstyle, face features across ALL shots
- Same cel shading style, Japanese animation rendering
- Same scene lighting, Chinese anime aesthetic
- Do NOT introduce photorealistic or western fantasy elements
</continuity_rules>
<shot>
Medium shot, ancient Chinese girl in elegant traditional attire standing before palace, holding flower branch, gentle expression, soft gaze, cinematic lighting, volumetric fog, depth of field blur, cel shading with fine brushstrokes, Chinese style anime, neo-chic aesthetic, Japanese animation rendering technique, high detail, no subtitles, no captions, no watermark, no title overlay.
</shot>
<negative>
no photorealistic, no realistic photography, no 3D render, no low-poly, no rough modeling, no plastic texture, no harsh lines, no western fantasy, no cyberpunk, no sci-fi, no modern elements, no cartoon style without anime quality, no subtitles, no captions, no watermark, no title overlay, no UI text
</negative>
```

## Quick Reference Card

### Emotion → Visual Keyword Quick Lookup

| Emotion | Facial Keywords | Lighting Match |
|------|-----------|---------|
| Gentle | Gentle expression, focused gaze | Soft diffused light + warm light |
| Resolute | Serious expression, clear gaze | Warm side light + clear contours |
| Shy | Blushing cheeks, averted gaze | Warm side light + blush |
| Sharp | Stern expression, blade-like gaze | Cool-toned shadows + hard light |
| Joyful | Radiant expression, crescent-shaped eyes | Warm lighting + high saturation |
| Melancholy | Sorrowful expression, dim gaze | Cool-toned shadows + low contrast |
| Weary | Hazy gaze, soft expression | Soft light + low contrast |
| Contemplative | Faint expression, distant gaze | Volumetric light + mist |
| Expectant | Glowing eyes, vivid expression | Warm side light + high brightness |














