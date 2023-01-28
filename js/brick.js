/* eslint-disable import/extensions */
import Sprite from './sprite.js';

// brick properties
const brickRowCount = 3;
const brickColumnCount = 5;

class Brick extends Sprite {
  constructor(x, y, width = 75, height = 20, color = '#0095DD') {
    super(x, y, width, height, color); // pass arguments to Sprite!
    this.status = true; // adds a new property

    this.brickRowCount = 3;
    this.brickColumnCount = 5;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;

    this.bricks = [];
  }

  init_bricks() {
    this.bricks = [];
    for (let c = 0; c < brickColumnCount; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < brickRowCount; r += 1) {
        this.bricks[c][r] = new Brick(0, 0);
      }
    }
  }

  render(ctx) {
    for (let c = 0; c < brickColumnCount; c += 1) {
      for (let r = 0; r < brickRowCount; r += 1) {
        if (this.bricks[c][r].status === 1) {
          const brickX = (c * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;
          const brickY = (r * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;
          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
          ctx.fillStyle = 'cyan';
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
}

export default Brick;
