import 'fs' form 'fs'
const monTableau = [
    "pomme",
    "banane",
    "orange",
    42
];

// const data = JSON.stringify(monTableau);

// fs.writeFile('monPatients.json', data, (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('Le tableau a été enregistré dans monTableau.json');
//     }
// });

// const fs = require('fs');
const fs = require('fs').promises;

const get_data = async (file) => {
    try {
        const data = await fs.readFile(file, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(err);
    }
}
const add = async (patient,file)=>{
    let patients = await get_data('monPatients.json')
    patients.push(patient);
    const data = JSON.stringify(patients);
    fs.writeFile(file, data, (err) => {
        if (err) {
            console.error(err);
        } else {
           return
        }
    });
}

// Use with async/await:
(async () => {
    const data = await get_data('monPatients.json');
    console.log(data);  // Now this will log the data
})();

