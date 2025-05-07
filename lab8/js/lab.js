//Austin Allen 
//Lab 8 - Anon Funcations and Callbacks 
//Created 5/6/2025


function isEven(x){
    return (x % 2 == 0);
}

//test function 
console.log ("Is 1 even?", isEven(1));
console.log ("Is 2 even?", isEven(2));

array = [2, 13, 410, 17, 5, 9, 12]
console.log("My Array", array);

var result1 = array.map(isEven);
//should return [true, false, true, false, false]
console.log("Test of Eveness of Array:" , result1); 


var result2 = array.map(function(x){
    return x ** 0.5;
})

console.log("Sqaureroot of Array:", result2);

  // Your map results data
var mapResults = "Your map results here";

// Use jQuery to select the element by its ID and set the HTML content
var mapResult = "<b>Array Result:</b> " + array +
    "<br><b>Test of Eveness of Array:</b> " + result1 +
    "<br><b>Square Root of Array:</b> " + result2;

$("#output").html(mapResult);
