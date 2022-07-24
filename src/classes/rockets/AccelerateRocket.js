'use strict';

import BaseRocket from '@/classes/rockets/BaseRocket';

export default class AccelerateRocket extends BaseRocket {
  constructor(builderData) {
    super(builderData);
    this.accelerateDeltaY = builderData.accelerateDeltaY;
  }

  updateParameters() {
    if (this.isPressKey && !this.isCheckBehindBoard()) {
      this.posY += this.getDeltaY() * this.accelerateDeltaY;

      this.accelerateDeltaY += 0.001;
    }
  }
}
