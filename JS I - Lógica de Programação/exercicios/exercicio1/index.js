let primeiroNome = prompt("Qual é seu primeiro nome: ")
let sobreNome = prompt("Qual é seu sobrenome: ")
let areaEstudo = prompt("Qual é sua area de estudo ")
let anoNascimento = prompt("Qual é seu ano de nascimento:  ")
const anoAtual = 2023

let nomeCompleto = primeiroNome + " " + sobreNome
let idade = anoAtual - anoNascimento

alert("Seu nome é "+ nomeCompleto + " " + "estudante de " + areaEstudo + " e tem " + idade + " anos")