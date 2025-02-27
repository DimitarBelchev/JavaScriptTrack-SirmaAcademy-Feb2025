function squareOfAsteriks(n) {
  for (let i = 0; i < n; i++) {
    console.log("* ".repeat(n).trim());
  }
}

squareOfAsteriks(2);
squareOfAsteriks(3);
