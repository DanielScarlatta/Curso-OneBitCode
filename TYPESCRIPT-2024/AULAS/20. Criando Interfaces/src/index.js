// type Planet = {
//   name: string;
//   satallites: string[];
// };
var sun;
sun.name = "Sol";
sun.mass = 1989 * Math.pow(10, 30);
sun.age = 4.603 * Math.pow(10, 9);
sun.planets = [];
// A classe implementa todos os atributos do tipo Planet
// Cria um contrato que obriga ter no minimo as propriedades de Planet
var MilkWayPlanet = /** @class */ (function () {
    function MilkWayPlanet(name, mass, population, satellites) {
        this.name = name;
        this.mass = mass;
        this.population = population;
        this.satellites = satellites;
    }
    MilkWayPlanet.prototype.createSatellite = function (name) {
        //....
    };
    return MilkWayPlanet;
}());
