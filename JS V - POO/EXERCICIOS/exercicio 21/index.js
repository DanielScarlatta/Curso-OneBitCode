const Character = require('./Character.js')

const daniel = new Character('Daniel', 100, 36, 60)
const felipe = new Character('Felipe', 100, 50, 25)

console.log(daniel)
console.log(felipe)

daniel.attack(felipe)
felipe.attack(daniel)

console.log(felipe)
console.log(daniel)