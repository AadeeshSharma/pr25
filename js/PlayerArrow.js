class PlayerArrow {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      
      World.add(world, this.body);
    }
    shoot(archerAngle) {
      var velocity = p5.Vector.fromAngle(archerAngle);
      velocity.mult(20);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    }
    display() {
    if (this.bodyvelocityx > 0 && this.body.position.x > 400) {
       var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
       } 
       for (var i = 0; i < this.trajectory.length; i++) { 
         fill("white");
          ellipse(this.trajectory[i][0], this.trajectory[i][1], 5, 5);
       }
      }
    }