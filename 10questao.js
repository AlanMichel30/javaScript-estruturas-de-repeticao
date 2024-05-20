var entrada = require('readline-sync');
var soma = 0;
var media;

for(var i =0; i<5; i++){
    var numero = parseFloat(entrada.question('Digite o numero: '));
    soma = soma + numero;
    media = soma/5;
}
console.log(`Soma: ${soma}`);
console.log(`Média: ${media}`);