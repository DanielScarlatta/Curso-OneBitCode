const formAction = document.getElementById("formAction")
const technology = document.getElementById("technology")
let cont = 0

formAction.addEventListener("submit", function (ev) {
    ev.preventDefault()

    const div = document.createElement("div")
    div.id = cont
    div.name = "tecnoDiv"

    //Nome da tecnologia
    const space = document.createElement("br")
    const labelTecno = document.createElement("label")
    labelTecno.innerHTML = "Nome: "
    labelTecno.name = "name"
    const inputTecno = document.createElement("input")
    inputTecno.type = "text"
    inputTecno.name = "name"

    div.append(space, labelTecno, inputTecno)

    //Grupo de botoes
    const space1 = document.createElement("br")
    const radioOptionsLabel = document.createElement("label")
    radioOptionsLabel.innerText = "Tempo de experiencia: \n"

    const radioOptionsInput1 = document.createElement("input")
    radioOptionsInput1.type = "radio"
    radioOptionsInput1.name = "radioOptions"
    const radioOptionsLabel1 = document.createElement("label")
    radioOptionsLabel1.innerText = "0-2 anos\n"

    div.append(space1, radioOptionsLabel, radioOptionsInput1, radioOptionsLabel1)

    const radioOptionsInput2 = document.createElement("input")
    radioOptionsInput2.type = "radio"
    radioOptionsInput2.name = "radioOptions"
    const radioOptionsLabel2 = document.createElement("label")
    radioOptionsLabel2.innerText = "3-4 anos \n"

    div.append(radioOptionsInput2, radioOptionsLabel2)

    const radioOptionsInput3 = document.createElement("input")
    radioOptionsInput3.type = "radio"
    radioOptionsInput3.name = "radioOptions"
    const radioOptionsLabel3 = document.createElement("label")
    radioOptionsLabel3.innerText = "5+ anos \n"

    div.append(radioOptionsInput3, radioOptionsLabel3)
    technology.appendChild(div)

    const buttonRemove = document.createElement("input")
    buttonRemove.type = "button"
    buttonRemove.id = cont
    buttonRemove.value = "Apagar linha"


    div.appendChild(buttonRemove)
    cont++
})

technology.addEventListener("submit", function (ev) {
    ev.preventDefault()
    const divRemove = ev.target.children //pegando os elementos div(temos que selecionar a div para realizar a exclução) 

    console.log(
        divRemove
    )

})

//podemos criar diretamente um remove elemente no botao em vez de criar outra function


