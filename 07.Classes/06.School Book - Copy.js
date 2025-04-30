class SchoolBook {
  constructor() {
    this.studentsByGrade = {};
  }

  addStudent(name, grade, score) {
    if (score >= 3) {
      const nextGrade = grade + 1;
      if (!this.studentsByGrade[nextGrade]) {
        this.studentsByGrade[nextGrade] = [];
      }
      this.studentsByGrade[nextGrade].push({ name, score });
    }
  }

  processStudents(inputArray) {
    inputArray.forEach((entry) => {
      const [namePart, gradePart, scorePart] = entry.split(", ");
      const name = namePart.split(": ")[1];
      const grade = parseInt(gradePart.split(": ")[1]);
      const score = parseFloat(scorePart.split(": ")[1]);
      this.addStudent(name, grade, score);
    });
  }

  printRegister() {
    const sortedGrades = Object.keys(this.studentsByGrade).sort(
      (a, b) => a - b
    );
    sortedGrades.forEach((grade) => {
      const students = this.studentsByGrade[grade];
      const studentNames = students.map((student) => student.name).join(", ");
      const averageScore = (
        students.reduce((acc, student) => acc + student.score, 0) /
        students.length
      ).toFixed(2);

      console.log(`${grade} Grade`);
      console.log(`List of students: ${studentNames}`);
      console.log(`Average annual score from last year: ${averageScore}`);
      console.log("===");
    });
  }
}

const input1 = [
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
];

const input2 = [
  "Student name: George, Grade: 5, Graduated with an average score: 2.75",
  "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
  "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
  "Student name: John, Grade: 9, Graduated with an average score: 2.90",
  "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
  "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15",
];

const schoolRegister1 = new SchoolBook();
schoolRegister1.processStudents(input1);
schoolRegister1.printRegister();

console.log("===");

const schoolRegister2 = new SchoolBook();
schoolRegister2.processStudents(input2);
schoolRegister2.printRegister();
