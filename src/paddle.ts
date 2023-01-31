/* eslint-disable import/extensions */
import Sprite from './sprite.js';

class Paddle extends Sprite {
  speed: number
  
  constructor(x: number, y: number, width = 75, height = 20, color = '#0095DD', speed = 7) {
    super(x, y, width, height, color);
    this.speed = speed;
    this.color = color;
  }
}

export default Paddle;
