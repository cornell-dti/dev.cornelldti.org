---
id: slab-large-tasks
title: 'How to Break Down Large Tasks'
---

- Think about what's the smallest non-negative change that leads one step closer to your final task.
  - Non-negative means that your change can be merged into master without breaking anything.
  - Smallest means removing unnecessary changes: e.g. do not fix two unrelated bugs in one PR. Create two instead. Don't be too ambitious to do everything at once.
- Plan ahead
  - You might find yourself in this situation.
    - I need to do feature A.
    - After some coding, I found that feature A depends on refactor B.
    - After some refactoring, I found that refactor B depends on bug fix C.
    - ...
    - After all steps are done, diff is already 4000+ line long.
    - Plan ahead so that you create a PR for bug fix C first, then refactor B, and finally feature A.
- Ask for reviews early and ask for reviews often.
- Avoid unnecessary changes:
  - Setup a consistent code format in your team so that people do not fight each other for formatting preferences
  - Avoid rewriting other's code to match your style. If it is really problematic, create an issue and do that in a separate PR.
- Gate any WIP features
  - Sometimes it's hard not to break master while features are being incrementally developed.
  - e.g. Samwise's repeating task requires refactoring a lot of code. Each PR only refactors one part of the code
  - Gate the incomplete feature behind a flag. For example, this new UI will not be shown unless certain environment variable/localStorage value is set to TRUE.
