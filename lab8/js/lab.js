//Austin Allen 
//Lab 8 - Anon Funcations and Callbacks 
//Created 5/6/2025


//Call the funcation that sorts the user's name
function isEven(x){
    return (x % 2 == 0);
}

//test function 
console.log ("Is 1 even?", isEven(1));
console.log ("Is 2 even?", isEven(2));

array = [2, 13, 410, 17, 5, 9, 12]
console.log("My Array", array);

var result = array.map(isEven);
//should return [true, false, true, false, false]
console.log("Test of eveness of array:" , result); 

 // Your map results data
 var mapResults = "Your map results here";

 // Use jQuery to select the element by its ID and set the HTML content
 $("#output").html(mapResults);
 
 

var result = array.map(function(x){
    return x ** 0.5;
})

console.log("Sqaureroot of array:", result);