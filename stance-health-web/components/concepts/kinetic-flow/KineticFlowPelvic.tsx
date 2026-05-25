"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ConceptScene } from '../../three/ConceptScene'

export default function KineticFlowPelvic() {
  const searchParams = useSearchParams()
  const concept = searchParams.get('concept') || 'kinetic-flow'

  return (
    <div className="bg-[#f0f0f0] text-[#132644] font-['Montserrat'] min-h-screen">
      <ConceptScene concept="kinetic-flow" part="pelvis" type="background" />

      <header className="p-12 flex justify-between items-center relative z-20">
        <Link href={`/?concept=${concept}`} className="text-2xl font-black italic">KINETIC<span className="text-[#addcec]">FLOW</span></Link>
        <span className="text-xs font-bold uppercase tracking-[0.4em] opacity-30">Women's Health</span>
      </header>

      <main className="relative z-10 px-12 md:px-24 py-12">
        <div className="max-w-5xl">
          <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-none mb-12">RESTORE <br/>BALANCE</h1>
          <p className="text-3xl font-light text-[#132644]/50 mb-24 max-w-2xl leading-tight bg-white/20 backdrop-blur-sm p-8 rounded-3xl">
            Our approach to pelvic floor health is rooted in movement. We help you regain confidence and strength through fluid, functional protocols.
          </p>

          <div className="grid md:grid-cols-2 gap-24 items-end">
            <div>
              <div className="space-y-12">
                 <div className="bg-white/40 p-6 rounded-2xl">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-[#addcec] block mb-2">Phase 01</span>
                   <h3 className="text-2xl font-bold italic mb-4">Awareness & Control</h3>
                   <p className="opacity-60">Reconnecting with the internal musculature.</p>
                 </div>
                 <div className="bg-white/40 p-6 rounded-2xl">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-[#addcec] block mb-2">Phase 02</span>
                   <h3 className="text-2xl font-bold italic mb-4">Dynamic Strength</h3>
                   <p className="opacity-60">Integrating stability into everyday movement.</p>
                 </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-[#addcec]/10 rounded-[100px] overflow-hidden">
                 <ConceptScene concept="kinetic-flow" part="pelvis" type="inline" />
              </div>
              <Link href="/booking/modal" className="absolute -bottom-8 -left-8 bg-[#132644] text-white px-12 py-8 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-xl">
                Start Journey
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
