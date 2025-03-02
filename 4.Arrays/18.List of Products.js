function listOfProducts(products) {
  products.sort();
  products.forEach((product, index) => {
    console.log(`${index + 1}.${product}`);
  });
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
