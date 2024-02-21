class Wallet {
  #amout
  #username 
  constructor() {
    this.#amout = 100.99 *100
  }

  get amount() {
    return this.#amout / 100
  }

  set username(newUsername) {
    if(typeof newUsername === 'string') {
      return this.#username = newUsername
    } else {
      console.log('O valor informado não é uma string')
    }
  }

  get username() {
    return this.#username
  }
}


const myWallet = new Wallet()

console.log(myWallet.amount)

myWallet.username = 'true'
console.log(myWallet.username)