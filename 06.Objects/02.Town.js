function printTownProperties(town) {
  for (const property in town) {
    if (town.hasOwnProperty(property)) {
      console.log(`${property} -> ${town[property]}`);
    }
  }
}

const town = {
  name: "Sofia",
  population: 1234567,
  country: "Bulgaria",
  postcode: "1000",
};
printTownProperties(town);
