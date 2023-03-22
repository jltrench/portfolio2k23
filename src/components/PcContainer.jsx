import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Pc from './Pc'

const WebDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Pc/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default WebDesign