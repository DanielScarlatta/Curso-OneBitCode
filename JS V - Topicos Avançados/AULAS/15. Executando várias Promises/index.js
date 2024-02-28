// function asyncSum(a, b) {
//   return new Promise((resolved, reject) => {
//     if (typeof a !== "number" || typeof b !== "number") {
//       reject("arguments must be of type number");
//     } else {
//       resolved(a + b);
//     }
//   });
// }

// function asyncSubtract(a, b) {
//   return new Promise((resolved, reject) => {
//     if (typeof a !== "number" || typeof b !== "number") {
//       reject("arguments must be type of number");
//     } else {
//       resolved(a - b);
//     }
//   });
// }

// const sumResult = asyncSum(10, 8);
// const subResult = asyncSubtract(15, 2);

// Promise.all([sumResult, subResult]).then((results) => {
//   console.log(results);
// }).catch(err => {
//   console.log(err)
// })

const numbers = [2, 4, 8, 16, 32, 64, 128, 256, 516];

function asyncSquare(x) {
  return new Promise((resolved, reject) => {
    if(typeof x !== 'number') {
      reject('arguments must be type of number')
    }
    resolved(x * x);
  });
}

Promise.all(numbers.map((number) => asyncSquare(number))).then((squares) => {
  console.log(squares);
})
.catch(err => {
  console.log(err)
})
