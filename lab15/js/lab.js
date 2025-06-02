/*
lab 15 - AJAX
   Requirements: Create a lab that connect to an API using AJAX/JSON and make it appear on my lab's webpage
   Author: Austin Allen 
   Date: 05/30/2025 
*/

//use AJAX to connect to yesno.wtf/api
 // When a user clicks the button
    $("button").click(function () {
      console.log("Button clicked!");

      // Send a GET request using jQuery to the Dino Ipsum API
      $.get('https://dinoipsum.com/api/?format=html&words=10&paragraphs=2')
        .done(function (html) {
          console.log("Wheres the Dinos!");
         // Display the HTML response
          $('#button').html(html);
        })
        .fail(function (xhr, status, errorThrown) {
          console.log("Error: " + errorThrown + " Status: " + status);
        });
    });