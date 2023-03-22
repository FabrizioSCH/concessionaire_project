export class Brands {
  constructor() {
    this.brands = {};
  }

  addBrand(brand) {
    this.brands[brand] = [];
  }

  addCar(brand, model, year, type, color, transmission, price) {
    const newCar = { brand, model, year, type, color, transmission, price };
    this.brands[brand].push(newCar);
  }
  
  filterCars(brand, model) {
    return this.brands[brand].filter(car => car.model === model);
  }
}
