/*
* Aqui se puede acceder a los métodos de la clase Brand e interactuar con ellos

* Se requiere crear una clase inventory y ubicar todo el código dentro de ella
*/


import { Brand } from './brand.mjs'


export const newPeugeot = new Brand();
    newPeugeot.addPeugeot("208", 2021, "nafta", "blanco", "manual", 25000);
    console.log(newPeugeot.peugeot); // Devuelve un array peugeot nuevo con el auto añadido // ok


export const newChevrolet = new Brand();
    newChevrolet.addChevrolet("Camaro", 2022, "nafta", "rojo", "manual", 50000);
    console.log(newChevrolet.chevrolet); // Devuelve un array chevrolet nuevo con el auto añadido // ok


export const newBrand = new Brand();
    newBrand.addBrand("Toyota");
    console.log(newBrand.toyota); // Añade al constructor un nuevo objeto con el nombre de la marca a añadir la cual contiene un arreglo vacio 


export const carFilter = new Brand();
    const filteredCars = carFilter.filterByProperty("year", 2023);
    console.log(filteredCars); // Devuelve un arreglo con los autos que coincidan con los datos añadidos // No especifica la marca >> hay que especificar el tipo de propiedad que se quiere busacar y su valor 

export const myBrand = new Brand();
    console.log(myBrand.listInventory()); // Devuelve un array con todos los automoviles disponibles en el inventario
