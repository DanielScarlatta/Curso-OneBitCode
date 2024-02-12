class Installment {
  constructor(loanValue, numberOfInstallment) {
    this.installmentValue = loanValue;
    this.installmentQuantities = numberOfInstallment;
    this.status = false;
  }
}

module.exports = Installment;
