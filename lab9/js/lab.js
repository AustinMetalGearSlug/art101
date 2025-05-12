/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Austin Allen (Maverick)
   Date: 05/08/2025 
*/

//add button to create a border around lab challenge 
$(".button-press").append("<button class='button-challenge'>Make Special</button>");
// add a click listener to the challenge button
  $(document).on("click", ".button-challenge", function() {
      $("#challenge").toggleClass("special");
    });

    
//add button to results
$("result").ready(function() {
  $('#hide').click(function() {
    $('#resultText').hide();
  });

  $('#show').click(function() {
    $('#resultText').show();
  });
});

//add button to make turn user invisbible 
