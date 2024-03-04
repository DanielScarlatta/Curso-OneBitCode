const Account = require("./services/Account.js");
const Deposit = require("./services/Deposit.js");
const Loan = require("./services/Loan.js");
const Transfer = require("./services/Transfer.js");
const User = require("./services/User.js");

class App {
  static #users = [];

  static findUser(email) {
    const user = this.#users.find((user) => user.email === email);
    return user ?? null;
  }

  static newUser(fullname, email) {
    const existUser = App.findUser(email);

    if (existUser) {
      return console.log("Ocorreu um erro ao criar o usuario");
    }

    const createUser = new User(fullname, email);
    this.#users.push(createUser);
  }

  static deposit(email, value) {
    const existUser = App.findUser(email);

    if (!existUser) {
      return console.log("Usuario não encontrado");
    }

    const deposit = new Deposit(value);
    existUser.account.addDeposit(deposit);
  }

  static transfer(fromUserEmail, toUserEmail, value) {
    const fromUser = App.findUser(fromUserEmail);
    const toUser = App.findUser(toUserEmail);
    if (fromUser && toUser) {
      const newTransfer = new Transfer(toUser, fromUser, value);
      console.log(newTransfer);
      toUser.account.addTransfer(newTransfer);
      fromUser.account.addTransfer(newTransfer);
    }
  }

  static takeLoan(email, value, numberOfInstallments) {
    const existUser = App.findUser(email);

    if (!existUser) {
      return console.log("Ocorreu um erro ao fazer o emprestimo");
    }

    const loan = new Loan(value, numberOfInstallments);
    existUser.account.addLoans(loan);
  }

  static chargeLoanFees(newFees) {
    Account.chargeLoanFees(newFees)
  }
}

module.exports = App;
