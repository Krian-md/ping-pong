'use strict';

import Rocket from '@/classes/Rocket';

export default class BuilderRocket {
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

  setWidth(width) {
    this.width = width;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }

  setDeltaY(deltaY) {
    this.deltaY = deltaY;
    return this;
  }

  build() {
    return new Rocket(this);
  }
}
