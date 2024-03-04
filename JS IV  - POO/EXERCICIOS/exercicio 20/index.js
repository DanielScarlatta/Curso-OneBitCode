import { Component } from "./Component.js"
import { Form } from "./Form.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js"


const body = document.getElementById('body')

const h1 = new Component('h1', '#body', {innerText:'Hello World'})

h1.render()



const input = new Input('#body', {value:'click aqui', type:'button', className:'txtName'})
const input1 = new Input('#body', {placeholder:'digite aqui', type:'text', className:'txtName'})
input.render()
input1.render()

console.log(input)
console.log(input1)

const label = new Label('Criando Label', '#body')

label.render() 
console.log(label)

const form = new Form('#body', {className:'formMain'})

form.render()
console.log(form)

form.addChildren(label)

const input2 = new Input('#body', {className:'formMain', placeholder:'olá conteudo'})

form.addChildren(input2)


