/*
lab 12 - Using conditionals that will select an output based on a user's input based on the length of their name.
   Requirements: Create a function that depends on conditionals.
   Author: Austin Allen 
   Date: 05/17/2025 
*/

//An array of Klingon Houses. Variants for the function to select from
let variants=[" Martok ", " Gowron ", " Mogh ", " Grilka ", " Gorkon ", " K'mpec ", " Mo'Kai "];

function sortHouse( dataLength ) {
  let remainer=dataLength%7;  
  $("#output").append(" ,you are now a member of House "+variants[remainer]+ ", Qapla'!!!");
  
}

function whatHappensOnClick(){
  
    console.log("click");
    
     let data=$("#input").val();
     let dataLength=data.length;

       // Clear previous output
  $("#output").html("");

  // Check if the input is non-empty and its length is 18 characters or fewer.
     if (data && dataLength <= 18) {
      $("#output").append(" From this day forth... " + data);

      sortHouse(dataLength);    
      console.log("there is some data");
    }
   // If the input is too long (more than 18 characters), warn the user.
     else if (dataLength>=18){
      $("#output").append("Too much of a name for such little honor");
    }
    //If the user dosent enter a input, warn the user
    else {
      $("#output").append(" ENTER YOUR NAME YOU NUCH!!! ");  
    }
}

$("#button").click( whatHappensOnClick );


