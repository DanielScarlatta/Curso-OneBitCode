const spaceShip = {
  name: 'x-Wing',
  speed: 0
}

function accelerate(spaceShip: { name: string; speed: number }, speed: number) {
  spaceShip.speed = speed
}

accelerate(spaceShip, 50)