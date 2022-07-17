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
      ball.getPositionY() - ball.getRadius() < appStates.PADDING_BOARD;

    const isCollisionDown =
      ball.getPositionY() + ball.getRadius() >
      $canvas.offsetHeight - appStates.PADDING_BOARD;

    return isCollisionUp || isCollisionDown;
  }

  isCollisionRocket(rocket) {
    const $canvas = this._getCanvas();

    const isCollisionUp = rocket.getPositionY() <= appStates.PADDING_BOARD;

    const isCollisionDown =
      rocket.getPositionY() + rocket.getHeight() >=
      $canvas.height - appStates.PADDING_BOARD;

    return isCollisionUp || isCollisionDown;
  }

  _getBoard() {
    return document.querySelector(this.boardSelector);
  }
  _getCanvas() {
    return document.querySelector(this.canvasSelector);
  }
}
