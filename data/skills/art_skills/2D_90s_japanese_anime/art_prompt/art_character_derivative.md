# 90s Retro Japanese Animation Style - Character Derivative Asset Generation · Constraint Manual

---

## I. Overlay Principles

1. **Unchanged Face** — After overlaying, facial features must be completely consistent with the base model; facial drift is prohibited.
2. **Unchanged Pose** — Maintain the natural standing pose of the base model; any changes in pose, action, or body posture are prohibited.
3. **Layer-by-Layer Control** — Each layer is described independently to facilitate layer-by-layer replacement (change outfit without changing makeup).
4. **Style Consistency** — All costume and makeup elements must adhere to the 90s retro hand-drawn flat-color aesthetic system, but avoid templated replication.
5. **Preserve Character Differences** — Different characters should retain clothing differences based on age, status, personality, and occasion to avoid "everyone wearing the same outfit."
6. **No Quality Drop** — The hand-drawn texture standard after overlaying must not be lower than the base model.
7. **Pure Costume & Makeup Scope** — Only overlay makeup/hair/clothing/footwear/accessories; introducing props, scenes, environments, or actions is prohibited.

---

## II. Overlay Hierarchy

| Layer | Content | Description |
|---|---|---|
| L0 | Base Model | Base image model, no modifications |
| L1 | Makeup (Decision Layer) | Analyze makeup intensity based on user cues |
| L2 | Hairstyle | Buns/braids/updos + hair accessories |
| L3 | Innerwear/Underlayer | Replace the white basic innerwear |
| L4 | Outerwear/Main Garment | Kimono/modern wear/retro wear, etc.
| L5 | Footwear | Shoe type/socks/shoe material/color scheme |
| L6 | Accessories | Headwear/earrings/necklaces/waist accessories/hand accessories |

> **Scope Boundary**: Character derivative assets include only L0–L6 layers; they do not include props, scene environments, or poses/actions.

---

## III. Makeup Constraints (L1)

### Base Model to Derivative Makeup Strategy (Key)

> The character base model is bare-faced, but derivative assets default to entering the makeup process. The system should analyze makeup needs based on user cues and decide the intensity among basic makeup/light makeup/formal makeup.

### Cue-to-Makeup Mapping

| Cue Type | Typical Cues | L1 Decision |
|---|---|---|
| No obvious facial emphasis cues | Only clothing/hair changes | Basic Makeup |
| Slight facial cues | Smiling, slightly improved complexion | Light Makeup |
| Clear frailty cues | Pale complexion, extremely light lip color | Frailty Makeup |
| Clear formal ceremony cues | Full dress, ceremony | Formal Makeup |

### Female Makeup Style Matrix

| Style | Applicable Scene | Core Prompts |
|---|---|---|
| Daily Light Makeup | Daily, first meeting | Light makeup, natural look, nostalgic feel |
| Date Makeup | Date, date | Sweet makeup, warm pink, good complexion |
| Formal Makeup | Banquet, ceremony | Refined makeup, distinct eye makeup |
| Frailty Makeup | Injured, weak | Pale complexion, light lip color, light eye makeup |
| Retro Makeup | Nostalgic scenes, classic | Retro makeup, 90s style |

### General Base Skin

| Item | Constraint | Prompts |
|---|---|---|
| Texture | Flat color application, uniform tone | Flat color application, uniform skin |
| Whiteness | Warm white skin, soft and not glaring | Warm white skin, soft fairness |
| Translucency | Retain soft light feel within flat color | Translucent skin, soft glow |
| Prohibited | Excessive digitalization/oiliness/heaviness | — |

### Male Makeup

| Item | Constraint | Prompts |
|---|---|---|
| Base Skin | Healthy skin tone, flat color application | Healthy skin tone, flat color application |
| Principle | Pseudo-bare face — looks like no makeup but good skin | Pseudo-bare face, naturally good skin |
| Eyebrows | Natural thick brows, no drawn brows | Natural sword-shaped brows, sharp brow shape |
| Lip Color | Natural blood color, slightly moist | Natural lip color, blood-like feel |

---

## IV. Hairstyle Constraints (L2)

### Female Hairstyle Types

| Style | Description | Applicable | Prompts |
|---|---|---|---|
| Twin Tails | Tails on both sides, common in 90s | Girl, daily | Twin tails, 90s style |
| High Ponytail | Ponytail on top of head, capable | Sports, action | High ponytail, capable |
| Long Hair Loose | Long hair fully loose, gentle | Gentle, daily | Long hair loose, smooth |
| Side Ponytail | Ponytail on one side, asymmetric | Playful, individual | Side ponytail, playful |
| Braids | Braid style, refined | Formal, occasions | Braids, refined hairstyle |
| Bun | Bun on top of head, cute | Cute, daily | Bun, cute |

### Female Hair Accessories

| Item | Constraint | Prompts |
|---|---|---|
| Style | Common in 90s, matching clothing | 90s hair accessories, retro style |
| Material | Ribbon/pearls/metal | Ribbon hair accessory, pearl hair accessory |
| Craft | Hand-drawn texture, fits 90s | Hand-drawn hair accessory, 90s style |

### Male Hairstyle Types

| Style | Applicable | Prompts |
|---|---|---|
| Short Hair | Daily, capable | Short hair, capable |
| Medium-Long Hair | Daily, elegant | Medium-long hair, elegant |
| Long Hair Tied | Formal, combat | Long hair tied, handsome |
| Loose Hair | Casual, gentle | Loose hair, gentle |

---

## V. Clothing & Footwear Constraints (L3+L4+L5)

> **Note**: The following styles are style references, not rigid uniform templates. Prioritize free combinations based on character status, age, profession, personality, and occasion, as long as the overall look maintains the 90s retro Japanese animation vibe.

### Female Clothing Matrix

| Style | Style | Applicable | Prompts |
|---|---|---|---|
| Daily Casual | T-shirt/jeans/dress | Daily, campus | Casual wear, comfortable |
| Kimono/Hanfu | Traditional clothing | Occasions, themes | Kimono, Hanfu |
| Sports Wear | Sportswear, hoodie | Sports, casual | Sports wear, energetic |
| Formal Dress | Formal dress, 90s style | Banquet, formal | Formal dress, elegant |
| Uniform | School uniform, 90s uniform | Campus, workplace | Uniform, neat |

### Female Clothing General Constraints

| Item | Constraint | Prompts |
|---|---|---|
| Main Color | Can choose warm, neutral, or low-saturation cool colors based on character setting; avoid uniformity | Nostalgic color scheme, character-specific color scheme |
| Material | Clear fabric texture; choose cotton/knit/uniform wool/silk, etc., based on status | Clear fabric texture, flat color application |
| Texture | Smooth lines, soft colors, retain 90s hand-drawn feel | Smooth lines, soft colors |
| Layers | Distinct layers, rich details, but complexity should match character status | Distinct layers, clear details |

### Male Clothing Matrix

| Style | Applicable | Prompts |
|---|---|---|
| Daily Casual | T-shirt/jeans | Daily, casual |
| Uniform | School uniform, 90s uniform | Uniform, neat |
| Suit | Formal wear, formal | Suit, formal |
| Sports Wear | Sportswear, hoodie | Sports, energetic |
| Kimono/Hanfu | Traditional, occasions | Kimono, Hanfu |

### Footwear Design Matrix (L5)

| Style | Common Female Shoes | Common Male Shoes | Prompts |
|---|---|---|---|
| Daily Campus | Loafers, Mary Janes, short sock leather shoes | Loafers, sneakers | Campus shoes, retro Japanese, simple shoe type |
| Daily Casual | Canvas shoes, low-top sneakers, short boots | Canvas shoes, casual shoes, low-top sneakers | Casual shoes, comfortable, nostalgic color scheme |
| Formal Occasions | Low heels, thin-strap leather shoes, short boots | Leather shoes, short boots | Formal footwear, refined, sharp lines |
| Traditional Clothing | Geta, shallow embroidered shoes, cloth shoes | Geta, cloth shoes, traditional short boots | Traditional footwear, matching clothing |
| Action/Sports | Lightweight sneakers, lace-up short boots | Sneakers, functional short boots | Lightweight footwear, easy to move |

### Footwear General Constraints

| Item | Constraint | Prompts |
|---|---|---|
| Style Consistency | Footwear must coordinate with the era feel of the main garment, but shoe type can vary freely based on character status | Unified with clothing, retro Japanese |
| Clear Structure | Clear layers for shoe opening/heel/laces/socks | Clear shoe type, clear structure |
| Color Scheme | Can echo the main color, secondary color, or character's personal identifier color of the clothing; no fixed single color logic required | Low-saturation color scheme, nostalgic colors |
| Texture | Hand-drawn flat color, smooth lines, avoid exaggerated modern trendy shoe designs | Hand-drawn footwear, flat color application |
| Prohibited | Bare feet prohibited, missing footwear design prohibited, modern exaggerated sneaker tech feel prohibited | — |

---

## VI. Accessory Constraints (L6)

### Female Accessories

| Type | Constraint | Prompts |
|---|---|---|
| Headwear | Headband/hair clip/bow | Hair accessory, refined |
| Earrings | Earrings/studs | Earrings, small |
| Neckwear | Necklace/pendant | Necklace, refined |
| Handwear | Bracelet/band | Bracelet, slender |
| Bag | Handbag, shoulder bag | Handbag, fashionable |

### Male Accessories

| Type | Constraint | Prompts |
|---|---|---|
| Glasses | Glasses/sunglasses | Glasses, fashionable |
| Watch | Watch | Watch, refined |
| Ring | Ring | Ring, simple |
| Scarf | Scarf | Scarf, warm |

---

## VII. Costume & Makeup Combination Quick Reference

| Scene | Makeup | Hairstyle | Clothing | Footwear | Accessories |
|---|---|---|---|---|---|
| Daily Campus | Daily Light Makeup | Twin Tails/Long Hair Loose | Uniform/Daily Casual | Loafers/Mary Janes/Sneakers | Simple |
| First Meeting | Daily Light Makeup | Long Hair Loose/Side Ponytail | Daily Casual | Canvas Shoes/Low Heels | Medium |
| Sweet Date | Date Makeup | Side Ponytail/Bun | Casual/Kimono | Low Heels/Geta | Medium to High |
| Formal Occasion | Formal Makeup | Braids/High Ponytail | Formal Dress/Formal Wear | Low Heel Leather Shoes/Short Boots | Relatively Elaborate |
| Gentle Intimate | Daily Light Makeup | Long Hair Loose | Daily Casual | Soft-soled Shoes/Canvas Shoes | Simple |
| Intense Action | Daily Light Makeup (Very Light) | High Ponytail | Sports Wear | Sneakers/Functional Short Boots | Simple |
| Retro Scene | Retro Makeup | Braids/Twin Tails | Kimono/Retro Wear | Geta/Cloth Shoes | Medium |

> **🔍 Uncovered Scene Inference Rules**
>
> When the user-described scene/situation is not in the table above, infer based on the core genes of this style:
>
> | Inference Dimension | 90s Retro Japanese Animation Gene |
> |---|---|
> | Makeup Intensity | Default Daily Light Makeup (flat color, nostalgic feel); Formal/Ceremony → Formal Makeup; Date/Crush → Date Makeup; Retro Theme → Retro Makeup |
> | Hairstyle | Daily/Girl → Twin Tails or Long Hair Loose; Sports/Action → High Ponytail; Formal → Braids; Playful/Individual → Side Ponytail; Cute → Bun |
> | Clothing | Free variation anchored in 90s style: choose from school uniforms, uniforms, casual wear, kimono, knitwear, jackets, dresses, etc., based on character setting; avoid high homogenization between characters |
> | Footwear | Match loafers, canvas shoes, leather shoes, short boots, geta, etc., based on clothing and status; no fixed single answer |
> | Accessory Density | Daily → Simple (90s style hair accessories + basic accessories); Formal → Medium to Elaborate; Action/Sports → Simple or None |
> | Texture Baseline | Hand-drawn flat color application always locked; smooth lines, soft warm-tone colors; digital feel/3D rendering/modern CG texture prohibited |

---

## VIII. Four-View Setting Sheet Specifications

### View Definitions

| Position | View | Angle | Shot Size | Requirements | Prompts |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Face to collarbone | Face occupies 60%+, clear features/makeup | portrait closeup, face detail |
| Left 2 | Front View | Front 0° | Full body standing | Facing camera, full front view of clothing | front view, full body |
| Right 2 | Side View | Right 90° | Full body standing | Pure side profile, side layers of clothing | side view, profile |
| Right 1 | Back View | Rear 180° | Full body standing | Clear back hair accessories/back clothing | back view, rear view |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame |
| Background | Warm beige #F8F4E8 |
| Standing Pose | Natural standing, feet parallel and slightly apart (**any pose change prohibited**) |
| Expression | Subtle expression matching makeup style (e.g., light makeup → natural, formal makeup → smile) |
| Lighting | Soft cinematic light, uniform soft light, no hard shadows |
| Consistency | Face/makeup/hairstyle/hair accessories/clothing/footwear/accessories completely consistent across four views |
| Aspect Ratio | Recommended 4:1 or 3:1 |

---

## VIII. Prompt Templates

```
Using the character's base image as the base, overlay costume and makeup via img2img,
90s anime style, retro Japanese animation style, {gender} character four-view design sheet, hand-drawn flat coloring, soft warm tones, cinematic lighting,
character design sheet, character turnaround,
Keep the base facial features unchanged, {overall temperament},
【L1·Makeup】{base makeup/light makeup/formal makeup}; use {makeup style}, even skin, {eyebrow makeup}, {eye makeup}, {lip makeup},
【L2·Hairstyle】{style type}, smooth hair strands, {hair accessory description},
【L3+L4·Clothing】{main color}{style}, {material}, {decorative craft}, smooth clothing lines, clear textures,
【L5·Footwear】{shoe style}, {upper material}, {socks/shoe opening design}, unified with the outfit,
【L6·Accessories】{headpiece}, {earrings}, {necklace}, {waist accessory},
Arranged side by side from left to right in the same frame: portrait close-up + front view + side view + back view,
Natural standing pose, pure neutral gray background, soft cinematic light, no hard shadows,
Four-view consistency, delicate facial rendering, delicate hair rendering, clear texture details
No text of any kind in the image
```

---

## IX. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | The overlaid face must be consistent with the base model |
| R2 | Costumes must possess a 90s hand-drawn texture characterized by "smooth lines + clear structure," but styles may vary by character |
| R3 | Female accessories must maintain a 90s style and coordinate with the costume, without mandating a fixed combination |
| R4 | Makeup, hairstyle, costume, footwear, and accessories must be stylistically unified, but must not be templated to the point of erasing character differences |
| R5 | Must output a four-view setting sheet (portrait close-up + front view + side view + back view) |
| R6 | Must specify "warm-toned off-white background #F8F4E8" |
| R7 | Must specify "four-view consistency" |
| R8 | **Output prompts only** — Prohibited from outputting tables/plans/explanations/variants, etc. |
| R9 | **No scene descriptions** — Do not include scene/environment/weather descriptions |
| R10 | **No prop interaction** — Do not include any held items/interactive objects |
| R11 | **Pose remains unchanged** — Must maintain the natural standing pose of the base model |
| R12 | **L1: Analyze before deciding** — First parse user facial cues, then determine makeup intensity |
| R13 | **All derivative assets require makeup/styling** — Use at least basic makeup |
| R14 | **Controlled makeup intensity** — Exaggerated makeup is not allowed |
| R15 | **Props/scenes/actions are not grounds for intensity escalation** — Basic makeup must not be elevated based solely on this information |

### Strictly Prohibited

| ID | Prohibition |
|---|---|
| X1 | Facial offset after overlay |
| X2 | Accessories too simple/modern (for females) |
| X3 | Style conflicts between makeup/costume/footwear |
| X4 | Complex scene backgrounds (warm-toned background is required) |
| X5 | Inconsistency in costume/makeup/styling across the four views |
| X6 | Any content other than the prompt |
| X7 | Adding scene descriptions to character derivative assets |
| X8 | Outputting sections such as "Quick Reference Table," "Plan," or "Suggestions" |
| X9 | Adding any prop interaction |
| X10 | Changing the base model pose |
| X11 | Adding descriptions linking expression and pose |
| X12 | Applying fixed makeup directly without analyzing user cues |
| X13 | Incorrectly maintaining a bare face, resulting in missing required makeup/styling |
| X14 | Incorrectly escalating makeup intensity solely due to prop/scene/action terms |