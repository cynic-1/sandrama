# Character Derivative Asset Generation · Constraint Manual

---

## I. Superposition Principles

1. **Unchanged Face** — After superposition, facial features must be identical to the base model; facial drift is prohibited.
2. **Unchanged Pose** — Maintain the natural standing pose of the base model; any changes in pose, action, or body posture are prohibited.
3. **Layer-by-Layer Control** — Each layer is described independently to facilitate layer-by-layer replacement (change costume without changing makeup).
4. **Unified Style** — All costume and makeup elements must adhere to the same aesthetic system.
5. **No Quality Degradation** — The quality standard after superposition must not be lower than the base model.
6. **Pure Costume & Makeup Scope** — Only makeup, hairstyle, clothing, and accessories are superimposed; introducing props, scenes, environments, or actions is prohibited.

---

## II. Superposition Layers

| Layer | Content | Description |
|---|---|---|
| L0 | Base Model | Base image model, unmodified |
| L1 | Makeup (Decision Layer) | First analyze user clues, then decide the intensity of "Basic Makeup / Light Makeup / Formal Makeup" |
| L2 | Hairstyle Styling | Buns/Tied hair/Braids + Hair accessories |
| L3 | Inner Garment | Replaces the white basic inner garment |
| L4 | Outer Garment/Main Costume | Wide-sleeve robe/Direct-hem robe/Large cloak, etc. |
| L5 | Accessories | Headwear/Earrings/Necklace/Waist ornaments/Hand ornaments |

> **Scope Boundary**: Character derivative assets include only L0–L5 layers (costume, makeup, and styling). They do not include props (umbrellas/swords/fans/books/lanterns and other handheld items), scene environments (indoor/outdoor/weather, etc.), or poses/actions (walking/looking back/raising hand, etc.). These belong to the scope of other asset types.

---

## III. Makeup Constraints (L1)

### Strategy from Base Model to Derivative Makeup (Key)

> Although the character base model is bare-faced, derivative assets default to entering the makeup and styling process. The system should analyze makeup and styling needs based on clues provided by the user and decide the intensity among Basic Makeup, Light Makeup, and Formal Makeup, rather than maintaining a bare face.

### L1 Clue Analysis and Makeup Decision

| Step | Processing Content | Decision Result |
|---|---|---|
| S1 | Extract user clues: facial state words, emotion words, intensity words | Form a summary of makeup needs |
| S2 | Filter non-makeup clues: props/scene/action/pose words are not used as basis for makeup | Prevent misjudgment |
| S3 | Match the makeup style matrix and provide an intensity level | Basic Makeup / Light Makeup / Formal Makeup |
| S4 | Generate the final L1 prompt | Output only the conclusion, not the analysis process |

### Clue to Makeup Mapping (Execution Standard)

| Clue Type | Typical Clues | L1 Decision |
|---|---|---|
| No obvious facial emphasis clues | Only costume/hairstyle changes, no emphasis on emotion or state | Basic Makeup |
| Slight facial clues | Gentle, smiling, light eyelash flutter, slight complexion lift | Light Makeup (very light) |
| Clear frailty clues | Pale complexion, extremely light lip color, slight redness under eyes | Frail Pear Makeup (Light Makeup) |
| Clear formal ceremony clues | Full dress, ceremony, luxurious appearance | Formal Makeup (controlled) |

> Decision Principle: All derivative assets must have makeup and styling; first look at facial clues to determine intensity and style. Changes in props, scenes, or poses must not independently raise the makeup intensity.

### Female Makeup Style Matrix

| Style | Applicable Scene | Core Prompt |
|---|---|---|
| Elegant Plain Makeup | Daily, first meeting, boudoir | Elegant makeup, lightly brushed eyebrows, plain clear face |
| Cold Frost Makeup | Formal, confrontation, power | Cold and glamorous makeup, sharp brows and eyes, thin cold lips |
| Soft Peach Makeup | Sweet romance, ambiguity, heart-fluttering | Peach makeup, slight redness at eye corners, moist lip color |
| Frail Pear Makeup | Injured, weak | Pale complexion, extremely light lip color, slight redness under eyes |
| Luxurious Phoenix Makeup | Grand wedding, full dress | Heavy luxurious makeup, vermilion lips and phoenix eyes |

### Universal Base Skin (Shared by All Makeup)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | Dewy skin, natural translucency | Dewy skin, creamy porcelain skin, luminous skin |
| Whiteness | Cool white skin, translucent not ashen | Milky skin, milky white skin |
| Inner Glow | Soft glow from inside out | Inner glow, skin translucent and glowing |
| Prohibited | Matte/dead white/waxy/oiliness/overexposure | — |

### Basic Makeup Refinement (Default Level)

| Item | Constraint | Prompt |
|---|---|---|
| Brows | Lightly groomed following the base model's brow shape, do not change brow type | Natural brow grooming, clean brow shape |
| Eyes | Very light eye makeup, emphasizing clarity and spirit | Clear eyes, very light inner eyeliner |
| Cheeks | Very light complexion lift, no obvious color piling | Natural cheek complexion, slight complexion lift |
| Lips | Nude pink or light pink tint, maintain restraint | Natural moist lip color, light pink lip color |
| Overall | Visible makeup, but very light makeup feel | Basic makeup, pseudo-bare-face makeup feel, natural refinement |

### By Area (Example: Elegant Plain Makeup)

| Area | Constraint | Prompt |
|---|---|---|
| Base Makeup | Thin and translucent, dewy slight sheen | Thin base makeup, dewy creamy skin |
| Brow Makeup | Distant mountain brows/Willow leaf brows, grey-brown light brush | Distant mountain dark brows, lightly brushed eyebrows |
| Eye Makeup | Very light eyeshadow, inner eyeliner, long lashes | Clear eye makeup, long lashes |
| Blush | Very light pale pink, slight sweep on apple of cheek | Very light blush, pale pink slight flush |
| Lip Makeup | Moist light pink, slight sheen | Moist light pink lip color |

### Male Makeup

| Item | Constraint | Prompt |
|---|---|---|
| Base Skin | Dewy creamy skin, fair and translucent, fresh and natural | Dewy skin, creamy skin, luminous skin |
| Principle | Pseudo-bare-face—looks like no makeup but skin is excellent | Pseudo-bare-face, naturally good skin |
| Brows | Natural thick brows, no drawn brows | Natural sword brows, heroic brow shape |
| Lip Color | Natural blood color, slightly moist | Natural lip color, blood color feel |

---

## IV. Hairstyle Styling Constraints (L2)

### Female Styling Types

| Style | Description | Applicable | Prompt |
|---|---|---|---|
| Half-Tied Cloud Bun | Top bun + hanging hair at back | Daily, outing | Half-tied cloud bun, half-tied black hair |
| Flying Immortal Bun | High bun flying up, flowing | Fairyland, appearance | Flying immortal bun, high bun flying up |
| Fallen Horse Bun | Side low bun, lazy | Private, ambiguous | Fallen horse bun, lazy side bun |
| Double Ring Bun | Symmetrical double buns, youthful | Young characters | Double ring bun, youthful double buns |
| Fully Loose Hair | Long hair fully loose, with simple hair accessories | Injured, down on luck | Long hair scattered, black hair like a waterfall |
| Tied Ponytail | High tie, capable | Martial arts, action | Tied high ponytail, capable and crisp |

### Female Hair Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Style | Hyper-maximalism, matching the costume | Hyper-maximalist hair accessories, luxurious and exquisite |
| Material | Metal + Beads/Jade + Tassels | Gold thread tassels, beads and jade all over the head |
| Craftsmanship | Master craftsmanship, ultra-fine | Master craftsmanship, finely carved and polished |

### Male Styling Types

| Style | Applicable | Prompt |
|---|---|---|
| Tied Half-Crown | Daily, scholar | Tied half-crown, jade hairpin tied hair |
| Full Crown High Tie | Formal, court | Full crown high tie, jade crown tied hair |
| Loose Hair Over Shoulders | Private, injured | Loose hair over shoulders, long hair like ink |
| War Tied Ponytail | Combat, martial arts | High tied war hair, crisp ponytail |

---

## V. Costume Constraints (L3+L4)

### Female Costume Matrix

| Style | Cut | Applicable | Prompt |
|---|---|---|---|
| Ethereal Flowing Dress | Multi-layer wide-sleeve robe, Wei-Jin style | Daily, fairyland | Wide-sleeve robe, multi-layer garments, flowing fabric |
| Dignified Formal Dress | Curved-hem deep robe/Ru skirt | Court, banquet | Curved-hem deep robe, dignified and luxurious |
| Light Daily Wear | Narrow-sleeve Ru skirt/Short shirt | Action, martial arts | Narrow-sleeve short shirt, light and crisp |
| Nightwear | Thin gauze inner shirt, plain color | Indoor, night | Plain nightwear, loose and comfortable |
| Grand Wedding Dress | Phoenix crown and xiapei, layered red dress | Wedding | Phoenix crown and xiapei, layered red garments |

### Female Costume Universal Constraints

| Item | Constraint | Prompt |
|---|---|---|
| Main Color | White/Moon white/Silver grey as default | White exquisite clothes, plain clothes like snow |
| Material | Thick flowing + Embroidery + Pearl luster fabric | Thick flowing fabric, pearl luster embroidery |
| Texture | Texture must be ultra-clear | Clear clothing texture, ultra-clear texture |
| Shoulders | Shoulder ornaments/Pibo/Cloud shoulders | Luxurious cloud shoulders, decorated shoulders |
| Layers | Multi-layered wearing, distinct layers | Multi-layered wearing, distinct layers |

### Male Costume Matrix

| Style | Applicable | Prompt |
|---|---|---|
| Scholar Elegant Dress | Daily, study | Wide-sleeve long shirt, moon white shirt |
| Warrior Sturdy Dress | Combat, martial training | Narrow-sleeve sturdy dress, dark war uniform |
| Black Robe Large Cloak | Appearance, night travel | Ink-colored large cloak, fluttering cape |
| Daily Casual Wear | Casual, private | Plain daily wear, simple casual wear |
| Formal Court Dress | Court, ceremony | Formal court dress, luxurious ceremonial robe |

---

## VI. Accessory Constraints (L5)

### Female Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Headwear | Hyper-maximalism, not thin | Hyper-maximalist headwear, beads and jade all over the head |
| Earrings | Dangling tassels/Jade earrings | Tassel earrings, jade earrings dangling |
| Necklace | Yingluo/Necklace | Luxurious yingluo, exquisite necklace |
| Waist Ornaments | Gongtao/Jade pendant | Flowing gongtao, jade pendant at waist |
| Hand Ornaments | Jade bracelet/Armlet | Translucent jade bracelet, exquisite armlet |

### Male Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Hair Crown | Jade crown/Gold crown, exquisite | Jade crown tied hair |
| Waist Belt | Wide waist belt/Leather belt | Wide waist belt, distinct texture |
| Jade Pendant | Translucent and warm | Jade pendant at waist |
| Weapon | Sword/Fan/Flute (optional) | Long sword at side, folding fan half-hidden |

---

## VII. Costume & Makeup Combination Quick Reference

| Scene | Makeup | Hairstyle | Costume | Accessories |
|---|---|---|---|---|
| Daily Boudoir | Elegant Plain Makeup | Half-Tied Cloud Bun | Ethereal Flowing Dress | Medium |
| First Meeting | Elegant Plain Makeup | Half-Tied/Flying Immortal | Ethereal Flowing Dress | Medium to High |
| Sweet Romance Interaction | Soft Peach Makeup | Half-Tied/Fallen Horse | Ethereal/Light | Medium |
| Formal Appearance | Cold Frost Makeup | Flying Immortal Bun | Dignified Formal Dress | Hyper-maximalist |
| Night Secret Talk | Elegant/Peach Makeup | Fully Loose/Fallen Horse | Nightwear | Minimal |
| Injured and Down on Luck | Frail Pear Makeup | Fully Loose (messy) | Damaged Daily Wear | Minimal/None |
| Grand Wedding Ceremony | Luxurious Phoenix Makeup | Flying Immortal Bun | Wedding Dress | Hyper-maximalist |
| Martial Arts Action | Plain Makeup (very light) | Tied Ponytail | Light Daily Wear | Simple |

---

> **🔍 Uncovered Scene Inference Rules**
>
> When the scene/situation described by the user is not in the table above, infer based on the core genes of this style:
>
> | Inference Dimension | Realistic Ancient Style Genes |
> |---|---|
> | Makeup Intensity | Default Elegant Plain Makeup (dewy skin + realistic hair); Power/Confrontation → Cold Frost Makeup; Heart-fluttering/Ambiguity → Soft Peach Makeup; Injured/Weak → Frail Pear Makeup; Grand Wedding/Ceremony → Luxurious Phoenix Makeup |
> | Hairstyle | Daily/Boudoir → Half-Tied Cloud Bun; Fairyland/Appearance → Flying Immortal Bun; Private/Ambiguity → Fallen Horse Bun; Injured/Down on Luck → Fully Loose Hair; Action → Tied Ponytail; Hair strands must be distinct |
> | Costume | Realistic texture priority; Daily → Wide-sleeve robe/Light flowing; Formal → Curved-hem deep robe; Action → Narrow-sleeve daily wear; Main color default White/Moon white; Texture must be ultra-clear |
> | Accessory Complexity | Realistic craftsmanship hyper-maximalism (master craftsmanship finely carved); Daily → Medium; Formal → Hyper-maximalist (beads and jade all over the head + yingluo + gongtao); Action → Simple; Injured → Minimal/None |
> | Texture Baseline | Realistic photography anchor; Dewy creamy porcelain skin + hair details always maintained; Prohibited 3D rendering/CG feel |

## VIII. Four-View Setting Sheet Specification

> After derivative costume and makeup superposition, a four-view setting sheet must still be output to ensure consistency of costume, makeup, and styling from all angles.

### View Definitions

| Position | View | Angle | Shot Size | Requirement | Prompt |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Face to collarbone | Face occupies 60%+, clear facial features/makeup | portrait closeup, face detail, makeup detail |
| Left 2 | Front View | Frontal 0° | Full body standing | Facing camera, full front view of costume | front view, height mark |
| Right 2 | Side View | Right side 90° | Full body standing | Pure side profile, side layers of costume | side view, profile, height mark |
| Right 1 | Back View | Rear 180° | Full body standing | Clear back hair accessories/back costume/hair ends | back view, rear view, height mark |

### Screen Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Pure neutral grey #E8E8E8 |
| Standing Pose | Natural standing, feet parallel slightly apart, arms hanging naturally or slightly extended (**Any pose change is prohibited**) |
| Expression | Subtle expression matching the makeup style (e.g., Elegant Plain Makeup → calm, Peach Makeup → smiling), limited to facial micro-expressions, not involving body movements |
| Lighting | Even soft light, main light from front + fill light from both sides, no hard shadows |
| Consistency | Face/makeup/hairstyle/hair accessories/costume/accessories are completely consistent across the four views |
| Aspect Ratio | Recommended 4:1 or 3:1 |

---

## IX. Prompt Template

### Output Format Constraints

| Item | Constraint |
|---|---|
| Output Content | **Output only the prompt text**, no other content |
| Prohibited Output | Quick reference tables, layered construction plans, visual constraint tables, prohibition tables, derivative plans, output suggestions, core element tables, and any non-prompt content |
| Prohibited Scenes | Character derivative assets **do not include scene/environment descriptions**, do not output any scene/environment/weather/background narrative content (scenes belong to the scene asset scope) |
| Prohibited Props | **Do not include any prop interactions**, do not output umbrellas/swords/fans/books/lanterns/wine cups and other handheld items or interactive items (props belong to the prop asset scope) |
| Prohibited Pose Changes | **Do not change the base model pose**, do not output any actions or posture changes such as walking/looking back/raising hand/sideways/running, maintain natural standing |
| Format | Directly output the usable prompt code block, no titles, tables, explanations, or plan comparisons required |

### Complete Costume & Makeup Superposition (Four Views)

```
Using the character's base image as the base, overlay costume and makeup via img2img,
Ancient style {gender} character four-view design sheet, realistic photography, ancient style realistic documentary, high contrast, extreme detail, 8K, ultra-realistic
character design sheet, character turnaround,
Keep the base facial features unchanged, {overall temperament},
【L1·Makeup】Decide based on user clues: {base makeup/light makeup/formal makeup}; use {makeup style}, dewy cream porcelain skin, {eyebrow makeup}, {eye makeup}, {lip makeup},
【L2·Hairstyle】{style type}, distinct hair strands, {hair accessory description},
【L3+L4·Clothing】{main color}{style}, {material}, {decorative craft}, clear fabric texture, ultra-clear texture,
【L5·Accessories】{headwear}, {earrings}, {necklace}, {waist accessory},
Arranged side by side from left to right in the same frame: portrait close-up + front view + side view + back view,
Natural standing pose, pure neutral gray background, even soft light, no hard shadows,
Four-view consistency, delicate facial rendering, delicate hair rendering, ultra-clear texture details
No text in the image
```

---

## X. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The overlaid face must be consistent with the base model |
| R2 | Clothing must use "clear fabric texture + ultra-clear texture" |
| R3 | Female accessories must be "ultra-maximalist + master craftsmanship" |
| R4 | Makeup, hairstyle, clothing, and accessories must have a unified style |
| R5 | Must output a four-view character sheet (portrait close-up + front view + side view + back view) |
| R6 | Must specify "pure neutral gray background" |
| R7 | Must specify "four-view consistency" |
| R8 | **Output prompts only** — Prohibited from outputting any non-prompt content such as quick reference tables, layered schemes, visual constraints, prohibitions, derivative schemes, or output suggestions |
| R9 | **Prohibited from including scene descriptions** — Character derivative assets do not involve scenes, environments, weather, or background narratives; scenes are an independent asset type |
| R10 | **Prohibited from including prop interactions** — Do not include any held items or interactive objects (umbrellas, swords, fans, books, etc.); props are an independent asset type |
| R11 | **Posture must remain unchanged** — Must maintain the natural standing posture of the base model; any changes in action, body type, or pose are prohibited |
| R12 | **L1 must analyze before deciding** — First parse the user's facial cues, then determine basic makeup, light makeup, or formal makeup |
| R13 | **All derivative assets require makeup and styling** — In normal cases, do not maintain a bare face; use at least basic makeup |
| R14 | **Makeup intensity is controlled** — Even when applying makeup, it must be restrained; modern heavy makeup or exaggerated cosmetic effects are not allowed |
| R15 | **Props, scenes, and actions are not grounds for intensity escalation** — Based solely on props, environment, or action information, basic makeup must not be elevated to a stronger makeup level |

### Strictly Prohibited

| ID | Prohibition |
|---|---|
| X1 | Facial offset after overlay |
| X2 | Accessories that are too simple/modern (for females) |
| X3 | Conflicting styles between makeup and clothing |
| X4 | Complex scene backgrounds (must be pure gray background) |
| X5 | Inconsistency in clothing, makeup, and styling across the four views |
| X6 | Outputting any content other than the prompt (tables, schemes, suggestions, explanations, variants, etc.) |
| X7 | Adding scene descriptions to character derivative assets (mountain paths, rain scenes, indoors, streets, weather, and other environmental elements) |
| X8 | Outputting sections such as "Core Element Quick Reference," "Layered Construction Scheme," "Visual Constraints," "Prohibitions," or "Derivative Schemes" |
| X9 | Adding any prop interactions (held umbrellas, swords, fans, books, lanterns, wine glasses, etc.) |
| X10 | Changing the base model's posture (action descriptions such as walking, looking back, raising a hand, turning sideways, running, looking down, or looking up) |
| X11 | Adding descriptions linking expressions and postures (narrative descriptions such as "walking at a 45-degree side angle with a slight smile at the corner of the mouth") |
| X12 | Applying a fixed makeup style directly without analyzing the user's cues |
| X13 | Incorrectly maintaining a bare face, resulting in derivative assets lacking the required makeup and styling |
| X14 | Incorrectly upgrading makeup solely due to prop, scene, or action words, leading to incorrect makeup intensity decisions |


