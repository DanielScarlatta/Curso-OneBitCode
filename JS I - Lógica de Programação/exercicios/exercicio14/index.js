let menu = ""
let base = ""
let height = ""
let side = ""
let biggerBase = ""
let minorBase = ""
let ray = ""
let resultado = ""

function triangleArea(base, height){
  return (base * height) / 2
}
function rectangleArea(base, heigth) {
  return base * heigth
}
function squareArea(side) {
  return side * side
}
function trapezeArea(biggerBase, minorBase, height) {
  return (biggerBase * minorBase) * height / 2
}
function circleArea(ray, pi) {
  return pi * (ray * ray)
}

do{ 
  menu = prompt("Sejá bem-vimdo ao sistema de calculadora geométrica\n" +
  "1- Calcular área do triângulo\n" +
  "2- Calcular área do retângulo\n" +
  "3- Calcular área do quadrado\n" +
  "4- Calcular área do trapézio\n" +
  "5- Calcular área do círculo\n" +
  "6- Encerrar o sistema\n")

  switch(menu) {
    case"1":
      //área do triângulo: base * height / 2
      base = parseFloat(prompt("Digite a base do triângulo: "))
      height = parseFloat(prompt("Digite a altura do triângulo: "))
      resultado = triangleArea(base, height)

      alert("A area do triângulo usando os valores \nbase: " + base + "\naltura: " + height + "\nResultado: " + resultado)
      break

    case"2":
      //área do retângulo: base * altura
      base = parseFloat(prompt("Digite a base do retângulo: "))
      height = parseFloat(prompt("Digite a altura do retângulo: "))

      alert("A area do retângulo usando os valores \nbase: " + base + "\naltura: " + height + "\nResultado: " + rectangleArea(base, height))
      break

    case"3":
      //área do quadrado: lado²
      side = parseFloat(prompt("Digite o lado para saber a area do quadrado: "))

      alert("A area do quadrado usando o valor \lado: " + side + "\nResultado: " + squareArea(side))
      break

    case"4":
      //área do trapézio: (base maior + base menor) * altura / 2
      biggerBase = parseFloat(prompt("Digite a base maior do trapézio: "))
      minorBase = parseFloat(prompt("Digite a base menor do trapézio: "))
      height = parseFloat(prompt("Digite o valor da altura do trapézio: "))
      resultado = trapezeArea(biggerBase, minorBase, height)

      alert("A area do trapézio usando os valor \n" + "Base maior: " + biggerBase + "\nBase menor: " + minorBase + "\nResultado: " + resultado)
      break
      
    case"5":
      //área do círculo: pi * raio² (considere pi = 3.14)
      ray = parseFloat(prompt("O pi será considerado 3.14\n" + "Digite o raio do circulo: "))
      const pi = 3.14

      alert("A area do circulo usando o Raio: " + ray + " PI: " + pi + "\nResultado: " + circleArea(ray, pi))
      break

    case"6":
      alert("Encerrando...")
      break

    default:
      alert("Opcao invalida")
      break
  }

}while(menu !== "6")