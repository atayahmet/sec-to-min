import test from 'ava';
import fn from './';

test('fn', t => {
	t.is(fn('Hello'), 'I am cool');
});
