'use strict';

import Shape from '@/classes/Shape';
import movementStates from '@/enums/movementStates';
import appStates from '@/enums/appStates';

export default class BaseRocket extends Shape {
  constructor(builderData) {
    super(builderData);
    this.width = builderData.width;
    this.height = builderData.height;
    this.deltaY = builderData.deltaY;
    this.isPressKey = false;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getDeltaY() {
    return this.deltaY;
  }

  isCollisionBall(ball, movevement) {
    const isRightCollision =
      ball.getPositionX() + ball.getRadius() + ball.getDeltaX() >=
        this.getPositionX() &&
      ball.getPositionX() - ball.getRadius() + ball.getDeltaX() <=
        this.getPositionX() + this.getWidth() &&
      movevement === movementStates.RIGHT;

    const isLeftCollision =
      ball.getPositionX() - ball.getRadius() + ball.getDeltaX() <=
        this.getPositionX() + this.getWidth() &&
      ball.getPositionX() - ball.getRadius() + ball.getDeltaX() >=
        this.getPositionX() &&
      movevement === movementStates.LEFT;

    const isVerticalZone =
      ball.getPositionY() >= this.getPositionY() &&
      ball.getPositionY() <= this.getPositionY() + this.getHeight();

    return (isRightCollision || isLeftCollision) && isVerticalZone;
  }

  moveRocket(key, board) {
    const $canvas = this.getCanvas();
    this.isPressKey = true;

    if (key === movementStates.UP) {
      this.deltaY = -appStates.SPEED_ROCKET;
    } else if (key === movementStates.DOWN) {
      this.deltaY = appStates.SPEED_ROCKET;
    }

    if (board.isCollisionRocketUp(this)) {
      this.posY = appStates.PADDING_BOARD + 1;
      this.cancelMove();
    }

    if (board.isCollisionRocketDown(this)) {
      this.posY =
        $canvas.height - this.getHeight() - appStates.PADDING_BOARD - 1;
      this.cancelMove();
    }
  }

  isCheckBehindBoard() {
    const $canvas = this.getCanvas();

    const isBehindBoard =
      this.getPositionY() + this.getHeight() >= $canvas.height ||
      this.getPositionY() <= appStates.PADDING_BOARD;

    return isBehindBoard;
  }

  cancelMove() {
    this.isPressKey = false;
  }

  draw() {
    const $canvas = this.getCanvas();
    const context = $canvas.getContext('2d');

    context.beginPath();
    context.rect(
      this.getPositionX(),
      this.getPositionY(),
      this.getWidth(),
      this.getHeight()
    );
    context.fillStyle = 'brown';
    context.fill();
    context.closePath();
  }

  clear() {
    const $canvas = this.getCanvas();
    const context = $canvas.getContext('2d');

    context.clearRect(
      this.getPositionX(),
      this.getPositionY() - appStates.PADDING_BOARD,
      this.getWidth(),
      this.getHeight() + appStates.PADDING_BOARD * 2.1
    );
  }
}
