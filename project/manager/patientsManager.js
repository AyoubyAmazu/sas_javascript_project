const path = require("path");
const datas = require(path.resolve(__dirname, "../data/dataMnager.js"));
// const patientArray = ; 

class gestionPatients {
    
    #dataManager = new datas();
    #array = this.#dataManager.getPatients();

    afficher(){
        return this.#dataManager.getPatients()
        }
  addPatient(patient) {
    this.#array.push(patient);
    this.#dataManager.pushPatients(this.#array);    
    }

  supprimerPatient(NSS) {
    let patient = true;
    for (let i = 0; i < this.#array.length; i++) {
      if (Number(NSS) == Number(this.#array[i]["NSS"])) {
        this.#array.splice(i, 1);
        patient = false;
        this.#dataManager.pushPatients(this.#array);
      }
    }
    if (patient) {
      return "patient not found !!";
    }
  }

  searchPatient(search){

    let patient = true;
    for(let i = 0; i<this.#array.length ; i++){
       if(this.#array[i]["first_name"]==search){ 
           patient = false
           return this.#array[i]
       }
    }
    if(patient){
        return "patient not found";
    }
  }


}


module.exports = gestionPatients;
