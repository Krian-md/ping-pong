'use strict';

import movementStates from '@/enums/movementStates';

export default class Player {
  constructor(id, name, rocket) {
    this.id = id;
    this.name = name;
    this.rocket = rocket;
    this.point = 0;
  }

  addRocketMovementListener(keyUp, keyDown, board) {
    window.addEventListener('keydown', (event) => {
      const key = event.code;

      if (key === keyUp) {
        this.rocket.move(movementStates.UP, board);
      } else if (key === keyDown) {
        this.rocket.move(movementStates.DOWN, board);
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
}
