/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Austin Allen (Maverick)
   Date: 05/08/2025 
*/

//add button to "What ever you do...don't pust this button or you'll become invsibible"
$('#challenge').append("<button id='button-challenge'>Da Button</button>");

//add a click listener to the invisible button 
$(".button-challnge").click(function){
 // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
}


