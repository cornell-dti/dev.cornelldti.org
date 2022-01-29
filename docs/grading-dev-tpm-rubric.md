---
id: grading-dev-tpm-rubric
title: 'Dev & TPM Grading Rubric'
---

## Role Specific Grading Breakdown (**40%**)

- **20%** - Dev Assignments
  - 10% - Dev Assignment 1
  - 10% - Dev Assignment 2
- **20%** - Role Meeting Attendance
  - Devs: bi-weekly DevSesh, TPM 1:1s (3 total in a semester)
  - TPMs: TPM meetings
  - Can miss up to 2 meetings (DevSesh or TPM), no questions asked

## Dev Subteam Performance (**30%**)

### Reliability (aka Portfolios) (**10%**)

2% for each completed dev portfolio.

- 1% for at least 1 pull request link.
- 1% for at least 1 review link.

### Quality of Work (**15%**)

- 15 - Impressive
  - Dev's work defines the word 'master hacker' OR if a dev actively contributes to other parts of the project (so a mainly frontend works on backend, an iOS works on Android, etc)
  - Semester's work contains several impressive changes.
- 12 - Excellent
  - **This is the baseline.** Meets the expectation to consistently and constantly produce work with at least one impressive stuff.
  - Impressive means that there is something original. Examples:
    - Try some new technology that no one else on DTI has tried before
    - Linter fixes that significantly reduces the number of linter errors (you can't achieve this by disabling linter warnings/errors)
    - A refactoring that improves developer experiences
    - Create part of a new feature from scratch (with no similar existing code to reference)
    - A difficult bug fix
    - etc...
  - Some unimpressive examples:
    - Writing a new backend endpoint that is very similar to other endpoints.
    - Small tweaks to existing code.
    - Moving a lot of stuff around without substantial change (usually has a high raw diff lint count, but low significant line count)
    - etc...
- 9 - Good
  - Dev consistently and constantly produce work but unimpressive.
  - Newbies have the exception that if they put in "faithful attempts", they will reach a 12.
- 6 - Okay
  - Something like fixing CSS bugs every week but nothing else.
- 3 - Poor
  - GitHub contribution graph is extremely sparse.
- 0 - Hopefully no one gets there.

### Professionalism (aka Don’t Commit Crimes) (**5%**)

Start from 5. Minus certain points for each problem below.
We will happily ignore some small number of unhelpful commit messages.

- (-1) PR Reviews provide minimal feedback or trivial changes only
- (-1) extremely unhelpful commit messages
- (-1) leaked credentials
- (-1) committed small garbage to the repo (temp/unneeded files)
- (-2) committed big garbage to the repo (something like node_modules)
- (-2) bad words in code or commit messages
- (-2) committed crime to the repo. (e.g. force-push to destroy other dev's work, very unlikely)

## TPM Subteam Performance (**30%**)

### Team Communication (aka Reliability) (aka Portfolios) (**15%**)

3% for each completed TPM portfolio.

### Project Management (**5%**)

- 5 - Establishes a clear list of tasks to complete before release, updates/maintains the timeline, and keeps everyone on schedule with no confusion
- 4 - Establishes a clear list of tasks to complete before release and delegates deadlines to members well
- 3 - Establishes tasks and timeline, but sometimes these planning breaks apart.
- 2 - Establishes unclear tasks and timeline to release
- 1 - Do not help establish clear tasks or deadlines

### Helpfulness (**5%**)

- 5 - Can be counted on to help developers.
- 4 - Helps developers, but sometimes with large delay.
- 3 - Sometimes helps developers.
- 2 - Rarely helps developers.
- 0-1 - Developers feel abandoned.

### Quality (**5%**)

- 5 - Codebase is properly maintained, and the codebase has a high standard of quality.
- 4.5-5 - Codebase is mostly maintained. 5 if only one of the following applies. 4.5 if both apply.
  - Some development practices are not completely adhere to industry's best practices. (ignore an unspecified small number of violations)
  - Developers sometimes run into trouble of merging in their changes due to mismanagement of codebase
- 3 - No sign of effort of maintaining the codebase, and breaks are frequently. However, things still somehow work.
- 2 - No sign of effort of maintaining the codebase, and things don't work most of the times.
- 1 - Codebase is in free fall.
- 0 - Hopefully no one gets here. If you encourage developers to commit the source code of linux or a 100GB movie into the repo, you will probably get this grade.
