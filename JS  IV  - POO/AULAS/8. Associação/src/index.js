const Address = require('./service/Address')
const Person = require('./service/Person')

const address = new Address('antonio previato', '1366', 'São mateus', 'São Paulo', 'SP')
const daniel = new Person('Daniel Dias Scarlatta', address)

console.log(daniel)
console.log(daniel.address.fullAddress())

