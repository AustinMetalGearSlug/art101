//Requirements: jQuery must be loaded for this script to work, use appends to script new elements to an output di
//Author: Austin Allen
//Date: 05/15/2025 



$("#action").click(

 function(){
    let
userText=$("#textbox").val();
  $("#output").append( "<p class=message>"+ userText );

 });

 