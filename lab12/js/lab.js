/*
lab 12 - Using conditionals that will select an output based on a user's input based on the length of their name.
   Requirements: Create a function that depends on conditionals.
   Author: Austin Allen 
   Date: 05/17/2025 
*/

//An array of dinosaurs. Variants for the function to select from
let variants = [
 { name: "Spinosaurus", image: "img/lab12_spinosaurus.jpg" },
  { name: "Acrocanthosaurus", image: "img/acrocanthosaurus.jpg" },
  { name: "Utahraptor", image: "img/lab12_utahraptor.jpg" },
  { name: "Tyrannosaurus Rex", image: "imag/lab12_trex.jpg" },
  { name: "Giganotosaurus", image: "img/lab12_giganotosaurus.jpg" },
  { name: "Triceratops", image: "img/lab12_triceratops.jpg" },
  { name: "Ankylosaurus", image: "img/lab12_ankylosaurus.jpg" },
  { name: "Iguanodon", image: "img/lab12_iguanodon.jpg" },
  { name: "Parasaurolophus", image: "img/lab12_parasaurolophus.jpg" }
]


//function that sorts dinosaurs from the variant array 

function sortIntoDino(dataLength) {
  let remainder = dataLength % variants.length;
  $("#output").append(" .*RAWR*... You are a " + variants[remainder]);
}

//function when click to generate output
function whatHappensOnClick() {
  console.log("click");

  let data = $("#input").val();
  let dataLength = data.length;

  $("#output").html(""); 
  // Clear previous output after

  if (!data) {
    $("#output").append("Please enter a name");
  } else if (dataLength > 20) {
    $("#output").append("Too much of a name");
  } else {
    $("#output").append(" " + data);
    sortIntoDino(dataLength);
    console.log("there is some data");
  }
}

$("#button").click(whatHappensOnClick);