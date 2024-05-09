//Exercício 4
//Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.

let numero = prompt("Insira um número: ")

for(let vezes=1; vezes >= 1 && vezes <= 10; vezes++) {
    console.log(numero*vezes)
}