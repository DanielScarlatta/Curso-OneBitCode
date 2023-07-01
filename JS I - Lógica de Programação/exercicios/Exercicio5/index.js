const valor = parseFloat(prompt("Digite o valor em metros para ser convertido: "))
const medida = prompt("Digite a medida para ser convertida: \n milímetro (mm) \n centímetro (cm) \n decímetro (dm) \n decâmetro (dam) \n hectômetro (hm) \n quilômetro (km)")

let convertido = valor
let nome = ""

switch(medida){
  case"mm":
    convertido = valor*1000
    nome = "milímetro"
    break
  case"cm":
    convertido = valor*100
    nome = "centímetro"
    break
  case"dm":
    convertido = valor*10
    nome = "decímetro"
    break
  case"dam":
    convertido = valor/10
    nome = "decâmetro"
    break
  case"hm":
    convertido = valor/100
    nome = "hectômetro"
    break
  case"km":
    convertido = valor/1000
    nome = "quilômetro"
    break
  default:
    alert("Opçao inválida...")
} 

alert("O valor " + valor + " em metros foi convertido para " + nome + " e o valor ficou " + convertido)