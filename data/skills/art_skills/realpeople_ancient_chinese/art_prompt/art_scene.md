# Scene Image Generation · Constraint Handbook

---

## I. Scene Aesthetic Principles

1. **Spatial Narrative** — Scenes carry emotional and narrative functions; they are not mere background boards.
2. **Layered Depth** — All scenes must have foreground/midground/background layers; flat compositions are prohibited.
3. **Texture Supremacy** — Material textures such as wood grain, stone, fabric, and water surfaces must be ultra-clear.
4. **Live-Action Anchor** — All visuals must meet live-action photography standards; 3D rendering/CG animation aesthetics are rejected. Pursue lens optical characteristics (depth-of-field blur, lens vignette, subtle chromatic aberration) and physical lighting (natural light diffusion, caustics, volumetric light).

---

## II. Seasonal Color Mapping

| Season | Primary Color | Secondary Color | Prompt |
|---|---|---|---|
| Spring | Emerald + Peach Pink | Moon White, Goose Yellow | Spring emerald, vibrant peach blossoms |
| Summer | Jade Green + Lotus Pink | Sky Blue, Lotus White | Summer lotus jade, dense shade blocking the sun |
| Autumn | Crimson + Golden Yellow | Amber, Dusk Grey | Autumn maple crimson, golden leaves drifting |
| Winter | Plain White + Frost Silver | Ink Jade Black, Ice Blue | Winter snow plain white, frost clinging to bare branches |

---

## III. Indoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Style | Ancient residences/palaces/studies/boudoirs, from Wei-Jin to Tang-Song | Ancient {dynasty} style |
| Material | Wood primary; stone/jade/silk/gauze secondary | Sandalwood furniture, jade screens, silk gauze drapes |
| Color Tone | Low-saturation warm wood tones + moon white gauze + celadon | Warm wood tones, elegant furnishings |
| Depth | Foreground/midground/background layers | Foreground {element}, midground {element}, background {element} |
| Texture | Wood grain/fabric drape/ceramic gloss must be discernible | Clear textures, realistic quality |
| Lighting | Natural light sources primary (window light/candlelight), soft diffused light, visible light beam particles, caustic projections | Natural light diffusion, flickering candlelight, light beams through windows, Tyndall effect |
| Lens Feel | Shallow depth of field blurring foreground/background, slight lens vignette, natural color temperature shift | shallow depth of field, lens vignette, natural color cast |
| Imperfection | Wood surfaces show usage marks, stone surfaces show weathering patterns, fabrics show natural folds | Traces of age, natural wear, natural fabric drapes |

### Indoor Type Quick Reference

| Type | Core Elements | Atmosphere Words |
|---|---|---|
| Boudoir/Bedroom | Gauze curtains, dressing table, bronze mirror, vase | Cozy and private, gauze drapes lightly hanging |
| Study/Library | Bookshelves, scrolls, ink and brushes, chessboard | Quiet and elegant, rich ink fragrance |
| Grand Hall/Main Hall | High pillars, plaques, curtains, candlesticks | Solemn and magnificent, grandeur |
| Courtyard Corridor | Corridor pillars, stone railings, flowers and trees, lanterns | Winding path to seclusion, flickering lantern shadows |
| Kitchen/Dining Hall | Stove, steamer baskets, tableware | Earthy atmosphere, cozy daily life |

---

## IV. Outdoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Type | Courtyard/mountain forest/stream bank/ancient bridge/market | {scene}, {season}, {time} |
| Weather | Sunny/overcast/thin mist/drizzle/snowfall | Thin mist pervasive, drizzle like silk |
| Vegetation | Plum/bamboo/pine/peach/willow/lotus (must match season) | Vibrant peach blossoms, lush bamboo forest |
| Water | Streams/lakes/waterfalls must have light and shadow reflections | Murmuring stream, lake surface like a mirror |
| Architecture | Flying eaves and bracket sets, blue tiles and white walls, stone bridges and wooden pavilions | Upturned eaves, stone arch bridge |
| Air Feel | Must have aerial perspective; distant areas appear grey and blue | Distant mountains like ink, aerial perspective |
| Lighting | Natural light is the only source; sunlight/moonlight must have volumetric light and scattering | Natural lighting, volumetric light, god rays, Tyndall effect |
| Lens Feel | Shallow depth of field blur, lens vignette, slight chromatic aberration, bokeh | shallow depth of field, bokeh, lens flare, vignette |
| Imperfection | Moss/weathering on stone, cracks/patina on wood, broken tiles/moss marks | Mottled moss, weathering traces, aged patina |

### Outdoor Type Quick Reference

| Type | Core Elements | Atmosphere Words |
|---|---|---|
| Courtyard Garden | Rockery, pond, flowers and trees, stone path | Dappled flower shadows, winding path to seclusion |
| Mountain Forest Bamboo Sea | Ancient trees, bamboo groves, mountain rocks, clouds and mist | Layered peaks, ethereal clouds and mist |
| Stream Bank Lake Shore | Stream, pebbles, weeping willows, lotus | Murmuring stream, swaying willow shadows |
| Ancient Bridge Long Pavilion | Stone arch bridge, long pavilion, willow trees | Long pavilion on the old road, willows swaying gently |
| Market Street | Wine flags, street vendors, lanterns | Bustling market, earthly atmosphere |
| Rooftop Terrace | Tiles, flying eaves, night sky | Drinking alone under the moon, gentle breeze |

---

## V. Main View Specifications

### View Definition

> Single-frame main view, shot from the most representative angle of the scene, carrying spatial narrative and compositional focus.

| Item | Constraint | Prompt |
|---|---|---|
| Perspective | Natural observation perspective; composition best reflects the scene subject and depth | hero shot, representative angle |
| Eye Level | Default eye-level height; special scenes may use high/low angles | eye level (default) |
| Composition | Subject centered or follows rule of thirds; clear foreground/midground/background layers | balanced composition |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Single frame (no collage, no multi-view, no split screen) |
| Characters | **Strictly prohibited: any characters, silhouettes, or human outlines** |
| Consistency | Unified style/material/color tone/lighting |
| Lighting | Single light source logic, consistent light and shadow direction |
| Aspect Ratio | Default 16:9 (or as set by the caller) |

---

## VI. Prompt Templates

```
Ancient style scene main view concept image,
real photography, photorealistic, shot on ARRI Alexa, 35mm film grain,
RAW photo, ultra realistic, hyper detailed,
shallow depth of field, natural lens vignette, subtle chromatic aberration, bokeh,
real photography texture, film grain, natural lighting, physical light and shadow,
scene design sheet, environment concept art, no people, no characters, no human figures,
{indoor/outdoor}, {scene type}, {dynasty style}, {season + time},
Foreground: {element}, Middle ground: {element}, Background: {element},
{color tone description}, {weather/atmosphere element},
{material description}, aerial perspective, ultra clear texture details,
natural wear marks on materials, aged patina, moss weathering, natural fabric draping folds,
natural light diffusion, volumetric light, Tyndall effect, caustic projection,
single frame composition, natural observation perspective, composition represents the scene subject and displays foreground/middle ground/background layers,
no people in the image
no text in the image
```

---

## VII. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The scene must have "foreground, midground, and background layers" |
| R2 | Outdoor scenes must include "aerial perspective" |
| R3 | The scene image must be a "single main view"; do not stitch multiple views/split screens/grids |
| R4 | The composition must represent the main subject of the scene and display foreground/midground/background layers |
| R5 | **No people of any kind are allowed in the scene image** |
| R6 | Must include live-action photography keywords (real photography / photorealistic / RAW photo) |
| R7 | Must include lens optical characteristics (at least one of: shallow depth of field / lens vignette / bokeh) |
| R8 | Materials must show natural wear/aging; pristine, flawless "CG look" is prohibited |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Pure white/pure black background/no scene |
| X2 | Extreme weather (storm/lightning/blizzard, unless required by the plot) |
| X3 | Scene lacks depth/layers |
| X4 | Vegetation/weather contradicts the season |
| X5 | Any people, human shadows, human silhouettes, or human outlines |
| X6 | Image stitched into multiple views/grid/split-screen layout |
| X7 | 3D render/CG animation/cartoon/game engine look (do not use terms like 3D render, CGI, Unreal Engine, Unity, etc.) |
| X8 | Materials are too clean/perfect, with no signs of use or aging (avoid "plastic look") |
| X9 | Lighting is too uniform/flat, no depth-of-field blur, no lens optical characteristics |


