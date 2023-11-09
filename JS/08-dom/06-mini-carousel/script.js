/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const gallery = [
    "../../_shared/img/bell.svg",
    "../../_shared/img/clock.svg",
    "../../_shared/img/compass.svg",
    "../../_shared/img/lemon.svg",
    "../../_shared/img/map.svg",
  ];

  let currentIndex = 0;
  const img = document.querySelector("img");

  document.querySelector("#next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % gallery.length;
    img.src = gallery[currentIndex];
  });

  // your code here
})();
