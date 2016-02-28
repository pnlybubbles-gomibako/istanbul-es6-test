class Hello {
  constructor(name) {
    this.text = `${name}: Hello`;
  }
}

class World {
  constructor(name) {
    this.text = `${name} world!`;
  }
}

export {World};
export default Hello;
