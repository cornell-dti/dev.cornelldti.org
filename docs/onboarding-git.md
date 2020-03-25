---
id: onboarding-git
title: 'Using Git'
---

:::caution
If you are not familiar with Git command line, do not pretend you know it.

Instead, install [GitHub Desktop](https://desktop.github.com). It will make your life easier.
:::

## Setup your project

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

TODO

</TabItem>
<TabItem value="cli">

```bash
git clone https://github.com/cornell-dti/[name of the repository]
```

</TabItem>
</Tabs>

## Pull latest changes from remote

<Tabs
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

TODO

</TabItem>
<TabItem value="cli">

Inside your working branch, run

```bash
git pull
```

</TabItem>
</Tabs>

## Create a new branch

<Tabs
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

TODO

</TabItem>
<TabItem value="cli">

TODO

</TabItem>
</Tabs>

## Select changes to commit

<Tabs
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

TODO

</TabItem>
<TabItem value="cli">

If you only want to commit changes in `a.js`, run

```bash
git add a.js
git commit -m "Your commit message"
```

If you only want to commit changes in folder `src`, run

```bash
git add src
git commit -m "Your commit message"
```

If you want to commit all changes, run

```bash
git add .
git commit -m "Your commit message"
```

</TabItem>
</Tabs>

## Review your changes locally

<Tabs
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

TODO

</TabItem>
<TabItem value="cli">

TODO

</TabItem>
</Tabs>

## Push to remote

<Tabs
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

TODO

</TabItem>
<TabItem value="cli">

```bash
git push
```

If the branch does not exist on remote yet, Git will reject the push but give you some instructions
like:

```console
TODO
```

Follow the instruction.

</TabItem>
</Tabs>

## Merge in `master` branch changes

<Tabs
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

TODO

</TabItem>
<TabItem value="cli">

Inside your working branch, run

```bash
git merge master
```

, and fix any merge conflicts that arises.

</TabItem>
</Tabs>

## Amend and force-push

:::danger
Only do this if you are sure that you are the only one who will work on this branch.
:::

Sometimes you want to maintain a clean commit history. For example, you don't want to have a series
of commits like

```text
-o- Implement feature foo
-o- Fix syntax error
-o- Fix linter error
-o- Fix linter error again
-o- Fix syntax error again
-o- Fix linter error again again
```

You can avoid commits like `Fix linter error again again` by amend your previous commit.

Run

```bash
git add .
git commit --amend --no-edit
```

to add all your unstaged changes to your commit.

If the commit is already pushed to remote, you need to force push.

```bash
git push -f
```

## Rebase and force-push

:::danger
Only do this if you are sure that you are the only one who will work on this branch.
:::

Merge commits sometimes turn a nice linear commit history into a messy tree. If you want a nice
linear history, you will need to rebase when you want to "merge" in the latest `master` change.

<Tabs
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

TODO

</TabItem>
<TabItem value="cli">

Inside your working branch, run

```bash
git rebase master
```

, and fix any merge conflicts that arises.

If the commit is already pushed to remote, you need to force push.

```bash
git push -f
```

</TabItem>
</Tabs>
