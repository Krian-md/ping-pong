'use strict';

import BuilderBall from '@/classes/builders/BuilderBall';
import AccelerateBall from '@/classes/balls/AccelerateBall';

export default class BuilderAccelerateBall extends BuilderBall {
  setAccelerateDeltaX(accelerateDeltaX) {
    this.accelerateDeltaX = accelerateDeltaX;
    return this;
  }

  setAccelerateDeltaY(accelerateDeltaY) {
    this.accelerateDeltaY = accelerateDeltaY;
    return this;
  }

  build() {
    return new AccelerateBall(this);
  }
}
