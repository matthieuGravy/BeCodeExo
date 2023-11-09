/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    const action = document.querySelector(".material");
    const tab = ["red", "purple", "pink", "yellow"];
    const aleatoire = Math.floor(Math.random() * tab.length);
    action.style.backgroundColor = tab[aleatoire];
  });
})();
