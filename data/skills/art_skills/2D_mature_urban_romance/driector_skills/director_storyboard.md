---
name: director_storyboard
description: Director's Storyboard Prompt Techniques · Mature Urban Romance Animation
metaData: director_skills
---

# 2D Director Storyboard Prompt Techniques · Mature Urban Romance Animation

---

## I. Emotion → Facial Expression/Eye Gaze Mapping

| Emotion Input | Facial Terms | Eye Gaze Terms | Micro-Expression Supplement |
|----------|--------|--------|-----------|
| Heart-fluttering / Palpitation | Slight blush, faintly stunned expression | Affectionate gaze, lingering eyes | Slight upturn of lips, restrained expression |
| Sadness / Suppression | Calm face, sorrowful demeanor | Slightly reddened eyes, downcast gaze | Lightly furrowed brows, introverted demeanor |
| Anger / Oppression | Sharp brows and eyes, stern expression | Blade-like gaze, dominant eyes | Tightened lip line, oppressive aura |
| Tenderness / Deep Affection | Gentle demeanor, affectionate brows and eyes | Focused, soft gaze, deep affection | Slight upturn of lips, restrained and warm expression |
| Determination / Resoluteness | Solemn demeanor, composed face | Firm gaze, clear and sharp eyes | Calm brows and eyes, dignified temperament |
| Surprise / Shock | Slightly dazed expression, slight change in complexion | Widened eyes, sudden focus | Lightly raised brow tips, slightly parted lips |
| Indifference / Alienation | Cold face, indifferent demeanor | Empty, distant gaze, icy eyes | Expression nearly frozen, ascetic temperament |
| Joy / Delight | Vivid expression, beaming smile | Bright, lively eyes, crescent-shaped eye corners | Upturned lips, lively and natural expression |
| Tension / Panic | Slightly bewildered expression, flustered demeanor | Wandering eyes, looking around | Slightly furrowed brow center, vivid and realistic expression |
| Endurance / Restraint | Introverted demeanor, calm face | Deep gaze, suppressed emotion in the eyes | Tightened lip line, slight movement of Adam's apple |

---

## II. Lighting and Atmosphere Vocabulary (Mature Urban Romance Animation)

### Time-of-Day Lighting

| Time of Day | Key Light Terms | Color Tone Terms | Atmosphere Terms |
|--------|--------|--------|--------|
| Early Morning | Scattered morning light, diffused soft light | Cold white tone, pale blue tone | Thin mist, sense of air, dew texture |
| Afternoon | Soft oblique side light, diffused scattered light | Neutral tone, light warm tone | Dappled light and shadow, distinct layers |
| Evening / Dusk | Cold-toned side backlight, slanting afterglow | Cold tone dominant, local warm light accents | Stretched long shadows, poetic light feel, rim light |
| Night | Cold blue moonlight, local warm points from candlelight | Cold blue dominant tone | Deep shadows, strong contrast between light and dark |
| Rainy Weather | Diffused cold light, no key light source | Gray cold tone | Humid air feel, low saturation |

### Emotional Lighting

| Emotional Tone | Light Type | Supplementary Constraints |
|----------|----------|----------|
| Heart-fluttering / Warmth | Soft side backlight, local diffused warm light | Rim light outlining, shallow depth of field to soften background |
| Confrontation / Oppression | Hard side light, high-contrast strong lighting | Hard shadows, clear division between light and dark |
| Suppression / Sadness | Diffused cold light, top light or side cold light | Low-key lighting, retaining local shadows on the face |
| Mystery / Solemnity | Cold blue side light, backlit silhouette | Controlled halo, precise edge light |
| Ethereal / Artistic | Diffused soft light, slight overexposure from backlight | Atmospheric perspective, blurred distant background |

---

## III. Scene Texture Constraints (By Scene Type)

| Scene Type | Mandatory Constraint Terms |
|----------|-----------|
| Modern Apartment | Sofa/TV/bed/kitchen, clear modern furniture texture, floor reflection, curtain drape |
| Business Office | Desk/computer/documents/bookshelf, modern office materials, glass partition reflection |
| Café | Tables/chairs/coffee cups/bar/window, wood grain texture, glass cup texture, warm light |
| City Street | Streetlights/crosswalks/buildings/vehicles, modern urban materials, night lights, atmospheric perspective |
| Park Green Space | Trees/benches/lawn/path, natural materials, dappled light and shadow, sense of air |
| Campus Scene | Teaching building/playground/trees/benches, campus materials, youthful atmosphere, natural light |
| Hotel Room | Bed/bathroom/TV/nightstand, hotel materials, comfortable and modern, warm light atmosphere |

---

## IV. Fixed Style Anchoring Terms (Must be included in all outputs)

**2D Style Anchoring (Mandatory):**

2D animation style, cel shading, clear lines, cinematic composition, dramatic low-key lighting,

**Character Texture (Mandatory when including character shots):**

Delicate facial rendering, fine skin, exquisite features, distinct hair layers, delicate hair rendering

**Clothing Texture (Mandatory when including character shots):**

Clear fabric texture, ultra-clear texture details, realistic fabric folds, clothing flowing with movement

**Scene Texture (Mandatory when including scene shots):**

Clear scene material texture, atmospheric perspective, modern usage traces, lived-in feel, depth-of-field blur

**Consistency Anchoring (Mandatory for reference image mode):**

Maintain character face consistent with reference image, maintain costume color scheme consistent with reference image, maintain scene lighting style unified

**Style Closing (Fixed):**

Mature urban romance animation style, modern novel adaptation animation, cinematic storyboard composition

**Image Quality Locking Terms (Must be included in all outputs, placed after style closing):**

### Mode A (Chinese)

Default (when no in-frame text is required):
Ultra-clear 4K quality, high detail, natural sharpness, realistic clarity, no subtitles, no watermarks, no title overlays in the frame

In-frame Text Scene (when the frame description includes props with writing/scrolls/plaques, etc.):
Ultra-clear 4K quality, high detail, natural sharpness, realistic clarity, no subtitles, no watermarks, no title overlays in the frame, text on in-scene props such as scrolls and plaques is clearly legible

### Mode B (English)

Default:
ultra-sharp 4K, high detail, crisp textures, naturalistic sharpness, photorealistic clarity, no subtitles, no captions, no watermark, no title overlay

In-frame Text Scene:
ultra-sharp 4K, high detail, crisp textures, naturalistic sharpness, photorealistic clarity, no subtitles, no captions, no watermark, no title overlay, legible text on in-scene props such as scrolls and plaques

**Negative Prompt Template (Must be included in Mode B, placed at the end of the prompt):**

> ⚠️ Seedream (Mode A) **does not support negative prompts**; negative prompts are only applicable to Mode B. Mode A ensures image quality through texture anchoring and image quality locking in the positive prompt.

Mode B (English):
no plastic skin, no beauty filter, no studio lighting, no centered composition, no oversaturation, no AI generated look, no motion blur, no noise, no blurry, no out of focus, no subtitles, no captions, no watermark, no title overlay, no UI text

---

## V. Aesthetic Prohibitions (Strictly Avoid During Generation)

The following terms/styles must not appear in the output prompt:

- ❌ Live-action realism/photography/3D rendering related terms (e.g., photorealistic, real photography, CGI)
- ❌ Ancient style/fantasy/sci-fi styles other than modern elements
- ❌ High-saturation fluorescent/neon colors
- ❌ Cartoon proportions, big eyes, chibi-style deformations (unless specific style requirements apply)
- ❌ Modern tech elements in frame (phone screens, computer interfaces, modern signage, etc.)
- ❌ Overlaid text outside the frame (subtitles, watermarks, title cards, voiceover overlays, opening titles, etc. UI layer text; the frame must be a pure visual image)

> 💡 **Exception**: Text on props within the story world (text written by characters, calligraphy on scrolls, plaques, signboards, letters, prescriptions, etc. that naturally exist in the scene) **is not prohibited**. When the storyboard frame description includes such content, its existence should be described accurately and the text should be required to be clear.

---

## VI. Complete Generation Example

> The following shows a comparison of the same input using Mode A and Mode B respectively. In actual use, **only one of them should be output**.

### Input (Storyboard Table Row Data)

| No. | Frame Description | Scene | Related Asset Name | Duration | Shot Size | Camera Movement | Character Action | Emotion | Lighting Atmosphere |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | Shen Ci stands by the window of his apartment, gazing at the city night view | Apartment | Shen Ci | 4s | Wide Shot | Static | Standing with hands behind back, gazing out the window | Tenderness / Deep Affection | Night cold-toned side backlight |

### Example Output A (Mode A · Seedream)

[Prompt]
2D animation style, cel shading, clear lines, cinematic composition, dramatic low-key lighting, wide shot composition, full body of character in frame, delicate facial rendering, fine skin, exquisite features, distinct hair layers, delicate hair rendering, male protagonist standing by the apartment window, arms naturally hanging at his sides, gazing out the window, gentle demeanor, focused and soft gaze, deep affection, clear modern apartment materials, sofa/TV/bed/kitchen, clear modern furniture texture, floor reflection, curtain drape, night cold-toned side backlight, cold blue moonlight, deep shadows, strong contrast between light and dark, mature urban romance animation style, modern novel adaptation animation, cinematic storyboard composition, ultra-clear 4K quality, natural sharpness, realistic clarity, no subtitles, no watermarks, no title overlays in the frame.
Based on the reference image of Shen Ci, maintain consistent: face features, hairstyle, costume details. Generate a new scene: standing by the apartment window at night, gazing out at the city view. Keep character appearance identical to reference.

### Example Output B (Mode B · Nanobanana)

```xml
<role>
You are a cinematographer and storyboard artist.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: Shen Ci — black long hair, calm gentle eyes, modern casual clothing, tall slim body shape
</character_reference>
<continuity_rules>
- Same wardrobe, hairstyle, face features across ALL shots
- Same environment, lighting style, color grade
- Only framing, angle, action, expression may change
- Do NOT introduce new characters not in reference images
</continuity_rules>
<shot>
Full shot, character standing by the apartment window at night, gazing out at the city view, gentle and composed expression, focused eyes with deep emotion, cold dusk backlight, moonlight ambiance, dark interior with subtle light from outside, mature urban romance anime style, cel shading, ultra-sharp 4K, high detail, crisp textures, photorealistic clarity, no subtitles, no captions, no watermark, no title overlay.
</shot>
<negative>
no plastic skin, no beauty filter, no studio lighting, no centered composition, no oversaturation, no AI generated look, no motion blur, no noise, no blurry, no out of focus, no subtitles, no captions, no watermark, no title overlay, no UI text
</negative>
```

## Quick Reference Card

### Emotion → Visual Keyword Quick Lookup

| Emotion | Facial Keywords | Lighting Match |
|------|-----------|----------|
| Infatuation | Slight blush, affectionate gaze | Soft side-backlight |
| Sorrow | Serene face, slightly reddened eyes | Diffused cool light |
| Anger | Sharp brows and eyes, gaze like a blade | Hard side light, high contrast |
| Tenderness | Affectionate features, soft gaze | Localized diffused warm light |
| Determination | Stern expression, clear and sharp gaze | Cool-toned side light |
| Indifference | Cold, clear face, distant, empty gaze | Cool blue side light |
| Suppression | Serene face, suppressed emotion in the eyes | Low-key cool light, shadows retained |