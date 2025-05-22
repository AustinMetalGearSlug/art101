/*
lab 12 - Using conditionals that will select an output based on a user's input based on the length of their name.
   Requirements: Create a function that depends on conditionals.
   Author: Austin Allen 
   Date: 05/17/2025 
*/

let variants = ["Spinosaurus", "Acrocanthosaurus", "Utahraptor", "Tyrannosaurus Rex", 
    "Giganotosaurus", "Triceratops", "Ankylosaurus", "Iguanodon"]

    function sortIntoDino( dataLength ) {
  
  let remainer=dataLength%4;  
  $("#output").append(".*RAWR*... You are a " + variants[remainer]);
  
}

function whatHappensOnClick(){
  
    console.log("click");
    
    let data=$("#input").val();
  
    let dataLength=data.length;
  
    if ( data && dataLength<=12 ) {
      
      $("#output").append(" " +  data);
      
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
