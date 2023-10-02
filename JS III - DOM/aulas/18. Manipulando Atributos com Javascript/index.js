const input = document.getElementById("input")

document.getElementById("value").addEventListener("click", function() {
  input.value = input.value === '' ? 'olá, mundo' : ''
  console.log(input.value) // comportamento dinamico, em tempo real
  console.log(input.getAttribute("value")) // pega o valor inicial de "value" que esta no html
})

document.getElementById("type").addEventListener("click", function() {
  //input.type = input.type !== 'radio' ? 'radio' : "text"

  input.setAttribute("type", "radio")
})

document.getElementById("placeholder").addEventListener('click', function() {
  //input.placeholder = "Digite algo..."

  input.setAttribute("placeholder", "falar algo...")
})

document.getElementById("disable").addEventListener('click', function() {
  input.setAttribute("disabled", !input.disabled)
})

document.getElementById("data").addEventListener("click", function() {
  //const data = input.dataset.something
  const data = input.dataset.somethingElse

  console.log("O valor do objeto data-something-else é: " + data)
  
  //input.dataset.something = "algum outro valor"
  input.dataset.somethingElse = "algum outro valor"

  console.log("O valor do objeto data-something-else agora é: " + input.dataset.somethingElse)

})
