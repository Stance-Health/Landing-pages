"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ConceptScene } from '../../three/ConceptScene'

export default function BioScannerHome() {
  const searchParams = useSearchParams()
  const concept = searchParams.get('concept') || 'bio-scanner'

  return (
    <div className="bg-[#050505] text-[#ececec] font-['Unbounded'] selection:bg-lime selection:text-black min-h-[300vh]">
      <ConceptScene concept="bio-scanner" type="background" />

      <header className="fixed top-0 w-full z-50 p-6">
        <div className="flex justify-between items-center border border-white/10 bg-black/50 backdrop-blur-xl p-4 md:px-12">
          <Link href={`/?concept=${concept}`} className="text-lime text-xl font-bold tracking-tighter">
            BIO-SCANNER <span className="opacity-40">v2.1</span>
          </Link>
          <div className="flex gap-4 items-center">
             <nav className="hidden md:flex gap-8 font-bold text-[10px] uppercase tracking-widest mr-8">
                <Link href={`/womens-health?concept=${concept}`} className="hover:text-lime">Women's Health</Link>
                <a href="#" className="hover:text-lime">Clinic_Locator</a>
             </nav>
             <Link href="/booking/modal" className="bg-lime text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform">
               Start Analysis
             </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="text-center relative z-10 px-6">
            <h1 className="text-5xl md:text-[12rem] font-bold tracking-tighter leading-none mb-12 uppercase mix-blend-difference">
              The <span className="text-lime">Machine</span> Inside
            </h1>
            <div className="max-w-xl mx-auto border-l-2 border-lime pl-12 text-left bg-black/40 backdrop-blur-md py-8">
              <p className="text-xl opacity-60 mb-8 leading-relaxed">
                Objective biomechanical data. No guesswork. We visualize your movement deficiencies in 4D to build a roadmap to superior performance.
              </p>
              <span className="text-xs tracking-[0.5em] uppercase text-lime block">Powered by VALD Tech</span>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center px-12 md:px-24">
           <div className="grid md:grid-cols-2 gap-24 w-full">
             <div className="bg-white/5 border border-white/10 p-12 backdrop-blur-xl">
               <h2 className="text-4xl font-bold uppercase mb-8">Force Analysis</h2>
               <p className="opacity-50 mb-12 uppercase tracking-widest text-xs leading-loose">
                 We measure symmetrical force distribution during landing and explosive phases using ForceDecks technology.
               </p>
               <div className="w-full h-[1px] bg-lime/20 mb-8"></div>
               <span className="text-lime font-bold">VALD_SYSTEM_CONNECTED</span>
             </div>
           </div>
        </section>
      </main>
    </div>
  )
}
