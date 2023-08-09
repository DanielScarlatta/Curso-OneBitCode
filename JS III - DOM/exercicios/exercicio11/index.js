function clearClimbplayer() {
    const optionButton = document.getElementById("optionButton")
    const ul = document.getElementsByTagName("ul")

    optionButton.removeChild(ul)

}

function climbplayer() {

    const optionButton = document.getElementById("optionButton")

    const ul = document.createElement("ul")

    const liPosition = document.createElement("li")
    liPosition.innerText = "Posição do jogador: "
    const positionPlayer = document.createElement("input")
    positionPlayer.type = "text"
    positionPlayer.name = "positionPlayer"
    positionPlayer.className = "positionPlayer"
    liPosition.appendChild(positionPlayer)
    ul.appendChild(liPosition)

    const liName = document.createElement("li")
    liName.innerText = "Nome do jogador: "
    const namePlayer = document.createElement("input")
    namePlayer.type = "text"
    namePlayer.name = "namePlayer"
    namePlayer.className = "namePlayer"
    liName.appendChild(namePlayer)
    ul.appendChild(liName)

    const liNumber = document.createElement("li")
    liNumber.innerText = "Numero da camisa" 
    const numberShirt = document.createElement("input")
    numberShirt.type = "text"
    numberShirt.name = "numberShirt"
    numberShirt.className = "numerShirt"
    liNumber.appendChild(numberShirt)
    ul.appendChild(liNumber)

    const buttonConfirm = document.createElement("button")
    buttonConfirm.innerText = "Escalar"
    buttonConfirm.name = "climbButton"
    buttonConfirm.className = "climbButton"
    ul.appendChild(buttonConfirm)

    optionButton.appendChild(ul)
}