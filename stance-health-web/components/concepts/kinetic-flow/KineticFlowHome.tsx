"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ConceptScene } from '../../three/ConceptScene'

export default function KineticFlowHome() {
  const searchParams = useSearchParams()
  const concept = searchParams.get('concept') || 'kinetic-flow'

  return (
    <div className="bg-[#f0f0f0] text-[#132644] font-['Montserrat'] min-h-screen">
      <ConceptScene concept="kinetic-flow" type="background" />

      <header className="p-8 flex justify-between items-center relative z-20">
        <Link href={`/?concept=${concept}`} className="text-3xl font-black italic tracking-tighter text-[#132644]">
          KINETIC<span className="text-[#addcec]">FLOW</span>
        </Link>
        <div className="flex items-center gap-12">
          <nav className="hidden lg:flex gap-12 font-bold text-xs uppercase tracking-[0.3em] opacity-40">
            <Link href={`/womens-health?concept=${concept}`} className="hover:text-[#addcec]">Women's Health</Link>
            <a href="#">Science</a>
            <a href="#">Clinics</a>
          </nav>
          <Link href="/booking/modal" className="bg-[#132644] text-white px-12 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#addcec] hover:text-[#132644] transition-all">
            Get Started
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        <section className="min-h-screen flex items-center px-12 md:px-24">
          <div className="max-w-4xl bg-white/20 backdrop-blur-sm p-12 rounded-[40px]">
            <h1 className="text-8xl md:text-[14rem] font-black italic tracking-tighter leading-[0.75] mb-12 text-[#132644]">
              FLUID <br/>MOTION
            </h1>
            <p className="text-3xl font-light leading-tight text-[#132644]/60 max-w-2xl mb-16">
              Recovery isn't just about stopping the pain. It's about restoring the natural, effortless flow of your kinetic chain.
            </p>
            <div className="flex items-center gap-8">
               <Link href="/booking/modal" className="group flex items-center gap-4">
                 <div className="w-20 h-20 rounded-full border-2 border-[#132644] flex items-center justify-center group-hover:bg-[#132644] transition-all">
                   <span className="text-2xl group-hover:text-white">→</span>
                 </div>
                 <span className="font-bold uppercase tracking-widest text-sm">Book Your Session</span>
               </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
