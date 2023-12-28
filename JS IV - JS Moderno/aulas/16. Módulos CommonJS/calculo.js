module.exports = {
  sum,
  sub
}

function sum(...numbers) {
  return numbers.reduce((accum, num) => accum+num, 0)
  
}

function sub(...numbers) {
  return numbers.reduce((accum, num) => accum-num, 0)
}