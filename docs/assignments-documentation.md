---
id: assignments-documentation
title: 'Source Code Contributor Guide'
---

## Description

Documentation of code is important as it helps inform other developers of your work and can make your code more readable. When writing documentation first consider the purpose of your documentation and your audience. Documentation for other developers should make clear **how to use your function or component (outline the parameters or props) and what the expected behavior should be**. Also be sure to discuss **edge cases** and **your implementation strategy** if there are complexities you think the user should be aware of. Include details on **parameters, return type, and runtime for each function/component** if applicable.

:::tip
Documentation is about _quality over quantity_. A developer not on your team should be able to read your documentation and use your function/component successfully.
:::

Documentation should be easily shareable with other developers so consider writing it on your project's **GitHub wiki page** (e.g., [Samwise wiki](https://github.com/cornell-dti/samwise/wiki), [Flux Android wiki](https://github.com/cornell-dti/campus-density-android/wiki)) or [**Postman docs**](https://learning.postman.com/docs/publishing-your-api/documenting-your-api/). Additionally, feel free to add it to `dev.cornelldti.org` by sending the markdown file to a dev lead or creating a PR on the [repo](https://github.com/cornell-dti/dev.cornelldti.org)!

:::caution
Bad documentation can do more harm than good. _Do not_ comment every single line of code. We will only allow submitted documentation to exist on wiki pages. **We reserve the right to deduct points for unhelpful documentation.**
:::

## Grading Tiers

93%: Contribution was below expectations for that member of the team.

- Does not make sense to a user outside of your team
- Does not mention key details (parameters, return type, runtime, etc)
- Documentation does more harm than good by cluttering code
- Lots of unnecessary line by line in-code comments

96%: Contribution was at expectations for that member of the team. This is the baseline grade.

- Clear description of function
- Usable, but not entirely clear, to a developer not on that team
- Mentions key details (parameters, return type, runtime, etc)
- Decently succinct
- On a wiki page and easily shareable with other developers

100%: Contribution was above expectations for that member of the team.

- Clear description of both the function and its side effects
- Having only read documentation, any developer could utilize the function correctly
- Describes key details (parameters, return type, runtime, etc)
- Descriptive without being overly wordy
- On a wiki page and easily shareable with other developers

## Real Examples

- [Samwise wiki](https://github.com/cornell-dti/samwise/wiki)
- [Flux Android wiki](https://github.com/cornell-dti/campus-density-android/wiki)
