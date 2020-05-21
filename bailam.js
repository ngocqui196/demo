function Circle(x,y,radius,color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.getX = function () {
        return this.x;
    };
    this.getY = function () {
        return this.y;
    };
    this.getRadius = function () {
        return this.radius
    };
    this.getColor = function () {
        return this.color
    }
}
let c = 0;
function AddCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
     let toadox = document.getElementById("toadox").value;
     let toadoy = document.getElementById("toadoy").value;
     let kichthuoc = document.getElementById("bankinh").value;
     let mamau = document.getElementById("mamau").value;
     let addcircle = new Circle(toadox,toadoy,kichthuoc,mamau);
     ctx.beginPath();
     ctx.arc(addcircle.getX(),addcircle.getY(),addcircle.getRadius(),0,Math.PI * 2);
     ctx.fillStyle = addcircle.getColor();
     ctx.fill();
     ctx.stroke();
     ctx.closePath();
    CircleMove();
}
function CircleMove() {
    document.getElementById("myCanvas").innerHTML += c;
}
CircleMove();