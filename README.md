# setupProject
Basic FED Project Setup

Javascript, Webpack 3 boilerplate.

This is internal project by AI FED and is meant to be a starting point for our future projects in framework-agnostic manner.

[insert inspiring manifesto here]

## Table of contents
* [Quick start](#user-content-quick-start)
* [How it works](#user-content-how-it-works)
* [What is this?](#user-content-what-is-this)
* [Features](#user-content-features)
* [Git clone or download](#user-content-Git-clone-or-download)
* [Setup](#user-content-setup)
* [npm tasks](#user-content-npm-tasks)
* [Running in dev mode](#user-content-running-in-dev-mode)
* [Running it with webpack dashboard](#user-content-running-it-with-webpack-dashboard)
* [Build application in development mode](#user-content-build-application-in-development-mode)
* [Build application in production mode](#user-content-build-application-in-production-mode)
* [Running test in dev mode](#user-content-running-test-in-dev-mode)
* [Running test in watch mode](#user-content-running-test-in-watch-mode)
* [Linting](#user-content-linting)
* [What it uses](#user-content-what-it-uses)
* [What is to come](#user-content-what-is-to-come)
* [Changelog](#user-content-changelog)

## Quick Start
To start your project, clone the Git repo or download it, run `npm install`, and run `start` the dev server

![Quick start](https://bcsgitlab.accenture.com/matt.choi/assetStore/raw/master/AiPack/starting.png)



## How it works
Make any changes to the `.js` `.scss` files within `/src`.
After you make changes, be sure to build the `bunlde.js` and `main.css` files.
Do so by running `npm run build` and get them from the `/dist` folder.

![workflow](https://bcsgitlab.accenture.com/matt.choi/assetStore/raw/master/AiPack/workflow.png)



## What is this?

Starter for kicking off web applications.

It includes complete, minimal web app.

![Entry Page|big](https://bcsgitlab.accenture.com/matt.choi/assetStore/raw/master/AiPack/entry_page.png)

## What is Webpack?

Webpack is just another evolving step in the tooling ecosystem. 
First there was Grunt. Then Gulp thanks to easier configuration. 
Gulp is awesome. It is undoubtedly a good choice for an easier project.

But once you have a project that needs bigger and more resources, the webpack is definitely the way to go. 
For example we need to compile Javascript, SCSS, require/import files, script minification, unit test, hot reload without effecting current state, bundle production builds, etc.

Webpack is not the only module bundler out there. 
If you are choosing between using webpack or any of the bundlers below, here is a feature-by-feature [comparison](https://webpack.js.org/comparison/) on how webpack fares against the current competition.

## Why Webpack?

- Relative newness : What makes webpack so different from other module bundlers is the fact that it has watched other module bundlers and seen areas that needed improvements. 

- Getting started is simple : If you’re just looking to bundle a bunch of JavaScript files together without any other fancy stuff, you won’t even need a configuration file.

- Plugin system : Its plugin system enables it to do so much more, making it quite powerful. So, it might be the only build tool you need.

## Features

- [x] Webpack 3 (development and production config)
- [x] Babel - Transpile the JS from ES6/7 down to machine optimised ES5
- [x] SASS with autoprefixing
- [x] Webpack dev server with hot mode
- [x] Webpack dashboard - A CLI dashboard for our webpack dev server
- [x] Linting - Lint the JS with errors and warnings to the terminal
- [x] WebpackMonitor - Optimization tool for production build
- [x] Move font/image files into Dist
- [x] Minification javascript & css
- [x] Unit testing automation with watch mode

## Git clone or download

Go to https://bcsgitlab.accenture.com/

If you are not a registered user, register your account first.

Then grab the project from the setupProject repo.

## Setup

Tested with node 6.x and 8.x

Install the packages the project needs.

```
$ npm install
```
or 
```
$ yarn
```

## npm tasks

* `start` - starts app in development mode, using webpack dev server

* `start:board` - same as start plus fancy webpack dashboard

* `build` - builds application in development mode

* `production` - builds application in production mode (with minification)

* `test` - run all test cases in `src/test`

* `watch` - same as test in watch mode

## Running in dev mode

```
$ npm run start
```
or
```
$ yarn start
```

Visit `http://localhost:8080/` from your browser of choice.

### Running it with [webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard)

```
$ npm run start:board
```
or
```
$ yarn start:board
```

**Note for Windows 10 users:** Webpack Dashboard works in Command Prompt, PowerShell, and Linux Subsystem for Windows. Mouse events are not supported at this time, as discussed further in the documentation of the underlying terminal library we use [Blessed](https://github.com/chjj/blessed#windows-compatibility). The main log can be scrolled using the ↑, ↓, Page Up, and Page Down keys.

![webpack dashboard in development mode](https://bcsgitlab.accenture.com/matt.choi/assetStore/raw/master/AiPack/dashboard.png)

**OS X Terminal.app users:** Make sure that **View → Enable Mouse Reporting** is enabled, otherwise scrolling through logs and modules won't work. If your version of Terminal.app doesn't have this feature, you may want to check out an alternative such as [iTerm2](https://www.iterm2.com/).

## Build application in development mode

Build will be placed in the `dist` folder without minification.

* bundle.js
* main.css

```
$ npm run build
```
or
```
$ yarn build
```

## Build application in production mode

Build will be placed in the `dist` folder with minification.

* bundle.js
* main.css

```
$ npm run production
```
or
```
$ yarn production
```

To view data about your build and it's size, set launch to true for WebpackMonitor plugin.

In `webpack.prod.js` (ATM line 15):

```
new WebpackMonitor({
  capture: true,
  launch: true,
  port: 1337,
}),
```

![webpack monitor in build|medium](https://bcsgitlab.accenture.com/matt.choi/assetStore/raw/master/AiPack/webpack-monitor.png)

## Running test in dev mode

This command will run all sample test cases in `src/test`

```
$ npm run test
```
or
```
$ yarn test
```

![test result|medium](https://bcsgitlab.accenture.com/matt.choi/assetStore/raw/master/AiPack/test.png)

## Running test in watch mode

This command runs all sample test cases in `src/test` and watch any changes. 
If you make any changes and save then `mocha` will have re-run your test automatically and report.

```
$ npm run watch
```
or
```
$ yarn watch
```

![test result in watch mode|big](https://bcsgitlab.accenture.com/matt.choi/assetStore/raw/master/AiPack/test-watch.png)

## Linting

For linting we're using [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base),
but some options are overridden to our preferences.

The code will be linted whenever Webpack is run (this includes dev server mode) as well as when you commit or push your code. 


## What is to come
* Get a new name
* SVGO - SVG Optimisations
* Accessibility checks
* CLI (maybe?)

## Changelog

#### 0.0.1

Initial release

#### 0.0.2

Update quick start and workflow section in readme