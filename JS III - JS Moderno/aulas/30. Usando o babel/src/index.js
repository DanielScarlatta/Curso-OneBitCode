// Média Aritmética
function average(...params) {
  const sum = params.reduce((cont, num) => cont+num, 0)
  return sum / params.length
}

console.log(`Média Aritmética ${average(5, 3, 2, 9, 8)}`)

// Média ponderada
const reightedAverage = (...params) => {
  const sum = params.reduce((cont, {n, p}) => cont + (n*p), 0)
  const weightSum = params.reduce((cont, entry) => cont+entry.p, 0)
  return sum / weightSum
}

console.log(`Media ponderada ${reightedAverage({n: 7, p: 2}, {n: 9, p: 5}, {n: 3, p: 1})}`)

// mediana
const median = (...numbers) => {
  const orderNumbers = [...numbers].sort((a, b) => a - b)
  const middle = Math.floor(orderNumbers.length / 2)
  const positionOne = orderNumbers[middle - 1]
  const positionTwo = orderNumbers[middle]
  if(orderNumbers.length % 2 !== 0) {
    return orderNumbers[middle]
  }
  return average(positionOne, positionTwo)
}

console.log(`O midian é ${median(15, 14, 8, 7, 3)}`)

const mode = (...numbers) => {
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0] 
}

console.log(`Moda:  ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)
