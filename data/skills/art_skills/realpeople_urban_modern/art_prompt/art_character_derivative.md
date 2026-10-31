# Character Derivative Asset Generation · Urban Realism Constraint Manual

---

## I. Overlay Principles

1. **Face Invariance** — After overlaying, facial features must remain completely identical to the base model; facial drift is prohibited.
2. **Pose Invariance** — Maintain the natural standing pose of the base model; any changes in pose, action, or body posture are prohibited.
3. **Layer-by-Layer Control** — Each layer is described independently to facilitate layer-specific replacement (e.g., changing outfit without changing makeup).
4. **Style Consistency** — All costume and makeup elements must adhere to the same aesthetic system.
5. **Quality Preservation** — The quality standard after overlaying must not be lower than that of the base model.
6. **Costume & Makeup Scope Only** — Only overlay makeup, hairstyle, clothing, and accessories. Introducing props, scenes, environments, or actions is prohibited.

---

## II. Overlay Hierarchy

| Level | Content | Description |
|---|---|---|
| L0 | Base Model | Base image model, unmodified |
| L1 | Makeup (Decision Layer) | First analyze user cues, then decide the intensity of "Basic Makeup / Light Makeup / Formal Makeup" |
| L2 | Hairstyle & Styling | Hairstyle design + hair accessories |
| L3 | Mid-layer / Innerwear | Replaces the white basic mid-layer |
| L4 | Outerwear / Main Garment | T-shirts, shirts, suits, coats, dresses, etc. |
| L5 | Accessories | Watches, glasses, earrings, necklaces, belts, hand jewelry |

> **Scope Boundary**: Character derivative assets include only levels L0–L5 (costume, makeup, and styling). They do not include props (handheld items such as phones, keys, bags, pens), scene environments (indoor/outdoor/weather, etc.), or poses/actions (walking, looking back, raising hands, etc.). These belong to the scope of other asset types.

---

## III. Makeup Constraints (L1)

### Strategy from Base Model to Derivative Makeup (Key)

> Although the character base model is in a natural state, derivative assets default to entering the makeup and styling workflow. The system should analyze makeup and styling needs based on cues provided by the user and decide the intensity among Basic Makeup, Light Makeup, and Formal Makeup.

### L1 Cue Analysis and Makeup Decision

| Step | Processing Content | Decision Result |
|---|---|---|
| S1 | Extract user cues: facial state words, emotion words, intensity words | Form a summary of makeup requirements |
| S2 | Filter non-makeup cues: props/scene/action/pose words are not used as basis for makeup | Prevent misjudgment |
| S3 | Match the makeup style matrix and assign an intensity level | Basic Makeup / Light Makeup / Formal Makeup |
| S4 | Generate the final L1 prompt | Output only the conclusion, not the analysis process |

### Cue-to-Makeup Mapping (Execution Standard)

| Cue Type | Typical Cues | L1 Decision |
|---|---|---|
| No obvious facial emphasis cues | Only clothing/hairstyle changes, no emphasis on emotion or state | Basic Makeup |
| Slight facial cues | Brightened complexion, energetic appearance, natural smile | Light Makeup (extremely light) |
| Clear workplace cues | Formal meetings, business occasions, important events | Formal Makeup (controlled) |
| Clear casual cues | Daily outings, casual dates, weekend activities | Light Makeup / Basic Makeup |

### Female Makeup Style Matrix

| Style | Applicable Scenarios | Core Prompt Terms |
|---|---|---|
| Bare Makeup | Daily, commuting, casual | Bare makeup, natural base makeup, sheer |
| Workplace Makeup | Meetings, business, formal | Refined professional makeup, capable |
| Date Makeup | Dates, banquets, parties | Refined makeup, rosy complexion |
| Party Makeup | Parties, performances, events | Refined makeup, aura |

### Universal Base Skin (Shared by All Makeup)

| Item | Constraint | Prompt Terms |
|---|---|---|
| Texture | Natural skin, preserve texture | Natural skin, preserve texture |
| Whiteness | Natural skin tone, not overly white | Natural skin tone, healthy skin tone |
| Inner Glow | Natural glow | Healthy skin glow |
| Prohibited | Over-smoothing / mask-like / plastic look | — |

### Basic Makeup Details (Default Level)

| Item | Constraint | Prompt Terms |
|---|---|---|
| Base Makeup | Light and sheer, natural glow | Light base makeup, natural glow |
| Eyebrows | Lightly groomed following the base model's brow shape | Natural brow grooming, clean brow shape |
| Eyes | Extremely light eye makeup, emphasizing sheer look | Sheer eyes, extremely light eyeliner |
| Cheeks | Extremely light complexion brightening | Natural cheek complexion |
| Lips | Natural lip color or light pink tint | Natural, moist lip color |
| Overall | Makeup is visible but the effect is very light | Basic makeup, pseudo-bare face |

### Male Makeup

| Item | Constraint | Prompt Terms |
|---|---|---|
| Base Skin | Natural skin, fresh and clean | Natural skin, fresh and clean |
| Principle | Pseudo-bare face — looks like no makeup but skin is excellent | Pseudo-bare face, naturally good skin |
| Eyebrows | Natural brow shape, no drawn brows | Natural brow shape |
| Lip Color | Natural blood color, slightly moist | Natural lip color |

---

## IV. Hairstyle & Styling Constraints (L2)

### Female Styling Types

| Style | Description | Applicable | Prompt Terms |
|---|---|---|---|
| Natural Long Hair | Long hair falling naturally | Daily, casual | Natural long hair, hair over shoulders |
| Ponytail | High ponytail / low ponytail / half ponytail | Sports, commuting | High ponytail, capable ponytail |
| Updo | Bun / updo | Formal, banquet | Elegant updo, low bun |
| Short Hair | Shoulder-length short hair / bob | Fashion, capable | Shoulder-length short hair, bob hairstyle |
| Wavy Curls | Natural slight curls / big waves | Dates, parties | Natural curls, wavy hairstyle |
| Half-Tied Hair | Half tied, half loose, simple hair accessory | Daily, commuting | Half-tied hair, half-loose hair |

### Female Hair Accessories

| Item | Constraint | Prompt Terms |
|---|---|---|
| Style | Simple and modern, matching the outfit | Simple hair accessory, modern hair accessory |
| Material | Metal / leather / acrylic | Metal hair clip, leather hair band |
| Craftsmanship | Refined craftsmanship, clear details | Refined hair accessory, clear details |

### Male Styling Types

| Style | Applicable | Prompt Terms |
|---|---|---|
| Short Hair | Daily, business, casual | Short hair, fresh short hair |
| Medium-Long Hair | Casual, artistic | Medium-long hair, shoulder-length hair |
| Side-Parted Hair | Business, formal | Side-parted hair, business hairstyle |
| Slightly Curly Hair | Casual, fashion | Slightly curly hair, fashionable hairstyle |

---

## V. Clothing Constraints (L3+L4)

### Female Clothing Matrix

| Style | Garment Type | Applicable | Prompt Terms |
|---|---|---|---|
| Business Formal | Suit / shirt / pencil skirt | Workplace, meetings | Professional suit, business formal wear |
| Casual Fashion | T-shirt / jeans / casual pants | Daily, casual | Casual outfit, fashionable daily wear |
| Date Outfit | Dress / shirt / skirt | Dates, parties | Dress, date outfit |
| Sports Casual | Sportswear / hoodie / yoga pants | Sports, casual | Sportswear, casual sports |
| Evening Gown | Gown / evening dress | Banquets, events | Evening gown, elegant gown |

### Female Clothing General Constraints

| Item | Constraint | Prompt Terms |
|---|---|---|
| Main Color | Matched to the scene, natural colors | Natural colors, harmonious tones |
| Material | Real fabric texture clearly visible | Clear fabric texture |
| Quality | Texture must be ultra-clear | Clear clothing quality, ultra-clear texture |
| Layering | Distinct layers, not overly layered | Distinct layers, natural coordination |

### Male Clothing Matrix

| Style | Applicable | Prompt Terms |
|---|---|---|
| Business Formal | Suit / shirt / slacks | Workplace, meetings | Business suit, formal wear |
| Casual Fashion | Shirt / T-shirt / jeans | Daily, casual | Casual outfit, fashionable daily wear |
| Sports Casual | Sportswear / hoodie / sweatpants | Sports, casual | Sportswear, casual sports |
| Simple Daily | Simple shirt / casual pants | Daily, commuting | Simple outfit, daily casual |

---

## VI. Accessory Constraints (L5)

### Female Accessories

| Type | Constraint | Prompt Terms |
|---|---|---|
| Jewelry | Simple and refined, not excessive | Simple earrings, refined necklace |
| Watch | Simple / fashionable, matching the style | Simple watch, fashionable wristwatch |
| Glasses | Clear lenses / decorative frames, clean | Glasses, clear frames |
| Belt | Simple / fashionable, matching the outfit | Belt, waist belt |

### Male Accessories

| Type | Constraint | Prompt Terms |
|---|---|---|
| Watch | Simple / business, matching the style | Simple watch, business wristwatch |
| Glasses | Clear lenses / decorative frames, clean | Glasses, clear frames |
| Belt | Simple / fashionable, matching the outfit | Belt, leather belt |
| Accessories | Simple and refined, not excessive | Simple accessories, refined details |

---

## VII. Costume & Makeup Combination Quick Reference

| Scene | Makeup | Hairstyle | Clothing | Accessories |
|---|---|---|---|---|
| Daily Commuting | Bare Makeup | Natural long hair / Ponytail | Business formal / Casual fashion | Watch / Simple |
| Business Meeting | Workplace Makeup | Updo / Ponytail | Business formal | Watch / Simple jewelry |
| Weekend Casual | Light Makeup | Natural long hair | Casual fashion / Sports casual | Simple |
| Date/Party | Date Makeup | Wavy curls / Updo | Date outfit | Refined jewelry |
| Banquet/Event | Formal Makeup | Elegant updo / Waves | Evening gown | Refined jewelry |
| Sports/Fitness | Bare Makeup | High ponytail / Bun | Sports casual | Simple |

---

> **🔍 Uncovered Scene Inference Rules**
>
> When the scene/situation described by the user is not in the table above, infer based on the core genes of this style:
>
> | Inference Dimension | Realistic Urban Human Genes |
> |---|---|
> | Makeup Intensity | Default Bare Makeup (natural skin); Business/Formal → Workplace Makeup (capable and refined); Date/Party → Date Makeup (rosy complexion); Party/Performance → Party Makeup; Sports/Outdoor → Bare Makeup or Light Makeup |
> | Hairstyle | Commuting/Workplace → Ponytail or half-tied; Casual/Date → Natural long hair or wavy curls; Sports → High ponytail or bun; Formal → Elegant updo; Fashion occasions → Short hair |
> | Clothing | Occasion determines refinement; Workplace → Business formal; Casual → Daily fashion; Date → Dress/Skirt; Sports → Sports casual; Banquet → Gown; Real fabric texture is always maintained |
> | Accessory Complexity | Sports → Simple or none; Daily → Watch + Simple; Date → Refined jewelry; Banquet → Refined full set |
> | Quality Baseline | Anchored to realistic human photography; Natural skin texture + hair strand details are always maintained; Over-smoothing/plastic look/3D rendering is prohibited |

## VIII. Four-View Setup Diagram Specifications

### View Definitions

| Position | View | Angle | Shot Size | Requirements | Prompt Terms |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Face to collarbone | Face occupies 60%+, facial features/makeup clear | portrait closeup, face detail, makeup detail |
| Left 2 | Front View | Frontal 0° | Full-body standing | Facing camera, full front view of clothing | front view, height mark |
| Right 2 | Side View | Right side 90° | Full-body standing | Pure side profile, side layers of clothing | side view, profile, height mark |
| Right 1 | Back View | Rear 180° | Full-body standing | Clear back hairstyle/back clothing | back view, rear view, height mark |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Pure neutral gray #E8E8E8 |
| Standing Pose | Natural standing, feet parallel and slightly apart, arms hanging naturally |
| Expression | Subtle expression matching the makeup style, limited to facial micro-expressions |
| Lighting | Even soft light, main light from front + fill light from both sides, no hard shadows |
| Consistency | Face/makeup/hairstyle/clothing/accessories are completely consistent across the four views |
| Frame Ratio | Recommended 4:1 or 3:1 |

---

## IX. Prompt Templates

### Output Format Constraints

| Item | Constraint |
|---|---|
| Output Content | **Output only the prompt text**, do not output any other content |
| Prohibited Output | Quick reference tables, layered construction plans, visual constraint tables, prohibition tables, derivative plans, output suggestions, core element tables, and any other non-prompt content |
| Prohibited Scenes | Character derivative assets **do not include scene/environment descriptions**, do not output any scene/environment/weather/background narrative content |
| Prohibited Props | **Do not include any prop interactions**, do not output handheld items or interactive objects such as phones/keys/bags/pens/wine glasses |
| Prohibited Pose Changes | **Do not change the base model pose**, do not output any actions such as walking/looking back/raising hands/sideways/running |
| Format | Directly output the usable prompt code block, no titles, tables, explanations, or plan comparisons required |

### Full Costume & Makeup Overlay (Four Views)

```
Using the character's base image as the base, overlay costume, makeup, and styling via img2img,
Urban {gender} character four-view design sheet, realistic photography, urban realism, high contrast, extreme detail, 8K, ultra-realistic
character design sheet, character turnaround,
Maintain the base facial features unchanged, {overall temperament},
【L1·Makeup】Decide based on user clues: {base makeup/light makeup/formal makeup}; use {makeup style}, natural skin, {eyebrow makeup}, {eye makeup}, {lip makeup},
【L2·Hairstyle】{style type}, distinct hair strands, {hair accessory description},
【L3+L4·Clothing】{main color}{style}, {material}, {decorative craft}, clear fabric texture, ultra-clear texture,
【L5·Accessories】{headwear}, {earrings}, {necklace}, {watch},
Arranged side by side from left to right in the same frame: portrait close-up + front view + side view + back view,
Natural standing pose, pure neutral gray background, even soft light, no hard shadows,
Four-view consistency, delicate facial rendering, delicate hair rendering, ultra-clear texture details
No text of any kind in the image
```


---

## 10. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The overlaid face must be consistent with the base model |
| R2 | Clothing must use "clear fabric texture + ultra-clear texture" |
| R3 | Makeup/hair/clothing/accessories style must be unified |
| R4 | Must output a four-view setting image (portrait close-up + front view + side view + back view) |
| R5 | Must specify "pure neutral gray background" |
| R6 | Must specify "four-view consistency" |
| R7 | **Output prompts only** — Prohibited from outputting any non-prompt content such as quick reference tables, layered schemes, visual constraints, prohibitions, derivative schemes, or output suggestions |
| R8 | **Prohibited from including scene descriptions** — Character derivative assets do not involve scenes/environments/weather/background narratives |
| R9 | **Prohibited from prop interaction** — Does not include any handheld/interactive items (phones/bags/keys/pens, etc.) |
| R10 | **Posture remains unchanged** — Must maintain the natural standing posture of the base model |
| R11 | **L1 must analyze before deciding** — First parse the user's facial cues, then determine basic makeup/light makeup/formal makeup |
| R12 | **All derivative assets require makeup and styling** — In normal cases, do not maintain a bare face; use at least basic makeup |

### Strictly Prohibited

| ID | Prohibition |
|---|---|
| X1 | Facial offset after overlay |
| X2 | Exaggerated makeup/modern heavy makeup |
| X3 | Conflicting styles between makeup and clothing |
| X4 | Complex scene backgrounds (must be pure gray background) |
| X5 | Inconsistent clothing/makeup/styling between the four views |
| X6 | Outputting any content other than the prompt (tables/schemes/suggestions/explanations/variants, etc.) |
| X7 | Adding scene descriptions to character derivative assets (indoor/outdoor/streets/weather, etc.) |
| X8 | Outputting sections such as "Core Elements Quick Reference," "Layered Construction Scheme," "Visual Constraints," "Prohibitions," or "Derivative Schemes" |
| X9 | Adding any prop interaction (handheld items such as phones/bags/keys/pens/wine glasses, etc.) |
| X10 | Changing the base model's posture (action descriptions such as walking/looking back/raising hand/sideways/running/looking down, etc.) |
| X11 | Adding descriptions linking expression and posture (narrative descriptions such as "walking at a 45° side angle with a slight smile at the corner of the mouth," etc.) |
| X12 | Directly applying fixed makeup without analyzing the user's cues |
| X13 | Incorrectly maintaining a bare face, resulting in derivative assets lacking the required makeup and styling |