let menu = ""
const properties = []
let showProperties = ""

do{
  menu = prompt("Sejá Bem-Vindo ao sistema de cadastro de imoveis!\n" +
  "Quantidades de propriedades cadastradas: " + properties.length +
  "\n1- Cadastrar imoveis" + 
  "\n2- Imoveis cadastrados" + 
  "\n3- Sair")

  switch(menu) {
    case"1":
      const immobile = {}
      immobile.name = prompt("Qual é o nome do proprietário: ")
      immobile.bedrooms = prompt("Qual é a quantidade de quartos: ")
      immobile.bathrooms = prompt("Qual é a quantidade de banheiros: ")
      immobile.garege = prompt("Possui garagem(Sim/Nao): ")

      const confirmacao = confirm("Deseja salvar essa propriedade:" + 
      "\nproprietário: " + immobile.name +
      "\nquartos: " + immobile.bedrooms +
      "\nbanheiros " + immobile.bathrooms +
      "\ngaragem: " + immobile.garege)

      if(confirmacao) {
        properties.push(immobile)
      }
      
      break
    case"2":
      for(let i = 0; i < properties.length; i++) {
        showProperties += "\nImovel(" + (i+1) + ") Propietario: " + properties[i].name
      }
      alert("Os imoveis cadastrados sao estes: \n" + showProperties)
      break
    case"3":
      alert("Encerrando...")
      break
    default:
      alert("Opcao inválida")
      break
  }

} while(menu !== "3")
