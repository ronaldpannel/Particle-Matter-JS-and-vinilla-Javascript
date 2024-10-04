class Circle {
  constructor(x, y, rad) {
    this.rad = rad;
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(this.x, this.y, this.rad);
    let velocity = new Vector(Math.random() * 3 - 3, Math.random() * 3 - 3);
    Body.setVelocity(this.body, velocity);
    Composite.add(engine.world, this.body);
    this.hue = Math.floor(Math.random() * 360);
    this.done = false
   
  }
  edges(){
    let x = this.body.position.x
    let y = this.body.position.y
    if(x + this.rad < 0 || x - this.rad > canvas.width ||
        y + this.rad < 0 || y - this.rad > canvas.height){
            this.done = true
        }else{
            this.done + false
        }
  }
  removeCircle(){
    Composite.remove(engine.world, this.body)
  }
  draw() {
     ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.arc(
      this.body.position.x,
      this.body.position.y,
      this.rad,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
}
