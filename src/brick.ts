/* eslint-disable import/extensions */
import Sprite from './sprite';

class Brick extends Sprite {
  status: number

  constructor(x: number, y: number, width = 75, height = 20, color = '#FF009E') {
    super(x, y, width, height, color);
    this.status = 1;
  }
}

export default Brick;
