let menu = ""
let queueOfPatients = []
let positionPatientsName = []
let addPatients = ""
let firstPatient = ""

// menu - 1ºlista de pacientes - 2ºNovo paciente - 3ºConsultar paciente - 4ºSair

do {
  menu = prompt(
  "Sejá bem-vindo ao sistema de fila do hospital!" +
  "\n1º Fila de pacientes " +
  "\n2º Novo paciente " +
  "\n3º Chamar paciente " +
  "\n4º Encerrar sistema ")

  switch(menu){
    case"1":
      if(queueOfPatients.length == positionPatientsName.length) {
        alert("Lista de pacientes em espera: \n\n" + positionPatientsName.join('\n'))
      }else {
        positionPatientsName = []
        for(let i = 0; i < queueOfPatients.length; i++) {
          positionPatientsName[i] = (i+1) + "º " + queueOfPatients[i]
        }
        alert("Lista de pacientes em espera: \n\n" + 
        positionPatientsName.join('\n'))
      }
      break

    case"2":
      addPatients = prompt("Qual é o nome do paciente: ")
      queueOfPatients.push(addPatients)
      alert("O paciente foi adicionado com sucesso na fila")
      break

    case"3":
      if(queueOfPatients.length !== 0) {
        firstPatient = queueOfPatients.shift()
        alert("O paciente " + firstPatient + " foi chamado para ser atendido por nosso médico")
      }else{
        alert("Nao existem pacientes cadastrados na fila no momento")
      }
      break

    case"4":
      alert("Encerrando o sistema")
      break

    default:
      alert("Selecione uma opçao valida!")
      break
  }

}while(menu !== "4")