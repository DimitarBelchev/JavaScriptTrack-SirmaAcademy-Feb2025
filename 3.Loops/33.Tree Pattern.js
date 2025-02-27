function treePattern(n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1));
  }
  console.log(" ".repeat(n - 1) + "*");
}

treePattern(6);
treePattern(4);
treePattern(3);
