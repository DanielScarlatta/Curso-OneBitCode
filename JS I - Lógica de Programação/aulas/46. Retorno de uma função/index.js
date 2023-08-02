function calcularMedia(a, b) {
  const media = (a+b) / 2
  return media
}

const resultado = calcularMedia(8, 4)
console.log(resultado)

function ola() {
  let texto = "..."
  return texto
  texto = "olá, mundo!"
}

console.log(ola())

function maioridade(idade) {
  if(idade >= 18) {
    return "Voce é maior de idade"
  } else {
    return "Voce é menor de idade"
  }
}

console.log(maioridade(20))

function criarProduto(nome, preco){
  const produto = {
    nome, // nome: nome
    preco, //preco: preco
    estoque: 1
  }
  return produto
}


const notebook = criarProduto("Notebook i3 10 geraçao 8Gb", 2500)

console.log(notebook)
console.log(notebook)