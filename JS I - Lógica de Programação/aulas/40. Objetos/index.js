let pessoa = {}
pessoa = {
  nome: "Daniel",
  idade: 20,
  trabalha: true
}

console.log(pessoa)
//Os objetos nao sao ordenados, logo nao podem ser chamodos pela sua sequencia de adiçao

console.log(pessoa.nome)
console.log(typeof pessoa.nome)

console.log(pessoa.idade)
console.log(typeof pessoa.idade)

console.log(pessoa.trabalha)
console.log(typeof pessoa.trabalha)

let fucao = "log"

console[fucao]("Olá, Mundo!")