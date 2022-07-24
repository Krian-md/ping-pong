'use strict';

import BuilderShape from '@/classes/builders/BuilderShape';
import Ball from '@/classes/balls/Ball';

export default class BuilderBall extends BuilderShape {
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
