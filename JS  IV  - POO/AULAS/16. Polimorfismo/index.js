class Vehicle {
  move() {
    console.log('O veiculo está se movendo')
  }
}

class Car extends Vehicle {
  move() {
    console.log('O carro esá se movendo')
  }
}

class Ship extends Vehicle {
  move() {
    console.log('O navio está navegando')
  }
}

class Aircraft extends Vehicle {
  move() {
    console.log('O avião está voando')
  }
}

const delorean = new Car()
const blackpearl = new Ship()
const epoch = new Aircraft()

delorean.move()
blackpearl.move()
epoch.move()