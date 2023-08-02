function somar(a, b) {
  return (a + b)
}


console.log(somar(2, 6))

let operacao = somar
console.log(operacao(8,4))


operacao = function (a, b) {
  return a - b
}

console.log(operacao(7, 34))

//function anonima abaixo

const subitrair = function (a, b) {
  return a - b
}

console.log(subitrair(7, 34))
