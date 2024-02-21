class Comment {
  constructor(name, content) {
    this.name = name
    this.content = content
    this.createAt = new Date()
  }
}

module.exports = Comment