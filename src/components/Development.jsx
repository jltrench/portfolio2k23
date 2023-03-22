import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react';
import Backend from './Backend';

const Development = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Backend/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default Development;