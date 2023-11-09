/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  const performOperation = (operation) => {
    // perform the operation
    const opOne = document.getElementById("op-one").value;
    const opTwo = document.getElementById("op-two").value;
    let nbOne = parseInt(opOne);
    let nbTwo = parseInt(opTwo);
    if (isNaN(nbOne) || isNaN(nbTwo)) {
      alert("compléter les champs");
      return;
    }
    switch (operation) {
      case "addition":
        nbOne += nbTwo;
        alert(nbOne);
        break;
      case "substraction":
        nbOne -= nbTwo;
        alert(nbOne);
        break;
      case "multiplication":
        nbOne *= nbTwo;
        alert(nbOne);
        break;
      case "division":
        nbOne /= nbTwo;
        alert(nbOne);
        break;
    }
  };

  Array.from(document.querySelectorAll("button.operator")).forEach(($btn) =>
    $btn.addEventListener("click", () => (performOperation($btn.id), false))
  );
})();
