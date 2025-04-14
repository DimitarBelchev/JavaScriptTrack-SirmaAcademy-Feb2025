class CarCompany {
  constructor() {
    this.cars = new Map();
  }

  registerCar(carBrand, carModel, producedCars) {
    if (!this.cars.has(carBrand)) {
      this.cars.set(carBrand, new Map());
    }
    const brandModels = this.cars.get(carBrand);

    if (!brandModels.has(carModel)) {
      brandModels.set(carModel, 0);
    }

    const currentCount = brandModels.get(carModel);
    brandModels.set(carModel, currentCount + producedCars);
  }

  displayCars() {
    for (const [carBrand, models] of this.cars.entries()) {
      console.log(carBrand);
      for (const [carModel, producedCars] of models.entries()) {
        console.log(`###${carModel} -> ${producedCars}`);
      }
    }
  }
}

const input = [
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
];

const carCompany = new CarCompany();

input.forEach((entry) => {
  const [carBrand, carModel, producedCars] = entry.split(" | ");
  carCompany.registerCar(carBrand, carModel, Number(producedCars));
});

carCompany.displayCars();
