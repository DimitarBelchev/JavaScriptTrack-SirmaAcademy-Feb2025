function holiday(budget, season) {
  let destination;
  let typeOfHoliday;
  let amountSpent;

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      typeOfHoliday = "Camp";
      amountSpent = budget * 0.3;
    } else if (season === "winter") {
      typeOfHoliday = "Hotel";
      amountSpent = budget * 0.7;
    }
  } else if (budget <= 1000) {
    destination = "Europe";
    if (season === "summer") {
      typeOfHoliday = "Camp";
      amountSpent = budget * 0.4;
    } else if (season === "winter") {
      typeOfHoliday = "Hotel";
      amountSpent = budget * 0.8;
    }
  } else {
    destination = "Asia";
    typeOfHoliday = "Hotel";
    amountSpent = budget * 0.9;
  }

  const result = `Somewhere in ${destination}\n${typeOfHoliday} - ${amountSpent.toFixed(
    2
  )}`;
  return result;
}

console.log(holiday(50, "summer"));
console.log(holiday(75, "winter"));
console.log(holiday(312, "summer"));
console.log(holiday(678.53, "winter"));
console.log(holiday(1500, "summer"));
