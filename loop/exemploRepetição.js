//for - Loop contado

for(let cont=10; cont >= 0; cont--) {
    console.log(cont);
}

//while - Loop condicional

let contador = 0;

while(contador < 5) {
    console.log(contador)
    contador += 1
}

//do - while Loop condicional

let count = 0

do {
    console.log(contador)
    contador += 1
} while(contador <= 5) {

}

//forEach - percorrer a lista (array)

let num = [1,2,3,4,5,6,7]

num.forEach(elemento => {
    console.log("Os números são: " + elemento)
})