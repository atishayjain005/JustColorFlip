console.log("yo");


let flip = document.getElementById("flip-btn");

function flipColor() {
    let body = document.getElementById("body")

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;

    bgColor = body;
    
}