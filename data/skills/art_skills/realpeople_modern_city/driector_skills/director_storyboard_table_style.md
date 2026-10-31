---
name: liveaction_urban_storyboard_table
description: Live-action urban storyboard constraints — Defines lighting and atmosphere standards, photographic texture, action rhythm, environmental dynamics, camera movement, and transition prohibitions for the live-action urban style in storyboards, with deep adaptation for Seedance 2.0. Applicable to any urban narrative type.
metaData: director_skills, seedance2.0_adapted
---

# Live-Action Urban Storyboard Constraints · Live-Action Urban · Technique Reference

---

## I. Storyboard Positioning

The storyboard is the core tool for directors to translate scripts into camera language. This constraint targets Seedance 2.0 video generation; all descriptions of light, action, and space use concrete, model-executable language. No abstract emotional summaries are used, and no rendering parameters that the model cannot interpret are written.

---

## II. Seedance 2.0 Description Iron Rules

> All descriptions in the live-action urban storyboard must adhere to the following translation principles—translating "director intent" into "AI-executable physical instructions."

| Prohibited Abstract Expression | Seedance 2.0 Concrete Replacement |
|---|---|
| She is very sad | Eyebrows and eyes droop, gaze unfocused looking at the ground, corners of the mouth naturally sink, right hand unconsciously rubs the left wrist |
| The sunlight is very good | Afternoon sunlight enters diagonally from the left window at 45° (approx. 4500K warm white), casting rectangular light patches of the window frame on the ground |
| The street is very lively | Warm yellow lights of street-facing shops are fully on (approx. 3000K), five pedestrians walk slowly along the pedestrian street, one of whom is pushing a stroller |
| He turns and leaves | Rotates slowly to the right by about 90 degrees, facing the right side of the frame, right foot steps forward about 0.6 meters, left foot follows, total duration about 2 seconds |
| The atmosphere is very oppressive | Hard side window light (cold white approx. 5000K) from a single source hits diagonally, the rest of the room is deep dark but with faint outlines visible, light ratio approx. 1:8 |
| Wind blows the curtains | White sheer curtains are inflated by a light breeze from outside by about 15cm, then fall back, repeating in a cycle of about 2 seconds |

---

## III. Light and Atmosphere — Seedance 2.0 Physical Light Source Description

### 3.1 Unified Lighting Within a Scene

A scene should not contain more than two core lighting schemes, unless there is a narrative-driven change in light sources (e.g., someone turns on a desk lamp, daylight after sunrise overtakes indoor lights, moving from indoors to outdoors). Light source changes must be annotated in the storyboard with the triggering event.

### 3.2 Light Source Syntax (Must be included in every shot)
[Light Source] Key Light: {Light Source Type}, {Direction}, {Color Temperature Value K}, {Hard/Soft}
[Light Source] Fill/Ambient Light: {Light Source Type}, {Direction}, {Color Temperature Value K}
[Light Ratio] Approx. 1:{X}
### 3.3 Emotion → Light Source Matrix

| Emotion | Light Source Recipe (Can be directly filled into Seedance 2.0) | Visual Keywords |
|---|---|---|
| Workplace Restraint | Cold white key light (5000-5500K) entering from the floor-to-ceiling window direction, screen cold light (6500K) filling the face. Light ratio approx. 1:3 | Neutral to cool, clear materials |
| Daily Relaxation | Large area window light diffusion (5000K), softened by curtains. Light ratio approx. 1:1.5 low contrast | Transparent, low contrast, healing |
| Warm Intimacy | Desk lamp warm light as key source (2800-3200K), shadows retain object outlines. Light ratio approx. 1:4 | Warm tone wrapping, private |
| Urban Street Life | Mixed multiple light sources—sodium street lamps warm yellow (2000-2200K) as primary, shop cold white (4000K) locally counteracting. Light ratio approx. 1:5 | Warm tone dominant, lively |
| Lonely Rainy Night | Wet road surface reflects street lamp warm yellow light patches (2800K), ambient cold tone (6000K sky diffusion), rain streaks on window glass scatter light. Light ratio approx. 1:6 | Coexistence of cold and warm, poetic loneliness |
| Suspense Tension | Hard side window light (cold white 5000K) single source, high light ratio approx. 1:8, shadows deep but with faint outlines. Light ratio approx. 1:8 | Oppressive, uncertain |
| Healing Rebirth | Sufficient natural light diffusion (5000-5500K), sky light + ground reflection fill light. Light ratio approx. 1:1.5 | High-key transparent, hope |
| Late Night Vulnerability | Single warm light source—desk lamp/street lamp outside window (2800-3200K) forming island-style lighting, one side of face lit, one side dark. Light ratio approx. 1:8 | Minimal light source, private vulnerability |

### 3.4 Cold/Warm Tones and Narrative Stages

- **Cold Light Dominant** (5000K+): Workplace restraint, suspense tension, cool solitude, rainy night
- **Warm Light Dominant** (2000-3500K): Warm intimacy, urban street life, home daily life, golden hour
- **Cold/Warm Coexistence**: Transitional moments (blue hour + initial warm lights), rainy night (cold environment + warm light patches)
- **Light Source Change = Narrative Signal**: Sky outside window gradients from daytime cold white to evening warm gold = passage of time; moving from office cold white to street warm yellow street lamps = scene and emotion switch

### 3.5 Seedance 2.0 Light and Shadow Adaptation Points

- Color temperature numbers help the model calibrate white balance tendency: `color temperature approx. 3200K` is better than `warm light`
- Light ratio numbers help the model establish light/dark awareness: `light ratio approx. 1:4` is better than `soft shadows`
- Light sources must have a clear origin: `entering diagonally from the left window at 45°` is better than `side light`
- Describe the reflection path of ambient light: `wet road surface reflects street lamp warm yellow light patches` is better than `ground has warm-colored reflection`

---

## IV. Environmental Dynamics — Letting the Frame Breathe

### 4.1 Dynamic Density

Arrange at least one shot with environmental dynamics every 3-4 shots. Static dialogue scenes are no exception—at least one shot must have leaves moving outside the window, steam rising from a coffee cup, or curtains being moved by a light breeze.

### 4.2 Urban Environmental Dynamic Elements (Executable in Seedance 2.0)

| Scene | Describable Environmental Dynamics |
|---|---|
| Indoor | Curtains lightly inflated by a breeze by about 10cm then fall back (approx. 2-second cycle), steam slowly rising from the coffee cup rim, a small insect flying through the desk lamp's illumination range, car lights from outside occasionally sweeping across the ceiling |
| Street | Street tree leaves rustling, distant pedestrians waiting at the crosswalk then crossing, a bicycle riding slowly through the mid-ground, ripples created by wheels splashing through puddles on the roadside |
| Café/Restaurant | Coffee machine steam rising, light and shadow at window seats changing brightness as clouds move outside, repetitive action of bar staff wiping cups, wind chime at the entrance blown by wind from opening the door |
| Office | Venetian blind strip shadows slowly moving with the angle of light outside the window, computer screensaver switching, occasional "gurgle" bubble sound from the water dispenser, printer spitting out paper |
| Late Night Venues | Convenience store automatic doors opening and closing repeatedly, traffic lights casting alternating red/green shadows on the sidewalk, distant car lights occasionally sweeping a band of light across the ceiling |
| Rooftop | Clothes on the clothesline being blown by wind, lights on the distant city skyline occasionally turning on or off, clouds moving slowly in the sky |

### 4.3 Seedance 2.0 Environmental Dynamic Description Standards

- Dynamics must have specific trajectories and speeds: `leaves blown by wind, micro-amplitude shaking about 2-3 times per second` is better than `trees are moving`
- Light source dynamics must be consistent with spatial light logic: `when clouds cover the sun, the indoor window light area shrinks by about 40%, lasting about 3 seconds before recovering`
- Prohibited sourceless dynamics: no wind = curtains do not move. No open window indoors = no wind

---

## V. Character Action Rhythm — Seedance 2.0 Physical Logic Concretization

### 5.1 Action Description Iron Rules

All character actions must describe: **trajectory + speed/duration + body part coordination + impact on surrounding objects**.

### 5.2 Daily Action Concrete Library

| Action | Seedance 2.0 Executable Description |
|---|---|
| Rising | Hands press on chair armrests, knees move forward, after 0.5 seconds body center of gravity shifts forward to both feet, after another 1 second stands straight—total duration about 2 seconds, pause about 0.5 seconds after standing straight |
| Turning Head | Head rotates slowly to the right by about 30 degrees, gaze moves from desk documents to outside the window, rotation process about 1 second, gaze stays in the distance for about 1 second after reaching position |
| Drinking Coffee | Right hand holds cup handle, cup rim close to lips, tilts cup by about 15 degrees, liquid touches upper lip, small sip for about 1 second, cup lowers back to original position about 1 second |
| Walking to Window | Rises from office chair (about 2 seconds), walks at constant speed to the floor-to-ceiling window on the right side of the frame for about 4 steps (approx. 3 meters distance, taking about 3 seconds), stops about 0.5 meters from the window |
| Sitting Down | Body leans forward with knees slightly bent, buttocks contact chair surface, chair surface depresses by about 2cm (spring/foam deformation), back naturally leans against chair back—total duration about 1.5 seconds |
| Placing Object | Right hand holding coffee cup lowers from chest height to desk, cup bottom contacts wooden desk surface making a light collision sound, fingers release from cup handle—total duration about 1 second |
| Pushing Door to Enter | Right hand grips door handle and turns down by about 30 degrees, pushes door open inward by about 70 degrees, body enters with the door, right foot crosses the threshold first—total duration about 2 seconds |
| Looking at Phone | Right hand picks up phone from desk (length approx. 15cm), thumb taps lower part of screen to wake it, screen cold light reflects on right side of face, eyes slightly squint to focus on screen—total duration about 3 seconds |
| Dressing/Putting on Coat | Right hand extends into right sleeve, left hand extends back into left sleeve, both shoulders expand slightly backward to fit the coat to shoulders, collar naturally flips out—total duration about 4 seconds |
| Embracing | A steps forward about 0.5 meters, arms wrap around B's shoulders and back, hands gently overlap on B's back, face close to B's ear side, hold for about 3 seconds |

### 5.3 Action Rhythm and Narrative Scenes

- **Daily Narrative/Drama**: Actions are steady and restrained, each micro-action annotated with duration and trajectory. Rhythm is relaxed—not slow, but "not rushing"
- **Emotional Fluctuation Scenes**: Action amplitude and speed slightly increase. Characters may unconsciously increase the frequency of fingers tapping the desk during conversation, breathing causes more noticeable shoulder movement
- **Conflict Scenes**: Actions are crisp and decisive, but still have physical trajectories. Hits/pushes must be specific to "right hand pushes on the front of the other person's left shoulder, the other person's center of gravity shifts backward by about 20cm"
- Prohibited: Rapid action stacking without narrative reason, teleportation without physical logic, vague descriptions like "made a gesture"

### 5.4 Costume Dynamics

Live-action costume dynamics are a natural asset of the frame—not "cloth simulation parameters," but "windbreaker hem blown up by wind by about 20 degrees," "one end of scarf slides off the shoulder," "skirt hem sways left and right lightly by about 10cm with steps." Annotate costume dynamic details in the storyboard frame description.

---

## VI. Spatial Logic Concretization — Seedance 2.0 Spatial Coordinate System

### 6.1 Spatial Information That Must Be Declared in Every Shot
Horizontal Position: Left/Center/Right of frame, or at the left one-third of the frame
Depth Position: {Value} meters from camera, Foreground/Mid-ground/Background
Relationship between Character and Scene: {Value} meters from {Fixed Object}
(If two or more people) Relative distance and orientation between Character A and B
### 6.2 Positioning Continuity Example
【End of Segment A】
A stands at the floor-to-ceiling window, about 0.5 meters from the window, facing outside, located slightly right of center in the frame, about 4 meters from the camera.
Outside the window is the afternoon city skyline, sunlight enters diagonally from the right window.
A's right hand holds a coffee cup at chest level, cup is about 15cm from lips.

【Start of Segment B】
A's coffee cup has just lowered about 10cm from the lips, cup is still at chest position. A is still standing at the floor-to-ceiling window (position unchanged).
The sky outside has turned to blue hour—sky is deep blue-purple, city building outline lights and street lamps are on.
Indoor desk lamp is on (side table on the left of the frame), warm yellow light (approx. 3000K) illuminates A's left cheek.
### 6.3 Spatial Changes Must Be Concrete

| Abstract (Prohibited) | Seedance 2.0 Concrete |
|---|---|
| She approached | A walks at constant speed from the background of the frame (approx. 5 meters from camera, door frame position) toward the camera for 4 steps (approx. 3 meters), stops about 2 meters from the camera—takes about 4 seconds |
| Two people face each other | A is located slightly left of center in the frame (approx. 3 meters from camera), B is located slightly right of center in the frame (approx. 3 meters from camera), facing each other, distance approx. 0.8 meters |
| From indoors to outdoors | A walks from indoors (approx. 3 meters from camera) to the door, pushes the door open (door rotates inward by about 80 degrees), right foot crosses the threshold, enters the outdoor street—outdoor street lamp warm yellow light instantly replaces indoor cold white fluorescent light |

---

## VII. Camera Movement Standards — Seedance 2.0 Camera Motion

### 7.1 Allowed Camera Movements

| Camera Movement | Seedance 2.0 Description | Applicable Scenes |
|---|---|---|
| Static | Camera fixed, frame static | Dialogue, daily life, empty shots, emotional gaze |
| Handheld Micro-Shake | Camera has slight irregular shaking (amplitude approx. ±2cm), simulating the breathing feel of handheld shooting | Emotional fluctuation, street walking, intimate following, subjective perspective |
| Stabilizer Flow | Camera moves smoothly and at constant speed, no shaking | City roaming, character entrance, space display, transitions |
| Slow Push | Camera slowly pushes toward the subject, push rate approx. 0.3 meters per second | Emotional heating, truth approaching, attention focus |
| Slow Pull | Camera slowly pulls back, pull rate approx. 0.3 meters per second | Farewell, conclusion, revealing the full picture |
| Tracking | Camera maintains approx. 2 meters distance and moves synchronously with the character | Walking follow, city tracking |
| Pan | Camera rotates horizontally/vertically in place | Gaze shift, spatial relationship explanation |

### 7.2 Prohibited Camera Movements

- Rapid whip pans, fast pushes/pulls without narrative purpose (push/pull rate exceeding 1 meter per second)
- Intense handheld shaking lasting more than 3 seconds (unless subjective impact/dizziness narrative)
- Illogical fancy transitions—wipe, rotation, venetian blind, page turn, and other special effect transitions
- Unreasoned 360-degree camera rotation

### 7.3 Live-Action Urban Camera Movement Philosophy

- Static camera position is the first choice—let the audience see real people existing naturally in real space
- Handheld micro-shake is used in emotional segments—but shaking amplitude does not exceed the conventional range of film documentary style
- The start and end frames of moving shots must be stable, the movement process must be at constant speed—sudden acceleration or abrupt stops are prohibited

---

## VIII. Transition Standards

### 8.1 Allowed Transition Methods

| Transition | Visual Execution | Narrative Function |
|---|---|---|
| Hard Cut | Direct switch | Shot switching within the same scene (default) |
| Light/Shadow Match Transition | Two scenes switch under similar light/shadow logic | Passage of time, parallel narrative. Example: Morning light outside window in Scene A → Morning light outside window in Scene B |
| Space Match Transition | Two spaces echo in composition or elements | Scene jump. Example: The moment the office door closes → The moment the apartment door opens |
| Empty Shot Transition | Insert scene empty shot (3-5 seconds) | Emotional buffer, chapter division, hint of time passage |
| Focus Transition | Previous shot focus moves from subject to background, next shot gradually focuses on subject from blurred background | Space switch, shift of attention |

### 8.2 Prohibited Transitions

- Pure visual effect transitions (page turn, wipe, venetian blind, mosaic)
- Rotation/zoom transitions without narrative logic
- Using more than two transition methods within the same scene

---

## IX. Audio-Visual Synchronization Planning (Seedance 2.0 Exclusive)

### 9.1 Ambient Sound Annotation Standards

Annotate 1-2 core ambient sounds for each scene, written in the ambient sound column of the storyboard:

| Scene | Suggested Ambient Sound |
|---|---|
| Office | Light keyboard tapping / Low hum of air conditioning / Distant printer |
| Café | Coffee machine steam / Light clinking of cups / Faint background voices |
| Street Daytime | Car tire noise / Distant voices / Wind rustling through street tree leaves |
| Street Rainy Night | Rain hitting car windows and road surface / Occasional sound of passing cars splashing water |
| Home Nighttime | Low-frequency hum of refrigerator / Occasional car sounds outside / Clock ticking |
| Rooftop | Wind sound / Faint hum of distant city |
| Subway Station | Arrival announcements and braking sounds / Footsteps of crowd |

### 9.2 Audio-Visual Synchronization Annotation

Annotate key audio-visual synchronization points in the storyboard:
- `t=2s` Light sound of cup bottom contacting desk surface when coffee cup is placed
- `t=5s` Slight creak of door hinges when door is pushed open—character enters indoors, outdoor street sound is instantly muffled by the door
- `t=8s` Ambulance siren heard from outside the window in the distance—character looks up toward the window for about 1 second

---

## X. Seedance 2.0 Storyboard Card Template

Each shot uses the following card format, filled shot by shot in the storyboard:
【Shot X】Duration: {Value}s | Shot Size: {Extreme Close-up/Close-up/Medium Close-up/Medium Shot/Full Shot/Extreme Long Shot/Empty Shot}

Frame Description:
{Character Dynamics—includes specific action trajectory, duration, body part coordination}
{Character Expression—includes gaze direction, micro-expression details}
{Light Source Logic—key light type + direction + color temperature K + light ratio}
{Environmental Details—includes specific props, material surfaces, usage traces}
{Costume Dynamics—includes wind-blown/action-linked costume performance if any}

Spatial Coordinates:
Horizontal {Left/Center/Right of frame, specific distance from edge} | Depth {Value meters from camera}
{Distance relationship with fixed scene objects}
{If two or more people, relative distance and orientation between characters}

Camera Movement: {Static/Handheld Micro-Shake/Slow Push/Slow Pull/Tracking/Pan}
{Specific rate and start/end positions of camera movement}

Transition: {Hard Cut/Empty Shot Transition/Light-Shadow Match/Space Match—annotate connection points between previous and next shots}

Ambient Sound: {1-2 core ambient sounds}

Seedance 2.0 Key Anchoring:
Character Anchoring: @ImageX_{Character Name} {Styling Description}
Scene Anchoring: @ImageX {Scene Name} {Space Description}
{Prop Anchoring: @ImageX {Prop Name}—if there are core handheld/interactive props}
---

## XI. Empty Shot Usage Standards

### 11.1 Empty Shots Are Not "Nothing to Shoot"

Empty shots are emotional containers. Every empty shot must have a narrative purpose and specific visual content:

| Empty Shot Type | Narrative Purpose | Example |
|---|---|---|
| Scene Establishment | New space appears for the first time—let the audience see clearly what this place is | Office extreme long shot: workstation arrangement, floor-to-ceiling windows, city outside |
| Emotional Buffer | Catching breath after a high-emotion segment | Raindrops sliding down the glass outside the window, speed approx. 2cm per second |
| Time Passage | Hint that time has passed | Sky outside the same window gradients from afternoon bright blue to blue hour deep purple |
| Metaphorical Blank | Using objects to express emotion | Half a cup of unfinished coffee on the desk, lipstick mark on the rim |
| Transition Connection | Natural transition between two spaces | Fluorescent tube in the stairwell—previous scene is the office, next scene is the rooftop |

### 11.2 Empty Shot Seedance 2.0 Description Standards

Empty shots must also follow the description iron rules of light source + texture + dynamics: Afternoon window light enters diagonally from the right (approx. 4500K), casting venetian blind strip light patches on the empty conference table,
light patches slowly change width and position as clouds move outside, becoming completely dark after about 5 seconds—a cloud blocked the sun.
The desk has fine scratches and water cup ring marks left by the meeting.

---## XII. Storyboard Quality Self-Check Checklist

After completing the storyboard for each scene, the director performs a point-by-point self-check:

| Check Item | Pass Criteria |
|---|---|
| Traceable Light Source | Every shot can answer "where does the light come from and what is its color temperature" |
| Executable Action | Every action has a trajectory, duration, and body part specified |
| Locatable Space | Every shot marks the character's horizontal and depth position |
| Position Continuity | The position/posture of the same person in adjacent shots can be connected |
| Dynamic Environment | At least one shot in every 3-4 shots has environmental dynamics |
| Non-Vague Tone | No non-executable descriptions such as "she is beautiful" or "the atmosphere is good" |
| Zero CG Terminology | No CG terms such as PBR/SSR/AO/volumetric light/next-gen |
| Complete @reference | All characters/scenes/core props have anchored references marked |