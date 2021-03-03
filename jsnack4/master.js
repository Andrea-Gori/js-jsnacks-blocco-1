var invitati = ['Tizio', 'Caio', 'Sempronio', 'Luca', 'Paolo', 'Gino'];

var ospite = prompt('Dimmi il tuo nome');

var check = false;

for (var i = 0; i < invitati.length; i++) {
  if (invitati[i] == ospite) {
    check = true;
  }
}

if (check) {
  document.getElementById('accesso').innerHTML = 'Accesso consentito';
} else {
  document.getElementById('accesso').innerHTML = 'Accesso negato';
}
