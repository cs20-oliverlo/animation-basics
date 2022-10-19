// Set up canvas and 2D graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

let x = 100;

requestAnimationFrame(animate);
function animate() {
    // UPDATE ELEMENTS ON CANVAS
    x++

    // Animate if x isless than 400
    if (x > 300) {
        x = 100;
    }
    
    // DRAW CANVAS
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, cnv.width, cnv.height); // Background
    
    ctx.fillStyle = "green";
    ctx.fillRect(x, 100, 50, 50); // Rectangle
    
    // REQUEST ANIMATION FRAME
    requestAnimationFrame(animate);
}