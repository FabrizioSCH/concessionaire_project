/**
*  Intenvory
*  En esta clase se almacenan los vehiculos
*  @example const instance = new Object()
**/

import {Automoviles} from './Array.mjs'



export const autos = new Automoviles();
    autos.agregarMarca('toyota', 'corolla', 'nafta', 'auto', 1.8, 'sedan', 'azul', 2022, 50000);
    console.log(autos.automoviles); // Devuelve el array automoviles con el nuevo auto añadido 

export const automovil = new Automoviles();
    const autosFiltrados = automovil.filtro('chevrolet', 'nafta');
    console.log(autosFiltrados); // Muestra un array con los automoviles filtrados

export const autoss = new Automoviles();
    autoss.agregarAuto('lamborghini', 'murcielago', 'nafta', 'manual', 6.5, 'coupe', 'negro', 2011, 100000);
    console.log(autoss.automoviles); // Devuelve un array automoviles con el nuevo auto añadido





/*

class Inventory{
  
    #invItem;
    #invPlace;
    #invNum;
    #invSto;
    #invSiz;
  
    constructor(item, place, number, stock, size){
          this.#invItem;
          this.#invPlace;
          this.#invNum;
          this.#invSto;
          this.#invSiz;
     }
        
     store(){};
     identify(){};
     itemAcces(){};
     itemExtract(){};
     itemList(){};
     itemFilter(){};
}

*/
