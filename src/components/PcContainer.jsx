import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Pc from './Pc'

const PcContainer = () => {
  return (
    <Canvas>
      <Stage environment="apartment" intensity={1}>
        <Pc/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default PcContainer;