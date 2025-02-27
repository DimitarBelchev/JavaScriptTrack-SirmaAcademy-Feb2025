function housePattern(n) {
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    let spaces = " ".repeat(Math.floor((n - 1) / 2) - i);
    let stars = "*".repeat(2 * i + 1);
    console.log(spaces + stars);
  }

  for (let i = 0; i < Math.floor(n / 2); i++) {
    console.log("*" + " ".repeat(n - 2) + "*");
  }
}

// housePattern(7);

// housePattern(4);

housePattern(3);
