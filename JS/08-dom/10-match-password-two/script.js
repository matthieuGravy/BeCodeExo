/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
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
        input.classList.add("error");
      });
    } else {
      inputs.forEach((input) => {
        input.classList.remove("error");
      });
    }
  });
})();
