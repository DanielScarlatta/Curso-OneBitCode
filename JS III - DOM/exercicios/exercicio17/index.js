const form = document.getElementById("listTechnology")
const bottonAddTec = document.getElementById("addTechnology")
let cont = 0

function createTechnologyList(event) {
    const ul = document.getElementById("tecList")
    const li = document.createElement("li")
    li.id = "tecLi-" + cont

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
    timeExperience1.name = "radioExperienceTime"
    timeExperience1.value = "0-2 anos"

    const labelTimeExperience1 = document.createElement("label")
    labelTimeExperience1.innerText = "0-2 anos"

    const timeExperience2 = document.createElement("input")
    timeExperience2.type = "radio"
    timeExperience2.name = "radioExperienceTime"
    timeExperience2.value = "3-4 anos"

    const labelTimeExperience2 = document.createElement("label")
    labelTimeExperience2.innerText = "3-4 anos"

    const timeExperience3 = document.createElement("input")
    timeExperience3.type = "radio"
    timeExperience3.name = "radioExperienceTime"
    timeExperience3.value = "5+ anos"

    const labelTimeExperience3 = document.createElement("label")
    labelTimeExperience3.innerText = "5+ anos"

    const space1 = document.createElement("br")

    const labelBtnDelete = document.createElement("label")
    labelBtnDelete.innerText = "Excluir tecnologia: "

    const btnDelete = document.createElement("input")
    btnDelete.type = "button"
    btnDelete.value = "Exluir tecnologia"

    li.append(labelName, nameTec, space, labelTime, timeExperience1, labelTimeExperience1, timeExperience2, labelTimeExperience2 ,timeExperience3, labelTimeExperience3, space1, labelBtnDelete, btnDelete)
    ul.appendChild(li)

    cont++
}


bottonAddTec.addEventListener("click", createTechnologyList)
