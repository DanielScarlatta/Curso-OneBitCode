function checkAge(age) {
  return new Promise((resolved, reject) => {
    if (age) {
      resolved(age > 18)
    } else {
      reject(new Error('age is required'))
    }
  })
}

function getAge(birthday) {
  return new Promise((resolved, reject) => {
    if(birthday) {
      const birthYear = new Date(birthday).getFullYear()
      const currentYear = new Date().getFullYear()
      resolved(currentYear - birthYear)
    }
  })
}