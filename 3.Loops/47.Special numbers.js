function specialNumbers(n) {
  const specialNumbers = [];

  for (let num = 1111; num <= 9999; num++) {
    const digits = String(num).split("");

    let isSpecial = true;
    for (const digit of digits) {
      if (num % digit !== 0) {
        isSpecial = false;
        break;
      }
    }

    if (isSpecial) {
      specialNumbers.push(num);
    }
  }

  return specialNumbers;
}

const n = 3;
const specialNumbers = specialNumbers(n);
console.log(specialNumbers);
