"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ConceptScene } from '../../three/ConceptScene'

export default function NeoHumanWomens() {
  const searchParams = useSearchParams()
  const concept = searchParams.get('concept') || 'neo-human'

  return (
    <div className="bg-[#1a1a1a] text-white font-['Montserrat'] min-h-screen">
      <ConceptScene concept="neo-human" part="pelvis" type="background" />

      <header className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-black/20 backdrop-blur-md">
        <Link href={`/?concept=${concept}`} className="font-bold text-2xl tracking-tighter">
          STANCE<span className="text-lime">HEALTH</span>
        </Link>
        <Link href="/booking/modal" className="bg-lime text-black px-6 py-2 font-bold uppercase text-xs tracking-widest">
          Book Appointment
        </Link>
      </header>

      <main className="relative z-10 pt-24 px-12 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-24">
            <div className="flex-1">
              <div className="bg-black/60 backdrop-blur-xl p-12 border border-white/10">
                <span className="text-lime font-bold uppercase tracking-[0.4em] text-xs mb-8 block">Clinical Focus // Women's Health</span>
                <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-12">PELVIC FLOOR <br/><span className="italic text-lime">MASTERY</span></h1>
                <p className="text-xl opacity-60 max-w-xl mb-12">
                  Advanced diagnostic scanning for pelvic health. We use objective data to create precise, non-invasive recovery protocols.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
                  <div>
                     <h3 className="text-lime font-bold uppercase tracking-widest text-sm mb-4">Precision Diagnostics</h3>
                     <p className="opacity-40 text-sm">Real-time feedback on muscle recruitment and coordination.</p>
                  </div>
                  <div>
                     <h3 className="text-lime font-bold uppercase tracking-widest text-sm mb-4">Integrative Care</h3>
                     <p className="opacity-40 text-sm">Seamlessly merging biomechanics with specialized pelvic therapy.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-80 aspect-[2/3] bg-white/5 border border-white/10 overflow-hidden">
               <ConceptScene concept="neo-human" part="pelvis" type="inline" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
