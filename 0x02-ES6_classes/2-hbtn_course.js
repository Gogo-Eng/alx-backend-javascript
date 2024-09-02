export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(thename) {
    if (typeof thename !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = thename;
  }

  get length() {
    return this._length;
  }

  set length(thelength) {
    if (typeof thelength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = thelength;
  }

  get students() {
    return this._students;
  }

  set students(allstudents) {
    if (!Array.isArray(allstudents) || !allstudents.every((students) => typeof students === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = allstudents;
  }
}
