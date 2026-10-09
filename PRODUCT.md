# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Tech hiring:** recruiters, hiring managers and engineers evaluating Ben for software engineering and data engineering roles. They arrive from a CV, LinkedIn or GitHub link, skim for fit, and dig into project write-ups if the first impression earns it.
- **Music contacts:** bandleaders, bookers and fellow musicians checking Ben's background as a trombonist: styles, current ensemble, qualifications, and how to get in touch.

Each half of the site has to stand on its own for its audience; neither is a footnote to the other.

## Product Purpose

benjoshi.co.uk is Ben Joshi's personal site: a single home that routes visitors to either his software & data work or his music.

Success means:

- **Job conversations:** a tech visitor emails or messages about software/data engineering roles.
- **Project credibility:** a tech visitor reads the case studies and leaves convinced of real engineering depth (decisions, trade-offs, honest "what I'd improve" notes), not a list of buzzwords.

What success looks like for the music audience is not yet defined beyond being able to make contact.

## Positioning

A Computer Science graduate working day-to-day as an Assistant Data and Insights Manager, who is also a performing trombonist. The relationship between the two is "one person, two rooms": a shared identity, with each section free to have its own character. The overlap (music software such as Trombello, SoundWave and InstrumentIQ) exists in the content but is not the site's headline story.

## Operating Context

- Landing page (`index.html`): name, portrait, and two doors: Software & Data, and Music.
- Software & Data (`software/index.html`): intro, selected projects as expandable case studies (overview, architecture, technical highlights, what's next / what I'd improve), current experience, technical skills, about, contact.
- Music (`music/index.html`): about, performance, current ensemble, on-stage photo carousel, qualifications, contact.
- Visitors typically arrive via direct links (CV, LinkedIn, GitHub, social previews), so Open Graph metadata matters.

## Capabilities and Constraints

- Static HTML/CSS hosted on GitHub Pages, custom domain `benjoshi.co.uk` (CNAME). No build step or framework.
- All three pages share the root `style.css` and choose their room with `body[data-room]`. An empty `script.js` also exists at the root, and the Music page keeps its own inline carousel script.
- Project write-ups expand in place using `<details>` with no JavaScript.
- Trombello is in active development and its source is not public on GitHub.

## Brand Commitments

- Name: Ben Joshi. Domain: benjoshi.co.uk.
- Software page headline is "Software Engineering & Data" (deliberately reverted from "Software Engineer with a data background").
- Voice: first person, plain, specific and self-critical where useful; case studies own their limitations rather than overselling.
- The two sections keep distinct characters within one shared identity.

## Evidence on Hand

- Photos: `images/headshot.jpg`, `images/profile.jpg`, `images/music1-3.jpg` (on stage), `images/software.jpg`, `images/trombello.jpg`, `images/soundwave.jpg`, `images/og-image.jpg`.
- Six software/data case studies: Trombello, RoomSync, SoundWave, InstrumentIQ, TenantTrack, FutureFridges.
- Education: BSc Computer Science (2:1), Nottingham Trent University, 2025.
- Current role: Assistant Data and Insights Manager at a construction consultancy (Sheffield and London offices).
- Music: current trombonist with The Hoplites (Nottingham ska band); ABRSM Level 4 Diploma and Grade 8 trombone.
- Contact: bensjoshi@gmail.com, GitHub, LinkedIn.
- No testimonials, references, press, recordings/audio, or employer names are on the site. Do not fabricate any.

## Product Principles

1. **Two front doors, equal weight.** Neither audience should feel they've wandered into the other's site.
2. **Depth over claims.** Credibility comes from real write-ups, decisions and trade-offs, not skill badges or adjectives.
3. **Honest about state.** In-development and imperfect work is labelled as such.
4. **Contact is always one step away.** Every section ends with a clear way to reach Ben.
5. **Static and simple.** Keep it hand-maintainable HTML/CSS on GitHub Pages.
