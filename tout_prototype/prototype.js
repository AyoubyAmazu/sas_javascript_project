



const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require('fs');



let patient;
let monPatients = [];

rl.question('Entrez votre nome : ', (name) => {
  rl.question('Entrez votre age : ', (age) => {
    rl.question('Entrez votre ville : ', (ville) => {
    patient = {nome:name,age:age,ville:ville};
    monPatients.push
    rl.close();
  });
});

});

// Écriture dans le fichier


const data = JSON.stringify(monPatients);

fs.writeFile('monPatients.json', data, (err) => {
    if (err) {
        console.error(err);
    }
});

// Lecture du fichier
fs.readFile('monPatients.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        const tableauLu = JSON.parse(data);
        console.log(tableauLu);
    }
});