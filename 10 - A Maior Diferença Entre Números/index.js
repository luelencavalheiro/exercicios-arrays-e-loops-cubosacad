let numeros = [2, 5, 18, 45, 3, 19, 1];
let menorNumero = numeros[0];
let maiorNumero = numeros[0];
let diferencaDeValores = 0;

for (let numero of numeros) {
    if (numero <= menorNumero) {
        menorNumero = numero;
    }
}


for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

diferencaDeValores = maiorNumero - menorNumero;
console.log(diferencaDeValores);