import Stats from 'https://cdnjs.cloudflare.com/ajax/libs/stats.js/17/Stats.js';

export class Engine {
  constructor(renderer, layers, mouse, gyro) {
    this.renderer = renderer;
    this.layers = layers;
    this.mouse = mouse;
    this.gyro = gyro;

    this.initStats();
  }

  initStats() {
    this.stats = new Stats();
    this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb

    // Стилізуємо панель, щоб вона не заважала дизайну
    this.stats.dom.style.position = 'absolute';
    this.stats.dom.style.top = '10px';
    this.stats.dom.style.left = '10px';
    this.stats.dom.style.opacity = '0.7';

    if (window.location.search.includes('debug=true')) {
      document.body.appendChild(this.stats.dom);
    }
  }

  start() {
    const loop = () => {
      this.stats.begin();

      this.renderer.clear();
      this.renderer.rotateCanvas(this.mouse, this.gyro || { x: 0, y: 0 });

      this.layers.forEach(layer => {
        layer.update(this.mouse, this.gyro || { x: 0, y: 0 });
        layer.draw(this.renderer.ctx);
      });

      this.stats.end();
      requestAnimationFrame(loop);
    };
    loop();
  }
}