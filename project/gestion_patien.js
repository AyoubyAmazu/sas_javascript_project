const readline = require("readline");
const fs = require('fs');
const path = require("path");
const patientManager = require(path.resolve(__dirname,"manager/patientsManager.js"));
let manager  = new patientManager();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
       
const askQuestion = (query) => {
          return new Promise((resolve) => rl.question(query, resolve));
      };
const startCalculator = async () => {
    let nom;
    let prenom;
    let adresse;
    let date_de_naissance;
    let numero_de_securite_sociale;
    let again = true;
    while(again){
    const letter = await askQuestion("Enter the what u wanna do (add,show,delete,search,quitter,modiffier): ");
    if(letter == "quitter"){
        again = false;
    }else if (letter == "add") {
      nom = await askQuestion("Enter the first_name: ");
      prenom = await askQuestion("Enter the last_name: ");
      adresse = await askQuestion("Enter the addresse: ");
      date_de_naissance = await askQuestion("Enter bithday: ");
      numero_de_securite_sociale = await askQuestion("Enter the NSS: ");
      let patient = {
          first_name:nom,
          second_name:prenom,
          addres:adresse,
          age:date_de_naissance,
          NSM:Number(numero_de_securite_sociale),
                     }
      manager.addPatient(patient);
    } else if (letter == "delete") {
        id = await askQuestion("Enter the NSS: ");
        manager.supprimerPatient(id);

    }else if(letter == "search"){
      nom = await askQuestion("Enter the nom u wanna search: ");
      console.log(manager.searchPatient(nom));
    }else if ( letter == "show"){
      console.log(manager.afficher());
    }else if(letter == "modifier"){
      number = await askQuestion("Enter the NSS of patient u wanna modifier: ");
      changeQuoi =  await askQuestion("u wanna modifier 'first_name','last_name','addres','age','NSS': ");
      newValue = await askQuestion("entrer new value: ");
      manager.modifier(number,changeQuoi,newValue);
    }
  }
    rl.close();
  
};
  startCalculator();
