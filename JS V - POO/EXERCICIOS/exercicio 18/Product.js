class Product {
  constructor(name, description, price) {
    this.name = name
    this.decriotion = description
    this.price = price
    this.inStock = 0
  }
  addToStock(quantity) {
    this.inStock += quantity
  }
  calculateDiscount(percentage) {
    this.price = this.price - (this.price * (percentage/100))
  }
}

const bolacha = new Product('Bolacha', 'Bolacha de chocolate', 100)

console.log(bolacha)
bolacha.addToStock(20)
console.log(bolacha)
bolacha.calculateDiscount(10)
console.log(bolacha)