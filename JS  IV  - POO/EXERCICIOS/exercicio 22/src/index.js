const app = require('./App.js')

app.newUser('Daniel Dias Scarlatta', 'daniel@gmail.com')
app.newUser('felipe Ferreira', 'felipe@gmail.com')
app.newUser('Enzo', 'enzo@gmail.com')

app.chargeLoanFees(1.2)
app.deposit('daniel@gmail.com', 1874)
app.transfer('daniel@gmail.com','felipe@gmail.com' ,700)
app.takeLoan('enzo@gmail.com', 1000, 10)

console.log(app.findUser('daniel@gmail.com').account.balance)

console.log(app.findUser('enzo@gmail.com').account.balance)

console.log(app.findUser('felipe@gmail.com').account.balance)

console.log(app.findUser('daniel@gmail.com').account.balance)

console.table(app.findUser('enzo@gmail.com').account.loans[0].installments)