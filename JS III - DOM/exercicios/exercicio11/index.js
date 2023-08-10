
function climbPlayerButton() {
    const positionPlayerInput = document.getElementById("positionPlayer")
    const namePlayerInput = document.getElementById("namePlayer")
    const numberShirtInput = document.getElementById("numberShirt")
    
    const playerList = document.getElementById("player-list")
    const ul = document.createElement("ul")

    const liPosition = document.createElement("li")
    liPosition.innerText = "Posição: " +  positionPlayerInput.value
    liPosition.className = "liOutput"
    ul.appendChild(liPosition)

    const liName = document.createElement("li")
    liName.innerText = "Nome: " +  namePlayerInput.value
    liName.className = "liOutput"
    ul.appendChild(liName)

    const liShirt = document.createElement("li")
    liShirt.innerText = "Camisa: " +  numberShirtInput.value
    liShirt.className = "liOutput"
    ul.appendChild(liShirt)

    ul.className = numberShirtInput.value
    playerList.appendChild(ul)

    
}
