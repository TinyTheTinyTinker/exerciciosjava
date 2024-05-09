//Exercício 1: Verificação de login
//Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

let username = prompt("Digite Um Nome De Usuário:")
let senha = prompt("Digite a Senha:")

if (username == "admin" && senha == "senha123") {
    console.log("Você é Admin.")
}

// == -> Verifica se o valor é igual
// === -> Verifica se o valor e o tipo dos items são iguais.