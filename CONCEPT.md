# Commonplace concept and design rationale

Personal concept projects built with Instinct (AI assistance), November 2026. Candidate review pending. Fictional product. The brief is inspired by the general problem of learning and shared knowledge, not a reproduction of DXS.labs' product.

## Problem hypothesis, not a research finding

Useful links, notes and learning intentions can become scattered. A focused starting screen could help someone find a short resource and choose one practical next step. This has not been validated through interviews, observation or usability sessions.

## Hypothetical personas

- **Asha, individual learner:** limited time between study and work; wants a useful resource and a manageable next action. Assumptions: she values a short reading time, clear labels and saving for later. Not a real research participant.
- **Leon, team lead:** wants people to share useful learning without adding another heavy process. Assumptions: he values small conversations, a clear resource library and a repeatable check-in. Not a real research participant.

Do not claim these profiles came from research. A future validation plan would interview several consenting learners/team leads and revise assumptions based on their actual needs, with consent and minimal personal-data collection.

## Proposed journey

1. **Discover:** landing page explains the concept. Potential concern: vague product promise. Response: concrete collect/learn/share story and clear fictional-demo label.
2. **Explore:** enter the sample workspace. Potential concern: too much content. Response: four concise resources, topic filters and search.
3. **Choose:** save a resource. Feedback: button state and saved count; failure to persist does not crash the app.
4. **Act:** tick a sample task or add a short next step. Feedback: task count and progress. Session-only scope is explicit.
5. **Communicate:** campaign studio changes language by audience/channel. Copy is a proposed draft, never a claim that a campaign ran.

## Implemented interaction and layout decisions

- Editorial hierarchy: one primary heading, short supporting copy, a clear primary action.
- A shared token palette and spacing rhythm link all three prototypes.
- Desktop two-column layouts become vertical stacks on smaller screens.
- Labels stay above search/select fields; buttons use semantic elements, visible focus and generous touch targets.
- Filters are toggles with `aria-pressed`; result counts and copy feedback use status regions.
- Resource cards keep topic, title, context and action together.
- Progress and task checkboxes demonstrate state, not real team reporting.
- The assistant panel offers three scripted example prompts. It is not powered by an AI service.

## What is NOT produced

No interactive Figma file, Adobe source asset, Framer/Webflow implementation, real user interviews, measured usability results, live LLM integration, document ingestion, shared accounts, task backend, project-management system, real collaborative workspace or production SaaS service. The concept brief is larger than this first implementation. Do not put those missing deliverables on the CV as completed work.

## Manual review tasks for Naga

1. Describe the landing page hierarchy. What does each call to action actually do?
2. Explain the difference between state in React and saved IDs in localStorage.
3. Filter for Learning, search for a missing word, then clear the filters.
4. Save/unsave a resource, reload, and explain what persists.
5. Complete a task, add a new one, reload, and explain what resets.
6. Choose each assistant prompt and explain why this is a mock, not AI inference.
7. Switch campaign audiences/formats and explain the message differences.
8. Edit one card, a CSS breakpoint and one content template, rebuild and run tests.

## Future validation plan, not completed testing

Ask consenting test participants to find and save a resource, recover from zero results, add a next step and interpret the assistant disclaimer. Observe confusion without leading them. Record actual completion/error counts only after sessions happen; no fabricated success rates. Then review contrast, keyboard order and a screen reader across browsers. Automated tests are implementation checks, not proof of usability or accessibility certification.
