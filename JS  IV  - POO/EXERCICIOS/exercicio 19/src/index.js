const Author = require('./services/Author')

const daniel = new Author('Daniel Dias Scarlatta')

console.log(daniel)

console.log('-------------------------------------')
const post = daniel.createPost('Dia 17/01/2024', 'Hoje está quente')
post.addComments('luis', 'é verdade')
console.log(daniel)

console.log('-------------------------------------')
daniel.createPost('Dia 18/01/2024', 'Hoje está Frio')
console.log(daniel)

console.log('-------------------------------------')
daniel.posts[0].addComments('felipe', 'Isso é verdade')
daniel.posts[0].addComments('gabriel', 'Na minha cidade está assim tbm')

console.log(daniel.posts[0].comments)

