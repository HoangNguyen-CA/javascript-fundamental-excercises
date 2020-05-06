class Group {
  constructor() {
    this._set = new Map();
  }

  add(el) {
    if (this._set.get(el) == null) {
      this._set.set(el, 1);
    }
  }

  delete(el) {
    if (this._set.get(el) != null) {
      this._set.delete(el);
    }
  }

  has(el) {
    return this._set.get(el) == null;
  }

  static from(it) {
    let group = new Group();
    for (let i of it) {
      group.add(i);
    }
    return group;
  }
}
