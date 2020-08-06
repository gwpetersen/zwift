
# Awift Automation
[![Build Status](https://travis-ci.com/digital-motors/automation.svg?token=kYHHaCPFAgthTpsxKucd&branch=master)](https://travis-ci.com/digital-motors/automation) [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/#/projects/8kh5dt/runs)

## Installation

#### clone this repo to a local directory using SSH(https://gitlab.com/profile/keys) or HTTPS
```bash
$ git clone <repo_url>
```
#### cd into the cloned repo
```bash
$ cd zwift
```
#### install all dependencies
```bash  
$ yarn
```
More info about installation: https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements 

## Opening Cypress GUI

#### this opens the cypress test runner
#### in the GUI mode.
```bash
$ yarn open:cypress
```

> We should see the Cypress Test Runner.
> Click on any <name>:spec.js that are displayed in the list of Integration Tests at the Cypress Test Runner.
> You will see how Cypress launch test in your browser.

## To Run Specifc Cypress Test via command line


#### this is an events test that will run headlessly in electron browser
```bash
$ yarn test:events
```
#### this is a homepage test that will run headlessly in electron browser
```bash
$ yarn test:homepage
```
