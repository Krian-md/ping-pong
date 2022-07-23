'use strict';

import Shape from '@/classes/Shape';
import appStates from '@/enums/appStates';

export default class Ball extends Shape {
  constructor(builderData) {
    super(builderData);
    this.radius = builderData.radius;
    this.deltaX = builderData.deltaX;
    this.deltaY = builderData.deltaY;
  }

  getRadius() {
    return this.radius;
  }

  getDeltaX() {
    return this.deltaX;
  }

  getDeltaY() {
    return this.deltaY;
  }

  changeMovementDeltaX() {
    this.deltaX = -this.deltaX;
  }

  changeMovementDeltaY() {
    this.deltaY = -this.deltaY;
  }

  updateParameters() {
    this.posX += this.deltaX;
    this.posY += this.deltaY;
  }

  draw() {
    const $canvas = this.getCanvas();
    const context = $canvas.getContext('2d');

    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = 'brown';
    context.fill();
    context.closePath();
  }

  clear() {
    const $canvas = this.getCanvas();
    const context = $canvas.getContext('2d');

    context.clearRect(
      this.posX - this.radius - appStates.SPEED_BALL_X,
      this.posY - this.radius - appStates.SPEED_BALL_Y,
      this.radius * 2 + appStates.SPEED_BALL_X * 2,
      this.radius * 2 + appStates.SPEED_BALL_Y * 2
    );
  }
}
