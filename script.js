let canvas;
let canvasContent;

window.onload = function() {
    canvas = document.getElementById("game-canvas");
    canvasContent = canvas.getContext("2d");
    canvasContent.fillStyle = "black";
    canvasContent.fillRect(0,0,canvas.width,canvas.height);
    canvasContent.fillStyle = "red";
    canvasContent.fillRect(250,250,100,100);
    canvasContent.fillStyle = "white";
    canvasContent.fillRect(300,300,100,100);
    canvasContent.fillStyle = "red";
    canvasContent.fillRect(25,25,15,15);
    canvasContent.fillStyle = "red";
    canvasContent.fillRect(42,25,15,15);
    canvasContent.fillStyle = "red";
    canvasContent.fillRect(59,25,15,15);
    canvasContent.fillStyle = "red";
    canvasContent.fillRect(76,25,15,15);
}