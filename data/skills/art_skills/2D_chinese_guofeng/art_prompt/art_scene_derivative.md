---
name: art_scene_derivative
description: Scene Derivative Asset Generation · Constraint Manual
metaData: art_skills
---

# Scene Derivative Asset Generation · Constraint Manual

---

## I. Derivation Principles

1. **Spatial Consistency** — Architectural structure, layout, and materials must remain consistent across all variants
2. **Shot-Size Driven** — The same scene demonstrates different narrative functions through different shot sizes
3. **Time-of-Day Switching** — The same space presents different lighting and atmosphere at different times of day
4. **Weather Variation** — The same space presents different moods under different weather conditions
5. **Anime as Anchor** — All variants must maintain a Chinese-style anime aesthetic; reject 3D realism/CG animation feel; retain fine lines, cel shading, and Japanese rendering

---

## II. Shot-Size Variants

### Shot-Size Definitions

| Shot Size | Scope | Narrative Function | Prompt |
|---|---|---|---|
| Extreme Wide Shot | Full scene + surrounding environment | Establish spatial sense, location | extreme wide shot, extreme wide shot |
| Wide Shot | Complete scene presentation | Display spatial structure | wide shot, wide shot |
| Medium Shot | Local area of the scene | Focus on functional zones | medium shot, medium shot |
| Close Shot | Scene details | Material/atmospheric prop close-up | close shot, close shot |
| Extreme Closeup | Extremely local details | Material texture/key props | extreme closeup, extreme closeup |

### Shot-Size Derivation Standards

| Derived from Reference | Keep Unchanged | Allowed Changes |
|---|---|---|
| Extreme Wide Shot → Wide Shot | Architectural appearance, overall layout | Narrower perspective, added foreground |
| Wide Shot → Medium Shot | Materials, color tone, lighting | Cropping for focus, depth of field changes |
| Medium Shot → Close Shot | Materials, color tone | Shallow depth of field, background blur |
| Close Shot → Extreme Closeup | Material texture | Extremely shallow depth of field, macro feel |

---

## III. Time-of-Day Variants

### Time-of-Day Definitions

| Time of Day | Visual Characteristics | Prompt |
|---|---|---|
| Early Morning | Thin mist, soft light, mixed warm/cool tones | faint morning light, early morning mist |
| Noon | Bright, short shadows, vivid colors | noon sunlight, bright light |
| Dusk | Golden tones, long shadows, sky gradient | dusk golden glow, golden hour |
| Night (Moonlight) | Cool blue tones, quiet and cold | clear moonlight, moonlight |
| Night (Lanterns) | Warm yellow accents, contrast between light and dark | dim lanterns, scattered candlelight |

### Time-of-Day Derivation Standards

| Derived from Reference Time | Keep Unchanged | Change Items |
|---|---|---|
| Daytime → Dusk | Architecture/layout/materials | Warmer sky tones, elongated shadows |
| Daytime → Night | Architecture/layout/materials | Overall darkening, added lantern/moonlight atmosphere |
| Indoor Daytime → Indoor Night | Spatial structure, furniture | Warmer overall tones, added candle/lantern elements |

---

## IV. Weather Variants

### Weather Definitions

| Weather | Visual Characteristics | Prompt |
|---|---|---|
| Sunny | Bright, clear shadows | clear skies, sunny |
| Overcast | Even light, no hard shadows | overcast soft light, overcast |
| Thin Mist | Reduced visibility, hazy air | pervasive thin mist, swirling fog |
| Light Rain | Water droplets, wet reflections, rain streaks | fine rain, light rain curtain |
| Snowfall | White coverage, falling snowflakes | heavy snowfall, silver dressing |

### Weather Derivation Standards

| Derived from Reference Weather | Keep Unchanged | Change Items |
|---|---|---|
| Sunny → Thin Mist | Architecture/layout | Added mist layer, blurred distant view, reduced saturation |
| Sunny → Light Rain | Architecture/layout | Added rain streaks, ground reflections, cooler tones |
| Sunny → Snowfall | Architecture/layout | Added snow accumulation, snowflakes, whiter tones |
| Vegetation must adapt to weather logic | — | Wet petals in rain, frost on bare branches in snow |

---

## V. Angle Variants

### Angle Definitions

> Relative to the reference image, the derivative image can switch along the following angle dimensions. The caller will pass the reference image + target angle description; this file only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front/Front View | Compared to the reference image, the line of sight faces the front of the scene | front view, eye level |
| Side (Left/Right) | 90° level view facing the left/right side of the scene | left side view / right side view |
| Back/Rear View | 180° facing the back of the scene | back view |
| High Angle | High-position overview, presenting the overall layout | high angle, bird's eye view |
| Low Angle | Low-position upward view, emphasizing tall subjects | low angle, worm's eye view |
| Close-up Push-in | Same direction but camera pushes in, focusing on a local area | push-in, closer angle |
| Free Angle | Any angle description defined by the caller | Inject according to `{target angle}` |

### Angle Derivation Standards

| Item | Constraint |
|---|---|
| Reference Consistency | Architectural structure/layout/materials/color tone/lighting/season/weather must be consistent with the reference image |
| Viewpoint | Same scene center point, only angle switching; eye height can be adjusted according to the angle |
| Lighting Logic | The light source direction in the reference image remains unchanged; after angle switching, the direction of light and shadow projection must be recalculated synchronously (maintain physical plausibility) |
| Layout | Single frame (no collage, no multi-view, no split-screen) |
| Characters | **Strictly prohibited from appearing any characters, human shadows, or human silhouettes** |
| Aspect Ratio | Default 16:9 (or as set by the caller) |

---

## VI. Prompt Template

Chinese-style anime derivative scene image, based on the reference image,
Chinese-style anime, New Chinese Chic aesthetics, Japanese anime rendering, cel shading, fine brushstrokes,
Japanese anime style, cel shading, fine brushstrokes,
Maintain consistent scene spatial structure,
{Target angle (if any)}, {Shot-size perspective (if any)}, {Time-of-day description (if any)}, {Weather description (if any)},
{Foreground}, {Midground}, {Background},
{Color tone description}, {Depth of field description (if any)}, {Sky tone change (if any)}, {Atmosphere adjustment (if any)},
{Weather visual characteristics (if any)}, {Material surface changes (if any)}, {Vegetation adaptation description (if any)},
Natural wear marks on materials, aged patina, natural fabric draping,
Soft light and shadow, Japanese rendering, natural light diffusion, delicate texture,
High-resolution Chinese-style anime rendering, high detail, fine lines, cel shading feel,
Single-frame composition, maintain architectural structure/materials/color tone/lighting consistency with the reference image, only switch viewpoint according to the target angle,
No characters in the image
No text in the image

> **Usage Instructions**: Determine the change dimensions (angle/shot-size/time-of-day/weather) to be applied based on the information provided by the user. Leave fields for unmentioned dimensions blank/omitted. There is no need to generate separate templates for each variant.

---

## VII. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Scene spatial structure must remain consistent across all variants |
| R2 | Time-of-day variants must adjust sky tones and atmosphere |
| R3 | Weather variants must adapt vegetation/material surfaces |
| R4 | Derivative images must be "single-frame"; no multi-view/grid/split-screen collages allowed |
| R5 | Derivative images must maintain architectural structure/materials/color tone/lighting consistency with the reference image, only switching viewpoint according to the specified angle |
| R6 | **Strictly prohibited from appearing any characters in scene images** |
| R7 | Determine change dimensions (angle/shot-size/time-of-day/weather) based on user-provided information; leave unmentioned dimensions blank/omitted |
| R8 | Must include Chinese-style anime keywords (Chinese style anime / cel shading / fine brushstrokes) |
| R9 | Must include lens optical characteristics (cel shading / fine lines / Japanese rendering) |
| R10 | Materials must have natural wear/age marks; prohibit brand-new, flawless "CG feel" |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Inconsistent architectural structure/layout between variants |
| X2 | Contradiction between weather and season (e.g., snow in summer) |
| X3 | Sudden changes in materials/style between variants |
| X4 | Appearance of any characters, human shadows, human silhouettes, or human outlines |
| X5 | Image collaged into multi-view/grid/split-screen layout |
| X6 | 3D realism/CG animation/cartoon/game engine texture (prohibited words: 3D render, CGI, Unreal Engine, Unity, etc.) |
| X7 | Materials too clean/perfect, with no usage marks or sense of age (avoid "plastic feel") |
| X8 | Lighting too even/flat, no depth of field blur, no lens optical characteristics |
