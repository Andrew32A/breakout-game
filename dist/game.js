/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */

// import classes
import Background from '../src/background.js';
import Ball from '../src/ball.js';
import Bricks from '../src/bricks.js';
import Paddle from '../src/paddle.js';
import Lives from '../src/lives.js';
import Score from '../src/score.js';

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

    // background
    this.background = new Background(canvas.width, canvas.height);

    // paddle properties
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleSpeed = 7;
    this.paddleColor = '#0095DD';
    this.paddleX = (canvas.width - 75) / 2;
    this.paddleY = (canvas.height - 10);
    this.paddle = new Paddle(
      this.paddleX,
      this.paddleY,
      this.paddleWidth,
      this.paddleHeight,
      this.paddleSpeed,
      this.paddleColor,
    );

    // ball properties
    this.ballRadius = 10;
    this.ballColor = 'cyan';
    this.ball = new Ball(
      this.x / 2,
      this.y - 55,
      this.dx,
      this.dy,
      this.ballRadius,
      this.ballColor,
    );

    // brick properties:
    this.brickRowCount = 3;
    this.brickColumnCount = 5;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;
    this.brickColor = 'cyan';
    this.bricks = new Bricks(
      this.brickRowCount,
      this.brickColumnCount,
      this.brickWidth,
      this.brickHeight,
      this.brickPadding,
      this.brickOffsetTop,
      this.brickOffsetLeft,
      this.brickColor,
    );

    this.rightPressed = false;
    this.leftPressed = false;

    this.render();
  }

  init() {
    // spawn bricks
    this.bricks.init_bricks();

    // event listeners
    document.addEventListener('keydown', (e) => {
      this.keyDownHandler(e);
    });
    document.addEventListener('keyup', (e) => {
      this.keyUpHandler(e);
    });
    document.addEventListener('mousemove', (e) => {
      this.mouseMoveHandler(e);
    });
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
    const relativeX = e.clientX - this.canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
      this.paddle.moveTo(relativeX - this.paddle.width / 2, this.paddleY);
    }
  }

  ballLogic() {
    if (this.ball.x + this.ball.dx > this.canvas.width - this.ballRadius
        || this.ball.x + this.ball.dx < this.ballRadius) {
      this.ball.dx = -this.ball.dx;
    }
    if (this.ball.y + this.ball.dy < this.ballRadius) {
      this.ball.dy = -this.ball.dy;
    } else if (this.ball.y + this.ball.dy > this.canvas.height - this.ballRadius) {
      if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddleWidth) {
        this.ball.dy = -this.ball.dy;
      } else {
        this.lives.lives -= 1;
        if (!this.lives.lives) {
          // eslint-disable-next-line no-alert
          alert('GAME OVER');
          document.location.reload();
        } else {
          this.ball.x = this.canvas.width / 2;
          this.ball.y = this.canvas.height - 30;
          this.ball.dx = 2;
          this.ball.dy = -2;
        }
      }
    }
  }

  paddleLogic() {
    if (this.rightPressed && this.paddle.x < this.canvas.width - this.paddle.width) {
      this.paddle.moveBy(7, 0);
    } else if (this.leftPressed && this.paddle.x > 0) {
      this.paddle.moveBy(-7, 0);
    }
  }

  collisionDetection() {
    for (let c = 0; c < this.brickColumnCount; c += 1) {
      for (let r = 0; r < this.brickRowCount; r += 1) {
        const b = this.bricks.bricks[c][r];
        if (b.status === 1) {
          if (this.ball.x > b.x && this.ball.x < b.x + this.brickWidth
            && this.ball.y > b.y && this.ball.y < b.y + this.brickHeight) {
            this.ball.dy = -this.ball.dy;
            b.status = 0;
            this.score.score += 1;
            if (this.score.score === this.brickRowCount * this.brickColumnCount) {
              alert('YOU WIN, CONGRATULATIONS!');
              document.location.reload();
            }
          }
        }
      }
    }
  }

  render() {
    this.background.render(this.ctx);
    this.ball.render(this.ctx);
    this.paddle.render(this.ctx);
    this.bricks.render(this.ctx);
    this.score.render(this.ctx);
    this.lives.render(this.ctx);

    this.ball.move();

    this.paddleLogic();
    this.ballLogic();
    this.collisionDetection();

    requestAnimationFrame(() => {
      this.render();
    });
  }
}

const game = new Game(canvas, ctx);
game.init();
