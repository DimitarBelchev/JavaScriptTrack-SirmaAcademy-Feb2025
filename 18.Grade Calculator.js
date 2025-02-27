function gradeCalculator(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if (score >= 0 && score < 60) {
    return "F";
  } else {
    return "Score must be between 0 and 100.";
  }
}

console.log(gradeCalculator(95));
console.log(gradeCalculator(82));
console.log(gradeCalculator(76));
console.log(gradeCalculator(65));
console.log(gradeCalculator(45));
console.log(gradeCalculator(101));
