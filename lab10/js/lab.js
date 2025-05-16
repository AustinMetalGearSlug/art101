//Requirements: jQuery must be loaded for this script to work, use appends to script new elements to an output di
//Author: Austin Allen
//Date: 05/15/2025 


//generate random text to respond to user input 
function generateDinoRoar() {
  const roars = "Rwar rawra rawww raahhhh reeggh *blink* grawarar roarra reeggh *snarl* rawwwaaa rawr grawarar";
  const roarWords = roars.split(" ");
  const min = 1;
  const max = 5;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

    let result = [];
  for (let i = 0; i < randLen; i++) {
    const randIndex = Math.floor(Math.random() * roarWords.length);
    result.push(roarWords[randIndex]);
  }
 return result.join(" ");
}

// Click listener for your button
$("#action").click(function () {
  let userText = $("#textbox").val();
  if (userText.trim() === "") return;

  $("#output").append('<div class="text"><p>' + userText + '</p></div>');
  $("#textbox").val("");

  setTimeout(function () {
    const dinoReply = generateDinoRoar();
    $("#output").append('<div class="text"><p>' + dinoReply + '</p></div>');
  }, 500);
});