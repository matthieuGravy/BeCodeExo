/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let age, sexe, ville;
  let confirmation = false;

  while (!confirmation) {
    age = prompt("Quel est ton âge ?");
    sexe = prompt("Quel est ton sexe ?");
    ville = prompt("Quelle est ta ville ?");

    confirmation = confirm(
      `Âge : ${age}\nSexe : ${sexe}\nVille : ${ville}\n\nConfirmez-vous ces informations ?`
    );

    if (!confirmation) {
      alert("Veuillez réessayer de saisir vos informations.");
    }
  }

  alert("Merci !");
})();
