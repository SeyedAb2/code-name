# C# course authoring report

## Scope

Redesign and author the Persian/English C# course at `09-csharp`. The supplied prompt asks for a complete progression, practical programming exercises, three mission-based projects, and a persistent authoring-skill update. Git Chapter 1 remains untouched.

## Authoring baseline

- Read the CodeNames course-authoring skill and updated it with a reusable Programming-course practical exercise contract.
- Read Git Chapter 1 as the requested reference for narrative, experiments, bilingual presentation, and lesson rhythm.
- Read the repository's Next.js 16 dynamic-route and page documentation before working on route-sensitive code. Chapter routes are statically enumerated from ready catalog entries whose HTML exists in `content/<track>/<slug>.html`.
- Confirmed the real course id and content directory: `09-csharp` / `content/09-csharp/`.
- Verified the official Microsoft version mapping: .NET 10 supports C# 14. Feature-specific chapters must retain compatibility/version notes.

## Curriculum redesign

The old 42-item outline is replaced in the catalog by 67 ordered items: 64 teaching chapters and three projects. The full module order, moves, splits, additions and rationale are in [C-SHARP-REDESIGN.md](C-SHARP-REDESIGN.md). Chapters 01–07 have been authored as bilingual, runnable lessons; later entries remain intentionally not-ready until their lesson files are written.

## Editorial / engineering checks

Verified so far:

- Catalog JavaScript parses with `node --check`.
- Manifest export completed and counts exercise cards from actual chapter HTML; authored chapter exercise counts match catalog metadata.
- Production build completed successfully and generated 454 static pages/routes, including the seven newly ready C# lessons.
- `git diff --check` completed without whitespace errors.

Still pending for the complete course and visual sign-off:

- bilingual and technical review;
- representative rendered chapter checks in RTL/LTR, light/dark, desktop/mobile.
- author all remaining C# chapter files and repeat the route/manifest/build checks.

## Worktree caution

This repository already contains unrelated MySQL/MariaDB user work. It is intentionally preserved and must not be reset or overwritten as part of the C# task.
