//Chamando A Função Alert
alert("Hello World!")

//Chamando O Método log()
console.log("Olá Thiago")

//Declaração Da Função
function bemVindo(nome) {
    console.log("Bem vindo " + nome)
}

//Chamada Da função
bemVindo("Tadeu")

function somar(num1, num2) {

}



function mostrarSituaçãoAluno() {
    let nota1 = parseFloat(prompt("Digite a Primeira Nota Do Aluno:"))
    let nota2 = parseFloat(prompt("Digite a Segunda Nota Do Aluno:"))
    let nota3 = parseFloat(prompt("Digite a Terceira Nota Do Aluno:"))

    let somaNotas = nota1 + nota2 + nota3
    let media = somaNotas / 3
    console.log(media)
}

