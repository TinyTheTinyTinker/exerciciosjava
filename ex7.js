// Exercício 7: Cálculo de desconto progressivo
//Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim, aplique um desconto de acordo com o valor total da compra. Siga a tabela:
//Valor total da compra até R$ 100,00: sem desconto.
//Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
//Valor total da compra acima de R$ 200,00: desconto de 20%.
//Exiba o valor final da compra com o desconto aplicado.

let pago = prompt("Digite o valor total da compra:")
let descontado1 = pago - (10 / 100) * pago
let descontado2 = pago - ((10 / 100) * pago) * 2

if (pago <= 100.00){
    alert("Sem Desconto Aplicado, O valor da compra final é de " + pago)

} else if (pago > 100.00 && pago < 200.01) {
    alert("Desconto de 10% Aplicado, O valor da compra final é de " + descontado1)
} else if ( pago >= 200.01) {
    alert("Desconto de 20% Aplicado, O valor da compra final é de " + descontado2)
}