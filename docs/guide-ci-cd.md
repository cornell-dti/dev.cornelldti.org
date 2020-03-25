---
id: guide-ci-cd
title: 'CI & CD'
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

## Relevent Documentation

- [GitHub Actions Docs](https://help.github.com/en/actions/configuring-and-managing-workflows)
