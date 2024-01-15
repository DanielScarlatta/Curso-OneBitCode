const book = {
  title: 'Eragon',
  author: {name: 'Felipe', },
  pages: 468,
  published: true,
  inStock: 200,
  tags: ['fastasy', 'adventure', 'medieval'],
  addOnStock(quantity) {
    this.inStock += quantity
  },
  
}

function Book(title, author, tags) {

}

console.log(book)

book.addOnStock(20)

console.log(book.inStock)

book.save = function() {
  // salva no banco de dados
}

console.log(book)