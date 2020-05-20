function Circle(x,y,radius,color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.getX = function () {
        return this.x;
    }
    this.getY = function () {
        return this.y;
    }
    this.getRadius = function () {
        return this.radius
    }
    this.getColor = function () {
        return this.color
    }
}
// function Color() {
//     this.color = "#00dd00";
// }
function CircleMove() {
    let c = document.getElementById("myCanvas").value;
    let ctx = c.getContext("2d");
    let circle = new Circle(200,200,50,"#00dd00");
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.radius,0,Math.PI * 2);
    ctx.fillStyle = circle.color;
    ctx.fill();
    ctx.strokeStyle = circle.color;
    ctx.stroke();
    ctx.closePath();
}
CircleMove();