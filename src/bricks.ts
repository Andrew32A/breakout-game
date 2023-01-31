/* eslint-disable import/extensions */
import Brick from './brick';

class Bricks {
  rows: number
  columns: number
  width: number
  height: number
  padding: number
  offsetTop: number
  offsetLeft: number
  color: string
  bricks: any

  constructor(rows: number, columns: number, width: number, height: number, padding: number, offsetTop: number, offsetLeft: number, color: string) {
    this.rows = rows;
    this.columns = columns;
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.offsetTop = offsetTop;
    this.offsetLeft = offsetLeft;
    this.color = color;

    this.bricks = [];

    this.init_bricks();
  }

  init_bricks() {
    for (let c = 0; c < this.columns; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.rows; r += 1) {
        const brickX = (c * (this.width + this.padding)) + this.offsetLeft;
        const brickY = (r * (this.height + this.padding)) + this.offsetTop;
        this.bricks[c][r] = new Brick(brickX, brickY, this.width, this.height, this.color);
      }
    }
  }

  render(ctx: any) {
    for (let c = 0; c < this.columns; c += 1) {
      for (let r = 0; r < this.rows; r += 1) {
        const brick = this.bricks[c][r];
        if (brick.status === 1) {
          brick.render(ctx);
        }
      }
    }
  }
}

export default Bricks;
