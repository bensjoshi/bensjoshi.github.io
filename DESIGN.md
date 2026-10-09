---
name: Ben Joshi
description: One grid, two rooms. A Swiss concert poster for an engineer who plays trombone.
colors:
  paper: "#f5f5f3"
  ink: "#111111"
  ink-2: "#4a4a47"
  hair: "#cfcfca"
  blue: "#1e38d4"
  red: "#e8401f"
  red-text: "#c42d14"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(3.6rem, 10.4vw, 10.5rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 76"
  display-wide:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(3.4rem, 7.6vw, 8.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.045em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.1rem, 3.6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.2rem, 1.55vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'ss01'"
  label:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.01em"
  mono:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "0.86em"
rounded:
  none: "0px"
spacing:
  margin: "clamp(20px, 4vw, 56px)"
  gap: "clamp(16px, 1.7vw, 28px)"
  nav-height: "64px"
  rule: "3px"
  section-y: "clamp(64px, 8vw, 128px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "54px"
  button-primary-hover-software:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
  button-primary-hover-music:
    backgroundColor: "{colors.red}"
    textColor: "{colors.ink}"
  door-software:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
  door-music:
    backgroundColor: "{colors.red}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  field-software:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
  field-music:
    backgroundColor: "{colors.red}"
    textColor: "{colors.ink}"
  carousel-button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    size: "48px"
  project-toggle:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "32px"
---

# Design System: Ben Joshi

## Overview

**Creative North Star: "The Swiss Concert Poster"**

The site is set like an International Style gig poster: an engineer's grid and a musician's rhythm in one system. One cool paper stock, black ink, heavy black rules, one grotesk family pushed across its width axis, flush-left ragged-right setting on a 12-column grid. Everything is printed, nothing floats: there are no cards, no radii, no shadows, no gradients.

The site is one person with two rooms. Each room owns exactly one flat ink (ultramarine for Software & Data, signal red for Music) and that ink is spent on the thing that matters in each viewport: the colour field beside the hero, the door band, the close, the active state. The landing has no room ink of its own; it is paper and black, with both inks appearing only as the two doors.

Rhythm is carried by two geometric motifs drawn in the text colour of the band or field that carries them: a clock square wave for Software and a geometric side-on trombone for Music, whose slide moves across seven numbered slide-position ticks. They play once on load (the wave draws in; the slide sweeps out to position 7 and back) and advance on door hover. That is the system's one authored motion moment. The world deliberately rejects the dark editorial-serif portfolio and the white card-grid developer portfolio.

**Key Characteristics:**
- Two-ink printing: room ink + black + paper, nothing else.
- Archivo variable at the extremes of its width axis: condensed heavy hero lines, expanded heavy name and close headings.
- 3px black rules between sections; 1px black sub-rules inside them; hairlines only inside case studies.
- Room-colour fields carrying true two-colour duotone photos (ink shadows, room-ink midtones, paper highlights).
- Square-wave and slide-position motifs as the only illustration.
- Square everything: zero radius, flat fills, outline focus rings.

## Colors

A printed two-ink palette: one neutral paper, one black with a softer grey for secondary text, and a single flat ink per room.

### Primary
- **Ultramarine** (`blue`): the Software & Data room ink. Fills the Software door, hero colour field, close section, nav logo square, active underlines and focus rings on that page. Text on it is paper (7.48:1); never set ink on ultramarine (2.31:1). As text colour on paper it passes at any size (7.48:1).

### Secondary
- **Signal Red** (`red`): the Music room ink. Fills the Music door, hero colour field, close section, nav logo square, carousel active dot and bullet dashes. Text on it is ink (4.66:1). Red on paper and paper on red are only ~3.7:1, so both are display-size only (the music hero's "trombone." and the close heading).
- **Signal Red, Text Cut** (`red-text`): the darker red used for any small red text on paper: meta labels, tag rows, hovered project names, external nav link (5.15:1). It is the Music room's `--room-text`; Software uses ultramarine for the same role.

### Neutral
- **Cool Paper** (`paper`): the single ground for every page and the text colour on ultramarine.
- **Press Black** (`ink`): headings, body, every structural rule, primary buttons, carousel track, and text on signal red (17.3:1 on paper).
- **Graphite** (`ink-2`): secondary text: descriptions, case-study prose, nav links at rest, footer, tag lists (8.15:1 on paper).
- **Hairline** (`hair`): slash separators between tags, case-study section dividers, inactive carousel dashes. Decorative only (1.43:1): never text.

### Named Rules
**The Two-Ink Rule.** A page prints with its room ink, black and paper only. The landing is the one place both room inks meet, and only as the two doors. No gradients, tints, or third accent.

**The Room Variable Rule.** Components never name a room colour directly; they use the room roles (`--room` fill, `--room-text` small text on paper, `--on-room` text on the fill), switched by `body[data-room="software"|"music"]`. The landing defaults the room to ink.

**The Display-Only Red Rule.** Signal red against paper, in either direction, is for display sizes only; small red text uses the text cut.

## Typography

**Display Font:** Archivo variable (wdth 62–125, wght 400–900), loaded from Google Fonts, with Helvetica Neue, Helvetica, Arial fallback
**Body Font:** Archivo (same family)
**Label/Mono Font:** system monospace stack, for inline `code` only

**Character:** One grotesk doing everything, with the width axis as the poster's voice: squeezed and heavy for the subpage hero lines, stretched and heavy for the landing name and the closing call. Body sets with stylistic set 01 enabled.

### Hierarchy
- **Display, condensed** (800, clamp(3.6rem, 10.4vw, 10.5rem), 0.88, width 76%): subpage hero h1 over the left seven columns. One word or phrase may take the room ink via `em` (display size only).
- **Display, expanded** (800, width 112%): the landing name (min(15.5vw, 30vh), line-height 0.84, -0.05em) and the colour-field close heading (clamp(3.4rem, 7.6vw, 8.5rem), 0.9, -0.045em).
- **Headline** (700, clamp(2.1rem, 3.6vw, 3.5rem), 0.98, -0.035em): section titles in the left four columns.
- **Intermediate titles** (650, 1.5–2.5rem clamps, ~1.05–1.1, -0.025 to -0.03em): experience role, music cards, qualification titles, door labels. The ensemble name steps up to 800 at clamp(3rem, 7vw, 7rem).
- **Title** (650, 1.25rem, 1.2): project names in the tracklist.
- **Lead** (400, clamp(1.2rem, 1.55vw, 1.45rem), 1.45–1.5): hero description, intro and about paragraphs, max 30–34em.
- **Body** (400, 1.0625rem, 1.55): prose capped at 34–40em.
- **Label** (600–700, 0.875rem, +0.01em, sentence case): poster info strip, case-study subheads, experience and ensemble meta, figcaptions, footer. Never uppercase, never tracked wide.

### Named Rules
**The Width-Axis Rule.** Hero lines go condensed (76%); names and closing calls go expanded (112%). Everything else sets at normal width. Heavy weight (800) belongs to display only.

**The Sentence-Case Rule.** Labels are small, bold and sentence case. No tracked uppercase labels, no monospace labels.

## Layout

A 12-column grid (`repeat(12, minmax(0, 1fr))`) with fluid outer margin (`margin` token) and gutter (`gap` token). Settings are flush-left, ragged-right.

- **Hero / landing split:** content in columns 1–7, room colour field or headshot in columns 8–12 at full viewport height minus the nav (100svh on the landing). The landing's two doors sit at the foot of the left block as full-width colour bands.
- **Sections:** heading in columns 1–4, content in 5–12. Wide sections put the heading in 1–5, a lead in 7–12, and the body full width below. Vertical padding is the `section-y` clamp.
- **Tracklist:** a fixed four-column row (name 3.2fr, description 5fr, stack 2.6fr, 44px toggle). Expanded case studies reuse the same columns, with subheads in column 1 and prose in 2–3.
- **Close:** heading and note in columns 1–7, contact links stacked in 8–12, bottom-aligned.

**Responsive.** At 1100px sections stack to full width and the tracklist drops to three columns. At 860px the nav becomes static (sticky on desktop only), the hero field and landing portrait stack below the text, meta labels (experience, ensemble) move after their headings, and two-up grids go single column. At 560px skills go single column, door motifs cap at 240px, and carousel dots hide behind the counter.

**The Rule Hierarchy Rule.** 3px black rules separate sections, the nav, footer, tracklist edges and carousel bar; 1px black rules separate items within a section (projects, experience, skill groups, cards, the poster info strip); hairline rules separate subsections inside an open case study. Rules carry the structure that cards would carry elsewhere.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth comes only from print devices: rule weight, solid colour fields against paper, and the two-colour duotone that prints a photo in the room ink. The sticky desktop nav is separated from content by its 3px bottom rule, not by a shadow.

**The Printed Surface Rule.** If it could not be printed in two inks with a rule pen, it does not belong: no shadows, blurs, glows, or translucent overlays.

## Shapes

Every edge is square (0px radius) by default and by declaration. Form comes from rectangles: colour bands, square buttons, a square bordered toggle with a drawn plus, 10px x 2px dash bullets, 36px x 4px carousel dashes, the 14px nav logo square. Icons are 16px-viewBox stroked SVG arrows with square caps at 2px stroke. Screenshots inside case studies take a 1px ink border. Load reveals use rectangular `clip-path` wipes.

## Components

### Buttons
- **Shape:** square corners (0px).
- **Primary:** ink fill, paper text, 54px tall, 24px horizontal padding, 600 weight, trailing stroked arrow.
- **Hover / Focus:** fill switches to the room ink with `--on-room` text over 200ms; the arrow nudges 4px forward. Focus is a 3px room-ink outline at 3px offset (ink on the landing, inside fields, and in the close).
- **Secondary (text link):** 600 weight, 2px room-ink underline at 6px offset; hover turns the text to the room's text colour. The GitHub and inline text links share this treatment at 5px offset.

### Navigation
- Sticky 64px bar on paper with a 3px ink bottom rule (desktop only). Logo is the name at 700 with a 14px room-ink square before it.
- Links: 0.9375rem, 500, graphite at rest; hover and active go to ink with a 2px room-ink underline that wipes in from the left over 300ms. The cross-room link uses the room text colour.
- Mobile (≤860px): static, logo above a wrapping row of links.

### Doors (landing signature)
Full-width colour bands, one per room: label (650, clamp(1.6rem, 2.6vw, 2.5rem)) with arrow on the left, the room's motif on the right (max 96px tall). They wipe in from the left on load (Music 120ms behind). Hover advances the motif and nudges the arrow. Focus is a 3px inset outline in the band's text colour.

### Colour Field (subpage signature)
The right five hero columns filled with the room ink. Holds a photo printed as a true two-colour duotone by an inline SVG gradient-map filter (`filter: url(#duotone)`: desaturate, then map shadows to `--ink`, midtones to the room ink and highlights to `--paper`; each page defines `#duotone` with its own room ink), an optional 1.2rem caption, and the room motif drawn below in `--on-room`. It wipes in from the right on load.

### Motifs
- **Square wave (Software):** 10px stroke, miter joins, butt caps; draws in over 1400ms after 350ms; door hover shifts it half a period (60px).
- **Trombone (Music):** a flat, geometric side-on trombone in 8px ink strokes with square corners: a curved bell flare, the bell tube, and the slide below it. The outer slide (`.slide-outer`) is the only moving part. On subpages, 3px ticks numbered 1–7 (11px tabular figures) sit under the slide at the real slide-position spacing. On load the slide sweeps out to position 7 and back (1.8s, `animation-fill-mode: backwards` so hover still works afterwards), and door hover extends it to position 6.

### Tracklist (projects)
A `<details>` list between 3px rules, rows split by 1px ink rules. A 32px square toggle with a 2px ink border draws a plus that rotates to a minus when open. Hover and open state turn the name to room text and fill the toggle with the room ink. Case studies fade down 6px over 500ms. List bullets are 10px room-ink dashes.

### Poster Info Strip
A small bold label line bounded by a 1px ink rule, carrying identifying text only (the domain on the landing, the room's subjects on subpages). It sits at the poster's edge: top of the landing, foot of the subpage hero.

### Carousel
Full-width ink track with crossfading slides (600ms), then a bar with a tabular counter, 36px x 4px dash indicators (hair at rest, graphite on hover, room ink when active), and 48px square ink buttons that take the room ink on hover. Closed by a 3px ink rule.

### Close (contact)
A full-bleed room-ink section with a 3px ink top rule, expanded display heading, lead note, and contact links stacked between 2px rules in the current text colour. External-link arrows step diagonally on hover; the mail arrow steps forward.

## Do's and Don'ts

### Do:
- **Do** print every page in its room ink, ink and paper only, switching room colours through `--room`, `--room-text` and `--on-room`.
- **Do** set paper text on ultramarine and ink text on signal red.
- **Do** use the `red-text` cut for any red text below display size on paper.
- **Do** separate sections with 3px ink rules, items with 1px ink rules, and case-study subsections with hairlines.
- **Do** set hero lines condensed (width 76%) and names and closing calls expanded (width 112%), both at 800.
- **Do** print photos on a colour field as true two-colour duotones (ink, room ink, paper) via the `#duotone` SVG filter. Never multiply a photo onto the field, because that floods the highlights and hides the subject.
- **Do** keep the square wave for Software and the sliding trombone for Music, played once on load and advanced on door hover; disable all of it under reduced motion.
- **Do** put meta labels (dates, "Current") beside headings on desktop and after them on mobile.

### Don't:
- **Don't** use gradients, cards, rounded corners or shadows.
- **Don't** set ink text on ultramarine (2.31:1) or small text in signal red on paper (3.71:1).
- **Don't** use the hairline colour for text.
- **Don't** add eyebrows, kickers or section numbers above headings; a heading stands alone.
- **Don't** add tracked uppercase or monospace labels; labels are bold sentence case.
- **Don't** introduce a second typeface; Archivo's width axis supplies the contrast.
- **Don't** add motion beyond the load wipes, motif draw-in, door advance, case-study open and carousel crossfade.
