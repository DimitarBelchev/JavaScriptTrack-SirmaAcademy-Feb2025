function grocery(product, city, quantity) {
  const products = ["tea", "water", "juice", "sweets", "chips"];
  const cities = ["Sofia", "Plovdiv", "Varna"];
  const prices = [
    [0.5, 0.8, 1.2, 1.45, 1.6],
    [0.4, 0.7, 1.15, 1.3, 1.5],
    [0.45, 0.7, 1.1, 1.35, 1.55],
  ];

  const productIndex = products.indexOf(product);
  const cityIndex = cities.indexOf(city);

  const cost = prices[cityIndex][productIndex] * quantity;
  return cost.toFixed(2);
}

console.log(grocery("tea", "Varna", 2));
console.log(grocery("chips", "Plovdiv", 1));
console.log(grocery("juice", "Sofia", 6));
console.log(grocery("water", "Sofia", 10));

// Output differs?
console.log(grocery("sweets", "Plovdiv", 1));
