function arrowPatern(num) {
  for (let i = 1; i < num; i++) {
    console.log(" ".repeat(num - i) + "* ".repeat(i));
  }

  for (let k = 1; k < num; k++) {
    console.log(" ".repeat(num / 2) + "*".repeat(num - 1));
  }
}

arrowPatern(6);

// function arrowPatern(number) {
//   for (let i = 0; i < number - 1; i++) {
//     let spaces = " ".repeat(number - 2 - i);
//     let stars = "*"
//       .repeat(i + 1)
//       .split("")
//       .join(" ");
//     console.log(spaces + stars + spaces);
//   }

//   let roofBottomLength = number + (number - 1);
//   let rectangleSpaces = " ".repeat(roofBottomLength / 4);

//   for (let i = 0; i < number - 1; i++) {
//     console.log(rectangleSpaces + "*".repeat(number - 2 + 1));
//   }
// }

// arrowPatern(7);
// arrowPatern(5);
// arrowPatern(6);
// arrowPatern(7);
