/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare ain console la bici con peso minore utilizzando destructuring e template literal
*/

// creo un array di oggetti
// oggetti {nome,peso}
// prendo la proprieta peso di ogni oggetto
//     -le confronto e trovo la minore
// stampo

// ARRAY
const bikes = [
    // OGGETTI
    { nome: 'bmx', peso: 10 },
    { nome: 'graziella', peso: 5 },
    { nome: 'cross', peso: 8 }
]

// PRENDO LA PROPRIETA PESO
// creo una variabile temporanea
let maxPeso = 0;
for (let i = 0; i < bikes.length; i++) {
    const { peso } = bikes[i];
    // calcolo se il valore della proprieta e maggiore del peso massimo sabilita
    if (peso > maxPeso) {
        maxPeso = peso;
    }
}

console.log(maxPeso);