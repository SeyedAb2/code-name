# CodeNames — MySQL Rewrite v1

## Scope

- Processed all **60** MySQL chapters.
- Preserved the existing 60-chapter curriculum and its technical progression.
- Chapters **37–57** had the clearest final-third depth drop in the Luna output; those chapters received substantial topic-specific expansion rather than a cosmetic tone pass.
- Chapters **1–36** kept their stronger technical structure, but received a conversational Persian pass, exercise presentation cleanup, and additional connected mini-lab material where a comparable lab did not already exist.
- Projects **58–60** were expanded as engineering missions with explicit baselines, failure drills, reproducible evidence, and handoff expectations.

## Voice and narrative

The Persian pass follows the CodeNames voice: an experienced teammate teaching a newer teammate beside the keyboard. Formal forms were reduced in ordinary Persian prose, while genuine technical terms remain intact.

The rewrite emphasizes a continuous flow of problem → prediction → experiment → evidence → explanation → deliberate failure/edge case → verification instead of reference-manual prose.

A final-third pass was applied so later operational chapters do not collapse into short definitions and 18 shallow exercises.

## Depth improvements

The weakest original chapters were the later production/operations chapters (upgrade, accounts, grants, TLS, networking, Docker connectivity, pooling, multi-server design, server/session configuration, migrations, backup/recovery, replication, HA, monitoring, incident diagnosis, partitioning, and query tuning). They now include multiple connected teaching sections with runnable SQL/commands and explicit evidence-reading.

Additional chapter mini-labs were added only when the source did not already contain a lab-like section.

## Exercises and UI

- Normal chapters preserve their **18 exercises**.
- Existing exercise solutions are presented as collapsible `<details class="ex-sol">` blocks.
- Each exercise now has an explicit runnable/evidence deliverable.
- Comment-only pseudo-solutions in normal chapters were replaced or supplemented with executable SQL/commands tied to the chapter topic.
- Thin solutions were extended with an explicit evidence-reading requirement.
- Exercise headings and framing were rewritten to emphasize keyboard work and observable state rather than memorization.

## Projects

The three project pages remain project briefs rather than inflated normal chapters. They were expanded around:

1. **Transactional Shop core** — schema/invariants, controlled mid-transaction failure, reproducible handoff.
2. **Analytical tuning** — baseline, one-change experiments, read/write regression checks.
3. **Recovery and replication incident** — isolated restore/PITR, replica reality, measured RPO/RTO, operational handoff.

## Technical scope

This rewrite is primarily editorial/teaching-focused and remains grounded in the supplied Luna course. It does not claim an independent full upstream re-verification of every MySQL 9.7 version-sensitive statement. Existing version boundaries and official-documentation links from the source were retained rather than silently replaced.

## QA targets

- 60 HTML chapter files.
- 18 exercises in every normal chapter (1–57).
- Existing project checkpoint counts preserved.
- No duplicate HTML IDs.
- No normal exercise solution consisting only of SQL comments.
- Persian/English language blocks remain paired at the section/exercise level.
- SVG camelCase attributes restored after HTML serialization (`viewBox`, marker attributes, etc.).
- No chapter intentionally renumbered or rerouted.
