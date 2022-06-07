class Person {
  constructor(name) {
    this.name = name;
    this.course = [];
  }
  get name() {
    return this.name;
  }
  get course() {
    return this.course;
  }
  set course(aList) {
    this.course = aList;
  }
}

class Course {
  constructor(name, isAdvanced) {
    this.name = name;
    this.isAdvanced = isAdvanced;
  }
  get name() {
    return this.name;
  }
  get isAdvanced() {
    return this.isAdvanced;
  }
}

/////////////////////////////////////////////////////////////////

class Person {
  constructor(name) {
    this.name = name;
    this.course = [];
  }
  get name() {
    return this.name;
  }
  get course() {
    return this.course.slice();
  }

  addCourse(aCourse) {
    this.course.push(aCourse);
  }

  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError();
    }
  ) {
    const index = this.course.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this.course.splice(index, 1);
  }
}
