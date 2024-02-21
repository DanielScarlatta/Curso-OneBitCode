const Installment = require("./Installment.js")

class Loan {
  static #fees = 0.65

  constructor(value, installments) {
    this.value = value
    this.installments = []
    for(let i=0; i<= installments; i++) {
      this.installments.push(new Installment((value * Loan.#fees)/installments, i))
    }
    this.date = new Date()
  }

  static get readFees() {
    return Loan.#fees
  }

  static writeFees(value) {
    Loan.#fees = value
  }
}
module.exports = Loan