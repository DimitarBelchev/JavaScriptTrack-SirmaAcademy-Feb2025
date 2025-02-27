function sunglasses(n) {
  let topRow = "*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n) + "\n";
  let middleRows = "";
  for (let i = 0; i < n - 2; i++) {
    if (i === Math.floor((n - 1) / 2) - 1) {
      middleRows +=
        "*".repeat(1) +
        "/".repeat(2 * n - 2) +
        "*".repeat(1) +
        "|".repeat(n) +
        "*".repeat(1) +
        "/".repeat(2 * n - 2) +
        "*".repeat(1) +
        "\n";
    } else {
      middleRows +=
        "*".repeat(1) +
        "/".repeat(2 * n - 2) +
        "*".repeat(1) +
        " ".repeat(n) +
        "*".repeat(1) +
        "/".repeat(2 * n - 2) +
        "*".repeat(1) +
        "\n";
    }
  }
  let bottomRow = "*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n) + "\n";
  return topRow + middleRows + bottomRow;
}

// console.log(sunglasses(3));
console.log(sunglasses(4));
// console.log(sunglasses(5));
