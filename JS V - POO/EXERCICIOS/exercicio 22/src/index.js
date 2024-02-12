const User = require("./services/User.js");

const user1 = new User('Daniel Dias', 'daniel@gmail.com')
console.log(user1)

const user2 = new User('Daniel Dias', 'daniel@gmail.com')
console.log(user2)

user2.newAccountDeposit(168)
user2.newAccountDeposit(844)
user2.newAccountDeposit(658)
user2.newAccountLoans(8452, 10)

console.log(user2.readBalanceValue)

console.table(user2.readDataDepositBank)
console.table(user2.readDataLoansBank)
console.table(user2)
