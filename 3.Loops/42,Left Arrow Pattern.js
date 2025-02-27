function leftArrowPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    for (let k = 1; k <= i; k++) {
      row += "*";
    }
    console.log(row);
  }

  for (let i = n - 1; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    for (let k = 1; k <= i; k++) {
      row += "*";
    }
    console.log(row);
  }
}

leftArrowPattern(5);

// leftArrowPattern(4);

// leftArrowPattern(10);
