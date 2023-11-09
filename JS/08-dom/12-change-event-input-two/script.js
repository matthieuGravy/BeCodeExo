/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const regex = /^(?=.*\d.*\d).{8,}$/;
  const input = document.querySelector("#pass-one");
  const validity = document.querySelector("#validity");
  input.addEventListener("input", () => {
    const inputValue = input.value;
    if (regex.test(inputValue)) {
      console.log("OK");
      validity.textContent = "Ok";
    } else {
      console.log("Pas ok");
      validity.textContent = "Pas ok";
    }
  });
})();
