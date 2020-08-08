

let canvas;
let canvasContent;
let snakeX = 20;
let snakeY = 20;
let snakeXSpeed = 20;
let snakeYSpeed = 0;
const rectSide = 20;
const gridSize = 20;
let isApple = false;
let appleX = null;
let appleY = null;
let snakeBody = [
    {x: 60, y: 20, xSpeed: snakeXSpeed, ySpeed: snakeYSpeed},
    {x: 38, y: 20, xSpeed: snakeXSpeed, ySpeed: snakeYSpeed}, 
    {x: 16, y: 20, xSpeed: snakeXSpeed, ySpeed: snakeYSpeed},
];
let counter = 0;


window.onload = function() {
    canvas = document.getElementById("game-canvas");
    canvasContext = canvas.getContext("2d");
    const framesPerSecond = 10;
    setInterval(function(){

    drawRect(0,0,canvas.width,canvas.height,"black");
    if (!isApple){
        appleX = generateAppleX();
        appleY = generateAppleY();
        isApple = true;
    }

        drawSnake();
        moveSnake();
        drawApple(appleX,appleY);
    }, 1000/framesPerSecond)   
}



function moveSnake(){
    snakeBody[0].x += snakeBody[0].xSpeed;
    snakeBody[0].y += snakeBody[0].ySpeed;
    snakeBody[1].x += snakeBody[1].xSpeed;
    snakeBody[1].y += snakeBody[1].ySpeed;
    snakeBody[2].x += snakeBody[2].xSpeed;
    snakeBody[2].y += snakeBody[2].ySpeed;
    if(snakeBody[0].x >= canvas.width){
        snakeXSpeed = -snakeXSpeed;
    }
    if(snakeBody[0].x <= 0){
        snakeXSpeed = -snakeXSpeed;
    }
    

    //eat apple, increase counter/score
    if (snakeBody[0].x === appleX && snakeBody[0].y === appleY){
        canvasContext.clearRect(appleX, appleY, rectSide, rectSide);
        isApple = false;
        appleY = undefined;
        appleX = undefined;
        counter++;
        drawSnake();
    }

    //move down
    document.addEventListener("keydown", function(e){
        if(e.which === 40){
            //snakeXSpeed = 0;

            for(i = 0; i <= snakeBody.length-1; i++){
                snakeBody[i].xSpeed = 0;
                snakeBody[i].ySpeed = gridSize;
            }
            //snakeXSpeed = 0;
            snakeYSpeed = gridSize;
        }
    })
    
    //move right
    document.addEventListener("keydown", function(e){
        if(e.which === 39){
            snakeXSpeed = gridSize;
            snakeYSpeed = 0;
        }
    })

    //move up
    document.addEventListener("keydown", function(e){
        if(e.which === 38){
            snakeXSpeed = 0;
            snakeYSpeed = -gridSize;
        }
    })

    //move left
    document.addEventListener("keydown", function(e){
        if(e.which === 37){
            snakeXSpeed = -gridSize;
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


function drawApple(appleX, appleY){
    
    drawRect(appleX, appleY, rectSide, rectSide, "green");
}


function drawRect(leftX,topY,width,height,color){
    canvasContext.fillStyle = color;
    canvasContext.fillRect(leftX,topY,width,height);
}

//add body piece to the end of the snake when called
function drawSnake(){ 
    let spaceBetweenRects = 2;
    
    // for(i = 0; i <= counter; i++){
    //     if(snakeXSpeed >0){
    //        drawRect(snakeBody[0].x-((rectSide * i) + (spaceBetweenRects * i)), snakeBody[0].y, rectSide, rectSide, "red");            
    //     } else if(snakeXSpeed < 0){
    //         drawRect(snakeBody[0].x+((rectSide * i) + (spaceBetweenRects * i)), snakeBody[0].y, rectSide, rectSide, "red");
    //     }else if(snakeYSpeed > 0){
    //          drawRect(snakeBody[0].x, snakeBody[0].y-((rectSide * i) + (spaceBetweenRects * i)), rectSide, rectSide, "red");
    //     }else if(snakeYSpeed < 0){
    //          drawRect(snakeBody[0].x, snakeBody[0].y+((rectSide * i) + (spaceBetweenRects * i)), rectSide, rectSide, "red");
    //     }
    // }
    drawRect(snakeBody[0].x, snakeBody[0].y, rectSide, rectSide, "red");
    drawRect(snakeBody[1].x, snakeBody[1].y, rectSide, rectSide, "red");
    drawRect(snakeBody[2].x, snakeBody[2].y, rectSide, rectSide, "red");

};

