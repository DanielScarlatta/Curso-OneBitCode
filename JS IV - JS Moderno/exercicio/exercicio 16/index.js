const dayjs = require('dayjs')

function DataProperty(Birthday) {
  dayjs().format('DD/MM/YYYY')
  console.log(dayjs(Birthday))
}

DataProperty('05/03/2023')