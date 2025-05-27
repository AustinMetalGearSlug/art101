/*
lab 13 - Using loops to print "Pizza Da Hutt" for multiplies of 2, 6, and 12 instead of a number
   Requirements: Create a loop function that prints "Pizza Da Hutt" instead of number and prints from 1 to 100
   Author: Austin Allen 
   Date: 05/24/2025 
*/
function whatHappensOnClick() {
    console.log("click");

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 

    for (let i = 1; i <= 30; i++) {
      let message = "";

      if (i % 6 === 0 && i % 2 === 0) {
        message = "Pizza Da Hutt!";
      } else if (i % 4 === 0) {
        message = "Hutt!";
      } else if (i % 2 === 0) {
        message = "Pizza!";
      } else {
        message = i;
      }

      const p = document.createElement("p");
      p.textContent = message;
      outputDiv.appendChild(p);
    }
  }

  $(document).ready(function () {
    $("#button").click(whatHappensOnClick);
  });