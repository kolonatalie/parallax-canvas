# Interactive Parallax Canvas | [Live Preview](https://kolonatalie.github.io/parallax-canvas/)
An immersive, multi-layered parallax experience built with modern JavaScript and GSAP.

| | |
| :--- | :--- |
| **Project Status** | $$in Progress$$ |
|||


## Roadmap & Future Improvements
This project is an evolving case study. My next steps for optimization include:

- [ ] Migrating to TypeScript

- [ ] Integrating Vite

- [ ] Implementing a detailed preloader with a progress bar and WebP image optimization

- [ ] Adding GSAP ScrollTrigger to tie parallax depth to the scroll position

## Features & Tech Stack (*current*)
- Vanilla JavaScript (ES6+)
- GSAP (GreenSock)
- Canvas API
- Responsive & Mobile Friendly:
    - DeviceOrientation API (*motion-based parallax for mobile devices*)
    - iOS Safari Support
- BEM Methodology

## Project Structure
The project follows a **"Separation of Concerns"** principle:
```bash
parallax-canvas/
├── src/
│   ├── assets/          
│   ├── core/            
│   │   ├── renderer.js
│   │   └── engine.js
│   ├── components/
│   │   └── layer.js
│   ├── input/
│   │   ├── mouse.js
│   │   └── gyro.js
│   ├── config/
│   │   └── layersData.js
│   └── main.js
├── index.html
└── styles.css
```

## Getting Started (Local Setup)

1.  **Clone the repository:**
    
    `git clone` [`https://github.com/kolonatalie/parallax-canvas.git`](https://github.com/kolonatalie/parallax-canvas.git)
    
2.  **Run the code:**
    Open `index.html` file in your browser (Live Server recommended).

## 🔗 Connect with Me

I'm always open to feedback, collaboration, and connecting with fellow developers.

[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-563D6F?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kolonatalie/)
[![X Badge](https://img.shields.io/badge/X-8A62B3?style=for-the-badge&logo=x&logoColor=white)](https://x.com/dev_kolonatalie)
[![Bluesky Badge](https://img.shields.io/badge/Bluesky-A575D4?style=for-the-badge&logo=bluesky&logoColor=white)](https://bsky.app/profile/kolonatalie.bsky.social)
[![Mastodon Badge](https://img.shields.io/badge/Mastodon-704F91?style=for-the-badge&logo=mastodon&logoColor=white)](https://mastodon.social/@kolonatalie)
[![GitHub Badge](https://img.shields.io/badge/GitHub-3D2B4F?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kolonatalie)


**`Keywords & Topics`**

`javascript`, `gsap`, `canvas-api`, `parallax-effect`, `oop`, `frontend-development`, `web-animation`, `mobile-first`, `clean-code`, `device-orientation`, `interactive-design`