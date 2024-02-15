
module.exports = Account
class Account {
  #balance

  constructor(user) {
    this.owner = user
    this.#balance = 0
    this.deposit = []
    this.loans = []
    this.transfer = []
  }

  get balance() {
    return this.#balance
  }

  addDeposit(deposit) {
    this.#balance += deposit.value
    this.deposit.push(deposit)
  }

  addLoans(loan) {
    this.#balance += loan.value
    this.loans.push(loan)
  }

  addTransfer(transfer) {
    
  }

 }