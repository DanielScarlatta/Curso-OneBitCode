function sendToSpaceship(name, capitain) {
    var spaceship = {
        name: name,
        capitain: capitain,
        speed: 20,
        inMission: true,
        crew: [],
    };
    alert("a nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.capitain, ", foi enviada em uma miss\u00E3o"));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.speed, " para ").concat(targetSpeed));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name));
    }
}
var spaceshipName = prompt('Insira o nome da nave a ser enviada: ');
var spaceshipCapitain = prompt('Insira o nome do capitão da nave: ');
var currentShip = sendToSpaceship(spaceshipName, spaceshipCapitain);
var speed = parseFloat(prompt('Defina a velocidade: '));
accelerate(speed, currentShip);
