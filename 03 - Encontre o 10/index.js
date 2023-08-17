const numeros = [10, 12, 25, 26, 10];

let encontrandoODez = false;

for (let posicaoDoNumero = 0; posicaoDoNumero < numeros.length; posicaoDoNumero++) {
    if (numeros[posicaoDoNumero] === 10) {
        console.log("O número 10 foi encontrado na posição" + posicaoDoNumero);
        encontrandoODez = true;
    }
}
if (encontrandoODez === false) {
    console.log("-1");
}


