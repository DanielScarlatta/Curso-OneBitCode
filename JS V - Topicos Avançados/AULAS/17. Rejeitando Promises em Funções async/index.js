async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject(new Error('arguments for sum must be of type number'))
  }
  
  return a + b;
}

async function asyncSubtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject(new Error('arguments for subtraction must be of type number'))
  }
  return a - b;
}

const sumResult = asyncSum(50, 33);
const subtract = asyncSubtract(50, null);

Promise.all([sumResult, subtract])
  .then((results) => console.log(results))
  .catch((err) => console.log(err));
