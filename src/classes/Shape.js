export default class Shape {
  constructor(builderData) {
    this.canvasSelector = builderData.canvasSelector;
    this.posX = builderData.posX;
    this.posY = builderData.posY;
  }

  getPositionX() {
    return this.posX;
  }

  getPositionY() {
    return this.posY;
  }

  reload() {
    this.clear();
    this.updateParameters();
    this.draw();
  }

  draw() {}

  updateParameters() {}

  clear() {}

  getCanvas() {
    return document.querySelector(this.canvasSelector);
  }
}
