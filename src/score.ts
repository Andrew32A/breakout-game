class Score {
  x: number
  y: number
  score: number
  
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.score = 0;
  }

  render(ctx: any) {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
  }

  update(points: number) {
    this.score += points;
  }

  reset() {
    this.score = 0;
  }
}

export default Score;
