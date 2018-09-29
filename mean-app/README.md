# MEAN Stack Boilerplate

MEAN stack app boilerplate - MongoDB, Express, Angular and Node.js

Inspired from [Architecture in Angular Projects](https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7) and [Best Practices for Express App Structure](https://www.terlici.com/2014/08/25/best-practices-express-structure.html)

## Frontend

Angular - TypeScript-based open-source front-end web application platform led by Angular Team at Google
Angular Material Design - Collection of Google's Material Design components 

## Backend

Node.js - Open-source, cross-platform JavaScript run-time environment built on Chrome's V8
Express - Minimal and flexible Node.js web application framework

## Databases

MongoDB with Mongoose - NoSQL free and open-source, cross-platform document-oriented database
Firebase - Mobile and web application development platform supported by Google

## Tests

Mocha - Feature-rich JavaScript test framework running on Node.js
Karma - Test runner for JavaScript that runs on Node.js. It's very well suited to testing Angular projects.
Jasmine - Testing framework that supports Behaviour Driven Development

## Install dependencies 

Run `npm install` in the directory of the project

## Build

Run `npm start` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `ng build --prod && node server` flag for a production build.

## Development server

Angular: Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Node: Run `node server` for Express dev server and navigate to `http://localhost:9001/`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `npm run unitTest` to execute the unit tests via [Mocha](https://mochajs.org).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

