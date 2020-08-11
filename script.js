let canvas;
let canvasContent;
let snakeHeadXSpeed = 20;
let snakeHeadYSpeed = 0;
const rectSide = 20;
const gridSize = 20;
let isApple = false;
let appleX = null;
let appleY = null;
let snakeBody = [
    {x: 60, y: 20,},
    {x: 40, y: 20,}, 
    {x: 20, y: 20,},
];
let gameOver = false;
let counter = 0;
let direction = "right";
let score = document.getElementById("score");

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

    detectBoundaries();
   
    //eat apple, increase counter/score, add piece to body
    if (snakeBody[0].x === appleX && snakeBody[0].y === appleY){
        canvasContext.clearRect(appleX, appleY, rectSide, rectSide);
        isApple = false;
        counter++;
        score.textContent = counter; 
        createBodyPiece();
    }

    changeDirection();
}

function detectBoundaries(){
    //right boundary
    if(snakeBody[0].x > canvas.width){
        gameOver = true;
    }
    //left boundary
    if(snakeBody[0].x < 0){
        gameOver = true;
    }
    //bottom boundary
    if(snakeBody[0].y > canvas.height){
        gameOver = true;
    }
    //top boundary
    if(snakeBody[0].y < 0){
        gameOver = true;
    }
    //touch snakeBody check
    for (let i = 1; i <= snakeBody.length-1; i++){
        if (snakeBody[0].x === snakeBody[i].x && snakeBody[0].y === snakeBody[i].y){
            gameOver = true;
        }
    }
};

function changeDirection(){
    document.addEventListener("keydown", function(e){
        //move down
        if(e.which === 40){
            checkAndSetDirection("up", "down", 0, gridSize);
        }
        //move right
        if(e.which === 39){
            checkAndSetDirection("left", "right", gridSize, 0);
        }
        //move up
        if(e.which === 38){
            checkAndSetDirection("down", "up", 0, -gridSize);
        }
        //move left
        if(e.which === 37){
            checkAndSetDirection("right", "left", -gridSize, 0);
        }
    })
};

//sets direction of movement and also so that snake cannot move in opposite direction
function checkAndSetDirection(checkDirection, setDirection, horzSpeed, vertSpeed,){
    if(direction === checkDirection){
        return;
    };
    snakeHeadXSpeed = horzSpeed;
    snakeHeadYSpeed = vertSpeed;
    direction = setDirection;
};

function createBodyPiece(){
    //create new body part on top of last body part - will update to end of snake on new draw
    snakeBody.push({x: (snakeBody[snakeBody.length-1].x), y: snakeBody[snakeBody.length-1].y});
}


function generateAppleX(){
    appleX = 20 * (Math.floor(Math.random()*30)); //generate random between 0 and 580
    return appleX;
}

function generateAppleY(){
    appleY = 20 * (Math.floor(Math.random()*30)); //generate random between 0 and 580
    return appleY;
}

//checks if apple coords are at snakeBody, if not draws apple
function drawApple(appleX, appleY){
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

//takes snakeBody array and draws a piece for each array element
function drawSnake(){ 
    for(let segment of snakeBody) {
        drawRect(segment.x, segment.y, rectSide, rectSide, "red");
    }
};

