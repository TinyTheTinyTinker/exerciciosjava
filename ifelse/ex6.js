// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let anoDeNascimento = prompt("Digite seu ano de nascimento:")
let idade = 2024 - anoDeNascimento

if (idade >= 18) {
    alert("Você é maior de 18 Anos!")
} else {
    alert("Você não é maior de 18 Anos!")
}