const person = {
  name: "Luke",
  job: "Farmer",
  parent: ["anakin", "Padme"]
}


const namec = person.name
const { job, parent } = person

console.log(namec, job, parent)

const [father, mother] = parent

console.log(father, mother)

function createUser(person){
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name: person.name
  }
}

function createUserDes({ name, job, parent }){
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,
    job, 
    parent
  }
}

const luke = createUserDes(person)

console.log(luke)