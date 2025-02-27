function ArmstrongNumberCheck(n) {
  const numStr = n.toString();
  const numDigits = numStr.length;

  let sum = 0;
  for (let digit of numStr) {
    sum += Math.pow(parseInt(digit), numDigits);
  }

  return sum === n;
}

console.log(ArmstrongNumberCheck(153));
console.log(ArmstrongNumberCheck(370));
console.log(ArmstrongNumberCheck(123));
console.log(ArmstrongNumberCheck(407));
console.log(ArmstrongNumberCheck(1634));
