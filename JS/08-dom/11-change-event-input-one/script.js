/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  /*
- Compter le nb de caractères
- écouter le nb de caractères : 
    - indicator.textcontnt : ${nb de caractère} /10
    - Si maximum : input ne peut pas accepter la saisie [regex]
    

    let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

*/

  const input = document.querySelector("#pass-one");
  const indicator = document.querySelector(".indicator");
  let validity = document.getElementById("validity");

  const max = 10;
  input.setAttribute("maxlength", "10");

  input.addEventListener("input", () => {
    const ecoute = input.value.length;
    indicator.innerHTML = ` ${ecoute}/10`;
  });
})();
