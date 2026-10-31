---
name: director_planning_liveaction_urban
description: Live-action urban constraints — Defines global constraints for the live-action urban style in color grading, lighting schemes, texture direction, scene spatial elements, music selection, and ambient sound, with deep adaptation for Seedance 2.0. Applicable to any narrative type.
metaData: director_skills, seedance2.0_adapted
---

# Live-Action Urban Constraints · Live-Action Urban Filmmaking · Technique Reference

---

## I. Color Grading System and Visual Tone

- **Color Base** — The entire film uses Urban White (#F5F2EC), Misty Gray (#9EA2A8), and Navy Blue (#2D3A4A) as base colors. Overall color temperature is neutral-to-warm during the day (5000-5800K) and a mix of warm and cool at night (warm streetlights 2800-3200K + cool environment 6000-8000K). Saturation is medium-low (35-55%), presenting a restrained urban color palette that feels "cinematic but not filtered"—colors derive from actual light sources, not post-production grading.
- **Light Source as Color Palette** — Instead of pairing "primary/secondary colors," the visual color is driven by the color temperature and direction of the light sources. Morning light 3500-4500K (warm white), noon 5500-6500K (cool white, clear), golden hour 2800-3500K (warm gold), blue hour 8000-10000K (deep blue-purple), sodium streetlights 2000-2200K (warm orange-yellow), convenience store fluorescent lights 4000-5000K (cool white).
- **Warm/Cool Narrative Contrast** — Warm light (morning light/sunset/desk lamps/sodium streetlights) is used for warmth, healing, intimacy, and everyday life segments; cool light (noon daylight/overcast diffuse light/blue hour/fluorescent lights) is used for restraint, alienation, loneliness, and suspense segments. Key transitions can imply emotional shifts by switching the color temperature of the light source.
- **Light Source First Principle** — Segment planning must first determine "where the light comes from and its color temperature," then determine the visual color tone. Avoid "this shot looks good in color but the light source doesn't make sense."
- **Forbidden Color Ranges** — High-saturation fluorescent colors, cheap filter grading (e.g., teal-orange presets/sepia presets), CG neon oversaturation, and abnormal color casts not produced by real light sources.

---

## II. Lighting Scheme System

- **Lighting as Narrative** — 7 lighting schemes correspond to different emotional segments. During the director's planning phase, the lighting tone direction is determined at the segment level, not specified shot-by-shot. Each scheme must specify "light source + color temperature + light ratio" to ensure it can be physically simulated by Seedance 2.0.
- **Live-Action Cinematography Lighting Characteristics** — Natural light window scheduling, practical light sources (desk lamps/streetlights/screens/neon/car lights), environmental reflections (wet surfaces/glass curtain walls/water surfaces), the subtle breathing feel of handheld camera shake, and depth-of-field changes to guide attention—these are the core lighting techniques for the live-action urban style.

| Scheme | Scheme Name | Light Source Recipe | Light Ratio | Applicable Emotion |
|---|---|---|---|---|
| A | Urban Gilded | Sunset window light entering at 45° side angle (3000-3500K) + environmental fill light (sky reflection 5500K) | 1:3 Medium Contrast | Highlight moments, elite settings, warm memories, important meetings |
| B | Daytime Clarity | Large-area window light/sky diffuse light (5000-5500K), no hard shadows, softened by curtains | 1:1.5 Low Contrast | Daily relaxation, urban strolls, healing freshness, daytime office |
| C | Warmth of Everyday Life | Desk lamp/pendant light/sodium streetlight warm-toned key light (2800-3200K), shadows retain detail | 1:4 Warm Tone Wrap | Home daily life, street life, warm scenes, late-night privacy |
| D | Cool Sharp Shadows | Side hard light (window light cool white 5000K or cool-toned streetlight) + deep shadows | 1:8 High Contrast | Urban suspense, confrontation conflict, cold oppression, high-pressure moments |
| E | Indoor Diffusion | Window light natural diffusion (4500-5500K) + indoor ceiling light/screen cool light fill, soft shadows | 1:2 Soft Transition | Indoor daytime, workplace office, solitary contemplation, healing stillness |
| F | Rainy Night Clarity | Wet road surface reflecting streetlights (warm 2800K light spots + cool 6000K environment), rain streaks on window glass scattering light | 1:6 Warm/Cool Coexistence | Rainy night solitude, longing in isolation, artistic melancholy, suspense setup |
| G | Blue Hour Poem | Sky diffusion 20 minutes after sunset (8000-10000K deep blue-purple) + initial artificial warm light points | 1:5 Cool Key, Warm Points | Transitional moments, inner monologue, poetic blank space, ending closure |

- **Warm/Cool Light Allocation** — Warm light (morning light/sunset/desk lamps/sodium streetlights) is suitable for warm healing, elite highlights, and street life segments; cool light (noon daylight/overcast diffusion/blue hour/fluorescent lights) is suitable for restrained alienation, suspense confrontation, and cold solitude segments. The warm/cool switching point is the narrative turning point.
- **Atmosphere Direction Mapping** — The atmosphere direction of each scene should map to one of the lighting schemes (A-G) above. If the narrative requires a mixed scheme (e.g., F+G), the dominant light source must be specified.
- **Seedance 2.0 Lighting Adaptation Points**: Light source names should be understandable by AI ("sunset window light" is better than "warm volumetric light"). Light ratio numbers help the model establish light/dark awareness. In multi-light-source scenes, the hierarchy of key light + fill light + ambient light must be clear.

---

## III. Texture Direction — The Real World Before the Camera

> The sole standard for live-action urban texture: the material behavior captured by the camera, not material parameters generated by a rendering engine.

- **Skin Texture** — Visible pores, natural oily sheen on the T-zone, natural redness on the cheekbones, slight darkness around the eyes—evidence of "living" real skin. Seedance 2.0 prompts should use "visible skin pores, natural skin texture, not airbrushed, real skin texture" instead of "subsurface scattering/SSS" used in 3D projects.
- **Hair Texture** — Loose strands naturally falling on the forehead and back of the neck, hair strands with natural clumping and separation, hair edges forming a translucent warm-colored outline in backlight, natural state when blown by wind or wet. Seedance 2.0 uses "flyaway hair strands, natural hair movement, backlit hair rim light" instead of "physically accurate hair simulation."
- **Fabric Texture** — Soft, slightly wrinkled cotton, diagonal twill texture and fading of denim, loop texture of knitwear, patina and crease marks on leather. Clothes have evidence of "being worn"—hems naturally slightly wrinkled, cuffs showing signs of putting on and taking off. Seedance 2.0 uses "fabric texture with subtle wear, natural fabric drape, lived-in clothing."
- **Building Materials** — Water stains and micro-cracks on concrete walls, reflections and handprints on glass curtain walls, worn patina on metal handrails, fine scratches on tiled floors, usage marks on wooden surfaces. Seedance 2.0 uses "weathered building materials, real urban surfaces, not showroom clean."
- **Aging Texture Supreme** — Materials cannot be too clean or perfect. Life traces (daily clutter on desks, residual stickers on walls, floor wear) are not defects but the foundation of spatial narrative. "Brand-new model rooms" and "flawless renderings" are prohibited.
- **Seedance 2.0 Texture Adaptation Points**: Avoid CG terms like "PBR materials," "physically accurate rendering," and "8K textures." Use "real texture, natural material surface, visible wear and use marks, not CGI" instead. When describing minor flaws, use "subtle" rather than modeling terms like "micro-detail."

---

## IV. Live-Action Urban Scene Spatial Elements

Scene elements unique to contemporary Chinese urban environments and their visual narrative function in Seedance 2.0 video:

- **Windows/Floor-to-ceiling Windows/Glass Partitions** — The most core compositional and lighting prop in live-action urban filmmaking. Windows are the entry point for light—the direction and color temperature of window light determine the entire indoor lighting logic. Glass partitions create multi-layered spaces of "separation and transparency" (foreground → glass → midground → glass → background). In Seedance 2.0, focus on describing "light entering through window at specific angle" to help the model understand the light source direction.
- **Streets/Street Trees/Crosswalks/Traffic Flow** — The spatial skeleton of outdoor scenes. Empty long street = loneliness, heavy traffic = urban alienation, wet road surface after rain reflecting streetlights = emotional intensity. In Seedance 2.0, street scenes must specify optical descriptions executable by the model, such as "wet road surface reflecting streetlights" or "dry pavement with long afternoon shadows."
- **Streetlights/Window Light/Screen Light/Car Lights** — The core light source narrative carriers of the urban world. Warm yellow streetlights (2000-2200K sodium or 3000K LED) = the body temperature of the night; cool white fluorescent lights in convenience stores (4000-5000K) = an island of safety in the late-night city; cold blue phone screen light reflecting on a face = lonely companionship in moments of solitude.
- **Old City Alleys/High-rise Apartments/Office Buildings/Subway Stations** — Four narrative containers of urban architecture. Mottled walls and overhead wires in old cities = memory of street life; overlooking the city from high-rise floor-to-ceiling windows = elite loneliness or sense of control; layered reflections of office building glass partitions = workplace order and alienation; subway station fluorescent cool light + tunnel darkness = a pause in urban flow.
- **Use Empty Shots for Transitions Between Segments** — Empty shots serve as emotional buffers; do not use hard cuts. Empty shots of the same space at different times/weather (e.g., rainy street → sunny street) can imply the passage of time. In Seedance 2.0, empty shots must specify the light source logic; empty shots also have emotion.
- **Use Visuals Instead of Dialogue for Turning Points** — Sudden lighting changes (window light blocked by clouds → space suddenly becomes dark), shot size jump cuts (medium shot → extreme close-up), spatial transitions (indoor → street view outside window), focus drift—narrative is completed by the camera.

---

## V. Live-Action Urban Music and Ambient Sound

### 5.1 Music Instrument Selection

Live-action urban music is primarily acoustic instruments with restrained electronic elements, pursuing a "presence that doesn't steal the show":

- **Piano** — Core instrument for clear, cold solitude and delicate, warm segments. The best state is single-note repetition or sparse chords—the silence between notes is as important as the notes themselves.
- **String Ensemble** — Driving force for emotional accumulation and release segments. Low-to-mid range padding (warm but not oppressive), high range used for light touches at emotional peaks.
- **Acoustic Guitar** — Base tone for daily relaxation, healing, and urban stroll segments. Texture of fingerpicking or light chord strumming, inherently carrying the warmth of "afternoon sunlight."
- **Electric Guitar (Clean/Mild Overdrive)** — Emotional amplifier for urban nightlife, solitary street walks, and mild melancholy segments. Single-note melodic lines or ambient arpeggios; use distortion cautiously.
- **Electronic Ambient Pad** — Low-frequency padding for urban suspense, nightlife transitions, and time passage segments. A foundational presence that "can be ignored but feels wrong if removed."
- **Harmonica/Accordion** — Accent instruments for street life and nostalgic memory segments. Should not be used throughout; local appearances serve as narrative signals.
- **Light Electronic Beat** — Rhythmic base for urban rhythm segments (commute montages, fast cuts of city night scenes). Breakbeats or simple electronic drums, not exceeding 80 BPM.
- Use with caution: Full orchestral tutti, heavy metal distortion, high-energy electronic dance music—these will turn live-action urban into "the music acting."

### 5.2 Music Combination Strategy

| Emotional Stage | Instrument Combination |
|---|---|
| Steady Opening/Daily Narrative | Piano solo or Piano + very light Electronic Pad |
| Warm Healing/Relaxed Daily | Acoustic Guitar + Piano + light String padding |
| Workplace Elite/Highlight Moment | Piano + String mid-to-high range + light Electronic Beat |
| Lonely Solitude/Longing | Piano sparse single notes or Piano + Harmonica accent |
| Emotional Turn/Fateful Moment | String ensemble crescendo + Piano closure |
| Suspense Setup/Urban Night | Electronic Ambient Pad + light Electronic Beat + Electric Guitar clean single notes |
| Street Life/Nostalgia | Acoustic Guitar + Accordion/Harmonica accent + very light Strings |
| Ending/Aftertaste | Piano single notes gradually sparse → Ambient sound solo |

### 5.3 Live-Action Urban Ambient Sound

> Ambient sound is the "auditory material" of live-action urban scenes, determining the immersion of the space. Label 1-2 core ambient sounds for each scene.

**Core Ambient Sound Layers:**
- **Indoor Ambient Sound**: Low hum of air conditioning/keyboard typing/elevator chime/dripping faucet/refrigerator compressor running/curtains lightly blown by wind/clock ticking
- **Outdoor Ambient Sound**: Tire noise of traffic/distant voices/wind passing through buildings/rustling of street tree leaves/birdsong/rain hitting car windows and road surface/muffled construction sounds/bike-share locking sounds
- **Transitional Ambient Sound**: Subway arrival broadcast and braking sounds/mall background music and crowd noise/elevator operation and door opening chime/corridor footsteps from far to near
- **Silence is also an Ambient Sound**: Late-night apartment with only the low-frequency hum of the refrigerator, 5 AM street with no traffic sounds—this "absence of sound" is itself narrative.

Sound Design Philosophy:
- Ambient sound is not pasted on; it is the sound inherent to the scene.
- "Removing" ambient sound at key moments creates more emotional impact than "adding" effects.
- Changes in ambient sound can imply spatial transitions—walking from a noisy street into a quiet convenience store, the sound suddenly "becomes clean."

---## VI. Seedance 2.0 Specific Adaptation

### 6.1 Core Adaptation Principles

> Seedance 2.0 is a video model that prioritizes realistic physical simulation. The live-action urban style is naturally compatible with Seedance 2.0—but "cinematography terminology" must be translated into "physical instructions" that the model can execute.

| Adaptation Dimension | Generic Prompt Wording | Seedance 2.0 Optimized Wording |
|---|---|---|
| Light Source Description | Warm window light | Afternoon sunlight enters at a 45° angle from the window on the right side of the frame, color temperature approx. 4500K warm white, casting elongated window frame shadows on the ground |
| Expression | Gentle expression | Corners of the mouth naturally lift slightly, fine smile lines appear at the outer corners of the eyes, natural light points visible in the eyes when looking at the other person |
| Action | Turn around | Slowly rotate approximately 90 degrees to the right, center of gravity shifts from the left foot to the right foot, total duration approx. 1.5 seconds, hem of the garment sways naturally during the turn |
| Material | Realistic skin texture | Pores on the cheeks faintly visible, natural oily micro-reflection in the T-zone, not retouched or silicone-like texture |
| Weather | Rainy street | Light rain, wet road surface reflects warm yellow light spots from street lamps, rain streaks on window glass slightly blur the street scene outside |

### 6.2 Image Quality Baseline (Seedance 2.0 Live-Action Urban Exclusive)
1080p, live-action film quality, realistic skin texture, natural light and shadow, 24fps film frame rate, handheld breathing feel or stabilizer flow, realistic grain structure, not CG, not rendered
### 6.3 Light Effect Instructions (Seedance 2.0 Live-Action Urban Exclusive, select based on lighting scheme)

| Lighting Scheme | Seedance 2.0 Light Effect Instruction |
|---|---|
| A Urban Gilded | Sunset natural light entering at 45° side angle, color temperature approx. 3000-3500K warm gold, sky ambient light 5500K as shadow fill, light ratio approx. 1:3 |
| B Daytime Clear | Large-area window light diffusion, color temperature approx. 5000-5500K neutral cool white, curtains soften the light, no hard shadows, light ratio approx. 1:1.5 low contrast |
| C Warm Hearth Light | Desk lamp warm light as main source, color temperature 2800-3200K, shadow areas retain object contour details, light ratio approx. 1:4 warm tone wrap |
| D Cool Sharp Shadow | Side hard window light, cool white 5000K main light, deep shadows with details, light ratio approx. 1:8 high contrast |
| E Indoor Diffusion | Window light natural diffusion 4500-5500K as main light, indoor ceiling light neutral fill, soft shadow transitions, light ratio approx. 1:2 |
| F Rainy Night Clear Glow | Wet ground reflects warm-toned light spots from street lamps 2800K, ambient cool tone 6000K, rain streaks on window glass scatter light, light ratio approx. 1:6 coexistence of cool and warm |
| G Blue-Toned Poem | Post-sunset sky deep blue-purple diffusion approx. 8000-10000K, artificial warm light points on the ground just lighting up 2800K, light ratio approx. 1:5 cool main warm points |

### 6.4 Physical Logic Concretization (Live-Action Urban Exclusive)

> Seedance 2.0 can understand the physical laws of the real world. All actions must be described using specific numerical values and physical manifestations. Words like "then," "subsequently," or "appropriately" are prohibited.

| Scene | Abstract Wording (Prohibited) | Seedance 2.0 Concrete Wording |
|---|---|---|
| Rising to leave | Then stands up | Hands press on the chair armrests, knees move forward, after 0.5 seconds the body's center of gravity shifts forward to both feet, after another 1 second stands straight—total duration approx. 2 seconds, pause for 0.5 seconds after standing straight |
| Turning head | Turns head to look out the window | Head slowly rotates approximately 45 degrees to the right, gaze moves from the coffee cup on the desk to the city skyline outside the window, rotation process approx. 1 second, gaze remains fixed in the distance after reaching position |
| Pouring coffee | Poured a cup of coffee | Right hand holds the coffee pot handle, spout tilted approx. 30 degrees, dark brown coffee liquid pours into a white ceramic cup, liquid level rises from the bottom of the cup to two-thirds of the cup body, total duration approx. 3 seconds, steam slowly rises from the cup rim |
| Walking in rain | Walking alone in the rain | Walking slowly on the wet road surface, pace approx. one step per second, each step creates fine ripples where the sole contacts the water surface, warm yellow light from street lamps forms elongated reflections on the wet road surface, rain streaks visible under street lamps |

### 6.5 Spatial Logic Concretization (Live-Action Urban Exclusive)

**Spatial Coordinate Definition Standard:**
- **Horizontal Position**: Left third of the frame / Center of the frame / Right side of the frame, or relative to fixed scene objects ("1 meter from the floor-to-ceiling window")
- **Depth Position**: Foreground (1-2 meters from camera) / Midground (3-5 meters from camera) / Background / Distant view outside the window
- **Between Characters**: Relative distance and orientation ("A and B face each other, approx. 0.8 meters apart, A slightly to the left, B slightly to the right")
- **Person-Space Relationship**: Distance and direction relative to fixed scene objects

**Position Continuity Example:**
[End of Clip A]
A stands in front of the floor-to-ceiling window, approx. 0.5 meters from the window, facing outside, positioned slightly right of center in the frame.
Body slightly rotates right approx. 20 degrees, right hand lifts to place the coffee cup on the side table to the right.

[Start of Clip B]
A's right hand has just moved away from the cup, the cup is on the side table. A still stands in front of the floor-to-ceiling window, position unchanged.
The sky outside the window has shifted from dusk to the blue hour, the indoor desk lamp is now on.
### 6.6 @reference Mandatory Anchoring Syntax

> Seedance 2.0 character/scene/prop consistency relies on the @reference syntax.
Character Anchoring: Must reference @ImageX, specifying the usage
Example: @Image1_Workplace_Woman_Commuting_Suit as character appearance reference, @Image2_Office_Building_Floor-to-ceiling_Window_Office as scene environment reference

Scene Anchoring: Must reference the corresponding scene asset's @ImageX
Prop Anchoring: If there are handheld or core props, reference the corresponding @ImageX

### 6.7 Multi-Shot Sequence Best Practices (Seedance 2.0 Live-Action Urban)

> Seedance 2.0 recommends 2-3 shots per clip, total duration 4-12 seconds.
[Shot 1: Medium Shot · Static] In front of the office floor-to-ceiling window, A holds a coffee cup in profile looking outside.
Afternoon window light enters at 45° from the right (approx. 4500K), casting long window frame shadows on the ground.
A is positioned slightly right of center in the frame, approx. 3 meters from the camera. Duration approx. 4 seconds.

[Cut to]
[Shot 2: Close-Up · Slow Push] A's face slowly turns from a 45° side angle toward the camera direction.
Corners of the mouth lift slightly, gaze retracts from outside the window, natural highlight points from window light visible in the eyes.
Facial pores and skin texture visible, not retouched. Duration approx. 3 seconds.

[Cut to]
[Shot 3: Extreme Close-Up · Static] A's hand places the coffee cup on the side table, the bottom of the cup makes a light sound upon contact with the wooden table surface.
Window light gilds the cup rim with a warm gold rim light. Duration approx. 2 seconds.

### 6.8 Live-Action Urban Seedance 2.0 Negative Prompts (No more than 7)
3D rendering, CG animation, plastic fake face, retouched skin, non-live-action texture, floating objects, screen flicker

---

## VII. Global Narrative Constraints

- **Empty Shots as Emotion** — It is recommended to use scene empty shots (the same space under different lighting) as emotional buffers between narrative segments. An empty shot is not "nothing to shoot," but "letting the audience catch their breath"
- **Continuity and Change of Light** — Within the same space, the angle of window light during daytime segments should change continuously with time. If a dialogue scene spans thirty minutes, the position of the window light should have shifted somewhat—Seedance 2.0 can understand this "reasonable inconsistency"
- **Character Light Source Consistency** — The direction of facial light sources for all characters within the same shot must be unified. If the main light comes from the left, the left side of everyone's face should be the lit side
- **Avoid "Over-Directing"** — Live-action urban seeks "life captured by the camera," not "plot arranged by the screenwriter." Allow uncontrollable daily details in the frame (wind blowing curtains, a passing cat, slight movement in the coffee cup)
- **The Value of Silence** — Not every shot needs to be filled with action and dialogue. A 3-second static close-up—where the character simply breathes, blinks, and exists—is often more powerful than any line of dialogue

---

## VIII. Quick Decision Card

### Emotion → Lighting Scheme + Music Quick Reference

| Emotion | Lighting Scheme | Music Direction |
|---|---|---|
| Warm Daily Life | C Warm Hearth Light or E Indoor Diffusion | Acoustic Guitar + Piano |
| Workplace Restraint | E Indoor Diffusion or B Daytime Clear | Piano + Light Strings |
| Lonely Longing | F Rainy Night Clear Glow or G Blue-Toned Poem | Sparse Piano Single Notes |
| Highlight Moment | A Urban Gilded | Piano + String Ensemble |
| Suspense Tension | D Cool Sharp Shadow | Electronic Pad + Light Beat |
| Healing Rebirth | B Daytime Clear | Acoustic Guitar + Piano |
| Urban Hearth | C Warm Hearth Light | Acoustic Guitar + Accordion |
| Poetic White Space | G Blue-Toned Poem | Piano to Ambient Solo |