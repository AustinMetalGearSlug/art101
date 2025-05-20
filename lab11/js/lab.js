/*
   lab 11 - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
   Requirements: jQuery must be loaded for this script to work.
   Author: Austin Allen 
   Date: 05/17/2025 
*/

// Sorts first and last name into a code name
$("#action").click(function () {
  let userText = $("#textbox").val().trim(); // get input value and trim spaces

  function sortUserName(fullName) {
    const prefix = ["Carno", "Tyranno", "Bronto", "Makros", "Modes", "Stego", "Mammoth", "Titano", "Banana Slug"];
    const suffix = ["Raptor", "Saurus", "Rex", "Iguanodon", "asaurus", "Ceratops", "Mimus", "Nychus", "Deino"];

    const namesArray = fullName.split(" ");
    if (namesArray.length < 2) {
      return "Please provide both first and last names.";
    }

    const randPrefix = prefix[Math.floor(Math.random() * prefix.length)];
    const randSuffix = suffix[Math.floor(Math.random() * suffix.length)];

    return `${randPrefix} ${randSuffix}`;
  }

  const dinoName = sortUserName(userText);

  // Replace output instead of appending
  $("#output").html('<div class="text"><p>' + dinoName + '</p></div>');
});