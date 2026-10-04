---
name: targeted-cv
description: Produce a one-page, sendable PDF CV tailored to one job posting, in under ten minutes, from the user's existing career profile (career/career-profile.md, produced by the career-interview skill). Use whenever the user pastes or links a job description and says anything like "create a CV for this", "tailor my CV", "CV for this role", or names a posting and wants a CV. Do not rerun the career interview when the profile exists. Not for LinkedIn edits or cover letters.
---

# Targeted CV from a posting

The career interview is done. `career/career-profile.md` holds every validated number, the confidentiality rules, the voice specification and a log of wording decisions. A targeted CV is a selection and rewording exercise from that file, rendered through the PDF builder in `career/pdf/`. Nothing is researched, interviewed or scraped from LinkedIn unless the profile is genuinely missing something the posting asks about.

**If `career/career-profile.md` does not exist**, stop and say so: the CV can only be as good as the profile, and the `career-interview` skill builds it. Offer to start the interview (Express mode if they are in a hurry).

## Deliverable

One PDF at `career/send/<Firstname>-<Lastname>-CV-<Target>.pdf`, one page, classic layout. Send it with SendUserFile if that tool is available; otherwise give the path. Plus the three files that produced it (below). A Claude Doc is optional and only when they ask to open or edit it on their phone; a Doc's own PDF export usually runs longer than a page, so the PDF always comes from the builder.

## Order of work

Do these in sequence. Steps 1 to 3 are reads; do not start writing before step 4.

1. **Save the posting.** Write it to `career/sources/posting-<slug>.md` with title, employer, location, the mandatory list, the nice-to-have list and the responsibilities, in the posting's own words. The slug is short and kebab-case (`acme-data-engineer`).

2. **Read, in this order, nothing more:**
   - `career/career-profile.md` §1 Identity and contact, §7b Voice, §10 Constraints and decisions, §11 Gaps and follow-ups (including every "Wording decisions" block at the end). These are binding.
   - The accomplishment sections of the profile (§4) for the roles the posting cares about.
   - The nearest existing `career/cv-*.md` by target, if any. Reuse its bullets as the starting text; do not redraft from scratch what already passed review. On the first CV there is none: draft from §4 and §9 of the profile.
   - `references/content-template.html` in this skill, and the nearest existing `career/pdf/content-*.html` if there is one.
   - `.claude/skills/career-interview/references/deliverables.md`, sections "Writing a bullet", "Fitting to one page" and "Tailoring to a specific posting". Follow them.

3. **Map the posting to the profile.** For each mandatory and nice-to-have item, note the evidence in the profile or write "none". This list is for the reply at the end; it also decides bullet order. Never add a skill or claim the profile does not support. Where the profile marks a skill as training or familiarity only, it may appear in the skills line if the user has agreed to that, but no bullet may imply production use.

4. **Write `career/cv-<slug>.md`** in this shape: header, Profile, Core skills, Experience, Education, Additional. Rules in [Content rules](#content-rules).

5. **Write `career/pdf/content-<slug>.html`** from the markdown, using the template. Fill the header from profile §1, respecting its "Do not publish" line. Then build and fit: `references/build-and-fit.md`. Do not stop at two pages; do not shrink the font.

6. **Copy** `career/pdf/out/<slug>-classic.pdf` to `career/send/<Firstname>-<Lastname>-CV-<Target>.pdf` (Target is a one- or two-word role name, Title-Case, hyphenated). Send it.

7. **Log it.** Append a short block to `career/interview-state.md`: posting, files, gaps against the mandatory list, anything the PDF says differently from the markdown. Append any new wording decision the user made to the end of `career-profile.md` under a dated "Wording decisions" heading, so the next CV inherits it.

8. **Reply** in a few lines: the file, the two or three biggest gaps against the mandatory requirements, and at most one question. No recap of the CV.

## Content rules

**The profile's decisions come first.** §10 and the "Wording decisions" blocks record how this person's facts are worded: approved public phrasing for anything confidential (no internal codenames, rounded figures where the precise one is sensitive), how retitles are shown, bullets they cut, words they never want used. Apply every one of them without relitigating. When the user makes a new wording call during this CV, log it (step 7).

**General rules, learned the hard way:**
- No em dashes anywhere in the document. Colon before a result, comma, semicolon or full stop otherwise. En dashes in date ranges are fine.
- Keep every claim exactly as scoped and hedged as the profile has it. If the profile says a pilot "cut churn in the two test regions", the CV never says it "cut churn". `[est]` figures keep their "around" or "~".
- Attach each number to what it actually measures. A 40% rise in sign-ups describes the funnel, not revenue.
- Say each fact once. A line such as "Promoted twice in four years" appears in one place (usually the end of the Profile paragraph) and nowhere else.
- Consecutive titles at one employer can share a heading ("Associate, then Manager · 2019 – 2022"). Never add a sentence explaining a retitle.
- A bullet the user cut stays cut; it lives on in the profile for interviews.
- No bullet that only summarises other bullets ("led the design work across both projects"). Fold that detail into the bullet it belongs to.
- No vague inflation ("transformed", "revolutionised", "world-class") unless the profile uses exactly that word with evidence.

**Voice:** the voice samples in profile §7b are the specification. Copy their construction: person, tense, sentence length, how they hedge. Employer context lines use participles ("Acme. Building and running…"), never third person. No tricolons of qualities, no adjective openers, no rhetorical setup and payoff, no coined abstractions about how the person works.

**Bullet clarity** (the usual complaint is that a bullet is hard to parse on first read):
- One idea per sentence; two or three short sentences beat one long one.
- Say what was built, then what it does, then the result, in that order.
- Every result clause has a subject: "It cut the time to…", not "Time to onboard fell from…".
- Two tools in one bullet: "One runs… The other sits on…", each keeping its own number.
- No bracketed component lists in the middle of a sentence; name the stack in prose or not at all.
- No colon-chained pipeline stages ("intake: triage: resolution"). Write "intake from X, triage by Y, then resolution in Z".
- A quoted customer question ("where's my order?") says more than an abstraction ("order-status queries").

**Bold:** inside bullets only on runs that contain a figure, plus one anchor phrase on the lead bullet of each role. Under about 15% of body words.

**Skills section:** grouped lines with a bold label, four or five lines, ordered to mirror the posting's mandatory list. Terms the posting uses, where the profile supports them, in the posting's spelling.

**Profile paragraph:** four to five lines, bespoke to the posting, leading with the thing the posting leads with. It must mention the posting's own nouns where the evidence exists.

## Claude Doc, when asked

Only if the user wants to open it on their phone or edit inline. Birth it with the docs tools before any file work, fill section by section, then build the PDF from the same text. Rename the doc without an em dash. Tell them the Doc's export is not one page and the sent PDF is the one to use. If the PDF differs from the Doc after fitting (header label, compressed Education/Additional), say so once.

## Files in this skill

- `references/build-and-fit.md`: build commands, page-count check, the fit sequence, the style-override block.
- `references/content-template.html`: the HTML skeleton the builder expects, with the one-page override block in place.
