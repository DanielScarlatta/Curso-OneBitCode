// Session Storage
document.getElementById('sessionBtn').addEventListener('click', function() {
  const input = document.getElementById('session')
  window.sessionStorage.setItem('info', input.value)
  input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', function () {
  const info = window.sessionStorage.getItem('info')
  alert('A informação é salva é ' + info)
})

// Local Storage

document.getElementById('localBtn').addEventListener('click', function() {
  const input = document.getElementById('local').value
  window.localStorage.setItem('localInfo', input)
  input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function() {
  const localvalue = window.localStorage.getItem('localInfo')
  alert('O valor do localStorage é: ' + localvalue)
})

// cookies

document.getElementById('cookieBtn').addEventListener('click', function() {
  const inputCookie = document.getElementById('cookie')
  // cookieName = value; expires=UTCStringDate; path=/
  const cookie = 'info=' + inputCookie.value + ';'
  const expiration = 'expires=' + new Date(2023, 12, 22) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  inputCookie.value = ''
  console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function() {
  const inputCookie = document.getElementById('cookie2')
  // cookieName = value; expires=UTCStringDate; path=/
  const cookie = 'info2=' + inputCookie.value + ';'
  const expiration = 'expires=' + new Date(2023, 12, 22) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  inputCookie.value = ''
  console.log(document.cookie)
})