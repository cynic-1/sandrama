---
name: liveaction_urban_scene_derivative
description: Live-action urban scene derivative asset generation · Constraint Manual
metaData: liveaction_urban_art_skills
---

# Live-action Urban Scene Derivative Asset Generation · Constraint Manual

---

## I. Derivation Principles

> Deriving live-action urban scenes is not about "changing camera angles for a rendered scene," but about "the same real location being filmed again from different positions, at different times, and under different weather conditions."

1. **Spatial Anchoring** — The core spatial structure of the same scene must remain recognizable in all variants. The angle changes, the light changes, the weather changes—but at a glance, it is still "the same place."
2. **Focal Length Narrative** — Filming the same scene with different focal lengths tells different stories. A wide angle says "the lonely relationship between this person and the city," a medium focal length says "look at this corner," and a telephoto says "what is out there in the distance."
3. **Time of Day as Emotion** — An office in the morning light and an office in the late night are the same space with two different emotions. When the time changes, the light changes, and the narrative function of the scene changes too—it is not simply a matter of swapping a sky texture.
4. **Weather as Story** — The same street is everyday in sunny weather, melancholic in the rain, and romantic or lonely in the snow. Weather is the emotional filter of the scene, but it is not a filter—it is a real optical and environmental change.
5. **Single-View Photography** — Every derivative variant is an independent single panoramic photograph. It shares the same space as the original scene concept art, but can have a different focal length, time of day, or weather.

---

## II. Focal Length and Composition Variants—Different Gaze on the Same Space

### Composition Variant Definitions

| Variant | Focal Length | Range | Narrative Function | Prompt |
|---|---|---|---|---|
| Wide-angle Overview | 24-28mm | Full scene + surrounding urban environment | Establishes spatial location, presents the relationship between space and city, makes a person appear small if present | 24mm wide-angle overview, complete space + environmental relationship, full depth of field f/8-f/11 |
| Standard Panorama | 35mm | Complete presentation of the scene | Human-eye equivalent perspective, objective record of the location, the most "honest" composition | 35mm standard panorama, human-eye perspective, complete appearance of the location |
| Medium Shot Focus | 50mm | Core functional area of the scene / most recognizable local detail | Focuses on the "heart" of the space—the workstation area of an office, the bar of a café, the intersection of a street | 50mm medium shot focus, core narrative area of the space |
| Close-up Detail | 85mm | A local detail in the space—a window, a lamp, a table | Directs the gaze to a narrative detail in the space—the cup of coffee not yet finished, the blanket thrown on the sofa | 85mm close-up, narrative detail of the space, shallow depth of field to highlight the subject |
| Same Angle Different Height | — | Change in viewing height | High angle—fate's gaze; Eye level—human perspective; Low angle—oppression or sublimity | Low angle looking up / High angle looking down, maintain original spatial structure |

### Focal Length Derivation Rules

| Derivation from Wide-angle Overview | Unchanged | Changed Items |
|---|---|---|
| Wide-angle → Standard Panorama | Spatial structure, light source logic, time/weather, usage traces | Focal length narrowed to 35mm, frame range reduced but space unchanged, perspective closer to human eye |
| Standard Panorama → Medium Shot Focus | Material texture, light direction, color tone, usage traces | Focal length narrowed to 50mm, cropped to focus on core area, depth of field moderately shallower |
| Medium Shot → Close-up Detail | Material texture, prop positions, light direction | Focal length 85mm, extremely shallow depth of field, background naturally blurred, highlights narrative details in the space |

---

## III. Time-of-Day Variants—Time as Makeup for Space

> The same space, with light from different times of day, becomes a completely different place. Below is the behavior of real light sources at key times.

| Time of Day | Light Recipe | Emotional Change in Space | Prompt |
|---|---|---|---|
| Early Morning | Low-angle warm white morning light, thin mist diffusion in the air, space slightly cool, not fully awake | Serene, poised, not yet filled with the order of the day—"everything has not yet begun" | Early morning scene, low-angle morning light slanting in, space slightly cold and not yet warm, quiet without people |
| Morning | Sun rises, cold white and clear, sharp shadows, clear materials | Establishment of order—the "default" state of the daytime scene | Morning sunlight, bright and clear space, location in daily operation |
| Noon | Top light dominant, short and dense shadows, strong material reflection if outdoors | Sense of pause—the gap of lunch break, the peak of the daily cycle | Noon top light, space enters a daytime pause, quiet or brief relaxation at noon |
| Afternoon | Sun shifts west, warm tones gradually strengthen, slanting light through windows or trees creates long shadows and light spots | Languid, time slows down, everything in the afternoon is soft—"the longest part of the day" | Afternoon slanting light, long shadows crossing the space, scattered light spots, languid and warm afternoon |
| Golden Hour | Extremely warm low-angle golden-orange light, shadows at their longest, all surfaces gilded | Cherished—the most precious light of the day, fleeting warmth | Golden hour, warm golden slanting light filling the space, all surfaces edged in gold, fleeting warmth |
| Blue Hour | Sky deep blue-purple, natural light extremely dark and cold, artificial lights just turning on, cold and warm coexist | Transition—day is over, night has not fully taken over, the shortest poetic moment | Blue hour, deep blue-purple sky through windows and doors, artificial lights just on, coexistence of cold and warm light |
| Late Night | Relying only on artificial light—a desk lamp, street light outside the window, cold light from a screen | Lonely or intimate—the world is quiet, the space belongs to one person (or to no one) | Late night scene, single warm light source from desk lamp/street light outside, most areas sinking into shadows, extremely serene |

### Time-of-Day Derivation Rules

| Derivation from Baseline Time | Unchanged | Changed Items |
|---|---|---|
| Daytime → Dusk (Golden Hour) | Spatial structure, furniture/prop positions, building appearance | Light source color warms to 2800-3500K, shadows lengthen, bright surfaces gilded, artificial lights gradually turn on |
| Daytime → Night | Spatial structure, furniture/prop positions, building appearance | Overall exposure reduced, artificial lights fully on, neon/street/indoor lights become main light sources, outside window changes from day to night |
| Indoor Daytime → Indoor Late Night | Spatial structure, furnishing positions | Only a few light sources left (one desk lamp/street light outside), large areas sinking into shadows, sense of intimacy or loneliness |

---

## IV. Weather Variants—Weather as Emotion for Space

> The same street, the same window, different weather makes it a different story.

| Weather | Spatial Change | Emotion | Prompt |
|---|---|---|---|
| Sunny | Sharp light and shadow, clear materials, saturated colors | Everyday, bright, open | Sunny scene, abundant sunlight, distinct light and shadow, clear material texture |
| Cloudy/Overcast | Soft light without hard shadows, overall cool gray, even light | Restrained, calm, or a precursor to oppression | Overcast soft light, no hard shadows, even diffused light, overall cool gray tone |
| Light Mist | Distant view naturally blurred, near view clear, visible humidity in the air | Hazy, uncertain, poetic | Scene in light mist, distant view fading into mist, near view clear, visible humidity in the air |
| Light Rain | Rain streaks on window glass, reflections on wet ground, water droplets on outdoor metal/leaves | Melancholy, contemplative, romantic, or a story turning point | Scene in light rain, rain streaks on window glass, natural reflection on wet ground, air clear and cool-moist |
| Heavy Rain | Thick rain curtain, reduced outdoor visibility, puddles and splashes on the ground, visualization of rain sound | Isolation—indoor is a refuge, outdoor is nowhere to escape | Heavy rain scene, thick rain curtain outside, puddles and splashes on the ground, sense of isolation between indoor and outdoor |
| After Rain | Everything wet, puddles still on the ground, air clear, reflections distinct, sunlight may shine through clouds | Rebirth, clarity, emotional cleansing | After-rain scene, moist air, puddles reflecting the sky, clarity after everything has been washed |
| Light Snow | Snowflakes falling, fine white accumulation, warm light through the snow curtain, visible trajectory of falling snow in the air | Serene, gentle, romantic | Light snow scene, sparse snowflakes falling, thin white on the ground, warm light through falling snow, serene and gentle |
| Heavy Snow | Snow covering surfaces, white dominant, visualization of sound being absorbed | Lonely or romantic—the world simplified to black and white | Heavy snow scene, snow covering ground and building edges, world simplified by white, lonely or romantic |

### Weather Derivation Rules

| Derivation from Sunny | Unchanged | Changed Items |
|---|---|---|
| Sunny → Light Mist | Spatial structure, building appearance, prop positions | Add mist layering, blur distant view, reduce saturation, light source produces visible beams (real Tyndall effect, not VFX) |
| Sunny → Light Rain | Spatial structure, building appearance, prop positions | Add rain streaks outdoors, add real rain streaks to glass, wet slippery reflection on ground, cool color tone, water droplets on vegetation |
| Sunny → Snow | Spatial structure, building appearance, prop positions | Add falling snow/snow accumulation, cool white color tone, increased contrast of warm light sources, snow on branches/window sills |
| Indoor Sunny → Indoor Rainy | Spatial structure, furnishing positions | Outside window becomes rainy scene, rain streaks on window glass, indoor light becomes darker and cooler, emotion changes from bright to melancholic |

---

## V. Single-View Photography Standards—Shared by All Derivative Variants

> Every derivative variant is an independent **single** panoramic photograph. Not a 2×2 four-view, not a multi-angle collage.

| Item | Photography Requirement |
|---|---|
| Spatial Structure | **Same space** as the original scene concept art. Building structure/furniture furnishing/prop positions remain unchanged in principle—what changes is the focal length/time/weather |
| Focal Length | Based on variant type (Wide-angle Overview → Close-up Detail), use 24mm/35mm/50mm/85mm |
| Depth of Field | Wide-angle Overview → full depth of field f/8-f/11; Medium Shot → moderately shallow depth of field f/4-f/5.6; Close-up Detail → shallow depth of field f/2.8 |
| Light Source | Derived from real light—time of day corresponds to sun altitude and color temperature, weather corresponds to atmospheric scattering and occlusion, indoor corresponds to window light and artificial lights |
| People | **Strictly prohibited to appear in any variant: any people, human shadows, or human body outlines** |
| Aspect Ratio | 16:9 or 3:2 widescreen, consistent with the original scene concept art |
| Color | Driven by actual light source color temperature, no filters applied |

---

## VI. Prompt Templates

### Focal Length Variant

Live-action urban scene derivative photography, based on the same space of the original scene {scene_name}, single static space photography, not 3D render not CG,
{Wide-angle Overview/Standard Panorama/Medium Shot Focus/Close-up Detail}, {24mm/35mm/50mm/85mm},
maintain original scene spatial structure, furnishing positions, and light source logic unchanged,
{focal length description}, {depth of field description}, {composition focus area description},
{time of day + weather}, {light source behavior description},
space without people—strictly prohibited to appear any people, human shadows, or human body outlines,
real photography quality, 35mm full-frame photography texture, single space photography

### Time-of-Day Variant

Live-action urban scene derivative photography, based on the same space of the original scene {scene_name},
same camera position, same focal length, only time of day changes—from original time to {new_time},
maintain spatial structure and prop positions completely unchanged,
{light of new time: direction, color temperature, intensity},
{emotional change in space for new time: serene/warm/lonely/poetic},
{switching and brightness changes of artificial light sources},
space without people—strictly prohibited to appear any people, human shadows, or human body outlines,
real photography quality, single space photography

### Weather Variant

Live-action urban scene derivative photography, based on the same space of the original scene {scene_name},
same camera position, same focal length, same time of day—only weather changes to {new_weather},
maintain spatial structure and prop positions completely unchanged,
{visual features of new weather: rain streaks/snow/mist/wet ground/rain marks},
{real changes on material surfaces due to weather: metal water film/glass rain marks/ground water reflection/vegetation water droplets/snow accumulation},
{emotional change brought by weather},
space without people—strictly prohibited to appear any people, human shadows, or human body outlines,
real photography quality, single space photography

> **Usage Note**: Focal length variants, time-of-day variants, and weather variants can be used individually or in combination (e.g., "Afternoon + Light Rain + Medium Shot"). Dimensions not involved should have their corresponding fields omitted in that prompt.

### Negative Avoidance Prompts

3D render, 3D modeling, CGI, Unreal Engine, Blender, PBR material, volumetric lighting, ambient occlusion, ray tracing, game engine, cartoon, anime, 2D, illustration, hand drawn, painting,
four views, grid layout, 2x2, turnaround, orthographic view, blueprint, multiple angles,
showroom, brand new, pristine, perfect, unrealistically clean, sterile, empty without reason,
people, person, human figure, silhouette, shadow figure, body, crowd,
dramatic sky replacement, unrealistic sky, composite, fake weather, Photoshop effect, filter effect,
Ancient Style, Ancient, Xianxia, Wuxia, Republican Era, Cyberpunk, Sci-Fi, Western Fantasy, Medieval, Otherworld, Non-Chinese Cities,
text, watermark, signature, logo, border, frame, UI element, HUD

---

## VII. Constraint Rules

### Must Adhere

| No. | Rule |
|---|---|
| R1 | The spatial structure of the scene must remain recognizable in all derivative variants—the same place, cannot become another place |
| R2 | Light sources in time-of-day variants must conform to real physics—sun altitude determines color temperature and shadow length, artificial lights switch on logically |
| R3 | Weather variants must synchronously adapt to real physical changes on material surfaces—glass rain marks/ground water reflection/vegetation water droplets/snow accumulation |
| R4 | Must be a **single** panoramic photograph—single view, not 2×2 four-view, not multi-angle, not turnaround |
| R5 | Must declare the light source origin—where the light comes from, what the color temperature is, what the light source is—cannot be sourceless global illumination |
| R6 | Must maintain the usage traces of the original space—time and weather variations cannot "wash away" the wear and sense of age of the space |
| R7 | **Strictly prohibited to appear in any variant: any people, human shadows, or human body outlines** |
| R8 | Must declare the core anchoring of "live-action photography + not 3D render not CG" |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Strictly prohibited from making unrecognizable changes to the spatial structure—changing time/weather/focal length cannot "change the place" |
| X2 | Strictly prohibited from using any CG terms such as "3D render / 3D modeling / CG / UE engine / Blender / PBR material / volumetric light / AO" |
| X3 | Strictly prohibited from using non-photography media such as "2D hand-drawn / illustration / animation / anime" |
| X4 | Strictly prohibited from using "four views / 2×2 grid / multi-angle / turnaround / orthographic view / blueprint"—only single view |
| X5 | Strictly prohibited from using non-contemporary urban scenes such as "ancient style/ancient/xianxia/wuxia/Republic of China/cyberpunk/sci-fi/Western fantasy/otherworld" |
| X6 | Strictly prohibited from appearing any people/human shadows/human body outlines/silhouettes/limbs |
| X7 | Strictly prohibited from "sky texture replacement-style weather change/PS composite feel/filter application"—weather changes must be real optical and environmental changes |
| X8 | Strictly prohibited from "unknown light source origin/directionless global uniform illumination" |
| X9 | Strictly prohibited from "time-of-day variants not adjusting artificial light source switching and brightness"—dusk must have lights on, late night cannot be fully lit |
| X10 | Strictly prohibited from "weather variants erasing the daily usage traces of the space"—the wall after rain is still mottled, the ground under snow still has wear |
| X11 | Strictly prohibited from "overexposed dead white/dead black shadows/no layers" |
| X12 | Strictly prohibited from "watermark / text / LOGO / signature / border / AI generation traces" |