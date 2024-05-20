var entrada = require('readline-sync');
var pares = [];
var impares = [];


for (var i = 0; i < 10; i++) {
  var numInteiro = parseInt(entrada.question(`Digite o numero inteiro:`));

  if (numInteiro % 2 === 0) {
    pares.push(numInteiro);
  } else {
    impares.push(numInteiro);
  }
}


console.log(`Quantidade de números pares: ${pares.length}`);
console.log(`Quantidade de números ímpares: ${impares.length}`);


console.log(`Números pares: ${pares}`);
console.log(`Números ímpares: ${impares}`);
