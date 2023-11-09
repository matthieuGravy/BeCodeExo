/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here where is jason?
  function whereIsJason(annee, jour) {
    // Les jours en JavaScript commencent le dimanche
    const jourSemaine = [
      "dimanche",
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi",
      "samedi",
    ];
    const vendredis = [];

    for (let mois = 0; mois < 12; mois++) {
      const date = new Date(annee, mois, 13);
      if (date.getDay() === 5) {
        vendredis.push(date.toLocaleDateString("fr-FR"));
      }
    }

    // Faites quelque chose avec le tableau vendredis
    console.log(vendredis);
  }

  // Appelez la fonction avec des valeurs d'exemple (année et jour)

  alert(whereIsJason(2023, "vendredi")); //undefined
})();
