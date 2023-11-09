/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  let text = document.getElementById("target");
  let splitText = text.innerText.split("");

  text.innerHTML = "";
  i = 0;
  setInterval(function () {
    AjoutDeLettre();
  }, 100);

  function AjoutDeLettre() {
    if (i < splitText.length) {
      text.innerHTML += splitText[i];
      i++;
    }
  }
})();
