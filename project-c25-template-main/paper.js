class Paper {
    constructor(x, y,r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        this.x=x;
        thix.y=y;
        this.r = r;
        World.add(world, this.body);
        this.image = loadImage("paper.png");
        
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("grey");
        stroke(0);
        strokeWeight(4);
        image(this.image,100,100,this.radius,this.radius);
        pop();
    }
}