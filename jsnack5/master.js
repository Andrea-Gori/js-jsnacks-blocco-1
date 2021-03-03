var contenitore = []

for (var i = 0; i < 6; i++) {
  var numero = parseInt(prompt('dammi un numero'));
  console.log(numero);

  if (numero % 2 == 1) {
    contenitore.push(numero)
  }
}

console.log(contenitore);
