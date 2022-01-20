/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// creo l Array
// oggetto{nome,punti fatti=0,falli subiti=0}
// funzione numero random
// assegno un numero random alle proprieta punti-fatti e falli-subiti


// ARRAY DI SQUADRE
const squadre = [
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'juve', puntiFatti: 0, falliSubiti: 0 }
]

// FUNZIONE RANDOM
const getRandomNumer = () => {
    const numRandom = Math.floor(Math.random() * 5);

    return numRandom;
}

// ASSEGNO UN VALORE ALLE PROPRIETA PT FS
for (let i = 0; i < squadre.length; i++) {
    const squadra = squadre[i];

    squadra['puntiFatti'] = getRandomNumer();
    squadra['falliSubiti'] = getRandomNumer();

    console.log('punti fatti: ' + squadra['puntiFatti']);
    console.log('falli subiti: ' + squadra['falliSubiti']);
    console.log('----------------------------------')
}

// PRENDO SOLO LE PROPRIETA CHE MI INTERESSA (NOME E FS)
const newSquadre = [];
for (key in squadre) {
    const { nome, falliSubiti } = squadre[key]; // prendo le proprieta

    const ogg = { nome, falliSubiti };  // creo gli oggetti

    newSquadre.push(ogg);   // li metto nel nuovo array
}

console.table(newSquadre)









