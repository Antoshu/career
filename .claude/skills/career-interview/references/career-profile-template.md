# Master file templates

Two files. `career-profile.md` is the durable asset — everything extracted, in a form any future document can be generated from. `interview-state.md` is scaffolding for the session and survives interruption.

Write into the profile continuously, not at the end. The structure below is a starting point; extend it where a particular career needs it, and delete sections that genuinely don't apply.

## Evidence tags

Every claim carries a tag so that later, when you are drafting a CV, you know instantly what is safe to state flatly and what needs hedging or checking. This is what keeps invented numbers out of the final document.

| Tag | Meaning |
|---|---|
| `[doc]` | Taken from a document — review, dashboard screenshot, offer letter, posting |
| `[stated]` | They said it confidently and know the source |
| `[est]` | Their approximation — usable, but flag it when drafting |
| `[unverified]` | Half-remembered; needs confirming before it enters any document |
| `[verbatim]` | Their exact words, preserved for voice |
| `[interview only]` | How to explain something if asked (a retitle, a gap, a short stint). For conversation; never goes into a CV or LinkedIn |

---

## career-profile.md

```markdown
# Career profile — [Name]

Last updated: [date] · Interview mode: [express/standard/executive]

## 1. Identity and contact
Name as shown · pronouns (if they want them listed) · city and country · phone · email
Links: LinkedIn, portfolio, GitHub, personal site, publications
Work authorisation / visa status
Do not publish: [current-employer visibility, anything confidential, references]

## 2. The brief
Target roles/titles:
Target company type, size, stage, industry:
Location and remote preference:
Compensation range:
Timeline and notice period:
Deal-breakers:
Why this move (in their words) `[verbatim]`:
Target job postings on file: [paths in career/sources/]
Vocabulary those postings repeat: [keyword list — feeds CV and LinkedIn]
How the search is going so far: [applications, replies, interviews]
Their own diagnosis of what's going wrong `[verbatim]`:

## 2b. Target evidence matrix
Built in Phase 1b from the postings, or — where there's no posting — from a stated
hypothesis about the job family that they confirmed or corrected. Source noted, because a
hypothesis they corrected is a different kind of fact from a line lifted out of a real ad.

Source: [postings on file / job-family hypothesis, confirmed by them on <date>]

| # | What the target wants evidence of | Evidence found | Strength | Where it came from |
|---|---|---|---|---|
| 1 | e.g. "Rust or C++ required" | Rust: 12k-line production service, 18 months | strong | Kelvin role, Phase 3 |
| 2 | e.g. "seven-figure cost reduction" | GPU spend $2.1M → $780K | strong | Kelvin role, `[doc]` |
| 3 | e.g. "orchestration at scale" | none — never used Airflow/Dagster | **absent** | confirmed Phase 4 |

Rows still empty at the end of Phase 4 are the Phase 8 gap report. Mark an honest
**absent** rather than leaving a row blank — "we never asked" and "she hasn't done it"
lead to completely different advice.

## 3. Career spine
| Dates | Employer (what it does, size) | Title(s) | Location | Type | Why left |
|---|---|---|---|---|---|

Notes on anything awkward and how they want it handled:

## 4. Roles

### [Employer] — [Title] · [dates]
**About the employer:** what it does, size, revenue, stage, industry.
**Reported to:** · **Team:** · **Type:** permanent/contract/founder

**Mandate:** what they were hired or promoted to do, and the state of things on arrival.

**Scope:**
- Team: [size, composition, direct vs indirect] `[tag]`
- Budget / P&L: `[tag]`
- Business volume touched: [users, revenue, accounts, sites, transactions] `[tag]`
- Geography and stakeholders:
- Owned vs influenced:

**Accomplishments**

1. **[Short handle]**
   - Challenge: [what was wrong or needed, with the numbers that made it matter]
   - Action: [what *they* specifically did; note others' involvement honestly]
   - Result: [outcome + number] `[tag]`
   - Evidence: [where the number comes from]
   - Difficulty / constraints: [what made it hard — this is the differentiator]
   - Their words: "…" `[verbatim]`
   - Relevance to target: [high/medium/low]

2. …

**Tools and methods used here:**
**Recognition:** promotions, awards, review quotes, customer or exec feedback
**Not on the current CV but should be:**
**Open questions for this role:**

### [next role…]

## 5. Skills inventory
| Skill / tool | Level (expert / working / familiar) | Last used | Evidence from which role |
|---|---|---|---|

Languages:
Certifications and licences (with dates and currency):

## 6. Education and credentials
Degrees, institutions, dates, honours, thesis, relevant coursework (early-career only).
Executive education, bootcamps, substantial training.

## 7. Beyond the day job
Publications · patents · talks and podcasts · open source · writing
Awards · volunteering · boards and committees · professional bodies · mentoring
Side projects

## 7b. Voice
Register they chose at the tone check (first person / third person, plain / formal, terse / expansive):
**Voice samples** — lines they wrote or rewrote themselves, verbatim. These are the specification
for every document; match the construction, not just the vocabulary.
- "…"
Constructions they rejected, and what they called them ("robotic", "sounds like a LinkedIn post"):
Words and phrases they don't use about themselves:

## 8. Signature material
Unusual strengths (with the evidence that supports each):
What people pull them into regardless of title:
Working / leadership style, with a moment that demonstrates it:
Strongly-held views about the craft:
A failure and what changed after it:
Career pattern / through-line:

## 9. Positioning (Phase 7 — validated with them)
**Positioning statement (one line):**
**Pillar 1: [theme]** — evidence: [accomplishment refs]
**Pillar 2: [theme]** — evidence:
**Pillar 3: [theme]** — evidence:
**Top five accomplishments, ranked for the target:**
1. …
**What they explicitly do not want to be hired for:**
**Their reaction to this synthesis** `[verbatim]`:

## 10. Constraints and decisions
Decisions made during the interview about how to present gaps, contract roles,
titles, dates, confidentiality — so later drafts don't relitigate them.
Record each as a structural decision (dates, grouping, what the entry says). Put any
"if asked, say…" answer on its own line tagged `[interview only]`.

## 11. Gaps and follow-ups
- **Unverified claims to confirm:** [list with what would confirm each]
- **Artifacts worth digging up:** [specific dashboards, reviews, metrics]
- **Target requirements with no evidence yet:** [split: not captured vs genuinely absent]
- **Parked questions:**
```

---

## interview-state.md

```markdown
# Interview state

Mode: [express/standard/executive] · Started: [date] · Last session: [date]

## Phase progress
- [x] 0 Harvest — sources read: [list]
- [x] 1 Brief
- [ ] 2 Spine — in progress
- [ ] 3 Role deep dive
      - [x] Acme (2021–2024) — complete
      - [ ] Globex (2018–2021) — not started
- [ ] 4 Cross-cutting
- [ ] 5 Signature
- [ ] 6 Loose ends
- [ ] 7 Synthesis
- [ ] 8 Report

## Next question
[The literal next thing to ask, so a resumed session starts cleanly.]

## Parked
- [Question they deferred, and why]

## Notes to self
- [Where the energy was; what to come back to; topics to handle gently]
```
