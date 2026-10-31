# Scene Derivative Asset Generation · Constraint Manual

---

## I. Derivation Principles

1. **Spatial Consistency** — Building structure/layout/materials remain consistent across all variants
2. **Shot Type Driven** — The same scene displays different narrative functions through different shot types
3. **Time-of-Day Switching** — The same space presents different lighting and atmosphere at different times of day
4. **Weather Variation** — The same space presents different moods under different weather conditions
5. **Live-Action as Anchor** — All variants must maintain a realistic photographic texture, rejecting 3D rendering/CG animation feel; preserve lens optical characteristics and physical lighting

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

### Shot Type Derivation Specifications

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
| Early Morning | Thin mist, soft light, mixed warm/cool tones | faint morning light, early morning mist |
| Noon | Bright, short shadows, vivid colors | noon sunlight, bright light |
| Dusk | Golden tones, long shadows, sky gradient | dusk golden glow, golden hour |
| Night (Moonlight) | Cool blue tones, quiet and cold | moonlight clear glow, moonlight |
| Night (Lamplight) | Warm yellow accents, light/dark contrast | lamplight dimming, candlelight dots |

### Time-of-Day Derivation Specifications

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
| Thin Mist | Reduced visibility, hazy air | thin mist, mist swirling |
| Light Rain | Water droplets, wet reflections, rain streaks | light rain, rain curtain |
| Snowfall | White coverage, falling snowflakes | snowfall, silver dressing |

### Weather Derivation Specifications

| Derive from Base Weather | Keep Unchanged | Change Items |
|---|---|---|
| Sunny → Thin Mist | Building/layout | Add mist layer, distant view blur, reduced saturation |
| Sunny → Light Rain | Building/layout | Add rain streaks, ground reflections, cooler tones |
| Sunny → Snowfall | Building/layout | Add snow accumulation, snowflakes, whiter tones |
| Vegetation must adapt to weather logic | — | Wet petals in rain, frost on bare branches in snow |

---

## V. Angle Variants

### Angle Definitions

> Derivative images relative to the reference image can be switched in the following angle dimensions. The caller will pass the reference image + target angle description; this file only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front/Front View | Compared to the reference image, line of sight faces the front of the scene | front view, eye level |
| Side (Left/Right) | 90° level view facing the left/right side of the scene | left side view / right side view |
| Back/Rear View | 180° facing the back of the scene | back view |
| High Angle | High position overlooking, showing overall layout | high angle, bird's eye view |
| Low Angle | Low position looking up, emphasizing tall subjects | low angle, worm's eye view |
| Close-up Push-in | Same direction but camera pushes in, focusing on local area | push-in, closer angle |
| Free Angle | Any angle description defined by the caller | Inject according to `{target angle}` |

### Angle Derivation Specifications

| Item | Constraint |
|---|---|
| Reference Consistency | Building structure/layout/materials/color tone/lighting/season/weather must be consistent with the reference image |
| Viewpoint | Same scene center point, only angle switching; line of sight height can be adjusted according to angle |
| Lighting Logic | Reference image light source direction remains unchanged; after angle switching, light and shadow projection direction must be recalculated synchronously (maintain physical plausibility) |
| Layout | Single frame (not collage, not multi-view, not split screen) |
| People | **Strictly prohibited from appearing any people, human shadows, or human silhouettes** |
| Aspect Ratio | Default 16:9 (or as set by the caller) |

---

## VI. Prompt Template

```
Ancient style derivative scene image, based on reference image,
real photography, photorealistic, shot on ARRI Alexa, 35mm film grain,
RAW photo, ultra realistic, hyper detailed,
shallow depth of field, natural lens vignette, subtle chromatic aberration, bokeh,
realistic photographic texture, film grain feel, natural lighting, physical light and shadow,
scene derivative design sheet, environment concept art, no people, no characters, no human figures,
maintain consistent scene spatial structure,
{target angle (if any)}, {shot type perspective (if any)}, {time of day description (if any)}, {weather description (if any)},
{foreground}, {midground}, {background},
{color tone description}, {depth of field description (if any)}, {sky tone change (if any)}, {atmosphere adjustment (if any)},
{weather visual characteristics (if any)}, {material surface changes (if any)}, {vegetation adaptation description (if any)},
natural wear marks on materials, aged patina, moss weathering, natural fabric draping,
natural light diffusion, volumetric light, Tyndall effect, caustic projection,
aerial perspective, ultra-clear texture details,
single frame composition, maintain building structure/materials/color tone/lighting consistent with reference image, only switch viewpoint according to target angle,
no people in the image
no text in the image
```

> **Usage Instructions**: Based on the information provided by the user, independently determine which change dimensions (angle/shot type/time of day/weather) need to be applied. Leave fields for unmentioned dimensions blank/omitted. No need to generate separate templates for each variant.

---

## VII. Constraint Rules

### Must Follow

| No. | Rule |
|---|---|
| R1 | Scene spatial structure remains consistent across all variants |
| R2 | Time-of-day variants must adjust sky tone and atmosphere |
| R3 | Weather variants must adapt vegetation/material surfaces |
| R4 | Derivative images must be "single frame", no multi-view/grid/split screen collages |
| R5 | Derivative images must maintain building structure/materials/color tone/lighting consistent with the reference image, only switching viewpoint according to the specified angle |
| R6 | **Strictly prohibited from appearing any people in scene images** |
| R7 | Independently determine change dimensions (angle/shot type/time of day/weather) based on user-provided information; leave unmentioned dimensions blank/omitted |
| R8 | Must include live-action photography keywords (real photography / photorealistic / RAW photo) |
| R9 | Must include lens optical characteristics (at least one of shallow depth of field / lens vignette / bokeh) |
| R10 | Materials must have natural wear/age marks; prohibit brand-new flawless "CG feel" |

### Strictly Prohibited

| No. | Prohibited |
|---|---|
| X1 | Inconsistent building structure/layout between variants |
| X2 | Weather and season contradictions (e.g., snowfall in summer) |
| X3 | Sudden changes in materials/style between variants |
| X4 | Appearance of any people, human shadows, human silhouettes, or human outlines |
| X5 | Image collaged into multi-view/grid/split screen layout |
| X6 | 3D rendering/CG animation/cartoon/game engine texture (prohibited words: 3D render, CGI, Unreal Engine, Unity, etc.) |
| X7 | Materials too clean/perfect, with no usage marks or sense of age (avoid "plastic feel") |
| X8 | Lighting too even/flat, no depth of field blur, no lens optical characteristics |