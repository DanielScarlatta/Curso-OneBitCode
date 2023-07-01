const nome = prompt("Qual é seu nome: ")
let viajou = prompt("Voce já viajou para outra cidade[Y/N]: ")
let cidades = ""
let quantidade = null

while(viajou === "Y")  {
  quantidade += 1
  cidades += prompt("Qual cidade voce já viajou? ") + " ,"
  viajou = prompt("Teve outra cidade em que voce visitou [Y/N]: ")
  
}

alert("Ola " + nome + " Voce já viajou por " + quantidade + " Cidades, sendo elas: \n" + cidades)

// if(viajou === "Y") {
//   while()
// }

