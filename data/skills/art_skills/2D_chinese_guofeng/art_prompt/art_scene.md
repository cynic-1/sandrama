---
name: art_scene
description: Scene Image Generation · Constraint Manual
metaData: art_skills
---

# Scene Image Generation · Constraint Manual

---

## I. Scene Aesthetic Principles

1. **Spatial Narrative** — Scenes carry emotional and narrative functions; they are not mere background boards.
2. **Layered Depth** — All scenes must possess foreground/midground/background layers; flatness is prohibited.
3. **Texture Supremacy** — Material textures such as wood, stone, fabric, and water surfaces must be hyper-clear.
4. **Anime as Anchor** — All visuals must adhere to the Chinese-style anime standard; 3D realism/CG animation textures are rejected. Pursue delicate lines, cel-shaded flat coloring, and Japanese rendering.

---

## II. Seasonal Color Mapping

| Season | Primary Colors | Secondary Colors | Prompt Keywords |
|---|---|---|---|
| Spring | Cyan-green + Vermilion | Moon white, Ginkgo yellow | Spring colors vibrant, peach blossoms blazing |
| Summer | Cyan-green + Indigo | Moon white, Cyan-green | Summer lotus emerald, dense shade blocking the sun |
| Autumn | Ochre + Golden yellow | Vermilion, Ochre | Autumn maples crimson, golden leaves drifting |
| Winter | Moon white + Indigo | Ink black, Cyan-green | Winter snow pure white, bare branches frosted |

---

## III. Indoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt Keywords |
|---|---|---|
| Style | Ancient residences/palaces/studies/boudoirs, Ming-Qing to Tang-Song | Ancient {Dynasty} style |
| Material | Wood as primary; stone/jade/silk/gauze as secondary | Sandalwood furniture, jade screens, silk gauze drapes |
| Color Palette | Traditional Chinese colors + moon white gauze + vermilion lacquer | Warm wood tones, elegant furnishings |
| Depth | Foreground/midground/background layers | Foreground {element}, midground {element}, background {element} |
| Texture | Wood grain/fabric drape/ceramic gloss must be discernible | Clear textures, delicate quality |
| Lighting | Natural light sources primary (window light/candlelight), soft shadows | Natural light diffusion, flickering candlelight, soft shadows |
| Lens Feel | Cel-shaded flat coloring blurs foreground/background, clear lines | cel shading wash, clear lines |
| Imperfections | Wood surfaces show usage marks, stone surfaces show weathering, fabric has natural folds | Traces of time, natural wear, natural fabric drapes |

### Indoor Type Quick Reference

| Type | Core Elements | Atmosphere Keywords |
|---|---|---|
| Boudoir/Bedroom | Gauze curtains, dressing table, bronze mirror, vase | Warm and private, gauze drapes lightly hanging |
| Study/Library | Bookshelves, scrolls, ink and brush, chessboard | Quiet and elegant, ink fragrance spreading |
| Grand Hall/Main Hall | Tall pillars, plaques, curtains, candlesticks | Solemn and magnificent, grandeur |
| Courtyard Corridor | Corridor pillars, stone railings, flowers and trees, lanterns | Winding path to seclusion, lantern shadows swaying |
| Kitchen/Dining Hall | Stove, steamer, tableware | Hearth atmosphere, warm daily life |

---

## IV. Outdoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt Keywords |
|---|---|---|
| Type | Courtyard/mountain forest/stream bank/ancient bridge/market | {Scene}, {Season}, {Time} |
| Weather | Clear/Overcast/Thin mist/Drizzle/Snowfall | Thin mist pervasive, drizzle like silk |
| Vegetation | Plum/Bamboo/Pine/Peach/Willow/Lotus (must match season) | Peach blossoms blazing, emerald bamboo forest |
| Water | Streams/lakes/waterfalls must have light reflections | Stream babbling, lake surface like a mirror |
| Architecture | Flying eaves and bracket sets, blue tiles and white walls, stone bridges and wooden pavilions | Upturned eaves, stone arch bridge |
| Air Sense | Must have aerial perspective, distant views blurred | Distant mountains like ink, aerial perspective |
| Lighting | Natural light is the only source; sunlight/moonlight must have Japanese rendering effects | Natural light, Japanese rendering, soft shadows |
| Lens Feel | Cel-shaded flat coloring blur, clear lines | cel shading wash, clear lines |
| Imperfections | Moss/weathering on stone, patina on wood, broken tiles | Mottled moss, weathering traces, aged patina |

### Outdoor Type Quick Reference

| Type | Core Elements | Atmosphere Keywords |
|---|---|---|
| Courtyard Garden | Rockery, pond, flowers and trees, stone path | Flower shadows sparse, winding path to seclusion |
| Mountain Forest/Bamboo Sea | Ancient trees, bamboo groves, mountain rocks, clouds and mist | Layered peaks, ethereal clouds |
| Stream Bank/Lake Shore | Stream, pebbles, weeping willows, lotus | Stream babbling, willow shadows swaying |
| Ancient Bridge/Long Pavilion | Stone arch bridge, long pavilion, willows | Long pavilion on the old road, willows lingering |
| Market Street | Wine flags, vendors, lanterns | Bustling marketplace, human warmth |
| Rooftop/Terrace | Tiles, flying eaves, night sky | Drinking alone under the moon, gentle breeze |

---

## V. Main View Specifications

### View Definition

> Single-frame main view, shot from the most representative angle of the scene, carrying spatial narrative and compositional focus.

| Item | Constraint | Prompt Keywords |
|---|---|---|
| Perspective | Natural observation perspective, composition best embodies the scene subject and depth | hero shot, representative angle |
| Eye Level | Default eye-level height; special scenes may use high/low angles | eye level (default) |
| Composition | Subject centered or follows rule of thirds, clear foreground/midground/background layers | balanced composition |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Single frame (not collage, not multi-view, not split-screen) |
| Characters | **Strictly prohibited: any characters, human shadows, or human silhouettes** |
| Consistency | Unified style/material/color/lighting |
| Lighting | Single light source logic, consistent shadow direction |
| Aspect Ratio | Default 16:9 (or as set by the caller) |

---

## VI. Prompt Template

Chinese-style anime scene main view concept art,
Chinese-style anime, New Guochao aesthetics, Japanese animation rendering, cel shading, fine brushstrokes,
Japanese anime style, cel shading, fine brushstrokes,
Cel shading, delicate lines, natural lighting, Japanese rendering,
scene design sheet, environment concept art, no people, no characters, no human figures,
{Indoor/Outdoor}, {Scene Type}, {Dynasty Style}, {Season+Time},
Foreground: {element}, Midground: {element}, Background: {element},
{Color description}, {Weather/Atmosphere elements},
{Material description}, aerial perspective, hyper-clear texture details,
Natural material wear traces, aged patina, natural fabric drapes,
Soft shadows, Japanese rendering, natural light diffusion, delicate texture,
Single-frame composition, natural observation perspective, composition represents the scene subject and displays foreground/midground/background layers,
No characters in the frame
No text in the image

---

## VII. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Scenes must have "foreground/midground/background layers" |
| R2 | Outdoor scenes must include "aerial perspective" |
| R3 | Scene images must be "single-frame main views"; no multi-view/split-screen/grid collages |
| R4 | Composition must represent the scene subject and display foreground/midground/background layers |
| R5 | **Strictly prohibited: any characters in scene images** |
| R6 | Must include Chinese-style anime keywords (Chinese style anime / cel shading / fine brushstrokes) |
| R7 | Must include lens optical features (cel shading / delicate lines / Japanese rendering) |
| R8 | Materials must have natural wear/aged traces; brand-new flawless "CG feel" is prohibited |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Pure white/pure black background/no scene |
| X2 | Extreme weather (storm/lightning/blizzard, unless required by plot) |
| X3 | Scene lacks depth/layers |
| X4 | Vegetation/weather contradicts the season |
| X5 | Any characters, human shadows, human silhouettes, or human outlines appear |
| X6 | Frame is collaged into multi-view/grid/split-screen layout |
| X7 | 3D realism/CG animation/cartoon/game engine textures (prohibited terms: 3D render, CGI, Unreal Engine, Unity, etc.) |
| X8 | Materials too clean/perfect, no usage traces or aged feel (avoid "plastic feel") |
| X9 | Lighting too uniform/flat, no depth-of-field blur, no lens optical features |
