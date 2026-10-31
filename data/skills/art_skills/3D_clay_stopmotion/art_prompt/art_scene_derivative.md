# Claymation Stop-Motion Scene Derivative Asset Generation · Constraint Manual

---

## I. Derivation Principles

1. **Spatial Consistency** — Building structure/layout/materials remain consistent across all variants
2. **Shot Scale Driven** — The same scene displays different narrative functions through different shot scales
3. **Time-of-Day Switching** — The same space presents different warm-toned lighting and atmosphere at different times of day
4. **Weather Variation** — The same space presents different moods under different weather conditions
5. **Stop-Motion as Anchor** — All variants must maintain the claymation stop-motion style

---

## II. Shot Scale Variants

### Shot Scale Definitions

| Shot Scale | Scope | Narrative Function | Prompt |
|---|---|---|---|
| Extreme Wide Shot | Full scene + surrounding environment | Establish spatial sense, location | extreme wide shot, extreme wide shot |
| Wide Shot | Complete scene presentation | Display spatial structure | wide shot, wide shot |
| Medium Shot | Local area of the scene | Focus on functional areas | medium shot, medium shot |
| Close Shot | Scene details | Material/atmosphere prop close-up | close shot, close shot |
| Extreme Closeup | Extremely local details | Material texture/key props | extreme closeup, extreme closeup |

### Shot Scale Derivation Standards

| Derive from Base Image | Keep Unchanged | Allowed Changes |
|---|---|---|
| Extreme Wide Shot → Wide Shot | Building exterior, overall layout | Narrower perspective, added foreground |
| Wide Shot → Medium Shot | Materials, color tone, lighting | Cropped focus, depth of field changes |
| Medium Shot → Close Shot | Materials, color tone | Shallow depth of field, background blur |
| Close Shot → Extreme Closeup | Material texture | Extremely shallow depth of field, macro feel |

---

## III. Time-of-Day Variants

### Time-of-Day Definitions

| Time of Day | Visual Characteristics | Prompt |
|---|---|---|
| Early Morning | Warm-toned soft light, warm gold color tone | faint morning light, early morning warm tone |
| Noon | Bright, short shadows, vivid colors | noon sunlight, bright light |
| Dusk | Warm gold tone, long shadows, sky gradient | dusk warm gold, golden hour |
| Night (Moonlight) | Cold blue tone, quiet and cool | moonlight clear glow, moonlight |
| Night (Lamplight) | Warm yellow accents, light-dark contrast | lamplight dimming, candlelight dots |

### Time-of-Day Derivation Standards

| Derive from Base Time | Keep Unchanged | Change Items |
|---|---|---|
| Daytime → Dusk | Building/layout/materials | Sky tone warms, shadows lengthen |
| Daytime → Night | Building/layout/materials | Overall darkening, add lamplight/moonlight atmosphere |
| Indoor Daytime → Indoor Night | Spatial structure, furniture | Overall tone warms, add candle/lantern elements |

---

## IV. Weather Variants

### Weather Definitions

| Weather | Visual Characteristics | Prompt |
|---|---|---|
| Sunny | Bright, clear shadows | clear skies, sunny |
| Overcast | Even light, no hard shadows | overcast soft light, overcast |
| Light Fog | Reduced visibility, hazy air | light fog, misty |
| Light Rain | Water droplets, wet reflections, rain streaks | light rain, rain curtain |
| Snowfall | White coverage, falling snowflakes | snowfall, snow-covered |

### Weather Derivation Standards

| Derive from Base Weather | Keep Unchanged | Change Items |
|---|---|---|
| Sunny → Light Fog | Building/layout | Add fog layer, blur distant view, reduce saturation |
| Sunny → Light Rain | Building/layout | Add rain streaks, ground reflections, cooler tone |
| Sunny → Snowfall | Building/layout | Add snow accumulation, snowflakes, whiter tone |
| Vegetation must adapt to weather logic | — | Wet petals in rain, frost on bare branches in snow |

---

## V. Angle Variants

### Angle Definitions

> Derivative images relative to the reference image can be switched in the following angle dimensions. The caller will pass the reference image + target angle description; this file only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front/Front View | Compared to the reference image, the line of sight faces the front of the scene | front view, eye level |
| Side (Left/Right) | 90° level view facing the left/right side of the scene | left side view / right side view |
| Back/Rear View | 180° facing the back of the scene | back view |
| High Angle | High-position overhead view, showing overall layout | high angle, bird's eye view |
| Low Angle | Low-position upward view, emphasizing tall subjects | low angle, worm's eye view |
| Close-up Push-in | Same direction but camera pushes in, focusing on local area | push-in, closer angle |
| Free Angle | Any angle description customized by the caller | Inject according to `{target angle}` |

### Angle Derivation Standards

| Item | Constraint |
|---|---|
| Reference Consistency | Building structure/layout/materials/color tone/lighting/season/weather must be consistent with the reference image |
| Viewpoint | Same scene center point, only angle switching; line of sight height can be adjusted according to the angle |
| Lighting Logic | The light source direction of the reference image remains unchanged; after angle switching, the direction of light and shadow projection must be recalculated synchronously (maintain warm-toned soft light) |
| Layout | Single frame (not collage, not multi-view, not split screen) |
| Characters | **Strictly prohibited from appearing any characters, human shadows, or human silhouettes** |
| Aspect Ratio | Default 16:9 (or as set by the caller) |

---

## VI. Prompt Template

```
Claymation stop-motion derivative scene image, based on reference image, stop-motion style, 3D cartoon rendering, warm-toned lighting, soft shallow depth of field,
claymation style, stop-motion aesthetic, warm lighting, shallow depth of field, bokeh,
scene derivative design sheet, environment concept art, no people, no characters, no human figures,
maintain consistent scene spatial structure,
{target angle (if any)}, {shot scale perspective (if any)}, {time-of-day description (if any)}, {weather description (if any)},
{foreground}, {midground}, {background},
{color tone description}, {depth of field description (if any)}, {sky tone change (if any)}, {atmosphere adjustment (if any)},
{weather visual characteristics (if any)}, {material surface changes (if any)}, {vegetation adaptation description (if any)},
natural wear marks on materials, aged patina, moss weathering, natural fabric draping folds,
warm-toned soft light diffusion, volumetric light, warm-toned light spots, shallow depth of field blur,
aerial perspective, ultra-clear texture details,
single frame composition, maintain building structure/materials/color tone/lighting consistent with reference image, only switch viewpoint according to target angle,
no characters in the image
no text in the image
```

---

## VII. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Scene spatial structure must remain consistent across all variants |
| R2 | Time-of-day variants must adjust sky tone and atmosphere |
| R3 | Weather variants must adapt vegetation/material surfaces |
| R4 | Derivative images must be "single frame"; no multi-view/grid/split screen collages allowed |
| R5 | Derivative images must maintain building structure/materials/color tone/lighting consistent with the reference image, only switching viewpoint according to the specified angle |
| R6 | **Strictly prohibited from appearing any characters in scene images** |
| R7 | Determine the dimension of change (angle/shot scale/time-of-day/weather) based on information provided by the user; leave unmentioned dimensions blank/omitted |
| R8 | Must include stop-motion keywords (claymation / stop-motion) |
| R9 | Must include shallow depth of field keywords (shallow depth of field / bokeh) |
| R10 | Must specify "warm-toned soft light" |
| R11 | Materials must have natural wear/age marks |

### Prohibited

| No. | Prohibited |
|---|---|
| X1 | Inconsistent building structure/layout between variants |
| X2 | Contradiction between weather and season |
| X3 | Sudden changes in materials/style between variants |
| X4 | Appearance of any characters, human shadows, or human silhouettes |
| X5 | Image collaged into multi-view/grid/split screen layout |
| X6 | Realistic photography/3D rendering/CG animation texture |
| X7 | Materials too clean/perfect, with no signs of use |
| X8 | Cold hard light/strong contrast/hard shadows |