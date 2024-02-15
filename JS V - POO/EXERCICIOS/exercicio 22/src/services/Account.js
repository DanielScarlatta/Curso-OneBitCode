const Deposit = require("./Deposit.js");
const loans = require("./Loan.js");
const Transfer = require("./Transfer.js");

class Account {
  #accountStorage = {
    balance: null,
    dataDepositBank: [],
    dataLoansBank: [],
    DataTransferBank: [],
  };

  get readBalanceValue() {
    return this.#accountStorage.balance;
  }

  newAccountDeposit(depositValue) {
    const newDeposit = new Deposit(depositValue);
    this.#accountStorage.balance += newDeposit.depositValue;
    this.#accountStorage.dataDepositBank.push(newDeposit);
  }

  get readDataDepositBank() {
    return this.#accountStorage.dataDepositBank;
  }

  newAccountLoans(loanValue, periodOfMonths) {
    const newLoan = new loans(loanValue, periodOfMonths);
    this.#accountStorage.dataLoansBank.push(newLoan);
    this.#accountStorage.balance += loanValue;
  }

  get readDataLoansBank() {
    return this.#accountStorage.dataLoansBank;
  }

  newAccountTransfer(valueTranfer, outputAccountNumber) {
    
  }
}

module.exports = Account;
