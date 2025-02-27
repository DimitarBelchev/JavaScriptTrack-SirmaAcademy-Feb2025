function movieClassification(age) {
  if (age < 13) {
    return "U-rated movies";
  } else if (age >= 13 && age <= 17) {
    return "U and PG-13 rated movies";
  } else {
    return "All movies";
  }
}

console.log(movieClassification(10));
console.log(movieClassification(16));
console.log(movieClassification(21));
