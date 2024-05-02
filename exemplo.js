// Escreva um programa que solicite o nome de usuário e lhe dê boas vindas
//Exibindo uma mensagem pelo console

//prompt -> recebe uma entrada digitada
let nome = prompt("Olá, digite seu nome: ")

//Concatenação
console.log("Seja bem vindo " + nome);

// parseInt() -> transforma o que está entre () em número inteiro
let pontos = 100
let bonus = parseInt( prompt("Quantos Pontos você deseja somar?") )
console.log(pontos + bonus)

// parseFloat() -> transforma o que está dentro de () em números decimais
let notaAluno = parseFloat( prompt("Digite a nota do Aluno") )