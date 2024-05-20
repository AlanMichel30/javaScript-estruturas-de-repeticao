var entrada= require('readline-sync');

var num1 = entrada.question('Digite o 1° numero (entre 0 e 20): ');
var num2 = entrada.question('Digite o 2° numero (entre 0 e 20): ');

var inicio = Math.min(num1,num2);
var fim = Math.max(num1,num2);

for(var i = inicio; i <= fim; i++){
    console.log(i);
}
