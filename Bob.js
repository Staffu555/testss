class Bob {
constructor(x, y, radius) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        isStatic = false
    }
    this.body = Bodies.circle(this.x, this.y, this.radius, options);
    World.add(world, this.body);
  } 
  display(){
    var pos = this.body.position;
    //this.body.shapeColor = 'pink';
    push();
    fill("pink") 
    translate(pos.x, pos.y);
    //imageMode(CENTER);
    //image(this.image, 0, 0, this.width, this.height);
    ellipse(this.body.x,this.body.y,this.radius,this.radius);
    pop();
  } 
}   