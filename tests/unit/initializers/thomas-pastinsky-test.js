import Application from 'ember-application';
import ThomasPastinskyInitializer from 'dummy/initializers/thomas-pastinsky';
import run from 'ember-runloop';
import { isPresent } from 'ember-utils';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | Thomas Pastinsky', {
  beforeEach() {
    run(function() {
      application = Application.create();
      application.deferReadiness();
    });
  }
});

test('in memoriam', function(assert) {
  const eulogy = ThomasPastinskyInitializer.initialize(application);

  assert.ok(isPresent(eulogy));
});
