console.log("Programa Iniciado");

// setTimeout(() => {
//   console.log('3 segundos se passaram depois que o programa foi iniciado')
// }, 1000 * 3)

// const timeoutId = setTimeout(() => {
//   console.log('4 segundos se passaram depois que o programa foi iniciado')
// }, 1000 * 4)

// clearTimeout(timeoutId)

//------------------------------------------------------------------------

let seconds = 0;

// setInterval(() => {
//   seconds += 3;
//   console.log(`Se passaram ${seconds} segundos.`);
// }, 3000);

const intervalId = setInterval(() => {
  seconds += 3;
  console.log(`Se passaram ${seconds} segundos.`);
  if(seconds > 10) {
    clearInterval(intervalId)
    console.log('Tempo esgotado')
  }
}, 3000);


