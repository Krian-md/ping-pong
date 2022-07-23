'use strict';

import movementStates from '@/enums/movementStates';

export default class Player {
  constructor(id, name, rocket) {
    this.id = id;
    this.name = name;
    this.rocket = rocket;
    this.point = 0;
  }

  addMoveRocketListener(keyUp, keyDown, board) {
    window.addEventListener('keydown', (event) => {
      const key = event.code;

      if (key === keyUp) {
        this.rocket.moveRocket(movementStates.UP, board);
      } else if (key === keyDown) {
        this.rocket.moveRocket(movementStates.DOWN, board);
      }
    });
  }

  cancelMoveRocketListener(keyUp, keyDown) {
    window.addEventListener('keyup', (event) => {
      const key = event.code;
      if (key === keyUp || key === keyDown) {
        this.rocket.cancelMove();
      }
    });
  }

  increasePoint() {
    this.point++;
  }

  getRocket() {
    return this.rocket;
  }

  getPoint() {
    return this.point;
  }

  setRocket(rocket) {
    this.rocket = rocket;
  }

  resetPoint() {
    this.point = 0;
  }
}
