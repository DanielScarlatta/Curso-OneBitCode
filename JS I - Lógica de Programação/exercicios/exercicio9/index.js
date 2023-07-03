const numero = parseFloat(prompt("Informe o numero para criar a tabuada: "))

let tabuada = ""

for(let i = 1; i <= 20; i++) {
  tabuada += numero + " X " + i + " = " + (numero*i) + "\n"
}

alert("O resultado da tabuada é: \n" + tabuada)