# angular-factory-girl-api [![Bower version](https://badge.fury.io/bo/angular-factory-girl-api.svg)](http://badge.fury.io/bo/angular-factory-girl-api)

This package provides an Angular service that integrates with the [factory_girl_api][factory_girl_api] gem. It can be used in test suites to assist in context setup without duplicating factories on the frontend and backend.

## Installation

Install the angular-factory-girl-api Bower package:

```
$ bower install --save-dev angular-factory-girl-api
```

Then configure the module for your test suite:

```js
angular.module('test.config.factory-girl-api')
  .config(function (FactoryGirlProvider) {
    FactoryGirlProvider.baseUrl('http://example.com/api/v1/test_helpers');
  });
```

Include the module in your test and add the appropriate setup and teardown tasks:

```js
describe('SomeController', function () {
  beforeEach(module('your-app', 'test.config.factory-girl-api'));

  var FactoryGirl;

  beforeEach(inject(function (_FactoryGirl_) {
    FactoryGirl = _FactoryGirl_;
  }));

  beforeEach(function (done) {
    FactoryGirl.setup().then(done);
  });

  afterEach(function (done) {
    FactoryGirl.teardown().then(done);
  });
});
```

Then use it in your tests:

```js
it('uses a widget', function (done) {
  FactoryGirl.create('widget', 'expensive', { name: 'Expensive Widget' })
    .then(function (widget) {
      expect(widget.name).toBe('Expensive Widget');
      done();
    });
});
```

## Configuration

You will likely need to configure the base URL for your factory_girl_api routes, which can be done through the `FactoryGirlProvider`.

| Method            | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `baseUrl(string)` | Sets the base URL for all API requests                   |

## API

The factory-girl-api module provides a single service, `FactoryGirl`. It provides the following methods:

| Method       | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| `create(factoryName, [ trait ... ], [ attributes ])` | Creates a model from a factory |
| `setup()`    | Sets up the database                                          |
| `teardown()` | Rolls back the database to a clean state                      |

### `FactoryGirl.create(factoryName, [ trait ... ], [ attributes ])`

Performs a request to the server to use a factory to create a model. The method signature mirrors the syntax for the `create` method in factory_girl. The factory name and traits are strings, and the attributes are an object.

This method returns a promise that resolves to the JSON response from the server that represents the created model.

### `FactoryGirl.setup()`

This method does nothing on its own. Each call to `setup` should be paired with a call to `teardown`.

Returns a promise that resolves once the request has completed.

### `FactoryGirl.teardown()`

Performs a request to delete all database records since the previous call to `setup`. This can be used to clean up DB context after creating records with factories.

Returns a promise that resolves once the request has completed.
