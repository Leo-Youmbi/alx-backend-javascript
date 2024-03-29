/* eslint no-underscore-dangle: ["error", {"allow": ["_name", "_length", "_students"] }] */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(Name) {
    if (typeof Name !== 'string') throw new TypeError('Name must be a string');
    this._name = Name;
  }

  get length() {
    return this._length;
  }

  set length(Length) {
    if (typeof Length !== 'number') throw new TypeError('Length must be a number');
    this._length = Length;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
