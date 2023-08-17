const original = [1, 4, 12, 21, 53, 88, 112, 224, 688, 94, 77, 79, 6];
let novoArray = [];

for (let encontrandoOsPares of original) {
    if (encontrandoOsPares % 2 === 0) {
        novoArray.push(encontrandoOsPares);
    }
}

console.log(novoArray);
