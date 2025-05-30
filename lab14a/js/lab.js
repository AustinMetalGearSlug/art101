/*
lab 14 - Debug and refactor a previous lab
   Requirements: Refactor and debug a preivous lab by inspecting any issues from the console or to fully complete a previous lab
   Author: Austin Allen 
   Date: 05/27/2025 
*/
//variants are based on the user input length
let variants = [
   { name: "Diamond Dogs", image: "img/dd.png" },
  { name: "Foxhound", image: "img/foxhoundunit.png" },
  { name: "Desperado", image: "img/desperado.png" },
  { name: "Militaires sans Frontières", image: "img/noborders.png"},
  { name: "XOF", image: "img/xof.png"},
  { name: "Clawing Ocelot", image: "img/ocelot.png"}
];

function sortUserName(fullName) {
  const prefix = ["Liberty", "Combat", "Solid", "Whiskey", "Screaming", "Battle", "Quite", "Duran", "Psyhco", "Liquid", "Sniper"];
  const suffix = ["Snake", "Fox", "Capybara", "Cat", "Ocelot", "Hound", "Duran", "Boss", "Octopus", "Raven", "Slug", "Wolf"];

  let namesArray = fullName.trim().split(" ");
  if (namesArray.length < 2) {
    return null; // Indicate bad input
  }

  const randPrefix = prefix[Math.floor(Math.random() * prefix.length)];
  const randSuffix = suffix[Math.floor(Math.random() * suffix.length)];

  return `${randPrefix} ${randSuffix}`;
}

function sortTeam(dataLength) {
  let remainder = dataLength % variants.length;
  let team = variants[remainder];

  $("#output").append(`
    <p>You are now a member of the unit <strong>${team.name}</strong>.</p>
    <img src="${team.image}" alt="${team.name}"
         style="max-width: 300px; height: auto; border-radius: 10px;" />
  `);
}

function whatHappensOnClick() {
  let data = $("#input").val();
  let dataLength = data.length;

  $("#output").html(""); // clear previous output

  if (data && dataLength <= 18) {
    let codeName = sortUserName(data);

    if (!codeName) {
      $("#output").append(" Soldier, we need both first and last names thats an ORDER!");
      return;
    }
      // Show Snake section, show snake-section after user enters input
    document.getElementById("snakeSection").style.display = "block";

    $("#output").append(`
      <p>Colonel... kept you waiting huh?, A new recruit? Or a rival PMC? <strong>${data}</strong></p>
      <p>Your codename is: <strong>${codeName}</strong></p>
    `);

    sortTeam(dataLength);
    console.log("Codename assigned:", codeName);

  } else if (dataLength >= 18) {
    $("#output").append(" Attention soldier, we do not have enough data.");
  } else {
    $("#output").append(" Soldier!!!... Enter your name. That's an order!");
  }
}

$("#button").click(whatHappensOnClick);