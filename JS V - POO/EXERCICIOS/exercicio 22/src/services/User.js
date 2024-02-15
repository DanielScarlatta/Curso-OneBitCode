const Account = require("./Account")

module.exports = User
class User {
  constructor(fullName, email) {
    this.fullName = fullName
    this.email = email
    this.account = new Account(this)
  }

}