/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.
*/


const valueBetween = (array, a, b) => {
    array.forEach((element, index) => {
        if (index >= a && index <= b) console.log(element, index);
    });
};

const names = [
    { nome: 'Matteo' },
    { nome: 'Marco' },
    { nome: 'Mariano' },
    { nome: 'Salvatore' },
    { nome: 'Luca' }
]

console.log(names);

valueBetween(names, 3, 4);
