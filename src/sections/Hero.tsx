import { Suspense, lazy, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import Button from '../components/Button.tsx';
import CanvasLoader from '../components/CanvasLoader.tsx';
import { calculateSizes } from '../constants/index.ts';

const HeroCanvas = lazy(() => import('../components/HeroCanvas.tsx'));

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    const heroRef = useRef<HTMLElement>(null);

    // Mount-time entrance for the hero text
    useGSAP(() => {
        gsap.fromTo(
            '.hero-text',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.2,
            },
        );
        gsap.fromTo(
            '.hero-btn',
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.5,
            },
        );
    }, { scope: heroRef });

    return (
        <section ref={heroRef} className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="hero-text sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Ziad <span className="waving-hand">👋</span>
                </p>
                <p className="hero-text hero_tag text-gray_gradient">Bringing Ideas to Life</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Suspense
                    fallback={
                        <Canvas className="w-full h-full">
                            <CanvasLoader />
                        </Canvas>
                    }
                >
                    <HeroCanvas sizes={sizes} isMobile={isMobile} />
                </Suspense>
            </div>

            <div className="hero-btn absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
