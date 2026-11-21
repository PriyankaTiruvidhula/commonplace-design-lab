# Commonplace design lab

Three connected **personal concept projects built with Instinct (AI assistance)** in November 2026. Candidate review and walkthrough are pending. This is not evidence of the candidate's independent implementation, paid product work or SaaS employment. Commonplace is a fictional product name used for this exercise, not a registered-brand claim or a real startup.

## What exists

1. **Learning and knowledge workspace UI concept.** Responsive resource cards, case-insensitive search and topic filters, empty-state recovery, save/unsave with optional local storage, session-only task checklist and progress, and a scripted assistant-interface demonstration. The assistant uses fixed examples, not an AI model. No real document uploads or collaborative backend.
2. **Brand and digital communication concept.** Original wordmark, palette/type/voice guidelines, five proposed LinkedIn posts, a proposed content calendar, two original promotional banners and an interactive campaign studio that switches between two audiences and three content formats. No campaign has been published or measured. Templates are deterministic, not AI-generated at runtime.
3. **Responsive product landing-page concept.** Original hero composition, CSS-only illustrative workflow, product story, feature cards and calls to action leading into the sample workspace. Desktop/mobile layouts and a search-engine description. No real pricing, customers, demo booking, account creation, analytics or email capture.

The three prototypes share a fictional brand and codebase, rather than claiming to be three deployed products. They are deliberately scoped learning artifacts, not completion of every feature in the proposed portfolio brief.

## Open it

Download `index.html` and open it in a modern browser, no installation required. All React code and styling are bundled into that file, with no runtime CDN requests. Clipboard permission varies in file previews; the fallback explains how to copy manually. For reliable clipboard and saved state, serve locally:

```sh
npm ci
npm run build
npm start
```

Open http://127.0.0.1:4173. Node 22 and Python 3 were used for this review. No API key is needed. Do not enter private data in the sample tasks. Saved resource IDs stay on the device when browser storage permits; tasks and campaign selections are session-only.

## Included portfolio and assets

- [Seven-page portfolio](4-Priyanka_Commonplace_Portfolio.pdf): seven-page portfolio with concept user flow, low-fidelity wireframe and actual screenshots.
- `logo.svg`, `5-banner-1.png`, `6-banner-2.png`: wordmark and promotional visuals.
- Desktop/mobile screenshots are included as root-level PNG files with numeric upload prefixes and names showing view and viewport width. UI tests write new captures into `screenshots/`.
- `package.json`, `package-lock.json`, `playwright.config.mjs`: pinned dependencies, scripts and browser-test setup.

No hosted website is configured. Downloading the HTML or serving it locally is required. Node.js, npm and Python 3 are required for the development commands. UI tests additionally need Chrome; set CHROME_PATH to its executable.

## Architecture

- `app.jsx`: React views and local interaction state.
- `models.mjs`: original sample resources, search/filter logic, campaign templates and defensive storage helpers.
- `style.css`: responsive tokens, components, desktop/mobile layouts and keyboard-focus treatment.
- `build.mjs`: esbuild produces a self-contained `index.html`.
- `models.test.mjs`: Node logic tests.
- `ui.spec.mjs`: Playwright browser workflows and viewport checks.
- `CONCEPT.md`: scope, assumptions, hypothetical personas, journey and validation plan.
- `CONTENT.md`: proposed campaign content and calendar.
- [Brand and review guide](3-Commonplace_Review_Guide.pdf): walkthrough and visual identity guide.

## Test it

```sh
npm run test:logic
# Set CHROME_PATH if Chrome is elsewhere on your machine:
CHROME_PATH=/path/to/chrome npm run test:ui
```

The test configuration defaults to `/opt/google/chrome/chrome`. These are the build environment's tests, not user-research evidence or full accessibility certification. `TEST_RESULTS.txt` records actual results. Keyboard focus, semantic controls, reduced motion and narrow layouts are considered, but a screen-reader and broader cross-browser review remain future work.

## Honest scope limits

No Figma, Photoshop, Illustrator, InDesign, Canva, Framer or Webflow source file was used or produced. Tool familiarity can be listed separately only where the candidate confirms it. Personas and journey statements are design assumptions, not interviews. No claims of conversion uplift, engagement, usability-test findings, production security, live AI inference, real collaboration or commercial readiness are made. Logos/visuals and copy are original for this exercise, with no employer assets, private company code, secrets or customer data.

## Candidate walkthrough before use

Explain the component structure, responsive grid, state updates, filtering, storage failure handling and template switching in your own words. Change a heading, add a resource and revise a campaign message. Review every CV claim against what you understand and can demonstrate. The repository is shared publicly with the owner's approval. Publication does not mean an employer application has been sent.

Third-party software: React/ReactDOM (MIT), esbuild (MIT), Playwright (Apache-2.0); bundled third-party notices are retained in `index.html`. No blanket redistribution licence is granted for the candidate's original project material by this upload.
