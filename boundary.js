class Boundary {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, {isStatic: true});
    Composite.add(engine.world, this.body);
  }
  draw(){
    ctx.fillStyle = 'orangered'
    let x = this.body.position.x;
    let y = this.body.position.y;
    ctx.rect(x, y, this.w, this.h)
    ctx.fill()
  }
}
