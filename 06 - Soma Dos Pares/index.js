const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let resultadoSoma = 0;
for (let procurandoOsPares of numeros) {
    if (procurandoOsPares % 2 === 0) {
        resultadoSoma = resultadoSoma + procurandoOsPares;
    }
}

console.log(resultadoSoma);


