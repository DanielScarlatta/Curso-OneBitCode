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

const formAction = document.getElementById("formAction")

formAction.addEventListener("submit", function (ev) {
    ev.preventDefault()

    if(ev.submitter.id == "buttonAddTec") {
        //criar tec
        createTechnology()


    } else if (ev.submitter.id == "buttonSend") {
        //envia o form para o arry
    }
})

function createTechnology() {
    const technology = document.getElementById("technology")
    

}


