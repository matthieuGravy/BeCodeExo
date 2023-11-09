/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const target = document.querySelector("#target");
  const text = target.textContent;
  let fontsize = 10;

  for (let i = 0; i < text.length; i++) {
    newText += `<span style="font-size:${fontsize}px">${text[i]}</span>`;
    fontsize += 1;
  }

  target.innerHTML = newText;
})();
