

let aColors=["purple", "red", "green", "yellow"];

function fDoColors(color){ 

    //$ means jqueary, "()" mean a function, # stands for CSS, used to choose the id, cuh as id=output
    // thing # as "id = "
    // "color" is a virable name 

    $("#output").css("background",color);

}

fDoColors("yellow");