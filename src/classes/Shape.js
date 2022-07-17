// TODO: implements builder pattern;
export default class Shape {
  constructor(canvasSelector) {
    this.canvasSelector = canvasSelector;
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
