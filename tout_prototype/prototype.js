const readline = require("readline");
const fs = require('fs').promises;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const get_data = async (file) => {
    try {
        const data = await fs.readFile(file, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(err);
    }
}
const add =  (array,file)=>{
    const data = JSON.stringify(array);
    fs.writeFile(file, data, (err) => {
        if (err) {
            console.error(err);
        } else {

        }
    });
}


const Delete = (id) => {
  
};


const startCalculator = async () => {
  let nom;
  let prenom;
  let adresse;
  let date_de_naissance;
  let numero_de_securite_sociale;
  const letter = await askQuestion("Enter the what u wanna do (add,show,delete,edit,search): ");
  if (letter == "add") {
    nom = await askQuestion("Enter the first_name: ");
    prenom = await askQuestion("Enter the last_name: ");
    adresse = await askQuestion("Enter the last_name: ");
    date_de_naissance = await askQuestion("Enter the last_name: ");
    numero_de_securite_sociale = await askQuestion("Enter the last_name: ");
    let patient = {
        first_name:nom,
        second_name:prenom,
        addres:adresse,
        age:Number(date_de_naissance),
        NSM:Number(numero_de_securite_sociale),
      }
      let data = await get_data('monPatients.json');
      data.push(patient)

    add(data,'monPatients.json');
  } else if (letter == "d") {
    id = await askQuestion("Enter the id: ");
    Delete(id);
  }

  rl.close();
};

startCalculator();