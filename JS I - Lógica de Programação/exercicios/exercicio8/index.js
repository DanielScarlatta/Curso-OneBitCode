let quantidadeInicial = parseFloat(prompt("Qual é a quantidade de capital inicial: "))
let soma = 0
let valorDeSoma = 0
let subtracao = 0
let valorDeSubtracao = 0
let menu = 0

do{
  menu = parseFloat(prompt("Saldo disponivel: " + quantidadeInicial  + 
  "\n Opçoes" + 
  "\n1- Adicionar capital" +
  "\n2- Subtrair capital" + 
  "\n3- Sair"))

  switch(menu){
    case 1:
      valorDeSoma = parseFloat(prompt("Qual valor será adicionado: "))
      alert("Foi adicionado " + valorDeSoma + " ao valor inicial de " + quantidadeInicial)
      quantidadeInicial += valorDeSoma
      break
      
    case 2:
      valorDeSubtracao = parseFloat(prompt("Qual valor será subtraido: "))
      alert("Foi subtraido " + valorDeSubtracao + " do valor inicial de " + quantidadeInicial)
      quantidadeInicial -= valorDeSubtracao
      break
    default:
      alert("Opçao invalida")
  }
}while(menu !== 3)

alert("O progama foi encerrado")