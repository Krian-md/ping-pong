'use strict';

export default class ShapeBuilder {
  constructor() {
    this.shape = null;
  }

  setShape(shape) {
    this.shape = shape;
    return this;
  }

  setPositionX(posX) {
    this.shape.posX = posX;
    return this;
  }

  setPositionY(posY) {
    this.shape.posY = posY;
    return this;
  }

  setWidth(width) {
    this.shape.width = width;
    return this;
  }

  setHeight(height) {
    this.shape.height = height;
    return this;
  }

  setRadius(radius) {
    this.shape.radius = radius;
    return this;
  }

  setDeltaX(deltaX) {
    this.shape.deltaX = deltaX;
    return this;
  }

  setDeltaY(deltaY) {
    this.shape.deltaY = deltaY;
    return this;
  }

  build() {
    return this.shape;
  }
}
