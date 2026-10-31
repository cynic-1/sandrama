# Claymation Stop-Motion Scene Image Generation · Constraint Manual

---

## I. Scene Aesthetic Principles

1. **Spatial Narrative** — The scene carries emotional and narrative functions
2. **Layered Depth** — All scenes must have foreground/midground/background layers; flatness is prohibited
3. **Clay Texture Supremacy** — Material textures must be clearly distinguishable (wood/stone/fabric/water surface)
4. **Stop-Motion as Anchor** — All images must adhere to the claymation stop-motion style standard; realistic live-action is rejected; pursue stop-motion photography characteristics (depth-of-field blur, lens flares, stop-motion grain) and warm-toned lighting

---

## II. Seasonal Color Mapping

| Season | Primary Color | Secondary Color | Prompt |
|---|---|---|---|
| Spring | Warm Green + Peach Pink | Off-white, Goose Yellow | Spring warm green, peach blossom pink |
| Summer | Emerald Green + Lotus Pink | Sky Blue, Lotus White | Summer lotus emerald, dense shade warmth |
| Autumn | Warm Red + Golden Yellow | Orange Yellow, Warm Gray | Autumn maple warm red, golden leaves warm sun |
| Winter | Soft White + Frost Gray | Warm Wood Color, Ice Blue | Winter snow soft, bare branches warm tone |

---

## III. Indoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Style | Ancient residence/palace/study/boudoir, cozy retro | Ancient {dynasty} style, cozy retro |
| Material | Clay-shaped wood as primary, stone/jade/silk/gauze as secondary | Clay wooden furniture, jade screen |
| Color Tone | Low-saturation warm wood color + off-white gauze curtains + celadon | Warm wood tone, cozy furnishings |
| Depth | Foreground/midground/background layers | Foreground {element}, midground {element}, background {element} |
| Texture | Wood grain/fabric drape/ceramic gloss distinguishable | Clear texture, clay texture |
| Lighting | Warm-toned soft light as primary (window light/candlelight), diffuse light | Warm light diffuse, cozy candlelight |
| Lens Feel | Soft shallow depth-of-field blur, natural light spots, stop-motion grain | shallow depth of field, bokeh, stop-motion feel |
| Imperfection | Wood surfaces have usage marks, stone surfaces have weathering patterns, fabric has natural wrinkles | Traces of time, natural wear, natural fabric drapes |

### Indoor Type Quick Reference

| Type | Core Elements | Atmosphere Words |
|---|---|---|
| Boudoir/Bedroom | Gauze curtains, dressing table, bronze mirror, vase | Cozy private, gauze curtains lightly hanging |
| Study/Scriptorium | Bookshelf, scrolls, ink and brush, chessboard | Quiet and elegant, ink fragrance overflowing |
| Grand Hall/Main Hall | High pillars, plaque, curtains, candlesticks | Solemn and magnificent, grand momentum |
| Courtyard Corridor | Corridor pillars, stone railings, flowers and trees, lanterns | Winding path to seclusion, lantern shadows swaying |
| Kitchen/Dining Hall | Stove, steamer, tableware | Hearth atmosphere, cozy daily life |

---

## IV. Outdoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Type | Courtyard/mountain forest/stream bank/ancient bridge/market | {scene}, {season}, {time} |
| Weather | Sunny/overcast/thin mist/light rain/falling snow | Thin mist pervasive, light rain like silk |
| Vegetation | Plum/bamboo/pine/peach/willow/lotus (must match season) | Peach blossoms blazing, emerald bamboo forest |
| Water | Streams/lakes/waterfalls must have light and shadow reflection | Stream babbling, lake surface like a mirror |
| Architecture | Flying eaves and bracket sets, blue tiles and white walls, stone bridges and wooden pavilions | Flying eaves upturned corners, stone arch bridge |
| Air Feel | Must have aerial perspective, distant areas slightly warm gray | Distant mountains like ink, aerial perspective |
| Lighting | Warm-toned natural light as the only light source, sunlight/moonlight must have volumetric light | Warm light diffuse, volumetric light, warm-toned light spots |
| Lens Feel | Soft shallow depth-of-field blur, light spot bokeh, stop-motion feel | shallow depth of field, bokeh, stop-motion feel |
| Imperfection | Stone surfaces with moss/weathering, wood surfaces with cracks/patina, roof tiles incomplete | Mottled moss, weathering traces, patina of time |

### Outdoor Type Quick Reference

| Type | Core Elements | Atmosphere Words |
|---|---|---|
| Courtyard Garden | Rockery, pond, flowers and trees, stone path | Flower shadows sparse, winding path to seclusion |
| Mountain Forest Bamboo Sea | Ancient trees, bamboo forest, mountain rocks, clouds and mist | Layered peaks, clouds and mist ethereal |
| Stream Bank Lakeside | Stream, pebbles, weeping willows, lotus flowers | Stream babbling, willow shadows swaying |
| Ancient Bridge Long Pavilion | Stone arch bridge, long pavilion, willow trees | Long pavilion ancient road, willows lingering |
| Market Street | Wine flags, vendors, lanterns | Bustling marketplace, human smoke and fire |
| Rooftop Terrace | Roof tiles, flying eaves, night sky | Drinking alone under the moon, gentle breeze coming |

---

## V. Main View Specifications

### View Definition

> Single-frame main view, shot from the most representative angle of the scene, carrying spatial narrative and compositional focus.

| Item | Constraint | Prompt |
|---|---|---|
| Perspective | Natural observation perspective, composition best embodies the scene subject and depth | hero shot, representative angle |
| Eye Level | Default eye-level height, special scenes can be high/low angle | eye level (default) |
| Composition | Subject centered or follows rule of thirds, clear foreground/midground/background layers | balanced composition |

### Image Specifications

| Item | Constraint |
|---|---|
| Layout | Single frame (not collage, not multi-view, not split screen) |
| People | **Strictly prohibited from appearing any people, human shadows, or human body outlines** |
| Consistency | Style/material/color tone/lighting unified |
| Lighting | Single light source logic, consistent light and shadow direction |
| Aspect Ratio | Default 16:9 (or as set by caller) |

---

## VI. Prompt Template

```
Claymation stop-motion ancient style scene main view concept image, stop-motion style, 3D cartoon rendering, warm-toned lighting, soft shallow depth of field,
claymation style, stop-motion aesthetic, warm lighting,
scene design sheet, environment concept art, no people, no characters, no human figures,
{indoor/outdoor}, {scene type}, {dynasty style}, {season+time},
Foreground: {element}, Midground: {element}, Background: {element},
{color tone description}, {weather/atmosphere element},
{material description}, aerial perspective, ultra-clear texture details,
natural material wear traces, patina of time, moss weathering, natural fabric drapes,
warm-toned soft light diffuse, volumetric light, warm-toned light spots, shallow depth-of-field blur,
single frame composition, natural observation perspective, composition represents the scene subject and displays foreground/midground/background layers,
no people in the image
no text in the image
```

---

## VII. Constraint Rules

### Must Follow

| No. | Rule |
|---|---|
| R1 | Scene must have "foreground/midground/background layers" |
| R2 | Outdoor must include "aerial perspective" |
| R3 | Scene image must be a "single-frame main view", no multi-view/split screen/grid splicing |
| R4 | Composition must represent the scene subject and display foreground/midground/background layers |
| R5 | **Strictly prohibited from appearing any people in the scene image** |
| R6 | Must include stop-motion keywords (claymation / stop-motion) |
| R7 | Must include shallow depth-of-field keywords (shallow depth of field / bokeh) |
| R8 | Must specify "warm-toned soft light", no hard shadows |
| R9 | Materials must have natural wear/traces of time |

### Strictly Prohibited

| No. | Prohibited |
|---|---|
| X1 | Pure white/pure black background/no scene |
| X2 | Extreme weather (storm/lightning/blizzard) |
| X3 | Scene without depth/without layers |
| X4 | Vegetation/weather contradicts season |
| X5 | Any people, human shadows, or human silhouettes appearing |
| X6 | Image spliced into multi-view/grid/split screen layout |
| X7 | Realistic live-action photography/3D rendering/CG animation texture |
| X8 | Materials too clean and perfect, no usage traces |
| X9 | Cold hard light/strong contrast/hard shadows |
