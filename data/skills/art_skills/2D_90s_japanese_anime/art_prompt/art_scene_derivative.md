# 90s Retro Japanese Animation Style - Scene Derivative Asset Generation · Constraint Manual

---

## I. Derivation Principles

1. **Spatial Consistency** — Architectural structure, layout, and materials must remain consistent across all variants
2. **Shot-Size Driven** — The same scene demonstrates different narrative functions through different shot sizes
3. **Time-of-Day Switching** — The same space presents different lighting and atmosphere at different times of day
4. **Weather Variation** — The same space presents different moods under different weather conditions
5. **90s as Anchor** — All variants must maintain the 90s retro style; modern CG/3D rendering is rejected

---

## II. Shot-Size Variants

### Shot-Size Definitions

| Shot Size | Scope | Narrative Function | Prompt |
|---|---|---|---|
| Extreme Wide Shot | Full scene + surrounding environment | Establish spatial sense, location | extreme wide shot |
| Wide Shot | Complete scene presentation | Display spatial structure | wide shot |
| Medium Shot | Partial area of the scene | Focus on functional zones | medium shot |
| Close Shot | Scene details | Material/atmospheric prop close-up | close shot |
| Extreme Closeup | Extremely local details | Material texture/key props | extreme closeup |

### Shot-Size Derivation Standards

| Derived from Base Image | Unchanged | Allowed Changes |
|---|---|---|
| Extreme Wide → Wide | Building exterior, overall layout | Narrower perspective, added foreground |
| Wide → Medium | Materials, color tone, lighting | Cropped focus, depth-of-field changes |
| Medium → Close | Materials, color tone | Shallow depth of field, blurred background |
| Close → Extreme Closeup | Material texture | Extremely shallow depth of field, macro feel |

---

## III. Time-of-Day Variants

### Time-of-Day Definitions

| Time of Day | Visual Characteristics | Prompt |
|---|---|---|
| Early Morning | Thin mist, soft light, cool tones | morning light, early morning mist |
| Noon | Bright, short shadows, vivid colors | noon sunlight, bright light |
| Dusk | Golden tones, long shadows, sky gradient | dusk, golden hour |
| Night (Moonlight) | Cool blue tones, quiet and cold | moonlight, moonlit night |
| Night (Lanterns) | Warm yellow accents, contrast between light and dark | night, lanterns |

### Time-of-Day Derivation Standards

| Derived from Base Time | Unchanged | Changes |
|---|---|---|
| Daytime → Dusk | Building/layout/materials | Warmer sky tones, elongated shadows |
| Daytime → Night | Building/layout/materials | Overall darkening, added lanterns/moonlight |
| Indoor Daytime → Indoor Night | Spatial structure, furniture | Warmer overall tones, added light sources |

---

## IV. Weather Variants

### Weather Definitions

| Weather | Visual Characteristics | Prompt |
|---|---|---|
| Sunny | Bright, clear shadows | sunny, bright sunshine |
| Overcast | Even light, no hard shadows | overcast, soft light |
| Light Mist | Reduced visibility, hazy air | light mist, misty |
| Light Rain | Water droplets, wet reflections | light rain, rain streaks |
| Snowfall | White coverage, falling snowflakes | snowfall, snowflakes |

### Weather Derivation Standards

| Derived from Base Weather | Unchanged | Changes |
|---|---|---|
| Sunny → Light Mist | Building/layout | Added mist layer, blurred distant view |
| Sunny → Light Rain | Building/layout | Added rain streaks, ground reflections |
| Sunny → Snowfall | Building/layout | Added snow accumulation, snowflakes |
| Vegetation must adapt logically to weather | — | Plants wet in rain, plants frosted in snow |

---

## V. Angle Variants

### Angle Definitions

> Derived images, relative to the reference image, can be switched along the following angle dimensions. The caller will pass in the reference image + target angle description; this file only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front/Frontal View | Compared to the reference image, the line of sight faces the front of the scene | front view, eye level |
| Side (Left/Right) | 90° level view toward the left/right side of the scene | left side view / right side view |
| Back/Rear View | 180° toward the back of the scene | back view |
| High Angle | High-position overlook, presenting overall layout | high angle, bird's eye view |
| Low Angle | Low-position upward view, emphasizing tall subjects | low angle, worm's eye view |
| Push-in | Same direction but camera pushes in, focusing on a local area | push-in, closer angle |
| Free Angle | Any custom angle description defined by the caller | Inject according to `{target angle}` |

### Angle Derivation Standards

| Item | Constraint |
|---|---|
| Reference Consistency | Architectural structure/layout/materials/color tone/lighting/season/weather must be consistent with the reference image |
| Viewpoint | Same scene center point, only angle switching; line-of-sight height can be adjusted according to the angle |
| Lighting Logic | The light source direction in the reference image remains unchanged; after angle switching, the direction of light and shadow projection must be recalculated synchronously (maintaining physical plausibility) |
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| Characters | **Strictly prohibited from appearing: any characters, human silhouettes, or human body outlines** |
| Aspect Ratio | Default 16:9 (or as set by the caller) |

---

## VI. Prompt Templates
```
90s retro Japanese anime style derivative scene image, based on the reference image,
90s anime style, hand-drawn flat coloring, soft warm tones, fine and smooth lines, cinematic lighting,
scene derivative design sheet, environment concept art, no people, no characters, no human figures,
maintain consistent scene spatial structure,
{target angle (if any)}, {shot type perspective (if any)}, {time of day description (if any)}, {weather description (if any)},
{foreground}, {midground}, {background},
{color tone description}, {depth of field description (if any)}, {sky color change (if any)}, {atmosphere adjustment (if any)},
{weather visual features (if any)}, {material surface changes (if any)}, {vegetation adaptation description (if any)},
smooth lines, block shadows, signs of wear,
soft cinematic light, background glow, natural lighting,
single frame composition, maintain consistency with the reference image in building structure/material/color tone/lighting, only switch the viewpoint according to the target angle,
no people in the image
no text in the image
```

> **Usage Instructions**: Determine the applicable variation dimensions (angle/shot size/time of day/weather) based on the information provided by the user. Leave fields for unmentioned dimensions blank and omit them. There is no need to generate separate templates for each variant.

---

## VII. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The spatial structure of the scene must remain consistent across all variants |
| R2 | Time-of-day variants must adjust the sky tone and atmosphere |
| R3 | Weather variants must adapt vegetation/material surfaces |
| R4 | Derived images must be a "single frame"; do not stitch together multiple views/grids/split screens |
| R5 | Derived images must maintain consistency with the reference image in terms of architectural structure/materials/color tone/lighting, switching the viewpoint only according to the specified angle |
| R6 | **No characters of any kind are allowed** in scene images |
| R7 | Determine the variation dimensions (angle/shot size/time of day/weather) based on the information provided by the user; leave unmentioned dimensions blank and omit them |
| R8 | Must include 1990s keywords (90s anime style / hand-drawn / warm tone) |
| R9 | Must include line characteristics (at least one of: smooth lines, block shading) |
| R10 | Materials must show signs of use; a pristine, flawless "CG look" is prohibited |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Inconsistent architectural structure/layout between variants |
| X2 | Contradictions between weather and season |
| X3 | Sudden changes in materials/style between variants |
| X4 | Appearance of any characters, human figures, or human silhouettes |
| X5 | Frames stitched into multi-view/grid/split-screen layouts |
| X6 | 3D rendering/CG animation/modern-style textures |
| X7 | Materials that are too clean and perfect, with no signs of use |
| X8 | Lighting that is too uniform and flat, lacking soft cinematic light |