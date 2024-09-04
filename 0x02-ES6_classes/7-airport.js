export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    // eslint-disable-next-line max-len
    return this._code; // returning the airport's code (stored in _code) as the tag for the Object.prototype.toString() method
  }
}
