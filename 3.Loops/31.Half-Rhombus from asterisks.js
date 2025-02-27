function halfRhombusFromAsteriks(n) {
  for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(i).trim());
  }
  for (let i = n - 1; i >= 1; i--) {
    console.log("* ".repeat(i).trim());
  }
}

halfRhombusFromAsteriks(1);
halfRhombusFromAsteriks(2);
halfRhombusFromAsteriks(3);
halfRhombusFromAsteriks(4);
