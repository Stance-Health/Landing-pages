"use client"
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll, Environment, Float, PerspectiveCamera } from '@react-three/drei'
import { Anatomy } from './Anatomy'
import { ValdTech } from './ValdTech'

export default function Scene({ concept = 1, part = 'body' }) {
  const isDark = concept === 2 || concept === 4;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

        {/* Cinematic Lighting for Concept 2 */}
        {concept === 2 ? (
          <>
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ddfe71" castShadow />
            <spotLight position={[-10, 5, 5]} angle={0.2} penumbra={1} intensity={1} color="#addcec" />
            <pointLight position={[0, -5, 2]} intensity={5} color="#fe7833" />
          </>
        ) : (
          <>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
          </>
        )}

        <Environment preset={isDark ? "night" : "city"} />

        <ScrollControls pages={4} damping={0.1}>
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Anatomy concept={concept} part={part} />
          </Float>
          <ValdTech active={concept === 2 || concept === 4} />
        </ScrollControls>
      </Canvas>
    </div>
  )
}
