const Loan = require("./Loan.js")

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
    if(transfer.toUser.email === this.owner.email){
      this.#balance += transfer.value
      this.transfer.push(transfer)
    }
    if(transfer.fromUser.email === this.owner.email) {
      this.#balance -= transfer.value
      this.transfer.push(transfer)
    }
  }

  static chargeLoanFees(newFees) {
    Loan.writeFees(newFees)
  }
 }

module.exports = Account