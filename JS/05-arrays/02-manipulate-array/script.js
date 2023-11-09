/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
  ];

  document.getElementById("run").addEventListener("click", () => {
    let secondFruit = [];
    for (let i = 1; i < fruits.length - 1; i++) {
      secondFruit[0] = "banane";
      secondFruit.push(fruits[i]);
    }
    secondFruit.push("Kiwi");
    console.log(secondFruit);
  });

  // your code here
})();
