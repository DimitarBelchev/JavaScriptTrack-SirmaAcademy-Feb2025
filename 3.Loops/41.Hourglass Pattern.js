function hourglassPattern(size) {
  for (let i = size; i >= 1; i--) {
    let spaces = Array(size - i + 1).join(" ");
    let hashes = Array(2 * i - 1).join("#");
    console.log(spaces + hashes);
  }

  let middleHashes = Array(2 * size + 1).join("#");
  console.log(middleHashes);

  for (let i = 1; i <= size; i++) {
    let spaces = Array(size - i + 1).join(" ");
    let hashes = Array(2 * i - 1).join("#");
    console.log(spaces + hashes);
  }
}

hourglassPattern(5);

// hourglassPattern(8);

// hourglassPattern(2);
