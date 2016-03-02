import assert from 'power-assert';

import Hello from '../src/hello';
import {World} from '../src/hello';

describe('Hello World', () => {
  it('Hello', () => {
    const name = 'A';
    const instance = new Hello(name);
    assert(instance.text === `${name}: Hello`);
  });

  it('World', () => {
    const name = 'A';
    const instance = new World(name);
    assert(instance.text === `${name} world!`);
  });
});
