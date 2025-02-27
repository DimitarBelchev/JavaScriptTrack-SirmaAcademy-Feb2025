function pyramidWithIncreasingDigits(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    for (let j = i; j <= 2 * i - 1; j++) {
      row += j;
    }

    for (let j = 2 * i - 2; j >= i; j--) {
      row += j;
    }
    result += row + "\n";
  }
  return result;
}

console.log(pyramidWithIncreasingDigits(5));
console.log(pyramidWithIncreasingDigits(4));
console.log(pyramidWithIncreasingDigits(3));
