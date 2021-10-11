class Cannon {
    constructor(x, y, width, height, angle) {
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.angle = angle;
this.cannon_image = loadImage("./assets/canon.png");
this.cannon_base = loadImage("./assets/cannonBase.png");
    }
    display() {
        console.log(this.angle)
        if (keyIsDown (RIGHT_ARROW) && this.angle<70 ){
            this.angle += 1;
        }

        if (keyIsDown (LEFT_ARROW) && this.angle>-30) {
            this.angle -= 1;
        }

    
    push(); //to implemen properties to object
    translate(this.x, this.y); // to change position
    rotate(this.angle); //to make object move with angle
    image (this.cannon_image,0,0, this.width, this.height);
    pop(); //to withdraw the properties from the object (reset it to initial stage)
    image (this.cannon_base, 70, 20, 200, 200);
    noFill();
    }
}