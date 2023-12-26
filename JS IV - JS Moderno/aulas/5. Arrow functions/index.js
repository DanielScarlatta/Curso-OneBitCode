function normalSum(a, b) {
  return a + b
}
console.log(`Soma normal ${normalSum(2, 2)}`)

const anonymousSun = function(a, b) {
  return a + b
}
console.log(`Soma Anônima: ${anonymousSun(2, 4)}`)


const subtract = (a, b) => {
  return a - b
}
console.log(`Soma Arrow function: ${subtract(4, 3)}`)

const arrowSum = (a, b) => a + b
console.log(`Soma Arrow function: ${arrowSum(3, 4)}`)

const double = n => n*2
console.log(`O dobro do numero: ${double(7)}`)

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')

console.log(startingWithP)