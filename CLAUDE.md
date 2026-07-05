# Design guidelines

<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight.

Focus on:

Typography:
Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.

Color & Theme:
Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.

Motion:
Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML.

Backgrounds:
Create atmosphere and depth rather than defaulting to solid colors.

Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (purple gradients on white backgrounds)
- Predictable layouts and component patterns
</frontend_aesthetics>

# Project: visNEX

## Brand name

The brand name is **visNEX**.

Always write it exactly as:
**visNEX**

Never use:
- VisNex
- VisNEX
- VISNEX
- visnex
- Visnex

## Product stage

This is **Stage 1**: a semi-automated expert service, not a full SaaS product yet.

The service creates premium AI-assisted sales visuals for B2B companies in interiors, construction, home improvement, architecture, furniture, doors, flooring, kitchens, lighting, renovations, pergolas, and similar categories.

Do not make it feel like a generic AI image generator.

It should feel like:
- an expert visual system,
- a premium service,
- a controlled AI-assisted production workflow,
- a visual partner for brands, websites, campaigns, and agencies.

## Core positioning

visNEX creates sales-ready AI visuals for interior and construction brands.

It does not generate random images.
It designs consistent, realistic, brand-aligned visual materials for:
- websites,
- landing pages,
- product categories,
- offer PDFs,
- campaigns,
- social media,
- ads,
- presentations,
- visual concepts.

## Visual direction

The website should feel like:
- premium editorial,
- architectural,
- refined,
- minimal,
- precise,
- human-directed AI,
- calm but memorable.

Avoid:
- purple SaaS gradients,
- blue tech startup look,
- cyberpunk,
- neon,
- gaming,
- sci-fi,
- excessive glassmorphism,
- generic cards,
- stock startup illustrations,
- overused AI sparkles,
- robot icons,
- magic wand metaphors,
- bland "AI platform" visuals.

## Color system

Use CSS variables.

Suggested palette:

```css
:root {
  --vn-bg: #FAFAF8;
  --vn-bg-warm: #F4F0EA;
  --vn-charcoal: #171717;
  --vn-charcoal-soft: #1C1A18;
  --vn-muted: #6F6A63;
  --vn-muted-light: #9A948B;
  --vn-line: #E4DED6;
  --vn-burgundy: #7A2533;
  --vn-burgundy-deep: #5B1825;
  --vn-burgundy-soft: #A64A5A;
  --vn-cream: #EFE7DC;
}
```

The page should be mostly light/off-white.
Use burgundy as a sharp premium accent, not as a dominant gradient everywhere.
Use charcoal for typography and one or two strong dark sections.

## Typography

Avoid Inter, Arial, Roboto, and default system fonts.

Use distinctive but professional typography. Suggested directions:
- Editorial serif for large headlines + clean grotesk for body.
- Examples of acceptable Google Fonts: `Instrument Serif`, `Cormorant Garamond`, `Fraunces`, `Sora`, `Manrope`, `Space Grotesk`, `DM Sans`.
- If using only free fonts, a good pairing is:
  - headlines: Instrument Serif or Fraunces,
  - body/UI: Sora or Manrope.
- Large H1 should be elegant and confident, not loud startup copy.

Typography should carry much of the identity.

## Motion

Use refined motion:
- subtle text reveal,
- parallax-like slow background movement,
- sticky scroll sections,
- cards that gently shift or reveal details,
- soft nav blur on scroll,
- active process steps while scrolling.

Avoid:
- bouncy animations,
- excessive hover effects,
- fast transitions,
- gimmicky AI effects.

Motion should feel expensive, not playful.

## Layout mood

Reference mood: Integrated Biosciences type of experience — clear, premium, sparse, high-confidence, large type, strong sections, refined motion.

Do not copy integratedbio.com:
- no identical layout,
- no copied text,
- no copied visual assets,
- no pixel-level recreation,
- no identical animations.

Only inherit the overall level of polish, restraint, whitespace, and scroll rhythm.

## Content rules

Use concise Polish copy.
Tone: expert, calm, premium, direct.

Avoid cliché words:
- innowacyjne
- kompleksowe
- najwyższa jakość
- rewolucyjne
- przenieś na wyższy poziom
- odkryj potencjał
- skuteczne rozwiązania
- dynamiczny rozwój
- od A do Z
- szybko, tanio i dobrze

Prefer:
- wizualizacje sprzedażowe
- spójność
- realizm
- kontrola jakości
- styl marki
- gotowe do publikacji
- selekcja
- prompt engineering
- kierunek wizualny
- materiały do strony i reklam
- branża wnętrzarska
- marki budowlane
- AI pod kontrolą człowieka

## Implementation expectation

Build a premium responsive landing page.

Recommended stack:
- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

If building pure HTML/CSS, still preserve the visual system, CSS variables, and motion quality.

Components should be clean, reusable, and named around the brand system.
