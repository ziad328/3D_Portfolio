import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, PerformanceMonitor } from '@react-three/drei'; // Import PerformanceMonitor
import { Leva } from 'leva';

import CanvasLoader from './CanvasLoader.tsx';
import HackerRoom from './HackerRoom.tsx';
import HeroCamera from './HeroCamera.tsx';
import ThreeLogo from './ThreeLogo.tsx';
import ReactLogo from './ReactLogo.tsx';

interface HeroCanvasProps {
    sizes: {
        deskScale: number;
        deskPosition: [number, number, number];
        threeLogoPosition: [number, number, number];
        threeLogoScale: number;
        reactLogoPosition: [number, number, number];
        reactLogoScale: number;
    };
    isMobile: boolean;
}

const HeroCanvas = ({ sizes, isMobile }: HeroCanvasProps) => {
    const [dpr, setDpr] = useState(isMobile ? 1.5 : 2); // default DPR lower on mobile

    return (
        <Canvas
            className="w-full h-full"
            dpr={dpr}
            gl={{ preserveDrawingBuffer: true, antialias: !isMobile }} // disable AA on mobile
        >
            <Suspense fallback={<CanvasLoader />}>
                {/* To hide controller */}
                <Leva hidden />
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(2)} />

                <HeroCamera isMobile={isMobile}>
                    <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
                </HeroCamera>

                <group>
                    <ThreeLogo position={sizes.threeLogoPosition} scale={sizes.threeLogoScale} />
                    <ReactLogo position={sizes.reactLogoPosition} scale={sizes.reactLogoScale} />
                </group>

                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
        </Canvas>
    );
};

export default HeroCanvas;
