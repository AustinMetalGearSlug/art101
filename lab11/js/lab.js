/*
   lab 11 - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
   Requirements: jQuery must be loaded for this script to work.
   Author: Austin Allen 
   Date: 05/17/2025 
*/

// Sorts the characters of a string in alphabetical order.
$("#action").click(

  function(){
    let userText=$("#textbox").val();
   $("#output").append('<div class="text"><p>' + userText + '</p></div>');
    /// our action 
    
  }

);