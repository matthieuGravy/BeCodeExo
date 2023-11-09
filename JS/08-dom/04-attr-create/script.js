/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const source = document.querySelector("#source");
  const img = document.createElement("img");
  const data = source.getAttribute("data-image");
  if (data) {
    img.src = data;
    document.querySelector("#target").appendChild(img);
  }
  source.remove();
})();
