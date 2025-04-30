// index.js - Demonstrate how to use and create funcations and revsering object arrays and abstract functions 
// Author: Austin Allen
// Date: 04/29/2025

//sortUserName - create a function that takes user input and resorts their name

function sortUserName(){
    var userName = window.prompt("Hello, please tell me your full name");
console.log("userName =", userName);
    //split string to array 
    var nameArray = userName.split('');
    console.log ("nameArray = ", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log ("nameArraySort", nameArraySort);
    //join array back to string 
    varnameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);
return nameSorted;
}

//output
document.writeln("Look!, I made your name better!, hello:",)
    sortUserName(), "</br>";
