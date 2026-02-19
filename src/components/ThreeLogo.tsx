import { Float, useGLTF } from '@react-three/drei';

const ThreeLogo = (props: any) => {
    const { scene } = useGLTF('/models/threejs.glb');

    return (
        <Float floatIntensity={1}>
            <group {...props} dispose={null}>
                <primitive object={scene} />
            </group>
        </Float>
    );
};

useGLTF.preload('/models/threejs.glb');

export default ThreeLogo;
