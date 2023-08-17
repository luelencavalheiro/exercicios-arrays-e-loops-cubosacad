const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

let i = 0;

while (filaDeDentro.length < 5 && i < filaDeDentro.length) {
    filaDeDentro.push(filaDeFora[i]);
    filaDeFora.shift();
    i = i++;
}
console.log(filaDeDentro);
console.log(filaDeFora);



