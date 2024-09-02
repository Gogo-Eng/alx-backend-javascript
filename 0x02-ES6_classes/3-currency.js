export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }
  set code(sign) {
    this._code = sign;
  }

  get name() {
    return this_.name;
  }
  set name(money) {
    this._name = money;
  }


  displayFullCurrency() {
    return(`${this._name} (${this._code})`)
  }
}
