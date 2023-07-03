let array = [
 [ "Jogos",
  "Games",
  "Filmes"],
  [ "csgo",
  "mata-mata",
  "Filmes"],
  [ "20R$",
  "Games",
  "Filmes"],
]
console.log(array)
console.log(array[2][0])

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ["l4, c1", "l4, c2", "l4, c3", "l4, c4"]
]
// console.table(matriz)

// matriz.push(["Nova linha", "Novo item"])
// console.table(matriz)

// matriz[0].push("Nova coluna")
// console.table(matriz)

for(let l = 0; l < matriz.length; l++) {
  for(let c = 0; c < matriz[l].length; c++){
    const elemento = matriz[l][c]
    console.log("(" + l + ", " + c + ") Valor: " + elemento)
  }
}
