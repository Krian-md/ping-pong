'use strict';

import appStates from '@/enums/appStates';

export default class Board {
  constructor(boardSelector, canvasSelector) {
    this.boardSelector = boardSelector;
    this.canvasSelector = canvasSelector;
  }

  resize() {
    const board = this._getBoard();
    const $canvas = this._getCanvas();

    $canvas.setAttribute('width', board.offsetWidth - 4);
    $canvas.setAttribute('height', board.offsetHeight - 4);
  }

  // TODO: background or backgroundImage implements;

  backgroundImage(image) {
    const $canvas = this._getCanvas();
    const context = $canvas.getContext('2d');

    const background = new Image();
    background.src = image;

    background.onload = function () {
      context.beginPath();
      context.drawImage(background, 0, 0);
      context.closePath();
    };
  }

  isCollisionBall(ball) {
    const $canvas = this._getCanvas();

    const isCollisionUp =
      ball.getPositionY() - ball.getRadius() <= appStates.PADDING_BOARD;

    const isCollisionDown =
      ball.getPositionY() + ball.getRadius() >=
      $canvas.height - appStates.PADDING_BOARD;

    return isCollisionUp || isCollisionDown;
  }

  isCollisionRocket(rocket) {
    return (
      this.isCollisionRocketUp(rocket) || this.isCollisionRocketDown(rocket)
    );
  }

  isCollisionRocketUp(rocket) {
    const isCollisionUp =
      rocket.getPositionY() + rocket.getDeltaY() <= appStates.PADDING_BOARD;
    return isCollisionUp;
  }

  isCollisionRocketDown(rocket) {
    const $canvas = this._getCanvas();

    const isCollisionDown =
      rocket.getPositionY() + rocket.getHeight() + rocket.getDeltaY() >=
      $canvas.height - appStates.PADDING_BOARD;

    return isCollisionDown;
  }

  _getBoard() {
    return document.querySelector(this.boardSelector);
  }

  _getCanvas() {
    return document.querySelector(this.canvasSelector);
  }
}
