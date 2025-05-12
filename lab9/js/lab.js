/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Austin Allen (Maverick)
   Date: 05/08/2025 
*/

//add button to create a border around lab challenge 
$('#challenge').click(function() {
    //now add (or subtract) the "special" class to the section
  $('#challengeSection').toggleClass('highlight');
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
