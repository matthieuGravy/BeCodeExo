import "./style.css";

// I. Calcul

// somme de deux nombres :
// utiliser return pour envoyer la valeur

function somme(a, b) {
  return a + b;
}

console.log(somme(1, 2));
//3

//division de deux nombres
function division(a, b) {
  return a / b;
}
console.log(division(4, 2));
//2

//modulo de deux nombres sasis
function modulo(a, b) {
  return a % b;
}
console.log(modulo(10, 3));
//1

// II. Contaténation de phrases

let stringA = "wel";
let stringB = "come";

function concatainer(a, b) {
  return a + b;
}
console.log(concatainer(stringA, stringB));

console.log(stringA.concat("", stringB));
//'welcome'

// III. tva
let prix = 10;
let taux = 1.21;

function tva(a, b) {
  return a * b + "€";
}
console;
console.log(tva(prix, taux));
//'12.1€'

// IV. Surface d'un cercle

function surfaceCercle(a) {
  return `Surface de l'air :` + Math.PI * Math.pow(a, 2);
}

console.log(surfaceCercle(2));
//'Surface de l'\air: 12.56637 ...'
// V. conversion du temps en seconde

const d = new Date("July 21, 1983 01:03:01");

function times(a) {
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();

  let minSec = min * 60;
  let hourSec = hour * 3600;
  let somme = minSec + hourSec;
  let texte = `
  ${hour} minutes en secondes: ${hourSec} secondes <br/>
  ${min} minutes en secondes: ${minSec} secondes <br/>
  check secondes: ${sec} <br/>
  Au total il y a ${somme} seoncdes
  `;

  return texte;
}

console.log(times(d));

/*****************************
 *
 * COnditions
 */

// I. Tarifs de cinéma

const tarifReduce = 8;
const tarifComplet = 10;

let custommer = 10;

if (custommer === 10) {
  console.log(tarifComplet);
} else {
  console.log(tarifReduce);
}

// II. Maximum
function checkNumber(a, b, c) {
  const numbers = [a, b, c];
  return Math.max(...numbers);
}
console.log(checkNumber(1, 2, 3));

// III. identique
let dice1 = [1, 2, 3, 4, 5, 6];
let dice2 = [1, 2, 3, 4, 5, 6];
let dice3 = [1, 2, 3, 4, 5, 6];
//random

function hasard(a) {
  const random = Math.floor(Math.random() * a.length);
  return a[random];
}

console.log(hasard(dice1), hasard(dice2), hasard(dice2));

let resultD1 = hasard(dice1);
let resultD2 = hasard(dice2);
let resultD3 = hasard(dice3);

function checkMax(a, b, c) {
  return Math.max(a, b, c);
}
console.log(checkMax(resultD1, resultD2, resultD3));

// IV Numéro du jour
const day = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

let jour = 3;
jour -= 1;

const searchJour = day[jour];
console.log(searchJour);

// V. Imprimerie
const prixImpression1 = 0.12;
const prixImpression2 = 0.11;
const prixImpression3 = 0.1;

let nbCopies = 20;

// nb de copie de 1 à 9  = compter les feuilles / prix
// nb de coopie = 10  - compter le nb de feuille / prix SI plus grand

// Print numbers TO DO

//---------------------

let ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

ten.forEach((a) => {
  const foo = a;
  console.log(foo);
});

for (const item of ten) {
  const liste = item;
  console.log(item);
}
