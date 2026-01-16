import { layersData } from './config/layersData.js';
import { Layer } from './components/layer.js';
import { Renderer } from './core/renderer.js';
import { Engine } from './core/engine.js';
import { Mouse } from './input/mouse.js';
import { Gyro } from './input/gyro.js';

async function init() {
  const canvas = document.getElementById('canvas');
  const loader = document.getElementById('loading');
  const loaderContent = document.getElementById('loader-content');

  const layers = layersData.map(data => new Layer(data));
  await Promise.all(layers.map(l => l.load()));

  loaderContent.innerHTML = `<button class="btn-start" id="start-btn">Start Experience</button>`;

  document.getElementById('start-btn').addEventListener('click', async () => {
    const hasPermission = await Gyro.requestPermission();
    
    const mouse = new Mouse();
    const gyro = new Gyro();
    if (hasPermission) gyro.initEvents();

    layers.forEach((layer, index) => {
      layer.animateIn(index * 0.1); 
    });

    loader.classList.add('loader--hidden');
    const engine = new Engine(new Renderer(canvas), layers, mouse, gyro);
    engine.start();
  });
}

init();