'use strict';
import Ball from '@/classes/Ball';

export default class BuilderBall {
  setCanvasSelector(canvasSelector) {
    this.canvasSelector = canvasSelector;
    return this;
  }

  setPositionX(posX) {
    this.posX = posX;
    return this;
  }

  setPositionY(posY) {
    this.posY = posY;
    return this;
  }

  setRadius(radius) {
    this.radius = radius;
    return this;
  }

  setDeltaX(deltaX) {
    this.deltaX = deltaX;
    return this;
  }

  setDeltaY(deltaY) {
    this.deltaY = deltaY;
    return this;
  }

  build() {
    return new Ball(this);
  }
}
