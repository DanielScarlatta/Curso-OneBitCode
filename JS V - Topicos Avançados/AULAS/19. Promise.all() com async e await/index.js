function waitFor(seconds) {
  return new Promise((resolved, reject) => {
    if (typeof seconds !== "number") {
      reject("arguments must be type of number");
    }
    setTimeout(() => {
      resolved();
    }, seconds * 1000);
  });
}
const numbers = [4, 5, 7, 6, 14, 87];


// console.log(squares);

// Promise.all(squares).then((result) => {
//   console.log(result);
// });

async function execute() {
  const squares = await Promise.all(numbers.map(async (number) => {
    await waitFor(2);
    return number * number;
  }))

  console.log(squares)
}

execute()