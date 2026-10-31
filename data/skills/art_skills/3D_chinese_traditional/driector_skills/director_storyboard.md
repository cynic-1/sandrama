---
name: director_storyboard
description: Director Storyboard Prompt Techniques · Chinese Style 3D
metaData: director_skills
---

# Storyboard Prompts · Chinese Style 3D · Style-Specific Techniques

---

## Scope

This Skill is exclusively for generating storyboard prompts in the **Chinese Style 3D** aesthetic.

---

## Emotion → Facial Expression/Eye Gaze Mapping

| Emotion Input | Facial Expression Terms | Eye Gaze Terms | Micro-Expression Supplements |
|----------|--------|--------|-----------|
| Dignified / Elegant | Dignified expression, calm gaze | Clear eyes, steady gaze | Slight upturn of lips, elegant demeanor |
| Sorrowful / Melancholic | Melancholic expression, dim eyes | Tear-filled eyes, downcast gaze | Downturned lips, sorrowful expression |
| Gentle / Deeply Affectionate | Gentle expression, affectionate brows and eyes | Focused, soft gaze, warm look | Slight upturn of lips, healing expression |
| Sharp / Grim | Stern expression, gaze like a blade | Sharp eyes, resolute gaze | Tightened jaw, authoritative expression |
| Surprised / Delighted | Slightly widened eyes, lively expression | Bright eyes, focused gaze | Upturned lips, surprised expression |
| Contemplative / Introspective | Faint expression, distant gaze | Blank stare, unfocused gaze | Calm expression, reserved demeanor |
| Joyful / Cheerful | Radiant expression, crescent-shaped eyes | Bright eyes, lively gaze | Slightly flushed cheeks, vivid expression |
| Fatigued / Weary | Hazy eyes, soft expression | Slightly tired gaze, soft eyes | Slight yawn, languid expression |
| Expectant / Hopeful | Glowing eyes, vibrant expression | Expectant eyes, sparkling gaze | Upturned lips, lively expression |
| Resolute / Firm | Serious expression, clear gaze | Resolute eyes, forward-looking gaze | Slight chin lift, decisive expression |

---

## Lighting and Atmosphere Vocabulary (Chinese Style 3D)

### Time-of-Day Lighting

| Time of Day | Key Light Terms | Color Tone Terms | Atmosphere Terms |
|--------|--------|--------|--------|
| Early Morning | Soft morning light, warm side lighting | Moon white + Cyan-green | Thin mist, fresh air |
| Noon | Bright sunlight, direct soft light | Vermilion + Golden highlights | Clear light and shadow, vivid colors |
| Evening / Dusk | Backlit silhouette, warm gradient | Vermilion + Indigo gradient | Sunset afterglow, rim light |
| Night | Cool background + warm light accents | Indigo dominant + Warm yellow light points | Serene and cozy, soft lighting |
| Rainy Day | Diffused cool light, no key light source | Cyan-green + Moon white | Humid air, low contrast |

### Emotional Lighting

| Emotional Tone | Light Type | Supplementary Constraints |
|----------|----------|----------|
| Imperial Opulence | Warm lighting, localized highlights | PBR material reflections, depth of field layers |
| Landscape Aesthetics | Volumetric light diffusion, misty atmosphere | Cyan-green tones, depth of field blur |
| Boudoir Gentleness | Localized soft light, soft shadows | Rouge tones, close-up shots |
| Wuxia Grimness | Cool-toned shadows, hard light contrast | Indigo + Ink black, low saturation |
| Moonlit Serenity | Moonlight illumination, warm-cool contrast | Indigo background, warm light accents |

---

## Scene Texture Constraints (By Scene Type)

| Scene Type | Mandatory Constraint Terms |
|----------|-----------|
| Imperial Architecture | Vermilion palace walls, glazed gold roofs, carved beams and painted pillars, white marble railings |
| Landscape Gardens | Cyan-green landscapes, upturned eaves and pavilions, winding paths, rockeries and ponds |
| Boudoir Interior | Screen-style fans, carved window lattices, gauze curtains and drapes, classical furniture |
| Wuxia Scenes | Bamboo groves / Snowfields / Cliff edges, cool tones, oppressive atmosphere, sharp lines |
| Festivals | Lanterns / Ribbons / Fireworks, high-saturation warm colors, lively atmosphere, bustling crowds |
| Night Street Scenes | Lanterns / Street lamps / Shops, warm light accents, cool background, reflection highlights |

---

## Fixed Style Anchoring Terms (Must be included in all outputs)

**3D Rendering Anchoring (Mandatory):**

3D rendering style, high-precision modeling, PBR materials, Chinese Style 3D, cinematic lighting

**Character Texture (Mandatory for shots containing characters):**

3D ancient-style modeling, high-resolution textures, clear costume textures, fine hair rendering, rich light and shadow layers

**Scene Texture (Mandatory for shots containing scenes):**

3D scene rendering, rich architectural details, realistic material textures, depth of field blur, volumetric light

**Consistency Anchoring (Mandatory for Reference Image Mode):**

Maintain character design consistent with the reference image, maintain scene style consistent with the reference image, maintain unified lighting and color tone

**Style Closing (Fixed):**

Chinese Style 3D rendering, Eastern aesthetics, PBR materials, cinematic rendering

**Image Quality Locking Terms (Must be included in all outputs, placed after the Style Closing):**

Mode A (Chinese) — Default (when no in-frame text is required):
3D high-definition rendering, high detail, high-precision modeling, PBR materials, no subtitles, no watermarks, no title overlays in the frame

Mode A (Chinese) — In-frame Text Scenario (when the scene description includes props with text such as plaques/couplets/books):
3D high-definition rendering, high detail, high-precision modeling, PBR materials, no subtitles, no watermarks, no title overlays in the frame, text on scene props such as plaques and couplets is clearly legible

Mode B (English) — Default:
3D rendered style, high-poly modeling, PBR materials, Chinese style, cinematic lighting, high detail, no subtitles, no captions, no watermark, no title overlay

Mode B (English) — In-frame Text Scenario:
3D rendered style, high-poly modeling, PBR materials, Chinese style, cinematic lighting, high detail, no subtitles, no captions, no watermark, no title overlay, legible text on in-scene props such as plaques and couplets

**Negative Prompt Template (Must be included in Mode B, placed at the end of the prompt):**

> ⚠️ Seedream (Mode A) **does not support negative prompts**. Negative prompts are only applicable to Mode B. Mode A ensures image quality through texture anchoring and image quality locking in the positive prompt.

Mode B (English):
no photorealistic, no realistic photography, no low-poly, no rough modeling, no plastic texture, no harsh lines, no cartoon style, no anime style, no western fantasy, no cyberpunk, no sci-fi, no modern elements, no subtitles, no captions, no watermark, no title overlay, no UI text

---

## Aesthetic Prohibitions (Strictly avoid during generation)

The following terms/styles must not appear in the output prompt:

- ❌ Photorealistic/Photo-grade realism terms (e.g., photorealistic, realistic photography)
- ❌ High-saturation fluorescent colors/Neon colors/Strong digital feel
- ❌ Western fantasy/Cyberpunk/Modern elements
- ❌ Low-precision modeling/Rough textures/Plastic texture
- ❌ Cartoon/Anime/2D style
- ❌ Flat design/Lack of 3D depth
- ❌ Color chaos/Lighting errors/Perspective errors
- ❌ Modern architecture/Modern clothing elements

> 💡 **Exception**: Certain modern 3D rendering techniques (such as ray tracing, volumetric light) can be reasonably used, but the Chinese aesthetic tone must be maintained.

---

## Complete Generation Example

> The following shows a comparison of the same input using Mode A and Mode B. In actual use, **only one of them should be output**.

### Input (Storyboard Table Row Data)

| No. | Frame Description | Scene | Related Asset Name | Duration | Shot Size | Camera Movement | Character Action | Emotion | Lighting Atmosphere |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | Woman in elaborate attire standing in front of the palace, holding a palace lantern | Palace | Woman | 6s | Medium Shot | Slow Push | Standing sideways holding lantern, gentle gaze | Gentle / Elegant | Warm lighting |

### Example Output A (Mode A · Seedream)

[Prompt]
3D rendering style, high-precision modeling, PBR materials, Chinese Style 3D, cinematic lighting, 3D ancient-style modeling, high-resolution textures, clear costume textures, fine hair rendering, rich light and shadow layers, medium shot composition, woman in elaborate attire standing in front of the palace, standing sideways holding a palace lantern, gentle expression, gentle gaze, vermilion palace wall background, golden highlight accents, volumetric light atmosphere, depth of field blur, Chinese Style 3D rendering, Eastern aesthetics, PBR materials, 3D high-definition rendering, high detail, high-precision modeling, PBR materials, no subtitles, no watermarks, no title overlays in the frame.
Based on the reference image of the Woman, maintain consistent: face features, hairstyle, costume details. Generate a new scene: standing in front of the palace at dusk, holding a lantern. Keep visual style identical to the reference.

### Example Output B (Mode B · Nanobanana)

```xml
<role>
You are a 3D storyboard artist.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: Woman — 3D ancient-style design, elegant attire, Chinese Style 3D aesthetic
</character_reference>
<continuity_rules>
- Same outfit, hairstyle, face features across ALL shots
- Same 3D rendered style, PBR materials
- Same scene lighting, Chinese aesthetic
- Do NOT introduce photorealistic or western fantasy elements
</continuity_rules>
<shot>
Medium shot, woman in elegant traditional Chinese attire standing before palace, holding lantern, gentle expression, soft gaze, cinematic lighting, volumetric fog, depth of field blur, PBR material rendering, high-poly modeling, Chinese palace architecture, warm lighting, golden highlights, Chinese style 3D render, Eastern aesthetics, high detail, no subtitles, no captions, no watermark, no title overlay.
</shot>
<negative>
no photorealistic, no realistic photography, no low-poly, no rough modeling, no plastic texture, no harsh lines, no cartoon style, no anime style, no western fantasy, no cyberpunk, no sci-fi, no modern elements, no subtitles, no captions, no watermark, no title overlay, no UI text
</negative>

---

## Quick Reference Card

### Emotion → Visual Terms Quick Lookup

| Emotion | Facial Keywords | Lighting Match |
|------|-----------|---------|
| Dignified | Dignified expression, steady gaze | Warm lighting + Highlights |
| Sorrowful | Melancholic expression, dim eyes | Cool-toned shadows + Low contrast |
| Gentle | Gentle expression, focused eyes | Localized soft light + Soft focus |
| Sharp | Stern expression, gaze like a blade | Cool-toned shadows + Hard light |
| Joyful | Radiant expression, crescent-shaped eyes | Warm lighting + High saturation |
| Contemplative | Faint expression, distant gaze | Volumetric light + Mist |
| Fatigued | Hazy eyes, soft expression | Soft lighting + Low contrast |
| Resolute | Serious expression, clear gaze | Warm side lighting + Clear contours |
