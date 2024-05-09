//Exercício 10
//10. Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0.

let numero = prompt("Digite O Número do Usuário ")

do {
    numero = prompt("Número Incorreto, Digite O Número do Usuário:")
} while(numero != 0)

alert ("Número Correto!")