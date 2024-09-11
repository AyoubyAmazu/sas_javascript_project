// console.log("hello ayoub ");


// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Quel est votre nom ? ', (name) => {
//   console.log(`Bonjour, ${name} !`);
//   rl.close();
// });


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Entrez le premier nombre : ', (num1) => {
  rl.question('Entrez le deuxième nombre : ', (num2) => {
    const result = Number(num1) + Number(num2);
    console.log(`Le résultat est : ${result}`);
    rl.close();
  });
});