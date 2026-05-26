"use client"
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, MeshDistortMaterial, Points, PointMaterial, Line, MeshTransmissionMaterial, Float, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

export function Anatomy({ concept = 1, part = 'body' }) {
  const mesh = useRef<THREE.Group>(null!)
  const scroll = useScroll()

  useFrame((state, delta) => {
    const offset = scroll.offset
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, offset * Math.PI * 2, 0.1)
    const targetX = part === 'back' ? (offset > 0.1 ? -1.8 : 0) : 0
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, targetX, 0.1)
  })

  return (
    <group ref={mesh}>
      <AnatomyModel concept={concept} scroll={scroll} part={part} />
    </group>
  )
}

function Humanoid({ color, wireframe = false, opacity = 1, scroll, lowPoly = false }: any) {
  const group = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (!group.current) return
    const offset = scroll.offset
    group.current.traverse((child: any) => {
      if (child.isMesh) {
        const worldPos = new THREE.Vector3()
        child.getWorldPosition(worldPos)
        const scanY = 2.5 - (offset * 5)
        if (worldPos.y > scanY) {
           child.material.color.lerp(new THREE.Color("#ddfe71"), 0.1)
           if (!wireframe) child.material.opacity = 1
        } else {
           child.material.color.lerp(new THREE.Color(color), 0.1)
           if (!wireframe) child.material.opacity = opacity
        }
      }
    })
  })

  return (
    <group ref={group} scale={[0.8, 0.8, 0.8]}>
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.25, 6, 6]} />
        <meshStandardMaterial color={color} wireframe={wireframe} transparent opacity={opacity} />
      </mesh>
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.7, 1.2, 0.4]} />
        <meshStandardMaterial color={color} wireframe={wireframe} transparent opacity={opacity} />
      </mesh>
      <mesh position={[-0.55, 1.4, 0]} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[0.15, 0.8, 0.15]} />
        <meshStandardMaterial color={color} wireframe={wireframe} transparent opacity={opacity} />
      </mesh>
      <mesh position={[0.55, 1.4, 0]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.15, 0.8, 0.15]} />
        <meshStandardMaterial color={color} wireframe={wireframe} transparent opacity={opacity} />
      </mesh>
      <mesh position={[-0.2, 0.2, 0]}>
        <boxGeometry args={[0.2, 1.2, 0.2]} />
        <meshStandardMaterial color={color} wireframe={wireframe} transparent opacity={opacity} />
      </mesh>
      <mesh position={[0.2, 0.2, 0]}>
        <boxGeometry args={[0.2, 1.2, 0.2]} />
        <meshStandardMaterial color={color} wireframe={wireframe} transparent opacity={opacity} />
      </mesh>
    </group>
  )
}

function Scanline({ scroll }: { scroll: any }) {
  const line = useRef<THREE.Mesh>(null!)
  useFrame(() => {
    const offset = scroll.offset
    line.current.position.y = 2.0 - (offset * 4.0)
    line.current.scale.x = 2 + Math.sin(offset * Math.PI) * 0.5
    line.current.rotation.x = Math.PI / 2
  })

  return (
    <mesh ref={line}>
      <ringGeometry args={[1.9, 2, 64]} />
      <meshBasicMaterial color="#ddfe71" transparent opacity={0.8} side={THREE.DoubleSide} />
    </mesh>
  )
}

function AnatomyModel({ concept, scroll, part }: any) {
  if (concept === 2) {
    return (
      <group>
        <Humanoid color="#fe7833" scroll={scroll} opacity={0.5} />
        <Scanline scroll={scroll} />
      </group>
    )
  }

  if (concept === 3) {
    return (
      <group>
         <Humanoid color="#addcec" wireframe={true} opacity={0.2} scroll={scroll} lowPoly={true} />
         <Humanoid color="#132644" wireframe={false} opacity={0} scroll={scroll} lowPoly={true} />
         <Scanline scroll={scroll} />
      </group>
    )
  }

  return (
    <mesh>
      <sphereGeometry args={[1.2, 64, 64]} />
      <MeshWobbleMaterial color="#132644" speed={1} factor={0.6} />
    </mesh>
  )
}
