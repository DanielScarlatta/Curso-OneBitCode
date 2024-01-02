const resultInput = document.getElementById("result")

function calculate(input) {
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove("error")

  console.log("calculado!")
}

export {calculate}



