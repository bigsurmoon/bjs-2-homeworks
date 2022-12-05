function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  this.marks.push(mark)
}

Student.prototype.addMarks = function (...marks) {
  if (!this.marks) {
    this.marks = marks
  } else {
    this.marks = this.marks.concat(marks)
  }
}

Student.prototype.getAverage = function () {
  if (!this.marks) { return 'нет оценок' }
  const sum = this.marks.reduce((acc, mark) => acc + mark);
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}