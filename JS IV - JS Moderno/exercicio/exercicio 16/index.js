const dayjs = require('dayjs')

function DataProperty(birthday) {
  const birthdayFormat = dayjs(birthday).format('MM/DD/YYYY')
  
  const age = dayjs().diff(birthdayFormat, 'y')
  const nextBirthday = dayjs(birthdayFormat).add(age+1, 'y').format('DD/MM/YYYY')
  const daysOfBrithday = dayjs(dayjs(nextBirthday).format('DD/MM/YYYY')).diff(dayjs(), 'd')

  console.log(`Idade atual: ${age} anos`)
  console.log(`O proximo aniversario é ${nextBirthday}`)
  console.log(`Falta ${daysOfBrithday} para seu aniversario`)
}

// MM/DD/YYYY  >> DD/MM/YYYY
DataProperty('03/05/2003')

