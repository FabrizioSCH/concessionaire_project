/*
Clase Brand

* Cabe aclarar que, para poder interactuar con esta clase, es necesario acceder al archivo index.html, correr un live server sobre él y acto siguiente acceder al archivo interact.mjs el cual contiene el espacio para poder interactuar con la clase

* index.html > Aqui podemos ver la consola que estará ejecutando el archivo interact.mjs
* interact.mjs > Éste programa cumple la funcion de "panel de interacción" en el cual nosotros podremos especificar lo que queremos hacer 
* brand.mjs > Esta clase está creada para almancear los automoviles y poder visualizar, añadir marca, añadir automovil a una marca, filtrar caracteristicas de un automovil y obtener un listado de todos los automoviles disponibles
*/


export class Brand {
  
    constructor() {

      this.peugeot = [
        { model: "5008", year: 2023, type: "nafta", color: "gris oscuro", transmission: "auto", price: 55000 },
        { model: "308", year: 2014, type: "nafta", color: "gris oscuro", transmission: "manual", price: 44000 },
        { model: "206", year: 2009, type: "nafta", color: "rojo", transmission: "manual", price: 20000 },
        { model: "408", year: 2014, type: "diesel", color: "blanco", transmission: "manual", price: 40000 }
      ];
        
      this.chevrolet = [
        { model: "tracker", year: 2023, type: "nafta", color: "gris", transmission: "auto", price: 47000 },
        { model: "onix", year: 2023, type: "nafta", color: "gris", transmission: "manual", price: 39000 },
        { model: "s10", year: 2023, type: "diesel", color: "azul", transmission: "auto", price: 42000 },
        { model: "corsa", year: 2009, type: "nafta", color: "rojo", transmission: "manual", price: 19000 }
      ];
    }
  

    addPeugeot(model, year, type, color, transmission, price) {
      const newCar = { model, year, type, color, transmission, price };
      this.peugeot.push(newCar); 
    } //ok


    addChevrolet(model, year, type, color, transmission, price) {
        const newCar = { model, year, type, color, transmission, price };
        this.chevrolet.push(newCar);
      } //ok


    addBrand(brandName) {
        this[brandName.toLowerCase()] = [];
    } //ok


    filterByProperty(property, value) {
        let result = [];
            for(let car of this.peugeot) {
                if(car[property] === value) {
          result.push(car);
        }
      }
            for(let car of this.chevrolet) {
                if(car[property] === value) {
          result.push(car);
        }
      }
      return result;
    } //ok

    listInventory() {
      return [...this.peugeot, ...this.chevrolet];
    }
   
  }
  
