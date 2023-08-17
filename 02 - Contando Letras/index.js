const letras = ["A", "a", "B", "C", "E", "e"];

let quantidadeDeLetras = 0;
let encontrou = false;
for (let encontrandoLetra of letras) {
    if (encontrandoLetra === 'E' || encontrandoLetra === 'e') {
        quantidadeDeLetras = quantidadeDeLetras + 1;
        encontrou = true;
    }
}
if (encontrou === true) {
    console.log(`Foram encontradas ${quantidadeDeLetras} no array!`)
} else {
    console.log(`Não foram encontradas as letras no array!`)
}
