const database: Object = {};

function spaceship(name: string, pilot: string, crewLimit: number) {
  let crew: Array<string> = [];
  let inMission: boolean = false;
  crew.push(pilot);
  database[name] = [name, pilot, crewLimit, crew, inMission];
  return {
    name,
    pilot,
    crewLimit,
    crew,
    inMission,
  };
}

function addCrew(
  spaceship: { name: string; crewLimit: number; crew: string[] },
  manning: string
) {
  if (spaceship.crew.length < spaceship.crewLimit) {
    spaceship.crew.push(manning);
    return console.log("Tripulante adicionado");
  }
  return console.log("Nave cheia!!!. BLOQUEADO A ENTRADA DE TRIPULANTES");
}

function addMission(spaceship: {
  name: string;
  pilot: string;
  crewLimit: number;
  crew: Array<string>;
  inMission: boolean;
}) {
  if (spaceship.inMission === true) {
    return console.log("A nave ja esta em missao");
  } else if (spaceship.crew.length >= Math.floor(spaceship.crewLimit / 3)) {
    spaceship.inMission = true;
    database[spaceship.name].inMission = true;
    console.log("A nave saiu para a missão");
  } else {
    console.log("Numbero de tripulantes insuficiaentes");
  }
}

function listSpaceship() {
  if (database !== "") {
    console.table(database);
  }
}
