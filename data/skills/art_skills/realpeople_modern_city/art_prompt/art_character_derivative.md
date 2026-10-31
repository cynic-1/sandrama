---
name: liveaction_urban_character_derivative
description: Live-Action Urban Character Derivative Asset Generation · Constraint Manual
metaData: liveaction_urban_art_skills
---

# Live-Action Urban Character Derivative Asset Generation · Constraint Manual

---

## I. Styling Logic — Styling a Real Person

> Live-action urban production does not discuss "material stacking," "PBR rendering," or "modeling precision." What is discussed here is: a makeup artist working on a real face, a hairstylist using real tools on real hair, and a stylist taking a worn garment off a rack — and then the camera captures all of it.

1. **Makeup is "second skin," not "facial texture"** — Foundation blends with skin oils, eyeliner shifts slightly with eye shape, and lipstick shows uneven texture due to lip lines — makeup must have the realism of having "just been applied."
2. **Hair is alive** — Styled hair still has stray hairs, roots have natural volume rather than a wig cap, and tight ponytails show natural scalp tension marks.
3. **Clothes are "worn on the body," not "worn on a model"** — Shoulder lines are not necessarily perfectly symmetrical (real human posture is asymmetrical), fabric creates natural wrinkles with body movement, and collars have slight deformation from putting them on and taking them off.
4. **Styling serves the face, not obscures it** — The most failed styling is one that makes the base model unrecognizable. Derivative styling should enhance, not hide, the character's core temperament.

---

## II. Styling Hierarchy

| Level | Content | Live-Action Urban Interpretation |
|---|---|---|
| L0 | Base Model | Base image model — bare face, basic hairstyle, basic daily clothing. No modifications. |
| L1 | Makeup | Makeup artist's work on a real face — base makeup → eyes/brows → cheeks → lips. Intensity decided by scene. |
| L2 | Hairstyling | Hairstyles created by a stylist using real tools — blow-dry/bun/braid/perm + hair accessories |
| L3 | Innerwear | Close-fitting layer — T-shirt/shirt/knit/tank top/base layer, replacing the basic item |
| L4 | Outerwear/Main Garment | Outer layer — suit/trench coat/hoodie/dress/coat/workwear, determining the overall outfit style |
| L5 | Accessories | Jewelry/hats/glasses/scarves/bags/watches — the final step of daily dressing |

> **Scope Boundary**: Styling level only (makeup + hair + clothing + accessories). Does not include props (handheld items like phones/coffee cups/umbrellas/books), scene environment, or posture/action.

---

## III. Makeup — The Makeup Artist's Work on a Real Face (L1)

### Core Principles

> Makeup is "second skin." The camera must be able to see the real skin underneath the makeup — pores are not filled in, fine lines are not smoothed away, and foundation does not float on the surface like a mask.

### Clue Analysis and Makeup Decision

| Step | Processing Content |
|---|---|
| S1 | Extract user clues: scene context, emotional atmosphere, facial state description |
| S2 | Filter non-makeup clues: props/scene/action words do not trigger makeup |
| S3 | Match scene → makeup intensity: Bare Skin Level / Daily Level / Occasion Level / Gala Level |
| S4 | Generate L1 prompt — output conclusion only |

### Scene → Makeup Intensity Mapping

| Scene | Makeup Intensity | Core Intent |
|---|---|---|
| Home/Morning/Bare Face State | Bare Skin Level — no makeup traces, only the skin itself | Real skin texture, unadorned face |
| Daily Commute/Supermarket/Walking | Daily Level — light makeup, looks like "no makeup but good complexion" | Decency in workplace/life, unobtrusive refinement |
| Date/Party/Shopping | Occasion Level — visible makeup, but not excessive | Makeup with presence, but still within the "daily life" category |
| Dinner Party/Wedding/Gala | Gala Level — complete and refined makeup | Makeup designed for camera and lighting, but base makeup still shows real skin |

### Female Makeup — Adapted by Face Type

#### Cool and Restrained Type

| Intensity | Makeup Intent | Prompt |
|---|---|---|
| Bare Skin Level | No makeup — clean cool-white skin, natural unadorned brows, lip color is natural blood color | No makeup traces, natural cool-white skin texture, unadorned natural brows, lip color is natural blood color |
| Daily Level | "I might have applied a little lip balm" — extremely pale nude lips, lightly brushed brows, no eye makeup traces | Extremely pale nude lip balm, natural brow shape lightly brushed, no eye makeup feel, natural skin glow |
| Occasion Level | Red lips are the only focus — matte brick red or brown-toned lipstick, eyes/brows remain restrained, emphasizing cool detachment | Matte brick red lip makeup (only focus), extremely thin eyeliner at eye corners, clean and sharp brow shape, other areas nearly bare |
| Gala Level | Cool-toned smoky but not heavy — gray-brown small smoky, contouring, matte dark red lips, retaining bone structure | Gray-brown small smoky eye makeup, light contouring below cheekbones, matte dark red lips, retaining facial bone structure |

#### Gentle and Healing Type

| Intensity | Makeup Intent | Prompt |
|---|---|---|
| Bare Skin Level | Warm white translucent skin, cheeks naturally faintly pink, soft brows | Warm white translucent bare skin, natural pink cheeks, soft brow shape, no makeup feel |
| Daily Level | Moist and glossy feel — glossy base makeup, pink-toned blush lightly brushed, lip balm texture | Glossy base makeup, natural pink-toned blush blending, transparent lip balm, soft gaze |
| Occasion Level | Warm and soft — apricot eyeshadow, cream blush, mirror lip gloss, overall warm and moist | Warm apricot eyeshadow natural blending, cream-textured blush, mirror lip gloss, warm and soft |
| Gala Level | Warm refined makeup — champagne pearl eye makeup, glossy base makeup, rose bean paste lips, refined yet gentle | Champagne pearl eye makeup, glossy highlight, rose bean paste lip color, refined and gentle complete makeup |

#### Urban and Capable Type

| Intensity | Makeup Intent | Prompt |
|---|---|---|
| Bare Skin Level | Neutral clean skin, sharp brows but not drawn | Neutral clean bare skin, sharp brow shape unadorned, natural lip color, unadorned face |
| Daily Level | "Workplace light makeup" — matte base makeup, sharp brow shape, MLBB lip color (my lips but better) | Matte natural base makeup, sharp brow shape lightly drawn, MLBB lip color, unobtrusive decency |
| Occasion Level | Sharp but not aggressive — clear eyeliner, contouring, low-saturation rose lips | Sharp clear eyeliner, facial contouring, low-saturation rose lips, capable and powerful |
| Gala Level | Complete refined makeup — matte base makeup, structured contouring, true red or plum lips, full aura | Matte refined base makeup, structured contouring, true red/plum lips, complete but facial structure still discernible |

#### Youthful and Energetic Type

| Intensity | Makeup Intent | Prompt |
|---|---|---|
| Bare Skin Level | Collagen is the makeup — the skin itself is bright without needing makeup | Plump collagen feel bare skin, natural rosy cheeks, bright gaze, no makeup needed |
| Daily Level | "Just brightened the complexion" — tinted lip balm, transparent brow gel, extremely pale cream blush | Tinted lip balm, transparent brow gel combing, cream blush lightly patted, no visible makeup |
| Occasion Level | Bright and lively — orange/coral blush, glossy lip gloss, slight pearl eyeshadow | Orange-toned energetic blush, glossy lip gloss, slight pearl eyeshadow, bright girlish feel |
| Gala Level | Refined but not old — clear base makeup, juice lip gloss, micro-shimmer eyeshadow, retaining youthful feel | Clear base makeup retaining skin texture, juice lip gloss, micro-shimmer pearl eyeshadow, refined but not hiding youth |

#### Earthy and Down-to-Earth Type

| Intensity | Makeup Intent | Prompt |
|---|---|---|
| Bare Skin Level | Sun-exposed face — sun exposure marks, natural uneven skin tone, no makeup | Natural face with sun exposure marks, real uneven skin tone, unmade-up skin, the face of life itself |
| Daily Level | "Applied some cream and went out" — extremely pale tinted primer, natural lip color | Extremely pale tint, almost invisible base makeup, natural lip color, natural state after washing face |
| Occasion Level | Simple and presentable — natural lip color, brows slightly groomed, light base makeup | Natural-toned lip color, slightly groomed brow shape, light base makeup without heavy foundation, simple decency |
| Gala Level | Formal but not artificial — warm earth-toned eyeshadow, brick red/brown red lips, base makeup showing skin texture | Warm earth-toned eye makeup, brick red/brown red lips, base makeup retaining skin texture, formal but not distorted |

### Male Makeup

> The highest standard for male makeup is "you can't tell he's wearing makeup."

| Intensity | Applicable Scene | Prompt |
|---|---|---|
| Bare Skin Level | Default state for all scenes | Unadorned real male skin, natural oily sheen, clearly visible pores, real texture of jaw after shaving |
| Daily Level | Close-up shots/studio shots/important dialogue | Extremely pale even skin tone (no visible powder feel), brows lightly combed with transparent brow gel, natural lip color with lip balm texture — overall no visible makeup |
| Occasion Level | Wedding/Gala/Close-up shots | Even clean skin (retaining pore texture), brows lightly brushed, natural moist lip color — looks like it was taken seriously but no visible foundation |

---

## IV. Hairstyling — Real Hair in the Stylist's Hands (L2)

### Female Hairstyles

#### Classified by Styling Method

| Styling Method | Type | Hair Description | Suitable Face Type |
|---|---|---|---|
| Natural Fall | Black Long Straight | Natural smooth straight hair, slight inward curl at ends, center or side part, stray hairs naturally falling on forehead and back of neck | Cool and Restrained/Gentle and Healing/Urban and Capable |
| Natural Fall | Lazy Loose Waves | Large arc lazy curls, natural root volume, uneven curl degree (not uniform like a curling iron), stray hairs framing the face | Gentle and Healing/Youthful and Energetic |
| Natural Fall | Collarbone Layered Short | Shoulder-length, layered choppy ends, one side tucked behind ear showing earring, natural stray hairs on back of neck | Urban and Capable/Cool and Restrained |
| Natural Fall | Wool Small Curls | Medium-small curls all over, fluffy and airy, natural standing roots, curl degree has handmade feel rather than mechanical uniformity | Youthful and Energetic/Earthy and Down-to-Earth |
| Tied/Bun | High Ponytail | Tied at high skull position, natural root volume, ponytail has natural arc rather than straight fall, stray hairs naturally falling on forehead and temples | Youthful and Energetic/Urban and Capable/Sports Scene |
| Tied/Bun | Low Ponytail/Low Bun | Tied at back of neck or behind ear, loose but not messy, natural stray hairs on back of neck, has a "casually tied" relaxed feel | Gentle and Healing/Earthy and Down-to-Earth/Home Scene |
| Tied/Bun | Bun | Coiled at top of head or back of head, loose not tight, stray hairs framing face and neck | Home/Daily/Sports |
| Braided | Single Side Braid | Side braid, loose with handmade feel, natural stray hairs braided in, natural frizzy braid end | Gentle and Healing/Youthful and Energetic |
| Braided | Double Braid | Symmetrical braids on both sides, moderate tightness, suitable for youthful styling | Youthful and Energetic |
| Short Style | Ear-Length Short | Above or below ear length, neat or choppy ends, one side tucked behind ear, clean back of neck | Urban and Capable/Cool and Restrained |
| Short Style | Boyish Choppy Short | Layered choppy short hair, nape tapered, natural stray hairs on forehead | Cool and Restrained/Urban and Capable/Neutral Style |

#### Real State of Hair in Front of the Camera (Shared by All Hairstyles)

| State | Prompt |
|---|---|
| Stray Hairs | Natural stray hairs on forehead, baby hairs at temples, stray hairs on back of neck, natural uneven hairline |
| Roots | Natural root volume rather than tight to scalp, natural scalp visible at parting |
| Ends | Natural frizzy/split ends, natural arc at ends after tying |
| Sheen | Natural reflection of healthy hair quality — not oily not matte, semi-transparent warm color outline in backlight |
| Prohibited | Wig-like neat boundaries, CG hair strands distinct, no stray hairs, stiff styling |

### Male Hairstyles

| Style | Description | Suitable Face Type |
|---|---|---|
| Sharp Short Hair | Sides tapered, top left long for styling, natural hair direction, forehead visible | Rugged Mature/Urban and Capable (corresponding to male faces) |
| Micro-Parted Fringe | Forehead stray hairs slightly covering brows, top fluffy with layers, natural transition on sides | Sunny Youth/Warm and Introverted |
| Side-Parted Short | Side part, one side combed back, business neat but not slicked-back hard shell | Clear and Restrained/Warm and Introverted |
| Buzz Cut/Crop | Very short hair, scalp visible, natural hairline, clear head shape outline | Rugged Mature/Earthy and Street |
| Mullet/Mohawk | Short front long back, long ends at nape, sharp layers, has a "didn't cut it seriously" casual feel | Sunny Youth/Clear and Restrained |
| Medium-Long Hair | Shoulder length, natural fall or half-tied, natural hair quality | Clear and Restrained/Artistic Temperament |
| Curls/Texture | Natural curls or slight perm texture, fluffy and airy, not stiff | Sunny Youth/Warm and Introverted |

#### Real State of Hair in Front of the Camera (Shared by Males)

| State | Prompt |
|---|---|
| Short Hair Texture | Scalp visible in short hair state, natural hair direction, natural transition between sideburns and stubble |
| Daily State | No gel hard shell feel, hair naturally fluffy or slightly flat (consistent with daily life), natural wind-blown mess |
| Hairline | Natural hairline (slight recession allowed), possible slight thinning at temples, not wig-like neatness |
| Prohibited | Gel hard shell reflection, wig-like neat boundaries, CG hair strands, unnatural perfect hairstyle |

---

## V. Clothing — Real Outfits, Not Modeled Attire (L3+L4)

### Live-Action Urban Clothing Logic

> 3D projects discuss "material rendering," "PBR physical properties," and "multi-layer structure stitching." Live-action urban discusses: Where was this clothes bought? How many times has it been worn? Why was it chosen today?

- **Layering comes from weather and occasion, not from "design layers"**: T-shirt with a shirt over it because of morning/evening temperature difference, trench coat because it's windy today, knit cardigan because office AC is too cold
- **Clothes have wear marks**: Collar slightly deformed, cuffs have friction marks, jeans have stretch texture at knees, white T-shirt slightly faded after washing
- **Fitted rather than tight**: Clothes fit the body but are not tight, shoulder lines are in natural position (can be slightly off due to posture), pants length is just right or slightly bunched on shoes
- **Real contemporary urban Chinese dressing** — not Korean dramas, not Japanese magazines, not Western street snaps

### Female Clothing Matrix

| Outfit Style | Core Items | Applicable Scene | Prompt |
|---|---|---|---|
| Commute/Workplace | Suit jacket/shirt/pencil pants/midi skirt/trench coat | Office, business meetings, daily commute | Commute workplace outfit, suit jacket + shirt + straight-leg trousers, camel/navy/black tones, natural fabric drape, fitted not tight |
| Casual Daily | T-shirt/hoodie/jeans/wide-leg pants/knit cardigan | Weekend outings, supermarket shopping, cafe, walking | Casual daily outfit, loose hoodie + straight-leg jeans, off-white/gray/khaki tones, natural cotton texture |
| Gentle Date | Knit dress/floral midi skirt/cashmere cardigan/French shirt | Date, friend gathering, afternoon tea | Gentle date outfit, knit dress + short cardigan, cream/lotus pink/light apricot tones, soft fabric texture |
| Street Trendy | Oversize hoodie/cargo pants/denim jacket/baseball cap | Shopping, trendy toys, music festival, nightlife | Street trendy outfit, oversize hooded hoodie + cargo wide-leg pants, black/gray/army green tones, casual with attitude |
| Sports Outdoor | Yoga pants/sports bra/quick-dry T-shirt/softshell jacket/sneakers | Gym, outdoor running, cycling, hiking | Sports outfit, yoga pants + sports bra + loose quick-dry T-shirt, dark tones, functional fabric natural texture |
| Literary Academic | Knit vest + shirt/pleated skirt/canvas shoes/wool short coat | Campus, bookstore, library, exhibition | Literary academic outfit, knit vest layered with shirt + pleated skirt, navy/wine red/plaid, scholarly vibe |
| Home Lazy | Loose cotton loungewear/knit robe/fleece coat | Home daily, morning, late night | Home outfit, loose cotton long-sleeve + home pants, off-white/light gray/light blue, soft skin-friendly texture |

### Male Clothing Matrix

| Outfit Style | Core Items | Applicable Scene | Prompt |
|---|---|---|---|
| Business Formal | Suit set/white shirt/tie/formal leather shoes | Business meetings, formal occasions, important meetings | Business formal outfit, dark gray/navy suit set + white shirt, fitted cut, crisp fabric with drape |
| Business Casual | Casual suit + crew neck T-shirt/knit + casual pants | Daily commute, light business occasions | Business casual outfit, casual suit + crew neck white T + khaki casual pants, no tie, relaxed with measure |
| Daily Casual | Solid color T-shirt/Henley long-sleeve/hoodie + straight-leg jeans | Weekend, daily, all informal occasions | Daily casual outfit, solid color cotton T-shirt + straight-leg jeans, black/white/gray/navy, natural comfortable fabric |
| Street Brand | Printed hoodie/cargo pants/denim jacket/canvas shoes | Shopping, party, nightlife | Street brand outfit, printed hoodie + cargo tapered pants, black/army green/gray tones, relaxed with attitude |
| Sports Functional | Quick-dry T-shirt/sports shorts/sports pants/sneakers | Gym, running, basketball court | Sports outfit, quick-dry T-shirt + sports shorts, black/dark gray, functional fabric texture |
| Literary Cool | Drop-shoulder shirt/loose knit/wide-leg trousers/canvas shoes | Bookstore, exhibition, cafe | Literary outfit, drop-shoulder cotton shirt + loose trousers, earth tones/off-white/navy, unintentional texture |

---## VI. Accessories — The Final Step of Everyday Styling (L5)

### Female Accessories

| Category | Accessory Logic for Real-World Urban Settings | Prompt |
|---|---|---|
| Earrings | Not "metal drop earrings" — but "the pair casually picked up before leaving the house today." Small and simple, echoing the outfit style | Small silver studs / thin metal hoop earrings / pearl studs / acrylic geometric drops — paired with {outfit style} |
| Necklaces | Clavicle chains or mid-length necklaces, conforming to the natural curve of the neck, not floating, not digging into the skin | Delicate clavicle chain / thin metal chain pendant / short pearl chain — naturally conforming to the neck |
| Watches / Hand Jewelry | Everyday worn watches, thin bracelets, or rings, showing signs of use (naturally bent watch straps, minor metal wear) | Leather strap watch / thin metal bracelet / simple ring — everyday wear texture, showing signs of use |
| Hats | Baseball cap / beret / knit beanie — brim has a natural curve, crown shows signs of wear | Baseball cap (natural brim curve) / Beret (slightly tilted) / Knit beanie (soft texture) |
| Glasses | Optical glasses or sunglasses, natural frame material, lenses have slight reflection but eyes are visible | Thin metal frame / acetate frame glasses, lenses slightly reflective but gaze still visible |
| Bags | Real everyday commute/travel bags — leather has usage creases, canvas has natural aging | Leather shoulder bag (natural usage creases) / Canvas tote bag (slightly aged) / Crossbody small bag |

### Male Accessories

| Category | Prompt |
|---|---|
| Watches | Everyday worn watch — natural wear on metal strap / bent marks on leather strap / simple dial |
| Glasses | Thin metal frame / acetate frame glasses, lenses slightly reflective, nose pads naturally fitted |
| Hats | Baseball cap / beanie — natural wearing state, slightly curved brim, everyday use feel |
| Backpacks | Backpack / messenger bag — canvas or leather material, showing signs of use, naturally bent shoulder straps |

---

## VII. Styling Combination Quick Reference

| Scene | Makeup Intensity | Hairstyle | Outfit Style | Accessories |
|---|---|---|---|---|
| Home Morning | Bare-skin level | Natural loose / casually tied | Homey lazy | Minimal or none |
| Commute to Work | Daily level | Sleek straight hair / low ponytail / side-parted short hair | Commute business / business casual | Watch + simple bag |
| Weekend Outing | Daily level | Lazy slight curls / textured fringe / wolf tail | Casual everyday / daily casual | Bag + hat + watch |
| Date Meeting | Occasion level | Gentle curls / clavicle short hair / side-parted | Gentle date / literary college | Earrings + necklace + bag |
| Café / Bookstore | Daily level | Natural falling / layered short hair / medium-long hair | Literary college / literary cool | Glasses + canvas bag |
| Gym / Outdoor | Bare-skin level | High ponytail / bun / buzz cut | Sports outdoor / sporty functional | Sports watch + hairband |
| Gala / Ceremony | Gala level | Refined curls / updo / side-parted slicked hair | Formal attire (dress / suit) | Earrings + necklace + hand jewelry + refined bag |
| Late Night Solitude | Bare-skin level | Casually loose / slightly messy | Homey lazy | None |
| Street Night Market | Occasion level | Wool curls / boxer braids / wolf tail | Street trendy / street brand | Earrings + baseball cap |
| Hospital / Formal Occasion | Daily level | Sleek tied hair / sleek short hair | Simple solid color outfit | Minimal |

> **Inference Rule for Uncovered Scenes**: First determine the private/public nature of the scene (private → bare-skin level, public → daily level minimum); then determine the formality (formal occasion → occasion level / gala level); finally determine the mood (romantic/social → occasion level). Makeup should match the face type (see Chapter 3), and outfit should match the scene's temperature and atmosphere.

---

## VIII. Character Portrait Series — Four-Angle Photography Standards

> Even after derivative styling overlays, a four-angle studio shot series must be output to ensure consistency and recognizability of makeup, hairstyle, and outfit across all live-action angles.

### Four-Angle Definitions

| Position | Angle | Shot Size | Photography Requirements |
|---|---|---|---|
| Left 1 | Frontal Close-up | Top of head to upper clavicle | Face occupies 60%+, makeup details clearly visible (foundation-skin fusion, eyeliner precision, lip color texture). Focal length 50-85mm |
| Left 2 | Frontal 0° | Full body | Full frontal view of outfit, complete presentation of drape, layering, and accessories. Complete from top of head to feet |
| Right 2 | Right Side 90° | Full body | Side profile + side layers of outfit, side state of hairstyle. Complete from top of head to feet |
| Right 1 | Rear 180° | Full body | Full view of back-of-head hairstyle, back of outfit, rear of bag/hat. Complete from top of head to feet |

### Frame Standards

| Item | Photography Requirements |
|---|---|
| Layout | Four angles arranged side-by-side from left to right in the same frame, with even spacing. Presented as a "styling confirmation photo" layout |
| Background | Medium gray seamless background paper #B0B0B0, no light spots, no gradients, no shadows |
| Stance | Maintain the base model stance — natural everyday stance with weight shift, not standing at attention, not posing. **Prohibited from changing posture due to outfit changes** |
| Facial Expression | Subtle expressions matching makeup intensity and scene atmosphere — bare-skin level neutral natural, occasion level slight smile, gala level composed and confident. **Limited to facial micro-expressions, no body movements** |
| Lighting | Studio soft light — front softbox key light + bilateral fill panels. Soft light and shadow, clear direction, light ratio approx. 1:2 to 1:3, preserving facial dimensionality. Material texture of clothing and accessories clearly visible |
| Consistency | The four angles are a continuous photography record of the same person and same styling session. Face/makeup/hairstyle/outfit/accessories are fully presented as a single shoot |
| Aspect Ratio | Recommended 4:1 or 16:4 widescreen |

---

## IX. Prompt Templates

### Output Format Constraints

| Item | Constraint |
|---|---|
| Output Content | **Output prompt text only**, do not output analysis process, solution comparison, quick reference tables, or constraint explanations |
| Prohibited Scenes | Do not include any scene/environment/weather/background descriptions |
| Prohibited Props | Do not include any handheld items/interactive objects (props are independent assets) |
| Prohibited Pose Changes | Do not change the base model stance, do not output any action/posture changes |
| Format | Directly output the usable complete prompt |

### Complete Styling Overlay Prompt Template

Using the character base image as the base, img2img overlay styling,
Real-world urban character styling portrait series, live-action photography, studio soft light, medium gray seamless background paper,
{Gender} character portrait series, live-action style, non-3D non-rendered non-CG,
character portrait series, live-action photography, studio soft lighting,
Maintain base image face unchanged, {overall temperament},
[L1·Makeup] {Makeup intensity — bare-skin level / daily level / occasion level / gala level}, {makeup description}, makeup fused with real skin, foundation not mask-like, skin pore texture still visible,
[L2·Hairstyle] {hairstyle description}, real hair texture, {description of real state of flyaways/hair roots/hair ends}, non-wig non-CG hair strands,
[L3+L4·Outfit] {outfit style}, {top description} + {bottom description}, {color}, {natural fabric texture}, clothes naturally draped, with real wearing creases, non-sample clothes,
[L5·Accessories] {accessory description}, everyday wear texture, showing signs of use, naturally conforming to body,
Same frame arranged left to right: close-up + frontal full body + side full body + rear full body,
Natural everyday stance (weight shift), medium gray seamless background paper #B0B0B0, studio even soft light, soft light ratio,
Four angles are a continuous photography record of the same styling session,
Clean frame with no text, no watermark, no signature, no border,
Realistic live-action photography quality, 35mm full-frame photography texture

### Negative Avoidance Prompts

3D render, 3D modeling, CGI, Unreal Engine, Blender, PBR material, 8K modeling, game engine, cartoon, anime, 2D, illustration, hand drawn, painting,
plastic skin, wax face, silicone skin, airbrushed skin, perfect smooth skin, poreless, doll-like, mannequin,
symmetrical pose, mannequin pose, runway pose, model stance, military stance, exaggerated pose, action pose,
heavy makeup, dramatic makeup, makeup mask, foundation mask, fake lashes, colored contacts,
wig, fake hair, helmet hair, stiff hair, perfect hairline, CG hair strands,
brand new clothes, showroom clothes, stiff fabric, unrealistically clean, no wrinkles, mannequin clothes,
Ancient Style, Period Costume, Hanfu, Xianxia, Wuxia, Republican Era, Cyberpunk, Sci-Fi, Western Fantasy, Medieval,
text, watermark, signature, logo, border, frame

---

## X. Constraint Rules

### Mandatory

| ID | Rule |
|---|---|
| R1 | Post-overlay face must match the base model — styling serves the face, does not obscure the face |
| R2 | Makeup must fuse with real skin — foundation not mask-like, pore texture still visible, non-AI smoothness |
| R3 | Hairstyle must show real hair texture — flyaways, root volume, end frizz, non-wig non-CG hair strands |
| R4 | Clothing must have real wearing traces — natural creases, fabric drape, non-sample clothes non-factory new |
| R5 | Accessories must have everyday wear feel — conforming to body, showing signs of use, non-floating non-skin-embedded |
| R6 | Must output four-angle studio shot series (close-up + frontal + side + rear full body) |
| R7 | Must specify "medium gray seamless background paper #B0B0B0", prohibited from adding scene environment |
| R8 | Must specify "four angles are a continuous photography record of the same styling session" |
| R9 | **Output prompt only** — do not output analysis process, quick reference tables, solution comparisons, or any non-prompt content |
| R10 | **Prohibited prop interaction** — do not include handheld items, props are independent assets |
| R11 | **Pose remains unchanged** — maintain base model stance, do not add any action/posture descriptions |
| R12 | **Prohibited scene/environment descriptions** — scenes are independent assets |
| R13 | L1 must make decisions based on scene → makeup intensity mapping: bare-skin level / daily level / occasion level / gala level |
| R14 | All derivative assets require a styling plan — normally do not maintain completely bare face and plain clothes, at least enter daily level |

### Strictly Prohibited

| ID | Strictly Prohibited |
|---|---|
| X1 | Strictly prohibited "3D render / 3D modeling / CG / PBR material / 8K modeling / UE engine / Blender" and all CG terms |
| X2 | Strictly prohibited "2D hand-drawn / illustration / animation / 2D anime" and non-photography media |
| X3 | Strictly prohibited "over-smoothing / silicone face / wax mask / zero pores / AI-smooth skin" — real skin must exist under makeup |
| X4 | Strictly prohibited "wig / CG hair strands distinct / stiff neat hair / no flyaways" |
| X5 | Strictly prohibited "sample clothes / brand new wrinkle-free clothes / floating garments / mannequin-like attire" |
| X6 | Strictly prohibited "model symmetrical stance / runway pose / military at attention / exaggerated actions" |
| X7 | Strictly prohibited "heavy makeup covering base model face to unrecognizable" |
| X8 | Strictly prohibited "ancient style / Hanfu / xianxia / wuxia / Republican era / cyberpunk / sci-fi / western fantasy" and non-contemporary urban attire |
| X9 | Strictly prohibited "exposure / sheer / vulgar / borderline / violent bloody" |
| X10 | Strictly prohibited "watermark / text / LOGO / signature / border / AI generation traces" |