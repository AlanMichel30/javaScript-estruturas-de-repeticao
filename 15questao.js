var entrada = require('readline-sync');

var numero= entrada.question('Qual o menor do numero: ');

var maior = Math.max(numero);

for(var i = 0; i <= maior; i++){
    console.log(i);
}

console.log(`Maior é ${maior}`);