var entrada = require('readline-sync');

var numero= entrada.question('Qual o menor do numero: ');

var menor = Math.min(numero);

for(var i = menor; i <= 10; i++){
    console.log(i);
}

console.log(`Menor é ${menor}`);