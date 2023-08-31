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
const arry = []
const technology = document.getElementById("technology")
const formAction = document.getElementById("formAction")
let indice = 0

function createTechnology() {
    const div = document.createElement("div")
    
    const br = document.createElement("br")
    const labelNameTec = document.createElement("label")
    labelNameTec.innerText = "Nome da tecnologia: "

    const inputNameTec = document.createElement("input")
    inputNameTec.type = "text"
    inputNameTec.id = "inputNameTec" + indice
    
    div.append(br, labelNameTec, inputNameTec)

    const space = document.createElement("br")//faz a quedra da linha
    const labelRadioTecOne = document.createElement("label")
    labelRadioTecOne.innerText = "Tempo de experiencia: "

    const inputRadioTecOne = document.createElement("input")
    inputRadioTecOne.type = "radio"
    inputRadioTecOne.name = "experienceTec" + indice
    inputRadioTecOne.className = "experienceTec" + indice
    inputRadioTecOne.value = "0-2 anos"
    const labelEx = document.createElement("label")
    labelEx.innerText = "0-2 anos"

    div.append(space, labelRadioTecOne, inputRadioTecOne, labelEx)

    const inputRadioTecTwo = document.createElement("input")
    inputRadioTecTwo.type = "radio"
    inputRadioTecTwo.name = "experienceTec" + indice
    inputRadioTecTwo.className = "experienceTec" + indice
    inputRadioTecTwo.value = "3-4 anos"
    const labelEx2 = document.createElement("label")
    labelEx2.innerText = "3-4 anos"

    div.append(inputRadioTecTwo, labelEx2)

    const inputRadioTecThree = document.createElement("input")
    inputRadioTecThree.type = "radio"
    inputRadioTecThree.name = "experienceTec" + indice
    inputRadioTecThree.className = "experienceTec" + indice
    inputRadioTecThree.value = "5+ anos"
    const labelEx3 = document.createElement("label")
    labelEx3.innerText = "5+ anos"

    div.append(inputRadioTecThree, labelEx3)

    const space4 = document.createElement("br")
    const buttonRemoveTec = document.createElement("input")
    buttonRemoveTec.type = "submit"
    buttonRemoveTec.value = "Excluir tecnologia"

    indice++

    div.append(space4 ,buttonRemoveTec)
    technology.appendChild(div)
}

technology.addEventListener("submit", function (ev) {
    ev.preventDefault()

    const buttonTecListener = ev.submitter.closest("div")

    technology.removeChild(buttonTecListener)

})

function sendToArry() {
    const listDiv = document.querySelectorAll("div")
    console.log(listDiv)

    listDiv.forEach(function (valor) {
        console.log(valor.children[2].value)
        
        arry.push([{
            tec: valor.children[2].value,
            
        }])
    })
    
    console.log(arry)
}


formAction.addEventListener("submit", function (ev) {
    ev.preventDefault()

    if(ev.submitter.id == "buttonAddTec") {
        //criar tec
        createTechnology()

    } else {
        //envia o form para o arry
        
        sendToArry()
    }
})



