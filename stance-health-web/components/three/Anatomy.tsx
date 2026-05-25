"use client"
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, MeshDistortMaterial, Points, PointMaterial, Line, MeshTransmissionMaterial, Float, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

export function Anatomy({ concept = 1, part = 'body' }) {
  const mesh = useRef<THREE.Group>(null!)
  const scroll = useScroll()

  const particles = useMemo(() => {
    const temp = new Float32Array(3000 * 3)
    for (let i = 0; i < 3000; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 4
      temp[i * 3 + 1] = (Math.random() - 0.5) * 6
      temp[i * 3 + 2] = (Math.random() - 0.5) * 4
    }
    return temp
  }, [])

  const particleRef = useRef<any>(null!)

  useFrame((state, delta) => {
    const offset = scroll.offset

    // Different rotation logic per concept
    if (concept === 1) { // Kinetic Flow
        mesh.current.rotation.y += delta * 0.5
        mesh.current.rotation.z += delta * 0.2
    } else {
        mesh.current.rotation.y = offset * Math.PI * 4
    }

    // Smooth position transition based on part
    const targetX = part === 'pelvis' ? 1.5 : (offset > 0.5 ? -2.5 : 0)
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, targetX, 0.1)

    if (concept === 4 && particleRef.current) {
      particleRef.current.rotation.y += delta * 0.5
      particleRef.current.rotation.z += delta * 0.2
    }

    if (concept === 5) {
      mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <group ref={mesh}>
      <AnatomyModel concept={concept} scroll={scroll} particles={particles} particleRef={particleRef} part={part} />
    </group>
  )
}

function AnatomyModel({ concept, scroll, particles, particleRef, part }: any) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    const offset = scroll.offset
    if (meshRef.current && meshRef.current.material) {
      const mat = meshRef.current.material as any
      // Color Story per Concept
      if (offset > 0.7) {
        mat.color?.lerp(new THREE.Color("#ddfe71"), 0.05) // Stance Lime
      } else if (offset > 0.4) {
        const midColor = concept === 3 ? "#fe7833" : "#addcec"
        mat.color?.lerp(new THREE.Color(midColor), 0.05)
      } else {
        const baseColor = concept === 2 ? "#cff065" : (concept === 4 ? "#ddfe71" : "#132644")
        mat.color?.lerp(new THREE.Color(baseColor), 0.05)
      }
    }
  })

  // Geometry adjustments for focus areas
  const scale: [number, number, number] = part === 'pelvis' ? [2, 2, 2] : [1, 1, 1]

  if (concept === 1) {
    return (
      <mesh ref={meshRef} scale={scale}>
        <octahedronGeometry args={[1, 4]} />
        <meshBasicMaterial color="#132644" wireframe />
      </mesh>
    )
  }

  if (concept === 2) {
    return (
      <mesh ref={meshRef} scale={scale}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial
          color="#cff065"
          metalness={1}
          roughness={0.1}
          emissive="#cff065"
          emissiveIntensity={0.5}
        />
      </mesh>
    )
  }

  if (concept === 3) {
    return (
      <group scale={scale}>
        <mesh ref={meshRef}>
          <boxGeometry args={[1.5, 2.5, 1]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={1}
            chromaticAberration={0.02}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.1}
            temporalDistortion={0.1}
            color="#addcec"
          />
        </mesh>
        <Line points={[[-1, -1.5, 0], [1, -1.5, 0]]} color="#132644" lineWidth={1} />
        <Line points={[[-1, 1.5, 0], [1, 1.5, 0]]} color="#132644" lineWidth={1} />
      </group>
    )
  }

  if (concept === 4) {
    return (
      <Points ref={particleRef} positions={particles} scale={scale}>
        <PointMaterial
          transparent
          color="#ddfe71"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    )
  }

  return (
    <mesh ref={meshRef} scale={scale}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <MeshWobbleMaterial
        color="#132644"
        speed={1}
        factor={0.6}
      />
    </mesh>
  )
}
