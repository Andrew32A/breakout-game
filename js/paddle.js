/* eslint-disable import/extensions */
import Sprite from './sprite.js';

class Paddle extends Sprite {
  constructor(width, height, x = 0, y = 0, status = 10, color = '#0095DD') {
    super(x, y, width, height, color);
    this.status = status;
    this.color = '#0095DD';
  }
}

export default Paddle;
