"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ConceptScene } from '../../three/ConceptScene'

export default function ChampionshipHome() {
  const searchParams = useSearchParams()
  const concept = searchParams.get('concept') || 'championship'

  return (
    <div className="bg-[#121414] text-[#e2e2e2] font-['Manrope'] min-h-screen">
      <ConceptScene concept="championship" type="background" />

      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#121414]/95 backdrop-blur-md">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 w-full max-w-7xl mx-auto h-20">
          <div className="flex items-center gap-8">
            <Link href={`/?concept=${concept}`} className="text-2xl font-black text-white italic tracking-tighter hover:text-[#cff065] transition-colors">
              CHAMPIONSHIP RECOVERY
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-10 font-bold text-xs uppercase tracking-widest">
            <Link href={`/womens-health?concept=${concept}`} className="hover:text-[#cff065]">Women's Health</Link>
            <Link href="#" className="hover:text-[#cff065]">Clinics</Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/booking/modal" className="bg-[#cff065] text-[#293500] font-bold px-6 py-3 uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
              JOIN THE CAMP
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 bg-[#cff065]/10 text-[#cff065] border border-[#cff065]/20 font-bold tracking-widest uppercase text-sm mb-6">
                Elite Performance Protocol
              </span>
              <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white mb-8 leading-[0.9]">
                WHERE <span className="text-[#cff065]">SCIENCE</span> MEETS THE <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>STADIUM</span>
              </h1>
              <p className="text-xl text-[#cff065]/80 max-w-2xl mb-12 font-medium">
                Professional-grade recovery for athletes who demand the absolute peak of their biological potential. Data-driven, elite-led.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/booking/modal" className="bg-[#cff065] text-[#293500] font-bold px-10 py-5 uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(207,240,101,0.3)]">
                  Book an Appointment
                </Link>
                <button className="border border-white/20 text-white font-bold px-10 py-5 uppercase tracking-widest hover:bg-white/5 transition-all">
                  Our Technology
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black/60 backdrop-blur-xl py-24 border-y border-white/5">
           <div className="max-w-7xl mx-auto px-6 md:px-12">
             <div className="grid md:grid-cols-2 gap-16 items-center">
               <div>
                 <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white mb-8">
                   POWERED BY <br/><span className="text-[#cff065]">VALD TECHNOLOGY</span>
                 </h2>
                 <p className="text-lg opacity-70 mb-10 leading-relaxed">
                   We use the same equipment used by the NBA, Premier League, and Olympic teams. ForceDecks, ForceFrame, and RunScribe provide us with the data needed to optimize every millimeter of your movement.
                 </p>
               </div>
               <div className="aspect-square bg-gradient-to-br from-[#cff065]/10 to-transparent border border-white/10 relative overflow-hidden group">
                  <ConceptScene concept="championship" type="inline" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                     <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#cff065]">Biomechanical Feedback Stream // Active</span>
                  </div>
               </div>
             </div>
           </div>
        </section>
      </main>
    </div>
  )
}
