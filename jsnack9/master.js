var numeri =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var somma = 0

var media = 0

for (var i = 0; i < numeri.length; i++) {
  somma = somma + parseInt(numeri[i])
}

media = media + (somma / 10)

console.log(somma);
console.log(media);
