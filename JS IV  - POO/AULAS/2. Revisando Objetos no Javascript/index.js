// const book = {
//   title: 'Eragon',
//   author: {name: 'Felipe', age: 34},
//   pages: 468,
//   published: true,
//   inStock: 200,
//   tags: ['fastasy', 'adventure', 'medieval'],
//   addOnStock(quantity) {
//     this.inStock += quantity
//   },
//   save: function() {
//     //salva no banco de dados
//   }
// }

// console.log(book)

// book.addOnStock(20)

// console.log(book.inStock)

// book.save1 = function() {
//   // salva no banco de dados
// }

// console.log(book)

// -------------------------------------------------------------------------------

// function contrutora

// PascalCase
function Book(title, author, tags, pages) {
  this.title = title
  this.author = author
  this.tags = tags
  this.pages = pages
  this.published = false
  this.inStock = 0
  this.addOnStock = function(quantity) {
    this.inStock += quantity
  }
  this.save = function() {
    // salva no banco de dados
  }
}

const author = 'Felipe'
const title = 'Eragon'
const tags = ['fastasy', 'adventure', 'medieval']
const pages = 468


const eragon = new Book(title, author, tags, pages)

console.log(eragon)

const eldest = new Book('Eldest', 644, tags, author)

console.log(eldest)