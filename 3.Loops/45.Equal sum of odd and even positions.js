function equalSumOfOddAndEven(lowerLimit, upperLimit) {
  let result = "";

  for (let num = lowerLimit + 1; num < upperLimit; num++) {
    const digits = num.toString().split("");
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < digits.length; i++) {
      if (i % 2 === 0) {
        evenSum += parseInt(digits[i]);
      } else {
        oddSum += parseInt(digits[i]);
      }
    }

    if (evenSum === oddSum) {
      result += num + " ";
    }
  }

  return result.trim() || "None";
}

console.log(equalSumOfOddAndEven(100000, 100050));
// console.log(equalSumOfOddAndEven(299900, 300000));
// console.log(equalSumOfOddAndEven(100115, 100120));
