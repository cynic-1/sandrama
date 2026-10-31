---
name: storyboard_prompt_techniques
description: >-
Reference for general storyboard prompt techniques.
Covers prompt parsing and mapping rules, shot-type vocabulary, output format specifications, prompt structure framework, image quality standards, image asset annotation rules, and character position continuity rules, for Agent activation.
---
# Storyboard Prompts · General Basic Techniques

> The following are the **general basic specifications** for generating storyboard prompts, applicable to all visual styles. **Style-related content**, such as style anchor terms, emotion mapping, light and shadow vocabulary, scene texture, and aesthetic prohibitions, is defined by the style-specific technique (`director_storyboard`).

---

## Applicable Modes

This specification supports only the following two **reference image consistency modes** for output:

- **Mode A**: Seedream (doubao-seedream)
- **Mode B**: Nanobanana (Gemini)

> ⚠️ **Do not generate text-to-image mode prompts**; all outputs are based on the **reference image (image-to-image / ControlNet / character consistency)** workflow premise.

---

## Fidelity Principle for Storyboard Content (Highest Priority)

Prompt generation is **format conversion**, not **creative writing**. The storyboard is the **sole source of content** for the prompt. All visual information must faithfully correspond to the respective row in the storyboard, adapting only in expression format and wording to meet the requirements of the image generation model.

### Core Principle: The visual description is the main trunk, not the material

The "Visual Description" field in the storyboard carries all the visual information of the shot and serves as the **core content** of the prompt body. Stylistic terms, image quality terms, lighting and shadow terms, and other decorative modifiers serve as **auxiliary embellishments** that support the description of the scene. When the two compete for space within the token budget, **visual description takes priority**; it is better to reduce style words than to remove visual elements from the visual description.

### Iron Rule

1. **Complete preservation of visual descriptions**: All visual elements in the "Visual Description" field of the storyboard (subjects, objects, spatial relationships, dynamic details, and camera relationships) must appear in full in the prompt body, **with no omissions**.
2. **Semantic Equivalence Transformation**: When converting storyboard table fields into prompts, only the form of expression is changed (Chinese↔English, prose↔keywords, narrative language↔visual description), **without altering the semantics**. Example: If the storyboard states "deep column shadows in the architectural space," the prompt must reflect the dark-toned column shadows in that space; it must not be replaced with a different semantic concept such as "grand architecture."
3. **No creative divergence**: Do not add decorative visual elements not mentioned in the storyboard (e.g., if the storyboard does not specify falling petals, the prompt must not add them on its own); Do not reinterpret the scene's atmosphere (the storyboard specifies "cold, arrogant, and contemptuous," which must not be changed to "sad and desolate").
4. **Style terms subordinate to content**: Style-anchoring terms, image-quality locking terms, scene-texture terms, and other style-related vocabulary serve as **auxiliary modifiers**, supporting the visual content already defined in the storyboard. They must not take precedence over the content—when style terms conflict with the specific descriptions in the storyboard, the storyboard takes precedence.
5. **Field-by-field retrospective validation**: After generating each prompt, you must compare it field by field against the corresponding row in the storyboard table to confirm that the following mappings have been accurately reflected:

| Storyboard Field | Must Be Reflected in the Prompt | Validation Points |
|-----------|---------------|--------|
| Screen Description | Core content of the [Screen] section in the prompt body | Whether all visual subjects, spatial relationships, and key details are preserved with **zero omissions** |
| Scene | Environment anchoring in the [Visual] section of the prompt body | Whether the scene types are consistent |
| Shot Type | Shot Type Composition Term | Shot Type Match (For composite shot types, use the starting end of the first frame) |
| Character Action | Subject's Posture and Orientation | Consistency of Action Semantics and Explicit Annotation of Orientation |
| Emotion | Emotional facial expression term | Is the emotional tone consistent? |
| Light and Shadow Atmosphere | Main Prompt Text [Light and Shadow] Section | Whether the light source direction, color tone tendency, and light-dark relationships are complete and consistent |

> ⚠️ **Validation failure = invalid prompt**. It must be corrected before output. The most common failure mode: specific elements in the visual description are overwritten or omitted by style template terms.

---

## First-Frame Recognition Principles

The storyboard is the **first-frame reference for the video**. The model should independently determine the visual state of the frame based on the semantics of the "Screen Description" in the storyboard, rather than mechanically applying the "preparation state" template.

**Judgment Logic**:

| Screen Description Type | Handling Method | Example |
|-------------|---------|------|
| **Static Moment** (stopping to look up, standing and gazing, tilting head with a cold smirk, hunched over a desk writing) | **Generate directly according to the description**, without rewriting the action | "Character stops to look up at something" → Prompt directly states "stops to look up at something" |
| **Continuous action process** (walking through the corridor, swinging the sword to strike, turning and leaving) | Capture the **frozen state at the initial moment of the action** (not an abstract preparatory state) | "Swinging the sword to strike" → "The sword is raised to the top of the head, the tip pointing downward, at the instant just before the downward slash" |
| **Camera Movement** (slow push to medium shot, pull back to wide shot, fade in) | Use the **starting shot size** as the composition for the first frame | "Wide shot → Medium shot" → First frame uses "Extreme wide shot" |
| **Transition Effects** (fade-in from black, dissolve transitions) | Retain the description but mark it as the opening state | "Fade-in from black at the opening" → "The frame emerges from black, opening with a wide long shot..." |

**Basis for judgment**: The tense of the active verb in the screen description and the narrative density.

> ❌ **Incorrect approach**: Rewriting all actions into a "about to happen" preparatory state, which dilutes the semantic meaning of the actions
> - The storyboard says "stop and look up" → incorrectly rewritten as "about to lift head and look forward" (the action is weakened)
> - The storyboard says "smirk with a superior attitude" → incorrectly rewritten as "the corners of the mouth are about to rise" (the emotion is weakened)
>
> ✅ **Correct approach**: Faithfully follow the action descriptions in the storyboard, and only take the starting point when the action is indeed a continuous process

---

## Parsing Mapping Rules

| Storyboard Field | Prompt Corresponding Processing |
|----------|----------------|
| Screen Description | **Main Content**: The core source of information for the [Screen] section of the prompt body.  Strictly prohibit deleting key elements, replacing them with different semantics, or adding visual elements that do not exist in the scene description.
| Scene | Integrated into the [Visual] section as an environmental anchor, with scene texture constraint terms specific to the style's techniques overlaid |
| Shot Type | Shot composition term (see the shot type library below); must match the "Shot Type" field in the storyboard table. Composite shot types (e.g., "wide shot → medium shot") take the **starting end of the first frame** |
| Camera Movement | For storyboard production information only; do not include in the prompt; do not output camera movement notes |
| Character Action | Based on the "Character Action" field in the storyboard, processed according to the "First Frame Recognition Principle." Must preserve the semantic connotation of actions and the explicit `| Facing:` annotation
| Emotion | Based on the "Emotion" field in the storyboard, select the matching facial expression/eye terms from the style-specific technique emotion mapping table. The emotional tone must be consistent with the storyboard |
| Light and Shadow Atmosphere | Based on the "Light and Shadow Atmosphere" field in the storyboard, **write it as a standalone paragraph** in the [Light and Shadow] section, fully preserving the light source direction, color tone tendency, light-dark relationships, and texture details |
| Dialogue | Not included in the prompt, not output |
| Sound Effect | Not included in the prompt, not output |
| Related Asset Name/ID | Used only for internal reference image binding, processed according to the "Image Asset Annotation Rules" |

---

## Shot Type Lexicon (General)

| Shot Type Input | Mode B (Nanobanana) English Shot Terms | Mode A (Seedream) Chinese Scene Terms |
|----------|-------------------------------|---------------------------|
| Extreme wide shot / wide establishing shot | `extreme wide shot, establishing shot` | Extreme wide shot composition, full view of the environment, characters appear small within the scene |
| Wide/Full Shot | `wide shot, full shot, full body` | Full body in frame, wide composition, balanced ratio between subject and environment |
| Medium shot | `medium shot, cowboy shot, knee shot` | Medium shot composition, framing the subject from the knees up |
| Close-up | `medium close-up, upper body` | Close-up composition, upper body in frame, blurred background |
| Half body | `half body shot, bust shot` | Half-body composition, waist-up framing, shallow depth of field |
| Close-up | `close-up, face focus` | Close-up composition, magnifying the face or a specific detail, with a blurred background depth |
| Extreme Close-Up | `extreme close-up, macro detail` | Extreme close-up, extreme local detail, blurred background |
| Over-the-shoulder shot | `over the shoulder shot, two shot` | Over-the-shoulder composition, with the foreground character's back blurred and the background character in sharp focus |

**Composite Shot Handling**: If the storyboard specifies camera movements such as "wide shot → medium shot" or "medium shot → close-up," the storyboard image serves as the reference for the first frame, and **the starting shot type on the left side of the arrow is used**.

---

## Output Format Specification

For each storyboard, **output only the prompt text of one mode** (choose one of two). It is not allowed to output both Mode A and Mode B in the same storyboard.

**Mode Selection Rules**:

| Condition | Selection Mode |
|------|----------|
| Target model is Seedream / Doubao series | Mode A (Chinese Prompt) |
| Target model is Nanobanana / Gemini series | Mode B (English JSON Prompt) |
| User did not specify a model | Default to Mode A, or ask the user for confirmation |
| Batch Generation | Maintain the same mode throughout; switching mid-process is not allowed |

**Output Content Rules**:
- When mode A is selected: output only the `[Prompt]` body (no negative words, as Seedream does not support them)
- When mode B is selected: output only the `[JSON Prompt]` body (including the `"negative"` field)
- Except for the main prompt text, the following content is not output by default: storyboard titles, reference image binding descriptions, dialogue notes, sound effect notes, constraint checks, and asset summaries

---

## Prompt Structure Framework (Visual Description First)

### General Structural Principles

The prompt body adopts a **three-part structure**, ensuring that the visual description occupies the primary position:

```
【Screen】→ Carries the complete visual content of the storyboard’s “Screen Description” + “Scene” + “Shot Size” + “Character Action” + “Emotion” (main trunk, highest information density)
【Light and Shadow】→ Carries the light source, color tone, and light-dark relationships of the storyboard’s “Light and Shadow Atmosphere” (kept as a separate paragraph to avoid being squeezed by style terms)
[Style] → Style anchor terms + Quality lock terms + Prohibited items declaration (auxiliary modifiers, concise)
```

> **Principle of Length Allocation**: The [Visual] section is the one with the highest information density and the longest length; it must fully carry all the visual elements from the "Visual Description" column of the storyboard table; 【Light and Shadow】The second segment, independently carrying the light and shadow atmosphere; 【Style】Keep the segment as short as possible, including only essential style anchor terms and image quality lock terms. The three segments must not be reordered, and their lengths must not be inverted—if the style words exceed the length of the visual segment, the output is considered a failure.

### Mode A: Seedream (API `reference_images`)

Mechanism: Reference images are passed via the API parameter `reference_images`, and `@ImageN` is used within the prompt to directly bind a reference image.

Prompt structure:

```
@Figure 1 is {Asset Name}{Asset Type} @Figure 2 is {Asset Name}{Asset Type} ... ,

[Frame] {Scene Anchor}, {Shot Type and Composition}, {Complete transcription of the visual description—preserving all visual elements, spatial relationships, subject actions, orientation, and emotions}.

【Light and Shadow】{Light Source Direction}, {Color Tone Tendency}, {Light-Dark Relationship}, {Texture Details}.

[Style] {style anchor term}, {quality lock term}, no off-screen subtitles, watermarks, or UI text.

Maintain the facial features, hairstyle, and clothing of @Image N to be completely consistent with the reference image.
```

**Key Rule**:
- [Screen] The segment must fully carry all the information in the "Screen Description" field of the storyboard; **no omissions are allowed**.
- In the [Scene] section, character/scene/prop names **must be replaced with `@ImageN`** (do not use text names).
- Orientation information must be explicitly written in the [Scene] section (e.g., "3/4 front facing right").
- No longer append the English segment "Based on the reference image... Generate a new scene..." (the `@ImageN` mechanism already handles reference image binding; appending the English segment would result in duplicate scene descriptions and potential conflicts)

> The specific content of `[Style Anchor Terms]` and `[Quality Lock Terms]` is defined by **style-specific techniques**.

### Mode B: Nanobanana (Multimodal + JSON)

Mechanism: The reference image and the prompt are used together as multimodal input, with the prompt employing structured JSON to enforce character consistency.

Prompt Structure (Fixed Framework):

```json
{
  "role": "You are a cinematographer and storyboard artist. Maintain strict visual continuity across all shots.",
  "character_reference": [
{ "image": 1, "ref": "@Figure 1", "description": "[Key appearance description: hair color/hair style/clothing/body type]" },
{ "image": 2, "ref": "@Figure 2", "description": "[Key appearance description]" }
  ],
  "continuity_rules": [
    "Same wardrobe, hairstyle, face features across ALL shots",
    "Same environment, lighting style, color grade",
    "Only framing, angle, action, expression may change",
    "Do NOT introduce new characters not in reference images"
  ],
  "shot": {
"scene_and_framing": "[Scene anchoring + shot size and composition terms]",
"subject_and_action": "[Subject action + direction + emotion + all visual elements from the scene description, using @ImageN to replace character/scene names]",
"lighting": "[light source direction + color tone + light-dark relationship + texture]",
"style": "[style anchor term + image quality lock term]"
  },
"negative": "[Negative prompt template, including no subtitles, no watermark, no UI text] (specific terms are defined by style-specific techniques)"
}
```

**Key Rule**:
- The `shot` field is split into four subfields, forcing the visual description to exclusively occupy the `scene_and_framing` and `subject_and_action` positions, preventing it from being squeezed out by style terms.
- `subject_and_action` is the field with the highest information density and must fully carry the storyboard's "Visual Description" + "Character Action" + "Emotion"
- The reference image is used as an image input, not as URL text
- Keep character descriptions to 1–2 key features, avoiding verbosity

---

## General Language and Quality Standards

- Mode A (Seedream) prioritizes natural Chinese language paragraphs
- Mode B (Nanobanana) prioritizes English JSON structured prompts
- The prompt focuses on "content presentation + sharp image quality," avoiding blur-related terms
- Do not use expressions that would result in a blurry image (see the "Prohibited Terms for Quality Degradation" table below)
- Mode B: Negative words are output according to the style-specific "Negative Word Template"; each entry must be included and cannot be omitted. Mode A does not output negative words
- Quality lock words are output according to the style-specific “Quality Lock Words” template, and each entry must include

---

## Off-screen Text vs. On-screen Text Rules

- **Off-screen text** (subtitles, watermarks, title cards, voiceover overlays, and other UI-layer text overlays) → **Strictly prohibited**; must be declared as prohibited in the [Style] section and in the negative prompt.
- **In-frame text** (text props that naturally exist within the scene: characters writing with a brush, characters on scrolls, plaques and signboards, letter contents, road signs, shop signs, etc.) → **belongs to scene props**. When the storyboard frame description explicitly includes such content, its presence should be described normally in the [Visual] section and is not subject to the no-text rule.
- **Criterion**: Whether the text exists **within the story world**. The characters on the plaque = props within the painting ✅; Character dialogue at the bottom of the screen = off-screen subtitles ❌

---

## Quality Degradation Prohibited Terms (Common to All Styles)

| Forbidden Pattern | Model Behavior | Safe Alternative |
|---------|---------|----------|
| `film grain` / `Film grain` | Adds noise to the entire image, making it blurry | `subtle cinematic texture` / `Subtle cinematic texture` |
| `imperfect focus` / `Out of focus` | Out-of-focus across the entire image | Delete directly |
| `edges not perfectly sharp` | edges become blurred | delete directly |
| `slight natural deviation` | Overall resolution reduction | Direct deletion |
| `not completely stable` | Blurry screen | Delete directly |
| `blurry background` (misuse) | Subject becomes blurred | `background bokeh, subject in sharp focus` |
| `hazy` / `foggy` (misuse) | Full-image haze | Use only when aerial perspective is required, and add `subject sharp` at the same time |
| `Soft Focus` / `Hazy Feel` | Reduce overall sharpness | Delete directly |

> **Core Principle**: Content may be "imperfect" (uneven lighting, asymmetric composition), but image quality must be sharp.

---

## Batch Processing Specification

When the user inputs a multi-line storyboard:

1. **Process line by line in order**, without skipping lines or merging
2. For each storyboard, output only the prompt body in the target format (Prompt or JSON Prompt).
3. If the same scene spans multiple consecutive shots, **scene texture terms may be reused**, but emotion/lighting/shot size/action must be **handled independently per line**.
4. Associate mirror instances with the same related asset name; **consistency annotation terms must be identical**
5. Do not append any non-prompt blocks (such as asset reference summaries, dialogue/sound effect notes, or constraint checks).

---

## Image Asset Annotation Rules

The `prompt` field of each storyboard shot must be prefixed with **image asset annotations**, and the **prompt body must directly replace the corresponding character/scene/prop names with `@Image N`**, establishing a direct binding between reference images and the visual description. Annotations are numbered sequentially starting from `@Figure 1`, following the order of asset references in `associateAssetsIds`.

**Format**: `@Figure 1 is {Asset Name}{Asset Type} @Figure 2 is {Asset Name}{Asset Type} ... , use @Figure N in the body text to replace character/scene name prompts`

**Type Mapping**:

| Asset type | Annotation type word |
|-----------|------------|
| role      | Role       |
| tool      | item       |
| scene     | scene       |
| clip      | segment    |

**Rules**:
- Numbering starts from `@Figure 1` and increments sequentially according to the order of the `associateAssetsIds` array
- Each referenced asset ID corresponds to one annotation item; **no omissions or extras are allowed**.
- Use the `name` field of the asset in the assets data for the asset name
- Fill in the asset type according to the type mapping table above
- Separate the annotation part from the prompt body with `, `
- Derived assets retain their own `name` and the parent asset's `type`
- **Body Binding (Core)**: In the prompt body, all positions where character names, scene names, or prop names should originally appear **must be replaced with the corresponding `@Image N` markers**, and text names are no longer used. This way, the reference image forms a direct pointing relationship with the visual subject in the frame, avoiding ambiguity caused by inconsistencies between asset names and character names (for example: when the name of a derivative asset does not match the original character name, using `@Image N` can bypass the name ambiguity and directly point to the reference image).
- The same `@Figure N` may appear multiple times in the body text (e.g., when a character is visible simultaneously in the foreground and in a reflective surface).

**Example** (assuming `associateAssetsIds="[A, B, C]"` corresponds to Character A (role), Character B (role), and a certain scene (scene)):

❌ Error (the body uses text names, which is inconsistent with the prefix labels):
```
@Image 1 is Character A, @Image 2 is Character B, @Image 3 is a certain scene. Character A sneers, looking down at Character B who is kneeling on the ground, with deep shadows cast by the pillars in the scene...
```

✅ Correct (the body text uses @ImageN to directly bind the reference image):
```
@Figure 1 is Character A, @Figure 2 is Character B, @Figure 3 is a certain scene,

[Frame] Within @Image 3, medium shot composition, @Image 1 stands upright on the left side of the frame, in a 3/4 profile facing right, with a slight smirk at the corner of the mouth, looking down from a superior position at @Image 2 kneeling on the ground on the right side of the frame; @Figure 2 Crouched on the ground, three-quarter back view facing left, hands braced on the floor, shoulders and back tense...
```

---

## Rules for Character Position and Orientation Coherence

When generating each prompt, the following cross-shot character position and orientation consistency constraints must be observed.

### I. Orientation Retrieval Rules (Obtaining Character Facial Orientation from the Storyboard Table)

The "Character Action" field in the storyboard table already includes the explicit `｜Facing:` annotation. When generating prompts, **prioritize direct extraction** and **explicitly write** the corresponding directional terms (e.g., `facing right` / `Facing right`, `three-quarter view facing left` / `3/4Side facing left`) into the prompt.

**Priority Retrieval** (High → Low):

| Priority | Lead Source | Processing Logic |
|--------|---------|----------|
| **1** | **The `｜Facing:` annotation in the character action field** | Explicitly annotated in the storyboard table → **adopt directly**, no inference needed |
| 2 | **Explicit directional terms in the visual description** | The visual description directly mentions orientation (e.g., "facing away from the camera," "looking out the window," "facing the audience") → Adopt directly (only when Priority 1 is absent) |
| 3 | **Multi-character spatial relationships (180° eyeline)** | In dialogue/confrontation/interaction scenes, two characters face each other: the character on the left side of the frame faces right, and the character on the right side of the frame faces left. First appearance establishes baseline, then full-scene lock |
| 4 | **Shot Type Implication** | Over-the-shoulder shot: the foreground figure is facing away from or in profile to the camera, while the background figure faces the camera; Close-up/medium close-up monologue: default 3/4 profile |
| 5 | **Emotional and Narrative Semantics** | Loneliness/Contemplation/Memory → Profile or 3/4 rear view; Confrontation/interrogation → facing the other person directly or at a 3/4 angle; Avoidance/Shyness → Slightly tilting the head to avoid the other person |
| 6 | **Scene Spatial Logic** | Greeting at the entrance → facing outward; Gazing at the scenery → Facing the direction of the scenery; Writing at a desk → Head down facing the desk |

> **Under normal circumstances, only Priority 1 needs to be read**; the storyboard table has already been annotated at the source. Priorities 2–6 serve only as fallback inferences when storyboard annotations are missing.

**Acquisition Steps**:
1. Read the annotation content following `｜Facing:` in the "Character Action" field of the current row in the storyboard table
2. If the annotation exists and is complete → adopt it directly, skipping subsequent priorities
3. If annotations are missing (e.g., empty shot lines) → infer sequentially according to priorities 2–6
4. Write the retrieved orientation information into the corresponding character description position in the prompt

**Orientation Vocabulary**:

| Orientation Type | Mode A (Chinese) | Mode B (English) | Applicable Scenarios |
|---------|-------------|-------------|---------|
| Front | Front facing the camera | facing camera, front view | Self-declaration, direct confrontation with the viewer's gaze |
| 3/4 front | 3/4 side slightly toward camera | three-quarter view facing camera | Dialogue subject, emotional conveyance |
| Frontal side | Frontal side profile | profile view, side view | monologue, contemplation, confrontation silhouette |
| 3/4 back | 3/4 side back | three-quarter back view | departure, alienation, memory |
| Back | Facing away from the camera | back view, from behind | Mysterious entrance, parting, gazing from afar |
| Facing left | Facing the left side of the screen | facing left | Characters on the right side of the 180° line, facing leftward targets |
| Facing right | Facing the right side of the screen | facing right | Characters on the left side of the 180° line, facing right-side targets |
| Slight head tilt | Slightly looking down | slightly looking down | Sadness, guilt, contemplation |
| Slightly looking up | Slightly looking up | slightly looking up | arrogance, looking up, anticipation |

> Orientation annotations must include both **horizontal orientation** (facing left/right/camera) and **pitch tendency** (if applicable), such as "3/4 side view facing right, slightly looking up."

### II. Position and Orientation Locking Rules

- **Screen Position Lock**: For a character appearing in multiple shots within the same scene, their left/right position on screen (left / center / right) must remain fixed and must not switch sides without a narrative reason.
- **Orientation Preservation**: Dialogue/confrontation scenes follow the 180° axis of action—Character A facing right remains facing right throughout the scene, and Character B facing left remains facing left throughout the scene; In the prompt, explicit annotations must be provided using directional terms (e.g., facing left / Facing left, on the left side of the frame / Left side of the screen, etc.).
- **Consistent foreground/background layering**: If character A is in the foreground and character B is in the midground in storyboard N, their relative front-back relationship should not be reversed without reason in subsequent storyboards of the same scene.
- **Position changes must be accompanied by action transitions**: When a character's on-screen position needs to change (e.g., walking, turning), the prompt for the preceding storyboard shot must include a description of the corresponding movement/turning action; abrupt position jumps are not allowed.
- **Orientation changes must be accompanied by a connecting action**: When a character's orientation genuinely needs to change (e.g., turning the head, turning around), the prompt for the current storyboard shot must include a description of the turning action (e.g., "slightly turns head toward the left side of the frame"), and this turn must be consistent with the "Character Action" field in the storyboard table; arbitrary changes in orientation are not permitted.
- **Cross-scene reset**: When switching to a new scene, reassigning screen positions and orientations is allowed, but consistency must still be maintained within the new scene.

### III. Visual Relationships of Reflective Surfaces

When reflective media (mirrors, water surfaces, smooth metals, window glass, camera lenses, etc.) are present in the frame, the following rules must be observed:

- **Mirror Flip**: The character's left-right orientation in the reflection is opposite to that of the entity (entity facing right → mirror facing left). The prompt must explicitly specify the orientation relationship between the reflection and the entity (e.g., "@Image 1 faces right, and in the water reflection, @Image 1 faces left").
- **Reflective surfaces do not change the positional reference**: A character's on-screen position is based on the entity; the reflection in a reflective surface is not considered a change in the character's position.
- **Reflection surface content matches the entity**: The character’s clothing, hairstyle, expression, and other details visible on the reflection surface must be consistent with the entity in the same frame; no discrepancies are allowed.
- **Depth of Field and Sharpness of Reflection Surfaces**: Based on the distance and material of the reflective surface, the reflected image may have appropriately reduced sharpness (e.g., blurring caused by water ripples), but this must be specified in the prompt (e.g., "slightly distorted water reflection").
- **Trigger Identification**: This rule is automatically triggered when the storyboard frame description or scene assets contain reflective elements such as mirrors, water surfaces, lakes, streams, glass, metallic reflections, cameras/camcorders, etc.

---

## Appendix: Complete Output Example

The following demonstrates the complete workflow of a storyboard from input to output, for Agent reference. This example uses abstract placeholders (Character A, a certain scene, Prop X, etc.). In actual application, replace them with the specific content from the storyboard.

### Input (a row from the storyboard table)

| Field | Content |
|------|------|
| Screen Description | Fade in from black, wide long shot of a scene exit, crowd surging, a prominent sign standing on the right side of the frame, Character A carrying Prop X walking alone through the crowd, camera slowly pushes in to a medium shot, he grips Prop Y in his hand, suddenly stops and looks up at the sign, his eyes tense yet resolute |
| Scene | Exit of a certain scene |
| Shot Type | Long Shot → Medium Shot |
| Character Action | Backpack walking forward → suddenly stops → looks up at the indicator → hand grips prop Y slightly tighter | Orientation: 3/4 front facing right |
| Emotion | A coexistence of unease and certainty |
| Light and Atmosphere | Soft morning light evenly spreads from the left, with a warm yellow base lightly tinting the ground; the indicator object is clearly illuminated, while the human figure is backlit and appears darker, creating a silhouette effect |
| Related Asset ID | [a, b, c, d] → Character A (role), Item X (tool), Item Y (tool), a scene exit (scene) |

### Output (Mode A · Seedream)

```
@Image 1 is Character A, @Image 2 is Prop X, @Image 3 is Prop Y, @Image 4 is a scene exit,

[Visual] @Image 4, fade in from black, wide long shot, crowds surging and moving through the frame, a prominent signpost standing on the right side of the frame; @Figure 1 carries @Figure 2 while walking alone through the crowd, gripping @Figure 3 tightly in hand, positioned in a three-quarter frontal view facing right, pausing among the people, looking up at the sign on the right side of the frame, with a tense yet resolute gaze, and a face that appears uneasy yet determined.

【Light and Shadow】Soft morning light evenly spreads from the left, with a warm yellow base tone lightly tinting the ground. The indicator object is clearly and brightly illuminated, while surrounding figures are backlit and appear darker, forming silhouette outlines. @Image 1 is half-lit and half-backlit, with a slightly bright facial contour.

[Style] {style anchor term}, {quality lock term}, no off-screen subtitles, watermarks, or UI text.

Maintain the facial features, hairstyle, and clothing of @Image 1 to be completely consistent with the reference image.
```

> The `{style anchor terms}` and `{quality lock terms}` in the 【Style】 section are provided by the style-specific technique (`director_storyboard`); this general specification does not hardcode specific terms.

### Validation Comparison

| Storyboard Field | Prompt Location | Consistent? |
|-----------|---------------|---------|
| Fade in from black at the opening | [Visual] "Fade in from black at the opening" | ✅ |
| Scene Exit | [Visual] "@Figure 4" | ✅ |
| Extreme long shot (starting end of the first frame) | [Visual] "Extreme long shot composition" | ✅ |
| Surging crowds | [Visual] "Surging crowds weaving through" | ✅ |
| Indicator on the right | [Screen] "A prominent indicator is placed on the right side of the screen" | ✅ |
| Character A carries prop X and walks alone | [Visual] "@Figure 1 carrying Figure 2 walks alone through the crowd" | ✅ |
| Hand gripping prop Y | [Screen] "Tightly gripping @Image 3 in hand" | ✅ |
| Stop and Look Up at the Indicator | [Scene] "Stop among the crowd and look up at the indicator on the right side of the frame" | ✅ |
| Facing 3/4 front to the right | [Frame] "Body 3/4 front to the right" | ✅ |
| Tense yet resolute | [Visual] "Tense yet resolute gaze" | ✅ |
| Left-side morning light + warm yellow background | 【Light and Shadow】 "Soft morning light evenly spreads from the left, warm yellow background" | ✅ |
| Human silhouette against backlight | [Light and Shadow] "The human figure appears dark against the backlight, forming a silhouette outline" | ✅ |

**No omissions, verification passed.** **
