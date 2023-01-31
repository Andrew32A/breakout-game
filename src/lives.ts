class Lives {
  x: number
  y: number
  startingLives: number
  lives: number

  constructor(x: number, y: number, startingLives = 3) {
    this.x = x;
    this.y = y;
    this.startingLives = startingLives;
    this.lives = startingLives;
  }

  render(ctx: any) {
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
