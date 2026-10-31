---
name: storyboard_table_techniques
description: >-
  General storyboard table techniques reference.
  Covers storyboard splitting principles, establishing shot and shot merging rules, visual continuity iron rules, field filling guidelines, and transition rules for general storyboard design, for Agent activation.
---
# General Storyboard Table Techniques

This document serves as a general techniques reference for storyboard table design, applicable to all Agent scenarios requiring the construction of storyboard tables.

---

## Storyboard Splitting Principles

**New Storyboard Entry**: Scene/location switch, time jump, subject switch, significant change in shot size, important action node.

**No New Entry Needed**: Continuous dialogue within the same frame, subtle expression changes or minor actions.

Granularity: One independent frame = one storyboard entry. Approximately 50–100 characters of script correspond to 1–2 storyboard entries. Transitions/transitions with clear descriptions should also be split separately.

---

## Establishing Shot and Shot Merging Rules (Preventing Redundancy)

**Establishing Shot**: Each new scene/paragraph's establishing shot should be completed in a maximum of 1–2 shots. Splitting into 3 or more fragments is prohibited.
- Recommended practice: 1 wide shot with a slow push (completing establishing + subject introduction in one shot), or 1 extreme wide establishing shot + 1 full shot introducing the subject.
- Prohibited practice: Redundant three-part structure of shooting an empty environment shot → then a local detail shot → then the character arriving.

**Shot Merging Self-Check**:
- Do not split what can be conveyed in one shot—if a shot with camera movement can simultaneously complete establishing + introduction, do not split it into two.
- Shots describing different parts of the same space consecutively (gate → vines → side room) should be merged into one shot, using the frame description to cover multiple spatial layers.
- Purely decorative shots (showing only environmental details with no narrative progression) should be merged into shots with narrative function.
- **Director's Mindset Check**: Self-check after writing—if a real director would combine 2–3 adjacent shots into one, it indicates the split is too fine and should be merged.

**One-Take Strategy**: When adjacent shots have **continuous action changes, mild scene changes (displacement within the same scene), or gradual changes in shooting angle**, you can mark "one-take" in `cameraMove` or `description`, merging multiple fragment shots into one continuous long take.
- **Applicable Scenarios**: Character walking through space, following action from point A to point B, orbiting around a character to show the environment, slow push from establishing to subject close-up, etc.
- **Marking Method**: In `cameraMove`, specify the camera path (e.g., "One-take: slow push wide shot → follow move to courtyard → end on full shot"), and in `description`, describe the content of the opening and closing frames.
- **Duration Relaxation**: One-take shots can exceed the single-shot 6s limit due to continuous information updates, but should not exceed 12s.
- **Risk Warning**: One-take increases the difficulty of frame generation (high continuity requirement). Use only when the benefit to narrative fluidity significantly outweighs the cost of fragmented cuts; do not overuse.

**Golden 6-Second Rule**: If no new information (dialogue/action/subject change) appears for a cumulative 6s in shots without dialogue, audience attention breaks. Pay special attention to establishing + transition shots; prefer merging and compression over dragging.

---

## Visual Continuity Iron Rules (Comply throughout storyboard design)

**① Action Continuity**: The position, action progress, and orientation of characters between adjacent shots must be physically logical. If the previous shot has a hand extended halfway, the next shot must continue from that halfway state; it cannot suddenly retract.

**② Shot Size Progression Law**: Shot size changes follow gradual focus or gradual release—
- Gradual Focus: Wide → Full → Medium → Close-up → Extreme Close-up (emotional tightening)
- Gradual Release: Extreme Close-up → Close-up → Medium → Wide (emotional release)
- Prohibited: Consecutive same shot sizes without narrative reason (3+ consecutive shots of the same size = visual fatigue)

**③ Axis Conservation**: 180-degree line principle—in dialogue/confrontation scenes, character screen positions are fixed on the same side throughout the film; crossing the axis is prohibited.

**④ Orientation Spatial Logic**: In dialogue, both parties face each other; when operating an object, face the object; when looking at a distant object, face the distance. Indiscriminate facing of the camera is prohibited.

**⑤ Information Control Awareness**: Each shot must be aware of "what the audience knows and does not know at this moment"—
- Show hands but not face = suspense; sound before image = anticipation; only show back = alienation; full reveal = climax payoff.

**⑥ Beat Density Constraint**: The number of actions/events in a single shot must match its duration to prevent overcrowding—
- 1 physical action = 1 beat, 1 camera move = 1 beat, 1 short line (≤10 characters) = 1 beat.
- 2–3s shot: max 1 beat; 4–6s shot: max 2 beats; 7s+ shot: max 3 beats.

**⑦ Head-Tail Safety Zone**: The first 0.5s and last 0.5s of each shot are safety transition zones; do not place key actions or dialogue starting points here. The first 0.5s is for environmental establishment or static subject appearance; the last 0.5s is for natural action closure.

---

## Field Filling Guidelines

**description** (Frame Description): One sentence describing the core content of the frame (15–50 characters), including visible **subject + action/state + environment space**. Do not write psychological activities. Must reflect spatial layers (at least two layers of foreground/midground/background). E.g., "Foreground gauze curtain sways slightly, midground Marquis's carriage arrives at the abandoned courtyard of Luoyan Mountain," "Cheng Mumu jumps off the carriage, surveys the dilapidated courtyard, distant mountains fade into twilight."

> **🚫 Prohibition of Light/Shadow/Tone Descriptions**: `description` and all fields **must not** contain light/shadow-related terms such as `light`/`shadow`/`color temperature`/`tone`/`warm color`/`cold color`/`backlight`/`light-dark`/`high contrast`. Lighting is entirely handled automatically by the scene asset image referenced by the shot—special lighting needs such as night/rain/firelight should be expressed by referencing the corresponding **scene derivative** (night version/rain version/firelight version). For example, "in the afterglow" in the original text is also a violation and should be removed.

**shotSize** (Shot Size):

| Shot Size | Description | Narrative Semantics |
|------|------|---------|
| Extreme Wide | Full view of environment | Establishing / Loneliness / Smallness |
| Wide | Relationship between scene and character | Spatial relationship / Atmosphere rendering |
| Full | Full body of character and environment | Character entrance / Full-body appearance |
| Medium | Above knees | Daily narrative / Dialogue |
| Close-up | Above chest | Emotional conveyance / Dialogue focus |
| Extreme Close-up | Face or partial object | Emotional intensification / Key prop |
| Macro | Extreme detail | Emotional nuke / Decisive moment (Use sparingly, 2–3 times per film) |

**cameraMove** (Camera Movement): Fill `static` if no camera movement. Camera movements must specify start and end directions.

| Movement | Description | Narrative Semantics |
|------|------|---------|
| Push | From far to near, emphasizing subject | Emotional progression / Discovery / Peeping |
| Pull | From near to far, showing environment | Emotional detachment / Reveal full view / Parting |
| Pan | Fixed position rotating sweep | Environment exposition / Search |
| Track | Following subject movement | Companionship / Tracking |
| High Angle | From top down | Observer / Smallness / Overview |
| Low Angle | From bottom up | Heroic / Intimidation |

**action** (Character Action): Specific action description of characters/subjects in the frame (5–40 characters). Fill `empty shot` if no character action. Format is `(connection note) action description`. Requirements:
- **Connection note at the beginning**: Enclose in half-width parentheses and place at the very front of the action description. For the first shot, write `(opening)`; for other shots, write `(continuing from previous shot: connecting action)`, e.g., `(continuing from previous shot: slow push end~group freeze)`, `(continuing from previous shot: arm half-raised state→continue raising)`.
- **Action Chain Writing**: Write continuous physical action chain + speed rhythm ("slowly raise right hand→fingertips tremble slightly→suddenly clench fist"). Do not just write the static final state. For multiple characters, separate their actions with `;`, arranged in the order of associated asset names, e.g., `Li Wu's right hand strokes sleeve cuff→left arm pulls rabbit doll into embrace; Nie Wei's gaze locks onto the rabbit direction`.
- **No orientation/spatial relationship in this column**: Orientation and spatial relationships have been split into independent columns (`orientation` / `spatialRelation`); do not repeat them in `action` to avoid conflict between `|` and markdown table column separators.

**orientation** (Orientation): Independent column, marking the facial orientation of characters in the frame. Format:
- For multiple characters, list in `associateAssetsNames` order, separated by `;`: `Character A-3/4 front facing right; Character B-3/4 front facing left`.
- For a single character, the character name can be omitted: `facing right`.
- Fill `—` for empty shots and pure object close-ups.
- Orientation must comply with the 180° axis rule (locked within the same scene; changes must provide a turn/head-turn connecting action in `action` and synchronously update this column). See the orientation reference table below for specific values.

**spatialRelation** (Spatial Relationship): Independent column, relative positioning of characters in multi-character frames. Format:
- List in `associateAssetsNames` order, separated by `、`: `Character A(position), Character B(position)`.
- Position values are in the spatial relationship reference table below (9 positions).
- For single-character shots, fill only one item `Character(position)` or `—`; fill `—` for pure object close-ups and empty shots.
- Must be consistent with orientation, shot size, and camera movement (a character facing right should have their gaze/interaction target positioned on their right); positions of characters in the same scene/group must be stable; movement must provide a connecting action in `action` and synchronously update this column.

**Complete Field Example** (5-person group shot):
- `action`: `(opening) Wide shot slowly pushes toward the group, five people positioned loosely—Li Wu slightly left, left arm bent holding rabbit doll; Nie Wei's gaze attracted by that white mass`
- `orientation`: `Li Wu-3/4 front facing right; Nie Wei-3/4 front facing left; He Cenyu-3/4 front facing left; Qiu Tong-3/4 front facing left; Anna-front`
- `spatialRelation`: `Li Wu(left front), Anna(right front), Nie Wei(left back), He Cenyu(center back), Qiu Tong(right back)`

**Orientation Reference Table** (for filling the orientation column):

| Orientation Value | Meaning | Typical Scenario |
|---------|------|---------|
| Facing right | Horizontally facing the right side of the frame | Character on the left of the 180° line, facing a target on the right |
| Facing left | Horizontally facing the left side of the frame | Character on the right of the 180° line, facing a target on the left |
| Front | Directly facing the camera | Confession, declaration, looking directly at the audience |
| 3/4 front facing right | 3/4 side slightly right facing the camera | Dialogue subject (character on the left of the frame) |
| 3/4 front facing left | 3/4 side slightly left facing the camera | Dialogue subject (character on the right of the frame)
| Profile facing right | Profile silhouette facing right | Monologue, contemplation |
| Profile facing left | Profile silhouette facing left | Monologue, contemplation |
| 3/4 back facing right | 3/4 side-back slightly right | Alienation, departure |
| 3/4 back facing left | 3/4 side-back slightly left | Alienation, departure |
| Back | Back to the camera | Mysterious entrance, parting, gazing into the distance |

> Can overlay pitch modifiers: `facing right slightly looking up`, `3/4 front facing left slightly looking down`.

**Spatial Relationship Reference Table** (for filling the spatialRelation column, mandatory for multi-character scenes):

The frame is divided into a 3×3 position grid of "left/center/right" columns × "front/center/back" layers. Front = close to camera/foreground layer, Back = far from camera/background layer; Front/Back can also express height differences (e.g., a kneeling person under a high-angle view occupies "center front", a standing person applying pressure occupies "center back").

| Position Value | Meaning | Typical Usage |
|---------|------|---------|
| Left Front | Left side of frame, close to camera | Subject in left foreground, often the dominant speaker |
| Center Front | Center of frame, close to camera | Single subject centered, character obscured by foreground half-body |
| Right Front | Right side of frame, close to camera | Subject in right foreground |
| Left Center | Left side of frame, midground layer | Group shot mid-left position |
| Center Center | Center of frame, midground layer | Core subject centered, dialogue leader |
| Right Center | Right side of frame, midground layer | Group shot mid-right position |
| Left Back | Left side of frame, back (background) | Back row left position, companion |
| Center Back | Center of frame, back | Back row center, obscured by foreground or elevated position |
| Right Back | Right side of frame, back | Back row right position, observer |

**emotion** (Emotion): The emotional tone conveyed by the frame (2–10 characters), using concrete, perceptible descriptions. E.g., "Cold arrogance and contempt," "Pain and despair," "Tension and oppression." Vague words like "happy" or "sad" are prohibited.

**scene**: The name of the scene where this storyboard entry is located, corresponding to the scene in the script.

**associateAssetsNames**: List of **visible** asset names in the frame (including characters/objects appearing only partially), to facilitate intuitive confirmation of associated content.

**duration**: Basic reference—Close-up/expression 2–3s · Dialogue close-up 3–5s · Full-body appearance 3–5s · Action 2–4s · Wide/empty shot/transition 3–5s · Complex scene 5–8s. **Single shot must not exceed 8s**; if exceeded, it must be split.

**When dialogue is included, the duration must be sufficient to finish all dialogue and match the emotional speech rate**:

| Emotional State | Speech Rate Reference | Example Scenario |
|---------|---------|----------|
| Anger, urgency, argument | ~4 chars/sec | Scolding, urging, panic |
| Normal dialogue, narration | ~3 chars/sec | Daily conversation, calm statement |
| Sadness, deep affection, contemplation | ~2 chars/sec | Confession, mourning, memory |
| Whisper, weakness, dying | ~2 chars/sec | Faint voice, whispering in the ear |

Calculation method: Dialogue character count ÷ corresponding speech rate (rounded up) = base seconds, then add pause margin:
- Each punctuation pause in dialogue (comma, period, ellipsis, dash, etc.) +0.3–0.5s
- Emotional turn/tone change +0.5s
- Final `duration` = base seconds + cumulative pauses + 1s safety margin (rounded up)

**lines**: Original character dialogue, **must be copied verbatim from the script without a single character changed**. For multiple characters, arrange in `Character Name: Dialogue` format. Fill `no dialogue` if there is no dialogue. One line of dialogue corresponds to one shot; avoid stuffing multiple characters' multiple rounds of dialogue into a single shot.

**sound** (Sound Effects): Pure sound effect description, layered as "environmental sound layer + action sound layer". E.g., "Distant wind howling + sword ringing". Fill `no sound effects` if there are none.

> **🚫 Strictly Prohibited Music/Score**: The final product of this pipeline **contains no background music at all**. The `sound` column only carries real sound sources (environmental sound + action sound + foley). Any terms such as "BGM," "score," "melody," "orchestra/piano/harp/flute sounds as atmosphere" are **strictly violations** and will be judged as serious issues in review. If the script includes instrument playing as a plot action (e.g., a character playing the piano), only specific physical sound sources like "metal vibration of fingertips plucking strings + resonance box hum" may be written.

**associateAssetsIds**: IDs of **visible** assets in the frame (actual `id` field values from assets data). Do not fabricate non-existent IDs.
- **Reference if character appears**: All characters appearing in the frame, whether as the subject or only partially visible (e.g., back, hands, blurred silhouette), must have their corresponding asset ID referenced if identifiable in the frame.
- **Scene asset mandatory**: Each storyboard entry must reference the scene asset ID corresponding to its scene (asset with type scene); if the scene has a derivative scene asset matching the current frame state, use the derivative scene asset ID; otherwise, use the main scene asset ID. Missing scene asset ID is considered an incomplete field.
- Parent-child asset selection rule: Select asset ID based on the state required by the plot frame—if the shot requires a derivative state of a main asset, **only select the derivative asset ID**; only when no matching derivative state exists, select the main asset ID; it is prohibited for the same parent asset to have both main and derivative appearing in the same storyboard entry.

---

## Transition Rules

- **Within the same scene**: Default hard cut between shots.
- **Across scenes**: Insert 1 empty shot storyboard entry (2–3s) for emotional buffering; the empty shot content should be related to the atmosphere of the preceding and following scenes.
- **Across paragraphs**: Can mark "dissolve transition" or "fade in/out" in description.
- Fancy transitions (wipe, rotation, venetian blinds, etc.) are prohibited.
