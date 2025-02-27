function squareFrame(n) {
  let topBorder = "+";
  for (let i = 0; i < n - 2; i++) {
    topBorder += " -";
  }
  topBorder += " +";
  console.log(topBorder);

  for (let i = 0; i < n - 2; i++) {
    let middleRow = "|";
    for (let j = 0; j < n - 2; j++) {
      middleRow += " -";
    }
    middleRow += " |";
    console.log(middleRow);
  }

  console.log(topBorder);
}

// squareFrame(3);

squareFrame(4);

// squareFrame(5);

// squareFrame(6);
