var click = 0;

function mouselog(e){
    var x = e.clientX - 240;
    var y = e.clientY - 160;
    var dist = Math.sqrt(y*y + x*x);
    if (dist<50){
        click++;
        redraw();
    }
}
var c = document.getElementById("Canvas");
c.addEventListener('hover', mouselog);
var ctx = c.getContext("2d");

function redraw() {
    ctx.clearRect(0,0,c.clientWidth,c.height);
    ctx.font="20px Verdana";
    ctx.fillText("Клики: " + click,190,20);
    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.arc(c.width/2, c.height/2, 50,0,2*3.14);
    ctx.fill();
}
redraw();