/*
lab 16 - JSON and APIs
   Requirements: Create a lab that connect to an API using JSON and make it appear on my lab's webpage
   Author: Austin Allen 
   Date: 06/05/2025 
*/

$("#ajaxComic").click(function () {
  // initialize variable
  var maxNum;
  var newURL;

  // First AJAX call to get the latest comic number
  $.ajax({
    url: "https://corsproxy.io/?https://xkcd.com/info.0.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
      maxNum = data.num;
      // Generate random comic URL
      newURL = "https://corsproxy.io/?https://xkcd.com/" + Math.floor(Math.random() * maxNum) + "/info.0.json";

      // Second AJAX call for random comic
      $.ajax({
        url: newURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
          var titleText = data.title;
          var imageURL = data.img;
          var imageAlt = data.alt;
          $("#output").html("<h3>" + titleText + "</h3>");
          $("#output").append("<img src='" + imageURL + "' alt='" + imageAlt + "'>");
          $("#output").append("<p>" + imageAlt + "</p>");
        },
        //error if comic cannot load
        error: function (jqXHR, textStatus, errorThrown) {
          console.log("Error :", textStatus, errorThrown);
        }
      });
    },
    //error if not able to get latest comic
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error getting comic :", textStatus, errorThrown);
    }
  });
});
