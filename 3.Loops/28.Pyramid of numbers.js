function pyramidOfNumbers(n) {
  let currentNumber = 1;
  let row = 1;

  while (currentNumber <= n) {
    let output = "";
    for (let i = 0; i < row; i++) {
      if (currentNumber > n) break;
      output += currentNumber + " ";
      currentNumber++;
    }
    console.log(output.trim());
    row++;
  }
}

pyramidOfNumbers(7);

pyramidOfNumbers(10);

pyramidOfNumbers(15);
