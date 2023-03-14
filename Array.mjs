export class Automoviles {
  
    constructor() {
      this.automoviles = [
        {
       brand: 'peugeot',
       name: '5008',
       type: 'nafta',
       transmission: 'auto',
       engine: 2,
       bodyType: 'monovolumen',
       color: 'gris oscuro',
       year: 2023,
       prize: 55000,
   }, {
       brand: 'peugeot',
       name: '308',
       type: 'nafta',
       transmission: 'manual',
       engine: 1.6,
       bodyType: 'hatchback',
       color: 'gris oscuro',
       year: 2014,
       prize: 44000
   }, {
       brand: 'peugeot',
       name: '206',
       type: 'nafta',
       transmission: 'manual',
       engine: 1.4,
       bodyType: 'hatchback',
       color: 'rojo',
       year: 2009,
       prize: 20000
   }, {
       brand: 'peugeot',
       name: '408',
       type: 'diesel',
       transmission: 'manual',
       engine: 1.6,
       bodyType: 'sedan',
       color: 'blanco',
       year: 2014,
       prize: 40000
   }, {
       brand: 'peugeot',
       name: 'Partner',
       type: 'nafta',
       transmission: 'manual',
       engine: 1.6,
       bodyType: 'furgon',
       color: 'blanco',
       year: 2019,
       prize: 35000
   }, {
       brand: 'chevrolet',
       name: 'tracker',
       type: 'nafta',
       transmission: 'auto',
       engine: 1.2,
       bodyType: 'suv',
       color: 'gris',
       year: 2023,
       prize: 47000
   }, {
       brand: 'chevrolet',
       name: 'onix',
       type: 'nafta',
       transmission: 'manual',
       engine: 1.2,
       bodyType: 'hatchback',
       color: 'gris',
       year: 2023,
       prize: 39000
   }, {
       brand: 'chevrolet',
       name: 'cruze',
       type: 'nafta',
       transmission: 'manual',
       engine: 1.4,
       bodyType: 'hatchback',
       color: 'gris',
       year: 2017,
       prize: 32000
   }, {
       brand: 'chevrolet',
       name: 's10',
       type: 'diesel',
       transmission: 'auto',
       engine: 2.8,
       bodyType: 'pickup',
       color: 'azul',
       year: 2023,
       prize: 42000
   }, {
       brand: 'chevrolet',
       name: 'corsa',
       type: 'nafta',
       transmission: 'manual',
       engine: 1.6,
       bodyType: 'furgon',
       color: 'rojo',
       year: 2009,
       prize: 19000
   }
  ];
    }
  
    agregarMarca(brand, name, type, transmission, engine, bodyType, color, year, prize) {
      const nuevaMarca = {
        brand,
        name,
        type,
        transmission,
        engine,
        bodyType,
        color,
        year,
        prize,
      };
      this.automoviles.push(nuevaMarca);
    }

    filtro(marca, combustible) {
        return this.automoviles.filter(auto => auto.brand === marca && auto.type === combustible);
    }

    agregarAuto(brand, name, type, transmission, engine, bodyType, color, year, prize) {
        const nuevoAuto = {
            brand,
            name,
            type,
            transmission,
            engine,
            bodyType,
            color,
            year,
            prize,
        };
        this.automoviles.push(nuevoAuto);
    }

  }
  
