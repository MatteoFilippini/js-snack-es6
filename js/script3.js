/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.
*/



const names = [
    { nome: 'Matteo' },
    { nome: 'Marco' },
    { nome: 'Mariano' },
    { nome: 'Salvatore' },
    { nome: 'Luca' }
]

console.log(names);

const b = names.filter(nomi => nomi.nome === 'Luca');

console.log(b)
