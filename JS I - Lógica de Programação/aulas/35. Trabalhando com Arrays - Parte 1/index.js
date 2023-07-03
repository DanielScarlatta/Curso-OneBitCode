const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//to add element
//push (add elements at the end of the array)
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//add elements at the start of the array
// unshift

tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

//to remover elements at the end of the array
// pop 

let TheEndElement = arr.pop()
console.log(arr)
console.log(TheEndElement)

//to remove elements at the start of the array
//shift

TheEndElement = arr.shift()
console.log(arr)
console.log(TheEndElement)

//search an element
// includes

const inclui = arr.includes("Gandalf")
console.log(inclui)

//cortar e concatenar
// slice

const hobbits = arr.slice(0, 4) //-1, -3
console.log(arr)
console.log(hobbits)

//concat

let sociedade = arr.concat(hobbits, "podcast")
console.log(sociedade)

// substituiçao dos elementos
// splice

const elementosRemovidos = sociedade.splice(8, 1, "gandalf, o cinzento", 1, 4, false, true)
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os  elementos do array

for(let i = 0; i < sociedade.length; i++){
  const elemento = sociedade[i]
  console.log(elemento + " se encontra na posiçao " + i)
}