/* eslint-disable import/extensions */
import Sprite from './sprite.js';

const canvas = document.getElementById('myCanvas');

class Paddle extends Sprite {
  constructor(width, height, x = 0, y = 0, status = 10, color = '#0095DD') {
    super(x, y, width, height, color);
    this.status = status;
    this.color = '#0095DD';
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleX = (canvas.width - this.paddleWidth) / 2;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.paddleX, canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
  }
}

export default Paddle;
