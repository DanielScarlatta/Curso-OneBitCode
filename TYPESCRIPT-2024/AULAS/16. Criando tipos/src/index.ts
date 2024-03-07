let literal: 'Hello, World!'
let pi: 3.14159

//-------------------------------------------

const teste = 5

//-------------------------------------------

let option: 'Yes' | "No" | 'Maybe'

option = 'Yes'

//-------------------------------------------

let numberBoolean: number | Boolean
numberBoolean = 1
numberBoolean = true

//-------------------------------------------

type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

let planet: Planet

if(planet = 'Terra') {
  console.log('Estamos na terra!')
}

//-------------------------------------------

type GreetingCallback = (name: string) => void

function greet(callbackFunc: GreetingCallback) {
  callbackFunc( 'daniel' )
}


