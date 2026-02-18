import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

function RotatingCube() {
  const meshRef = useRef<any>(null)

  useFrame((_state, delta) => {
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.5
  })

  return (  
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={0x9cdba6} emissive={"#9cdba6"}/>
    </mesh>
  )
}

function App() {
  
  return (
    <Canvas className='flex justify-center items-center' style={{height: '100vh', width: '100vw'}}>
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6} />

      <color attach="background" args={['#696969']} />
      <RotatingCube />
    </Canvas>
  )
}

export default App
