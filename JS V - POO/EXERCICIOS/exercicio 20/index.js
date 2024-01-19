import { Component } from "./Component.js"
import { ComponentInput } from './ComponentInput.js'

const main = document.getElementById('main')

const h1 = new Component('p', main, {innerText: 'Hello World'})
h1.render()

console.log(h1)

const input = new ComponentInput(main, {id:'inpTeste'}, {type:'button'})

console.log(input)
input.render()