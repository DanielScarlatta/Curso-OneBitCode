function calcular(a, b, operacao) {
  console.log("Realizando uma operacao!")
  const resultado = operacao(a, b)
  return resultado
}

function somar (x, y) {
  console.log("Realizando uma soma")
  return x + y
}

function subitrair (x, y){
  console.log("Realizando uma subitracao")
  return x - y
}

console.log(calcular(3, 5, somar))
console.log(calcular(3, 5, subitrair))
console.log(calcular(8, 2, function (a,b) {
  console.log("Relazindo uma divisao")
  return a / b
}))

//high function order, day to day

function exebirElemento(elemento, indice, array){
  console.log(
    elemento,
    indice,
    array
  )
}

const list = ["maça", "banana", "laranja"]

for (let i = 0; i < list.length; i++) {
  exebirElemento(list[i], i, list)
}

console.log("-------------------------------------------------------------")

//for each
//para cada elemento de list é chamado a function exebirElemento
list.forEach(exebirElemento)

console.log("-------------------------------------------------------------")

/*
chama o forEach passando uma function anonima que tem como parametro (elemento, indice, array),
que serao mostrados com um console.log
*/
list.forEach(function (elemento, indice, array) {
  console.log(
    elemento,
    indice,
    array
  )
})


