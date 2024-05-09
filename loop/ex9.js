//Exercício 9
//Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.

let numero = prompt ("Digite Um Número:")

do {
    console.log(numero)
    numero -= 1
} while(numero >= 0)