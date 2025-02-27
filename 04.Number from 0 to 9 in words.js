function dayOfTheWeek(number) {
  switch (number) {
    case 0:
      return "zero";
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
    default:
      return "too big";
  }
}

console.log(dayOfTheWeek(0));
console.log(dayOfTheWeek(1));
console.log(dayOfTheWeek(2));
console.log(dayOfTheWeek(3));
console.log(dayOfTheWeek(4));
console.log(dayOfTheWeek(5));
console.log(dayOfTheWeek(6));
console.log(dayOfTheWeek(7));
console.log(dayOfTheWeek(8));
console.log(dayOfTheWeek(9));
console.log(dayOfTheWeek(10));
