# Career skills kit for Claude Code

Two Claude Code skills and a PDF builder that turn your career into a reusable master profile, then into one-page CVs tailored to specific job postings, and a rewritten LinkedIn.

- **career-interview**: a structured, one-question-at-a-time interview (Express ~20 min, Standard 60 to 90 min, or Executive) that pulls your accomplishments, numbers and scope into `career/career-profile.md`. It then writes a master CV and a LinkedIn rewrite from it. Triggers on things like "interview me about my career", "fix my CV", "rewrite my LinkedIn".
- **targeted-cv**: once the profile exists, paste a job posting and say "create a CV for this". It picks and rewords from your profile and renders a one-page PDF to `career/send/`.

## Setup

1. Unzip the kit. You get a `career-skills-kit` folder containing `.claude/`, `career/`, `CLAUDE.md` and this README. Rename it if you like (e.g. `job-search`); that folder is your job-search project. (`.claude` is a hidden folder; on macOS press Cmd+Shift+. in Finder to see it.)
2. If you'd rather use an existing project, copy `.claude/skills/` and `career/pdf/` into it, and merge `CLAUDE.md` into yours.
3. Requirements: [Claude Code](https://claude.com/claude-code), Node.js (any recent version) and Google Chrome. The PDF builder finds Chrome in its usual install location on Windows, macOS and Linux; if yours is elsewhere, set `CHROME_PATH`.
4. Optional: the Claude in Chrome extension lets Claude read your LinkedIn profile directly. Without it, Claude will ask you to paste the profile or save it as PDF.
5. Open Claude Code in that folder and say **"interview me about my career"**.

Put your current CV (PDF or text) in `career/sources/` before you start; the interview reads it first so it doesn't ask what's already on the page.

## What gets created

```
career/
  career-profile.md     the master file: every fact, number and wording decision
  interview-state.md    progress, so the interview can stop and resume
  sources/              your old CV, job postings you target
  cv-*.md               CV text per target
  linkedin-rewrite.md   LinkedIn drafts
  pdf/                  builder, layouts, generated HTML/PDF/PNG
  send/                 the final PDFs you actually send
```

`career-profile.md` is the asset. Every later CV inherits its numbers, its confidentiality rules and the voice you agreed during the interview, so you never repeat yourself.

## Tips

- Gather performance reviews, promo packets and brag docs before the interview. They're where the numbers are.
- Say "skip", "park that" or "stop here" any time; the interview resumes where it left off.
- When you correct a CV's wording ("never say X", "round that figure"), Claude logs it in the profile so the next CV gets it right.
- Your `career/` folder holds personal data. Don't commit it to a shared repo or zip it up when you pass this kit on: share only `.claude/skills/`, `career/pdf/build.js`, `career/pdf/layout-*.css`, `CLAUDE.md` and this README.
