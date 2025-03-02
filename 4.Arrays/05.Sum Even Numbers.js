function sumEvenNumbers(arr) {
  return arr
    .map(Number)
    .filter((num) => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
}

console.log(sumEvenNumbers(["1", "2", "3", "4", "5", "6"]));
console.log(sumEvenNumbers(["3", "5", "7", "9"]));
console.log(sumEvenNumbers(["2", "4", "6", "8", "10"]));
