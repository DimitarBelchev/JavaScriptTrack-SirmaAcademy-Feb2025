function atSea(days, roomType, assessment) {
  let totalPrice = 0;

  switch (roomType) {
    case "single room":
      totalPrice = days * 25.0;
      break;
    case "apartment":
      totalPrice = (days - 1) * 50.0;
      if (days < 10) {
        totalPrice = totalPrice - totalPrice * 0.3;
      } else if (days <= 15) {
        totalPrice = totalPrice - totalPrice * 0.35;
      } else {
        totalPrice = totalPrice - totalPrice * 0.5;
      }
      break;
    case "president apartment":
      totalPrice = days * 100.0;
      if (days < 10) {
        totalPrice = totalPrice - totalPrice * 0.1;
      } else if (days <= 15) {
        totalPrice = totalPrice - totalPrice * 0.15;
      } else {
        totalPrice = totalPrice - totalPrice * 0.2;
      }
      break;
    default:
      console.log("Invalid room type");
      return;
  }

  if (assessment === "positive") {
    totalPrice = totalPrice + totalPrice * 0.25;
  } else if (assessment === "negative") {
    totalPrice = totalPrice - totalPrice * 0.1;
  } else {
    console.log("Invalid assessment");
    return;
  }

  return totalPrice.toFixed(2);
}

console.log(atSea(11, "apartment", "positive"));
console.log(atSea(30, "president apartment", "negative"));
console.log(atSea(12, "single room", "positive"));
console.log(atSea(2, "apartment", "positive"));
