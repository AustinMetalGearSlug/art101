/*
lab 12 - Using conditionals that will select an output based on a user's input based on the length of their name.
   Requirements: Create a function that depends on conditionals.
   Author: Austin Allen 
   Date: 05/17/2025 
*/

//An array of dinosaurs. Variants for the function to select from
let variants=["Yutyrannus", "Styracosaurus", "Anklyosaurus", "Carnotaurus"];


function sortIntoDino( dataLength ) {
  
  let remainer=dataLength%4;  
  $("#output").append("You are a "+variants[remainer]);
  
}

function whatHappensOnClick(){
  
    console.log("click");
    
    let data=$("#input").val();
  
    let dataLength=data.length;
  
    if ( data && dataLength<=12 ) {
      
      $("#output").append("You are a: " + data);
      
      sortIntoDino(dataLength);
      
      console.log("there is some data");
      
    }
  
    else if (dataLength>=12){
     
      $("#output").append("Too much of a name");
    }
    else {
      
      $("#output").append("Please enter a name");  
    }
}

$("#button").click( whatHappensOnClick );
