---
layout: page
title: Deploy
nav_order: 5
path: /actions/deploy
group: Actions
---
# Deploy

The deploy action is run on any "push" to the main branch (this includes merged pull requests),
and serves as Threat Dragon's continuous delivery pipeline.

## Build
This workflow builds and pushes the Docker image with the `latest` tag.
The `latest` tag is not consider stable, and may be broken at times.
While we do our best to maintain a fully functioning main branch, mistakes will happen.
Additionally, the full end to end test suite is only run once per day, so errors may not be immediately available.

## Deploy
The latest image is deployed to [https://www.threatdragon.com/](https://www.threatdragon.com/)
that is hosted on [Heroku](https://www.heroku.com/).
Debug of deployment failures can be made by inspecting the logs via
the [Heroku command line](https://devcenter.heroku.com/articles/heroku-cli):

```
heroku login -i
heroku logs --tail --app threatdragon-v2
```

## Smokes
Smoke tests are run against the deployed image to ensure the deployment succeeded.

## Rollback
If the smokes fail, the deployment is rolled back.
