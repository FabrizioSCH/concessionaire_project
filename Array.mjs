/* 
* años autos                                / @example let search = Automoviles.map(Automoviles => Automoviles.year);
* autos menores al año 2010                 / @example let search = Automoviles.filter(Automoviles => Automoviles.year < 2010);
* autos de transmision automatica           / @example let search = Automoviles.filter(Automoviles => Automoviles.transmission == 'auto');
* auto de nafta mayores al 2016             / @example let search = Automoviles.filter(Automoviles => Automoviles.type == 'nafta' && Automoviles.year > 2016);
* primer elemento que cueste menos de 25000 / @example let search = Automoviles.find(Automoviles => Automoviles.prize < 25000);

* reduce = metodo que sume la cantidad de elementos tipo diesel

* A cada linea de código agregarle una nueva linea debajo con el código / @example console.log(search); 
*/




export const Automoviles = [

    {
     brand: 'peugeot',
     name: '5008',
     type: 'nafta',
     transmission: 'auto',
     engine: 2,
     bodyType: 'monovolumen',
     color: 'gris oscuro',
     year: 2023,
     prize: 55000
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
]
