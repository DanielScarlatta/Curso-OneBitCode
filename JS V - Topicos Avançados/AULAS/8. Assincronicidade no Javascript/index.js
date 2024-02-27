function steap02() {
  console.log("Passo 02");
}

console.log("passo 01");
steap02();
console.log("passo 03");

console.log("passo 04");
setTimeout(() => {
  console.log("Passo 05");
}, 2);

console.log("Passo 06");
