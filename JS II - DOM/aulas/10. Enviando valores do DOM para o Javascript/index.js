function register(element) {
  const userName = element.children.username.value
  const password = element.children.password.value
  const passwordConfirm = element.children.passwordConfirmation.value

  if(password === passwordConfirm) {
    alert("Usuario " + userName +" cadastrado")
  } else {
    alert("Senha nao sao iguais")
  }
  
  console.log(userName, password, passwordConfirm)

}