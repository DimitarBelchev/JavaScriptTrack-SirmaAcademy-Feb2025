function sumOfEvenNumbers(number) {
  let acc = 0;
  let result = 0;
  for (let i = number; i > 0; i--) {
    acc += 2;
    result += acc;
  }
  return result;
}

console.log(sumOfEvenNumbers(0));
console.log(sumOfEvenNumbers(1));
console.log(sumOfEvenNumbers(2));
console.log(sumOfEvenNumbers(3));
// console.log(sumOfEvenNumbers(4));
console.log(sumOfEvenNumbers(5));
// console.log(sumOfEvenNumbers(6));
// console.log(sumOfEvenNumbers(7));
// console.log(sumOfEvenNumbers(8));
// console.log(sumOfEvenNumbers(9));
console.log(sumOfEvenNumbers(10));
