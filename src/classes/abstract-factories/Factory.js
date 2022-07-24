'use strict';

import BaseFactory from '@/classes/abstract-factories/BaseFactory';
import BuilderRocket from '@/classes/builders/BuilderRocket';
import BuilderBall from '@/classes/builders/BuilderBall';

import appStates from '@/enums/appStates';

export default class Factory extends BaseFactory {
  createBall(canvasSelector, posX, posY) {
    return new BuilderBall()
      .setCanvasSelector(canvasSelector)
      .setPositionX(posX)
      .setPositionY(posY)
      .setRadius(appStates.RADIUS_BALL)
      .setDeltaX(appStates.SPEED_BALL_X)
      .setDeltaY(appStates.SPEED_BALL_Y)
      .build();
  }
  createRocket(canvasSelector, posX, posY) {
    return new BuilderRocket()
      .setCanvasSelector(canvasSelector)
      .setPositionX(posX)
      .setPositionY(posY)
      .setWidth(appStates.WIDTH_ROCKET)
      .setHeight(appStates.HEIGHT_ROCKET)
      .setDeltaY(appStates.SPEED_ROCKET)
      .build();
  }
}
