/*
lab 15 - AJAX
   Requirements: Create a lab that connect to an API using AJAX/JSON and make it appear on my lab's webpage
   Author: Austin Allen 
   Date: 05/30/2025 
*/

// Go to https://yesno.wtf/api

const ajaxObj = {
  url: "https://yesno.wtf/api",
  // data: {},
  type: "GET",
  dataType: "json"
}

// When a user clicks the button
$("#sumbuton").click(function() {
  console.log("click!");
  // use a jQuery AJAX call to fetch output
  $.ajax(ajaxObj)
  // callback for success - chained to xjax
  .done(function(data){
    console.log("Success!");
    console.log(data);
    // extract the ansewr from data
    let answer = data.answer;
    // extract image from data
    let imageURL = data.image;
    // build image html
    //let imageHTML = "<img src='" + imageURL + "'>";
    // equivalent to above - but using string interpolation
    let imageHTML = `<img src='${imageURL}'>`;
    // Insert the output in the output div
    $("#output").html("<h1>" + answer);
    $("#output").append(imageHTML);
  })
  // callback for failure - chained to ajax
  .fail(function( xhr, status, errorThrown ) { 
    console.log(errorThrown + " Status:" + status );
  });
})

