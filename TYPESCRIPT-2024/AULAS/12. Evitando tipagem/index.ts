// function sendSpaceship(spaceship: {pilot: string, copilot?: string}) {
//     console.log(spaceship)
// }

// sendSpaceship({ pilot: 'Han solo', copilot: 'Chewbacca'})

// sendSpaceship({ pilot: 'luke'})

//-----------------------------------------------------------------------
// let input: any //pode ser tambem unknown  

//any: desativa toda e qualquer tipagem do typescript]
//unknown: faz a variavel receber qualquer tipagem

// input = 'Teste'
// input = 20
// input = []

// let text: string

// text = input


function verification(test) {
  if (test) {
    
  } else {
    let _check: never
    let text = _check

    text = ''
    return _check
  }
}