function addressByAgeAndGender(age, gender) {
  if (gender === "m") {
    if (age >= 16) {
      return "Mr.";
    } else {
      return "Mister";
    }
  } else if (gender === "f") {
    if (age >= 16) {
      return "Ms.";
    } else {
      return "Miss";
    }
  }
}

console.log(addressByAgeAndGender(14, "f"));
console.log(addressByAgeAndGender(17, "m"));
console.log(addressByAgeAndGender(10, "m"));
console.log(addressByAgeAndGender(32, "f"));
console.log(addressByAgeAndGender(16, "m"));
console.log(addressByAgeAndGender(16, "f"));
