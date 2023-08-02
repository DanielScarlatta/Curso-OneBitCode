let pokemon = "charmander"

function evolucao() {
  pokemon = "charizard"
}

console.log(pokemon);
evolucao()
console.log(pokemon)

/*
function criarAnimal() {
  let animal = "gato"
}

criarAnimal()
console.log(animal)
*/

function avaliarNota(nota) {
  if(nota > 60) {
    var aprovado = true
    let situacao = "Aprovado"
  } else {
    var aprovado = false
    let situacao = "reprovado"
  }
  console.log(nota)
  console.log(aprovado)
  console.log(situacao)
}


avaliarNota(84)
avaliarNota(43)


