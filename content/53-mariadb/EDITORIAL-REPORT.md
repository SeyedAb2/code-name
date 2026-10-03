# CodeNames — MariaDB Rewrite v1

## Scope

- Processed all **40** MariaDB chapters.
- Chapters **4–37** were regenerated as full lessons rather than cosmetically edited.
- Chapters **1–3** and projects **38–40** already had stronger structure, so they received a conversational/editorial consistency pass while preserving their useful architecture.
- Preserved the course's **687 exercises** exactly: 18 exercises in each normal chapter, then 5 / 7 / 9 project checkpoints for the three capstones.

## Narrative rewrite

The Persian pass follows the CodeNames voice: an experienced teammate teaching a newer teammate beside the keyboard. The rewrite avoids documentation-style openings and uses a continuous problem → experiment → evidence → explanation → failure/edge case → verification flow where the subject supports it.

A separate end-to-start editorial pass was used so the final third of each chapter does not become more formal, compressed, English-heavy, or checklist-like than the opening.

## Depth and examples

The original Luna output in chapters 4–37 was structurally shallow and highly templated. Those chapters were expanded to roughly **3.4×** their original HTML size on average, with topic-specific explanations, more runnable SQL/commands, concrete failure cases, mini-labs, and evidence-reading.

The rewrite deliberately avoids adding filler. Extra volume is used for:

- connected examples;
- before/after state;
- representative query/command evidence;
- failure diagnosis;
- version boundaries;
- practical trade-offs;
- exercises whose solutions include runnable artifacts and reasoning.

## Exercise UI and exercise quality

For regenerated normal chapters, exercises now use existing reusable CodeNames components instead of a new one-off design system. Each exercise clearly separates the task from the expandable solution and includes a visible deliverable/evidence expectation.

Exercises progress through warm-up, experiment, debugging, and engineering-scenario difficulty. Normal exercises require runnable SQL/commands and observable state rather than prose-only answers. Comment-only pseudo-solutions were removed from normal chapters; remaining comment-only blocks are project deliverable placeholders inside the three capstone briefs.

## Technical corrections and verification

Version-sensitive MariaDB behavior was checked against current official MariaDB documentation. Important corrections include:

- MariaDB `JSON` is taught with its actual MariaDB storage/compatibility boundary rather than assuming MySQL JSON semantics.
- Application-time and system-time are separated correctly. Application-time validity is queried with business-period predicates, while `FOR SYSTEM_TIME` is reserved for system-versioned history. `UPDATE/DELETE ... FOR PORTION OF` is demonstrated for application-time periods.
- Bitemporal examples combine application-time validity with system-versioned history instead of inventing unsupported application-time `AS OF` syntax.
- Period overlap constraints use the MariaDB `WITHOUT OVERLAPS` model where version-appropriate.
- Server/session variable scope no longer treats global-only settings such as `max_connections` as session variables; `time_zone` is used to demonstrate GLOBAL vs SESSION behavior.
- `ANALYZE` / optimizer evidence, backup/restore prerequisites, Galera quorum, replication, and Online DDL sections were reviewed for MariaDB-specific behavior rather than copied from MySQL assumptions.
- The course uses MariaDB 11.8 as the primary modern baseline where the generated material needs an explicit current-series reference, while version-sensitive behavior is labeled rather than silently generalized.

## Diagrams

Topic-specific teaching diagrams were added or rebuilt for areas where a visual model improves understanding, including:

- Storage Engine boundaries
- index / optimizer access path
- system-version history
- application-time vs system-time / bitemporal reasoning
- PITR timeline
- replication flow
- multi-source replication
- Galera quorum

SVGs were checked for responsive `viewBox`, unique marker IDs, correct camelCase SVG attributes, and resolved arrow-marker references.

## QA

Final checks:

- **40** HTML files present.
- **687** total exercises.
- Exercise counts match the course metadata.
- No duplicate HTML IDs detected.
- No Persian leakage detected inside English language blocks.
- All SVGs have raw-source `viewBox` attributes.
- No lowercase `viewbox`, `markerwidth`, `markerheight`, `refx`, or `refy` attributes remain.
- No normal chapter contains comment-only code as an exercise solution.
- Persian formal markers targeted by the editorial pass (`می‌شود`, `نمی‌شود`, `می‌کند`, `می‌تواند`, formal `اگر`/`را` patterns, etc.) were removed from ordinary Persian prose in favor of the CodeNames conversational voice.
- Destructive/operational exercises are framed around disposable lab boundaries and verification.

## Editorial intent

The final result is meant to read as one instructor across the entire track: simple and friendly on the surface, but still serious about MariaDB internals, operations, evidence, failure modes, and production reasoning.
