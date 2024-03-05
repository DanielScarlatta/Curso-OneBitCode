function sendToSpaceship(name: string, capitain: string) {
  const spaceship = {
    name,
    capitain,
    speed: 20,
    inMission: true,
    crew: [],
  };
  alert(
    `a nave ${spaceship.name} comandada pelo capitão ${spaceship.capitain}, foi enviada em uma missão`
  );
  return spaceship;
}

function accelerate(
  targetSpeed: number,
  spaceship: { name: string; speed: number }
) {
  if (spaceship.speed > targetSpeed) {
    alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`);
  } else if (spaceship.speed < targetSpeed) {
    alert(`Aumentando a velocidade da ${spaceship.speed} para ${targetSpeed}`);
  } else {
    alert(`Mantendo a velocidade da ${spaceship.name}`);
  }
}

const spaceshipName = prompt('Insira o nome da nave a ser enviada: ')
const spaceshipCapitain = prompt('Insira o nome do capitão da nave: ')

const currentShip =  sendToSpaceship(spaceshipName, spaceshipCapitain)

const speed = parseFloat(prompt('Defina a velocidade: '))

accelerate(speed, currentShip)