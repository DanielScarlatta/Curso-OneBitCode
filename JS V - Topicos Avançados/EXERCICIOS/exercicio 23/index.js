const form = document.getElementById("validatorForm");
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  function emailValidator() {
    const templeteString = email.replace(/\s/, "");
    const atSingExist = templeteString.match(/@/g);
    const characterBeforeAtSign = templeteString.match(/.{2}(?=@)/g);
    const characterAfterAtSign = templeteString.match(/(?<=@).{2,}(?=\.)/g);
    const characterAfterPoint = templeteString.match(/(?<=\.).{2,}/g);
    //\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/

    if (
      atSingExist &&
      characterBeforeAtSign &&
      characterAfterAtSign &&
      characterAfterPoint
    ) {
      alert("Email validate with succes");
    } else {
      throw new Error("Email arguments must be valid");
    }
  }

  function passwordValidator() {
    const templeteString = password.replace(/\s/, "");
    const existCharacterLowerCase = templeteString.match(/[a-z]/g);
    const existCharacterUpperCase = templeteString.match(/[A-Z]/g); 
    const existNumber = templeteString.match(/\d/g)
    const existSpecialCharacter = templeteString.match(/\W/g)

    if(existCharacterLowerCase && existCharacterUpperCase && existNumber && existSpecialCharacter && templeteString.length > 8) {
      alert('Password validate with succes')
    } else {
      throw new Error("Password arguments must be valid")
    }
  }

  try {
    emailValidator()
    passwordValidator();
  } catch (err) {
    alert(err.message)
  }
});


/*
  function validateEmail(email) {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        const err = new Error('Email inválido.')
        err.input = 'email'
        throw err
    }
}

function validatePassword(password) {
    if (
        password.length < 8 || 
        !password.match(/[a-z]/) || 
        !password.match(/[A-Z]/) || 
        !password.match(/[0-9]/) ||
        !password.match(/[^a-zA-Z0-9\s]/)
    ) {
        const err = new Error('Senha inválida.')
        err.input = 'password'
        throw err
    }
}

function resetFormStyles() {
    Object.entries(userInputs).forEach(([key, value]) => {
        value.classList.remove('success', 'error')
        document.querySelector(`#${key}-error`).textContent = ''
    })
}

const userInputs = {}

userInputs.name = document.querySelector('#name')
userInputs.email = document.querySelector('#email')
userInputs.password = document.querySelector('#password')

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    resetFormStyles()
    try {
        userInputs.name.classList.add('success')
        validateEmail(userInputs.email.value)
        userInputs.email.classList.add('success')
        validatePassword(userInputs.password.value)
        userInputs.password.classList.add('success')
    } catch (err) {
        userInputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})
*/