import { gsap } from 'https://cdn.skypack.dev/gsap';

export class Mouse {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.initial = { x: 0, y: 0 };
    this.isMoving = false;
    this.initEvents();
  }

  initEvents() {
    const start = (e) => {
      this.isMoving = true;
      this.initial.x = e.clientX || e.touches[0].clientX;
      this.initial.y = e.clientY || e.touches[0].clientY;
    };

    const move = (e) => {
      if (!this.isMoving) return;
      const curX = e.clientX || e.touches[0].clientX;
      const curY = e.clientY || e.touches[0].clientY;
      this.x = curX - this.initial.x;
      this.y = curY - this.initial.y;
    };

    const end = () => {
      this.isMoving = false;
      gsap.to(this, { x: 0, y: 0, duration: 0.6, ease: "back.out(1.7)" });
    };

    window.addEventListener('mousedown', start);
    window.addEventListener('touchstart', start);
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move);
    window.addEventListener('mouseup', end);
    window.addEventListener('touchend', end);
  }
}