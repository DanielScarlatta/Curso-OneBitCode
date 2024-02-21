import dayjs from 'dayjs'
import style from './styles/index.css'

const hello = () => console.log(`Hello world ${ 1 + 1 }`)

alert(`Hoje é: ${dayjs().format('DD/MM/YYYY')}`)

hello()