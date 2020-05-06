class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    let newVec = new Vec(this.x + vec.x, this.y + vec.y);
    return newVec;
  }

  minus(vec) {
    let newVec = new Vec(this.x - vec.x, this.y - vec.y);
    return newVec;
  }

  get length() {
    let lengthSq =
      Math.abs(Math.pow(this.x, 2)) + Math.abs(Math.pow(this.y, 2));
    return Math.sqrt(lengthSq);
  }
}

//test passes
let vec = new Vec(-3, -4);
let vec2 = new Vec(3, 4);
vec = vec.minus(vec2);
console.log(vec.x, vec.y);
console.log(vec.length);
