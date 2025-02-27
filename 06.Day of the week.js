function dayOfTheWeek(number) {
  let day = "Error";
  if (number === 1) {
    day = "Monday";
  } else if (number === 2) {
    day = "Tuesday";
  } else if (number === 3) {
    day = "Wednesday";
  } else if (number === 4) {
    day = "Thursday";
  } else if (number === 5) {
    day = "Friday";
  } else if (number === 6) {
    day = "Saturday";
  } else if (number === 7) {
    day = "Sunday";
  }
  return day;
}

console.log(dayOfTheWeek(1));
console.log(dayOfTheWeek(2));
console.log(dayOfTheWeek(3));
console.log(dayOfTheWeek(4));
console.log(dayOfTheWeek(5));
console.log(dayOfTheWeek(6));
console.log(dayOfTheWeek(7));
console.log(dayOfTheWeek(8));
