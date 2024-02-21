function sum(a, b) {
  const fistNumber = Number(a);
  const secondNumber = Number(b);

  if (isNaN(fistNumber) || isNaN(secondNumber)) {
    throw new Error("arguments must be two number");
  }

  return fistNumber + secondNumber;
}

try {
  console.log(sum(2, 9));
  console.log(sum(true, 14));
  // console.log(sum(undefined, 22));
  console.log(sum(18, "0"));
  console.log(sum(39, null));
  console.log(sum(13, "zero"));

} catch (error) {
  console.log('An error ocurred')
  console.log(error.message)
} finally {
  console.log('calculate finished')
}

