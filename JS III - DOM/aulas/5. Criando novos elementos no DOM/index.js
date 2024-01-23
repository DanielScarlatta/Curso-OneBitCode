/*function addInput() {
    const ul = document.getElementById("inputs")

    const newLi = document.createElement("li")
    newLi.className = "list-item"
    newLi.innerText = "Novo input: "

    const newInput = document.createElement("input")
    newInput.type = "text"
    newInput.name = "input"
    
    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}*/

function addInput() {
    const ul = document.getElementById("inputs")

    const newLi = document.createElement("li")
    const comunicacao = document.getElementById("requery")
    newLi.name = "input-name"
    newLi.className = comunicacao.value
    newLi.innerText = comunicacao.value
    console.log(newLi)
    
    ul.appendChild(newLi)

}




