/*
lab 16 - JSON and APIs
   Requirements: Create a lab that connect to an API using JSON and make it appear on my lab's webpage
   Author: Austin Allen 
   Date: 06/05/2025 
*/

// ajax object
const ajaxObject = {
  url: "https://api.nasa.gov/planetary/apod",
  data: {
    api_key: "YiD984R01LC5AYCSHKxgcPwkqtwXNMAcbD4JjZ2y",
    count: 1
  },
  type: "GET",
  dataType: "JSON"
}

// button listener
$("button").click(function(){

  // call ajax
  $.ajax(ajaxObject)
  // success callback
  .done(function(data) {
    console.log(data);
    // pull out relevant data from results
    let title = data[0].title;
    let date = data[0].date;
    let desc = data[0].explanation;
    let imageUrl = data[0].url;
    // but data in output
    $("#output").html(`<h2>${title}</h2>`);
    $("#output").append(`<img src='${imageUrl}' />`);
    $("#output").append(`<p class='date'>${date}</p>`);
    $("#output").append(`<p class='desc'>${desc}</p>`);
  })
  // fail callback
  .fail(function(xhr, status, error) { 
    // Error handler
    console.error(error); 
  })
  
})