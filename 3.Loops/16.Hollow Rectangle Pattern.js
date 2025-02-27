function hollowRectanglePattern(n, m) {
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      console.log("*".repeat(m));
    } else {
      console.log("*" + " ".repeat(m - 2) + "*");
    }
  }
}

hollowRectanglePattern(4, 6);

hollowRectanglePattern(2, 2);

hollowRectanglePattern(3, 4);
