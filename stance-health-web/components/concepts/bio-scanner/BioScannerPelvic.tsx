"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ConceptScene } from '../../three/ConceptScene'

export default function BioScannerPelvic() {
  const searchParams = useSearchParams()
  const concept = searchParams.get('concept') || 'bio-scanner'

  return (
    <div className="bg-black text-white font-['Unbounded'] min-h-screen">
      <ConceptScene concept="bio-scanner" part="pelvis" type="background" />

      <div className="fixed top-0 left-0 p-12 z-50">
        <Link href={`/?concept=${concept}`} className="text-lime text-xs font-bold tracking-[0.5em] mb-4 block">MODE: SCAN_PELVIC</Link>
        <div className="w-32 h-[1px] bg-lime/30"></div>
      </div>

      <main className="relative z-10 min-h-screen flex items-center justify-center p-12">
        <div className="grid md:grid-cols-3 gap-12 w-full max-w-7xl">
          <div className="col-span-2">
            <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter mb-12 leading-none uppercase mix-blend-difference">
              DEEP <br/><span className="text-lime">CORE</span> <br/>VISUALS
            </h1>
            <p className="text-xl text-white/40 max-w-xl uppercase tracking-widest leading-loose font-bold bg-black/40 backdrop-blur-md p-6 border-l border-lime">
              Translating pelvic floor dysfunction into actionable data points.
            </p>
          </div>
          <div className="border border-white/10 bg-white/5 p-8 flex flex-col justify-between backdrop-blur-xl">
             <div className="text-[10px] uppercase tracking-[0.4em] text-lime">Bio-Feedback Active</div>
             <div className="h-64 border-y border-white/5 my-8"></div>
             <Link href="/booking/modal" className="w-full bg-lime text-black py-6 text-center font-bold uppercase text-xs tracking-widest">
               Sync Protocol
             </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
