import test from 'ava';
import fn from './';

test('fn', t => {
  t.is(fn(60), '1:00');
  t.is(fn(180), '3:00');
  t.is(fn(185), '3:05');
  t.is(fn(70), '1:10');
  t.is(fn(71), '1:11');
  t.is(fn(1), '0:01');
	t.is(fn(0), '0:00');
});