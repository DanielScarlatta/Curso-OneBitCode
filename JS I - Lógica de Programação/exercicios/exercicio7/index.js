let menu = ""

do{
  menu = prompt("Selecione a opçao desejada: \n 1- Compras \n 2- Vendas \n 3- Grafico \n 4- lucro \n 5- encerrar")

  switch(menu){
    case"1":
      alert("Compras...")
      break
    case"2":
      alert("Vendas...")
      break
    case"3":
      alert("Grafico...")
      break
    case"4":
      alert("lucro...")
      break
    default:
      alert("Opçao invalida")
  }
}while(menu != "5")

alert("Progama encerrado...")