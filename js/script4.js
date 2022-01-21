/*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/

// CREO L'ARRAY DI STUDENTI
const students = [
    { id: 0, nome: 'matteo', sumVotes: 55 },
    { id: 5, nome: 'luca', sumVotes: 56 },
    { id: 77, nome: 'GIACOMO', sumVotes: 77 },
    { id: 2, nome: 'Paolo', sumVotes: 59 },
    { id: 45, nome: 'mattiA', sumVotes: 671 }
]
console.log(students)

// CREO L'ARRAY DEI NOMI IN MAIUSOCLO DEGLI STUDENTI 
const studentsUp = students.map(({ nome }) => {
    const firstletter = nome.charAt(0).toUpperCase();
    const otherLetters = nome.substring(1).toLowerCase();
    return firstletter + otherLetters;
});
console.log(studentsUp)

// CREO L'ARRAY DI STUDENTI CON VOTO MAGGIORE DI 70
const sumVotesMax = students.filter(({ sumVotes }) => {
    if (sumVotes > 70) {
        return sumVotes;
    }
});

console.log(sumVotesMax)