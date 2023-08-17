const numeros = [3, 24, 1, 8, 11, 7, 15, 77, 89];
let oMaioral = 0;

for (let encontrandoOMaior of numeros) {
    if (encontrandoOMaior > oMaioral) {
        oMaioral = encontrandoOMaior;
    }
}
console.log(oMaioral);
