// index.js - GURPS the role playing system into a text based format in a pseudocode format
// Author: Austin Allen
// Date: 4/21/2025

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();


// pseudocode GURPS text based roleplaying game 

Start
//set the stage 
//create the game board: 10 x 10 hex grid with empty values 

//User Character Creation 
//to make your character,the user has a base state of 10 and can from 1 to 10 points to add for the stats and have 35 points to spend. ST, DX, IQ and HT are the player stats, 
// (ST) stands for strength determines how strong a character is and how much damage
// they can deal, (DX) stands for dexterity for skills, physical rolls and counter 
// maneuvers (IQ) determines intelligence and perception rolls, (HT) determines health 
// rolls and how much damage the can take before dying.
 
 //Dice Roll Function
           //to play GURPS, player and DM will roll a 3D6 to determine action outcomes
//function RollDiceThreeTimes ()
//Generate a random number between 1 and 6 (inclusive) 
//Roll three dice three times, add up values to see if a role was successful or failed
//const roll 3D6 = roll() + roll() + roll() 
// if roll is a (1,1,1) or (1,1,2) the roll is critical success, if roll is (6,6,6) then the roll is a critical failure 
//console.log (“you rolled a 3D6, and got…”, rollD6()) 
// if role is below skill threshold, the role is successful, if role is past skill threshold the role is a failure 

//User input function 
          //function RollDiceThreeTimes ()
//alternate turns between user and computer. 
// if the user role is at or below their skill level, their role is success. If user role is more
// than their skill level the role is unsuccessful 
          // Validate user input, if player is attacking a NPC with a weapon their success is  determined by the skill level of their DX, if user DX skill is 14 and player rolls a 10 the     role is successful 
//console.log (“you rolled a 3D6, and got…”, rollD6()) 
// evaluate computer possibilities, dodge, block from user actions. 
   //determine and summarize from events and proceed 
//computer choose next action, NPC attacks user or NPC moves
// alternate between player and use after each role/ action turn
End 

