const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

class Paddle {
  constructor(x = 0, y = 0, status = 10, color = '#0095DD') {
    this.x = x;
    this.y = y;
    this.status = status;
    this.color = color;
    this.dx = 2;
    this.dy = -2;
    this.paddleWidth = 75;
    this.paddleHeight = 10;
    this.paddleX = (canvas.width - this.paddleWidth) / 2;
  }

  render(ctx) { // Overrides the existing render method!
    ctx.beginPath();
    ctx.rect(this.paddleX, canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
  }
}

export default Paddle;
