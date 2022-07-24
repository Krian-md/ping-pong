'use strict';

import BaseBall from '@/classes/balls/BaseBall';

export default class AccelerateBall extends BaseBall {
  constructor(builderData) {
    super(builderData);
    this.accelerateDeltaX = builderData.accelerateDeltaX;
    this.accelerateDeltaY = builderData.accelerateDeltaY;
  }

  updateParameters() {
    this.posX += this.deltaX * this.accelerateDeltaX;
    this.posY += this.deltaY * this.accelerateDeltaY;

    this.accelerateDeltaX += 0.001;
    this.accelerateDeltaY += 0.001;
  }
}
