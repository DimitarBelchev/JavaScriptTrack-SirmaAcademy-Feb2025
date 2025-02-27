function vegetableMarket(vegetable, day, quantity) {
  const vegetables = ["tomato", "onion", "lettuce", "cucumber", "pepper"];
  const weekdayPrices = [2.5, 1.2, 0.85, 1.45, 5.5];
  const weekendPrices = [2.8, 1.3, 0.85, 1.75, 3.5];

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const weekends = ["Saturday", "Sunday"];

  let priceList;
  if (weekdays.includes(day)) {
    priceList = weekdayPrices;
  } else if (weekends.includes(day)) {
    priceList = weekendPrices;
  } else {
    return "error";
  }

  const vegetableIndex = vegetables.indexOf(vegetable);
  if (vegetableIndex === -1) {
    return "error";
  }

  const pricePerUnit = priceList[vegetableIndex];
  const totalPrice = pricePerUnit * quantity;
  return totalPrice.toFixed(2);
}

console.log(vegetableMarket("tomato", "Tuesday", 2));
console.log(vegetableMarket("onion", "Sunday", 3));
console.log(vegetableMarket("pepper", "Monday", 10));
console.log(vegetableMarket("banana", "Friday", 5));
console.log(vegetableMarket("pepper", "Fridayy", 5));
