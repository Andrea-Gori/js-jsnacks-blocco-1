var numero = prompt('numero di 4 cifre');

var sommaNumeri = 0;

Array.from(numero);

for (var i = 0; i < numero.length; i++) {
  sommaNumeri = sommaNumeri + parseInt(numero[i]);
}

console.log(sommaNumeri);
