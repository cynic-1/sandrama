# Scene Image Generation · Flat Style Constraint Manual

---

## I. Scene Aesthetic Principles

1. **Spatial Narrative** — Scenes carry emotional and narrative functions; they are not mere background boards.
2. **Layered Flatness** — Foreground, midground, and background are distinguished by color blocks, with no depth perspective.
3. **Color Blocks First** — All scenes must be expressed through color blocks; gradients and lighting/shadows are rejected.
4. **Flatness as Anchor** — All visuals adhere to the standard of flat vector illustration; 3D rendering/CG animation textures are rejected. Pursue simple lines and solid color fills.

---

## II. Seasonal Color Mapping

| Season | Primary Colors | Secondary Colors | Prompt |
|---|---|---|---|
| Spring | Jade Green + Peach Pink | Moon White, Goose Yellow | Flat spring colors, jade green and peach pink |
| Summer | Emerald Green + Lotus Pink | Sky Blue, Lotus White | Flat summer lotus, emerald green and lotus pink |
| Autumn | Crimson Red + Golden Yellow | Amber, Dusk Grey | Flat autumn maple, crimson red and golden yellow |
| Winter | Plain White + Frost Silver | Ink Jade Black, Ice Blue | Flat winter snow, plain white and frost silver |

---

## III. Indoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Style | Ancient residences/palaces/studies/boudoirs, from Wei-Jin to Tang-Song dynasties | Ancient {dynasty} style, flat ancient style |
| Material | Solid color blocks, line outlines | Flat sandalwood, flat jade, flat silk gauze |
| Color Tone | Low-saturation solid color blocks | Flat warm tones, flat understated elegance |
| Depth | Foreground/midground/background distinguished by color blocks | Foreground {color block}, midground {color block}, background {color block} |
| Texture | No texture, solid color fill | No texture, flat texture, flat texture |
| Lighting | No lighting, pure flat color blocks | No light and shadow, flat lighting, no lighting |
| Camera Feel | No depth-of-field blur, pure plane | No depth of field, flat perspective, no depth |
| Imperfections | No imperfections, perfect solid colors | No wear, flat perfection, no wear |

### Indoor Type Quick Reference

| Type | Core Elements | Atmosphere Words |
|---|---|---|
| Boudoir/Bedroom | Gauze curtains, dressing table, bronze mirror, vase | Flat cozy, simple and private |
| Study/Library | Bookshelves, scrolls, ink and brush, chessboard | Flat serene, simple and elegant |
| Grand Hall/Main Hall | Tall pillars, plaques, curtains, candlesticks | Flat solemn, simple and ornate |
| Courtyard Corridor | Corridor pillars, stone railings, flowers and trees, lanterns | Flat winding path, simple lantern shadows |
| Kitchen/Dining Hall | Stove, steamer, tableware | Flat domestic life, simple everyday |

---

## IV. Outdoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Type | Courtyard/mountain forest/stream bank/ancient bridge/market | {scene}, {season}, {time}, flat ancient style |
| Weather | Sunny/overcast/light mist/drizzle/falling snow | Flat light mist, flat drizzle |
| Vegetation | Plum/bamboo/pine/peach/willow/lotus (must match season) | Flat peach blossoms, flat green bamboo |
| Water | Streams/lakes/waterfalls must be represented by solid colors | Flat stream, flat lake surface |
| Architecture | Upturned eaves and bracket sets, blue tiles and white walls, stone bridges and wooden pavilions | Flat upturned eaves, flat stone bridge |
| Air Feel | No aerial perspective, pure plane | No perspective, flat distant view, flat far |
| Lighting | No lighting, pure flat color blocks | No lighting, flat daylight, no light |
| Camera Feel | No depth-of-field blur, pure plane | No depth of field, flat perspective, no depth |
| Imperfections | No imperfections, perfect solid colors | No weathering, flat perfection, no weathering |

### Outdoor Type Quick Reference

| Type | Core Elements | Atmosphere Words |
|---|---|---|
| Courtyard Garden | Rockery, pond, flowers and trees, stone path | Flat flower shadows, simple winding path |
| Mountain Forest Bamboo Sea | Ancient trees, bamboo groves, mountain rocks, clouds and mist | Flat layered mountains, simple clouds and mist |
| Stream Bank Lake Shore | Stream, pebbles, weeping willows, lotus flowers | Flat stream water, simple weeping willows |
| Ancient Bridge Long Pavilion | Stone arch bridge, long pavilion, willow trees | Flat ancient bridge, simple long pavilion |
| Market Street | Wine flags, street vendors, lanterns | Flat market bustle, simple lively atmosphere |
| Rooftop Terrace | Tiles, upturned eaves, night sky | Flat tiles, simple night sky |

---

## V. Main View Specifications

### View Definition

> Single-frame main view, shot from the most representative angle of the scene, carrying spatial narrative and compositional focus.

| Item | Constraint | Prompt |
|---|---|---|
| Perspective | Natural observation angle; composition best reflects the scene subject and color block layers | hero shot, representative angle |
| Eye Level | Default eye-level height; special scenes may use high/low angles | eye level (default) |
| Composition | Subject centered or following the rule of thirds; clear foreground/midground/background color block layers | balanced composition |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| Characters | **Strictly prohibited: any characters, human silhouettes, or human body outlines** |
| Consistency | Unified style/material/color tone |
| Lighting | No lighting, solid color fill, no light and shadow logic |
| Aspect Ratio | Default 1:1 (or as set by the caller) |

---

## VI. Prompt Templates

```
Concept art of the main view of a flat ancient-style scene,
2d flat design, vector art, flat illustration,
minimalist, clean lines, solid colors,
flat scene, environment design, no people, no characters, no human figures,
{indoor/outdoor}, {scene type}, {dynasty style}, {season+time},
foreground: {color block elements}, middle ground: {color block elements}, background: {color block elements},
{color tone description}, {weather/atmosphere elements},
{material description}, no perspective, solid color fill,
no signs of age, no wear, flat perfection,
no lighting, no shadows, solid flat paint,
single frame composition, natural observation perspective, composition represents the main subject of the scene and displays the foreground/middle ground/background color block layers,
no people in the image
no text in the image
```

---

## VII. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Scenes must have "foreground, midground, and background color block layers" |
| R2 | Outdoor scenes must be "flat wide shots" with no atmospheric perspective |
| R3 | Scene images must be a "single main view"; no multi-view composites, split screens, or grids |
| R4 | Composition must represent the main subject of the scene and display foreground/midground/background color block layers |
| R5 | **No characters of any kind are allowed in scene images** |
| R6 | "Flat style" keywords must be specified (2d flat design, vector art) |
| R7 | "No lighting/shadows and no gradients" must be specified |
| R8 | Materials must be solid color fills; complex textures/aged appearances are prohibited |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Pure white/pure black backgrounds or no scene |
| X2 | Extreme weather (storms/lightning/blizzards, unless required by the plot) |
| X3 | Scenes with no layers or no color block differentiation |
| X4 | Vegetation/weather contradicting the season |
| X5 | Any characters, human figures, human silhouettes, or human outlines |
| X6 | Images composed into multi-view/grid/split-screen layouts |
| X7 | 3D rendering/CG animation/cartoon/game engine aesthetics (terms such as 3D render, CGI, Unreal Engine, Unity are prohibited) |
| X8 | Materials too complex, with unclear color block differentiation |
| X9 | Adding lighting/shadows/gradients/3D effects |