"use client"
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ChampionshipPelvic from '../../components/concepts/championship-recovery/ChampionshipPelvic'
import BlueprintPelvic from '../../components/concepts/blueprint/BlueprintPelvic'
import BioScannerPelvic from '../../components/concepts/bio-scanner/BioScannerPelvic'
import KineticFlowPelvic from '../../components/concepts/kinetic-flow/KineticFlowPelvic'
import NeoHumanWomens from '../../components/concepts/neo-human/NeoHumanWomens'

function WomensHealthContent() {
  const searchParams = useSearchParams()
  const concept = searchParams.get('concept') || 'neo-human'

  switch (concept) {
    case 'championship':
      return <ChampionshipPelvic />
    case 'blueprint':
      return <BlueprintPelvic />
    case 'bio-scanner':
      return <BioScannerPelvic />
    case 'kinetic-flow':
      return <KineticFlowPelvic />
    case 'neo-human':
      return <NeoHumanWomens />
    default:
      return <NeoHumanWomens />
  }
}

export default function WomensHealthPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-lime font-bold uppercase tracking-[1em]">Calibrating Protocol...</div>}>
      <WomensHealthContent />
    </Suspense>
  )
}
