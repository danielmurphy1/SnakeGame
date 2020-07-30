let canvas;
let canvasContent;
let snakeX = 25;
let refreshInterval = 500;
window.onload = function() {
    canvas = document.getElementById("game-canvas");
    canvasContent = canvas.getContext("2d");
    // canvasContent.fillStyle = "black";
    // canvasContent.fillRect(0,0,canvas.width,canvas.height);
    // canvasContent.fillStyle = "red";
    // canvasContent.fillRect(250,250,100,100);
    // canvasContent.fillStyle = "white";
    // canvasContent.fillRect(300,300,100,100);


    
    //setInterval(newBox, refreshInterval-100)
    setInterval(moveSnake, refreshInterval);
  
   
    
}

function moveSnake(){
    snakeX = snakeX +5;
    canvasContent.fillStyle = "black";
    canvasContent.fillRect(0,0,canvas.width,canvas.height);
    canvasContent.fillStyle = "red";
    canvasContent.fillRect(250,250,100,100);
    canvasContent.fillStyle = "white";
    canvasContent.fillRect(300,300,100,100);
    let box1 = {
        color: canvasContent.fillStyle = "red",
        postion: canvasContent.fillRect(snakeX,25,15,15),
        
        }
        let box2 = {
        color: canvasContent.fillStyle = "red",
        position: canvasContent.fillRect(snakeX+17,25,15,15),
       
        }
        let box3 = {
            color: canvasContent.fillStyle = "red",
        position: canvasContent.fillRect(snakeX+34,25,15,15),
        
        }
        let box4 = {
        color: canvasContent.fillStyle = "red",
        position: canvasContent.fillRect(snakeX+51,25,15,15)
        }
    
        let snake = [box1,box2,box3,box4];
}

function newBox(){
   
    canvasContent.fillStyle = "black";
    canvasContent.fillRect(0,0,canvas.width,canvas.height);
    canvasContent.fillStyle = "red";
    canvasContent.fillRect(250,250,100,100);
    canvasContent.fillStyle = "white";
    canvasContent.fillRect(300,300,100,100);
    canvasContent.fillStyle = "blue";
    canvasContent.fillRect(snakeX-17,50,15,15);
}