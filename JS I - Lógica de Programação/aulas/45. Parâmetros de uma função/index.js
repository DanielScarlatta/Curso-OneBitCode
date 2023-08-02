// let numero = parseFloat(prompt("Digite um valor: "))

// function dobro() {
//   numero =  numero*2

// }
// console.log(numero)
// dobro()
// console.log(numero)


//-----------------------------------------------------------------------
/*
function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome, // nome: nome
    email,
    senha,
    tipo
  }
  console.log(usuario)
}

function novoUsuario(nome, tipo = "admin", email, senha) {
  const usuario = {
    nome, // nome: nome
    email,
    senha,
    tipo
  }
  console.log(usuario)
}

criarUsuario("daniel", "daniel@gmail.com", "123" )

novoUsuario("daniel", "daniel@gmail.com", "123" )*/

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
  //...
}

function objetoComoParametro(usuario) {
  //...
  usuario.nome
  usuario.email
  usuario.senha

  console.log(usuario)
}

muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

const dadosDoUsuario = {
  nome: "daniel",
  email: "daniel@@",
  senha: "1234345"
}

objetoComoParametro(dadosDoUsuario)
