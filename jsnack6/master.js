var numero = parseInt(prompt('inserisci il numero'));

var risultato = 0;

for (var i = 0; i < numero +1 ; i++) {
  risultato = Math.pow(i, 3);
  console.log(risultato);
}
