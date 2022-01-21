/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// FUNZIONE RANDOM
const getRandomNumer = () => {
    const numRandom = Math.floor(Math.random() * 5) + 1;

    return numRandom;
}

const btnGen = document.getElementById('btnGen');
// ARRAY DI SQUADRE
const squadre = [
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Juve', puntiFatti: 0, falliSubiti: 0 }
]

btnGen.addEventListener('click', function () {
    const display = document.getElementById('display');
    const table = document.querySelector('table');
    table.innerText = '';
    // ASSEGNO UN VALORE ALLE PROPRIETA PT FS
    for (let i = 0; i < squadre.length; i++) {
        const squadra = squadre[i];
        squadra['puntiFatti'] = getRandomNumer();
        squadra['falliSubiti'] = getRandomNumer();
    }
    // PRENDO SOLO LE PROPRIETA CHE MI INTERESSA (NOME E FS)
    const newSquadre = [];
    for (key in squadre) {
        const { nome, falliSubiti } = squadre[key]; // prendo le proprieta
        const ogg = { nome, falliSubiti };  // creo gli oggetti
        newSquadre.push(ogg);   // li metto nel nuovo array
    }
    // STAMPO IN PAGINA LA TABELLA
    let firstRow = document.createElement('tr');
    firstRow.innerHTML = (`<td>NOMI</td>
    <td>FALLI SUBITI</td>`);
    firstRow.classList.add('green');
    table.append(firstRow);

    for (let i = 0; i < newSquadre.length; i++) {
        const currentObject = newSquadre[i];
        let row = document.createElement('tr');
        for (let key in currentObject) {
            let cell = document.createElement('td');
            cell.innerText = (`${currentObject[key]}`);
            row.append(cell);
        }
        table.append(row);
    }
})



















