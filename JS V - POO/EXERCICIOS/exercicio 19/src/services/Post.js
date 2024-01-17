const Comment = require('./Comment')

class Post {
  constructor(author, title, content) {
    this.author = author
    this.title = title
    this.content = content
    this.comments = []
    this.createAt = new Date()
  }
  addComments(name, content) {
    const comment = new Comment(name, content)
    this.comments.push(comment)
  }
}

module.exports = Post
