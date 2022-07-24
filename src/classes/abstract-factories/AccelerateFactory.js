'use strict';

import BaseFactory from '@/classes/abstract-factories/BaseFactory';
import BuilderAccelerateRocket from '@/classes/builders/BuilderAccelerateRocket';
import BuilderAccelerateBall from '@/classes/builders/BuilderAccelerateBall';

import appStates from '@/enums/appStates';

export default class AccelerateFactory extends BaseFactory {
  createBall(canvasSelector, posX, posY) {
    return new BuilderAccelerateBall()
      .setCanvasSelector(canvasSelector)
      .setPositionX(posX)
      .setPositionY(posY)
      .setRadius(appStates.RADIUS_BALL)
      .setDeltaX(appStates.SPEED_BALL_X)
      .setDeltaY(appStates.SPEED_BALL_Y)
      .setAccelerateDeltaX(appStates.ACCELERATION)
      .setAccelerateDeltaY(appStates.ACCELERATION)
      .build();
  }
  createRocket(canvasSelector, posX, posY) {
    return new BuilderAccelerateRocket()
      .setCanvasSelector(canvasSelector)
      .setPositionX(posX)
      .setPositionY(posY)
      .setWidth(appStates.WIDTH_ROCKET)
      .setHeight(appStates.HEIGHT_ROCKET)
      .setDeltaY(appStates.SPEED_ROCKET)
      .setAccelerateDeltaY(appStates.ACCELERATION)
      .build();
  }
}
