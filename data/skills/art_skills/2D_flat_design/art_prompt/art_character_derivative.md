# Character Derivative Asset Generation · Flat Style Constraint Manual

---

## I. Overlay Principles

1. **Unchanged Silhouette** — After overlaying, the line silhouette must be completely identical to the base model; silhouette shifting is prohibited.
2. **Unchanged Posture** — Maintain the natural standing posture of the base model; any changes in posture, action, or body shape are prohibited.
3. **Layer-by-Layer Control** — Each layer is described independently to facilitate layer-by-layer replacement (change outfit without changing makeup).
4. **Style Unity** — All costume and makeup elements must adhere to the same flat aesthetic system.
5. **No Reduction in Color Blocks** — The standard of color blocks after overlaying must not be lower than that of the base model.
6. **Pure Costume & Makeup Scope** — Only overlay makeup/hair/costume/accessories; introducing props, scenes, environments, or actions is prohibited.

---

## II. Overlay Hierarchy

| Level | Content | Description |
|---|---|---|
| L0 | Base Model | Base character model, no modifications |
| L1 | Makeup (Decision Layer) | First analyze user clues, then decide the intensity of "Basic Makeup / Light Makeup / Formal Makeup" |
| L2 | Hairstyle | Buns/tied hair/braids + hair accessories |
| L3 | Inner Garment | Replace the white basic inner garment |
| L4 | Outer Garment/Main Costume | Wide-sleeved robes/straight-hem robes/long capes, etc. |
| L5 | Accessories | Headpieces/earrings/necklaces/waist ornaments/hand ornaments |

---

## III. Makeup Constraints (L1)

### Strategy from Base Model to Derivative Makeup (Key)

> Although the character base model is bare-faced, derivative assets default to entering the makeup process. The system should analyze makeup needs based on clues provided by the user and decide the intensity among Basic Makeup, Light Makeup, and Formal Makeup, rather than keeping the bare face.

### L1 Clue Analysis and Makeup Decision

| Step | Processing Content | Decision Result |
|---|---|---|
| S1 | Extract user clues: facial state words, emotion words, intensity words | Form a summary of makeup requirements |
| S2 | Filter non-makeup clues: props/scene/action/posture words are not used as basis for makeup | Prevent misjudgment |
| S3 | Match the makeup style matrix and provide an intensity tier | Basic Makeup / Light Makeup / Formal Makeup |
| S4 | Generate the final L1 prompt | Output only the conclusion, not the analysis process |

### Clue to Makeup Mapping (Execution Standard)

| Clue Type | Typical Clues | L1 Decision |
|---|---|---|
| No obvious facial emphasis clues | Only costume/hair changes, no emphasis on emotion or state | Basic Makeup |
| Slight facial clues | Gentle, smiling, slightly lifted complexion | Light Makeup (very light) |
| Clear weak/sick clues | Pale complexion, extremely light lip color | Sickly Pear Makeup (Light Makeup) |
| Clear formal ceremony clues | Full dress, ceremony, luxurious appearance | Formal Makeup (controlled) |

### Female Makeup Style Matrix

| Style | Applicable Scenes | Core Prompt |
|---|---|---|
| Elegant Plain Makeup | Daily, first meeting, boudoir | Flat makeup, elegant color blocks, simple cosmetics |
| Cold Frost Makeup | Formal, confrontation, power | Flat cold makeup, simple lines, color block makeup |
| Soft Peach Makeup | Sweet romance, ambiguity, heart-fluttering | Flat peach makeup, pink tones, color block expression |
| Sickly Pear Makeup | Injured, weak | Flat sick makeup, pale skin, light lips |
| Luxurious Phoenix Makeup | Grand wedding, full dress | Flat heavy makeup, rich color blocks, refined lines |

### Universal Base Skin (Shared by All Makeup)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | Single-color fill, no gradient | Single-color skin, flat skin, solid skin |
| Whiteness | Light single color, uniform | Light skin tone, single-color skin tone |
| Translucency | No internal translucency, pure flat | No gloss, no translucency |
| Prohibited | Gradient/shadow/3D effect | — |

### Basic Makeup Details (Default Tier)

| Item | Constraint | Prompt |
|---|---|---|
| Eyebrows | Line outline, single-color fill | Line eyebrows, flat eyebrow shape |
| Eyes | Simplified color blocks, no pupil details | Flat eyes, color block eyes |
| Cheeks | Extremely light color blocks, no obvious color stacking | Extremely light blush, color block complexion lift |
| Lips | Single-color tint, maintain restraint | Single-color lips, flat lips |
| Overall | Makeup is visible, but color blocks are very light | Basic flat makeup, pseudo-bare-face flat |

---

## IV. Hairstyle Constraints (L2)

### Female Hairstyle Types

| Style | Description | Applicable | Prompt |
|---|---|---|---|
| Half-Tied Cloud Bun | Top bun + hanging hair at back | Daily, outings | Flat cloud bun, simple bun |
| Flying Immortal Bun | High bun with flying tips, simple lines | Fairyland, appearance | Flat flying bun, line high bun |
| Fallen Horse Bun | Low side bun, lazy lines | Private, ambiguous | Flat fallen bun, line side bun |
| Double Ring Bun | Symmetrical double buns, girl lines | Young characters | Flat double buns, simple double rings |
| Fully Loose Hair | Long hair fully loose, with simple hair accessories | Injured, down-and-out | Flat loose hair, line long hair |
| Tied Ponytail | High tie, capable, simple lines | Martial arts, action | Flat ponytail, line tied hair |

### Female Hair Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Style | Flat decoration, geometric shapes | Flat hair accessories, geometric decoration |
| Material | Line outline, single-color fill | Line ornaments, color block hair accessories |
| Craft | Simple lines, minimalist craft | Simple lines, flat craft |

### Male Hairstyle Types

| Style | Applicable | Prompt |
|---|---|---|
| Tied Hair Half-Crown | Daily, scholar | Flat tied hair, line crown |
| Full Crown High Tie | Formal, court | Flat full crown, line tied hair |
| Loose Hair Over Shoulders | Private, injured | Flat loose hair, line long hair |
| Battle Ponytail | Combat, martial arts | Flat battle hair, line ponytail |

---

## V. Costume Constraints (L3+L4)

### Female Costume Matrix

| Style | Design | Applicable | Prompt |
|---|---|---|---|
| Simple Flowing Outfit | Multi-layer wide-sleeved robes, flat lines | Daily, fairyland | Flat wide sleeves, line garments |
| Dignified Formal Dress | Curved-hem deep robe/ruqun, geometric lines | Court, banquet | Flat curved hem, simple deep robe |
| Light Daily Wear | Narrow-sleeved ruqun/short shirt, simple lines | Action, martial arts | Flat narrow sleeves, simple short shirt |
| Nightwear | Thin gauze inner shirt, plain flat color | Indoor, night | Flat nightwear, plain clothing |
| Grand Wedding Dress | Phoenix crown and cape, layered color blocks | Wedding | Flat wedding dress, multi-layer color blocks |

### Female Costume Universal Constraints

| Item | Constraint | Prompt |
|---|---|---|
| Main Color | White/Moon White/Silver Grey is default | White flat clothes, simple clothing |
| Material | Solid color blocks, no texture | Solid color clothing, no texture |
| Texture | Lines must be clear | Clear lines, distinct color blocks |
| Shoulders | Shoulder ornaments/scarves/cloud shoulder lines | Line shoulder ornaments, flat cloud shoulder |
| Layers | Multi-layer layering, distinct color blocks | Multi-layer layering, flat layers |

### Male Costume Matrix

| Style | Applicable | Prompt |
|---|---|---|
| Scholar Elegant Outfit | Daily, study | Flat long shirt, simple garment |
| General's Sturdy Outfit | Combat, training | Flat sturdy outfit, simple battle wear |
| Black Robe Large Cape | Appearance, night travel | Flat large cape, line cloak |
| Daily Casual Wear | Casual, private | Flat daily wear, simple casual outfit |
| Formal Court Robe | Court, ceremony | Flat court robe, simple formal robe |

---

## VI. Accessory Constraints (L5)

### Female Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Headpiece | Flat, geometric | Flat headpiece, geometric hair accessory |
| Earring | Line tassel/jade ear stud | Line earring, flat stud |
| Necklace | Line necklace/neck ring | Line necklace, flat neck ring |
| Waist Ornament | Line court sash/jade pendant | Line court sash, flat jade pendant |
| Hand Ornament | Line jade bracelet/armlet | Line bracelet, flat armlet |

### Male Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Hair Crown | Flat crown, simple lines | Flat crown, line crown |
| Waist Belt | Line waist belt, flat color block | Line waist belt, flat belt |
| Jade Pendant | Flat jade pendant, simple design | Flat jade pendant, line pendant |
| Weapon | Sword/fan/flute (optional) | Flat sword, line fan |

---

## VII. Costume & Makeup Combination Quick Reference

| Scene | Makeup | Hairstyle | Costume | Accessories |
|---|---|---|---|---|
| Daily Boudoir | Elegant Plain Makeup | Half-Tied Cloud Bun | Simple Flowing Outfit | Flat Medium |
| First Meeting | Elegant Plain Makeup | Half-Tied/Flying Immortal | Simple Flowing Outfit | Flat Medium-Plus |
| Sweet Romance Interaction | Soft Peach Makeup | Half-Tied/Fallen Horse | Simple/Light | Flat Medium |
| Formal Appearance | Cold Frost Makeup | Flying Immortal Bun | Dignified Formal Dress | Flat Extremely Complex |
| Night Secret Talk | Elegant/Peach Makeup | Fully Loose/Fallen Horse | Nightwear | Flat Minimal |
| Injured & Down-and-Out | Sickly Pear Makeup | Fully Loose (messy) | Damaged Daily Wear | Flat Minimal/None |
| Grand Wedding Ceremony | Luxurious Phoenix Makeup | Flying Immortal Bun | Wedding Dress | Flat Extremely Complex |
| Martial Arts Action | Plain Makeup (very light) | Tied Ponytail | Light Daily Wear | Flat Simple |

---

> **🔍 Inference Rules for Uncovered Scenes**
>
> When the scene/situation described by the user is not in the table above, infer based on the core genes of this style:
>
> | Inference Dimension | Flat Ancient Style Gene |
> |---|---|
> | Makeup Intensity | Default Elegant Plain Makeup (minimal color blocks); Formal/Appearance → Cold Frost Makeup; Sweet Romance/Date → Soft Peach Makeup; Weakened/Weak → Sickly Pear Makeup |
> | Hairstyle | Daily → Half-Tied Cloud Bun or Fallen Horse Bun; Formal → Flying Immortal Bun; Private/Night → Fully Loose Hair; Action → Tied Ponytail |
> | Costume | All costumes must be converted to flat color block expression; patterns extremely simplified; multi-layer layering retains silhouette feel only |
> | Accessory Complexity | Flat processing priority; Formal → Flat Extremely Complex (simplified to color block headpiece + waist ornament silhouette); Daily → Flat Medium |
> | Color Tone Tendency | Low-saturation ancient style palette (tea white/bamboo green/lotus pink/brick red); no gradient; clear boundary lines |

## VIII. Four-View Setting Sheet Specification

### View Definitions

| Position | View | Angle | Shot Size | Requirement | Prompt |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Face to collarbone | Face occupies 60%+, clear facial features/makeup | portrait closeup, face detail, makeup detail |
| Left 2 | Front View | Front 0° | Full-body standing | Facing camera, full front view of costume | front view, height mark |
| Right 2 | Side View | Right 90° | Full-body standing | Pure side profile, side layers of costume | side view, profile, height mark |
| Right 1 | Back View | Rear 180° | Full-body standing | Clear back hair accessories/back costume/hair ends | back view, rear view, height mark |

### Screen Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Pure neutral gray #E8E8E8 |
| Standing Pose | Natural standing, feet parallel slightly apart, arms hanging naturally or slightly extended (**any posture change is prohibited**) |
| Expression | Subtle expression matching the makeup style (e.g., Elegant Plain Makeup → calm, Peach Makeup → smiling), limited to facial micro-expressions, no body movements |
| Lighting | No light and shadow, pure flat color blocks |
| Consistency | Face/makeup/hairstyle/hair accessories/costume/accessories are completely consistent across the four views |
| Aspect Ratio | Recommended 4:1 or 3:1 |

---

## IX. Prompt Template

### Output Format Constraints

| Item | Constraint |
|---|---|
| Output Content | **Output only the prompt text**, no other content |
| Prohibited Output | Quick reference tables, layered construction plans, visual constraint tables, prohibition tables, derivative plans, output suggestions, core element tables, and any non-prompt content |
| Prohibited Scenes | Character derivative assets **do not include scene/environment descriptions**, do not output any scene/environment/weather/background narrative content (scenes belong to the scene asset category) |
| Prohibited Props | **Do not include any prop interactions**, do not output held items or interactive items such as umbrellas/swords/fans/books/lanterns/wine cups (props belong to the prop asset category) |
| Prohibited Posture Changes | **Do not change the base model posture**, do not output any actions or body shape changes such as walking/looking back/raising hand/sideways/running, maintain natural standing |
| Format | Directly output the usable prompt code block, no titles, tables, explanations, or plan comparisons required |

### Full Costume & Makeup Overlay (Four Views)


```
Using the character's base image as the base, img2img overlay costume and makeup,
Flat ancient-style {gender} character four-view setting image,
2d flat design, vector art, flat illustration,
minimalist, clean lines, solid colors,
Keep the base image outline unchanged, {overall temperament},
【L1·Makeup】Decide based on user clues: {base makeup/light makeup/formal makeup}; use {makeup style}, single-color skin, flat skin tone, {eyebrow makeup}, {eye makeup}, {lip makeup},
【L2·Hairstyle】{style type}, line hairstyle, {hair accessory description},
【L3+L4·Costume】{main color}{style}, {material}, {decorative craft}, clear lines, distinct color blocks,
【L5·Accessories】{headwear}, {earrings}, {necklace}, {waist accessory},
Left to right in the same frame: portrait close-up + front view + side view + back view,
Natural standing, pure neutral gray background, no shadows, no gradients,
Four-view consistency, simple lines, color block filling,
No text in the image
```


---

## X. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The overlaid outline must match the base model |
| R2 | Costumes must use "clear lines + distinct color blocks" |
| R3 | Female accessories must be "flattened + geometric" |
| R4 | Makeup/hair/costume/accessory styles must be unified |
| R5 | Must output a four-view character sheet (portrait close-up + front view + side view + back view) |
| R6 | Must specify "pure neutral gray background" |
| R7 | Must specify "four-view consistency" |
| R8 | **Output prompts only** — Prohibit outputting any non-prompt content such as quick reference tables, layered schemes, visual constraints, prohibitions, derivative schemes, or output suggestions |
| R9 | **Prohibit scene descriptions** — Character derivative assets do not involve scenes/environments/weather/background narratives; scenes are an independent asset type |
| R10 | **Prohibit prop interaction** — Do not include any held/interactive items (umbrellas/swords/fans/books, etc.); props are an independent asset type |
| R11 | **Posture remains unchanged** — Must maintain the natural standing posture of the base model; prohibit any action/posture/pose changes |
| R12 | **L1 must analyze before deciding** — First parse the user's facial cues, then determine base makeup/light makeup/formal makeup |
| R13 | **All derivative assets require makeup** — In normal cases, do not maintain a bare face; use at least base makeup |
| R14 | **Makeup intensity is controlled** — Even when applying makeup, it must be restrained; no modern flat heavy makeup/exaggerated makeup effects |
| R15 | **Props/scenes/actions are not grounds for intensity escalation** — Based solely on props, environment, or actions, do not elevate base makeup to a stronger makeup level |

### Strictly Prohibited

| ID | Prohibition |
|---|---|
| X1 | Outline offset after overlay |
| X2 | Accessories too simple/modern (female) |
| X3 | Makeup/costume styles conflict with each other |
| X4 | Complex scene background (must be pure gray background) |
| X5 | Inconsistent costume/makeup across the four views |
| X6 | Any content other than the prompt (tables/schemes/suggestions/explanations/variants, etc.) |
| X7 | Adding scene descriptions to character derivative assets (mountain paths/rain scenes/indoors/streets/weather, etc. environmental elements) |
| X8 | Outputting sections such as "Core Element Quick Reference," "Layered Construction Scheme," "Visual Constraints," "Prohibitions," or "Derivative Schemes" |
| X9 | Adding any prop interaction (holding umbrellas/swords/fans/books/lanterns/wine glasses, etc.) |
| X10 | Changing the base model's posture (walking/looking back/raising hand/side profile/running/looking down/looking up, etc. action descriptions) |
| X11 | Adding expression and posture linkage descriptions (e.g., "walking at a 45° side profile with a slight smile," etc. narrative descriptions) |
| X12 | Applying fixed makeup directly without analyzing user cues |
| X13 | Incorrectly maintaining a bare face, resulting in derivative assets lacking required makeup |
| X14 | Incorrectly upgrading makeup solely due to prop/scene/action terms, leading to incorrect makeup intensity decisions |
| X15 | Adding gradient/shadow/highlight/3D effects |