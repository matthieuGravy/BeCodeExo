/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let myself = new Object();
  myself.lastname = "Gravy";
  myself.firstname = "Matthieu";
  myself.age = "33";
  myself.city = "Brussel";
  myself.country = "Belgium";

  document.querySelector("#run").addEventListener("click", () => {
    console.log(myself);
  });
})();
