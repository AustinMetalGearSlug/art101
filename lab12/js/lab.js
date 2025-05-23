/*
lab 12 - Using conditionals that will select an output based on a user's input based on the length of their name.
   Requirements: Create a function that depends on conditionals.
   Author: Austin Allen 
   Date: 05/17/2025 
*/

//An array of Klingon Houses. Variants for the function to select from
let variants=[
  { name: "Martok", image: "img/lab12_housemartok.png" },
  { name: "Gowron", image: "img/lab12_housegowron.png" },
  { name: "Mogh", image: "img/lab12_housemogh.png" },
  { name: "Grilka", image: "img/lab12_housegrilka.png" },
  { name: "Gorkon", image: "img/lab12_housegorkon.png" },
  { name: "K'mpec", image: "img/lab12_housekmpec.png" },
  { name: "Mo'Kai", image: "img/lab12_housemokai.png" },
];

function sortHouse(dataLength) {
  let remainder = dataLength % 7;
  let house = variants[remainder];

  $("#output").append(`
    <p>You are now a member of House ${house.name}, Qapla'!!!</p>
    <img src="${house.image}" alt="${house.name}"
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


