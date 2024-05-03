// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let nota1 = parseFloat(prompt("Digite a Primeira Nota do Aluno:"))
let nota2 = parseFloat(prompt("Digite a Segunda Nota do Aluno:"))
let nota3 = parseFloat(prompt("Digte a Terceira Nota do Aluno:"))
let nota4 = parseFloat(prompt("Digte a Quarta Nota do Aluno:"))

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7) {
    alert("A média do aluno foi de " + media + ". O aluno foi APROVADO!")
} else if (media < 7 && media > 5) {
    alert("A média do aluno foi de " + media + ". O aluno está em RECUPERAÇÃO!")
} else {
    alert("A média do aluno foi de " + media + ". O aluno foi REPROVADO!")
}