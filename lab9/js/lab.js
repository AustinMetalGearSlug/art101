/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Austin Allen (Maverick)
   Date: 05/08/2025 
*/

//add button to create a border around lab challenge 
$(".button-press").append("<button class='button-challenge'>Make Special</button>");
// add a click listener to the challenge button
  $(".button-press").click(function(){
    $(this).toggleClass("special");

  });

    
//add button to results
$(document).ready(function() {
  $('#hide').click(function() {
    $('#resultText').hide();
  });

  $('#show').click(function() {
    $('#resultText').show();
  });
});

// add button to make turn user invisible
$(document).ready(function() {
  // append the image to the container (but keep it hidden)
  $("#gifContainer").append('<img id="duranduranGif" src="img/duranduran.gif" alt="Duran Duran GIF" style="display:none;" />');

  // show the GIF when button is clicked
  $("#showGifButton").click(function() {
    $("#duranduranGif").fadeIn();
  });
});