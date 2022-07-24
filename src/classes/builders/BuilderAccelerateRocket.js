'use strict';

import BuilderRocket from '@/classes/builders/BuilderRocket';
import AccelerateRocket from '@/classes/rockets/AccelerateRocket';

export default class BuilderAccelerateRocket extends BuilderRocket {
  setAccelerateDeltaY(accelerateDeltaY) {
    this.accelerateDeltaY = accelerateDeltaY;
    return this;
  }

  build() {
    return new AccelerateRocket(this);
  }
}
