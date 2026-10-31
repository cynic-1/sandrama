# 2D Scene Image Generation · Constraint Handbook

---

## I. Scene Aesthetic Principles

1. **Spatial Narrative** — The scene carries emotional and narrative functions; it is not merely a background board.
2. **Layered Depth** — All scenes must possess foreground/midground/background layers; flatness is prohibited.
3. **Texture Supremacy** — Modern material textures must be ultra-clear (glass/metal/wood/fabric/walls).
4. **Cel Shading as Anchor** — All images must adhere to the 2D animation style standard, emphasizing clear lines and cel shading.
5. **Dramatic Low-Key Lighting** — Lighting serves the emotion, maintaining a low-saturation, cool-toned baseline.

---

## II. Seasonal Color Mapping

| Season | Primary Colors | Secondary Colors | Prompt Keywords |
|---|---|---|---|
| Spring | Cyan-green + Pale pink | Light blue, Pale yellow | Springtime verdancy, tender cherry blossom pink |
| Summer | Emerald green + Azure blue | Sky blue, Snow white | Lush summer foliage, washed-blue sky |
| Autumn | Orange-yellow + Brown-red | Ochre, Golden yellow | Golden autumn leaves, fiery maple red |
| Winter | Pure white + Cold blue | Grey-white, Pale blue | Winter chill, snow-covered landscape |

---

## III. Indoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt Keywords |
|---|---|---|
| Style | Modern urban home/office/café/apartment | Modern {scene type} style |
| Materials | Primarily modern materials, supplemented by glass/metal/wood/fabric | Modern materials, glass reflections, wood grain |
| Color Tone | Primarily low-saturation cool tones, with warm accents | Cool tones dominant, warm light accents |
| Depth | Foreground/midground/background layers | Foreground {element}, midground {element}, background {element} |
| Texture | Clear textures for glass/metal/wood/fabric | Clear materials, delicate textures |
| Lighting | Natural/artificial light, distinct light and shadow layers | Natural light, light and shadow layers, interior lighting |
| Cinematography | Cinematic composition, shallow depth of field blur, lens optical characteristics | `shallow depth of field`, `film grain` |
| Imperfections | Modern usage traces, lived-in atmosphere | Lived-in atmosphere, usage traces |

### Indoor Type Quick Reference

| Type | Core Elements | Atmosphere Keywords |
|---|---|---|
| Modern Apartment | Sofa/TV/Bed/Kitchen | Cozy home, lived-in atmosphere |
| Business Office | Desk/Computer/Documents/Bookshelf | Professional and capable, workplace atmosphere |
| Café | Tables & chairs/Coffee cups/Bar/Windows | Relaxed and pleasant, urban leisure |
| School Classroom | Desks/Blackboard/Bookshelf/Blackboard | Youthful campus, learning atmosphere |
| Hotel Room | Bed/Bathroom/TV/Nightstand | Comfortable and modern, hotel atmosphere |

---

## IV. Outdoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt Keywords |
|---|---|---|
| Type | City streets/Parks/Campuses/Commercial districts | {scene}, {season}, {time} |
| Weather | Sunny/Overcast/Mist/Drizzle/Snowfall | Pervasive mist, fine drizzle |
| Vegetation | Trees/Flowers/Lawn (must match the season) | Lush green shade, blooming flowers |
| Water | Ponds/Fountains/Rivers must have light and shadow reflections | Shimmering water surface, clear reflections |
| Architecture | Modern buildings/Glass curtain walls/Brick walls | Modern city, architectural lines |
| Atmosphere | Must have aerial perspective; distant areas appear grey and blue | Distant mountains like ink, aerial perspective |
| Lighting | Natural/artificial light, dramatic low-key lighting | Natural light, volumetric light, dramatic lighting |
| Cinematography | Cinematic composition, shallow depth of field blur, animation lens characteristics | `shallow depth of field`, `vignette`, `anime cinematic` |
| Imperfections | Urban usage traces, signs of age | Urban traces, lived-in atmosphere |

### Outdoor Type Quick Reference

| Type | Core Elements | Atmosphere Keywords |
|---|---|---|
| City Street | Streetlights/Crosswalks/Buildings/Vehicles | Urban life, street atmosphere |
| Park Greenery | Trees/Benches/Lawn/Paths | Leisure and relaxation, natural atmosphere |
| Commercial District | Shops/Ad boards/Pedestrians/Streets | Bustling city, commercial atmosphere |
| Campus Scene | Teaching buildings/Playground/Trees/Benches | Youthful campus, learning atmosphere |
| Rooftop/Balcony | Railings/Cityscape/Plants | Open view, urban perspective |
| Subway/Bus Station | Platform/Trains/Pedestrians/Signage | Commuting life, urban rhythm |

---

## V. Main View Specifications

### View Definition

> Single-frame main view, shot from the most representative angle of the scene, carrying the spatial narrative and compositional focus.

| Item | Constraint | Prompt Keywords |
|---|---|---|
| Perspective | Natural observation angle; composition best represents the scene subject and depth | `hero shot`, `representative angle` |
| Eye Level | Default eye-level height; special scenes may use high/low angles | `eye level` (default) |
| Composition | Subject centered or following the rule of thirds; clear foreground/midground/background layers | `balanced composition` |

### Image Specifications

| Item | Constraint |
|---|---|
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| Characters | **Strictly prohibited: any people, human shadows, or human silhouettes** |
| Consistency | Unified style/materials/color tones/lighting |
| Lighting | Single light source logic, consistent light and shadow direction |
| Aspect Ratio | Default 16:9 (or as set by the caller) |

---

## VI. Prompt Template

2D scene main view concept art,
anime style, cel shading, modern urban style,
cinematic composition, dramatic low-key lighting,
ultra detailed, 8K, high quality,
shallow depth of field, film grain, lens vignette,
cel-shaded animation style, cinematic composition, dramatic low-key lighting,
scene design sheet, environment concept art, no people, no characters, no human figures,
{indoor/outdoor}, {scene type}, {modern style}, {season + time},
Foreground: {element}, Midground: {element}, Background: {element},
{color tone description}, {weather/atmosphere elements},
{material description}, aerial perspective, ultra-clear texture details,
modern usage traces on materials, lived-in atmosphere, natural wear,
natural/artificial light, dramatic lighting, low-saturation cool tones,
single-frame composition, natural observation angle, composition represents the scene subject and displays foreground/midground/background layers,
no people in the image
no text in the image

---

## VII. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The scene must have "foreground/midground/background layers" |
| R2 | Outdoor scenes must include "aerial perspective" |
| R3 | The scene image must be a "single-frame main view"; multi-view/split-screen/grid collages are prohibited |
| R4 | The composition must represent the scene subject and display foreground/midground/background layers |
| R5 | **Strictly prohibited: any people in the scene image** |
| R6 | Must include "2D animation style" keywords (anime style / cel shading) |
| R7 | Must include depth-of-field characteristics (at least one of shallow depth of field / vignette), maintaining the anime cel-shading style |
| R8 | Materials must show modern usage traces/lived-in atmosphere; pristine, flawless "3D render look" is prohibited |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Pure white/pure black background/no scene |
| X2 | Extreme weather (storms/lightning/blizzards, unless required by the plot) |
| X3 | Scene lacks depth/layers |
| X4 | Vegetation/weather contradicts the season |
| X5 | Any people, human shadows, human silhouettes, or human outlines |
| X6 | Image collaged into multi-view/grid/split-screen layout |
| X7 | 3D render/CG animation/game engine textures (prohibited words: 3D render, CGI, Unreal Engine, Unity, etc.) |
| X8 | Materials too clean/perfect, with no usage traces or sense of age (avoid "plastic look") |
| X9 | Lighting too uniform/flat, no depth-of-field blur, no lens optical characteristics |