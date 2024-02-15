const Account = require("./Account.js");

class User extends Account{
  static #accountNumber = '0123-000000'
  static #accumulatorAccountNumber = 0

  constructor(fullName, email) {
    super()
    this.name = fullName
    this.email = email,
    this.account = User.#generateAccountNumbers()
  }

  static #generateAccountNumbers() {
    User.#accumulatorAccountNumber += 1
    return User.#accountNumber.concat(User.#accumulatorAccountNumber)
    
  }
}

module.exports = User