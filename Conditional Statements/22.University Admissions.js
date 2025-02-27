function universityAdmissions(score, extracurriculars) {
  if (score >= 90) {
    return "Admitted";
  } else if (score >= 80 && extracurriculars >= 2) {
    return "Admitted";
  } else {
    return "Not admitted";
  }
}

console.log(universityAdmissions(85, 3));
console.log(universityAdmissions(88, 1));
console.log(universityAdmissions(91, 0));
console.log(universityAdmissions(75, 12));
