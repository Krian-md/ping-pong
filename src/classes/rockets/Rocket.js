'use strict';

import BaseRocket from '@/classes/rockets/BaseRocket';

export default class Rocket extends BaseRocket {
  constructor(builderData) {
    super(builderData);
  }

  updateParameters() {
    if (this.isPressKey && !this.isCheckBehindBoard()) {
      this.posY += this.getDeltaY();
    }
  }
}
