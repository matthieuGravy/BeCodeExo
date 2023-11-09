/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
  // your code here
  const dateEpoch = Date.now();
  const translateDate = new Date(dateEpoch);
  console.log(translateDate);
  const hoursNow = translateDate.getHours();
  console.log(hoursNow);
  const target = document.getElementById("target");
  if (hoursNow < 18) {
    target.innerHTML = `Bonjour`;
  } else {
    target.innerHTML = `Bonsoir`;
  }
})();
