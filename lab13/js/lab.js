/*
lab 13 - Using loops to print "Race Car" for multiplies of 2, 6, and 12 instead of a number
   Requirements: Create a loop function that prints "Race Car" instead of number and prints from 1 to 100
   Author: Austin Allen 
   Date: 05/24/2025 
*/



// Use a for loop to print all the numbers from 1 to 100. Test and debug.
for (let i = 1; i <= 100; i++) {
  // For numbers which are multiples of both 2 and 6, print “Race Car” instead.
  if(i % 15 == 0) {
    console.log("Race Car!");
    
  }
  // Add an if statement: if the number is a multiple of 2, print “Race” instead of the number.
  else if (i % 2 == 0) {
    console.log("Car!");
  }
  // Add an else if condition: If the number is a multiple of 6, print “Car” instead of the number.
  else if(i % 6 == 0) {
    console.log("Race!");
    
  }

  else {
    console.log(i);
  }
  
}