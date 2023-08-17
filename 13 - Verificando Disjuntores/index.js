const disjuntores = [false, false, false, true, false, false, false, true,];
let disjuntoresLigados = [];
let posicoes = [];

for (let i = 0; i < disjuntores.length; i++) {
    if (disjuntores[i] === true) {
        disjuntoresLigados.push(disjuntores[i]);
        posicoes.push(i);
    }
}

if (disjuntoresLigados.length === 1) {
    console.log(`Há apenas um disjuntor ligado e ele está na posição ${posicoes}`);
} else if (disjuntoresLigados.length > 1) {
    console.log(`Há ${disjuntoresLigados.length} disjuntores ligados e eles estão nas posições ${posicoes}.`);
} else {
    console.log("Não há disjuntores ligados.");
}

