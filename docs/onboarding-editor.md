---
id: onboarding-editor
title: 'Text Editor'
---

## Introduction

At Cornell DTI, we do not offically support or discourage the usage of any particular text editor.
However, it will be helpful if your editor has following features:

- autocompletion using type information
- showing linter errors directly in the editor
- good syntax highlighting

## Editor Setup

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="vscode"
values={[
{ label: 'VS Code', value: 'vscode', },
{ label: 'WebStorm', value: 'webstorm', },
{ label: 'XCode', value: 'xcode', },
{ label: 'Android Studio', value: 'android-studio', },
]
}>
<TabItem value="vscode">

### ESLint

Installing ESLint in VSCode will give you real-time linter feedback in any JavaScript code you
write, allowing you to quickly pinpoint many problems and have readable, proper formatting.

Once installed, add these lines to your VSCode Settings (refer to
[this link](https://code.visualstudio.com/docs/getstarted/settings) if you need help getting there):

```json
  // Other settings ...
  "eslint.alwaysShowStatus": true,
  "eslint.enable": true,
```

![ESLint]/docs-img/onboarding-editor/eslint.png)

### Git Graph

Installing Git Graph in VSCode will help you visualize your Git history. It is particularly
helpful when your Git is messed up.

![Git Graph](/docs-img/onboarding-editor/git-graph.png)

</TabItem>
<TabItem value="webstorm">

Documentation for WebStorm setup is missing.

Want to contribute? Check the [contributing guide](./getting-started-contributing.md).

</TabItem>
<TabItem value="xcode">

Documentation for XCode Setup is missing.

Want to contribute? Check the [contributing guide](./getting-started-contributing.md).

</TabItem>
<TabItem value="android-studio">

Documentation for Android Studio Setup is missing.

Want to contribute? Check the [contributing guide](./getting-started-contributing.md).

</TabItem>
</Tabs>
