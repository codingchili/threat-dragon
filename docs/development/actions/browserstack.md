---
layout: page
title: Browserstack
nav_order: 2
path: /actions/browserstack
group: Actions
---
# Browserstack

[Browserstack](https://www.browserstack.com/) offers its services
[for free to open-source projects](https://www.browserstack.com/open-source),
and has graciously provided Threat Dragon with their services.
Browserstack provides automated, cross-browser testing for web and mobile applications.

Because cross browser testing has diminishing returns,
it is only run against the latest deployed version (from main) once per day.

An example of what the results might look like:
![Browserstack Results]({{ '/assets/images/browserstack_result.png' | relative_url }}){:.img .img-fluid}


### Running Browserstack during development
The Browserstack job is run every day using a cron job in file `.github/workflows/browserstack.yaml`:

```
 name: Browserstack End to End Tests
 concurrency: browserstack_e2e
 on:
   schedule:
     - cron: '40 8 * * *'
```

During development it is useful to run Browserstack on a push of a branch.
Add lines like this below the cron job, for example if the branch is 'cypress-update' :

```
   push:
    branches:
      # If you're seeing this, Jon forgot to remove it.
      # This is for debugging only, and this should still be a cron
      - 'cypress-update'
```

Thunderhead leverages Browserstack to check compatability across different browsers.
The [e2e page]({{ 'development/testing/e2e.html' | relative_url }}) has a complete browser testing matrix.

