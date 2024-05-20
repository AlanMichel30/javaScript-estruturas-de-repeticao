var entrada = require('readline-sync');

do{
    var nome= entrada.question('Digite o usuario :');
    var senha= entrada.question('digite a senha: ');
    
    if(nome === senha){
    console.log("Erro: A senha não pode ser igual ao nome de usuário. Por favor, tente novamente.");
}
}while(nome === senha);
    console.log("Usuário e senha cadastrados com sucesso.");

