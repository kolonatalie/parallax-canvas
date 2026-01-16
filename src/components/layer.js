import { gsap } from 'https://cdn.skypack.dev/gsap';

export class Layer {
  constructor(data) {
    this.image = new Image();
    this.src = data.src;
    this.zIndex = data.z_index;
    this.opacity = data.opacity || 1;
    this.blend = data.blend || 'normal';
    this.pos = { x: 0, y: 0 };
    this.scale = { value: 1.5 }; 
    this.currentOpacity = { value: 0 };
  }

  async load() {
    return new Promise((resolve) => {
      this.image.onload = () => resolve(this);
      this.image.src = this.src;
    });
  }

  update(pointer, motion) {
    const touchMult = 0.4;
    const motionMult = 2.5;

    this.pos.x = (pointer.x * this.zIndex * touchMult) + (motion.x * this.zIndex * motionMult);
    this.pos.y = (pointer.y * this.zIndex * touchMult) + (motion.y * this.zIndex * motionMult);
  }

  animateIn(delay) {
    gsap.to(this.scale, {
      value: 1,
      duration: 1,
      delay: delay,
      ease: "power2.out"
    });

    gsap.to(this.currentOpacity, {
      value: this.opacity,
      duration: 0.8,
      delay: delay,
      ease: "power1.inOut"
    });
  }

  draw(ctx) {
    ctx.globalCompositeOperation = this.blend;
    ctx.globalAlpha = this.currentOpacity.value;

    const width = this.image.width * this.scale.value;
    const height = this.image.height * this.scale.value;
    const offsetX = (this.image.width - width) / 2;
    const offsetY = (this.image.height - height) / 2;

    ctx.drawImage(
      this.image,
      this.pos.x + offsetX,
      this.pos.y + offsetY,
      width, 
      height
    );
  }
}