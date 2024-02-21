const form = document.getElementById("listTechnology")
const ul = document.getElementById("tecList")
const buttonAddTec = document.getElementById("addTechnology")
const initialInputs = document.getElementById("initialInputs")
const developers = []
let cont = 0

function createTechnologyList() {
    const li = document.createElement("li")
    li.id = "tecLi-" + cont
    li.className = "liTotal"

    const labelName = document.createElement("label")
    labelName.innerText = "Tecnologia: "

    const nameTec = document.createElement("input")
    nameTec.type = "text"
    nameTec.name = "nameTec"
    nameTec.id = "tecName-" + cont

    const space = document.createElement("br")

    const labelTime = document.createElement("label")
    labelTime.innerText = "Tempo de experiencia: "

    const timeExperience1 = document.createElement("input")
    timeExperience1.type = "radio"
    timeExperience1.name = "radioExperienceTime-" + cont
    timeExperience1.value = "0-2 anos"

    const labelTimeExperience1 = document.createElement("label")
    labelTimeExperience1.innerText = "0-2 anos"

    const timeExperience2 = document.createElement("input")
    timeExperience2.type = "radio"
    timeExperience2.name = "radioExperienceTime-" + cont
    timeExperience2.value = "3-4 anos"

    const labelTimeExperience2 = document.createElement("label")
    labelTimeExperience2.innerText = "3-4 anos"

    const timeExperience3 = document.createElement("input")
    timeExperience3.type = "radio"
    timeExperience3.name = "radioExperienceTime-" + cont
    timeExperience3.value = "5+ anos"

    const labelTimeExperience3 = document.createElement("label")
    labelTimeExperience3.innerText = "5+ anos"

    const space1 = document.createElement("br")

    const labelBtnDelete = document.createElement("label")
    labelBtnDelete.innerText = "Excluir tecnologia: "

    const btnDelete = document.createElement("input")
    btnDelete.type = "button"
    btnDelete.className = "btnDeleteTec"
    btnDelete.value = "Exluir tecnologia"

    btnDelete.addEventListener("click", function (ev) {
        ul.removeChild(ev.currentTarget.parentNode)
    })

    li.append(labelName, nameTec, space, labelTime, timeExperience1, labelTimeExperience1, timeExperience2, labelTimeExperience2, timeExperience3, labelTimeExperience3, space1, labelBtnDelete, btnDelete)
    ul.appendChild(li)

    cont++
}


initialInputs.addEventListener("submit", function (ev) {
    ev.preventDefault()
    const fullname = document.getElementById("fullname")
    const liList = document.querySelectorAll(".liTotal")
    const arry = []

    liList.forEach(function (row) {
        const nameTec = document.querySelector("#" + row.id + " input[name='nameTec']").value
        const radioEx = document.querySelector("#" + row.id + " input[type='radio']:checked").value

        arry.push({
            nameTec: nameTec,
            tempoEx: radioEx
        })
    })

    developers.push({
        nameDev: fullname.value,
        tec: arry
    })

    fullname.value = ""
    liList.forEach(function (row) {
        ul.removeChild(row)
    })

    console.log(developers)
})

buttonAddTec.addEventListener("click", createTechnologyList)