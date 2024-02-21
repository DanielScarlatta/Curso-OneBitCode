class Account {
  #password;
  #balance;
  constructor(user) {
    this.email = user.email
    this.#password = user.password
    this.#balance = 0
  }

  getBalence(email, password) {
    if(this.#authenticate(email, password)) {
      return this.#balance
    } else {
      return "Email or Password incorrect"
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password 
  }
}

const user = {
  email: "daniel@gmail.com",
  password: "123"
}
const myAccount = new Account(user)

console.log(myAccount)

console.log(myAccount.getBalence('daniel@gmail.com', '1233'))