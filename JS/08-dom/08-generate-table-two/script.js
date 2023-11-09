/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.querySelector("#target").innerHTML = `
      <table>
      </table>
    `;
  let number = 10;

  const table = document.querySelector("table");
  for (let i = 1; i <= 10; i++) {
    const produit = i * number;
    const ligne = `
      <tr>
          <td>${i} x ${number} = ${produit}</td>
      </tr>
    `;
    table.innerHTML += ligne;
  }
})();
