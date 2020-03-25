---
id: guide-code-quality
title: 'Code Quality'
---

We don't want bad or broken code to enter `master`. Therefore, we deployed some tools in each
repository to check whether your committed code meets certain standard.

We use the following tools to enforce code quality checks:

- TypeScript for web/backend projects
- ESLint for web projects
- SwiftLint for iOS projects
- Android Linter (and optionally ktlint) for Android projects
- `flutter analyze` for Flutter projects

## TypeScript

:::tip
If your project is having endless bugs due to type errors, you should consider migrating to
TypeScript as long as possible.
:::

:::note
All new DTI web projects should start with TypeScript
:::

Run `tsc` to find all type errors. You must fix all type errors before you code can be accepted.

You can configure TypeScript in `tsconfig.json`. To enable strict type checking, you should add
`"strict": true` to your `compilerOptions` in the json:

```json
{
  "compilerOptions": {
    // ...
    "strict": true
    // ...
  }
}
```

## ESLint

ESLint should already be setup in your web repository.

You should run `npm run lint` or `yarn lint` to find all the linter errors, and fix them before
you commit or push.

You can configure the rules in `.eslintrc`/`.eslintrc.json`/`.eslintrc.js` at the root of your
repository.

Your rules should start with this:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="react-ts"
values={[
{ label: 'React with TypeScript', value: 'react-ts', },
{ label: 'React with JavaScript', value: 'react-js', },
{ label: 'Vue with TypeScript', value: 'vue', },
{ label: 'Backend with TypeScript', value: 'backend', },
]
}>
<TabItem value="react-ts">

```js
module.exports = {
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'react-app'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  env: { browser: true, node: true },
};
```

</TabItem>
<TabItem value="react-js">

```js
module.exports = {
  extends: ['airbnb', 'react-app'],
  env: { browser: true, node: true },
};
```

</TabItem>
<TabItem value="vue">

```js
module.exports = {
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/typescript',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    project: ['./tsconfig.json'],
  },
  env: {
    browser: true,
    node: true,
  },
};
```

</TabItem>
<TabItem value="backend">

```js
module.exports = {
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
  },
};
```

</TabItem>
</Tabs>

Examples rules:

- [Carriage's configuration](https://github.com/cornell-dti/carriage-web/blob/master/.eslintrc.json)
- [CoursePlan's configuration](https://github.com/cornell-dti/course-plan/blob/master/.eslintrc.js)
- [CUReview's configuration](https://github.com/cornell-dti/course-reviews-react-2.0/blob/master/.eslintrc.json)
- [Flux's configuration](https://github.com/cornell-dti/campus-density-backend/blob/master/.eslintrc.js)
- [Nova's configuration](https://github.com/cornell-dti/nova.cornelldti.org/blob/master/.eslintrc.js)
- [Research Connect's configuration](https://github.com/cornell-dti/research-connect/blob/master/.eslintrc.js)
- [Samwise's configuration](https://github.com/cornell-dti/samwise/blob/master/.eslintrc)

## SwiftLint

Swiftlint should already be setup in your iOS repository.

You can run

```bash
./Pods/SwiftLint/swiftlint
```

to find all the linter errors.

You should run

```bash
./Pods/SwiftLint/swiftlint autocorrect
```

before you commit and push your changes.

You can configure the rules in `.swiftlint.yml` at the root of your repository.

This is a reference rule you should start with:

```yaml
disabled_rules:
  - colon
  - identifier_name
  - line_length
  - function_body_length
  - type_body_length
  - force_cast
excluded:
  - Pods
switch_case_alignment:
  indented_cases: true
```

Disable rules that are too disruptive for your subteam.

Examples rules:

- [eve's configuration](https://github.com/cornell-dti/events-manager-ios/blob/master/.swiftlint.yml)
- [Flux's configuration](https://github.com/cornell-dti/campus-density-ios/blob/master/.swiftlint.yml)

## Android Linting

Run

<Tabs
defaultValue="windows"
values={[
{ label: 'Windows', value: 'windows', },
{ label: 'Mac & Linux', value: 'unix', },
]
}>
<TabItem value="windows">

```bash
gradlew lint
```

</TabItem>
<TabItem value="unix">

```bash
./gradlew lint
```

</TabItem>
</Tabs>

to find all the linter errors. You should fix them before you commit or push.

If you are using Kotlin to develop Android apps, consider using
[ktlint](https://github.com/pinterest/ktlint)
and its [gradle plugin](https://github.com/jlleitschuh/ktlint-gradle).

## `flutter analyze`

You do not need to configure anything once you installed Flutter.

Simply run

```bash
flutter analyze
```

to find all the linter errors. You should fix them before you commit or push.
