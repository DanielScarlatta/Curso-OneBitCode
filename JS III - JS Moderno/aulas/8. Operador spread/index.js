let arr = [4, 2, 8, 3, 1]
let srt = 'Olá, mundo'
const towns = ['são paulo', 'rio de janeiro', 'piaui', 'goias', 'acre']

console.log(...arr)
console.log(...srt)

const townsCopy = towns // townsCopy.pop() a variavel townsCopy está referenciando a towns logo qualquer alteração no townsCopy será realizada no towns
// townsCopy.pop()

console.log(townsCopy)

const townsClone = [...towns]

townsClone.push('rio grande do sul')

console.log(townsClone)

const toensObject = {...towns}

const toensObjectClone = {...toensObject}

toensObjectClone.test = 'mato grosso'


console.log({toensObject ,toensObjectClone})