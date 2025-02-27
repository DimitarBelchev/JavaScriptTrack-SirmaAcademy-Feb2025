function discountCalculator(age, membership) {
  if (age < 18) {
    return "10% discount";
  } else if (age >= 18 && age <= 64) {
    if (membership.toLowerCase() === "yes") {
      return "20% discount";
    } else {
      return "10% discount";
    }
  } else {
    return "30% discount";
  }
}

console.log(discountCalculator(20, "Yes"));
console.log(discountCalculator(15, "No"));
console.log(discountCalculator(70, "No"));
