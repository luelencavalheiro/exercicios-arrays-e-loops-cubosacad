const original = [5, 7, 13, 17, 26, 34, 118, 245];
let novoArray = [];

for (let encontrandoOsNumeros of original) {
    if (encontrandoOsNumeros >= 10 && encontrandoOsNumeros <= 20 || encontrandoOsNumeros >= 100) {
        novoArray.push(encontrandoOsNumeros);
    }
}

console.log(novoArray);


