import test from 'ava';

import Hello from '../src/hello';
import {World} from '../src/hello';

test('Hello', (t) => {
  const name = 'A';
  const instance = new Hello(name);
  t.ok(instance.text === `${name}: Hello`);
});

test('World', (t) => {
  const name = 'A';
  const instance = new World(name);
  t.ok(instance.text === `${name} world!`);
});
