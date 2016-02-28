import Hello from './src/hello';
import {World} from './src/hello';

const hello = new Hello('A');
const world = new World('B');

console.log(`${hello.text} ${world.text}`);
