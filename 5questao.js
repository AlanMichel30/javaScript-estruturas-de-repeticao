var entrada= require('readline-sync');
somaIdade = 0;

for(var i= 0; i < 10; i++){
    var idade = parseFloat(entrada.question('Digite a idade: '));
    var somaIdade = somaIdade + idade;
   
}

var mediaIdade = somaIdade/10;
console.log(`Soma idades ${somaIdade}`);
console.log(`Média das idades ${mediaIdade}`);