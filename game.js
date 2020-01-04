let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2x");

function draw() {
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
