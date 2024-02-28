function execute() {
  return new Promise((resolved, reject) => {
    console.log('A promise está sendo executada...')
    // reject('Senha invalida')
    setTimeout(() => {
      console.log('Resolvendo a promise')
      resolved(`O resultado é ${1+2}`)
    }, 1000)
  })
}

execute()
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log('Ocorreu um erro na aplicação ' + err)
  })
  .finally(() => {
    console.log('Exit...')
  })