//Exercício 5
//Imprimir os primeiros 10 números da sequência de Fibonacci.

let a = 0
let b = 1
let c = 0

for(let vezes=1; vezes <= 10; vezes++) {
    console.log(c)
    c = a + b
    b = a
    a = c
}