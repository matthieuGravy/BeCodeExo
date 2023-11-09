/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
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

        articles.forEach((article) => {
          window.lib.getComments(article.id, (commentError, comments) => {
            if (commentError) {
              console.error(
                "Une erreur s'est produite lors de la récupération des commentaires :",
                commentError
              );
            } else {
              article.comments = comments;
            }
          });
        });

        console.log("Articles avec commentaires :", articles);
      }
    });
  });
})();
