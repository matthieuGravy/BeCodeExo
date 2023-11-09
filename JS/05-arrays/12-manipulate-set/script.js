/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const fruits = new Set([
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
  ]);
  /*
    Un Set est une structure de données en JavaScript qui représente une collection d'éléments uniques, ce qui signifie que chaque élément dans le Set ne peut apparaître qu'une seule fois, et les doublons sont automatiquement éliminés.
    */
  /* Liste éléments sur set 
   .add()
   .delete()
   .has()
   .size()
   Array.from()
   for ... of
   .clear()
   new Set(nom du set)
   */
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    console.log(fruits);
    fruits.delete("pomme", "cerise");
    fruits.add("banane", "kiwi");
    console.log(fruits);
  });
})();
