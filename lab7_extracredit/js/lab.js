


function sortUserName(){
    var userName = window.prompt("Welcome to Outer Heaven, give your full name");

    const prefix = ["Liberty", "Combat", "Solid", "Whiskey", "Screaming", "Battle"];
    const suffix = ["Snake", "Fox", "Capybara", "Cat", "Ocelot", "Hound"];

    // Split full name into words (assuming first and last name)
    var namesArray = userName.split(' ');  
    
    if (namesArray.length < 2) {
        return 'Please provide both first and last names.';
    }
    let ranSuffix; // Declare ranSuffix here

    function sortUserName() {
        // ... code that uses ranSuffix ...
        console.log(ranSuffix); // This line will now work
    }
    var firstName = namesArray[0];
    var lastName = namesArray[1];

   //Randomly select a prefix and suffix
   const randPrefix = prefix[Math.floor(Math.random() * prefix.length)];
   const randSuffix = suffix[Math.floor(Math.random() * suffix.length)];

   return `${randPrefix} ${randSuffix}`;
}

//output
document.writeln("Here is your code name. Welcome to Mother Base...",sortUserName(), "</br>");