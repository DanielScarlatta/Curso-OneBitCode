let menu = ""
let deckOfCards = []
let cardName = ""
let drawnCard = ""

do{
  menu = prompt("Quantidade de cartas: " + deckOfCards.length +
  "\n1º Adicionar uma carta" +
  "\n2º Puxar uma carta" +
  "\n3º Sair")

  switch(menu) {
    case"1":
      cardName = prompt("Qual é o nome da carta a ser adicionada: ")
      deckOfCards.unshift(cardName)
      break

    case"2":
      if(deckOfCards.length > 0) {
        drawnCard = deckOfCards.shift()
        alert("A carta puxada foi " + drawnCard)
      }else {
        alert("Nao existe mais cartas para puxar")
      }
      break

    case"3":
      alert("Encerrando o sistema!")
      break

    default:
      alert("Escolha uma opçao valida!")
  }
}while(menu !== "3")