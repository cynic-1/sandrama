# Scene Derivative Asset Generation · Flat Style Constraint Manual

---

## I. Derivation Principles

1. **Spatial Consistency** — Building structure/layout/materials remain consistent across all variants
2. **Shot Type Driven** — The same scene displays different narrative functions through different shot types
3. **Time-of-Day Switching** — The same space presents different color blocks at different times of day
4. **Weather Variation** — The same space presents different color atmospheres under different weather conditions
5. **Flat as Anchor** — All variants must maintain a flat vector illustration texture, rejecting 3D rendering/CG animation feel; maintain simple lines and solid color fills

---

## II. Shot Type Variants

### Shot Type Definitions

| Shot Type | Scope | Narrative Function | Prompt |
|---|---|---|---|
| Extreme Wide | Full scene + surrounding environment | Establish spatial sense, location | extreme wide shot, extreme wide, flat extreme wide |
| Wide | Complete scene presentation | Display spatial structure | wide shot, wide, flat wide |
| Medium | Local area of the scene | Focus on functional areas | medium shot, medium, flat medium |
| Close | Scene details | Close-up of color blocks/atmospheric props | close shot, close, flat close |
| Extreme Close-up | Extremely local details | Color block textures/key props | extreme closeup, extreme close, flat extreme close |

### Shot Type Derivation Standards

| Derive from Base Image | Keep Unchanged | Allowed Changes |
|---|---|---|
| Extreme Wide → Wide | Building exterior, overall layout | Narrower perspective, added foreground color blocks |
| Wide → Medium | Materials, tones, lighting | Cropped focus, solid color changes |
| Medium → Close | Materials, tones | Solid color focus, background color blocks |
| Close → Extreme Close-up | Color block textures | Solid color focus, macro color blocks |

---

## III. Time-of-Day Variants

### Time-of-Day Definitions

| Time of Day | Visual Features | Prompt |
|---|---|---|
| Early Morning | Flat tones, light color blocks | flat early morning, light morning colors |
| Noon | Flat bright, solid color blocks | flat noon, solid bright |
| Dusk | Flat gold, warm color blocks | flat dusk, warm golden glow |
| Night (Moonlight) | Flat cool blue, dark color blocks | flat moonlight, cool blue moonlight |
| Night (Lamplight) | Flat warm yellow, dark background | flat lamplight, warm yellow dark background |

### Time-of-Day Derivation Standards

| Derive from Base Time | Keep Unchanged | Changes |
|---|---|---|
| Daytime → Dusk | Building/layout/materials | Warmer sky color blocks, shadow color blocks |
| Daytime → Night | Building/layout/materials | Overall color blocks darken, added lamplight/moonlight color blocks |
| Indoor Daytime → Indoor Night | Spatial structure, furniture | Overall color blocks warm up, added candlelight/lantern color blocks |

---

## IV. Weather Variants

### Weather Definitions

| Weather | Visual Features | Prompt |
|---|---|---|
| Sunny | Flat bright, solid color blocks | flat sunny, solid sunny day |
| Overcast | Flat even, gray color blocks | flat overcast, gray soft light |
| Light Mist | Flat hazy, low saturation color blocks | flat light mist, hazy color blocks |
| Light Rain | Flat rain streaks, moist color blocks | flat light rain, moist color blocks |
| Snowfall | Flat white, covering color blocks | flat snowfall, white covering |

### Weather Derivation Standards

| Derive from Base Weather | Keep Unchanged | Changes |
|---|---|---|
| Sunny → Light Mist | Building/layout | Added flat mist layer, blurred distant color blocks, reduced saturation |
| Sunny → Light Rain | Building/layout | Added flat rain streaks, ground color blocks, cooler tones |
| Sunny → Snowfall | Building/layout | Added flat snow accumulation, snowflake color blocks, whiter tones |
| Vegetation must adapt to weather logic | — | Flat rain colors, flat snow colors |

---

## V. Angle Variants

### Angle Definitions

> Derivative images relative to the reference image can be switched in the following angle dimensions. The caller will pass the reference image + target angle description; this file only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front/Front View | Compared to the reference image, the line of sight faces the front of the scene | front view, eye level |
| Side (Left/Right) | 90° level view facing the left/right side of the scene | left side view / right side view |
| Back/Back View | 180° facing the back of the scene | back view |
| High Angle | High position looking down, presenting overall layout | high angle, bird's eye view |
| Low Angle | Low position looking up, emphasizing tall subjects | low angle, worm's eye view |
| Close Push-in | Same direction but camera pushes in, focusing on local area | push-in, closer angle |
| Free Angle | Any angle description defined by the caller | Inject according to `{target angle}` |

### Angle Derivation Standards

| Item | Constraint |
|---|---|
| Reference Consistency | Building structure/layout/materials/tones/season/weather must be consistent with the reference image |
| Viewpoint | Same scene center point, only angle switching; line of sight height can be adjusted according to the angle |
| Lighting Logic | Maintain flat without light/shadow logic, consistent with the reference image |
| Layout | Single frame (not collage, not multi-view, not split screen) |
| People | **Strictly prohibited from appearing any people, human shadows, or human body outlines** |
| Aspect Ratio | Default 1:1 (or as set by the caller) |

---

## VI. Prompt Template

```
Flat ancient-style derivative scene image, based on reference image,
2d flat design, vector art, flat illustration,
minimalist, clean lines, solid colors,
flat scene derivative, environment concept art, no people, no characters, no human figures,
maintain consistent scene spatial structure,
{target angle (if any)}, {shot type perspective (if any)}, {time of day description (if any)}, {weather description (if any)},
{foreground color blocks}, {midground color blocks}, {background color blocks},
{tone description}, {color block changes (if any)}, {sky color block changes (if any)}, {atmosphere adjustments (if any)},
{weather visual features (if any)}, {material color block changes (if any)}, {vegetation adaptation description (if any)},
no signs of age, no wear, flat perfection,
no lighting, no shadows, solid flat fill,
no perspective, solid color fill,
single frame composition, maintain building structure/materials/tones consistent with reference image, only switch viewpoint according to target angle,
no people in the image
no text in the image
```

> **Usage Instructions**: Based on the information provided by the user, independently determine which change dimensions (angle/shot type/time of day/weather) need to be applied. Fields for unmentioned dimensions should be left blank/omitted. There is no need to generate a separate template for each variant.

---

## VII. Constraint Rules

### Must Follow

| ID | Rule |
|---|---|
| R1 | Scene spatial structure remains consistent across all variants |
| R2 | Time-of-day variants must adjust color block tones and atmosphere |
| R3 | Weather variants must adapt color blocks/material surfaces |
| R4 | Derivative images must be "single frame", no collage of multi-view/grid/split screen |
| R5 | Derivative images must maintain building structure/materials/tones consistent with the reference image, only switching viewpoint according to the specified angle |
| R6 | **Strictly prohibited from appearing any people in scene images** |
| R7 | Independently determine change dimensions (angle/shot type/time of day/weather) based on user-provided information; leave unmentioned dimensions blank/omitted |
| R8 | Must specify "flat style" keywords (2d flat design, vector art) |
| R9 | Must specify "no light/shadow no gradient" |
| R10 | Materials must be solid color fill, complex textures/aged feel prohibited |

### Strictly Prohibited

| ID | Prohibited |
|---|---|
| X1 | Inconsistent building structure/layout between variants |
| X2 | Weather and season contradictions (e.g., snowfall in summer) |
| X3 | Sudden changes in materials/style between variants |
| X4 | Appearance of any people, human shadows, human silhouettes, or human body outlines |
| X5 | Image collaged into multi-view/grid/split screen layout |
| X6 | 3D rendering/CG animation/cartoon/game engine texture (prohibited words: 3D render, CGI, Unreal Engine, Unity, etc.) |
| X7 | Materials too complex, color block distinctions unclear |
| X8 | Adding light/shadow/gradient/3D effects |