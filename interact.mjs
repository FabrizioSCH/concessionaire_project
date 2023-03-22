/*
* Aqui se puede acceder a los métodos de la clase Brands e interactuar con ellos
*/


import { Brands } from './brands.mjs'


const brands = new Brands();

brands.addBrand('Peugeot');
brands.addBrand('Chevrolet');
brands.addBrand('Toyota');

brands.addCar('Peugeot', '5008', 2023, 'nafta', 'gris oscuro', 'auto', 55000);
brands.addCar('Peugeot', '308', 2014, 'nafta', 'gris oscuro', 'manual', 44000);
brands.addCar('Peugeot', '206', 2009, 'nafta', 'rojo', 'manual', 20000);
brands.addCar('Peugeot', '408', 2014, 'diesel', 'blanco', 'manual', 40000);

brands.addCar('Chevrolet', 'tracker', 2023, 'nafta', 'gris', 'auto', 47000);
brands.addCar('Chevrolet', 'onix', 2023, 'nafta', 'gris', 'manual', 39000);
brands.addCar('Chevrolet', 's10', 2023, 'diesel', 'azul', 'auto', 42000);
brands.addCar('Chevrolet', 'corsa', 2009, 'nafta', 'rojo', 'manual', 19000);

brands.addCar('Toyota', 'Prius', 2018, 'nafta', 'blanco', 'auto', 40000)

console.log(brands);


console.log(brands.filterCars('Peugeot', '308'));
console.log(brands.filterCars('Chevrolet', 'tracker'));

