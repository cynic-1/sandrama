---
name: art_character_derivative
description: 3D Chinese-Style Cyber Character Derivative Asset Generation · Constraint Manual
metaData: art_skills
---

# 3D Chinese-Style Cyber Character Derivative Asset Generation · Constraint Manual
## (Dual-Adaptation Version: Ancient Traditional Scenes + Modern Urban Cyber Scenes)

---

## I. Overlay Principles (Core Rules for Dual Scenes)

1. **Unchanged Face** — After overlay, facial features must be completely identical to the base model. Facial shifting, deformation, or stylized alteration is prohibited.
2. **Unchanged Pose** — Maintain the natural standing pose of the base model. Any change in pose, action, or body posture is prohibited.
3. **Layer-by-Layer Control** — Each layer is described independently. Ancient-style and cyber elements are separated by layer to facilitate layer-specific replacement (change costume without changing makeup; change cyber elements without changing the Chinese-style base).
4. **Style Unity** — All costume and makeup elements must adhere to a unified aesthetic system. **In ancient scenes, Eastern traditional aesthetics are the core, with cyber elements as lightweight optional fusion; in urban scenes, Chinese-style forms are the base, with cyber mechanics as the core expression.** Throughout the process, the separation or opposition of Chinese-style and cyber elements is prohibited.
5. **No Quality Degradation** — The quality standard after overlay must not be lower than the base model. 3D PBR materials and cinematic lighting are the universal baseline for all scenes.
6. **Pure Costume and Makeup Scope** — Only overlay makeup, hairstyle, clothing, and accessories. Introducing props, scenes, environments, or actions is prohibited.
7. **One-Click Dual-Scene Adaptation** — When there are no explicit cyber/urban cues, default to pure ancient-style generation. When there are explicit cyber/urban cues, automatically match the Chinese-style cyber urban system without restructuring the underlying logic.

---

## II. Overlay Hierarchy (Fully Compatible Layered Structure for Dual Scenes)

| Layer | Content | Dual-Scene Adaptation Notes |
|---|---|---|
| L0 | Base Model | Base character model. Face, body type, and standing pose are completely locked. Universal for ancient/urban scenes; no modifications allowed. |
| L1 | Makeup (Decision Layer) | First analyze user cues, then decide the intensity and style of "Base Makeup / Light Makeup / Formal Makeup / Cyber Functional Makeup / Urban Commute Makeup." Includes two systems: ancient-specific traditional makeup and urban cyber-specific light-effect makeup. |
| L2 | Hairstyle & Styling | Chinese-style buns/bound hair/braids + traditional hair accessories/cyber functional hair pieces. Includes two systems: ancient traditional styling and urban cyber lightweight styling. High-precision hair strand standards are universal for all scenes. |
| L3 | Inner Garment/Underlayer | Replaces the white basic inner garment. Ancient scenes use traditional silk inner garments; urban scenes use Chinese-style functional fabric underlayers. Can incorporate controllable circuit patterns and micro-neon light bands. |
| L4 | Outer Garment/Main Costume | Core dual-adaptation layer: Ancient scenes use Chinese traditional formal wear/ceremonial wear/everyday wear; urban scenes use **cyber functional costumes with Chinese-style forms as the core** (must retain core Chinese structures such as stand-up collars, diagonal plackets, frog buttons, and ruqun skirts). Pure Western-style functional costumes without a Chinese-style core are prohibited. |
| L5 | Accessories | Traditional headwear/earrings/necklaces/waist ornaments/hand ornaments + Chinese-style cyber functional accessories/light-sensing components. Ancient scenes primarily use traditional accessories with lightweight cyber accents; urban scenes use Chinese-style + cyber fusion accessories. Pure Western-style cyber accessories are prohibited throughout. |

> **Scope Boundary**: Character derivative assets include only L0–L5 layers (costume and makeup). They do not include props (umbrellas/swords/fans/books/lanterns and other handheld items), scene environments (indoor/outdoor/weather, etc.), or poses/actions (walking/looking back/raising hands, etc.). These belong to other asset types. Cyber functional elements are limited to the L1-L5 costume and makeup scope and must not exceed the boundary to modify the base model's body structure.

---

## III. Makeup Constraints (L1 · Ancient + Urban Dual Systems)

### Strategy from Base Model to Derivative Makeup (Key)

> Although the character base model is bare-faced, derivative assets default to entering the makeup process. The system should analyze makeup needs based on user-provided cues, prioritize matching ancient/urban scene attributes, and then decide the intensity within the corresponding makeup system. When there are no explicit scene cues, default to the ancient system; unauthorized switching is prohibited.

### L1 Cue Analysis and Makeup Decision

| Step | Processing Content | Decision Result |
|---|---|---|
| S1 | Extract user cues: facial state words, emotion words, intensity words, style words, scene words (Ancient/Urban) | Form a "Scene + Makeup" dual-dimension requirement summary |
| S2 | Filter non-makeup cues: Prop/scene/action/pose words are not used as basis for makeup | Prevent misjudgment |
| S3 | First match the ancient/urban scene system, then match the makeup style matrix and provide the intensity tier | Ancient system: Base Makeup / Light Makeup / Formal Makeup; Urban system: Commute Makeup / Business Makeup / Cyber Functional Makeup |
| S4 | Generate final L1 prompt | Output only the conclusion, not the analysis process |

### Cue-to-Makeup Mapping (Execution Standard · Dual-Scene Adaptation)

| Cue Type | Typical Cues | Scene Match | L1 Decision |
|---|---|---|---|
| No obvious scene/facial emphasis cues | Only costume/hairstyle changes, no emphasis on emotion or state | Ancient Default | Base Makeup |
| Minor facial cues | Gentle, smiling, light eyelash flutter, slight complexion lift | Ancient/Urban Universal | Light Makeup (Very Light) |
| Explicit ancient daily cues | Daily, boudoir, going out, leisure, scholar's gathering | Ancient Scene | Base Makeup (Natural and Clear) |
| Explicit ancient formal ritual cues | Grand wedding, ceremony, court, important occasion | Ancient Scene | Formal Makeup (Exquisite and Luxurious) |
| Explicit urban daily cues | Commute, urban daily, leisure outing | Urban Cyber Scene | Urban Commute Makeup (Clear and Natural + Very Light Texture) |
| Explicit urban formal cues | Business, holographic meeting, urban gala | Urban Cyber Scene | Urban Business Makeup (Exquisite Matte + Cool-Tone Texture) |
| Explicit cyber functional cues | Cyber, functional, night travel, mission, neon, futuristic feel | Urban Cyber Scene | Cyber Functional Makeup (Controllable light effects, fused with Chinese style) |

> Decision Principles:
> 1. All derivative assets must have makeup; first match the system based on scene cues, then determine intensity and style based on facial cues. Changes in props, scenes, or poses must not independently raise the makeup intensity.
> 2. Cyber functional cues can only trigger the urban cyber system makeup. Cyber light-effect makeup must not be added without corresponding cues.
> 3. In ancient scenes without explicit cyber cues, adding any cyber light-effect/functional makeup is prohibited to ensure full adaptation to pure ancient scenes.

### Female Makeup Style Matrix (Full Dual-Scene Coverage)

| System | Style | Applicable Scene | Core Prompt |
|---|---|---|---|
| Ancient System | Elegant Plain Makeup | Ancient daily, first meeting, boudoir, scholar's gathering | Elegant makeup, lightly brushed eyebrows, plain clear face |
| Ancient System | Imperial Noble Makeup | Ancient court, formal, power, gala | Exquisite makeup, sharp eyebrow shape, red lip color |
| Ancient System | Romantic Peach Blossom Makeup | Ancient date, heart-flutter, sweet scene | Peach blossom makeup, slight redness at eye corners, moist lip color |
| Ancient System | Grand Wedding Makeup | Ancient grand wedding, ceremony | Heavy luxurious makeup, vermilion lips and phoenix eyes |
| Ancient System | Festival Celebration Makeup | Ancient festival, gathering | Bright colors, pink-toned makeup |
| Urban Cyber System | Urban Commute Makeup | Urban daily, commute, leisure outing | Clear pseudo-bare-face, natural eyebrow shape, even base makeup, no exaggerated colors |
| Urban Cyber System | Urban Business Makeup | Urban business, holographic meeting, formal occasion | Matte cool-tone base makeup, sharp eyebrow shape, deep eye makeup, low-saturation lip texture |
| Urban Cyber System | Cyber Flowing Light Makeup | Urban night travel, cyber scene, functional leisure | Slight neon light effect at eye corners, skin-hugging circuit patterns, lip color with fine shimmer flow, clear and non-heavy makeup surface |
| Urban Cyber System | Functional Cool-Tone Makeup | Urban mission, action, strong aura scene | Matte cool-tone base makeup, sharp eyebrow shape, deep eye makeup, local matte functional texture, no exaggerated light effects |

### Universal Base Skin (All Makeup · Shared by Dual Scenes)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | PBR material rendering, natural translucency, controllable texture, unified 3D quality across all scenes | PBR material, natural sheen, soft texture, fine skin texture |
| Whiteness | Pink-white base tone, translucent not pale | Pink-white base tone, fair and translucent |
| Inner Glow | Soft light effect from inside out | Inner glow, translucent glowing skin |
| Cyber Adaptation | Only the urban cyber system can add skin-hugging circuit patterns and micro-neon light effects; must not cover the base model's skin texture; prohibited in the ancient system | Skin-hugging circuit patterns, controllable micro-neon light effects, natural fusion with skin |
| Prohibited | Matte/dead white/waxy/oil sheen/overexposure, large-area cyber coatings covering the base model, glaring strong light, unauthorized addition of cyber elements in ancient scenes | — |

### Base Makeup Details (Ancient Default Tier · Universal for Dual Scenes)

| Item | Constraint | Prompt |
|---|---|---|
| Eyebrows | Lightly groom along the base model's eyebrow shape, do not change eyebrow type | Natural eyebrow grooming, clean eyebrow shape |
| Eyes | Very light eye enhancement, emphasizing clarity and spirit | Clear eyes, very light eyeshadow |
| Cheeks | Very light complexion lift, pink-toned blush | Natural cheek complexion, pink-toned blush |
| Lips | Light pink or vermilion red, maintain restraint | Natural moist lip color, light pink lip color |
| Overall | Visible makeup, but very light makeup feel | Base makeup, natural makeup feel, soft texture |

### Male Makeup (Dual-Scene Adaptation)

| System | Item | Constraint | Prompt |
|---|---|---|---|
| Ancient Universal | Base Skin | PBR material rendering, fair and translucent, fresh and natural | PBR material, fair and translucent, natural sheen |
| Ancient Universal | Core Principle | Pseudo-bare-face—looks like no makeup but excellent skin | Pseudo-bare-face, naturally good skin |
| Ancient Universal | Eyebrows | Natural thick eyebrows, do not change base model eyebrow shape | Natural sword-like eyebrows, heroic eyebrow shape |
| Ancient Universal | Lip Color | Natural blood color, slightly moist | Natural lip color, blood-color feel |
| Urban Cyber System | Cyber Adaptation | Only local matte functional texture and very light circuit patterns can be added; no exaggerated light effects; prohibited without explicit cues | Very light skin-hugging circuit patterns, matte functional texture, no strong light |
| Urban Cyber System | Urban Business Makeup | Matte clear base makeup, sharp eyebrow shape, no excess makeup feel | Clear matte base makeup, sharp eyebrow shape, pseudo-bare-face texture |

---

## IV. Hairstyle & Styling Constraints (L2 · Ancient + Urban Dual Systems)

### Female Styling Types (Full Dual-Scene Coverage)

| System | Style | Description | Applicable Scene | Prompt |
|---|---|---|---|---|
| Ancient System | High Bun Cloud Hair | High bun updo + traditional hair accessories | Ancient court, formal, gala | High bun cloud hair, exquisite updo, traditional Chinese form |
| Ancient System | Double Ring Bun | Double ring symmetry, youthful feel | Ancient young character, daily | Double ring bun, youthful style, traditional Chinese styling |
| Ancient System | Falling Horse Bun | Side low bun, lazy feel | Ancient daily, leisure, boudoir | Falling horse bun, lazy side bun, traditional Chinese styling |
| Ancient System | Loose Hair | Long hair fully loose, natural fall | Ancient boudoir, private, night | Loose long hair, natural fall, traditional Chinese texture |
| Ancient System | Bound High Ponytail | High bound, capable, sharp | Ancient martial arts, action scene | High bound ponytail, capable and sharp, traditional Chinese bound hair |
| Ancient System | Half-Tied Hair | Top half tied + back hair hanging | Ancient daily, outing | Half-tied cloud bun, natural hanging hair, traditional Chinese styling |
| Urban Cyber System | Chinese-Style Half-Tied Low Ponytail | Chinese half-tied hair + low ponytail, sharp not dragging | Urban commute, daily outing | Chinese-style half-tied low ponytail, Chinese braid accents, capable daily, high-precision hair strands |
| Urban Cyber System | Chinese-Style High Bound Functional Bun | Chinese high bun + functional structure fixation, can embed micro-neon light bands | Urban formal, holographic gala, functional scene | Chinese-style high bound functional bun, titanium alloy hair piece fixation, embedded controllable micro-neon light bands |
| Urban Cyber System | Chinese-Style Semi-Mechanical Braid | Chinese three-strand braid + functional braid rope, micro-light tassel accents | Urban leisure, night travel, cyber scene | Chinese-style semi-mechanical braid, Chinese braid base, functional braid rope, light-sensing tassel accents |
| Urban Cyber System | Chinese-Style High Ponytail | Chinese bound hair + high ponytail, functional hair clip fixation | Urban functional, action, mission scene | Chinese-style high ponytail, Chinese bound hair base, functional hair clip fixation, sharp and capable |

### Female Hair Accessories (Dual-Scene Adaptation)

| System | Constraint | Prompt |
|---|---|---|
| Ancient System | Luxurious and exquisite, matched with costume, pure traditional Chinese material and craft, no cyber elements (prohibited without explicit cues) | Luxurious hair accessories, exquisite craft, gold and silver hairpins, beads and jade full head, fine carving |
| Urban Cyber System | Chinese-style form as core, matched with costume, fusion of traditional materials + cyber functional materials, controllable light effects | Chinese-style cyber hair accessories, exquisite craft, gold/silver/jade ornaments + titanium alloy functional pieces, controllable micro-neon light bands, holographic projection accents |

### Male Styling Types (Full Dual-Scene Coverage)

| System | Style | Applicable Scene | Prompt |
|---|---|---|---|
| Ancient System | Bound Hair Half-Crown | Ancient daily, scholar, gathering | Bound hair half-crown, jade pin bound hair, traditional Chinese styling |
| Ancient System | Full Crown High Bound | Ancient formal, court, gala | Full crown high bound, jade crown bound hair, traditional Chinese form |
| Ancient System | Loose Hair Over Shoulders | Ancient private, night scene | Loose hair over shoulders, long hair like ink, traditional Chinese texture |
| Ancient System | Bound High Ponytail | Ancient combat, martial arts scene | High bound battle hair, sharp ponytail, traditional Chinese bound hair |
| Urban Cyber System | Chinese-Style Functional Half-Crown Bound Hair | Urban daily, commute, business scene | Chinese-style functional half-crown bound hair, Chinese bound hair base, matte titanium alloy hair pieces, sharp and capable |
| Urban Cyber System | Chinese-Style Low Ponytail Bound Hair | Urban leisure, daily outing | Chinese-style low ponytail bound hair, Chinese bound hair base, minimalist functional hair clip, natural texture |
| Urban Cyber System | Chinese-Style High Bound Functional Hair | Urban functional, mission, night travel scene | Chinese-style high bound functional hair, Chinese bound hair base, full-coverage functional hair crown, matte craft |

---## V. Costume Constraints (L3+L4: Core Adaptation Layer for Dual Scenarios)

### Core Red Lines (Universal to Both Scenarios: Non-Negotiable)
**All costumes must use traditional Chinese silhouettes as the absolute core.** In ancient-style scenarios, strictly adhere to the cutting logic of Chinese traditional attire. In urban cyberpunk scenarios, at least one core Chinese structural element—such as a mandarin collar, diagonal placket, frog buttons, ruqun, symmetrical front closure, or wide sleeves—must be retained. Pure Western suits, pure functional jackets, and pure Western cyberpunk attire devoid of a Chinese aesthetic core are prohibited, ensuring the Chinese aesthetic foundation is not lost in either ancient or urban scenarios.

### Female Costume Matrix (Full Coverage for Both Scenarios)

| System | Style | Core Design | Applicable Scenarios | Prompt |
|---|---|---|---|---|
| Ancient Style | Ancient Daily Long Dress | Chinese ruqun silhouette, flowing skirt hem, traditional embroidery | Ancient daily life, boudoir, elegant gatherings, outings | Ancient ruqun long dress, flowing gown, silk texture, traditional Suzhou embroidery patterns, layered styling |
| Ancient Style | Court Formal Dress | Chinese formal dress silhouette, wide-sleeved robe, layered skirt hem, luxurious embroidery | Ancient court, formal events, grand ceremonies, power scenes | Ancient court formal dress, luxurious gown, Chinese wide-sleeved robe, gold-thread embroidery, layered skirt hem |
| Ancient Style | Lightweight Daily Wear | Chinese short jacket, mandarin collar with diagonal placket, waist-cinched cut, sleek and uncluttered | Ancient action, martial arts practice, outings | Ancient lightweight daily wear, short jacket cut, mandarin collar with diagonal placket, cotton-linen silk texture, sleek and capable |
| Ancient Style | Nightwear | Thin gauze inner garment, plain-colored silk, loose and comfortable | Ancient indoor, nighttime, private scenes | Ancient nightwear, loose and comfortable, thin gauze silk material, plain and simple |
| Ancient Style | Grand Wedding Attire | Fengguan Xiapeng silhouette, layered red garments, traditional wedding patterns | Ancient weddings, grand wedding ceremonies | Ancient grand wedding attire, Fengguan Xiapeng, layered red garments, gold-thread embroidery, Chinese wedding dress silhouette |
| Urban Cyberpunk | Chinese-Style Commuter Daily Wear | Chinese mandarin collar/diagonal placket shirt, modified short ruqun, functional fabric splicing, understated daily look | Urban daily life, commuting, casual outings | Chinese-style cyberpunk commuter daily wear, Chinese mandarin collar with diagonal placket, modified ruqun cut, silk and matte functional fabric splicing, minimal embroidery, sleek daily look |
| Urban Cyberpunk | Chinese-Style Business Formal Wear | Chinese symmetrical front closure suit silhouette, modified Tang suit structure, high-end matte fabric, minimal luxury | Urban business, holographic meetings, formal occasions | Chinese-style cyberpunk business formal wear, Chinese symmetrical front closure Tang suit base, high-end matte fabric, three-dimensional cut, minimal Chinese patterns, understated luxury |
| Urban Cyberpunk | Light Functional Chinese-Style Daily Wear | Chinese short jacket + functional vest, diagonal placket with frog buttons + magnetic clasps, waist-cinched cut, light and sleek | Urban action, night travel, functional casual scenes | Light functional Chinese-style daily wear, Chinese diagonal placket short jacket, functional vest splicing, magnetic frog buttons, matte functional fabric, sleek and capable |
| Urban Cyberpunk | Chinese-Style Cyberpunk Grand Wedding/Ceremonial Dress | Chinese Fengguan Xiapeng/formal dress silhouette, titanium alloy 3D structure, layered skirt hem, controllable micro-neon light bands | Urban grand weddings, holographic galas, important occasions | Chinese-style cyberpunk ceremonial dress, Chinese formal dress core silhouette, silk and 3D-printed structure splicing, fusion of gold-thread embroidery and circuit patterns, controllable micro-neon light bands |
| Urban Cyberpunk | Chinese-Style Functional Nightwear | Chinese diagonal placket inner garment, thin gauze and functional lining splicing, loose and comfortable, subtle sheen texture | Urban indoor, nighttime, private scenes | Chinese-style functional nightwear, Chinese diagonal placket silhouette, loose and comfortable, thin gauze and functional fabric splicing, subtle sheen texture |

### Universal Female Costume Constraints (Dual Scenario Adaptation)

| Item | Constraint | Prompt |
|---|---|---|
| Primary Color | Ancient scenarios default to traditional Chinese tones; urban scenarios may use low-saturation cyberpunk cool-tone contrasts and controllable neon accents. High-saturation, glaring color schemes are prohibited | Traditional Chinese tones, Chinese-style cyberpunk color scheme, low-saturation contrast, controllable neon accents |
| Material | Ancient scenarios default to silk + embroidery + pearlescent fabric; urban scenarios may splice matte functional fabrics, high-visibility reflective strips, and 3D-printed structural components. The Chinese aesthetic core fabric base must be retained | Silk texture, embroidery details, pure traditional fabrics for ancient scenarios; splicing of traditional and functional fabrics, 3D-printed 3D structures for urban scenarios |
| Texture | Ancient scenarios default to traditional Chinese patterns; urban scenarios may fuse traditional patterns with circuit textures and cyberpunk dark patterns. Textures must be ultra-clear. Pure cyberpunk textures without a Chinese aesthetic core are prohibited | Clear fabric texture, ultra-clear texture, pure traditional Chinese patterns for ancient scenarios; deep fusion of traditional patterns and circuit textures for urban scenarios |
| Shoulders | Ancient scenarios default to Chinese cloud shoulders/pilao (shoulder shawl); urban scenarios may add functional shoulder armor/structural decorations, which must be unified with the Chinese silhouette | Ornate cloud shoulders and flowing pilao for ancient scenarios; Chinese-style shoulder armor accents unified with the overall silhouette for urban scenarios |
| Layering | Multi-layered styling, distinct layers, unified logic between Chinese inner wear and outerwear. Functional structures in urban scenarios must not disrupt the layering logic | Multi-layered styling, distinct layers, unified Chinese silhouette logic |
| Light Effects | Only urban cyberpunk scenarios may add embedded micro-neon light bands. Light effects must be controllable, non-glaring, not damaging to fabric texture, and free of overexposure. Prohibited in ancient scenarios unless explicitly indicated | Embedded micro-neon light bands for urban scenarios, controllable light effects, no overexposure, natural fusion with costume |

### Male Costume Matrix (Full Coverage for Both Scenarios)

| System | Style | Applicable Scenarios | Prompt |
|---|---|---|---|
| Ancient Style | Scholar's Attire | Ancient daily life, study, elegant gatherings, outings | Ancient scholar's attire, long gown silhouette, mandarin collar with diagonal placket, silk cotton-linen texture, traditional pattern embroidery |
| Ancient Style | Warrior's Combat Gear | Ancient combat, martial arts practice, action scenes | Ancient warrior's combat gear, battle robe silhouette, mandarin collar with waist-cinched cut, durable fabric, sleek and capable |
| Ancient Style | Court Ceremonial Robe | Ancient court hall, ceremonies, grand events | Ancient court robe, formal ceremonial silhouette, wide-sleeved broad robe, luxurious fabric, traditional patterns |
| Ancient Style | Casual Daily Wear | Ancient leisure, private moments, daily outings | Ancient casual daily wear, simple style, comfortable fabric, Chinese mandarin collar, loose and appropriate |
| Ancient Style | Grand Ceremony Formal Dress | Ancient formal events, celebrations, important occasions | Ancient grand ceremony formal dress, luxurious and exquisite, Chinese formal dress silhouette, high-end fabric, gold-thread embroidery |
| Urban Cyberpunk | Chinese-Style Business Commuter Wear | Urban daily life, commuting, business meetings | Chinese-style business commuter wear, Chinese mandarin collar Tang suit base, modified suit cut, high-end matte fabric, minimal Chinese patterns, sleek and appropriate |
| Urban Cyberpunk | Chinese-Style Functional Casual Wear | Urban daily life, casual outings, light functional scenes | Chinese-style functional casual wear, Chinese diagonal placket short jacket, functional fabric splicing, magnetic frog buttons, loose and comfortable, versatile daily wear |
| Urban Cyberpunk | Warrior Functional Combat Gear | Urban action, missions, night travel scenes | Chinese-style warrior functional combat gear, Chinese battle robe base, matte functional fabric, 3D protective structure, mandarin collar with waist-cinched cut, sleek and capable |
| Urban Cyberpunk | Chinese-Style Ceremonial Formal Dress | Urban holographic galas, formal occasions, grand weddings | Chinese-style ceremonial formal dress, Chinese formal dress core silhouette, luxurious fabric, titanium alloy structural accents, fusion of traditional patterns and circuit dark patterns |

---

## VI. Accessory Constraints (L5: Dual Scenario Adaptation)

### Female Accessories (Dual Scenario by System)

| System | Type | Constraint | Prompt |
|---|---|---|---|
| Ancient Style | Headwear | Ornate and exquisite, not thin or sparse, pure traditional Chinese materials, coordinated with hairstyle and costume | Ornate headwear, pearls and jade hair ornaments, gold and silver hairpins, jade buyao (swaying hair ornaments), intricate carving |
| Ancient Style | Earrings | Traditional dangling tassels/jade earrings, unified with overall style | Tassel earrings, jade earring drops, jade earrings, gold and silver inlay |
| Ancient Style | Neckwear | Traditional necklace/neck ring, traditional Chinese silhouette | Ornate necklace, exquisite neck ring, gold, silver, and jade inlay |
| Ancient Style | Waistwear | Traditional palace sash/jade pendant, traditional Chinese craftsmanship | Flowing palace sash, jade pendant at waist, jade jinbu (waist ornament), intricate weaving |
| Ancient Style | Handwear | Traditional jade bangle/armlet, traditional Chinese silhouette | Translucent jade bangle, exquisite armlet, gold, silver, and jade materials |
| Urban Cyberpunk | Headwear | Chinese-style silhouette as core, fusion of traditional materials + cyberpunk functional materials, coordinated with hairstyle and costume, controllable light effects | Chinese-style cyberpunk headwear, pearls, jade, and titanium alloy functional components, controllable micro-neon light bands, holographic projection accents, exquisite craftsmanship |
| Urban Cyberpunk | Earrings | Fusion of traditional jade earrings + cyberpunk functional earrings, controllable and non-exaggerated light-sense tassels | Chinese-style functional earrings, jade inlay + titanium alloy material, controllable micro-neon light-sense tassels, exquisite and small |
| Urban Cyberpunk | Neckwear | Fusion of traditional necklace + functional neck ring, Chinese silhouette as core | Chinese-style functional neck ring, necklace structure + titanium alloy material, embedded controllable micro-light, exquisite fit |
| Urban Cyberpunk | Waistwear | Fusion of traditional palace sash/jade pendant + functional waist belt, magnetic clasps, 3D structure | Chinese-style functional waist belt, wide waist belt + palace sash splicing, jade pendant at waist, titanium alloy magnetic clasps, distinct texture |
| Urban Cyberpunk | Handwear | Fusion of traditional jade bangle + functional bracelet, Chinese silhouette as core, no exaggerated design | Chinese-style functional bracelet, translucent jade bangle + titanium alloy material, controllable micro-light, exquisite fit |

### Male Accessories (Dual Scenario by System)

| System | Type | Constraint | Prompt |
|---|---|---|---|
| Ancient Style | Hair Crown | Traditional jade/gold crown, exquisite craftsmanship, traditional Chinese silhouette, coordinated with hairstyle and costume | Jade crown for hair, gold crown for hair, jade carving, exquisite craftsmanship |
| Ancient Style | Waist Belt | Traditional wide waist belt/leather belt, traditional Chinese silhouette, distinct texture | Wide waist belt, leather belt, jade belt hook, distinct texture |
| Ancient Style | Jade Pendant | Traditional translucent and warm jade pendant, traditional Chinese craftsmanship, worn at waist | Jade pendant at waist, translucent and warm, Hetian jade quality, exquisite carving |
| Ancient Style | Waist Accessories | Sword/fan/flute limited to fixed waist accessories, **handheld props prohibited**, traditional Chinese silhouette | Fixed waist sword accessory, folding fan waist hang, bamboo flute waist ornament, no handheld interaction |
| Urban Cyberpunk | Hair Crown | Traditional jade crown silhouette + titanium alloy functional material, matte craftsmanship, exquisite modeling, coordinated with hairstyle and costume | Chinese-style functional hair crown, Chinese crown base, matte titanium alloy material, jade inlay, exquisite craftsmanship |
| Urban Cyberpunk | Waist Belt | Traditional wide waist belt silhouette + functional structure, magnetic clasps, 3D cut, distinct texture | Chinese-style functional waist belt, Chinese waist belt base, matte functional fabric, titanium alloy magnetic clasps, 3D structure |
| Urban Cyberpunk | Jade Pendant | Traditional jade silhouette + acrylic light-sense material, translucent and warm, controllable micro-light, worn at waist | Chinese-style light-sense jade pendant, traditional silhouette, acrylic + jade material, translucent and warm, controllable micro-light |
| Urban Cyberpunk | Waist Accessories | Traditional silhouette + functional material, limited to fixed waist accessories, **handheld props prohibited** | Fixed waist functional sword accessory, titanium alloy folding fan waist hang, no handheld interaction |

---

## VII. Costume & Makeup Combination Quick Reference (Full Scenario Coverage for Both Systems)

| System | Scenario | Makeup | Hairstyle | Costume | Accessories |
|---|---|---|---|---|---|
| Ancient Style | Boudoir Daily | Elegant plain makeup | Loose hair/half-tied hair | Ancient daily long dress | Medium (traditional simple accessories) |
| Ancient Style | First Meeting/Elegant Gathering | Elegant plain makeup | Half-tied hair/Duoma bun | Ancient daily long dress | Medium-High (exquisite traditional accessories) |
| Ancient Style | Romantic Interaction | Romantic peach blossom makeup | Half-tied hair/Duoma bun | Ancient daily long dress/Lightweight daily wear | Medium |
| Ancient Style | Court Gala Formal Debut | Court noble makeup | High bun with cloud-like hair | Ancient court formal dress | Extremely elaborate (traditional luxurious accessories) |
| Ancient Style | Nighttime Private | Elegant/Peach blossom makeup | Loose hair/Duoma bun | Ancient nightwear | Minimal (no extra accessories) |
| Ancient Style | Grand Wedding Ceremony | Grand wedding makeup | High bun with cloud-like hair | Ancient grand wedding attire | Extremely elaborate (full Fengguan Xiapeng accessory set) |
| Ancient Style | Martial Arts/Action | Plain makeup (very light) | Tied hair high ponytail | Ancient lightweight daily wear/Warrior combat gear | Simple (only basic fixed accessories) |
| Urban Cyberpunk | Urban Commuter Daily | Urban commuter makeup | Chinese-style half-tied low ponytail | Chinese-style commuter daily wear | Low-Medium (minimal Chinese-style functional accessories) |
| Urban Cyberpunk | Urban Business Formal | Urban business makeup | Chinese-style functional half-crown tied hair | Chinese-style business formal wear | Medium (understated luxurious Chinese-style functional accessories) |
| Urban Cyberpunk | Urban Holographic Gala Debut | Court noble makeup/Cyberpunk flowing light makeup | Chinese-style high tied functional bun | Chinese-style cyberpunk ceremonial dress | Extremely elaborate (Chinese + cyberpunk fusion luxurious accessories) |
| Urban Cyberpunk | Urban Night Travel/Functional Mission | Functional cool-tone makeup | Chinese-style high ponytail | Light functional Chinese-style daily wear/Warrior functional combat gear | Simple (only functional fixed accessories) |
| Urban Cyberpunk | Urban Casual Date | Romantic peach blossom makeup/Cyberpunk flowing light makeup | Chinese-style half-mechanical braided hair | Chinese-style commuter daily wear/Light functional daily wear | Medium (micro-light Chinese-style accessories) |
| Urban Cyberpunk | Nighttime Private Scene | Elegant plain makeup | Loose hair/Low ponytail | Chinese-style functional nightwear | Minimal (no extra accessories) |
| Urban Cyberpunk | Urban Grand Wedding Ceremony | Grand wedding makeup | Chinese-style high tied functional bun | Chinese-style cyberpunk wedding dress | Extremely elaborate (Chinese + cyberpunk fusion full accessory set) |

---

> **🔍 Inference Rules for Uncovered Scenarios (Universal to Both Scenarios)**
>
> When the user-described scenario/situation is not in the table above, infer based on the core genes of this style. **First lock in the Ancient or Urban scenario system, then match the corresponding dimension rules:**
>
> | Inference Dimension | Ancient System Core Gene | Urban Cyberpunk System Core Gene |
> |---|---|---|
> | Makeup Intensity | Default elegant plain makeup; Court/Power/Formal → Court noble makeup; Heart-fluttering/Sweet romance → Romantic peach blossom makeup; Grand wedding/Ceremony → Grand wedding makeup; Holiday gathering → Holiday celebration makeup | Default urban commuter makeup; Business/Formal → Urban business makeup; Heart-fluttering/Sweet romance → Romantic peach blossom makeup; Gala/Grand wedding → Court noble makeup; Cyberpunk/Functional/Night travel → Cyberpunk flowing light makeup/Functional cool-tone makeup |
> | Hairstyle | Daily/Boudoir → Half-tied hair or Duoma bun; Court/Formal/Gala → High bun with cloud-like hair; Private/Night → Loose hair; Martial arts/Action → Tied hair high ponytail | Daily/Commuter → Half-tied low ponytail; Business/Formal → Functional half-crown tied hair; Gala/Grand wedding → High tied functional bun; Private/Night → Loose hair/Low ponytail; Functional/Action → High ponytail |
> | Costume | Traditional Chinese silhouette as absolute core; Emotional scenes → Flowing ruqun long dress; Power/Formal → Court formal dress; Action → Lightweight daily wear; PBR material always locked; Pure traditional Chinese patterns as default | Chinese core silhouette as absolute base; Daily/Commuter → Chinese-style commuter daily wear; Business/Formal → Chinese-style business formal wear; Action/Functional → Light functional daily wear; PBR material always locked; Fusion of traditional patterns and circuit textures as default |
> | Accessory Elaborateness | Daily → Medium; Formal/Court → Extremely elaborate; Private → Minimal; Action → Simple; Pure traditional Chinese accessories as core | Daily → Low-Medium; Business/Gala → Extremely elaborate; Private → Minimal; Action → Simple; Chinese + cyberpunk fusion accessories as core, light effects controllable |
> | Texture Baseline | PBR material + cinematic soft light always locked; Volume and sheen prioritized over flat decorative feel; No cyberpunk light effects (prohibited unless explicitly indicated) | PBR material + cinematic lighting always locked; Volume and sheen prioritized over flat decorative feel; Cyberpunk light effects are embedded controllable micro-neon, no overexposure; Deep fusion of Chinese and cyberpunk elements, no disjointed feel |

## VIII. Four-View Character Sheet Standards (Universal to Both Scenarios: Unified 3D Rendering Standards)

> Even after deriving costume and makeup overlays, a four-view character sheet must be output to ensure complete consistency of costume, makeup, patterns, cyberpunk light effects, and structural components across all angles. Universal for ancient and urban scenarios.

### View Definitions

| Position | View | Angle | Shot Size | Requirement | Prompt |
|---|---|---|---|---|---|
| Left 1 | Portrait Close-up | Frontal eye-level | Face to collarbone | Face occupies 60%+, 100% clear details of facial features/makeup/makeup effects | portrait closeup, face detail, makeup detail |
| Left 2 | Front View | Frontal 0° | Full-body standing | Facing camera, full frontal view of costume, clear position of structure/patterns/light bands | front view, height mark, costume detail |
| Right 2 | Side View | Right side 90° | Full-body standing | Pure side profile, clear side layers of costume, clear side form of structure | side view, profile, height mark, costume profile detail |
| Right 1 | Back View | Rear 180° | Full-body standing | Clear back hair accessories/back costume/hair ends/back structure | back view, rear view, height mark, rear costume detail |

### Frame Standards (Universal to Both Scenarios: Non-Negotiable)

| Item | Constraint |
|---|---|
| Layout | Four views arranged side-by-side from left to right in the same frame. Universal layout for ancient/urban scenarios |
| Background | Plain gray solid color #B8B8B8. **Prohibited from adding any scene/environment/weather elements**. Universal for ancient/urban scenarios |
| Stance | Natural standing, feet parallel and slightly apart, arms hanging naturally or slightly extended (**any pose change prohibited**). Universal for ancient/urban scenarios |
| Expression | Subtle expression matching the makeup style, limited to facial micro-expressions, no body movements involved. Universal for ancient/urban scenarios |
| Lighting | Universal standard: even soft light, frontal key light + bilateral fill light, no hard shadows; urban cyberpunk scenarios may add controllable self-emissive reflections, not disrupting overall lighting unity, no overexposure |
| Consistency | Face/makeup/hairstyle/hair accessories/costume/accessories/patterns/light effects/structural components must be completely consistent across the four views, with no deviation |
| Frame Ratio | Recommended 4:1 or 3:1. Universal for ancient/urban scenarios |
| 3D Standard | Unified high-precision modeling, PBR materials, 8K ultra-high definition, cinematic rendering across all scenarios. No texture difference between ancient/urban scenarios |

---## IX. Prompt Templates (One-Click Adaptation for Dual Scenarios · 3D Chinese-Style Cyber Dedicated)

### Output Format Constraints (Universal for Dual Scenarios · Iron Rules)

| Item | Constraint |
|---|---|
| Output Content | **Output prompt text only**; do not output any other content |
| Prohibited Output | Quick reference tables, layered construction plans, visual constraint tables, prohibition tables, derivative plans, output suggestions, core element tables, and any other non-prompt content |
| Prohibited Scenes | Character derivative assets **do not include scene/environment descriptions**; do not output any scene/environment/weather/background narrative content (scenes belong to the scene asset category) |
| Prohibited Props | **Do not include any prop interactions**; do not output handheld or interactive items such as umbrellas, swords, fans, books, lanterns, or wine cups (props belong to the prop asset category) |
| Prohibited Pose Changes | **Do not alter the base model's pose**; do not output any actions or postural changes such as walking, looking back, raising hands, turning sideways, or running; maintain a natural standing posture |
| Format | Directly output a usable prompt code block; no titles, tables, explanations, or plan comparisons required |

### Complete Costume and Makeup Overlay (Four Views · One-Click Adaptation for Dual Scenarios)

```
Using the character's base image as the base, overlay costume, makeup, and styling via img2img,
3D Chinese-style cyber style, {scene system: ancient style/urban cyber}, high-precision modeling, PBR materials, core of Chinese aesthetics, {light fusion of ancient style/functional fusion of urban}, cinematic lighting,
Chinese-style cyber {gender} character four-view setting sheet, 3D rendering, high-precision modeling, 8K, ultra-realistic
character design sheet, character turnaround,
Keep the base facial features completely consistent, natural standing posture unchanged, {overall temperament},
【L1·Makeup】Decide based on user clues: {base makeup/light makeup/formal makeup/urban commute makeup/business makeup/cyber functional makeup}; use {makeup style}, PBR material rendering, {eyebrow makeup}, {eye makeup}, {lip makeup}, {controllable micro-neon effects/skin-adherent circuit patterns (add as needed)},
【L2·Hairstyle】{style type}, high-precision clear hair strands, {hair accessory description}, core of Chinese-style form,
【L3+L4·Costume】{main color}{style}, {material}, {decorative craft}, {traditional patterns/fusion of traditional patterns and circuit textures}, clear fabric texture, PBR material rendering, {embedded controllable micro-neon light bands (add as needed)},
【L5·Accessories】{headwear}, {earrings}, {neckwear}, {waistwear}, {handwear}, core of Chinese-style form, unified with costume and makeup style,
Arranged side by side from left to right in the same frame: portrait close-up + front view + side view + back view,
Natural standing, plain gray solid background, uniform soft light, no hard shadows, {cyber light effects controllable and not glaring (add as needed)},
Four views completely consistent in face/makeup/hairstyle/costume/accessories/patterns/light effects, clear 3D Chinese-style cyber modeling, clear high-precision modeling,
No text of any kind in the image
```

---

## X. Constraint Rules (Universal to Both Scenarios: Mandatory + Strictly Prohibited Iron Rules)

### Mandatory Rules (100% Execution, No Exceptions)

| ID | Rule |
|---|---|
| R1 | The overlaid face must be completely identical to the base model; any offset, deformation, or stylized alteration of facial features is prohibited. |
| R2 | Costumes must use "clear fabric texture + PBR material rendering"; cyber elements must not compromise the base texture of the costume or the core form of the Chinese style. |
| R3 | The entire scene must take the Chinese national style form as the absolute core. Ancient scenes must be purely traditional Chinese style; in urban scenes, the Chinese style foundation must not be lost. Pure Western designs without a Chinese style core are prohibited. |
| R4 | The style of makeup, hairstyle, costume, accessories, and cyber elements must be completely unified; a disjointed or opposing relationship between Chinese style and cyber elements is prohibited. |
| R5 | A four-view character sheet (close-up portrait + front view + side view + back view) must be output; this applies to both ancient and urban scenes. |
| R6 | A "plain gray solid-color background" must be specified; adding any scene, environment, or weather elements is prohibited. This applies to both ancient and urban scenes. |
| R7 | "Four-view consistency" must be specified; all costumes, makeup, patterns, cyber light effects, and structural components must be completely unified across the four views. |
| R8 | **Output prompts only** — Outputting any non-prompt content such as quick reference tables, layered schemes, visual constraints, prohibited items, derivative schemes, or output suggestions is prohibited. |
| R9 | **No scene descriptions** — Character derivative assets do not involve scenes, environments, weather, or background narratives; scenes belong to an independent asset type. |
| R10 | **No prop interaction** — Do not include any handheld or interactive items (umbrellas, swords, fans, books, etc.); props belong to an independent asset type, excluding fixed waist accessories. |
| R11 | **Pose remains unchanged** — The natural standing pose of the base model must be maintained; any change in action, posture, or stance is prohibited. |
| R12 | **L1 must analyze before deciding** — First parse the user's scene clues, facial clues, and style clues, then match the corresponding system to determine the makeup tier. |
| R13 | **All derivative assets require makeup** — In normal cases, do not maintain a bare face; use at least basic makeup. |
| R14 | **Makeup intensity is controlled** — Even when makeup is applied, it must be restrained; modern heavy makeup, exaggerated cosmetics, or overexposed cyber light effects are not allowed. |
| R15 | **Props/scenes/actions are not grounds for intensity escalation** — Basic makeup must not be elevated to stronger makeup based solely on props, environment, or actions. |
| R16 | **Dual-scenario adaptation rule** — When there are no clear cyber/urban clues, default to pure ancient style generation; when there are clear clues, match the urban cyber system. Unauthorized switching is prohibited. |
| R17 | **Cyber elements are strictly controlled** — Only the urban cyber system may use cyber light effects/techwear elements; in ancient scenes without clear clues, they are prohibited. All cyber elements must be deeply integrated with the Chinese style; disjointedness is prohibited. |
| R18 | **Cyber elements are limited to the costume/makeup scope** — Techwear structural components and light effect elements are limited to the costume/accessory level; they must not alter the facial features, limb structure, or basic posture of the base model. |
| R19 | **3D texture is unified across all scenes** — Ancient/urban scenes must maintain unified high-precision modeling, PBR materials, and cinematic lighting standards; texture degradation is not allowed. |

### Strictly Prohibited Rules (100% Prohibited, No Exceptions)

| ID | Prohibition |
|---|---|
| X1 | Offset of the overlaid face, deformation of facial features, or inconsistency with the base model. |
| X2 | Loss of the core Chinese style form in costumes, resulting in pure Western suits, pure techwear, or pure Western cyberpunk designs without a Chinese core. |
| X3 | Style conflicts among makeup, costumes, and cyber elements, resulting in a disjointed feel or opposition between Chinese style and cyber elements. |
| X4 | Complex scene backgrounds (must be solid color); adding any environment, scene, or weather elements is prohibited. |
| X5 | Inconsistency in costume/makeup, patterns, cyber light effects, or structural components between the four views. |
| X6 | Outputting any content other than the prompt (tables, schemes, suggestions, explanations, variants, etc.). |
| X7 | Adding scene descriptions to character derivative assets (environmental elements such as street views, rain, interiors, streets, weather, etc.). |
| X8 | Outputting sections such as "Core Element Quick Reference," "Layered Construction Scheme," "Visual Constraints," "Prohibited Items," or "Derivative Schemes." |
| X9 | Adding any prop interaction (handheld items such as umbrellas, swords, fans, books, lanterns, wine cups, etc.). |
| X10 | Changing the pose of the base model (action descriptions such as walking, looking back, raising a hand, turning sideways, running, looking down, or looking up). |
| X11 | Adding descriptions linking expression and posture (narrative descriptions such as "walking at a 45-degree side angle with a slight smile at the corner of the mouth"). |
| X12 | Directly applying fixed makeup/cyber elements without analyzing user clues, or unauthorized switching between ancient/urban systems. |
| X13 | Incorrectly maintaining a bare face, resulting in derivative assets lacking the required makeup. |
| X14 | Incorrectly upgrading makeup solely due to prop/scene/action words, leading to incorrect makeup intensity decisions. |
| X15 | Unauthorized addition of cyber light effects/techwear elements in ancient scenes without clear clues, destroying the ancient atmosphere. |
| X16 | Overexposed, glaring, or large-area coverage of neon light effects, destroying the visual texture and the character's face, costume, and makeup details. |
| X17 | Unauthorized modification of the base model's limb structure or facial features, or adding cybernetic modifications or body paint outside the costume/makeup scope. |
| X18 | Loss of the Chinese style foundation in urban scenes, resulting in pure Western cyberpunk style, deviating from the core of the Chinese form. |
| X19 | Appearance of vulgar, exaggerated Western punk designs that do not conform to Eastern aesthetics, violating the core of Chinese style aesthetics. |

---

## ✅ Verification Completion Notes
1. **100% Dual-Scenario Adaptation**: Two parallel rule sets, the "Ancient Traditional System" and the "Urban Cyber System," have been fully established. When there are no clear cyber clues, pure ancient content can be generated perfectly; when there are urban clues, Chinese style cyber content can be generated precisely. They do not conflict with each other.
2. **Zero Deviation from Chinese Style Foundation**: The red line of "Chinese form as the absolute core" runs through the entire manual. In urban cyber scenes, all costumes, hairstyles, and accessories retain the Chinese style core, eliminating pure Western cyber deviations.
3. **Controllable Cyber Integration**: Cyber elements are divided into "Optional Lightweight" and "Urban Enhanced" versions with clear boundaries, preventing over-cyberization in ancient scenes and loss of Chinese style in urban scenes.
4. **Unified 3D Standards**: Ancient/urban scenes share a single set of high-precision 3D rendering standards with no differences in PBR materials, lighting, or modeling precision, ensuring stable generation results.
5. **No Omission of Core Constraints**: Core rules from the original manual, such as "unchanged face, unchanged pose, layer-by-layer control, and pure costume/makeup scope," are fully preserved. The optimization does not break the underlying logic of the original manual.
6. **Comprehensive Coverage Without Blind Spots**: Costume/makeup combinations, inference rules, and prompt templates for all subdivided ancient and urban scenes have been completed. They can be implemented directly without secondary adjustments.