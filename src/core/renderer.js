export class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  rotateCanvas(pointer, motion) {
    const rx = (pointer.y * -0.15) + (motion.y * -1.2);
    const ry = (pointer.x * 0.15) + (motion.x * 1.2);
    this.canvas.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  }
}