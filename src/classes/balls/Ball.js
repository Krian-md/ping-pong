'use strict';

import BaseBall from '@/classes/balls/BaseBall';

export default class Ball extends BaseBall {
  constructor(builderData) {
    super(builderData);
  }

  updateParameters() {
    this.posX += this.deltaX;
    this.posY += this.deltaY;
  }
}
