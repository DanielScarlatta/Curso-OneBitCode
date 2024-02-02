class User {
  static #hash = '00000000'
  constructor(fullName, email) {
    this.fullName = fullName
    this.email = email
    
    
  }

  #genereteHash() {
    User.#hash.replace()
    return User.#hash
  }

}

module.exports = User