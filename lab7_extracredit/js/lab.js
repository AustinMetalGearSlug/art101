


function sortUserName(){
    var userName = window.prompt("Hello, please tell me your full name");

    const prefix = ["Liberty", "Combat", "Solid", "Whiskey", "Screaming"];
    const suffix = ["Snake", "Fox", "Capybara", "Cat", "Quite"];

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

   return `${randPrefix} ${firstName} ${ranSuffix} ${lastName}`;
}

//output
document.writeln("Look!, I made your name better!, hello:",sortUserName(), "</br>");