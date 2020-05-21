function Circle(x,y,size,color,) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;


    this.getX = function () {
        return this.x;
    };
    this.getY = function () {
        return this.y;
    };
    this.getRadius = function () {
        return this.size
    };
    this.getColor = function () {
        return this.color
    }
    this.addCircle = function() {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.arc(this.getX(), this.getY(), this.getRadius(), 0, Math.PI * 2);
        ctx.fillStyle = this.getColor();
        ctx.fill();
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.closePath();
    }
    this.addSquare = function () {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.rect(this.getX(),)
    }

}
let c = 0;
function init() {
    let toadox = document.getElementById("toadox").value;
    let toadoy = document.getElementById("toadoy").value;
    let kichthuoc = document.getElementById("bankinh").value;
    let mamau = document.getElementById("mamau").value;
    let newCircle = new Circle(toadox,toadoy,kichthuoc,mamau)
    newCircle.addCircle()
}
