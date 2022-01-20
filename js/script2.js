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
// assegon un numero random alle proprieta punti-fatti e falli-subiti


const squadre = [
    { nome: 'Inter', 'punti fatti': 0, 'falli subiti': 0 },
    { nome: 'Milan', 'punti fatti': 0, 'falli subiti': 0 },
    { nome: 'juve', 'punti fatti': 0, 'falli subiti': 0 }
]

const getRandomNumer = () => {
    const numRandom = Math.floor(Math.random() * 5);

    return numRandom;
}




console.log(getRandomNumer());