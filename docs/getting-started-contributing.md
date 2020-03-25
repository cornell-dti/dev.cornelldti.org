---
id: getting-started-contributing
title: 'Contributing'
---

## Local Development

You need to use [Yarn](https://classic.yarnpkg.com/) to install all dependencies.

To create a local build, first clone the repository, then run `yarn` in the repository root.

Once all the dependencies are installed, run `yarn start` to start a dev server.
You can make changes to the docs in the `docs` folder or customize the landing page in
`src/pages/index.tsx`. The dev server will automatically reload the page once you saved your
changes.

It might be helpful to read [Docusaurus's Guide](https://v2.docusaurus.io/docs/markdown-features)
if you are unfamiliar with all the supported markdown features.

## Review

Create a pull request in [this repository](https://github.com/cornell-dti/dev.cornelldti.org), ask
repository maintainer (usually developer leads) to review.

Once your pull request is approved and merged, continuous deployment system will automatically build
the website and deploy it to GitHub pages.
