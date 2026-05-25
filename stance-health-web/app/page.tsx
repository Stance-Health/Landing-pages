"use client"
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ChampionshipHome from '../components/concepts/championship-recovery/ChampionshipHome'
import BlueprintHome from '../components/concepts/blueprint/BlueprintHome'
import BioScannerHome from '../components/concepts/bio-scanner/BioScannerHome'
import KineticFlowHome from '../components/concepts/kinetic-flow/KineticFlowHome'
import NeoHumanHome from '../components/concepts/neo-human/NeoHumanHome'
import { Navigation } from '../components/ui/Navigation'
import { CTAButton } from '../components/ui/CTAButton'
import Scene from '../components/three/Scene'
import { content } from './content'
import Link from 'next/link'

function HomeContent() {
  const searchParams = useSearchParams()
  const concept = searchParams.get('concept') || 'neo-human'

  switch (concept) {
    case 'championship':
      return <ChampionshipHome />
    case 'blueprint':
      return <BlueprintHome />
    case 'bio-scanner':
      return <BioScannerHome />
    case 'kinetic-flow':
      return <KineticFlowHome />
    case 'neo-human':
      return <NeoHumanHome />
    default:
      // Fallback to original design logic if needed or just neo-human
      return <NeoHumanHome />
  }
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-lime font-bold uppercase tracking-[1em]">Initializing...</div>}>
      <HomeContent />
    </Suspense>
  )
}
