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
  const positionOne = (numbers.length / 2) -1
  const positionTwo = (numbers.length / 2)
  if()
}

function mediana(...params) {
  if(params.length % 2 === 0) {
    const positionOne = ((params.length) /2) -1
    const positionTwo = ((params.length) /2)
    return (params[positionOne] + params[positionTwo]) / 2
  } else {
    const positionOne = (params.length -1) / 2
    return params[positionOne]
  }
}

console.log(mediana(15, 14, 8, 7, 3))



function moda(...params) {
  const countMap = {}
  
  for(const element of params) {
    countMap[element] = (countMap[element] || 0) + 1
  }

  return countMap
}

console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4))