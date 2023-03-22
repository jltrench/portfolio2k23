import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Pc from './Pc'

const PcContainer = () => {

  return (
    <Canvas>
      <Stage environment="apartment" intensity={.35}>
        <Pc/>
      </Stage>
      <OrbitControls autoRotate={true} autoRotateSpeed={.5} enablePan={false} enableZoom={false}  makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}/>
    </Canvas>
  )
}

export default PcContainer;