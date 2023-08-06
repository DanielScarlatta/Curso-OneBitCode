// Sistema de Vagas de Emprego

listaDeVagas = []

let confirmacao = ""
let visualizar = 0
let list = ""
let menu = ""
do{
  menu = prompt("Sejá bem-vindo ao sistema de vagas de emprego \n" +
  "\n1 - Listar vagas disponíveis" +
  "\n2 - Criar uma nova vaga" + 
  "\n3 - Visualizar uma vaga" + 
  "\n4 - Inscrever um candidato em uma vaga" + 
  "\n5 - Excluir uma vaga" + 
  "\n6 - Sair do sistema")

  switch(menu){
    case"1":
      if(listaDeVagas.length === 0) {
        alert("Nao existem vagas cadastradas!")
      }else {
          listaDeVagas.forEach(function (elemento, indice){
            list += (indice + 1) + "º Vaga \nNome: " + elemento.nome + "\nCandidatos: " + elemento.candidatos.length + "\n\n"
        })
        alert(list)
      }  
      list = ""
      break
    case"2":
      const nomeVaga = prompt("Digite o nome da vaga: ")
      const descricao = prompt("Digite a descriçao da vaga: ")
      const data = prompt("Digite a data limite: ")

      confirmacao = confirm("Deseja criar esta vaga: \n\n" +
      "Nome: " + nomeVaga + "\nDescriçao: " + descricao + "\nData: " + data)

      if(confirmacao) {
        listaDeVagas.push({nome: nomeVaga, descricao: descricao, data: data, candidatos: []})
      }
      break
    case"3":
      visualizar = prompt("Digite o numero do indice da vaga: ")
      if(visualizar > listaDeVagas.length || visualizar == 0){
        alert("Indice invalido")
      } else {
        visualizar-- 
        alert("Segue as informaçoes da vaga selecionada: \n" +
        "\nNome: " + listaDeVagas[visualizar].nome +
        "\nDescriçao: "+ listaDeVagas[visualizar].descricao +
        "\nData limite: "+ listaDeVagas[visualizar].data + 
        "\nQuantidade de inscritos: "+ listaDeVagas[visualizar].candidatos.length +
        "\nCandidatos:" + listaDeVagas[visualizar].candidatos)
      }
      break
    case"4":
      nomeCadidato = prompt("Qual é o nome do candidato")
      visualizar = prompt("Digite o numero do indice da vaga: ")
      if(visualizar > listaDeVagas.length || visualizar == 0){
        alert("Indice invalido")
      } else {
        visualizar--
        let confirmacaoCandidato = confirm("Quer adicionar o cadidato: " + nomeCadidato + " na vaga abaixo: " +
        "\nNome: " + listaDeVagas[visualizar].nome +
        "\nDescriçao: "+ listaDeVagas[visualizar].descricao +
        "\nData limite: "+ listaDeVagas[visualizar].data)

        if(confirmacaoCandidato) {
          listaDeVagas[visualizar].candidatos.push(" " +nomeCadidato)
        }
      }
      break
    case"5":
      visualizar = parseFloat(prompt("Digite o numero do indice da vaga: "))
      if(visualizar > listaDeVagas.length || visualizar == 0){
        alert("Indice invalido")
      } else {
        visualizar-- 
        confirmacao = confirm("Deseja excluir a vaga abaixo: \n" +
        "\nNome: " + listaDeVagas[visualizar].nome +
        "\nDescriçao: "+ listaDeVagas[visualizar].descricao +
        "\nData limite: "+ listaDeVagas[visualizar].data + 
        "\nQuantidade de inscritos: "+ listaDeVagas[visualizar].candidatos.length +
        "\nCandidatos:" + listaDeVagas[visualizar].candidatos)

        if(confirmacao){
          listaDeVagas.splice(visualizar, 1)
        }
      }
      break
    case"6":
      alert("Encerrando o sistema...")
      break
    default:
      alert("Escolha uma opçao válida")
      break
      }
} while(menu !== "6")
