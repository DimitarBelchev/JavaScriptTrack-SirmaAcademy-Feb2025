function printChristmasTree(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(i);
    let trunkSpaces = " ".repeat(n - 1);
    let trunkStars = "*";

    if (i === n) {
      trunkSpaces = " ".repeat(n - 2);
      trunkStars = "**";
    }

    console.log(spaces + stars + " | " + stars + spaces);
    if (i === n) {
      console.log(trunkSpaces + trunkStars + " | " + trunkStars + trunkSpaces);
    }
  }
}

// printChristmasTree(1);

// printChristmasTree(2);

printChristmasTree(3);

// printChristmasTree(4);
