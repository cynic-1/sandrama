---
name: director_storyboard
description: Director Storyboard Prompt Techniques · Live-Action Urban Realism
metaData: director_skills
---

# Storyboard Prompts · Live-Action Urban Realism · Style-Specific Techniques

---

## Scope

This Skill is exclusively for generating storyboard prompts in the **Live-Action Urban Realism** style.

---

## Emotion → Facial/Eye Expression Mapping

| Emotion Input | Facial Terms | Eye Terms | Micro-Expression Supplements |
|----------|--------|--------|-----------|
| Infatuation / Joy | Corners of mouth slightly upturned, smile in the eyes | Bright eyes, focused gaze | Slight blush on cheeks, natural expression |
| Sadness / Loss | Calm complexion, downcast demeanor | Dim eyes, wandering gaze | Slight frown between brows, restrained expression |
| Anger / Oppression | Sharp brows and eyes, stern demeanor | Piercing gaze, dominant eyes | Tightened lip line, oppressive aura |
| Tenderness / Deep Affection | Soft demeanor, gentle brows and eyes | Focused eyes, affectionate gaze | Slight upturn of mouth, restrained warmth |
| Determination / Resolve | Serious demeanor, composed face | Firm eyes, clear and sharp gaze | Calm brows and eyes, capable temperament |
| Surprise / Shock | Slightly stunned expression, slight change in complexion | Widened eyes, sudden focus | Slight raise of eyebrows, slightly parted lips |
| Indifference / Alienation | Cold face, indifferent demeanor | Distant, empty eyes, unrippled gaze | Expression nearly frozen, aloof temperament |
| Joy / Excitement | Vivid expression, radiant smile | Bright, lively eyes, smiling eyes | Upturned mouth, lively and natural expression |
| Tension / Panic | Slightly bewildered expression, flustered demeanor | Shifting eyes, looking around | Slight frown between brows, vivid and realistic expression |
| Endurance / Restraint | Inward demeanor, calm face | Deep eyes, suppressed emotion in the depths | Tightened lip line, slight movement of the Adam's apple |

---

## Lighting and Atmosphere Vocabulary (Live-Action Urban Realism)

### Time-of-Day Lighting

| Time of Day | Key Light Terms | Color Tone Terms | Atmosphere Terms |
|--------|--------|--------|---------|
| Early Morning | Diffused morning light, soft scattered light | Cool white/neutral tones | Sense of city awakening, fresh air |
| Afternoon | Soft oblique side light, diffused scattered light | Warm tones dominant, light warm tones | Dappled light and shadow, distinct layers |
| Evening/Dusk | Warm-toned side backlight, slanting afterglow | Warm tones dominant, local warm light accents | Stretched long shadows, warm light feel |
| Night | Cold blue window light, indoor warm point light sources | Cold-warm contrast | Deep shadows, strong light-dark contrast |
| Rainy/Overcast | Diffused cold light, no key light source | Gray-blue dominant | Humid air feel, low saturation |
| Office/Indoor | Top light + ambient light | Neutral gray tones | Soft and even, professional feel |

### Emotional Lighting

| Emotional Tone | Light Type | Supplementary Constraints |
|----------|----------|---------|
| Infatuation/Warmth | Soft side backlight, local diffused warm light | Rim light outlining, shallow depth of field softening background |
| Confrontation/Oppression | Hard side light, high-contrast strong lighting | Hard shadows, distinct light-dark division |
| Oppression/Sadness | Diffused cold light, top light or side cold light | Low-key lighting, retaining local shadows on face |
| Mystery/Solemnity | Cold blue side light, backlit silhouette | Halo control, precise edge light |
| Ethereal/Atmospheric | Diffused soft light, slight overexposure of backlight | Atmospheric perspective, distant background blurred and faint |

---

## Scene Texture Constraints (By Scene Type)

| Scene Type | Mandatory Constraint Terms |
|----------|-----------|
| Office | Glass partition reflections, tidy office desk, computer screen light, modern office chair |
| Cafe/Restaurant | Wood grain texture of tables and chairs, coffee cup details, warm-colored pendant lights, blurred street view outside window |
| Home Space | Sofa fabric texture, carpet texture, warm light from table lamp, details of household clutter |
| Street/Plaza | Asphalt road surface reflection, building facade details, neon signs, blurred crowd |
| Mall/Indoor Space | Marble floor reflection, glass display windows, modern lighting, depth of commercial space |
| Inside Car | Leather texture of seats, car window reflections, dashboard light, blurred street view outside window |
| Bedroom/Private Space | Bed sheet wrinkles, warm light from bedside lamp, casually placed clothes, lived-in atmosphere |

---

## Fixed Style Anchoring Terms (Must be included in all outputs)

**Live-Action Realism Anchoring (Mandatory):**

Live-action realism photography, cinematic quality, hyper-realistic documentary, strong contrast, extreme detail, ultra-clear textures

**Character Texture (Mandatory when character shots are included):**

Fine skin, delicate facial rendering, three-dimensional facial features, distinct individual hair strands, delicate hair rendering

**Clothing Texture (Mandatory when character shots are included):**

Clear modern clothing fabric texture, ultra-clear texture details, clothes draping naturally with movement, modern tailored fit

**Consistency Anchoring (Mandatory for Reference Image Mode):**

Maintain character face consistent with reference image, maintain costume color scheme consistent with reference image, maintain scene lighting style unified

**Style Closing (Fixed):**

Urban realism aesthetics, modern Eastern temperament, cinematic storyboard composition

**Quality Lock Terms (Must be included in all outputs, placed after Style Closing):**

Mode A (Chinese) — Default (when no in-scene text is required):
Ultra-clear 4K quality, high detail, natural sharpness, realistic clarity, no subtitles, no watermarks, no title overlays in the frame

Mode B (English) — Default:
ultra-sharp 4K, high detail, crisp textures, naturalistic sharpness, photorealistic clarity, no subtitles, no captions, no watermark, no title overlay

Mode B (English) — In-scene text scenarios:
ultra-sharp 4K, high detail, crisp textures, naturalistic sharpness, photorealistic clarity, no subtitles, no captions, no watermark, no title overlay, legible text on in-scene props such as screens, posters, and signage

**Negative Prompt Template (Must be included in Mode B, placed at the end of the prompt):**

> ⚠️ Seedream (Mode A) **does not support negative prompts**; negative prompts are only applicable to Mode B. Mode A ensures image quality through texture anchoring and quality locking in the positive prompts.

Mode B (English):
no plastic skin, no beauty filter, no studio lighting, no centered composition, no oversaturation, no AI generated look, no motion blur, no noise, no blurry, no out of focus, no subtitles, no captions, no watermark, no title overlay, no UI text, no ancient costume, no hanfu, no traditional Chinese architecture

---

## Aesthetic Prohibitions (Strictly avoid during generation)

The following terms/styles must not appear in the output prompts:

- ❌ Terms related to ancient style/ancient times/hanfu/traditional architecture
- ❌ Terms related to anime/2D/illustration/CG rendering
- ❌ Lack of modern elements (modern scenes must be explicitly stated)
- ❌ Warm yellow dominant tone terms (may use "local warm light accents")
- ❌ Soft focus/hazy feel/low contrast filter terms
- ❌ Clashing colors/mixing/neon/fluorescent color schemes
- ❌ Cartoon proportions, big eyes, chibi-style deformations
- ❌ Cyberpunk/steampunk/fantasy Western elements
- ❌ Overlaid text outside the frame (subtitles, watermarks, title cards, voiceover overlays, opening credits, and other UI layer text; the frame must be a pure visual image)

> 💡 **Exception**: Text on props within the story world (text naturally present in scenes such as characters looking at phone/computer screens, posters, road signs, shop signs, etc.) **is not prohibited**. When the storyboard frame description includes such content, its presence should be described faithfully and the text should be required to be clear.

---

## Complete Generation Example

> The following shows a comparison of the same input using Mode A and Mode B respectively. In actual use, **only one of them should be output**.

### Input (Storyboard Table Row Data)

| No. | Frame Description | Scene | Associated Asset Name | Duration | Shot Size | Camera Movement | Character Action | Emotion | Lighting Atmosphere |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | Lin Wan stands by the cafe window, raindrops sliding down outside | Cafe | Lin Wan | 4s | Medium Shot | Slow Push | Holding a coffee cup, gazing out the window | Longing / Anticipation | Warm-toned side light + cold blue window light |

### Example Output A (Mode A · Seedream)

[Prompt]
Live-action realism photography, cinematic quality, hyper-realistic documentary, strong contrast, extreme detail, ultra-clear textures, medium shot composition, character half-body in frame, fine skin, delicate facial rendering, three-dimensional facial features, distinct individual hair strands, delicate hair rendering, female protagonist standing by the cafe window, naturally holding a cup of coffee with both hands, gazing out the window, eyes full of anticipation and slight longing, warm-toned side light in the cafe, cold blue rain light outside the window outlining the character's edges, clear wood grain texture of tables and chairs, details of raindrops on the glass window, modern Eastern temperament, cinematic storyboard composition, ultra-clear 4K quality, natural sharpness, realistic clarity, no subtitles, no watermarks, no title overlays in the frame.
Based on the reference image of Lin Wan, maintain consistent: face features, hairstyle, costume details. Generate a new scene: standing by the cafe window on a rainy day, holding a coffee cup, gazing outside. Keep character appearance identical to reference.

### Example Output B (Mode B · Nanobanana)

```xml
<role>
You are a cinematographer and storyboard artist.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: Lin Wan — black long hair tied in a half ponytail, gentle eyes, modern casual outfit, slim body shape
</character_reference>
<continuity_rules>
- Same wardrobe, hairstyle, face features across ALL shots
- Same environment, lighting style, color grade
- Only framing, angle, action, expression may change
- Do NOT introduce new characters not in reference images
</continuity_rules>
<shot>
Medium shot, character standing by a cafe window on a rainy day, holding a coffee cup with both hands, gazing outside with an expression of expectation and longing, warm side light, cold blue window light creating rim light effect, wooden table texture, raindrops on glass visible, modern cinematic realism, ultra-sharp 4K, high detail, crisp textures, photorealistic clarity, no subtitles, no captions, no watermark, no title overlay.
</shot>
<negative>
no plastic skin, no beauty filter, no studio lighting, no centered composition, no oversaturation, no AI generated look, no motion blur, no noise, no blurry, no out of focus, no subtitles, no captions, no watermark, no title overlay, no UI text, no ancient costume, no hanfu, no traditional Chinese architecture
</negative>
```

## Quick Reference Card

### Emotion → Visual Keyword Quick Lookup

| Emotion | Facial Keywords | Lighting Match |
|------|-----------|---------|
| Infatuation | Slight upturn at the corners of the mouth, a smile in the eyes | Warm-toned side light |
| Sorrow | Calm complexion, dim eyes | Diffused cool light |
| Anger | Sharp brows and eyes, piercing gaze | Hard side light, high contrast |
| Tenderness | Soft expression, focused eyes | Localized diffused warm light |
| Determination | Serious expression, resolute eyes | Neutral gray tone |
| Indifference | Cold expression, distant, empty eyes | Cool blue side light |
| Restraint | Calm expression, suppressed emotions in the eyes | Low-key cool light, shadows preserved |


