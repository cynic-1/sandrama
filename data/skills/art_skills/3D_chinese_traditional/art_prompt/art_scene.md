---
name: art_scene
description: Scene Image Generation · Constraint Manual
metaData: art_skills
---

# Scene Image Generation · Constraint Manual

---

## I. Scene Aesthetic Principles

1. **Spatial Narrative** — The scene carries emotional and narrative functions; it is not merely a background board.
2. **Layered Depth** — All scenes must possess foreground/midground/background layers; flatness is prohibited.
3. **Texture Supremacy** — Material textures such as wood, stone, fabric, and water surfaces must be ultra-clear.
4. **3D as Anchor** — All visuals must adhere to 3D rendering standards. Reject flat textures, 3D rendering, or CG animation aesthetics. Pursue cinematic rendering effects such as volumetric lighting, ambient occlusion, and depth-of-field blur.

---

## II. Seasonal Color Mapping

| Season | Primary Color | Secondary Color | Prompt Keywords |
|---|---|---|---|
| Spring | Cyan-green + Vermilion | Moon white, Ginkgo yellow | Spring colors lush and green, peach blossoms blazing |
| Summer | Cyan-green + Indigo | Moon white, Cyan-green | Summer lotus emerald, dense shade blocking the sun |
| Autumn | Ochre + Golden yellow | Vermilion, Ochre | Autumn maples crimson, golden leaves drifting |
| Winter | Moon white + Indigo | Ink black, Cyan-green | Winter snow plain white, bare branches frosted |

---

## III. Indoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt Keywords |
|---|---|---|
| Style | Ancient residences/palaces/studies/boudoirs, Ming-Qing to Tang-Song | Ancient {dynasty} style |
| Material | Primarily wood, supplemented by stone/jade/silk/gauze | Sandalwood furniture, jade screens, silk and gauze drapes |
| Color Palette | Traditional Chinese colors + moon white gauze + vermilion lacquer | Warm wood tones, elegant furnishings |
| Depth | Foreground/midground/background layers | Foreground {element}, midground {element}, background {element} |
| Texture | Wood grain/fabric drape/ceramic gloss must be discernible | Clear textures, refined material quality |
| Lighting | Primarily natural light sources (window light/candlelight), volumetric light, ambient occlusion | Natural light diffusion, flickering candlelight, volumetric light |
| Lens Feel | Depth-of-field blur for foreground/background, lens vignette, subtle chromatic aberration | depth of field, lens vignette, chromatic aberration |
| Imperfection | Wood surfaces show usage marks, stone surfaces show weathering patterns, fabrics show natural folds | Traces of time, natural wear, natural fabric drapes |

### Indoor Type Quick Reference

| Type | Core Elements | Atmosphere Keywords |
|---|---|---|
| Boudoir/Bedroom | Gauze curtains, dressing table, bronze mirror, vase | Cozy and private, gauze drapes hanging lightly |
| Study/Library | Bookshelves, scrolls, ink and brush, chessboard | Quiet and elegant, fragrance of ink |
| Grand Hall/Main Hall | High pillars, plaques, curtains, candlesticks | Solemn and magnificent, grand atmosphere |
| Courtyard Corridor | Corridor pillars, stone railings, flowers and trees, lanterns | Winding path to seclusion, flickering lantern shadows |
| Kitchen/Dining Hall | Stove, steamer baskets, tableware | Earthy atmosphere, cozy daily life |

---

## IV. Outdoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt Keywords |
|---|---|---|
| Type | Courtyard/mountain forest/stream bank/ancient bridge/market | {scene}, {season}, {time} |
| Weather | Sunny/overcast/light mist/drizzle/snowfall | Light mist pervasive, drizzle like silk |
| Vegetation | Plum/bamboo/pine/peach/willow/lotus (must match season) | Peach blossoms blazing, emerald bamboo forest |
| Water | Streams/lakes/waterfalls must have light and shadow reflections | Stream babbling, lake surface like a mirror |
| Architecture | Flying eaves and bracket sets, blue tiles and white walls, stone bridges and wooden pavilions | Upturned eaves, stone arch bridge |
| Air Sense | Must have aerial perspective, volumetric light, blurred distant view | Distant mountains like ink, aerial perspective, volumetric light |
| Lighting | Natural light is the only source; sunlight/moonlight must have volumetric light and scattering | Natural lighting, volumetric light, depth-of-field blur |
| Lens Feel | Depth-of-field blur, lens vignette, chromatic aberration, bokeh | depth of field, bokeh, lens flare, vignette |
| Imperfection | Moss/weathering on stone, cracks/patina on wood, broken tiles/moss marks | Mottled moss, weathering traces, aged patina |

### Outdoor Type Quick Reference

| Type | Core Elements | Atmosphere Keywords |
|---|---|---|
| Courtyard Garden | Rockery, pond, flowers and trees, stone path | Dappled flower shadows, winding path to seclusion |
| Mountain Forest Bamboo Sea | Ancient trees, bamboo groves, mountain rocks, clouds and mist | Layered peaks, ethereal clouds |
| Stream Bank Lakeside | Stream, pebbles, weeping willows, lotus | Stream babbling, swaying willow shadows |
| Ancient Bridge Long Pavilion | Stone arch bridge, long pavilion, willow trees | Long pavilion on the old road, willows swaying gently |
| Market Street | Wine flags, street vendors, lanterns | Bustling marketplace, earthly warmth |
| Rooftop Terrace | Tiles, flying eaves, night sky | Drinking alone under the moon, gentle breeze |

---

## V. Main View Specifications

### View Definition

> Single-frame main view, shot from the most representative angle of the scene, carrying spatial narrative and compositional focus.

| Item | Constraint | Prompt Keywords |
|---|---|---|
| Perspective | Natural observation perspective; composition best represents the scene subject and depth | hero shot, representative angle |
| Eye Level | Default eye-level height; special scenes may use high/low angles | eye level (default) |
| Composition | Subject centered or following the rule of thirds; clear foreground/midground/background layers | balanced composition |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| Figures | **Strictly prohibited: any people, human shadows, or human silhouettes** |
| Consistency | Unified style/material/color/lighting |
| Lighting | Single light source logic, consistent light and shadow direction |
| Aspect Ratio | Default 16:9 (or as set by the caller) |

---

## VI. Prompt Template

Ancient-style scene main view concept art,
3D rendering style, high-precision modeling, PBR materials, Chinese-style 3D, cinematic lighting,
3D rendered, volumetric lighting,
depth of field, natural lens vignette, subtle chromatic aberration, bokeh,
3D rendering texture, volumetric light, natural lighting, physical light and shadow,
scene design sheet, environment concept art, no people, no characters, no human figures,
{indoor/outdoor}, {scene type}, {dynasty style}, {season+time},
Foreground: {element}, Midground: {element}, Background: {element},
{color description}, {weather/atmosphere element},
{material description}, aerial perspective, ultra-clear texture details,
natural wear marks on materials, aged patina, moss and weathering, natural fabric drapes,
volumetric light, ambient occlusion, natural light diffusion, soft light and shadow,
single-frame composition, natural observation perspective, composition represents the scene subject and displays foreground/midground/background layers,
no people in the frame
no text in the image

---

## VII. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The scene must have "foreground/midground/background layers" |
| R2 | Outdoor scenes must include "aerial perspective" |
| R3 | Scene images must be a "single-frame main view"; no multi-view/split-screen/grid collages |
| R4 | Composition must represent the scene subject and display foreground/midground/background layers |
| R5 | **Strictly prohibited: any people in scene images** |
| R6 | Must include 3D rendering keywords (3D rendered / volumetric lighting / PBR materials) |
| R7 | Must include lens optical features (at least one of depth of field / lens vignette / bokeh) |
| R8 | Materials must show natural wear/aging traces; brand-new, flawless "CG feel" is prohibited |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Pure white/pure black background/no scene |
| X2 | Extreme weather (storm/lightning/blizzard, unless required by plot) |
| X3 | Scene lacks depth/layers |
| X4 | Vegetation/weather contradicts the season |
| X5 | Any people, human shadows, human silhouettes, or human outlines appear |
| X6 | Frame is collaged into multi-view/grid/split-screen layout |
| X7 | Low-precision modeling/rough textures/plastic texture (prohibited words: low-poly, rough modeling, etc.) |
| X8 | Materials are too clean/perfect, with no usage traces or sense of age (avoid "plastic feel") |
| X9 | Lighting is too uniform/flat, no depth-of-field blur, no lens optical features |