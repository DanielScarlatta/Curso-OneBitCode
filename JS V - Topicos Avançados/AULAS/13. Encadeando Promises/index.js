function checkAge(age) {
  return new Promise((resolved, reject) => {
    if (age) {
      resolved(age > 18);
    } else {
      reject(new Error("age is required"));
    }
  });
}

function getAge(birthday) {
  return new Promise((resolved, reject) => {
    if (birthday) {
      const birthYear = new Date(birthday).getFullYear();
      const currentYear = new Date().getFullYear();
      resolved(currentYear - birthYear);
    } else {
      reject(new Error("birthday is required"));
    }
  });
}

getAge("2010-03-05")
  .then(age => checkAge(age))
  .then((isOver18) => {
    if (isOver18) {
      console.log("Maior de idade");
    } else {
      console.log("Menor de idade");
    }
  })
  .catch((err) => {
    console.log(err.message);
  });


  
/* 
--FORMA BAGUNÇADA DE CHAMAR VARIAS PROMISES

getAge('2010-03-05')
  .then((age) => {
    checkAge(age)
      .then((isOver18) => {
        if(isOver18) {
          console.log('Maior de idade')
        } else {
          console.log('Menor de idade')
        }
      })
      .catch(err => {
        console.log(`Informe uma data de nascimento valida ERROR: ${err} `)
      })
  })
  .catch(err => {
    console.log(`Informe um birthday valido ERROR: ${err}`)
  })
*/
