const Installment = require("./Installment.js")

class loans {
  static #fees = null

  constructor(loanValue, periodOfMonths) {
    this.loanValue = loanValue,
    this.periodOfMonths = periodOfMonths,
    this.date = new Date(),
    this.loanInstallments = []
  }

  static get readFeesValue() {
    return loans.#fees
  }

  static set whiteFeesValue(newFeesValue) {
    loans.#fees = newFeesValue
  }

  #calculateTheInstallments() {
    const installment = new Installment()
  }
}

module.exports = loans