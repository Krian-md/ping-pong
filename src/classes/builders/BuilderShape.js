'use strict';

export default class BuilderShape {
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

  build() {}
}
