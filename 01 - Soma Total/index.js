const numeros = [2, 3, 4, 6, 8, 23, 56, 89, 0, 7896, 99, 1, 4];

let soma = 0;

for (let numeroDoArray of numeros) {
    soma = soma + numeroDoArray;
}

console.log("A soma desse array é" + soma);
