// //async
// async function asyncSum(a, b) {
//   return a + b;
// }

// function asyncSubtract(a, b) {
//   return a - b
// }

// const sumResult = asyncSum(10, null);
// const subResult = asyncSubtract(15, 2);

// Promise.all([sumResult, subResult])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


const numbers = [2, 4, 8, 16, 32, 64, 128, 256, 516];

async function asyncSquare(x) {
  return (x * x)
}

Promise.all(numbers.map((number) => asyncSquare(number))).then((squares) => {
  console.log(squares);
})
.catch(err => {
  console.log(err)
})
