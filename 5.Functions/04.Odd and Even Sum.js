function oddEvenSum(number) {
  let oddSum = 0;
  let evenSum = 0;

  number
    .toString()
    .split("")
    .forEach((digit) => {
      if (parseInt(digit) % 2 === 0) {
        evenSum += parseInt(digit);
      } else {
        oddSum += parseInt(digit);
      }
    });

  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddEvenSum(1000435));
console.log(oddEvenSum(3495892137259234));
