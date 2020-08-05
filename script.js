let canvas;
let canvasContent;
let snakeX = 20;
let snakeY = 20;
let snakeXSpeed = 20;
let snakeYSpeed = 0;
const rectSide = 20;
let isApple = false;
 let appleX = null;
 let appleY = null;


window.onload = function() {
    canvas = document.getElementById("game-canvas");
    canvasContext = canvas.getContext("2d");
    const framesPerSecond = 20;
    setInterval(function(){

    drawRect(0,0,canvas.width,canvas.height,"black");
    if (!isApple){
        let appleX = generateAppleX();
        let appleY = generateAppleY();
       isApple = true;
    }
    
        moveSnake();
        drawApple(appleX,appleY);
    }, 1000/framesPerSecond)   
}



function moveSnake(){
    snakeX = snakeX + snakeXSpeed;
    snakeY = snakeY + snakeYSpeed;
    if(snakeX >= canvas.width){
        snakeXSpeed = -snakeXSpeed;
    }
     if(snakeX <= 0){
         snakeXSpeed = -snakeXSpeed;
     }
    let box1 = drawRect(snakeX,snakeY,rectSide, rectSide,"red");
    


    if (snakeX >= appleX && snakeX <= appleX + rectSide && snakeY >= appleY && snakeY <= appleY + rectSide){
        canvasContext.clearRect(appleX, appleY, rectSide, rectSide);
        isApple = false;
        appleY = undefined;
        appleX = undefined;
    }

    //move down
    document.addEventListener("keydown", function(e){
        if(e.which === 40){
            snakeXSpeed = 0;
            snakeYSpeed = 10;
        }
    })
    
    //move right
    document.addEventListener("keydown", function(e){
        if(e.which === 39){
            snakeXSpeed = 10;
            snakeYSpeed = 0;
        }
    })

    //move up
    document.addEventListener("keydown", function(e){
        if(e.which === 38){
            snakeXSpeed = 0;
            snakeYSpeed = -10;
        }
    })

    //move left
    document.addEventListener("keydown", function(e){
        if(e.which === 37){
            snakeXSpeed = -10;
            snakeYSpeed = 0;
        }
    })
}


function generateAppleX(){
    const appleX = 20 * (Math.floor(Math.random()*30)); //generate random between 0 and 580
    
    return appleX;
   
}

function generateAppleY(){
    const appleY = 20 * (Math.floor(Math.random()*30)); //generate random between 0 and 580
    return appleY;
}

// let appleX = generateAppleX();
// let appleY = generateAppleY();

function drawApple(appleX, appleY){
    
    drawRect(appleX, appleY, rectSide, rectSide, "green");
   
}


function drawRect(leftX,topY,width,height,color){
    canvasContext.fillStyle = color;
    canvasContext.fillRect(leftX,topY,width,height);
}

function colorCircle(centerX, centerY, radius, color){
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
	canvasContext.fill();
}