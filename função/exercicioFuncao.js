//Fazer um menu de exercícios usando o exemplo dado em aula
//Criar um menu onde é possível executar 6 dos exercícios anteriores
//Cada exercício deve ser encapsulado em uma função, e o menu deve executar essas funções
//O usuário poderá escolher qual exercício ele quer visualizar
//O usuário deverá digitar 0 para sair do menu

function usuario () {
    let username = prompt("Digite Um Nome De Usuário:")
    let senha = prompt("Digite a Senha:")

    if (username == "admin" && senha == "senha123") {
        alert("Você é Admin.")
    }
}

function diaSemana() {
    let dia = prompt("Insira o número do dia: ")

    switch (dia) {
        case "1": alert("Hoje é Segunda-Feira")
        break

        case "2": alert("Hoje é Terça-Feira")
        break

        case "3": alert("Hoje é Quarta-Feira")
        break

        case "4": alert("Hoje é Quinta-Feira")
        break

        case "5": alert("Hoje é Sexta-Feira")
        break

        case "6": alert("Hoje é Sábado")
        break

        case "7": alert("Hoje é Domingo")
        break

    }
}

function pares() {
    let paresnumero = prompt("Digite um número:")

    if (paresnumero % 2 == 0) {
        alert("O número é par!")

    }   else {
    alert("O número é impar...")
    }
}

function umDez() {
    for(let contador=10; contador >= 1; contador--) {
        console.log(contador);
    }
}

function regressiva() {
    let regressivanumero = prompt ("Digite Um Número:")

    do {
        console.log(regressivanumero)
        regressivanumero -= 1
    } while(regressivanumero >= 0)
}

function fibo() {
    let a = 0
    let b = 1
    let c = 0

    for(let vezes=1; vezes <= 10; vezes++) {
        console.log(c)
        c = a + b
        b = a
        a = c
    }
}

let opcao;

opcao = prompt("Digite Uma Opção\n\n1- Usuário e Senha\n2- Dia Da Semana\n3- Números Pares\n4- Contador De 1 a 10\n5 - Contagem Regressiva\n6 - Sequencia De Fibonnaci")

do {
    opcao = prompt("Digite Uma Opção\n\n1- Usuário e Senha\n2- Dia Da Semana\n3- Números Pares\n4- Contador De 1 a 10\n5 - Contagem Regressiva\n6 - Sequencia De Fibonnaci")

    if (opcao == "1") {
        usuario()
    } else if (opcao == "2") {
        diaSemana()
    } else if (opcao == "3") {
        pares()
    } else if (opcao == "4") {
        umDez()
    } else if (opcao == "5") {
        regressiva()
    } else if (opcao == "6") {
        fibo()
    } else if (opcao == "0") {    
        alert("Você escolheu sair <:(")
    } else {
        alert("Exercício Inexistente!")
    }

} while(opcao != "0");