/*
-criar uma pagina que vai ter um formulario com as informações abaixo
* labelName, inputName >>> vai colocar o nome no programador
*buttonAddTec >>> vai criar um formulario (div) com as especificações de tecnologia
*labelNameTec, buttonRadioTec, buttonRemoveTec >>> fomulario(div) que vai ser criado
*buttonEnviar >>> pega as informações de todas as tecnologias e cria um objeto dentro de um array que ira armazenar as informações do programador apos isso ele limpa o formulario

-Usar eventos criados apenas por javaScript

labelName, inputName : buttonAddTec : buttonEnviar>
labelNameTec, buttonRadioTec, buttonRemoveTec

*/

function createTechnology() {
    const technology = document.getElementById("technology")
    const div = document.createElement("div")
    
    const br = document.createElement("br")
    const labelNameTec = document.createElement("label")
    labelNameTec.innerText = "Nome da tecnologia: "

    const inputNameTec = document.createElement("input")
    inputNameTec.type = "text"
    
    div.append(br, labelNameTec, inputNameTec)
    
    const labelRadioTec = document.createElement("label")
    labelRadioTec.innerText = "Tempo de experiencia: "

    const b


}

const formAction = document.getElementById("formAction")

formAction.addEventListener("submit", function (ev) {
    ev.preventDefault()

    if(ev.submitter.id == "buttonAddTec") {
        //criar tec
        alert("Criando campo de tecnologia")
        createTechnology()

    } else {
        //envia o form para o arry
        alert("Enviado com sucesso")
    }
})


