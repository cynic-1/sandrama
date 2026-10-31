# Scene Image Generation · Urban Realism Constraint Manual

---

## I. Scene Aesthetic Principles

1. **Spatial Narrative** — Scenes carry emotional and narrative functions; they are not mere background boards.
2. **Layered Depth** — All scenes must possess foreground/midground/background layers; flat compositions are prohibited.
3. **Texture Supremacy** — Material textures such as concrete, glass, wood, metal, and fabric must be ultra-clear.
4. **Live-Action Anchor** — All visuals must adhere to real photography standards, rejecting 3D rendering/CG animation aesthetics. Pursue lens optical characteristics (depth-of-field blur, lens vignetting, subtle chromatic aberration) and physical lighting (natural light diffusion, caustics, volumetric light).

---

## II. Seasonal Color Mapping

| Season | Primary Colors | Secondary Colors | Prompt Keywords |
|---|---|---|---|
| Spring | Tender green + light pink | Sky blue, goose yellow | Spring tender green, peach blossom light pink |
| Summer | Emerald green + deep blue | Sea blue, white | Summer emerald green, deep blue sky |
| Autumn | Golden yellow + orange-red | Amber, brown | Autumn golden yellow, falling leaves orange-red |
| Winter | Grey-white + cold blue | Silver-grey, ink blue | Winter grey-white, cold blue sky |

---

## III. Indoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt Keywords |
|---|---|---|
| Style | Modern apartments/office buildings/cafés/hotels/malls; Modern Minimalist/Nordic/Industrial style | Modern {style} style |
| Materials | Primarily concrete/glass/wood/metal/fabric | Concrete walls, glass curtain walls, wooden flooring |
| Color Tone | Low-saturation neutral colors + natural wood tones + accent colors | Neutral tones, natural wood tones, accent colors |
| Depth | Foreground/midground/background layers | Foreground {element}, midground {element}, background {element} |
| Texture | Wood grain/brushed metal/fabric textures must be discernible | Clear textures, realistic quality |
| Lighting | Primarily natural light sources (window light/table lamps/pendant lights); light is diffused and soft; visible light beam particles and caustic projections | Natural light diffusion, warm table lamp light, light beams through windows |
| Lens Feel | Shallow depth of field blurring foreground/background, slight lens vignetting, natural color temperature shift | shallow depth of field, lens vignette, natural color cast |
| Imperfections | Walls show signs of use, floors show wear, fabrics have natural folds | Signs of use, natural wear, natural fabric draping |

### Indoor Type Quick Reference

| Type | Core Elements | Atmosphere Keywords |
|---|---|---|
| Modern Apartment | Sofa, coffee table, floor-to-ceiling windows, houseplants | Cozy and comfortable, modern minimalist |
| Office Space | Office desks, computers, documents, houseplants | Professional and tidy, efficient atmosphere |
| Café | Bar counter, coffee machine, tables and chairs, decorations | Relaxed and pleasant, literary atmosphere |
| Hotel Guest Room | Bed, bedside table, floor-to-ceiling windows, TV | Comfortable and luxurious, serene atmosphere |
| Living Room | Sofa, TV stand, carpet, decorative paintings | Warm and everyday, family atmosphere |

---

## IV. Outdoor Scenes

### Spatial Specifications

| Dimension | Constraint | Prompt Keywords |
|---|---|---|
| Type | Streets/plazas/parks/rooftops/parking lots | {scene}, {season}, {time} |
| Weather | Sunny/overcast/light mist/drizzle/snowfall | Light mist pervading, drizzle like silk |
| Vegetation | Street trees/flower beds/lawn/potted plants (must match the season) | Street trees, flower bed greenery |
| Water | Fountains/pools must have light and shadow reflections | Water surface reflection, flowing fountain |
| Architecture | Modern buildings, glass curtain walls, metal structures | Modern buildings, glass curtain walls |
| Air Feel | Must have aerial perspective; distant areas appear grey and blue | Distant grey-blue, aerial perspective |
| Lighting | Natural light is the only light source; sunlight/streetlights must have volumetric light and scattering | Natural lighting, volumetric light, warm streetlight |
| Lens Feel | Shallow depth of field blur, lens vignetting, slight chromatic aberration, light spot bokeh | shallow depth of field, bokeh, lens flare, vignette |
| Imperfections | Ground cracks/wall peeling/metal oxidation/glass scratches | Signs of use, natural wear |

### Outdoor Type Quick Reference

| Type | Core Elements | Atmosphere Keywords |
|---|---|---|
| City Street | Streetlights, street trees, crosswalks | Urban daily life, busy street |
| Commercial Plaza | Buildings, fountains, billboards | Bustling and lively, commercial atmosphere |
| Park Green Space | Lawn, trees, benches, pathways | Natural and tranquil, leisure atmosphere |
| Rooftop Terrace | Railings, cityscape, seating | Open view, city scenery |
| Underground Parking Lot | Parking spaces, lane markings, indicator lights | Cold industrial, quiet space |

---

## V. Main View Specifications

### View Definition

> Single-frame main view, shot from the most representative angle of the scene, carrying spatial narrative and compositional focus.

| Item | Constraint | Prompt Keywords |
|---|---|---|
| Perspective | Natural observation perspective; composition best reflects the scene subject and depth | hero shot, representative angle |
| Eye Level | Default eye-level height; special scenes may use high/low angles | eye level (default) |
| Composition | Subject centered or follows the rule of thirds; clear foreground/midground/background layers | balanced composition |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| People | **Strictly prohibited: any people, human shadows, or human silhouettes** |
| Consistency | Unified style/materials/color tones/lighting |
| Lighting | Single light source logic; consistent light and shadow direction |
| Aspect Ratio | Default 16:9 (or as set by the caller) |

---

## VI. Prompt Templates

```
Concept image of the main view of a modern urban scene,
real photography, photorealistic, shot on ARRI Alexa, 35mm film grain,
RAW photo, ultra realistic, hyper detailed,
shallow depth of field, natural lens vignette, subtle chromatic aberration, bokeh,
real photography texture, film grain, natural lighting, physical light and shadow,
scene design sheet, environment concept art, no people, no characters, no human figures,
{indoor/outdoor}, {scene type}, {style}, {season+time},
Foreground: {element}, Midground: {element}, Background: {element},
{color tone description}, {weather/atmosphere element},
{material description}, aerial perspective, ultra-clear texture details,
natural wear marks on materials, signs of use, peeling walls, metal oxidation,
natural light diffusion, volumetric light, Tyndall effect, caustic projection,
single frame composition, natural observation perspective, composition that represents the main subject of the scene and displays foreground/midground/background layers,
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
| R3 | The scene image must be a "single main view"; stitching multiple views/split screens/grids is prohibited |
| R4 | The composition must represent the main subject of the scene and display foreground/midground/background layers |
| R5 | **No people of any kind are allowed in the scene image** |
| R6 | Must include live-action photography keywords (real photography / photorealistic / RAW photo) |
| R7 | Must include lens optical characteristics (at least one of: shallow depth of field / lens vignette / bokeh) |
| R8 | Materials must show natural wear/usage marks; pristine, flawless "CG look" is prohibited |

### Prohibited

| ID | Prohibited |
|---|---|
| X1 | Pure white/pure black/no scene background |
| X2 | Extreme weather (storms/lightning/blizzards, unless required by the plot) |
| X3 | Scene lacks depth/layers |
| X4 | Vegetation/weather contradicts the season |
| X5 | Any people, human shadows, human silhouettes, or human outlines |
| X6 | Image stitched into multiple views/grid/split-screen layout |
| X7 | 3D rendering/CG animation/cartoon/game engine aesthetics (do not use terms like 3D render, CGI, Unreal Engine, Unity, etc.) |
| X8 | Materials too clean/perfect, with no usage marks or sense of age (avoid "plastic look") |
| X9 | Lighting too uniform/flat, no depth-of-field blur, no lens optical characteristics |

