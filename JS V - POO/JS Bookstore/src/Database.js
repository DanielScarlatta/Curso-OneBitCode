class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: []
  }

  find(key) {
    return this.#storage[key]
  }

  saveAuthor(author) {
    this.#storage.authors.push(author)
  }

  findBookByName(bookname) {
    return this.#storage.books.find(b => b.name === bookname)
  }

  saveBook(book) {
    const bookExists = this.findBookByName(book)
    if(!bookExists) {
      this.#storage.books.push(book)
    }
  }

  addBooksToStock(bookName, quantity) {
    const book = this.findBookByName(bookName)
    book?.addToStock(quantity)
  }

  removeBookToStock(bookName, quantity) {
    const book = this.findBookByName(bookName)
    book?.removeFromStock(quantity)
  }

  //---------Poster------------

  findPosterByName(Postername) {
    return this.#storage.posters.find(p => p.name === Postername)
  }

  savePoster(poster) {
    const posterExists = this.findPosterByName(poster)
    if(!posterExists) {
      this.#storage.poster.push(poster)
    }
  }

  addPostersToStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName)
    poster?.addToStock(quantity)
  }

  removePosterToStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName)
    poster?.removeFromStock(quantity)
  }

  //---------Users------------

  saveUsers(user) {
    const userExists = this.#storage.users.find(u => u.email === user.email)
    if(!userExists) {
      this.#storage.users.push(user)
    }
  }

  //---------Order------------

  saveOrder(order) {
    this.#storage.orders.push(order)
  }

  showStorage() {
    console.table(this.#storage.authors)
    console.table(this.#storage.books)
    console.table(this.#storage.posters)
    console.table(this.#storage.users)
    console.table(this.#storage.orders.map(order => order.data))
  }

}

module.exports = Database