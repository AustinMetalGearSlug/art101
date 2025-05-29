/*
lab 14 - Debug and refactor a previous lab
   Requirements: Refactor and debug a preivous lab by inspecting any issues from the console or to fully complete a previous lab
   Author: Austin Allen 
   Date: 05/27/2025 
*/
//variants are based on the user input length
let variants=[
  { name: "Foxhound", image: "img/lab_snake_foxhound.png" },
  { name: "Diamond Dogs", image: "img/lab_snake_dd.png" },
  { name: "Desperado", image: "img/lab_snake_desperado.png" },
  { name: "Diamond Dogs", image: "img/lab_snake_dd.png" },
  { name: "Foxhound", image: "img/lab_snake_foxhound.png" },
  { name: "Diamond Dogs", image: "img/lab_snake_dd.png" },
];

//assign user input based on their name length and assign them to team
function sortTeam(dataLength) {
  let remainder = dataLength % 7;
  let team = variants[remainder];

  $("#output").append(`
    <p>You are now a member of the unit ${team.name}, </p>
    <img src="${team.image}" alt="${team.name}"
         style="max-width: 300px; height: auto; border-radius: 10px;" />
  `);
}

function whatHappensOnClick(){
  
    console.log("click");
    
     let data=$("#input").val();
     let dataLength=data.length;

       // Clear previous output
   $("#output").html("");

  // Check if the input is non-empty and its length is 18 characters or fewer.
     if (data && dataLength <= 18) {
      $("#output").append(" Colonel...kept you waiting huh?...whose this a new recurit or a rival PMC?... " + data);

      sortTeam(dataLength);    
      console.log("there is some data");
    }
   // If the input is too long (more than 18 characters), warn the user.
     else if (dataLength>=18){
      $("#output").append(" Attention soilder we do not have enough data ");
    }
    //If the user dosent enter a input, warn the user
    else {
      $("#output").append(" Soilder!!!...Enter your name that is a order");  
    }
}

$("#button").click( whatHappensOnClick );
