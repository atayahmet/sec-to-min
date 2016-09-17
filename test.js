'use strict';

const test = require('tape');
const fn = require('./');

test('converts seconds to minutes', (t) => {
  t.is(fn(60), '1:00');
  t.is(fn(180), '3:00');
  t.is(fn(185), '3:05');
  t.is(fn(70), '1:10');
  t.is(fn(71), '1:11');
  t.is(fn(1), '0:01');
  t.is(fn(0), '0:00');

  t.end();
});

test('throws error on negative seconds', (t) => {
  try {
    fn(-1);
  } catch (error) {
    t.ok(error);
    t.is(error.message, 'Seconds must be positive');

    t.end();
  }
});
