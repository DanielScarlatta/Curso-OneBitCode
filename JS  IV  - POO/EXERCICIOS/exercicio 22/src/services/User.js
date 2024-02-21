const Account = require("./Account.js")

class User {
  constructor(fullName, email) {
    this.fullName = fullName
    this.email = email
    this.account = new Account(this)
  }
}

module.exports = User