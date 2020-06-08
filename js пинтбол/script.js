let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let posX = 10;
let speedX = 5;
let posY = 10;
let speedY = 7;

let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
    if(e.keyCode == 39){
        rightPressed = true;
    }
    if(e.keyCode == 37){
        leftPressed = true;
    }
}

function keyUpHandler(e){
    if(e.keyCode == 39){
        rightPressed = false;
    }
    if(e.keyCode == 37){
        leftPressed = false;
    }
}

if(rightPressed){
    paddleX += 7;
}else {
    paddleX -= 7;
}

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleWidth);
    ctx.fillStyle = "#0095dd";
    ctx.fill();
    ctx.closePath();
}

function draw(){
    posX += speedX;
    posY += speedY;

    if(posX + speedX > canvas.width - 5){
        speedX = -5;
    }else if(posY + speedY > canvas.height - 5){
        speedY = -7;
    }else if(posX + speedX < 5){
    speedX = 5;
    }else if(posY + speedY < 5){
    speedY = 7;
}
    if(rightPressed && paddleX < canvas.width - paddleWidth){
        paddleX += 7;
    } else if(leftPressed && paddleX > 0){
        paddleX -= 7;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(posX, posY, 10, 0, Math.PI*2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
    drawPaddle();

}
setInterval(draw, 1000/30);
