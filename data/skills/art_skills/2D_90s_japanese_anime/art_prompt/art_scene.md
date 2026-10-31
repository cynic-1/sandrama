# 90s Retro Japanese Animation Style - Scene Image Generation · Constraint Manual

---

## I. Scene Aesthetic Principles

1. **Spatial Narrative** — Scenes carry emotional and narrative functions; they are not mere background boards.
2. **Layered Depth** — All scenes must have foreground/midground/background layers; flatness is prohibited.
3. **Texture First** — Material expression of lines, colors, and light/shadow must be clear.
4. **90s as Anchor** — All visuals must adhere to the 90s retro Japanese animation standard; modern CG/3D rendering is rejected. Pursue hand-drawn line characteristics (smooth lines, block shadows) and cinematic lighting (soft warm light, volumetric light).

---

## II. Seasonal Color Mapping

| Season | Primary Color | Secondary Color | Prompt |
|---|---|---|---|
| Spring | Pink + Light Green | Light Yellow, Light Purple | Spring pink, blooming cherry blossoms |
| Summer | Emerald Green + Blue | Light Blue, White | Summer emerald, blue sky with white clouds |
| Autumn | Golden Yellow + Orange-Red | Brown, Dark Green | Autumn gold, red maple leaves |
| Winter | White + Gray | Dark Blue, Light Blue | Winter white, falling snowflakes |

---

## III. Indoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Style | 90s Japanese room / Western room | {style} style |
| Material | Primarily wood/stone/fabric/glass | Wooden furniture, fabric decorations |
| Color Tone | Low-saturation warm tones / Soft cool tones | Warm tones / Cool tones |
| Depth | Foreground/midground/background layers | Foreground {element}, midground {element}, background {element} |
| Texture | Smooth lines, soft colors | Smooth lines, soft colors |
| Lighting | Natural light / Artificial light, soft cinematic light | Natural lighting, soft cinematic light |
| Line Quality | Clear outlines, block shadows | Clear lines, block shadows |
| Imperfections | Walls show signs of use, furniture has natural wear | Signs of use, natural wear |

### Indoor Type Quick Reference

| Type | Core Elements | Atmosphere Words |
|---|---|---|
| Bedroom / Boudoir | Bed / Wardrobe / Dressing table | Cozy and private, comfortable |
| Study / Library | Bookshelf / Desk / Chair | Serene, scholarly |
| Living Room / Main Hall | Sofa / Coffee table / Decorations | Comfortable, cozy |
| Corridor / Balcony | Railing / Plants / Decorations | Open, spacious |
| Kitchen / Dining Room | Dining table / Kitchenware | Cozy, homely |

---

## IV. Outdoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Type | Courtyard / Mountain forest / Street / Plaza | {scene}, {season}, {time} |
| Weather | Sunny / Cloudy / Rainy / Snowy | Sunny day, rainy day, snowy day |
| Vegetation | Trees / Flowers / Grass (must match season) | Trees, flowers, grass |
| Architecture | 90s architecture / Japanese architecture | 90s architecture / Japanese architecture |
| Air Perspective | Must have aerial perspective; distant areas appear grayish | Aerial perspective, blurred background |
| Lighting | Natural light is the only light source, soft cinematic light | Natural lighting, soft cinematic light |
| Line Quality | Clear outlines, block shadows | Clear lines, block shadows |
| Imperfections | Walls show signs of use, ground has wear | Signs of use, wear marks |

### Outdoor Type Quick Reference

| Type | Core Elements | Atmosphere Words |
|---|---|---|
| Courtyard Garden | Plants / Small bridge / Pond | Serene, beautiful |
| Mountain Forest / Park | Trees / Rocks / Paths | Natural, open |
| Street / Market | Buildings / Stalls / Pedestrians | Bustling, lively |
| Riverside / Lakeside | Water surface / Bridge / Trees | Serene, beautiful |
| Rooftop / Terrace | Railing / Sky / Distant view | Open, free |

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
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| Characters | **Strictly prohibited: any characters, silhouettes, or human outlines** |
| Consistency | Unified style/material/color tone/lighting |
| Lighting | Single light source logic, consistent light/shadow direction |
| Aspect Ratio | Default 16:9 (or as set by the caller) |

---

## VI. Prompt Templates
```
90s retro Japanese anime style scene main view concept art,
90s anime style, hand-drawn flat coloring, soft warm tones, fine and smooth lines, cinematic lighting,
scene design sheet, environment concept art, no people, no characters, no human figures,
90s retro style, nostalgic and healing atmosphere,
{indoor/outdoor}, {scene type}, {season + time},
Foreground: {element}, Midground: {element}, Background: {element},
{color tone description}, {weather/atmosphere element},
{material description}, aerial perspective, ultra-clear line details,
smooth lines, block shadows, signs of use,
soft cinematic light, background glow, natural lighting,
single frame composition, natural observation perspective, composition represents the scene subject and displays foreground/midground/background layers,
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
| R3 | The scene image must be a "single main view"; splicing multiple views/split screens/grids is prohibited |
| R4 | The composition must represent the main subject of the scene and display foreground/midground/background layers |
| R5 | **No characters of any kind are allowed in the scene image** |
| R6 | Must include 90s keywords (90s anime style / hand-drawn / warm tone) |
| R7 | Must include line characteristics (smooth lines, block shading, at least one of the two) |
| R8 | Materials must show signs of wear; pristine, flawless "CG feel" is prohibited |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Pure white/pure black background/no scene |
| X2 | Extreme weather (storm/lightning/blizzard, unless required by the plot) |
| X3 | Scene lacks depth/layers |
| X4 | Vegetation/weather contradicts the season |
| X5 | Any characters, human figures, or human silhouettes appear |
| X6 | The image is spliced into a multi-view/grid/split-screen layout |
| X7 | 3D rendering/CG animation/modern style texture |
| X8 | Materials are too clean and perfect, with no signs of wear |
| X9 | Lighting is too uniform and flat, lacking soft cinematic light |
