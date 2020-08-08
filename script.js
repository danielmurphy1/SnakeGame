// let canvas;
// let canvasContent;
// let snakeX = 20;
// let snakeY = 20;
// let snakeXSpeed = 20;
// let snakeYSpeed = 0;
// const rectSide = 20;
// const gridSize = 20;
// let isApple = false;
// let appleX = null;
// let appleY = null;
// let snakeBody = [
//     {x: 20, y: 20}, //snake head
// ];
// let counter = 0;


// window.onload = function() {
//     canvas = document.getElementById("game-canvas");
//     canvasContext = canvas.getContext("2d");
//     const framesPerSecond = 10;
//     setInterval(function(){

//     drawRect(0,0,canvas.width,canvas.height,"black");
//     if (!isApple){
//         appleX = generateAppleX();
//         appleY = generateAppleY();
//         isApple = true;
//     }
    
//         moveSnake();
//         drawSnake();
//         drawApple(appleX,appleY);
//     }, 1000/framesPerSecond)   
// }



// function moveSnake(){
//     snakeBody[0].x += snakeXSpeed;
//     snakeBody[0].y += snakeYSpeed;
//     if(snakeBody[0].x >= canvas.width){
//         snakeXSpeed = -snakeXSpeed;
//     }
//     if(snakeBody[0].x <= 0){
//         snakeXSpeed = -snakeXSpeed;
//     }
    

//     //eat apple, increase counter/score
//     if (snakeBody[0].x === appleX && snakeBody[0].y === appleY){
//         canvasContext.clearRect(appleX, appleY, rectSide, rectSide);
//         isApple = false;
//         appleY = undefined;
//         appleX = undefined;
//         counter++;
//         drawSnake();
//     }

//     //move down
//     document.addEventListener("keydown", function(e){
//         if(e.which === 40){
//             snakeXSpeed = 0;
//             snakeYSpeed = gridSize;
//         }
//     })
    
//     //move right
//     document.addEventListener("keydown", function(e){
//         if(e.which === 39){
//             snakeXSpeed = gridSize;
//             snakeYSpeed = 0;
//         }
//     })

//     //move up
//     document.addEventListener("keydown", function(e){
//         if(e.which === 38){
//             snakeXSpeed = 0;
//             snakeYSpeed = -gridSize;
//         }
//     })

//     //move left
//     document.addEventListener("keydown", function(e){
//         if(e.which === 37){
//             snakeXSpeed = -gridSize;
//             snakeYSpeed = 0;
//         }
//     })
//     return snakeBody;
// }


// function generateAppleX(){
//     const appleX = 20 * (Math.floor(Math.random()*30)); //generate random between 0 and 580
    
//     return appleX;
// }

// function generateAppleY(){
//     const appleY = 20 * (Math.floor(Math.random()*30)); //generate random between 0 and 580
//     return appleY;
// }


// function drawApple(appleX, appleY){
    
//     drawRect(appleX, appleY, rectSide, rectSide, "green");
// }


// function drawRect(leftX,topY,width,height,color){
//     canvasContext.fillStyle = color;
//     canvasContext.fillRect(leftX,topY,width,height);
// }

// function colorCircle(centerX, centerY, radius, color){
// 	canvasContext.fillStyle = color;
// 	canvasContext.beginPath();
// 	canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
// 	canvasContext.fill();
// }

// //add body piece to the end of the snake when called
// function drawSnake(){ 
//     let spaceBetweenRects = 2;
    
//     for(i = 0; i <= counter; i++){
//         if(snakeXSpeed >0){
//            drawRect(snakeBody[0].x-((rectSide * i) + (spaceBetweenRects * i)), snakeBody[0].y, rectSide, rectSide, "red");            
//         } else if(snakeXSpeed < 0){
//             drawRect(snakeBody[0].x+((rectSide * i) + (spaceBetweenRects * i)), snakeBody[0].y, rectSide, rectSide, "red");
//         }else if(snakeYSpeed > 0){
//              drawRect(snakeBody[0].x, snakeBody[0].y-((rectSide * i) + (spaceBetweenRects * i)), rectSide, rectSide, "red");
//         }else if(snakeYSpeed < 0){
//              drawRect(snakeBody[0].x, snakeBody[0].y+((rectSide * i) + (spaceBetweenRects * i)), rectSide, rectSide, "red");
//         }
//     }
//     //drawRect(snakeBody[0].x, snakeBody[0].y, rectSide, rectSide, "red")
// };










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
    {x: 20, y: 20}, //snake head
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
    
        moveSnake();
        drawSnake();
        drawApple(appleX,appleY);
    }, 1000/framesPerSecond)   
}



function moveSnake(){
    snakeBody[0].x += snakeXSpeed;
    snakeBody[0].y += snakeYSpeed;
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
            snakeXSpeed = 0;
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
    return snakeBody;
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

function colorCircle(centerX, centerY, radius, color){
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
	canvasContext.fill();
}

//add body piece to the end of the snake when called
function drawSnake(){ 
    let spaceBetweenRects = 2;
    
    for(i = 0; i <= counter; i++){
        if(snakeXSpeed >0){
           drawRect(snakeBody[0].x-((rectSide * i) + (spaceBetweenRects * i)), snakeBody[0].y, rectSide, rectSide, "red");            
        } else if(snakeXSpeed < 0){
            drawRect(snakeBody[0].x+((rectSide * i) + (spaceBetweenRects * i)), snakeBody[0].y, rectSide, rectSide, "red");
        }else if(snakeYSpeed > 0){
             drawRect(snakeBody[0].x, snakeBody[0].y-((rectSide * i) + (spaceBetweenRects * i)), rectSide, rectSide, "red");
        }else if(snakeYSpeed < 0){
             drawRect(snakeBody[0].x, snakeBody[0].y+((rectSide * i) + (spaceBetweenRects * i)), rectSide, rectSide, "red");
        }
    }
    //drawRect(snakeBody[0].x, snakeBody[0].y, rectSide, rectSide, "red")
};

