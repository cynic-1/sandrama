# Scene Derivative Asset Generation · Constraint Manual

---

## I. Derivation Principles

1. **Spatial Consistency** — Architectural structure, layout, and materials must remain consistent across all variants
2. **Shot-Type Driven** — The same scene demonstrates different narrative functions through different shot types
3. **Time-of-Day Switching** — The same space presents different lighting and atmosphere at different times of day
4. **Weather Variation** — The same space presents different moods under different weather conditions
5. **Cel-Shading as Anchor** — All variants must maintain a 2D anime style, preserving clear lines and cel-shaded coloring

---

## II. Shot-Type Variants

### Shot-Type Definitions

| Shot Type | Scope | Narrative Function | Prompt |
|---|---|---|---|
| Extreme Wide Shot | Full scene + surrounding environment | Establish spatial sense, location | `extreme wide shot`, extreme wide shot |
| Wide Shot | Complete scene presentation | Display spatial structure | `wide shot`, wide shot |
| Medium Shot | Local area of the scene | Focus on functional zones | `medium shot`, medium shot |
| Close Shot | Scene details | Material/atmospheric prop close-up | `close shot`, close shot |
| Extreme Closeup | Extremely local details | Material texture/key props | `extreme closeup`, extreme closeup |

### Shot-Type Derivation Standards

| Derive from Base Image | Keep Unchanged | Allowed Changes |
|---|---|---|
| Extreme Wide Shot → Wide Shot | Building exterior, overall layout | Narrower perspective, added foreground |
| Wide Shot → Medium Shot | Materials, color tone, lighting | Cropped focus, depth-of-field changes |
| Medium Shot → Close Shot | Materials, color tone | Shallow depth of field, background blur |
| Close Shot → Extreme Closeup | Material texture | Extremely shallow depth of field, macro feel |

---

## III. Time-of-Day Variants

### Time-of-Day Definitions

| Time of Day | Visual Characteristics | Prompt |
|---|---|---|
| Early Morning | Cool white tones, thin mist feel | Faint morning light, early morning mist |
| Noon | Bright, short shadows, vivid colors | Noon sunlight, bright light |
| Dusk | Golden tones, long shadows, sky gradient | Dusk golden glow, golden hour |
| Night (Moonlight) | Cool blue tones, quiet and cold | Clear moonlight, moonlight |
| Night (Lamplight) | Warm yellow accents, contrast between light and dark | Dim lamplight, lighting atmosphere |

### Time-of-Day Derivation Standards

| Derive from Base Time | Keep Unchanged | Changes |
|---|---|---|
| Daytime → Dusk | Building/layout/materials | Warmer sky tones, elongated shadows |
| Daytime → Night | Building/layout/materials | Overall darkening, added lamplight/moonlight atmosphere |
| Indoor Daytime → Indoor Night | Spatial structure, furniture | Warmer overall tones, added indoor lighting |

---

## IV. Weather Variants

### Weather Definitions

| Weather | Visual Characteristics | Prompt |
|---|---|---|
| Sunny | Bright, clear shadows | Clear skies, sunny |
| Overcast | Even light, no hard shadows | Overcast soft light, overcast |
| Thin Mist | Reduced visibility, hazy air | Thin mist, swirling fog |
| Light Rain | Water droplets, wet reflections, rain streaks | Fine rain, light rain curtain |
| Snowfall | White coverage, falling snowflakes | Falling snow, silver dressing |

### Weather Derivation Standards

| Derive from Base Weather | Keep Unchanged | Changes |
|---|---|---|
| Sunny → Thin Mist | Building/layout | Added mist layer, blurred distant view, reduced saturation |
| Sunny → Light Rain | Building/layout | Added rain streaks, ground reflections, cooler tones |
| Sunny → Snowfall | Building/layout | Added snow accumulation, snowflakes, whiter tones |
| Vegetation must adapt to weather logic | — | Wet petals in rain, frosted dead branches in snow |

---

## V. Angle Variants

### Angle Definitions

> Derivative images relative to the reference image can switch along the following angle dimensions. The caller will pass the reference image + target angle description; this file only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front/Front View | Compared to the reference image, the line of sight faces the front of the scene | `front view`, `eye level` |
| Side (Left/Right) | 90° level view facing the left/right side of the scene | `left side view` / `right side view` |
| Back/Rear View | 180° facing the back of the scene | `back view` |
| High Angle | High-position overhead view, showing overall layout | `high angle`, `bird's eye view` |
| Low Angle | Low-position upward view, emphasizing tall subjects | `low angle`, `worm's eye view` |
| Push-In | Same direction but camera pushes in, focusing on local area | `push-in`, `closer angle` |
| Free Angle | Any angle description customized by the caller | Injected as `{target angle}` |

### Angle Derivation Standards

| Item | Constraint |
|---|---|
| Reference Consistency | Architectural structure/layout/materials/color tone/lighting/season/weather must be consistent with the reference image |
| Viewpoint | Same scene center point, only angle switching; line-of-sight height can be adjusted according to the angle |
| Lighting Logic | The light source direction of the reference image remains unchanged; after angle switching, the direction of light and shadow projection must be recalculated synchronously (maintaining physical plausibility) |
| Layout | Single frame (no collage, no multi-view, no split screen) |
| Characters | **Strictly forbidden to include any people, human shadows, or human silhouettes** |
| Aspect Ratio | Default 16:9 (or as set by the caller) |

---

## VI. Prompt Template

2D derivative scene image, based on reference image,
anime style, cel shading, modern urban style,
cinematic composition, dramatic low-key lighting,
ultra detailed, 8K, high quality,
shallow depth of field, film grain, lens vignette,
cel-shaded animation style, cinematic composition, dramatic low-key lighting,
scene derivative design sheet, environment concept art, no people, no characters, no human figures,
maintain consistent scene spatial structure,
{target angle (if any)}, {shot type perspective (if any)}, {time-of-day description (if any)}, {weather description (if any)},
{foreground}, {midground}, {background},
{color tone description}, {depth of field description (if any)}, {sky tone change (if any)}, {atmosphere adjustment (if any)},
{weather visual characteristics (if any)}, {material surface changes (if any)}, {vegetation adaptation description (if any)},
modern usage traces on materials, lived-in feel, natural wear,
natural/artificial light, dramatic lighting, low-saturation cool tones,
aerial perspective, ultra-clear texture details,
single-frame composition, maintain consistent architectural structure/materials/color tone/lighting with reference image, only switch viewpoint according to target angle,
no people in the image
no text in the image

> **Usage Instructions**: Based on the information provided by the user, determine which change dimensions (angle/shot type/time of day/weather) need to be applied. Leave fields for unmentioned dimensions blank/omitted. No need to generate separate templates for each variant.

---

## VII. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Scene spatial structure must remain consistent across all variants |
| R2 | Time-of-day variants must adjust sky tone and atmosphere |
| R3 | Weather variants must adapt vegetation/material surfaces |
| R4 | Derivative images must be "single frame"; no multi-view/grid/split-screen collages |
| R5 | Derivative images must maintain consistent architectural structure/materials/color tone/lighting with the reference image, only switching viewpoint according to the specified angle |
| R6 | **Strictly forbidden to include any people in scene images** |
| R7 | Determine change dimensions (angle/shot type/time of day/weather) based on user-provided information; leave unmentioned dimensions blank/omitted |
| R8 | Must include "2D anime style" keywords (anime style / cel shading) |
| R9 | Must include depth-of-field characteristics (at least one of shallow depth of field / vignette), maintaining cel-shaded animation style |
| R10 | Materials must have modern usage traces/lived-in feel; brand-new, flawless "3D render feel" is prohibited |

### Forbidden

| ID | Forbidden |
|---|---|
| X1 | Inconsistent architectural structure/layout between variants |
| X2 | Contradiction between weather and season (e.g., snow in summer) |
| X3 | Sudden changes in materials/style between variants |
| X4 | Appearance of any people, human shadows, human silhouettes, or human outlines |
| X5 | Image collaged into multi-view/grid/split-screen layout |
| X6 | 3D render/CG animation/game engine texture (prohibited words: 3D render, CGI, Unreal Engine, Unity, etc.) |
| X7 | Materials too clean/perfect, with no usage traces or sense of age (avoid "plastic feel") |
| X8 | Lighting too even/flat, no depth-of-field blur, no lens optical characteristics |