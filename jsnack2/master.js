var parola1 = prompt('Dammi una parola');
console.log(parola1);

var parola2 = prompt('Dammi una seconda parola')
console.log(parola2);

var prima = parola1.length

var seconda = parola2.length

if (prima > seconda) {
  console.log(parola2, parola1);
} else {
  console.log(parola1, parola2);
}
