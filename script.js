const DEBUG = false;

let canvas;
let canvasContent;
let snakeX = 20;
let snakeY = 20;
let snakeHeadXSpeed = 20;
let snakeHeadYSpeed = 0;
const rectSide = 20;
const gridSize = 20;
let isApple = false;
let appleX = null;
let appleY = null;
let snakeBody = [
    {x: 60, y: 20, xSpeed: snakeHeadXSpeed, ySpeed: snakeHeadYSpeed},
    {x: 40, y: 20, xSpeed: snakeHeadXSpeed, ySpeed: snakeHeadYSpeed}, 
    {x: 20, y: 20, xSpeed: snakeHeadXSpeed, ySpeed: snakeHeadYSpeed},
];
let gameOver = false;
let counter = 0;
let direction = "right";
let score = document.getElementById("score");
let scoreText = document.createTextNode(counter);
score.appendChild(scoreText);


//main game loop
window.onload = function() {
    canvas = document.getElementById("game-canvas");
    canvasContext = canvas.getContext("2d");
    const framesPerSecond = 10;

    setInterval(function(){
         
    drawRect(0,0,canvas.width,canvas.height,"black");
    if(gameOver){
        canvasContext.fillStyle = "red";
        canvasContext.font = "30px Arial";
        canvasContext.fillText("Game Over", 100, 100);
        canvasContext.fillText("Reload Window to Play Again", 100, 200);
        return;
    }
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
if(gameOver){
    return;
}

    //update positon of all body pieces other than head
    for (let i = snakeBody.length -1; i > -1; i--){
        if(i !== 0){
            snakeBody[i].x = snakeBody[i - 1].x;
            snakeBody[i].y = snakeBody[i - 1].y;
        }else {
            //update position of head
            snakeBody[i].x += snakeHeadXSpeed;
            snakeBody[i].y += snakeHeadYSpeed;
        }
    }
    
    if(snakeBody[0].x > canvas.width){
        console.log("game over");
        gameOver = true;
    }
    if(snakeBody[0].x < 0){
        console.log("game over");
        gameOver = true;
    }
    if(snakeBody[0].y > canvas.height){
        console.log("game over");
        gameOver = true;
    }
    if(snakeBody[0].y < 0){
        console.log("game Over");
        gameOver = true;
    }
    
    for (let i = 1; i <= snakeBody.length-1; i++){
        if (snakeBody[0].x === snakeBody[i].x && snakeBody[0].y === snakeBody[i].y){
            //alert("game over");
            gameOver = true;
        }
    }

    //eat apple, increase counter/score, add piece to body
    if (snakeBody[0].x === appleX && snakeBody[0].y === appleY){
        canvasContext.clearRect(appleX, appleY, rectSide, rectSide);
        isApple = false;
        appleY = undefined;
        appleX = undefined;
        counter++;
        let score = document.getElementById("score");
        score.textContent = counter; 
        createBodyPiece();
        //drawSnake();
    }

    changeDirection();
}

function changeDirection(){
    document.addEventListener("keydown", function(e){
        //move down
        if(e.which === 40){
            if(direction === "up"){
                return;
            };
            snakeHeadXSpeed = 0;
            snakeHeadYSpeed = gridSize;
            direction = "down";
        }
        //move right
        if(e.which === 39){
            if(direction === "left"){
                return;
            };
            snakeHeadXSpeed = gridSize;
            snakeHeadYSpeed = 0;
            direction = "right";
        }
        //move up
        if(e.which === 38){
            if(direction === "down"){
                return;
            };
            snakeHeadXSpeed = 0;
            snakeHeadYSpeed = -gridSize;
            direction = "up";
        }
        //move left
        if(e.which === 37){
            if(direction === "right"){
                return;
            };
            snakeHeadXSpeed = -gridSize;
            snakeHeadYSpeed = 0;
            direction = "left";
        }
    })

}

function createBodyPiece(){
    //create new body part on top of last body part - will update to end of snake on new draw
    snakeBody.push({x: (snakeBody[snakeBody.length-1].x), y: snakeBody[snakeBody.length-1].y});
}


function generateAppleX(){
    appleX = 20 * (Math.floor(Math.random()*30)); //generate random between 0 and 580
    //appleX = 40;
    return appleX;
}

function generateAppleY(){

    appleY = 20 * (Math.floor(Math.random()*30)); //generate random between 0 and 580
    //appleY = 20;
    return appleY;
}

function drawApple(appleX, appleY){
    //  if(snakeBody.forEach(coordinate => coordinate.x = appleX) && snakeBody.forEach(coordinate => coordinate.y = appleY)){
    //      generateAppleY();
    //      generateAppleY();
    //      drawApple();
    //  }else {
    // drawRect(appleX, appleY, rectSide, rectSide, "green");
    // }
    for(let i = 0; i < snakeBody.length; i++){
        if (snakeBody[i].x === appleX && snakeBody[i].y === appleY){
            generateAppleX();
            generateAppleY();
        }else{
            drawRect(appleX, appleY, rectSide, rectSide, "green");
        }
    }
}


//draw rectangle helper function
function drawRect(leftX,topY,width,height,color){
    canvasContext.fillStyle = color;
    canvasContext.fillRect(leftX,topY,width,height);
}

//add body piece to the end of the snake when called
function drawSnake(){ 
    let spaceBetweenRects = 2;
    
    // for(i = 0; i <= counter; i++){
    //     if(snakeHeadXSpeed >0){
    //        drawRect(snakeBody[0].x-((rectSide * i) + (spaceBetweenRects * i)), snakeBody[0].y, rectSide, rectSide, "red");            
    //     } else if(snakeHeadXSpeed < 0){
    //         drawRect(snakeBody[0].x+((rectSide * i) + (spaceBetweenRects * i)), snakeBody[0].y, rectSide, rectSide, "red");
    //     }else if(snakeHeadYSpeed > 0){
    //          drawRect(snakeBody[0].x, snakeBody[0].y-((rectSide * i) + (spaceBetweenRects * i)), rectSide, rectSide, "red");
    //     }else if(snakeHeadYSpeed < 0){
    //          drawRect(snakeBody[0].x, snakeBody[0].y+((rectSide * i) + (spaceBetweenRects * i)), rectSide, rectSide, "red");
    //     }
    // }
    for(let segment of snakeBody) {
        drawRect(segment.x, segment.y, rectSide, rectSide, "red");
    }

};

