---
id: slab-repo-automations
title: 'Automations for DTI Repositories'
---

## Continuous Integration (managed by GitHub Actions)

- Challenge: people wrote broken code all the times
- Solution: for every commit in pull request
    - Run linters against submitted code
    - Run tests against submitted code
    - Try build with submitted code
- Challenge: people wrote code with security vulnerabilities
    - Solution: [difficult] implement and deploy static analysis tools

## Continuous Deployment

- Deploy master branch to staging
    - Heroku projects: managed by Heroku pipelines
    - Firebase projects: managed by GitHub Actions deployment job
- Deploy quality-checked master to production
    - Heroku projects: managed by Heroku pipelines
    - Firebase projects: managed by GitHub branch protection and GitHub Actions deployment job

## Repository Policy Enforcement

- Challenge: policies are proposed, but never enforced
- Solutions:
    - Ban big pull requests
        - Managed by [big-diff-warning](https://github.com/cornell-dti/big-diff-warning)
    - Timely feedback of pull requests
        - Managed by [GitHub scheduled reminders](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)
    - Timely resolution of issues
        - To be implemented by some issue assignment bots
    - Website/App Status Checks
        - To be implemented via GitHub Actions cron jobs

## Credentials Management

- Challenge: each semester developers leak credentials
- Solutions:
    - Deployment Credentials 
        - Managed by [Secrets for GitHub Actions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)
    - Mobile Credentials
        - Currently managed by dev leads
        - Automated building with release credentials are planned
