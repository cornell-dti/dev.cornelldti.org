---
id: resource-development-guidelines
title: 'Development Guidelines'
---

This covers guidelines for your work as a dev/TPM.

## GitHub Use Guidelines

- For TPM
  - Set up a PR template that includes a summary, edge case discussion, and manual testing methodology
  - Small PRs! Encourage devs to have smol PRs
    - More PRs to count!
    - Each PR is easier to review!
  - Encourage branches to be named systematically (if not already).
    - Examples:
      - [GITHUB_ISSUE_NUMBER]-[FEATURE-NAME]
      - [name]-[FEATURE-NAME]
  - Set up ESLint on push (and require lint to pass in order for build to pass) if not already set up
  - Set up pre-commit hooks
    - ESLint and Prettier
    - If things are slow, check that you are only linting files that have been changed
  - Migrate to GitHub Issues if not already
    - use labels to categories as issue/bug, triage importance + difficulty
    - allows dev leads to see development progress
    - if you already have your own system, let us know
- For All
  - Don't approve PRs unless it has a good manual testing plan, or adequate unit testing
    - Don't approve PRs without manually testing it
  - Don't merge in PRs that are not yours (without a good reason)
  - Be detailed with PR descriptions
    - Follow template (we are requiring all subteams to have a PR template)
    - Please be thorough in writing manual testing methodology

## Code Reviews

- Please review your fellow devs's PRs! (even if it already has a review)
- Leaving a review requires following the author's test plan, plus your own tests if you think there are gaps
- Your portfolio reviews requirement is happy that you are doing this :D
