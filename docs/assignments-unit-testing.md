---
id: assignments-unit-testing
title: 'Unit Testing'
---

## Description

We encourage all teams to do extensive testing on their codebase to ensure all code is correct and robust. In your assignment, **please detail your testing plan and coverage** and **how you refactored the existing code so that things are testable**. Also, if possible _please try to integrate testing checks into your CI workflow_.

:::note
Your set of unit tests can only be used for one assignment. (i.e., you cannot use this for both the PR and unit test assignments)
:::

## Grading Tiers

93%: Contribution was below expectations for that member of the team.

- Tests do not effectively check code correctness
- Insufficient description on what was being tested
- Tests are not documented
- Purpose of the tests are not clear

96%: Contribution was at expectations for that member of the team. This is the baseline grade.

- Tests documented and explained decently
- Tests cover most baseline functionality and some edge cases
- Evidence of purposeful testing

100%: Contribution was above expectations for that member of the team.

- Tests documented and explained exceptionally well
- Tests cover all baseline functionality and most edge cases
- Evidence of purposeful testing
- Integrated with CI checks

## Relevant Docs

- [Jest](https://jestjs.io/docs/en/getting-started) is a JavaScript testing framework used with most web frameworks like React, Angular, Vue.
  - In particular, you can use [Jest snapshot testing](https://jestjs.io/docs/en/snapshot-testing) to check that your UI components don't change unexpectedly. Check out [this PR from Samwise](https://jestjs.io/docs/en/snapshot-testing) for examples on snapshot tests and integrating with CI workflow.
  - Alternatives are [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/). See [this PR from QueueMeIn](https://github.com/cornell-dti/office-hours/pull/435/files) on how to use Mocha and Chai for testing Firebase operations.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/example-intro) is designed specifically to test React components.
- [Testing Library](https://testing-library.com/) has a lot of great testing utilities for [Vue](https://testing-library.com/docs/vue-testing-library/intro), [Angular](https://testing-library.com/docs/angular-testing-library/intro), and even [React Native](https://testing-library.com/docs/react-native-testing-library/intro).
- [Cypress](https://www.cypress.io/) is a great test runner for frontend applications. See [this PR from CUReviews](https://github.com/cornell-dti/course-reviews-react-2.0/pull/221) for details on how to integrate Cypress with CI checks.
