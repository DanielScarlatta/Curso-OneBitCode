class User {
  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password) {
    console.log(email, this.email)
    email === this.email && password === this.password ? console.log('Usuario entrou') : console.log('Usuario Bloqueado') 
  }
}

const daniel = new User('Daniel Dias Scarlatta', 'daniel.scarlatta@gmail.com', 123)

console.log(daniel)
daniel.login('daniel.scarlatta@gmail.com', 123)
