let canvas;
let canvasContent;
let snakeX = 25;
let snakeXSpeed = 5;

window.onload = function() {
    canvas = document.getElementById("game-canvas");
    canvasContent = canvas.getContext("2d");
    const framesPerSecond = 30;
    setInterval(function(){

    drawRect(0,0,canvas.width,canvas.height,"black");
        newBox();
        moveSnake();
        colorCircle(snakeX, 200, 40, "white");
    }, 1000/framesPerSecond)   
}



function moveSnake(){
    snakeX = snakeX + snakeXSpeed;
    if(snakeX > canvas.width){
        snakeXSpeed = -snakeXSpeed;
    }
     if(snakeX === 0){
         snakeXSpeed = -snakeXSpeed;
     }
    canvasContent.fillStyle = "red";
    canvasContent.fillRect(250,250,100,100);
    canvasContent.fillStyle = "white";
    canvasContent.fillRect(300,300,100,100);
    let box1 = drawRect(snakeX,25,15,15,"red");
    let box2 = drawRect(snakeX+17,25,15,15,"red");
    let box3 = drawRect(snakeX+34,25,15,15,"red");
    let box4 = drawRect(snakeX+51,25,15,15,"red");
    let snake = [box1,box2,box3,box4];
}

function newBox(){
    
    drawRect(250,250,100,100,"red");
    
    drawRect(300,300,100,100,"white");
   
    drawRect(snakeX-17,50,15,15,"blue");
}

function drawRect(leftX,topY,width,height,color){
    canvasContent.fillStyle = color;
    canvasContent.fillRect(leftX,topY,width,height);
}

function colorCircle(centerX, centerY, radius, color){
	canvasContent.fillStyle = color;
	canvasContent.beginPath();
	canvasContent.arc(centerX, centerY, radius, 0, Math.PI*2, true);
	canvasContent.fill();
}