const User = require("./services/User.js")

class App {
  static #storage = {
    Users: []
  }

  static #findUser(email) {
    return App.#storage.Users.find((user) => user.email === email)
  }
  
  static createUser(fullName, email) {
    if(!App.#findUser(email)) {
      const newUser = new User(fullName, email)
      App.#storage.Users.push(newUser)
    }
  }

  static findUserByemail(email) {
    return App.#storage.Users.find((user) => user.email === emai)
  }

  
}

module.exports = App