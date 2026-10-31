---
name: art_scene_derivative
description: Scene Derivative Asset Generation · Constraint Manual
metaData: art_skills
---

# Scene Derivative Asset Generation · Constraint Manual

---

## I. Derivation Principles

1. **Spatial Consistency** — Architectural structure, layout, and materials must remain consistent across all variants.
2. **Shot-Size Driven** — The same scene demonstrates different narrative functions through different shot sizes.
3. **Time-of-Day Switching** — The same space presents different lighting and atmosphere at different times of day.
4. **Weather Variation** — The same space conveys different moods under different weather conditions.
5. **3D as Anchor** — All variants must maintain a 3D rendering aesthetic; reject flat textures or CG animation feel. Retain volumetric lighting, ambient occlusion, and depth-of-field blur.

---

## II. Shot-Size Variants

### Shot-Size Definitions

| Shot Size | Scope | Narrative Function | Prompt |
|---|---|---|---|
| Extreme Wide Shot | Full scene + surrounding environment | Establish spatial sense, location | extreme wide shot, extreme wide shot |
| Wide Shot | Complete scene presentation | Display spatial structure | wide shot, wide shot |
| Medium Shot | Local area of the scene | Focus on functional zones | medium shot, medium shot |
| Close Shot | Scene details | Close-up of materials/atmospheric props | close shot, close shot |
| Extreme Closeup | Extremely local details | Material textures/key props | extreme closeup, extreme closeup |

### Shot-Size Derivation Standards

| Derive from Base Image | Keep Unchanged | Allowed Changes |
|---|---|---|
| Extreme Wide Shot → Wide Shot | Architectural appearance, overall layout | Narrower perspective, added foreground |
| Wide Shot → Medium Shot | Materials, color tone, lighting | Cropped focus, depth-of-field changes |
| Medium Shot → Close Shot | Materials, color tone | Shallow depth of field, background blur |
| Close Shot → Extreme Closeup | Material textures | Extremely shallow depth of field, macro feel |

---

## III. Time-of-Day Variants

### Time-of-Day Definitions

| Time of Day | Visual Characteristics | Prompt |
|---|---|---|
| Early Morning | Thin mist, soft light, mixed warm/cool tones | faint morning light, early morning mist |
| Noon | Bright, short shadows, vivid colors | noon sunlight, bright light |
| Dusk | Golden tones, long shadows, sky gradient | dusk golden glow, golden hour |
| Night (Moonlight) | Cool blue tones, quiet and cold | moonlight clear glow, moonlight |
| Night (Lanterns) | Warm yellow accents, light/dark contrast | lanterns dimming, candlelight dots |

### Time-of-Day Derivation Standards

| Derive from Base Time | Keep Unchanged | Changes |
|---|---|---|
| Daytime → Dusk | Architecture/layout/materials | Sky tone warms, shadows lengthen |
| Daytime → Night | Architecture/layout/materials | Overall darkening, add lantern/moonlight atmosphere |
| Indoor Daytime → Indoor Night | Spatial structure, furniture | Overall tone warms, add candle/lantern elements |

---

## IV. Weather Variants

### Weather Definitions

| Weather | Visual Characteristics | Prompt |
|---|---|---|
| Sunny | Bright, clear shadows | clear skies, sunny |
| Overcast | Even light, no hard shadows | overcast soft light, overcast |
| Light Mist | Reduced visibility, hazy air | light mist, swirling fog |
| Light Rain | Water droplets, wet reflections, rain streaks | light rain, rain veil |
| Snowfall | White coverage, falling snowflakes | snowfall, silver dressing |

### Weather Derivation Standards

| Derive from Base Weather | Keep Unchanged | Changes |
|---|---|---|
| Sunny → Light Mist | Architecture/layout | Add mist layer, blur distant view, lower saturation |
| Sunny → Light Rain | Architecture/layout | Add rain streaks, ground reflections, cooler tones |
| Sunny → Snowfall | Architecture/layout | Add snow accumulation, snowflakes, whiter tones |
| Vegetation must adapt to weather logic | — | Wet petals in rain, frost on bare branches in snow |

---

## V. Angle Variants

### Angle Definitions

> Derived images relative to the reference image can switch along the following angle dimensions. The caller will pass the reference image + target angle description; this file only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front/Front View | Line of sight facing the front of the scene compared to the reference image | front view, eye level |
| Side (Left/Right) | 90° level view facing the left/right side of the scene | left side view / right side view |
| Back/Back View | 180° facing the back of the scene | back view |
| High Angle | High-position overlooking, showing overall layout | high angle, bird's eye view |
| Low Angle | Low-position looking up, emphasizing tall subjects | low angle, worm's eye view |
| Push-in | Same direction but camera pushes in, focusing on local area | push-in, closer angle |
| Free Angle | Any angle description defined by the caller | Inject as `{target angle}` |

### Angle Derivation Standards

| Item | Constraint |
|---|---|
| Reference Consistency | Architectural structure/layout/materials/color tone/lighting/season/weather must be consistent with the reference image |
| Viewpoint | Same scene center point, only angle switching; eye height can be adjusted according to the angle |
| Lighting Logic | Light source direction from the reference image remains unchanged; after angle switching, light and shadow projection directions must be recalculated synchronously (maintain physical plausibility) |
| Layout | Single frame (no collage, no multi-view, no split screen) |
| Characters | **Strictly prohibited: any characters, shadows, or human silhouettes** |
| Aspect Ratio | Default 16:9 (or as set by the caller) |

---

## VI. Prompt Template

Ancient-style derivative scene image, based on reference image,
3D rendering style, high-precision modeling, PBR materials, Chinese-style 3D, cinematic lighting,
3D rendered, volumetric lighting,
depth of field, natural lens vignette, subtle chromatic aberration, bokeh,
3D rendering texture, volumetric light, natural lighting, physical light and shadow,
scene derivative design sheet, environment concept art, no people, no characters, no human figures,
maintain consistent scene spatial structure,
{target angle (if any)}, {shot size perspective (if any)}, {time of day description (if any)}, {weather description (if any)},
{foreground}, {midground}, {background},
{color tone description}, {depth of field description (if any)}, {sky tone change (if any)}, {atmosphere adjustment (if any)},
{weather visual characteristics (if any)}, {material surface changes (if any)}, {vegetation adaptation description (if any)},
natural wear marks on materials, aged patina, moss and weathering, natural fabric draping,
volumetric light, ambient occlusion, natural light diffusion, soft light and shadow,
aerial perspective, ultra-clear texture details,
single-frame composition, maintain architectural structure/materials/color tone/lighting consistency with reference image, only switch viewpoint according to target angle,
no characters in the frame
no text in the image

> **Usage Instructions**: Determine the required change dimensions (angle/shot size/time of day/weather) based on the information provided by the user. Leave fields for unmentioned dimensions blank/omitted. No need to generate separate templates for each variant.

---

## VII. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Scene spatial structure must remain consistent across all variants |
| R2 | Time-of-day variants must adjust sky tone and atmosphere |
| R3 | Weather variants must adapt vegetation/material surfaces |
| R4 | Derived images must be "single frame"; no multi-view/grid/split-screen collages |
| R5 | Derived images must maintain architectural structure/materials/color tone/lighting consistency with the reference image, only switching viewpoint according to the specified angle |
| R6 | **Strictly prohibited: any characters in scene images** |
| R7 | Determine change dimensions (angle/shot size/time of day/weather) based on user-provided information; leave unmentioned dimensions blank/omitted |
| R8 | Must include 3D rendering keywords (3D rendered / volumetric lighting / PBR materials) |
| R9 | Must include lens optical features (at least one of depth of field / lens vignette / bokeh) |
| R10 | Materials must have natural wear/age marks; prohibit pristine "CG feel" |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Inconsistent architectural structure/layout between variants |
| X2 | Contradiction between weather and season (e.g., snow in summer) |
| X3 | Sudden changes in materials/style between variants |
| X4 | Any characters, shadows, human silhouettes, or human outlines |
| X5 | Frame collaged into multi-view/grid/split-screen layout |
| X6 | Low-precision modeling/rough textures/plastic texture (prohibited words: low-poly, rough modeling, etc.) |
| X7 | Materials too clean/perfect, with no usage marks or sense of age (avoid "plastic feel") |
| X8 | Lighting too even/flat, no depth-of-field blur, no lens optical features |
