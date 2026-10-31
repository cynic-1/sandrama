# Scene Derivative Asset Generation · Urban Realism Constraint Manual

---

## I. Derivation Principles

1. **Spatial Consistency** — Architectural structure, layout, and materials must remain consistent across all variants.
2. **Shot-Size Driven** — The same scene demonstrates different narrative functions through different shot sizes.
3. **Time-of-Day Switching** — The same space presents different lighting and atmosphere at different times of day.
4. **Weather Variation** — The same space presents different moods under different weather conditions.
5. **Live-Action Anchor** — All variants must maintain a realistic photographic texture, rejecting 3D rendering/CG animation aesthetics; preserve lens optical characteristics and physical lighting.

---

## II. Shot-Size Variants

### Shot-Size Definitions

| Shot Size | Scope | Narrative Function | Prompt |
|---|---|---|---|
| Extreme Wide | Full scene + surrounding environment | Establish spatial sense, location | extreme wide shot, extreme wide |
| Wide | Complete scene presentation | Show spatial structure | wide shot, wide |
| Medium | Local area of the scene | Focus on functional zones | medium shot, medium |
| Close | Scene details | Material/atmosphere prop close-up | close shot, close |
| Extreme Closeup | Extremely local details | Material texture/key props | extreme closeup, extreme closeup |

### Shot-Size Derivation Standards

| Derive from Base Image | Keep Unchanged | Allowed Changes |
|---|---|---|
| Extreme Wide → Wide | Building exterior, overall layout | Narrower perspective, added foreground |
| Wide → Medium | Materials, color tone, lighting | Cropped focus, depth-of-field change |
| Medium → Close | Materials, color tone | Shallow depth of field, background blur |
| Close → Extreme Closeup | Material texture | Extremely shallow depth of field, macro feel |

---

## III. Time-of-Day Variants

### Time-of-Day Definitions

| Time of Day | Visual Characteristics | Prompt |
|---|---|---|
| Early Morning | Thin mist, soft light, mixed warm/cool tones | faint morning light, early morning mist |
| Noon | Bright, short shadows, vivid colors | noon sunlight, bright light |
| Dusk | Golden tones, long shadows, sky gradient | dusk golden glow, golden hour |
| Night (Moonlight) | Cool blue tones, quiet and cold | moonlight glow, moonlight |
| Night (Lights) | Warm yellow accents, contrast between light and dark | fading lights, city night scene |

### Time-of-Day Derivation Standards

| Derive from Base Time | Keep Unchanged | Changes |
|---|---|---|
| Daytime → Dusk | Building/layout/materials | Warmer sky tones, elongated shadows |
| Daytime → Night | Building/layout/materials | Overall darkening, added lights/moonlight atmosphere |
| Indoor Daytime → Indoor Night | Spatial structure, furniture | Warmer overall tones, added table lamp/floor lamp elements |

---

## IV. Weather Variants

### Weather Definitions

| Weather | Visual Characteristics | Prompt |
|---|---|---|
| Sunny | Bright, clear shadows | clear skies, sunny |
| Overcast | Even light, no hard shadows | overcast soft light, overcast |
| Thin Mist | Reduced visibility, hazy air | thin mist, misty |
| Light Rain | Water droplets, wet reflections, rain streaks | light rain, rain curtain |
| Snowfall | White coverage, falling snowflakes | snowfall, snow-covered |

### Weather Derivation Standards

| Derive from Base Weather | Keep Unchanged | Changes |
|---|---|---|
| Sunny → Thin Mist | Building/layout | Added mist layer, blurred distant view, reduced saturation |
| Sunny → Light Rain | Building/layout | Added rain streaks, ground reflections, cooler tones |
| Sunny → Snowfall | Building/layout | Added snow accumulation, snowflakes, whiter tones |
| Vegetation must adapt to weather logic | — | Wet petals in rain, frost on bare branches in snow |

---

## V. Angle Variants

### Angle Definitions

> Derivative images, relative to the reference image, can switch along the following angle dimensions. The caller will pass the reference image + target angle description; this file only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front/Front View | Compared to the reference image, the line of sight faces the front of the scene | front view, eye level |
| Side (Left/Right) | 90° level view facing the left/right side of the scene | left side view / right side view |
| Back/Rear View | 180° facing the back of the scene | back view |
| High Angle | High-position overlook, showing overall layout | high angle, bird's eye view |
| Low Angle | Low-position upward view, emphasizing tall subjects | low angle, worm's eye view |
| Push-In | Same direction but camera pushes in, focusing on a local area | push-in, closer angle |
| Free Angle | Any custom angle description defined by the caller | Inject as `{target angle}` |

### Angle Derivation Standards

| Item | Constraint |
|---|---|
| Reference Consistency | Architectural structure/layout/materials/color tone/lighting/season/weather must be consistent with the reference image |
| Viewpoint | Same scene center point, only angle switching; eye height can be adjusted according to the angle |
| Lighting Logic | The light source direction in the reference image remains unchanged; after angle switching, the direction of light and shadow projection must be recalculated synchronously (maintaining physical plausibility) |
| Layout | Single frame (no collage, no multi-view, no split screen) |
| People | **Strictly prohibited from showing any people, human shadows, or human silhouettes** |
| Aspect Ratio | Default 16:9 (or as set by the caller) |

---

## VI. Prompt Templates

```
Modern urban derivative scene image, based on the reference image,
real photography, photorealistic, shot on ARRI Alexa, 35mm film grain,
RAW photo, ultra realistic, hyper detailed,
shallow depth of field, natural lens vignette, subtle chromatic aberration, bokeh,
real photography texture, film grain, natural lighting, physical light and shadow,
scene derivative design sheet, environment concept art, no people, no characters, no human figures,
maintain consistent scene spatial structure,
{target angle (if any)}, {shot type perspective (if any)}, {time of day description (if any)}, {weather description (if any)},
{foreground}, {midground}, {background},
{color tone description}, {depth of field description (if any)}, {sky color change (if any)}, {atmosphere adjustment (if any)},
{weather visual features (if any)}, {material surface changes (if any)}, {vegetation adaptation description (if any)},
natural material wear marks, usage traces, wall peeling, metal oxidation,
natural light diffusion, volumetric light, Tyndall effect, caustic projection,
aerial perspective, ultra-clear texture details,
single frame composition, maintain consistency with the reference image in building structure/material/color tone/lighting, only switch the viewpoint according to the target angle,
no people in the image
no text in the image
```


> **Usage Instructions**: Determine the applicable variation dimensions (angle/shot scale/time of day/weather) based on the information provided by the user. Leave fields for unmentioned dimensions blank and omit them. There is no need to generate separate templates for each variant.

---

## VII. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The spatial structure of the scene must remain consistent across all variants |
| R2 | Time-of-day variants must adjust the sky tone and atmosphere |
| R3 | Weather variants must adapt vegetation/material surfaces |
| R4 | Derived images must be a "single frame"; do not stitch together multiple views/grids/split screens |
| R5 | Derived images must maintain consistency with the reference image in terms of architectural structure/materials/color tone/lighting, switching the viewpoint only according to the specified angle |
| R6 | **No people of any kind are allowed** in scene images |
| R7 | Determine the variation dimensions (angle/shot scale/time of day/weather) based on the information provided by the user; leave unmentioned dimensions blank and omit them |
| R8 | Must include live-action photography keywords (real photography / photorealistic / RAW photo) |
| R9 | Must include lens optical characteristics (at least one of: shallow depth of field / lens vignette / bokeh) |
| R10 | Materials must show natural wear/usage traces; brand-new, flawless "CG look" is prohibited |

### Prohibited

| No. | Prohibited |
|---|---|
| X1 | Inconsistent architectural structure/layout between variants |
| X2 | Contradictions between weather and season (e.g., snow in summer) |
| X3 | Sudden changes in materials/style between variants |
| X4 | Appearance of any people, human shadows, human silhouettes, or human outlines |
| X5 | Frames stitched into multi-view/grid/split-screen layouts |
| X6 | 3D rendering/CG animation/cartoon/game engine aesthetics (do not use terms such as 3D render, CGI, Unreal Engine, Unity, etc.) |
| X7 | Materials that are too clean and perfect, with no usage traces or sense of age (avoid a "plastic look") |
| X8 | Lighting that is too uniform and flat, with no depth-of-field blur and no lens optical characteristics |