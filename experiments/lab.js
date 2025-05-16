var index=1;

let aColors=["purple", "red", "green", "yellow"];

function fDoColors(color){ 

    //$ means jqueary, "()" mean a function, # stands for CSS, used to choose the id, cuh as id=output
    // thing # as "id = "
    // "color" is a virable name 

 $("#output").css("background",color);
   console.log(color);

   let newColor=color+aColors[index];

 //"=", defining the variable
 index=index+1;

   console.log(newColor);

}

//fDoColors("yellow");

aColors.map(fDoColors); 

//Generate text box
$("#action").click(

 function(){
    let
userText=$("#textbox").val();
  $("#output").append( "<p class=message>"+ userText );

 });