---
id: guide-devops
title: 'DevOps'
---

## CI (Continuous Integration)

Continuous integration (CI) is the practice of building and testing each commit in
the repository. It is done automatically by machines and can be integrated with GitHub
to display the status of each commit.

Cornell DTI uses [GitHub Actions](https://github.com/features/actions) as our CI service.

Each active project must contain a CI configuration that checks the following:

- Code Style
- Linter Errors
- Your project can build/compile

All CI checks must pass before your branch can be merged into `master`.

Here is an example CI workflow:

```yaml
name: CI
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - name: Set up Node
        uses: actions/setup-node@v1
      # Use cache to speed up yarn install
      - name: Use Yarn Cache
        uses: actions/cache@v1
        with:
          path: ~/.cache/yarn
          key: yarn-${{ hashFiles(format('{0}{1}', github.workspace, '/yarn.lock')) }}
          restore-keys: yarn-
      - name: Yarn Install
        run: yarn install
      # Check potential code problems
      - name: Run Linter
        run: yarn lint
      - name: Run TypeScript Compiler
        run: yarn tsc
      - name: Build Website
        run: yarn build
```

## CD (Continuous Deployment)

Continuous deployment (CD) is a practice that deploys each good commit (after passing)
CI to staging servers.

- For heroku projects, we configure heroku to autodeploy master branch to staging.
- For Firebase projects, we use [GitHub Actions](https://github.com/features/actions) to auto
  deploy the app to Firebase Hosting.

## Repository Policies and Tools

- Bad code cannot be merged into master
  - All code must be committed to a separate branch before merging.
  - All code must pass CI checks before merging.
  - All code must pass code review before merging.
- Giant pull requests are prohibited.
  - [big-diff-warning](https://github.com/cornell-dti/big-diff-warning) will automatically invite
    developer lead to review giant pull requests.
  - Unless there is a convincing reason for big pull requests, there will be rejected.
- Timely feedback of pull requests
  - We use
    [GitHub scheduled reminders](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)
    to periodically list open pull requests without review in our slack channels.
- Website/App Status Checks
  - [dti-repo-tools](https://github.com/cornell-dti/dti-repo-tools) performs health check for every
    project with public website every ten minutes.

## Relevent Documentation

- [GitHub Actions Docs](https://help.github.com/en/actions/configuring-and-managing-workflows)
