const Installment = require("./Installment.js")

class loans {
  static #fees = 0.27

  constructor(loanValue, periodOfMonths) {
    this.loanValue = loanValue,
    this.periodOfMonths = periodOfMonths,
    this.date = new Date(),
    this.loanInstallments = [],
    this.#calculateTheInstallments(loanValue, periodOfMonths, loans.#fees)
  }

  static get readFeesValue() {
    return loans.#fees
  }

  static set whiteFeesValue(newFeesValue) {
    loans.#fees = newFeesValue
  }

  #calculateTheInstallments(loanValue, periodOfMonths, fees) {
    const installmentValueWithFee = (loanValue*fees)/periodOfMonths

    for(let i=1; i<= this.periodOfMonths; i++) {
      const installment = new Installment(installmentValueWithFee, i)
      this.loanInstallments.push(installment)
    }
  }

  payInstallment() {
    if(this.loanInstallments !== null) {
      const array = []

      array.push(this.loanInstallments.filter((portion) => portion.status === false))

      this.loanInstallments.forEach((portion) => {
        if(portion.installmentQuantities == array[0][0].installmentQuantities) {
          portion.status = true
        }
      })
    }
  }
}

module.exports = loans