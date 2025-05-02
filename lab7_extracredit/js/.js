


function sortUserName(){
    var userName = window.prompt("Hello, please tell me your full name");

    const prefix = ["Liberty", "Combat", "Solid", "Whiskey", "Screaming"];
    const suffix = ["Snake", "Fox", "Capybara", "Cat", "Quite"];

    // Split full name into words (assuming first and last name)
    var namesArray = userName.split(' ');  
    
    if (namesArray.length < 2) {
        return 'Please provide both first and last names.';
    }

    var firstName = namesArray[0];
    var lastName = namesArray[1];

   //Randomly select a prefix and suffix
   const randPrefix = prefix[Math.floor(Math.random() * prefix.length)];
   const randSuffix = suffix[Math.floor(Math.random() * suffix.length)];

   return `${randPrefix} ${firstName} ${lastName} ${ranSuffix}`;
}

//output
document.writeln("Look!, I made your name better!, hello:",sortUserName(), "</br>");