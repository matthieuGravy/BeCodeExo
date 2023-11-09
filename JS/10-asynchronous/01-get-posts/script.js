/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  const button = document.querySelector("#run");

  button.addEventListener("click", () => {
    window.lib.getPosts((error, articles) => {
      if (error) {
        console.error("Une erreur s'est produite :", error);
      } else {
        console.log("Articles obtenus :", articles);
      }
    });
  });
})();
