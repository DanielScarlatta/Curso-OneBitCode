let primeiroCarro = prompt("Digite o nome do primeiro carro: ")
let velocidadePrimeiro = parseFloat(prompt("Digite a velocidade do primeiro carro: "))

let segundoCarro = prompt("Digite o nome do segundo carro: ")
let velocidadeSegundo = parseFloat(prompt("Digite a velocidade do segundo carro: "))

if(velocidadePrimeiro > velocidadeSegundo) {
  alert("O " + primeiroCarro + " é mais rapido")
} else if (velocidadePrimeiro < velocidadeSegundo) {
  alert("O " + segundoCarro + " é mais rapido")
} else {
  alert("Os dois carros estao na mesma velocidade!")
}