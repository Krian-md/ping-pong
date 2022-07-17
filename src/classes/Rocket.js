'use strict';

import Shape from '@/classes/Shape';
import movementStates from '@/enums/movementStates';
import appStates from '@/enums/appStates';

export default class Rocket extends Shape {
  constructor(canvasSelector) {
    super(canvasSelector);
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  isCollision(ball, movevement) {
    const isRightCollision =
      ball.getPositionX() + ball.getRadius() + ball.getDeltaX() >
        this.getPositionX() && movevement === movementStates.RIGHT;

    const isLeftCollision =
      ball.getPositionX() - ball.getRadius() + ball.getDeltaX() <
        this.getPositionX() + this.getWidth() &&
      movevement === movementStates.LEFT;

    const isVerticalZone =
      ball.getPositionY() > this.getPositionY() &&
      ball.getPositionY() < this.getPositionY() + this.getHeight();

    return (isRightCollision || isLeftCollision) && isVerticalZone;
  }

  // TODO: unite bath methods

  move(key, board) {
    const $canvas = this.getCanvas();

    this.clear();

    if (key === movementStates.UP) {
      this.posY -= this.deltaY;

      if (board.isCollisionRocket(this)) {
        this.posY = appStates.PADDING_BOARD;
      }
    } else if (key === movementStates.DOWN) {
      this.posY += this.deltaY;

      if (board.isCollisionRocket(this)) {
        this.posY = $canvas.height - this.getHeight() - appStates.PADDING_BOARD;
      }
    }

    this.draw();
  }

  draw() {
    const $canvas = this.getCanvas();
    const context = $canvas.getContext('2d');

    context.beginPath();
    context.rect(this.posX, this.posY, this.width, this.height);
    context.fillStyle = 'brown';
    context.fill();
    context.closePath();
  }

  clear() {
    const $canvas = this.getCanvas();
    const context = $canvas.getContext('2d');

    context.clearRect(this.posX, this.posY, this.width, this.height);
  }
}
