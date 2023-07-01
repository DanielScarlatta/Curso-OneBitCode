let personagem1 = prompt("Digite o nome do personaguem atacante: ")
let personagem1Ataque = parseFloat(prompt("Digite o poder de ataque do personaguem: "))

let personagem2 = prompt("Digite o nome do personaguem defensor: ")
let personagem2Defesa = parseFloat(prompt("Digite os pontos de defesa do personaguem: "))
let personagem2Vida = parseFloat(prompt("Digite os pontos de vida do personaguem: "))
let personagem2Escudo = prompt("O personagem possui um escudo[S/N]: ")

let dano = null
let vida = null

if(personagem1Ataque > personagem2Defesa && personagem2Escudo == "N") {
  let dano = personagem1Ataque - personagem2Defesa
  let vida = personagem2Vida - dano
  console.log("O personaguem " + personagem2 + " sofreu " + dano + " de dano e ficou com " + vida + " de vida")

} else if(personagem1Ataque > personagem2Defesa && personagem2Escudo == "S") {
  let dano = (personagem1Ataque - personagem2Defesa) / 2
  let vida = personagem2Vida - dano
  console.log("O personaguem " + personagem2 + " sofreu " + dano + " de dano e ficou com " + vida + " de vida, o escudo reduzio metade do dano")
   
} else if(personagem1Ataque <= personagem2Defesa) {
  console.log("O personaguem " + personagem2 + " nao sofreu dano com o ataque")
}