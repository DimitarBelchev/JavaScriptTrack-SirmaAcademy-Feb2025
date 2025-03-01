function sumFirstAndLast(input) {
  //   console.log(input);
  return +input[0] + +input[input.length - 1];
}

console.log(sumFirstAndLast(["20", "30", "40"]));
console.log(sumFirstAndLast(["10", "17", "22", "33"]));
console.log(sumFirstAndLast(["11", "58", "69"]));
