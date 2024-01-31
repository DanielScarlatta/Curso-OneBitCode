const Database = require('./Database') 
const Author = require('./services/Author')
const Book = require('./services/Book')
const Order = require('./services/Order')
const Poster = require('./services/Poster')
const User = require('./services/User')

module.exports = class App {
  static #database = new Database()

  createUser(name, email, password) {
    const user = new User(name, email, password)
    App.#database.saveUsers(user)
  }

  getUsers() {
    return App.#database.find('users')
  }

  createAuthor(name, nationality, bio) {
    const Author = new Author(name, nationality, bio)
    App.#database.saveAuthor(Author)
  }

  getAuthor() {
    return App.#database.find('authors')
  }

  createBook(title, synopsis, genre, pages, author, description, price,inStock) {
    const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
    App.#database.saveBook(book)
  }

  addBookToStock(bookName, quantity) {
    App.#database.addBooksToStock(bookName, quantity)
  }

  createPoster(name, description, height, width, price, inStock) {
    const poster = new Poster(name, description, height, width, price, inStock)
    App.#database.savePoster(poster)
  }

  addPosterToStock(posterName, quantity) {
    App.#database.addPostersToStock(posterName, quantity)
  }

  createOrder(items, user) {
    const order = new Order(items, user)
    App.#database.saveOrder(order)
    order.data.items.foreach(({ product, quantity}) => {
      if (product instanceof Book) {
        App.#database.removeBookToStock(product.name, quantity)
      } else if (product instanceof Poster) {
        App.#database.addPostersToStock(product.name, quantity)
      }
    })
  }

  getOrders() {
    return App.#database.find('orders')
  }

  showDatabase() {
    App.#database.showStorage()
  }
}

