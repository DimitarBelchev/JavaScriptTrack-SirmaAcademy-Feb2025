function numberReversal(input) {
  let reversed = 0;
  while (input !== 0) {
    reversed = reversed * 10 + (input % 10);
    input = Math.floor(input / 10);
  }
  return reversed;
}

console.log(numberReversal(123));
console.log(numberReversal(9876));
console.log(numberReversal(505));
console.log(numberReversal(10203));
console.log(numberReversal(7));
