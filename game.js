let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;

let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

let paddleDx = 7;
let rightPressed;
let leftPressed;

function keyDownHandler(event) {
    if (event.keyCode == 39) {
        rightPressed = true;
    } else if (event.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(event) {
    if (event.keyCode == 39) {
        rightPressed = false;
    } else if (event.keyCode == 37) {
        leftPressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear all canvas size
    drawBall();
    drawPaddle();
    // the x-coordinate (left-right)
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    // the y-coordinate (up-down)
    if (y + dy < ballRadius) {
        dy = -dy;
    }

    if (rightPressed && paddleX + paddleWidth < canvas.width) {
        paddleX += paddleDx;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= paddleDx;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
