// challenge

//js
// I. Liste Of Random Numbers
const nbChoice = 50;
let n = Math.floor(Math.random() * nbChoice);
const tab = [];
for (let e = 0; e <= n; e++) {
  tab.push(e);
}

// II. Translate JS
const liste = [1, 2, 3, 4];

function inArray(el, liste) {
  let exist = false;
  for (let I = 0; I <= liste.length; liste.length) {
    if (el == liste[I]) {
      exist = true;
      break;
    }
  }
  return exist;
}

/* Python 
import random

aleatoireA = []

for e in range(10):
    nombreAleatoire = random.randint(1, 100) 
    aleatoireA.append(nombreAleatoire)

aleatoireA.sort()
print(aleatoireA)

*/

// sort an array
const aleatoireA = [];

for (let e = 0; e < 10; e++) {
  const nombreAleatoire = Math.floor(Math.random() * 100) + 1; // Génère un nombre aléatoire entre 1 et 100
  aleatoireA.push(nombreAleatoire);
  aleatoireA.sort();
}
console.log(aleatoireA);
