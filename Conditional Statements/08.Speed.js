function speed(number) {
  if (number <= 10) {
    return "slow";
  } else if (number > 10 && number <= 60) {
    return "average";
  } else if (number > 60 && number <= 120) {
    return "fast";
  } else if (number > 120 && number <= 160) {
    return "super-fast";
  } else {
    return "turbo-fast";
  }
}

console.log(speed(10));
console.log(speed(59));
console.log(speed(120));
console.log(speed(121));
console.log(speed(183));
console.log(speed(59.99));
console.log(speed(60.001));
