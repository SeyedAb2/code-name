---
name: codenames-course-authoring
description: Author or repair CodeNames learning chapters when bilingual instructional depth, reusable HTML patterns, visual quality, and verification matter.
---

# CodeNames Course Authoring

## Identity and quality bar

CodeNames is an open-source, documentation-grade learning platform: a practical course, workshop, and debugging guide—not a blog or a command cheat sheet. Write for learners who want operational understanding, not memorized syntax.

Every chapter must feel simple, practical, professional, deep, clear, debuggable, and human-written. Chapter 1 reference quality is the **depth floor**, not only the UI style.

The common weak-output failure modes are compressed prose, checkbox completion, cheat-sheet writing, unexplained command walls, and one-line solutions. Avoid all of them.

## Depth floor and reconciliation

Treat the closest strong completed chapter—normally Chapter 1—as a **minimum instructional-depth benchmark**. Do not declare a chapter complete because every named topic appears once. A topic earns completion only after the learner can predict behavior, run a small experiment, read evidence, distinguish a nearby misconception, and use the model to diagnose a failure.

Before expanding an existing chapter, reconcile it end to end. Search its prose, diagrams, exercises, quick reference, labs, and metadata for old shorthand or contradictions; replace or remove the stale claim rather than appending a correction elsewhere. Then compare terminology, mental models, command conventions, and scope boundaries with adjacent chapters so that a learner does not receive two incompatible explanations of the same system.

## Narrative contract

CodeNames chapters should sound like an experienced developer sitting beside the learner and reasoning through a real problem. Prefer this progression:

**real situation → natural question → prediction → experiment → output → explanation → technical model → deliberate failure → diagnosis → practical takeaway**

Let the learner feel the problem before naming its abstraction. Do not open with a definition when a concrete failure can create the question first. For example, make a learner try localhost from the wrong container, observe the failure, and only then introduce network namespaces.

Do not let the chapter become translated documentation, an RFC, engineering notes, or a checklist with Persian words. One paragraph should normally carry one main idea. When a paragraph introduces several new terms, split it and build the model gradually; preserve depth by sequencing, not by compressing concepts.

Use conversational transitions naturally—such as “حالا یک سؤال مهم پیش می‌آید”، “بیایید خرابش کنیم و ببینیم چه می‌شود”، and “این خروجی دقیقاً چه چیزی به ما می‌گوید؟”—but vary them and never turn them into a repeated template.

## Start with project evidence

Before authoring:

1. Read the closest completed chapter(s), relevant metadata in `data/courses.js`, and shared prose styles.
2. Confirm the target route and existing readiness/exercise/time convention; do not invent a route.
3. For version-sensitive setup, product, command, or platform claims, verify primary official documentation.
4. Preserve unrelated worktree changes. Update generated manifest/search data only through the repository's normal manifest command.

## Bilingual parity

- Every educational unit must appear in natural Persian and complete English: headings, ledes, explanations, labels, notes, warnings, diagram captions, troubleshooting, exercises, solutions, lab, and quick-reference explanations.
- Commands and representative output are shared; do not duplicate them merely for language.
- Persian is conversational, professional, technically precise, and written as Persian—not a literal translation or note fragments.
- English is complete and natural, never a summary of the Persian.
- Use `lang="fa"` and `lang="en"`; code and terminal blocks use `dir="ltr"`.

### Persian language rule

Keep genuine technical terms when they carry useful meaning: Docker, Dockerfile, image, container, volume, bind mount, network, bridge, DNS, cache, layer, runtime, build, stage, Compose, healthcheck, secret, environment variable, PID, CLI, and daemon. Ordinary explanation should remain Persian. Prefer Persian equivalents for ordinary words such as دستور, خروجی, خطا, مدرک/نشانه, بررسی, روند, گزارش, پوشه, مرورگر, برنامه, مشکل, and فرض. Do not mechanically translate technical terms, but also do not make ordinary prose 30–40% English.

## Teaching method and structure

Teach important concepts as a sequence:

**question → prediction → intuition → concrete scenario → technical explanation → command → representative output → interpretation → failure → debugging reasoning → takeaway.**

A chapter normally includes the masthead, lede, progressive sections, real terminal experiments, notes/warnings, diagrams, pitfalls or troubleshooting, solved exercises, a mini-lab, and quick reference. Omit a part only when the topic genuinely makes it irrelevant.

Each command must answer a question and act as evidence for a concept, not become the lesson itself. Explain why it runs, what state changed, which line matters, and what conclusion follows. Never dump a large command wall without context.

Representative output is part of the lesson, not decoration. Mark input versus output clearly, keep values plausibly variable where appropriate, explain which lines are evidence, and state what a failed or absent line would mean. Prefer an experiment that changes one condition at a time over an abstract claim about command behavior.

For important commands, use the teaching loop **why → command → representative output → read the important line → update the mental model**. If output varies by platform, version, address, or timing, label it representative and explain what the learner should actually look for.

## Failure-driven teaching

Deliberately break the nearby assumption. A good failure section has the shape: “We expected X. Instead the tool showed Y. That tells us the failure happened before/after Z. So the next useful check is A, not a random restart.” Do not jump directly from an error message to a fix; identify the failed boundary and the next discriminating check first.

## Existing HTML patterns

Reuse project components/classes rather than inventing UI: `masthead`, `facts`, `term`, `note safe`, `note warn`, `diagram`, `pitfalls`, `ex`, `ex-sol`, `capsule`, `ranked`, `cheat`, and `table-wrap`.

Use a `term` block with a `term-bar`, label, copy button, and LTR `pre`. Keep terminal output representative and clearly distinguished from input. Use `note safe` for a dependable mental model and `note warn` for a real operational/security risk.

## Table Rendering and Table Quality Rules

1. Tabular content **must** use semantic HTML inside the reusable component: `<div class="table-wrap"><table class="doc-table"><thead><tbody><tr><th><td>`.
2. Never fake a table using aligned paragraphs, inline spacing, pseudo-columns, or raw markdown.
3. Wrap every lesson table in `<div class="table-wrap">` and put `class="doc-table"` on the table; never rely on unclassified or browser-default tables.
4. Include clear header cells, consistent column purpose, readable cell content, and meaningful row separation.
5. Use project CSS tokens/classes. Tables must have padding, header emphasis, row borders, contrast, and responsive horizontal scrolling when needed.
6. Tables must stay readable in RTL prose and dark/light themes. If the output looks like loose text lines or browser defaults, the chapter fails visual QA.
7. Improve shared table CSS only when needed and make the improvement reusable; do not add a one-off inline styling hack.

## Diagram rules

- A diagram teaches a difficult relationship; it is not decoration.
- Map the entities, ownership boundaries, and arrow meaning before drawing. Every arrow must have one defensible semantic meaning--such as request, reply, ownership, hosting, lifecycle, or data flow--and its caption or label must make that meaning explicit.
- Do not merge distinct paths merely to make the graphic look tidy. If two clients reach one service through different endpoints or integrations, show them as separate paths and identify their common destination.
- Use responsive SVG `viewBox`, a descriptive `title`, and project diagram classes/tokens (`dg-fill*`, `dg-stroke*`, `dg-t*`, `dg-arrow*`) where possible.
- Never rely on native SVG default fills for `rect` or `text`. Set shape fill/stroke and text fill explicitly.
- Test light and dark readability: no black-on-black, white-on-white, invisible arrows, or theme-dependent text.
- Use `currentColor` only when its inherited color is known safe. Avoid RTL-sensitive spatial ambiguity; label direction and ownership clearly.
- When a rendering failure is found, add the narrow reusable safeguard to shared styling and record it in this skill.

For visual QA, check both dark and light themes and both RTL prose/LTR code contexts. Confirm that text, arrowheads, borders, hover states, and horizontal overflow remain legible; a source-level diagram that only looks plausible is not enough.

## Exercises and labs

Substantial Docker chapters normally contain exactly 18 exercises unless the course manifest explicitly says otherwise. Exercises must mix prediction, “what do you think happens?”, short narrative scenarios, debugging tickets, output comparison, model selection, deliberate experiments, explaining why a fix works, and identifying what is not yet proven. Do not make every solution follow the same labeled pattern.

Exercises mix prediction, execution, output reading, explanation, debugging, command selection, and realistic scenarios. Keep the metadata count exactly aligned with actual `<div class="ex" id=...` blocks.

Solutions are mini-lessons, not answer keys: they should explain the answer and reasoning, use a command or output when useful, and surface a nearby misunderstanding when it helps. Vary the prose; do not mechanically label every solution “Answer / Evidence / Trap / Conclusion.”

When a chapter has a fixed exercise count, preserve it exactly while deepening each solution. Do not create the appearance of rigor by adding extra empty prompts or by leaving older one-line solutions beside newer detailed ones.

Labs should feel like a small engineering story rather than a setup checklist. Normally include **initial goal → working baseline → observation → deliberate failure → diagnosis → repair → verification → cleanup/result check**, and explain why each checkpoint exists. Require commands and observable output, but do not frame the lab as trivia.

## Continuity and scope

Every Docker chapter should know what the previous chapter taught, what new problem naturally appears now, and what belongs later. Open with continuity when useful and end with a natural reason the next chapter exists. Do not teach future chapters early merely to make the current chapter look complete.

Before completion, ask: “Would a beginner understand why this works?”, “Could they diagnose the most likely failures?”, “Does the second half feel as carefully written as the first?”, “Does the Persian sound like a human teacher?”, and “If the commands disappeared, would a real lesson remain?” If any answer is no, continue editing.

## Final-third editorial pass

Long chapters often begin warmly and become dry near the end. After the technical review from beginning to end, perform a Persian editorial review from end to beginning. Compare the first, middle, and final thirds explicitly. The final third—including exercises, lab, handoff, and quick reference—must not be more compressed, more English-heavy, more checklist-like, more repetitive, less explanatory, or less example-driven than the opening. Give exercises and labs the same editorial attention as the first sections.

## Authoring QA and maintenance

Before handoff, audit:

- bilingual depth and naturalness;
- scope boundaries and technical accuracy;
- code blocks with teaching purpose;
- exercise count, unique IDs, and substantive solutions;
- semantic `<table class="doc-table">` elements inside `table-wrap`, with legible header, cell, and hover states in both themes;
- diagram text/shape readability in both themes;
- arrow semantics, ownership boundaries, and diagram captions;
- cross-chapter terminology and removal of superseded claims;
- representative output, including an explanation of the evidence it supplies;
- RTL prose and LTR commands/output at mobile-width overflow boundaries;
- no TODOs/placeholders;
- readiness metadata and generated outputs where applicable.

Run the relevant manifest/build checks. If a new authoring or rendering problem is discovered—such as fake tables, shallow prose, weak solution reasoning, missing bilingual parity, unsafe SVG defaults, or dark-mode breakage—update this living skill with a precise reusable rule before finishing.
