---
id: guide-code-review
title: 'Code Review'
---

## Introduction

Code review is necessary to ensure our code quality, because linter and type checker cannot catch
all problems.

At Cornell DTI, you will need 1 approving review to merge your changes to master, and at least 3
approving review to deploy master to production. Every developer on your team can review your code.

## Reviewer's Responsibility

As a reviewer, you should ask yourself these questions?

- Does the author implement the feature in an efficient way?
- Has the author considered all edge cases?
- Does the pull request introduce a security vulnerability?
- Are there any ugly hacks?
- etc

If there is anything unclear, you should ask for the author's clarification. Ideally, these
clafications should also be put in the code comments.

## Dos and Don'ts

- Do review pull requests often.
- Do reject bad code.
- Do reject pull requests with no summary and test plan.
- Do reject giant pull requests.
- Do address reviewer's concern if they are valid.
- Do defend your approach, if you think your approach is better.
- Do let the **author** merge the pull request.
- Don't take pull request rejections personally.
- Don't ignore your peer's pull requests.
- Don't accept pull requests that you don't understand.

## Relevant Docs

- [GitHub Pull Requests Review](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests)
