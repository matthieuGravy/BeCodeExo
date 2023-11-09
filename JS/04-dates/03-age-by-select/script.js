/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  function donneDate() {
    const dobDay = document.getElementById("dob-day").value;
    const dobMonth = document.getElementById("dob-month").value;
    months = [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "aout",
      "septembre",
      "nobembre",
      "décembre",
    ];
    const mois = months[dobMonth - 1];
    const year = document.getElementById("dob-year").value;

    return `Date de naissance donnée : ${dobDay} ${mois} ${year}`;
  }

  document.getElementById("run").addEventListener("click", () => {
    alert(donneDate());
  });
})();
