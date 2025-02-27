function pyramidOfNumbers(n) {
  let currentNumber = 1;
  let row = 1;

  while (currentNumber <= n) {
    let numbersInRow = row;
    let output = "";

    for (let i = 0; i < numbersInRow; i++) {
      if (currentNumber > n) {
        break;
      }
      output += currentNumber + " ";
      currentNumber++;
    }

    console.log(output);
    row++;
  }
}

pyramidOfNumbers(7);

// printPyramid(10);

// printPyramid(12);
