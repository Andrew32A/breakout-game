/* eslint-disable import/extensions */
import Sprite from './sprite.js';

// brick properties
const brickRowCount = 3;
const brickColumnCount = 5;

class Brick extends Sprite {
  constructor(x, y, width = 75, height = 20, color = '#0095DD') {
    super(x, y, width, height, color); // pass arguments to Sprite!
    this.status = true; // adds a new property
  }

  init_bricks() {
    const bricks = [];
    for (let c = 0; c < brickColumnCount; c += 1) {
      bricks[c] = [];
      for (let r = 0; r < brickRowCount; r += 1) {
        bricks[c][r] = new Brick(0, 0);
      }
    }
  }

  render(ctx) {
    for (let c = 0; c < brickColumnCount; c += 1) {
      for (let r = 0; r < brickRowCount; r += 1) {
        if (bricks[c][r].status === 1) {
          const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
          const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = brickColorChanger(c);
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
}

export default Brick;
