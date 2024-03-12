// type Planet = {
//   name: string;
//   satallites: string[];
// };

// Usando a interface para criar seu próprio tipo

interface CelestialBody {
  name: string;
  mass: number;
}

interface Star extends CelestialBody {
  age: number;
  planets: Planet[];
}

interface Planet extends CelestialBody {
  population: number;
  createSatellite: (name: string) => void;
}

let sun: Star;
sun.name = "Sol";
sun.mass = 1989 * 10 ** 30;
sun.age = 4.603 * 10 ** 9;
sun.planets = [];

// Usando o type para herdar as propriedade de CelestialBody
// Fica bem ruim de intender o codigo
//
/*
type Asteroid = CelestialBody & {
  size: number;
};

let asteroid: Asteroid;
asteroid.name = 'b7487'
*/

interface Asteroid extends CelestialBody {
  size: number
  composition: string[],
  speed: number
}

// A classe implementa todos os atributos do tipo Planet
// Cria um contrato que obriga ter no minimo as propriedades de Planet
class MilkWayPlanet implements Planet {
  name: string;
  mass: number;
  population: number;
  satellites: string[];

  constructor(name: string, mass: number, population: number, satellites: string[]) {
    this.name = name
    this.mass = mass
    this.population = population
    this.satellites = satellites
  }

  createSatellite(name: string) {
    //....
  }
}

interface Planet {
  satellites: string[]
}