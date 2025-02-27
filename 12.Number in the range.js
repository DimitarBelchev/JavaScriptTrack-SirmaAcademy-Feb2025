function numbersInTheRange(number) {
  if (number !== 0 && number >= -100 && number <= 100) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(numbersInTheRange(-25));
console.log(numbersInTheRange(-150));
console.log(numbersInTheRange(0));
console.log(numbersInTheRange(25));
console.log(numbersInTheRange(125));
