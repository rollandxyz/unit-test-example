# Unit Test Example

## Create Angular App 

`ng new unit-test-example`

## Setup for Unit Testing

[Karma](https://karma-runner.github.io) is a test runner that monitors the files in a project and run the tests that have been defined using jasmine when it detects a change.

[Jasmine](https://jasmine.github.io/) is a popular unit testing framework that allows test to be defined and evaluated


### 1. Execute unit tests 

```js to execute the unit tests
ng test 
```
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

## Unit tests

### 1. Perform a basic test on a component

### 2. Test a component's data bindings

### 3. Test a component's response to events

### 4. Test a component's output properties

### 5. Test a component's input properties

### 6. Perform a test that relies on an asynhronous operation

### 7. Test a directive

### 8. Unit testing Services

https://angular.io/guide/testing