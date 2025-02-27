function altConditions(n) {
  let output = "";
  let num = 1;
  let maxCols = Math.ceil(Math.sqrt(n * 2));

  for (let i = 0; i < maxCols; i++) {
    let spaces = maxCols - i - 1;
    for (let j = 0; j < spaces; j++) {
      output += " ";
    }

    let cols = Math.min(i + 1, n - (i * (i + 1)) / 2);
    for (let j = 0; j < cols; j++) {
      output += num++;
      if (j !== cols - 1) {
        output += " ";
      }
    }

    output += "\n";
  }

  console.log(output);
}

altConditions(7);

// altConditions(10);

// altConditions(12);
