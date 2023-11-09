/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  const opOne = document.getElementById("op-one").value;
  const opTwo = document.getElementById("op-two").value;
  document.getElementById("addition").addEventListener("click", () => {
    let nbOne = parseInt(opOne);
    let nbTwo = parseInt(opTwo);
    let somme = nbOne + nbTwo;
    if (!isNaN(nbOne) && !isNaN(nbTwo)) {
      alert(somme);
    } else {
      alert("compléter les champs");
    }
  });

  document.getElementById("substraction").addEventListener("click", () => {
    // perform an substraction
    let nbOne = parseInt(opOne);
    let nbTwo = parseInt(opTwo);
    let substract = nbOne - nbTwo;
    if (!isNaN(nbOne) && !isNaN(nbTwo)) {
      alert(substract);
    } else {
      alert("compléter les champs");
    }
  });

  document.getElementById("multiplication").addEventListener("click", () => {
    // perform an multiplication
    let nbOne = parseInt(opOne);
    let nbTwo = parseInt(opTwo);
    let mult = nbOne * nbTwo;
    if (!isNaN(nbOne) && !isNaN(nbTwo)) {
      alert(mult);
    } else {
      alert("compléter les champs");
    }
  });

  document.getElementById("division").addEventListener("click", () => {
    // perform an division
    let nbOne = parseInt(opOne);
    let nbTwo = parseInt(opTwo);
    let div = nbOne + nbTwo;
    if (!isNaN(nbOne) && !isNaN(nbTwo)) {
      alert(div);
    } else {
      alert("compléter les champs");
    }
  });
})();
