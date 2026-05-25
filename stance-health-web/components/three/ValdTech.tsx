"use client"
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float, Line } from '@react-three/drei'
import * as THREE from 'three'

export function ValdTech({ active = false }) {
  const group = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (active && group.current) {
      group.current.rotation.y += 0.01
    }
  })

  if (!active) return null

  return (
    <group ref={group} position={[2, 0, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Text
          fontSize={0.2}
          color="#ddfe71"
          anchorX="center"
          anchorY="middle"
        >
          FORCE DATA: 98%
        </Text>
      </Float>
      {/* Mock Force Curve */}
      <Line
        points={[[-0.5, -0.5, 0], [-0.3, 0.2, 0], [0, 0.5, 0], [0.3, -0.2, 0], [0.5, -0.5, 0]]}
        color="#ddfe71"
        lineWidth={2}
      />
    </group>
  )
}
