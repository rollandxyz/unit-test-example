# Unit Test Example

## Create Angular App 

`ng new unit-test-example`

## Setup for Unit Testing
[Karma](https://karma-runner.github.io)
[Jasmine](https://jasmine.github.io/)
[Jasmine](https://jasmine.github.io/)

### 1. Execute unit tests 

```js
ng test
``` to execute the unit tests

### 2. Generate a coverage report

```js
ng test --watch=false --code-coverage
```
### 3. Create code-coverage reports every time you test

```js
add the following to angular.json

"test": {
  "options": {
    "codeCoverage": true
  }
}
```
### 4. Set minimum code coverage amount

```js
add the following key from karma.conf.js

coverageIstanbulReporter: {
  reports: [ 'html', 'lcovonly' ],
  fixWebpackSourcePaths: true,
  thresholds: {
    statements: 80,
    lines: 80,
    branches: 80,
    functions: 80
  }
}

```

## Unit testing Services

https://angular.io/guide/testing