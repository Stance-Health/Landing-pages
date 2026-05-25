"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ConceptScene } from '../../three/ConceptScene'

export default function ChampionshipPelvic() {
  const searchParams = useSearchParams()
  const concept = searchParams.get('concept') || 'championship'

  return (
    <div className="bg-[#0c0f0f] text-[#e2e2e2] font-['Manrope'] min-h-screen">
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0c0f0f]/95 backdrop-blur-md">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 w-full max-w-7xl mx-auto h-20">
          <Link href={`/?concept=${concept}`} className="text-xl font-black text-white italic tracking-tighter">
            CHAMPIONSHIP <span className="text-[#cff065]">RECOVERY</span>
          </Link>
          <Link href="/booking/modal" className="bg-[#cff065] text-[#293500] font-bold px-6 py-2 uppercase tracking-widest text-[10px]">
            Book Session
          </Link>
        </div>
      </header>

      <main className="pt-20">
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-24 items-start">
              <div className="flex-1">
                <span className="text-[#cff065] font-bold tracking-[0.4em] uppercase text-[10px] block mb-8">Performance Focus // Pelvic Floor</span>
                <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter text-white mb-12 leading-none">
                  CORE <br/>STABILITY <br/><span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>REDEFINED</span>
                </h1>
                <p className="text-xl opacity-70 mb-12 max-w-xl leading-relaxed">
                  For elite athletes, pelvic floor health is the foundation of the kinetic chain. We optimize internal stability to maximize external power.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
                  <div>
                    <h3 className="text-[#cff065] font-bold uppercase tracking-widest text-xs mb-4">Intra-Abdominal Pressure</h3>
                    <p className="text-sm opacity-50">Precision management of internal force during high-impact load.</p>
                  </div>
                  <div>
                    <h3 className="text-[#cff065] font-bold uppercase tracking-widest text-xs mb-4">Neuromuscular Flow</h3>
                    <p className="text-sm opacity-50">Syncing the diaphragm and pelvic floor for optimal athletic output.</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 aspect-[3/5] bg-[#cff065]/5 border border-[#cff065]/20 p-12 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                   <ConceptScene concept="championship" part="pelvis" type="inline" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-1 bg-[#cff065]"></div>
                  <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">System Status: Scanning</span>
                </div>
                <button className="relative z-10 w-full border border-white/20 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-white/5 transition-all">
                  View Biometrics
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
