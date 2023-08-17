const nomes = ["Ana", "Joana", "Carlos", "Amanda", "Mariana", "Alberto", "augusto", "aurora", "Alcione"];
const listaNomesComA = [];
let nome = "";
for (let encontrandoNomes of nomes) {
    nome = encontrandoNomes;
    if (nome[0] === "A" || nome[0] === "a") {
        listaNomesComA.push(nome);

    }
}

console.log(listaNomesComA);
