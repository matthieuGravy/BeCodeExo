/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", () => {
    let n = 21;
    if (n % 2 === 1) {
      n = Math.floor(n / 2) * 2;
    }
    const tab = [];
    const tabE = [];
    for (i = 2; i <= 21; i += 2) {
      tab.push(i);
      let u = i ** 2;
      tabE.push(u);
    }
    console.log(tabE);
  });
})();
