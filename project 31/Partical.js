class Particle {
    constructor(x, y, radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.color = color(random(0, 255));
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill(this.color);
      ellipse(pos.x, pos.y, this.radius);
      pop();    
    }
  };
