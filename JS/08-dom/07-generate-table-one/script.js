/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
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

  const ligne = (document.innerHTML = `
    <tr>
        <td></td>
    </tr>
  `);
  const table = document.querySelector("table");
  for (let i = 0; i < 10; i++) {
    table.innerHTML += ligne;
  }
})();