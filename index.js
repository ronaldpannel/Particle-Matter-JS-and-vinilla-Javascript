/**@type{HTMLCanvasElement} */
const { Engine, Body, Bodies, Composite } = Matter;
let engine;
let balls = [];
let ground;
let thickness = 20;
let bottomEdgeRight;
let bottomEdgeLeft
let topEdgeLeft;
let topEdgeRight
let leftEdgeTop;
let leftEdgeBottom
let rightEdgeTop;
let rightEdgeBottom;

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
ctx.strokeStyle = "white";
engine = Engine.create();
// engine.gravity = new Vector(0,0)

topEdgeRight = new Boundary(
  canvas.width/2,
  0 + 1,
  canvas.width,
  thickness
);
topEdgeLeft = new Boundary(
  -canvas.width/2,
  0 + 1,
  canvas.width,
  thickness
);
bottomEdgeRight = new Boundary(
  canvas.width/2,
  canvas.height - thickness,
  canvas.width,
  thickness
);
bottomEdgeLeft = new Boundary(
  -canvas.width / 2,
  canvas.height - thickness,
  canvas.width,
  thickness
)
leftEdgeBottom = new Boundary(
  0,
  canvas.height/2,
  thickness,
  canvas.height
)
leftEdgeTop = new Boundary(
  0,
  -canvas.height/2,
  thickness,
  canvas.height
)
rightEdgeTop = new Boundary(
  canvas.width - thickness,
  -canvas.height/ 2,
  thickness,
  canvas.height
)
rightEdgeBottom = new Boundary(
  canvas.width - thickness,
  canvas.height / 2,
  thickness,
  canvas.height
);

function animate() {
  Engine.update(engine);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bottomEdgeRight.draw();
  bottomEdgeLeft.draw();
  topEdgeRight.draw();
  topEdgeLeft.draw()
  leftEdgeBottom.draw()
  leftEdgeTop.draw()
  rightEdgeTop.draw()
  rightEdgeBottom.draw()
  
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].edges();
    if (balls.done) {
      balls[i].removeCircle();
      balls.splice(i, 1);
    }
  }

  requestAnimationFrame(animate);
}
animate();

canvas.addEventListener("pointermove", (e) => {
  balls.push(new Circle(e.offsetX, e.offsetY, Math.random() * 10 + 10));
  console.log(balls)
});

// window.addEventListener("resize", () => {
//   canvas.width = canvas.width;
//   canvas.height = canvas.height;
// });
