const Character = require('./Character.js')
const Mage = require('./Mage.js')
const Thief = require('./Thief.js')
const Warrior = require('./Warrior.js')

const daniel = new Character('Daniel', 100, 30, 20)
const felipe = new Character('Felipe', 100, 50, 20)
const enzo = new Thief('Enzo', 100, 30, 15)
const zildo = new Thief('Zildo', 100, 60, 15)
const eliel = new Mage('Eliel', 100, 15, 20, 25)
const paulo = new Mage('Paulo', 100, 20, 25, 15)
const fabio = new Warrior('Fabio', 150, 50, 30, 20)
const bruno = new Warrior('Bruno', 150, 80, 20, 40)

console.log('---------------------Character---------------------')

console.log(daniel)
console.log(felipe)

daniel.attack(felipe)
felipe.attack(daniel)

console.log(felipe)
console.log(daniel)

console.log('---------------------Thief---------------------')

console.log(enzo)
console.log(zildo)

enzo.attack(zildo)
zildo.attack(enzo)

console.log(enzo)
console.log(zildo)

console.log('---------------------Mage---------------------')

console.log(eliel)
console.log(paulo)

eliel.attack(paulo)
eliel.heal(enzo)

paulo.attack(eliel)

console.log(eliel)
console.log(paulo)
console.log(enzo)

console.log('---------------------Warrior---------------------')

console.log(fabio)
console.log(bruno)

fabio.attack(bruno)
fabio.chargePosition()
bruno.attack(fabio)

console.log(fabio)
console.log(bruno)