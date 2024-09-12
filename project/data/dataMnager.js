const path = require('path');
const fs = require("fs");
class data{
   #path = '../db/monPatients.json';
   #filepath = path.resolve(__dirname,this.#path);
    
   getPatients(){
        const data = fs.readFileSync(this.#filepath,'utf8');
        return JSON.parse(data);
   }

   pushPatients(array){
    const data = JSON.stringify(array);
    fs.writeFile(this.#filepath,data, (err) => {
        if (err) {
            console.error(err);
        } else {

        }
    });
}


}

module.exports = data;