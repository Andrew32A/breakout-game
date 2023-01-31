/* eslint-disable import/extensions */
import Sprite from './sprite';

class Ball extends Sprite {
  radius: number
  dx: number
  dy: number
  x: number
  y: number
  color: string

  constructor(x = 0, y = 0, dx = 2, dy = -2, radius = 10, color = '#0095DD') {
    super(x, y, 0, 0, color);
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  render(ctx: any) { // Overrides the existing render method!
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
