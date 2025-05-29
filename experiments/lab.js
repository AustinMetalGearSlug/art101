// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://yesno.wtf/api",
    // The data to send (will be converted to a query string)
    data: { 
           
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
        $("#output").append(data.answer);
        $("#output").append("<img src="+data.image+">");

    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})