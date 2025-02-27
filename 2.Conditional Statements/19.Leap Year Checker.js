function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "It's a leap year!";
  } else {
    return "It's not a leap year.";
  }
}

function leapYearChecker(year) {
  return isLeapYear(year);
}

console.log(leapYearChecker(2020));
console.log(leapYearChecker(1900));
console.log(leapYearChecker(2000));
console.log(leapYearChecker(2023));
console.log(leapYearChecker(1600));
