# 🌐 Ziad Seleem | 3D Portfolio

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![ThreeJs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

A high-performance, interactive 3D portfolio showcasing my 2 years of creating projects as a front-end developer. Built with a focus on immersive user experience, smooth animations, and responsive design, (small note) projects section are not updated to all kind of projects i did you can find these in my repos and surly i will update it in the future.

🔗 **Live Demo:** [ziad-seleem-portfolio.vercel.app](https://ziad-seleem-portfolio.vercel.app/)

---

## Overview

This project is more than just a resume it's an interactive 3D experience. By leveraging **React Three Fiber**, I've created a workspace where users can explore my skills, projects, and professional background in a dynamic environment.

### Key Features
- **3D Interactive Elements:** Fully rendered 3D models and environments that respond to user input.
- **Bento-style UI:** Modern, clean grid layout for displaying personal information and tech stack.
- **Smooth Animations:** Utilizes Framer Motion for seamless transitions and GSAP for complex scroll-based interactions.
- **Responsive Design:** Optimized for all screen sizes, from mobile devices to ultra-wide monitors.
- **Direct Contact:** Integrated contact form with validation for easy communication.

### 🚀 Performance Optimizations
To overcome initial main-thread blocking and improve Lighthouse scores, I implemented several key performance strategies:
- **Asset Compression:** Ensured all 3D models and textures were heavily compressed before loading.
- **Loading Strategy & Code Splitting:** Utilized lazy loading (`React.lazy` and `Suspense`) to delay rendering the 3D canvas until needed, and preloaded critical models to speed up initialization.
- **Visibility & Culling:** Implemented frustum culling so off-screen elements aren't rendered. Used conditional rendering to serve a simplified 3D scene, saving GPU resources on mobile devices.
- **Environment & Lighting:** Replaced calculation-heavy lights with a single Environment map (HDRI) and reduced shadow map sizes to maintain high frame rates.

---

## 🛠️ Tech Stack

- **Frontend:** [React.js](https://reactjs.org/)
- **3D Rendering:** [Three.js](https://threejs.org/) / [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/)
- **Icons:** [Lucide React](https://lucide.dev/) / [FontAwesome](https://fontawesome.com/)
- **Deployment:** [Vercel](https://vercel.com/)
