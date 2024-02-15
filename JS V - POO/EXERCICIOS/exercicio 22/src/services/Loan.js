
class Loan {
  static #fees = 1.08

  constructor(value, installments) {
    this.value = value
    this.installments = []
    
    this.date = new Date()
  }

  static get readFees() {
    return Loan.#fees
  }

  static set write(value) {
    Loan.#fees = value
  }


}