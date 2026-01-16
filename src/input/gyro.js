export class Gyro {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.initial = { x: null, y: null };
	}

	static async requestPermission() {
    if (typeof DeviceOrientationEvent !== 'undefined' && 
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const permission = await DeviceOrientationEvent.requestPermission();
        return permission === 'granted';
      } catch (error) {
        console.error("Gyro permission denied:", error);
        return false;
      }
    }
    return true;
  }

	initEvents() {
		window.addEventListener('orientationchange', () => {
			this.initial.x = null;
			this.initial.y = null;
		});

		window.addEventListener('deviceorientation', (event) => {
			this.handleMotion(event);
		});
	}

	handleMotion(event) {
		if (this.initial.x === null || this.initial.y === null) {
			this.initial.x = event.beta;
			this.initial.y = event.gamma;
		}

		const orientation = window.orientation || 0;

		switch (orientation) {
			case 0:
				this.x = event.gamma - this.initial.y;
				this.y = event.beta - this.initial.x;
				break;
			case 90:
				this.x = event.beta - this.initial.x;
				this.y = -event.gamma + this.initial.y;
				break;
			case -90:
				this.x = -event.beta + this.initial.x;
				this.y = event.gamma - this.initial.y;
				break;
			case 180:
				this.x = -event.gamma + this.initial.y;
				this.y = -event.beta + this.initial.x;
				break;
		}
	}
}