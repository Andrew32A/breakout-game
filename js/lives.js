class Lives {
  constructor(x, y, startingLives = 3) {
    this.x = x;
    this.y = y;
    this.startingLives = startingLives;
    this.lives = startingLives;
  }

  draw(ctx) {
    ctx.font = '16px Ariel';
    ctx.fillStyle = '#0095DD';
    ctx.fillText(`Lives: ${this.lives}`, this.x, this.y);
  }

  loseLife() {
    this.lives -= 1;
  }

  reset() {
    this.lives = this.startingLives;
  }
}

export default Lives;
