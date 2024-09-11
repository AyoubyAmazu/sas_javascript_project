const fs = require('fs');
const monTableau = [
        "pomme",
        "banane",
        "orange",
        42
    ];
    
    const data = JSON.stringify(monTableau);
    
    fs.writeFile('monPatients.json', data, (err) => {
            if (err) {
                    console.error(err);
                } else {
        console.log('Le tableau a été enregistré dans monTableau.json');
    }
});


fs.readFile('monPatients.json', 'utf8', (err, data) => {
        if (err) {
                console.error(err);
            } else {
        const monTableau = JSON.parse(data);
        console.log(monTableau);
    }
});
