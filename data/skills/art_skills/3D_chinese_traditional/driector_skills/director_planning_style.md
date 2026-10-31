---
name: director_planning_style
description: Chinese-Style 3D Constraints — Defines global constraints for the Chinese-Style 3D aesthetic regarding color systems, lighting schemes, texture directions, scene spatial elements, instrument selection, and environmental sound. Applicable to any narrative type.
metaData: director_skills
---

# Chinese-Style 3D Constraints · Chinese-Style 3D · Technique Reference

---

## I. Color System and Visual Tone

- **Color Base** — The entire film uses Moon White (C1), Cyan-Green (C2), and Indigo (C4) as base colors. The overall color temperature is neutral (4800-5500K), with medium-to-high saturation (55-75%), presenting the elegant and grand color palette of traditional Eastern aesthetics.
- **Emotional Palette Drivers** — Six emotional palettes (Palatial Opulence / Landscape Imagery / Boudoir Gentleness / Wuxia Severity / Festive Joy / Moonlit Serenity) correspond to different narrative segments. Palette switching should be synchronized with the story arc.
- **Warm-Cool Narrative Contrast** — Warm colors (Vermilion C3, Golden Yellow C5, Rouge C7, Turmeric C9) serve as visual signals for narrative turning points, used for emotional escalation and festive segments; cool colors (Indigo C4, Ink Black C6) are used for severe, melancholic, and serene segments.
- **Palette-First Principle** — Segment planning must first bind emotional scenes (Palatial Opulence / Landscape Imagery / Boudoir Gentleness / Wuxia Severity / Festive Joy / Moonlit Serenity, etc.), then determine the primary + secondary colors and lighting scheme, avoiding "the plot is right but the emotional color is wrong."
- **Prohibited Color Domains** — High-saturation fluorescent colors, neon colors, and modern digital color systems are incompatible with this style.

---

## II. Lighting Scheme System

- **Lighting as Narrative** — Seven lighting schemes correspond to different emotional segments. During the director's planning phase, the lighting tonal direction should be determined at the segment level, rather than specified shot-by-shot.
- **3D Rendering Lighting Characteristics** — Volumetric light, Ambient Occlusion (AO), and depth-of-field blur are the core lighting techniques for the Chinese-Style 3D aesthetic. All lighting schemes must reflect the texture of PBR physical material rendering.

| Lighting Scheme | Scheme Name | Color Tendency | Applicable Emotion |
|---|---|---|---|
| A | Warm Radiance | Vermilion + Golden Yellow highlights + Moon White base | Palatial Opulence, Solemn Grandeur, Festive Splendor |
| B | Cyan-Green Imagery | Cyan-Green + Moon White mist + Volumetric light diffusion | Landscape Imagery, Poetic Distance, Ethereal Grace |
| C | Soft Warm Shadow | Rouge warm tone + Golden Yellow accents + Soft shadows | Boudoir Gentleness, Soft Delicacy, Daily Warmth |
| D | Cool Severity | Ink Black + Indigo + Hard light contrast | Wuxia Severity, Cold Sharpness, Oppressive Atmosphere |
| E | Window Sheer Diffusion | Moon White base + Natural side light + Ambient Occlusion | Indoor Daytime, Daily Life, Quiet Elegance |
| F | Moonlit Clear Light | Indigo + Moon White cool light + Golden Yellow warm light accents | Moonlit Serenity, Quiet Beauty, Solitary Longing |
| G | Festive Warm Light | Vermilion + Turmeric + High-saturation warm light | Festival Celebration, Lively Cheer, Rich Colors |

- **Warm-Cool Light Allocation** — Warm light (Vermilion/Golden Yellow/Turmeric) is suitable for opulent, gentle, and festive segments; cool light (Indigo/Ink Black) is suitable for severe, melancholic, and serene segments. Directors can adjust the warm-cool switching points based on narrative needs.
- **Atmosphere Direction Mapping** — The atmosphere direction of each scene should be mappable to one of the above lighting schemes (A-G) to ensure visual consistency.

---

## III. Texture Direction

- **3D Rendering as Anchor** — The core of Chinese-Style 3D: high-precision modeling, PBR material rendering, volumetric light, ambient occlusion, and depth-of-field blur, presenting cinematic 3D rendered visuals.
- **PBR Material Supremacy** — All costume, makeup, and prop materials must be credible through PBR physical rendering: the sheen and drape of silk, the texture and patina of wood, the reflection and quality of metal, the transparency and warmth of jade, and the glaze sheen of porcelain.
- **Volumetric Light and Depth of Field** — Volumetric light is the soul of Chinese-Style 3D visuals: outdoor scenes must have aerial perspective and volumetric light scattering; indoor scenes create volumetric light effects through window light/candlelight; depth-of-field blur enhances spatial depth.
- **Aged Texture** — Materials must not be too clean or perfect: wood surfaces have usage marks, stone surfaces have weathering patterns and moss, fabrics have natural wrinkles, and tiles have moss stains and imperfections. "Plastic feel" and flawless "CG feel" are prohibited.
- **3D Does Not Equal Cold** — Chinese-Style 3D emphasizes the warmth of Eastern aesthetics, conveying emotion through material texture, lighting layers, and color coordination, rather than relying on spectacular effects.

---

## IV. Ancient-Style Scene Spatial Elements

Scene elements unique to the ancient-style worldview and their visual narrative functions:

- **Sheer Curtains / Screens / Doorframes** — Natural framing composition props, creating a "see-through" sense of layering and spatial depth. In 3D rendering, the semi-transparent material of sheer curtains and the light penetration effect are visual highlights.
- **Courtyards / Flower Trees / Rain Curtains** — Natural carriers for negative space composition; the scene is the emotion: a courtyard full of blooming flowers = relief, sitting alone in the rain = loneliness, falling leaves swirling = parting sorrow. In 3D scenes, the volumetric feel of vegetation and light interaction are particularly important.
- **Candlelight / Moonlight / Window Light** — Light source carriers in the ancient-style world: candlelight = warm/intimate (Scheme C), moonlight = cool/serene (Scheme F), window light = daily/quiet (Scheme E). In 3D rendering, the volumetric light effect of light sources and PBR material reflections are key.
- **Flying Eaves / Dougong / Green Tiles** — Iconic elements of ancient-style architecture. 3D modeling must reflect the exquisite details of carved beams and painted pillars, and materials must have an aged feel.
- **Use Scene Empty Shots for Transitions Between Segments** — This style has rich scene assets (different time periods/weather/season variants). It is recommended to use scene empty shots for emotional buffering during segment connections, avoiding hard cuts.
- **Use Visuals Rather Than Dialogue for Turning Points** — Prioritize visual means (lighting shifts, shot size jump cuts, empty shot metaphors) rather than relying on dialogue for explanation.

---

## V. Ancient-Style Instruments and Environmental Sound

Sound element constraints under the ancient-style worldview:

### Instrument Selection

- **Xiao (Flute)** — The core instrument for desolate, lonely, and sorrowful segments; best expresses cold and mournful tones.
- **Erhu** — For emotionally intense, painful, and longing segments; the crying tone of the strings is suitable for emotional outbursts.
- **Suona** — For segments with intense emotional fluctuation (great sorrow/joy, fate turning points, climaxes); use with caution, but once used, it is a nuclear bomb.
- **Guqin** — For opening tone-setting / steady segments; used in combination with the Xiao to reflect landscape imagery.
- **Pipa** — Accents for tense, urgent segments; suitable for Wuxia severity scenes.
- **Guzheng** — Atmospheric instrument for palatial opulence and festive joy segments; gorgeous and elegant.
- String music underlay can increase the cinematic feel but should not overshadow the main theme.

### Instrument Combination Strategy

| Emotional Stage | Instrument Combination |
|---|---|
| Steady / Opening / Closing | Guqin solo or Guqin + Xiao |
| Landscape Imagery / Ethereal | Xiao + Guqin + Di (Flute) |
| Palatial Opulence / Festive | Guzheng + Bianzhong (Chime Bells) + Strings |
| Sorrow Deepening | Xiao + Erhu |
| Emotional Outburst / Fate Turning Point | Suona solo or Suona + Erhu |
| Wuxia Severity / Tension | Pipa accents + String underlay |
| Gentle Daily Life | Guqin + Di + Light Strings |

### Ancient-Style Environmental Sound

- **Typical Environmental Sound Layers** — Cicadas and insects / Trickling streams / Wind through bamboo groves / Market hawking / Night rain dripping on eaves / Fabric friction / Wind chimes / Bird chirping / Falling leaves rustling
- **Label 1-2 core environmental sounds for each scene** to assist subsequent sound design. The richer the environmental sound layers, the more immersive the ancient-style scene becomes.
