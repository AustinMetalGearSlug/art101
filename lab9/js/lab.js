/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Austin Allen (Maverick)
   Date: 05/08/2025 
*/

//add button to #challenge
$('#challenge').append("<button id='button-challenge'>Da Button</button>");

//add a click listener to the button by ID
$(".button-challenge").click(function()) {
 // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});


