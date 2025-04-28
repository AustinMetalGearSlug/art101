// index.js - Demonstrate how to use and create object variables and arrays in Javascript 
// Author: Austin Allen
// Date: 04/28/2025

//Define Variables

myDreamCar = ["Chevy"];

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("MyDreamCar");
  // the code that makes everything happen
}

// let's get this party started
main();

//Define Variables 
myDreamCar = { 
  make: "Chevy", 
  model: "Malibu", 
  color: "Grey", 
  transmission: "Muncie M20", 
  engine: "V8", 
  year: "1973",
  age: function() {
      return 2025 - this.year;
  }
}

//output 
document.writeln("Kind ofCar Want to Drive: ", myDreamCar, "</b>");

document.writeln("myDreamCar: <pre>",
  JSON.stringify (myDreamCar, null, '\t'), "</p>");
