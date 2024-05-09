// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

let num1 = parseFloat(prompt("Digite o Primeiro Número:"))
let num2 = parseFloat(prompt("Digite o Segundo Número:"))
let num3 = parseFloat(prompt("Digite o Terceiro Número:"))

if (num1 < num2 && num1 < num3 && num2 < num3) {
    alert("Os números estão em ordem crescente!")
} else {
    alert("Os números não estão em ordem crescente...")    
}