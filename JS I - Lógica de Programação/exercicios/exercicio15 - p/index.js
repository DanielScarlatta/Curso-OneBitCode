const vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
    //1. nome, vaga, (x) candidatos
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal += " (" + vaga.cadidatos.length + " candidatos)\n"
    return textoFinal
  }, "")
  alert(vagasEmTexto)
}

function novaVaga() {
  const nome = prompt("Informe um nome para a vaga: ")
  const descricao = prompt("Informe uma descriçao para a vaga: ")
  const dataLimite = prompt("Infome uma data limite (dd/mm/aaaa) para a vaga: ")

  const confirmacao = confirm("Deseja criar uma nova vaga com essas informaçoes?\n" +
  "\nNome: " + nome +
  "\nDescricao: " + descricao +
  "\nData limite: " + dataLimite)

  if(confirmacao) {
    const novaVaga = {nome, descricao, dataLimite, cadidatos: [] }
    vagas.push(novaVaga)
    alert("Vaga Criada.")
  }
}

function exibirVaga() {
  const indice = prompt("Informe o indice da vaga em que deseja exibir: ")
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.cadidatos.reduce(function (textoFinal, candidato) {
    return textoFinal += "\n - " + candidato
  }, "")
  alert(
    "\nVaga nº " + indice + 
    "\nNome: " + vaga.nome +
    "\nDescriçao " + vaga.descricao +
    "\nData limite " + vaga.dataLimite +
    "\nQuantidade de candidatos: " + vaga.cadidatos.length +
    "\nCandidatos inscritos: " + candidatosEmTexto
  )
}

function inscreverCandidato() {
  const candidato = prompt("Qual é o nome do candidato: ")
  const indice = prompt("Informe o indice da vaga para cadastro: ")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
    "Nome: " + vaga.nome +
    "\nDescriça: " + vaga.descricao +
    "\nData limite: " + vaga.dataLimite
    )
  if(confirmacao) {
    vaga.cadidatos.push(candidato)
    alert("Inscriçao realizada.")
  }
}

function excluirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja excluir: ")
  const vaga = vagas[indice]

  const confirmacao = confirm("Deseja excluir a vaga " + indice + "?\n" +
    "Nome: " + vaga.nome +
    "\nDescriça: " + vaga.descricao +
    "\nData limite: " + vaga.dataLimite
  )
    
  if(confirmacao) {
    vagas.splice(indice, 1)
    alert("Vaga excluida")
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego" +
    "\n\nEscolha uma das opções" +
    "\n1. Listar vagas disponíveis" +
    "\n2. Criar uma nova vaga" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um(a) candidato(a)" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair"
  )
  return opcao
}

function executar() {
  let opcao = ""
  do {
    opcao = exibirMenu()

    switch (opcao) {
      case "1":
        listarVagas()
        break
      case "2":
        novaVaga()
        break
      case "3":
        exibirVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
        break
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida.")
    }
  } while (opcao !== "6");
}

executar()