function someParan(...params) {
  return params.reduce((acum, num) => acum + num, 0)
}

function media(...notas) {
  const soma = notas.reduce((accum, nota) => accum+nota, 0)
  const quant = notas.length
  return soma/quant
}

console.log(someParan(1, 1))

console.log(someParan(1, 1, 4, 7, 2, 2))

console.log(media(7, 5, 9, 8))