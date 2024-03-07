var database = {};
function spaceship(name, pilot, crewLimit) {
    var crew = [];
    var inMission = false;
    crew.push(pilot);
    database[name] = [name, pilot, crewLimit, crew, inMission];
    return {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: crew,
        inMission: inMission,
    };
}
function addCrew(spaceship, manning) {
    if (spaceship.crew.length < spaceship.crewLimit) {
        spaceship.crew.push(manning);
        return console.log("Tripulante adicionado");
    }
    return console.log("Nave cheia!!!. BLOQUEADO A ENTRADA DE TRIPULANTES");
}
function addMission(spaceship) {
    if (spaceship.inMission === true) {
        return console.log("A nave ja esta em missao");
    }
    else if (spaceship.crew.length >= Math.floor(spaceship.crewLimit / 3)) {
        spaceship.inMission = true;
        database[spaceship.name].inMission = true;
        console.log("A nave saiu para a missão");
    }
    else {
        console.log("Numbero de tripulantes insuficiaentes");
    }
}
function listSpaceship() {
    if (database !== "") {
        console.table(database);
    }
}
