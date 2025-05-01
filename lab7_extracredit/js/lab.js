// index.js - Demonstrate how to use and create funcations and revsering object arrays and abstract functions 
// Author: Austin Allen
// Date: 04/29/2025

//sortUserName - create a function that takes user input and resorts their name

function randomCodeName(){
    var userName = window.prompt("Welcome to Outer Heaven, please tell me your full name solider");
console.log("userName =", userName);

    //split string to array 
    var nameArray = userName.split('');
    console.log ("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log ("nameArraySort", nameArraySort);
    //join array back to string 
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);
return nameSorted;
}

//output
document.writeln("This is your new code name, welcome to Outer Heaven:",sortUserName(), "</br>");


