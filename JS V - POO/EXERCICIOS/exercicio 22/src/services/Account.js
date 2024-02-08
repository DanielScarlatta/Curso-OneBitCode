const Deposit = require("./Deposit")

class Account {
  #storage = {
    balance: null,
    dataDepositBank: [],
    dataLoansBank: [],
    outputDataTransferBank: [],
    inputDataTransferBank: [],
  }

  get #readBalanceValue() {
    return this.#storage.balance
  }

  newAccountDeposit(depositValue) {
    const newDeposit = new Deposit(depositValue)
    this.#storage.balance += newDeposit.depositValue
    this.#storage.dataDepositBank.push(newDeposit)
  }

  newAccountLoans(loanValue, periodOfMonths) {
    
  }
}

module.exports = Account