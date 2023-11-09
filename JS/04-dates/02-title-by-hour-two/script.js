/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
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
