# 3D Animation Rendering Urban Scene Image Generation · Constraint Manual

---

## I. Scene Aesthetic Principles

1. **Spatial Narrative** — The scene carries emotional and narrative functions; it is not merely a background board.
2. **Layered Depth** — All scenes must possess foreground/midground/background layers; flatness is prohibited.
3. **Texture Supremacy** — Material textures such as wood grain, stone, fabric, and water surfaces must be clear, but simplified for cel animation rendering.
4. **Cel Animation as Anchor** — All visuals must adhere to the standard of 3D animation rendering + cel animation; realistic photography/CG animation textures are rejected; maintain consistency in animation style and lens characteristics.
5. **Urban Atmosphere** — Modern urban landscapes, architectural styles, and color tones must be unified.

---

## II. Seasonal Color Mapping

| Season | Primary Colors | Secondary Colors | Prompt |
|---|---|---|---|
| Spring | Emerald + Peach Pink | Light Blue, Pale Yellow | Spring greenery, blossoms on branches |
| Summer | Jade Green + Lotus Pink | Sky Blue, White | Lush summer, shady green trees |
| Autumn | Crimson + Golden Yellow | Amber, Light Gray | Deep autumn, falling red leaves |
| Winter | Pure White + Frost Silver | Deep Blue, Light Gray | Snow-covered winter, serene winter day |

---

## III. Urban Architecture

### Spatial Specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Style | Modern urban, office buildings/residential/commercial areas | Modern urban architecture |
| Material | Primarily glass/concrete/metal (cel-ified) | Modern materials, cel animation rendering |
| Color Tone | Warm tones dominant, twilight glow atmosphere | Warm tones, twilight atmosphere |
| Depth | Foreground/midground/background layers (cel depth) | Foreground {element}, midground {element}, background {element} |
| Texture | Clear architectural textures (cel-ified) | Clear textures, cel animation texture |
| Lighting | Primarily natural light (window light/streetlights), soft light | Natural light, soft lighting |
| Lens Feel | Shallow depth of field blurring foreground/background, cel lens effect | shallow depth of field, cel lens |
| Imperfection | Buildings show signs of use, natural wear (cel-ified) | Natural wear, cel processing |

### Urban Type Quick Reference

| Type | Core Elements | Atmosphere Words |
|---|---|---|
| Commercial District | Skyscrapers/shops/billboards | Bustling, modern urban |
| Residential Area | Apartment buildings/gardens/streets | Cozy living, quiet community |
| Office Area | Office buildings/parking lots/coffee areas | Workplace atmosphere, business vibe |
| Park/Green Space | Trees/walkways/benches | Leisurely relaxation, lush greenery |
| Transportation Hub | Subway stations/bus stops/pedestrian bridges | Busy traffic, urban pulse |
| Riverside/Lakeside | Water bodies/walkways/lighting | Romantic atmosphere, beautiful water views |

---

## IV. Indoor/Outdoor Scenes

### Indoor Space Specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Style | Office/café/apartment/convenience store | Modern interior style |
| Material | Flooring/walls/furniture (cel-ified) | Modern materials, cel animation rendering |
| Color Tone | Warm tones dominant, twilight atmosphere | Warm tones, cozy atmosphere |
| Depth | Foreground/midground/background layers | Foreground {element}, midground {element}, background {element} |
| Texture | Clear material textures (cel-ified) | Clear textures, cel animation texture |
| Lighting | Natural light + indoor lighting, soft light | Natural light, indoor lighting, soft |
| Lens Feel | Shallow depth of field blurring foreground/background | shallow depth of field, interior lens |
| Imperfection | Furniture shows signs of use, natural wear | Natural wear, cel processing |

### Indoor Type Quick Reference

| Type | Core Elements | Atmosphere Words |
|---|---|---|
| Office | Office desks/computers/documents/chairs | Workplace atmosphere, business vibe |
| Café | Coffee tables/seats/bar/decorations | Cozy and pleasant, leisurely atmosphere |
| Apartment | Sofas/beds/bookshelves/decorations | Homey warmth, comfortable space |
| Convenience Store | Shelves/cashier counter/beverages | Life convenience, everyday feel |
| Restaurant | Dining tables/chairs/kitchen | Dining atmosphere, cozy meal |
| Gym | Treadmills/equipment/mirrors | Sports atmosphere, vibrant space |

---

## V. Main View Specifications

### View Definition

> Single-frame main view, shot from the most representative angle of the scene, carrying spatial narrative and compositional focus.

| Item | Constraint | Prompt |
|---|---|---|
| Perspective | Natural observation perspective, composition best reflects the scene subject and depth | hero shot, representative angle |
| Eye Level | Default eye-level height; special scenes may use high/low angles | eye level (default) |
| Composition | Subject centered or follows rule of thirds, clear foreground/midground/background layers | balanced composition |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Single frame (not collage, not multi-view, not split-screen) |
| Characters | **Strictly prohibited: any characters, human silhouettes, or human outlines** |
| Consistency | Unified style/material/color tone/lighting (cel-ified processing) |
| Lighting | Single light source logic, consistent light and shadow direction (cel-ified processing) |
| Aspect Ratio | Default 16:9 (or as set by the caller) |

---

## VI. Prompt Templates
```
3D animation render, cinematic lighting, vibrant cel-shaded texture, high-detail materials, pleasant and healing atmosphere, cartoon urban style, high-detail cartoon materials, moderate cartoon proportions, warm color palette, 8K ultra-high definition, cinematic composition, soft light and shadow layers, bright cartoon rendering style, warm and healing, urban scene main view concept art,
anime style, cel-shaded, 3D animation render,
film lighting, warm sunset lighting,
scene design sheet, environment concept art, no people, no characters, no human figures,
{indoor/outdoor}, {scene type}, {architectural style}, {season + time},
Foreground: {elements}, Midground: {elements}, Background: {elements},
{color tone description}, {weather/atmosphere elements},
{material description}, aerial perspective, clear textures, cel-shaded treatment,
natural wear and tear on materials, lived-in wear, natural fabric draping (cel-shaded),
natural light diffusion, volumetric light, cel-shaded light effects, cel-shaded shadows,
single frame composition, natural observation perspective, composition represents the main subject of the scene and displays foreground/midground/background layers,
no people in the frame,
cel-shaded rendering style, soft light and shadow, moderate cartoon proportions, high-detail cartoon materials,
warm color palette, dusk glow atmosphere, pleasant and healing atmosphere,
8K ultra-high definition, cinematic composition,
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
| R6 | Must include 3D animation rendering keywords (cel-shaded, 3D animation render, anime style) |
| R7 | Must include lens optical characteristics (at least one of shallow depth of field / lens vignette / bokeh, with cel-shaded treatment) |
| R8 | Materials must show natural wear/aging traces; pristine, flawless "CG feel" is prohibited, but cel-shaded presentation is required |
| R9 | Consistency in cel-shaded rendering style must be maintained; mixing realistic elements is prohibited |
| R10 | Must include warm-tone color palette and twilight glow atmosphere keywords |
| R11 | Must include 8K ultra-high definition and cinematic composition keywords |

### Prohibited

| ID | Prohibition |
|---|---|
| X1 | Pure white/pure black/no scene background |
| X2 | Extreme weather (storm/lightning/blizzard, unless required by the plot, and must be cel-shaded) |
| X3 | Scene lacks depth/layers |
| X4 | Vegetation/weather contradicts the season |
| X5 | Any characters, human figures, human silhouettes, or human outlines appear |
| X6 | The image is spliced into a multi-view/grid/split-screen layout |
| X7 | 3D rendering/CG animation/game engine texture (terms like 3D render, CGI, Unreal Engine, Unity are prohibited), but cel-shaded animation rendering must be explicitly stated |
| X8 | Materials are too clean/perfect, with no signs of use or aging (avoid "plastic feel"), cel-shaded treatment is required |
| X9 | Lighting is too uniform/flat, lacking depth-of-field blur and lens optical characteristics |
| X10 | Use of realistic photography terms (e.g., real photography, photorealistic, RAW photo, etc.) |
| X11 | Ancient/futuristic elements, non-modern urban style |
| X12 | Cool tones/night dominant tones, non-warm tones/twilight atmosphere |