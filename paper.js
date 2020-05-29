class Paper {
    constructor(x,y) {
      var options = {
        isStatic: false,
        friction: 0.5,
        density: 1.2,
        restitution: 0.8
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.radius = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("violet");
      ellipse(pos.x, pos.y, this.radius);
    }
  };