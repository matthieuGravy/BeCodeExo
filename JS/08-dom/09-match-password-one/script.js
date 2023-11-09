/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  const passOne = document.querySelector("#pass-one");
  const passTwo = document.querySelector("#pass-two");
  const inputs = document.querySelectorAll("input");

  document.querySelector("#run").addEventListener("click", () => {
    console.log(passOne.value);
    console.log(passTwo.value);

    if (passOne.value !== passTwo.value) {
      inputs.forEach((input) => {
        input.style.borderColor = "red";
      });
    } else {
      inputs.forEach((input) => {
        input.style.borderColor = "initial";
      });
    }
  });
})();
