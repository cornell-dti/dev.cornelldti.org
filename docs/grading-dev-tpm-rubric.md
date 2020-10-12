---
id: grading-dev-tpm-rubric
title: 'Dev & TPM Grading Rubric'
---

## Role Specific Grading Breakdown (**30%**)

- **15%** - dev assignments
- **15%** - role meeting attendance
  - Devs: bi-weekly devsesh (Saturday 2pm after all hands)
  - TPMs: TPM meetings

## Dev Subteam Performance (**30%**)

### Peer Evaluation (**5%**)

Most people will get a 5 (full score). If there is notable complaints in the peer evaluation form, we will deal with it case by case.

### Reliability (**8%**)

2% for each valid pull request link for dev portfolio. 1 if submitted only commit link. For two of the portfolios, a PR they review must be included in addition to a PR they made (1 point if only a PR they made is included). 0 for description only submission.

### Completion of Work (**8%**)

- 8 if dev's work defines the word 'master hacker' OR if a dev actively contributes to other parts of the project (so a mainly frontend works on backend, an iOS works on Android, etc)
  - Semester's work contains several impressive changes.
- 7 is the baseline. Meets the expectation to consistently and constantly produce work with at least one impressive stuff.
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
- 6 if consistently and constantly produce work but unimpressive.
  - New member has the exception that if they put in "faithful attempts", they can get 7.
- 5 is something like fixing CSS bugs every week but nothing else.
- 4-3 GitHub contribution graph is extremely sparse.
- 2-1 Hopefully no one gets there.

### Quality (**5%**)

Start from 5. Deduct certain points for each problem below.

- (-1/2) Unuseful PR comments.
- (-1/2) Committed small garbage to the repo. (.DS_Store, temp files for testing, etc)
- (-1) Cannot break down large diffs into smaller ones. As a result, code is difficult to review.
- (-1) Continue to add linter warnings to the codebase (look at an entire PR instead of individual commits).
- (-1) Use legacy/deprecated methods from library
- (-1) Consistently use ugly hacks to get job done.
- (-2) Committed big garbage to the repo. (Something like node_modules)
- (-2) Committed crime to the repo. (e.g. force-push to destroy other dev's work, very unlikely)

The points deduction is ranked by damage done to the codebase.

### Professionalism (**4%**)

Start from 4. Minus certain points for each problem below. We will happily ignore some small number of unhelpful commit messages.

- (-1) PR Reviews provide minimal feedback or trivial changes only
- (-1) extremely unhelpful commit messages.
- (-1) leaked credentials.
- (-2) bad words in code or commit messages.

## TPM Subteam Rubrics (**30%**)

### Peer Evaluation (**5%**)

See [dev peer evaluation](./grading-dev-tpm-rubric#peer-evaluation-5)

### Team Communication (**8%**)

TPM portfolios

### Leadership and Trust (**2%**)

A parallel of Dev's team communication.

Based on devs' feedback. Most people should get full points.

### Project Management (**5%**)

1. They do not help establish clear tasks or deadlines
2. They establish unclear tasks and timeline to release,
3. They establish tasks and timeline, but sometimes these planning breaks apart.
4. They establish a clear list of tasks to complete before release and delegate deadlines to members well
5. They establishes a clear list of tasks to complete before release, updates/maintains the timeline, and keeps everyone on schedule with no confusion

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
- 1 - Codebase is in a free fall.
- 0 - Hopefully no one gets here. If you encourage developers to commit the source code of linux or a 100GB movie into the repo, you will probably get this grade.
