"use client"
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Float, ScrollControls } from '@react-three/drei'
import { Anatomy } from './Anatomy'
import { ValdTech } from './ValdTech'

interface ConceptSceneProps {
  concept: string;
  part?: string;
  type?: 'background' | 'inline';
}

export function ConceptScene({ concept, part = 'body', type = 'background' }: ConceptSceneProps) {
  const conceptMap: Record<string, number> = {
    'championship': 2,
    'blueprint': 3,
    'bio-scanner': 4,
    'kinetic-flow': 1,
    'neo-human': 5
  }

  const conceptId = conceptMap[concept] || 5;
  const isDark = concept === 'championship' || concept === 'bio-scanner' || concept === 'neo-human';

  return (
    <div className={`${type === 'background' ? 'fixed inset-0 z-0' : 'w-full h-full'} pointer-events-none`}>
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

        {concept === 'championship' && (
          <>
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={3} color="#cff065" />
            <pointLight position={[-10, -5, 2]} intensity={2} color="#ffb595" />
          </>
        )}

        {concept === 'bio-scanner' && (
          <>
            <rectAreaLight width={10} height={10} intensity={5} position={[0, 5, 0]} color="#ddfe71" />
            <gridHelper args={[20, 20, 0xddfe71, 0x222222]} position={[0, -2, 0]} />
          </>
        )}

        <ambientLight intensity={isDark ? 0.2 : 0.5} />
        <Environment preset={isDark ? "night" : "city"} />

        <Suspense fallback={null}>
           <ScrollControls pages={3} damping={0.1}>
              <Float
                speed={concept === 'kinetic-flow' ? 3 : 2}
                rotationIntensity={concept === 'kinetic-flow' ? 2 : 0.5}
                floatIntensity={concept === 'kinetic-flow' ? 2 : 0.5}
              >
                <Anatomy concept={conceptId} part={part} />
              </Float>
              <ValdTech active={concept === 'championship' || concept === 'bio-scanner'} />
           </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}
