'use strict';

import BuilderShape from '@/classes/builders/BuilderShape';
import Rocket from '@/classes/rockets/Rocket';

export default class BuilderRocket extends BuilderShape {
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
