/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */

// import classes
import Background from './background.js';
import Ball from './ball.js';
import Brick from './brick.js';
import Lives from './lives.js';
import Paddle from './paddle.js';
import Score from './score.js';

// grabs elements inside of DOM
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    // canvas coordinates
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.dx = 2;
    this.dy = -2;

    // scoreboard and stats
    this.score = new Score(8, 20);
    this.lives = new Lives(canvas.width - 65, 20, 3);

    // paddle properties
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleX = (canvas.width - this.paddleWidth) / 2;

    // background, ball, and paddle object instantiation
    this.background = new Background(canvas.width, canvas.height);
    this.ball = new Ball(this.x / 2, this.y - 55, this.dx, this.dy, 10);
    this.paddle = new Paddle(this.paddleX, canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);

    // brick properties
    this.brickRowCount = 3;
    this.brickColumnCount = 5;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;

    this.init();
    this.render();
  }

  init() {
    // bricks
    this.bricks = new Brick(this.x, this.y, this.width, this.height, 'cyan');
    this.bricks.init_bricks();

    // player input variables
    this.rightPressed = false;
    this.leftPressed = false;
    document.addEventListener('keydown', this.keyDownHandler);
    document.addEventListener('keyup', this.keyUpHandler);
    document.addEventListener('mousemove', this.mouseMoveHandler);
  }

  collisionDetection() {
    for (let c = 0; c < this.brickColumnCount; c += 1) {
      for (let r = 0; r < this.brickRowCount; r += 1) {
        const b = this.bricks[c][r];
        if (b.status === 1) {
          if (this.x > b.x && this.x < b.x + this.brickWidth && this.y > b.y && this.y < b.y + this.brickHeight) {
            this.dy = -this.dy;
            b.status = 0;
            this.score += 1;
            if (this.score === this.brickRowCount * this.brickColumnCount) {
              alert('YOU WIN, CONGRATULATIONS!');
              document.location.reload();
            }
          }
        }
      }
    }
  }

  keyDownHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = true;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = false;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  mouseMoveHandler(e) {
    const relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
      this.paddleX = relativeX - this.paddleWidth / 2;
    }
  }

  paddleLogic() {
    if (this.rightPressed && this.paddle.paddleX < canvas.width - this.paddle.paddleWidth) {
      this.paddle.paddleX += 7;
    } else if (this.leftPressed && this.paddle.paddleX > 0) {
      this.paddle.paddleX -= 7;
    }
  }

  render() {
    this.background.render(this.ctx);
    this.ball.render(this.ctx);
    this.paddle.render(this.ctx);
    this.bricks.render(this.ctx);

    this.score.render(this.ctx);
    this.lives.render(this.ctx);

    this.paddleLogic();

    requestAnimationFrame(() => {
      this.render();
    });
  }
}

const game = new Game(canvas, ctx);
