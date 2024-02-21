const listPlayers = []

function climbPlayerButton() {
    const positionPlayer = document.getElementById("positionPlayer")
    const namePlayer = document.getElementById("namePlayer")
    const shirtNumber = document.getElementById("numberShirt")

    const confirmAction = confirm("Deseja escalar o jogador? \n" + 
    "\nPosiçao: " + positionPlayer.value +
    "\nNome: " + namePlayer.value +
    "\nCamiseta: " + shirtNumber.value)

    if(confirmAction) {
        listPlayers.push({position: positionPlayer.value, name: namePlayer.value, shirt: shirtNumber.value})

        positionPlayer.value = ""
        namePlayer.value = ""
        shirtNumber.value = ""
        showPlayer()
    }
}

function showPlayer() {
    const playerList = document.getElementById("player-list")
    const ul = document.createElement("ul")

    const liPosition = document.createElement("li")
    liPosition.innerText = "Posiçao: " + listPlayers[listPlayers.length - 1].position
    ul.appendChild(liPosition)

    const liName = document.createElement("li")
    liName.innerText = "Nome: " + listPlayers[listPlayers.length - 1].name
    ul.appendChild(liName)

    const liShirt = document.createElement("li")
    liShirt.innerText = "Camisa: " + listPlayers[listPlayers.length - 1].shirt
    ul.id = listPlayers[listPlayers.length - 1].shirt
    ul.appendChild(liShirt)

    ul.appendChild(document.createElement("br"))
    playerList.appendChild(ul)
}

function removePlayerButton() {
    const playerList = document.getElementById("player-list")
    const numberShirtRemove = document.getElementById("numberShirtRemove")
    const ul = document.getElementById(numberShirtRemove.value)

    listPlayers.forEach(function (data, indice) {
        if(data.shirt == numberShirtRemove.value) {
            const confirmAction = confirm("Deseja excluir o jagador? " +
            "\n\nPosiçao: " + data.position +
            "\nNome: " + data.name +
            "\nCamiseta: " + data.shirt)

            if(confirmAction) {
                listPlayers.splice(indice, 1)
                playerList.removeChild(ul)

                numberShirtRemove.value = ""
            }
        }
    })
}