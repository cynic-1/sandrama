# 3D Animation Rendered Urban Scene Derivative Asset Generation · Constraint Manual

---

## I. Derivation Principles

1. **Spatial Consistency** — Building structures/layout/materials remain consistent across all variants
2. **Shot Type Driven** — The same scene demonstrates different narrative functions through different shot types
3. **Time-of-Day Switching** — The same space presents different lighting and atmosphere at different times of day
4. **Weather Variation** — The same space presents different moods under different weather conditions
5. **Cel-Shading as Anchor** — All variants must maintain 3D animation rendering + cel-shading style, rejecting realistic photography/CG animation feel; maintain consistency in lens characteristics and lighting
6. **Unified Urban Atmosphere** — All variants must maintain a modern urban style and warm-toned color palette

---

## II. Shot Type Variants

### Shot Type Definitions

| Shot Type | Scope | Narrative Function | Prompt |
|---|---|---|---|
| Extreme Wide Shot | Full scene + surrounding environment | Establish spatial sense, location | extreme wide shot, extreme wide shot |
| Wide Shot | Complete scene presentation | Display spatial structure | wide shot, wide shot |
| Medium Shot | Local area of the scene | Focus on functional areas | medium shot, medium shot |
| Close Shot | Scene details | Material/atmosphere prop close-up | close shot, close shot |
| Extreme Closeup | Extremely local details | Material texture/key props | extreme closeup, extreme closeup |

### Shot Type Derivation Standards

| Derive from Base Image | Keep Unchanged | Allowed Changes |
|---|---|---|
| Extreme Wide Shot → Wide Shot | Building exterior, overall layout | Narrower perspective, added foreground |
| Wide Shot → Medium Shot | Materials, color tone, lighting | Cropping focus, depth of field changes |
| Medium Shot → Close Shot | Materials, color tone | Shallow depth of field, background blur |
| Close Shot → Extreme Closeup | Material texture | Extremely shallow depth of field, macro feel |

---

## III. Time-of-Day Variants

### Time-of-Day Definitions

| Time of Day | Visual Characteristics | Prompt |
|---|---|---|
| Early Morning | Thin mist, soft light, mixed warm/cool tones (cel-shaded) | faint morning light, early morning mist |
| Noon | Bright, short shadows, vivid colors (cel-shaded) | noon sunlight, bright light |
| Dusk | Golden tones, long shadows, sky gradient (cel-shaded) | dusk golden glow, golden hour |
| Night (Moonlight) | Cool blue tones, quiet and cold (cel-shaded) | clear moonlight, moonlight |
| Night (Lamplight) | Warm yellow accents, light/dark contrast (cel-shaded) | fading lights, flickering candles |

### Time-of-Day Derivation Standards

| Derive from Base Time | Keep Unchanged | Change Items |
|---|---|---|
| Daytime → Dusk | Building/layout/materials | Warmer sky tones, elongated shadows (cel-shaded) |
| Daytime → Night | Building/layout/materials | Overall darkening, added lamplight/moonlight atmosphere (cel-shaded) |
| Indoor Daytime → Indoor Night | Spatial structure, furniture | Warmer overall tones, added candle/lantern elements (cel-shaded) |

---

## IV. Weather Variants

### Weather Definitions

| Weather | Visual Characteristics | Prompt |
|---|---|---|
| Sunny | Bright, clear shadows (cel-shaded) | clear skies, sunny |
| Overcast | Even light, no hard shadows (cel-shaded) | overcast soft light, overcast |
| Light Mist | Reduced visibility, hazy air (cel-shaded) | light mist, swirling fog |
| Light Rain | Water droplets, wet reflections, rain streaks (cel-shaded) | light rain, rain veil |
| Snowfall | White coverage, falling snowflakes (cel-shaded) | falling snow, silver dressing |

### Weather Derivation Standards

| Derive from Base Weather | Keep Unchanged | Change Items |
|---|---|---|
| Sunny → Light Mist | Building/layout | Added mist layer, blurred distant view, reduced saturation (cel-shaded) |
| Sunny → Light Rain | Building/layout | Added rain streaks, ground reflections, cooler tones (cel-shaded) |
| Sunny → Snowfall | Building/layout | Added snow accumulation, snowflakes, whiter tones (cel-shaded) |
| Vegetation must adapt to weather logic | — | Wet petals in rain, frosted dead branches in snow (cel-shaded) |

---

## V. Angle Variants

### Angle Definitions

> Derivative images relative to the reference image can be switched in the following angle dimensions. The caller will pass in the reference image + target angle description; this file only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front/Front View | Compared to the reference image, the line of sight faces the front of the scene | front view, eye level |
| Side (Left/Right) | 90° level view towards the left/right side of the scene | left side view / right side view |
| Back/Rear View | 180° towards the back of the scene | back view |
| High Angle | High-position overlooking, presenting overall layout | high angle, bird's eye view |
| Low Angle | Low-position looking up, emphasizing tall subjects | low angle, worm's eye view |
| Close-up Push-in | Same direction but camera pushes in, focusing on local area | push-in, closer angle |
| Free Angle | Any angle description defined by the caller | Inject according to `{target angle}` |

### Angle Derivation Standards

| Item | Constraint |
|---|---|
| Reference Consistency | Building structure/layout/materials/color tone/lighting/season/weather must be consistent with the reference image (cel-shaded processing) |
| Viewpoint | Same scene center point, only angle switching; line of sight height can be adjusted according to angle |
| Lighting Logic | Reference image light source direction remains unchanged; after angle switching, light and shadow projection direction must be recalculated synchronously (cel-shaded processing) |
| Layout | Single frame (not collage, not multi-view, not split screen) |
| People | **Strictly prohibited from appearing any people, human shadows, or human silhouettes** |
| Aspect Ratio | Default 16:9 (or as set by the caller) |

---

## VI. Prompt Template
```
3D animation render, cinematic lighting, vibrant cel-shaded texture, high-detail materials, pleasant healing atmosphere, cartoon urban style, high-detail cartoon materials, moderate cartoon proportions, warm-toned color palette, 8K ultra-high definition, cinematic composition, soft lighting layers, bright cartoon rendering style, warm and healing, derivative scene image, based on reference image,
anime style, cel-shaded, 3D animation render,
film lighting, warm sunset lighting,
scene derivative design sheet, environment concept art, no people, no characters, no human figures,
maintain consistent scene spatial structure,
{target angle (if any)}, {shot type perspective (if any)}, {time-of-day description (if any)}, {weather description (if any)},
{foreground}, {midground}, {background},
{color tone description}, {depth of field description (if any)}, {sky tone change (if any)}, {atmosphere adjustment (if any)},
{weather visual characteristics (if any)}, {material surface changes (if any)}, {vegetation adaptation description (if any)},
natural wear traces on materials, lived-in wear, natural fabric draping (cel-shaded),
natural light diffusion, volumetric light, cel-shaded light effects, cel-shaded shadows,
aerial perspective, clear textures, cel-shaded processing,
single frame composition, maintain building structure/materials/color tone/lighting consistent with reference image, only switch viewpoint according to target angle,
no people in the frame,
cel-shaded rendering style, soft lighting, moderate cartoon proportions, high-detail cartoon materials,
warm-toned color palette, dusk glow atmosphere, pleasant healing atmosphere,
8K ultra-high definition, cinematic composition,
no text in the image
```

> **Usage Instructions**: Based on the information provided by the user, independently determine which change dimensions (angle/shot type/time-of-day/weather) need to be applied. Leave fields for unmentioned dimensions blank/omitted. There is no need to generate a separate template for each variant.

---

## VII. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Scene spatial structure must remain consistent across all variants |
| R2 | Time-of-day variants must adjust sky tones and atmosphere (cel-shaded) |
| R3 | Weather variants must adapt vegetation/material surfaces (cel-shaded) |
| R4 | Derivative images must be "single frame", no multi-view/grid/split screen collages |
| R5 | Derivative images must maintain building structure/materials/color tone/lighting consistent with the reference image, only switching viewpoint according to the specified angle |
| R6 | **Strictly prohibited from appearing any people in scene images** |
| R7 | Independently determine change dimensions (angle/shot type/time-of-day/weather) based on user-provided information; leave unmentioned dimensions blank/omitted |
| R8 | Must include 3D animation rendering keywords (cel-shaded, 3D animation render, anime style) |
| R9 | Must include lens optical characteristics (shallow depth of field / lens vignette / bokeh at least one, cel-shaded processing) |
| R10 | Materials must have natural wear/age traces, prohibiting brand-new flawless "CG feel", but presented in cel-shaded style |
| R11 | Must maintain cel-shaded rendering style consistency, no mixing of realistic elements |
| R12 | Must include warm-toned color palette, dusk glow atmosphere keywords |
| R13 | Must include 8K ultra-high definition, cinematic composition keywords |
| R14 | Must include cinematic lighting, pleasant healing atmosphere keywords |

### Prohibited

| ID | Prohibited |
|---|---|
| X1 | Inconsistent building structure/layout between variants |
| X2 | Weather and season contradictions (e.g., snow in summer, within cel-shaded limits) |
| X3 | Sudden changes in materials/style between variants |
| X4 | Appearance of any people, human shadows, human silhouettes, or human outlines |
| X5 | Frame collaged into multi-view/grid/split screen layout |
| X6 | 3D render/CG animation/cartoon/game engine texture (prohibited words: 3D render, CGI, Unreal Engine, Unity, etc.), but must explicitly state cel-shaded animation rendering |
| X7 | Materials too clean/perfect, no wear traces or sense of age (avoid "plastic feel"), requires cel-shaded processing |
| X8 | Lighting too even/flat, no depth of field blur, no lens optical characteristics |
| X9 | Use of realistic photography terms (e.g., real photography, photorealistic, RAW photo, etc.) |
| X10 | Ancient/futuristic elements, non-modern urban style |
| X11 | Cool tones/night dominant tones, non-warm tones/dusk atmosphere |
| X12 | Lack of pleasant healing atmosphere keywords |