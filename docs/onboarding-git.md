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
groupId="git-client"
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

Install [GitHub Desktop](https://desktop.github.com).

Click `Clone or download` in the repository page and choose `Open in Desktop`.

![Clone from desktop](/docs-img/onboarding-git/clone-with-desktop.png)

GitHub Desktop will auto open and guide you to clone the repository.

</TabItem>
<TabItem value="cli">

Install [Git](https://git-scm.com).

```bash
git clone https://github.com/cornell-dti/[name of the repository]
```

</TabItem>
</Tabs>

## Pull latest changes from remote

Try keep your branch up-to-date with remote. Pull often.

<Tabs
groupId="git-client"
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

Click `Pull origin` in the header.

![Pull origin](/docs-img/onboarding-git/pull-origin.png)
![Pulling origin](/docs-img/onboarding-git/pulling-origin.png)

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
groupId="git-client"
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

`Command/Ctrl + Shift + N` or click `Branch -> New Branch` in Menu.

![New Branch](/docs-img/onboarding-git/new-branch.png)

Input the name of the new branch and GitHub Desktop will automatically go to the new branch.

</TabItem>
<TabItem value="cli">

```bash
git checkout -b [the name of your branch]
```

</TabItem>
</Tabs>

## Delete a branch

<Tabs
groupId="git-client"
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

`Command/Ctrl + Shift + D` or click `Branch -> Delete` in Menu.

![Delete Branch](/docs-img/onboarding-git/delete-branch.png)

Click the `Delete` button.

</TabItem>
<TabItem value="cli">

```bash
git checkout master
git checkout -D [the name of your branch]
```

</TabItem>
</Tabs>

## Review your changes locally

<Tabs
groupId="git-client"
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

Just see what's changed directly within GitHub Desktop.

![Partial Commit](/docs-img/onboarding-git/partial-commit.png)

</TabItem>
<TabItem value="cli">

```bash
git diff
```

</TabItem>
</Tabs>

## Select changes to commit

<Tabs
groupId="git-client"
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

You can unselect the files you don't want to commit. Inside a file, you can deselect lines that
you don't want to commit. (Only lines highlighted with blue on the left will be committed.)

![Partial Commit](/docs-img/onboarding-git/partial-commit.png)

The fill in the commit message, and click `Commit to [your branch name]`.

![Commit](/docs-img/onboarding-git/commit.png)

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

## Push to remote

<Tabs
groupId="git-client"
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

After you commit, you should push your changes to remote, so that

- If you computer dies, changes will persist;
- Other team members will see your progress.

Depending on whether you have published your branch before, you will either see

![Publish Branch](/docs-img/onboarding-git/publish-branch.png)

or

![Push](/docs-img/onboarding-git/push.png)

After you clicked the button, you can see the progress.

![Push Progress](/docs-img/onboarding-git/push-progress.png)

</TabItem>
<TabItem value="cli">

```bash
git push
```

If the branch does not exist on remote yet, Git will reject the push but give you some instructions
like:

```console
fatal: The current branch [your-branch-name] has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin [your-branch-name]
```

Run `git push --set-upstream origin [your-branch-name]` as instructed.

</TabItem>
</Tabs>

## Merge in `master` branch changes

<Tabs
groupId="git-client"
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

1. Select History Tab
   ![Merge: Select History Tab](/docs-img/onboarding-git/merge-history-tab.png)
2. Select `master` branch
   ![Publish Branch](/docs-img/onboarding-git/merge-select-master.png)
3. Click the `merge` button
   ![Publish Branch](/docs-img/onboarding-git/merge-final-click.png)
4. If there are merge conflicts, GitHub Desktop will prompt you to fix them.

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
groupId="git-client"
defaultValue="desktop"
values={[
{ label: 'GitHub Desktop', value: 'desktop', },
{ label: 'Git CLI', value: 'cli', },
]
}>
<TabItem value="desktop">

1. `Command/Ctrl + Shift + E` or click `Branch -> Rebase Current Branch` in menu
   ![Merge: Select History Tab](/docs-img/onboarding-git/rebase-menu.png)
2. Select `master` branch and click `rebase`
   ![Publish Branch](/docs-img/onboarding-git/rebase-select-master.png)
3. If there are merge conflicts, GitHub Desktop will prompt you to fix them.

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
