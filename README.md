# Commonplace design lab

Three connected **personal concept projects built with Instinct (AI assistance)** in November 2026. Candidate review and walkthrough are pending. This is not evidence of the candidate's independent implementation, paid product work or SaaS employment. Commonplace is a fictional product name used for this exercise, not a registered-brand claim or a real startup.

## What exists

1. **Learning and knowledge workspace UI concept.** Responsive resource cards, case-insensitive search and topic filters, empty-state recovery, save/unsave with optional local storage, session-only task checklist and progress, and a scripted assistant-interface demonstration. The assistant uses fixed examples, not an AI model. No real document uploads or collaborative backend.
2. **Brand and digital communication concept.** Original wordmark, palette/type/voice guidelines, five proposed LinkedIn posts, a proposed content calendar, two original promotional banners and an interactive campaign studio that switches between two audiences and three content formats. No campaign has been published or measured. Templates are deterministic, not AI-generated at runtime.
3. **Responsive product landing-page concept.** Original hero composition, CSS-only illustrative workflow, product story, feature cards and calls to action leading into the sample workspace. Desktop/mobile layouts and a search-engine description. No real pricing, customers, demo booking, account creation, analytics or email capture.

The three prototypes share a fictional brand and codebase, rather than claiming to be three deployed products. They are deliberately scoped learning artifacts, not completion of every feature in the proposed portfolio brief.

## Open it

This repository is a standalone HTML/source snapshot, not the full build/test bundle. Download `index.html` and open it in a modern browser. It contains the React code and styling and needs no installation or API key. Do not enter private data in the sample tasks. Saved resource IDs remain on the device when browser storage permits; tasks and campaign selections are session-only. Clipboard access may be limited when opened as a local file.

## Files in this snapshot

- `index.html`: self-contained runnable prototype.
- `app.jsx`: React views and local interaction state.
- `models.mjs`: sample resources, filtering, templates and storage helpers.
- `style.css`: responsive styles and keyboard-focus treatment.
- `build.mjs`: build script retained as source reference only.

Package manifests, dependency lockfile, test files/results, separate brand assets, concept/content documents and the review guide have not yet been uploaded. Therefore `npm ci`, rebuilds and the test commands are not supported from this repository snapshot. No hosted website is configured by this upload.

## Honest scope limits

No Figma, Photoshop, Illustrator, InDesign, Canva, Framer or Webflow source file was used or produced. Tool familiarity can be listed separately only where the candidate confirms it. Personas and journey statements are design assumptions, not interviews. No claims of conversion uplift, engagement, usability-test findings, production security, live AI inference, real collaboration or commercial readiness are made. Logos/visuals and copy are original for this exercise, with no employer assets, private company code, secrets or customer data.

## Candidate walkthrough before use

Review and explain the component structure, responsive grid, state updates, filtering, storage failure handling and template switching. Check every CV claim against what you understand and can demonstrate. Publication does not mean an employer application has been sent.

Third-party software: React/ReactDOM (MIT), esbuild (MIT), Playwright (Apache-2.0); bundled third-party notices are retained in `index.html`. No blanket redistribution licence is granted for the candidate's original project material by this upload.
