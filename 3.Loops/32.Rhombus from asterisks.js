function rhombusFromAsteriks(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "* ".repeat(i).trim());
  }
  for (let i = n - 1; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "* ".repeat(i).trim());
  }
}

rhombusFromAsteriks(1);
rhombusFromAsteriks(2);
rhombusFromAsteriks(3);
rhombusFromAsteriks(4);
