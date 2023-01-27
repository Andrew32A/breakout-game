/* eslint-disable import/extensions */
import Sprite from './sprite.js';

class Paddle extends Sprite {
  constructor(x = 0, y = 0, status = 10, color = '#0095DD') {
    super(x, y, width, height, speed, color);
    this.speed = speed;
    this.color = color;
  }
}

export default Paddle;
