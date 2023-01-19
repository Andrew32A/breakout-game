import Sprite from './sprite';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

class Ball extends Sprite {
  constructor(x = 0, y = 0, radius = 10, color = '#0095DD') {
    super(x, y, 0, 0, color);
    this.radius = radius;
    this.dx = 2;
    this.dy = -2;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  render(ctx) { // Overrides the existing render method!
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

const ball = new Ball(200, 200, 10);
ball.render(ctx); // pass the ctx as an argument!

// function draw() {
//   ball.move();
//   ball.render(ctx);
// }
