const universe = [];
type Situation = "inhabited" | "habitable" | "uninhabitable" | "unexplored";

function findPlanet(name: string) {
  const existPlanet = universe.find((planet) => planet.name === name);

  if (existPlanet) {
    return existPlanet;
  }
  return undefined;
}

function Planet(
  name: string,
  coordinates: [number, number, number, number],
  situation: Situation,
  satellites: string[]
) {
  const planet = {
    name,
    coordinates,
    situation,
    satellites,
  };

  universe.push(planet);
}

function editPlanet(name: string, situation: Situation) {
  const find = findPlanet(name);
  if (find) {
    find.situation = situation;
    return console.log("Situação do planeta atualizado");
  }
  return console.log("Planeta não encontrado");
}

function addSatellite(name: string, satellites: string[]) {
  const find = findPlanet(name);

  if (find) {
    find.satellites.push(satellites);
    return console.log(
      `O satélite ${satellites} foi adicionado ao planeta ${name}`
    );
  }

  return console.log("Planeta não encontrado");
}

function removeSatellite(name: string, satellites: string) {
  const find = findPlanet(name);
  if (find) {
    find.satellites.forEach((sate: string, index: number) => {
      if (sate === satellites) {
        find.satellites.splice(index, 1);
        return console.log("satélite apagado");
      }
    });
  } else {
    return console.log("Planeta não encontrado");
  }

}

function listPlanets() {
  return console.table(universe);
}

const terra = Planet("terra", [1, 584, 47, 6], "inhabited", ["lua"]);
