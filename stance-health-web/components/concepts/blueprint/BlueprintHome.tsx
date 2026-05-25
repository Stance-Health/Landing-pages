"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ConceptScene } from '../../three/ConceptScene'

export default function BlueprintHome() {
  const searchParams = useSearchParams()
  const concept = searchParams.get('concept') || 'blueprint'

  return (
    <div className="bg-[#fbf9ed] text-[#132644] font-['Montserrat'] min-h-screen">
      <header className="fixed top-0 w-full z-50 border-b border-[#132644]/10 bg-[#fbf9ed]/95 backdrop-blur-md">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <Link href={`/?concept=${concept}`} className="text-xl font-bold tracking-[0.2em] text-[#132644]">
              THE BLUEPRINT
            </Link>
          </div>
          <nav className="hidden md:flex gap-12 text-sm font-bold tracking-widest uppercase">
            <Link href={`/womens-health?concept=${concept}`} className="hover:text-[#fe7833]">Pelvic Floor</Link>
            <a href="#" className="hover:text-[#fe7833]">Methodology</a>
            <a href="#" className="hover:text-[#fe7833]">Clinics</a>
          </nav>
          <Link href="/booking/modal" className="border-2 border-[#132644] text-[#132644] font-bold px-6 py-2 uppercase tracking-widest hover:bg-[#132644] hover:text-white transition-all">
            BOOK NOW
          </Link>
        </div>
      </header>

      <main className="pt-20">
        <section className="min-h-screen flex items-center px-6 md:px-12">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-24 items-center">
            <div>
              <div className="w-12 h-1 bg-[#fe7833] mb-12"></div>
              <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-[0.8] mb-12 text-[#132644]">
                REBUILDING <br/><span className="text-[#fe7833]">HUMAN</span> <br/>STRUCTURE
              </h1>
              <p className="text-xl leading-relaxed opacity-80 mb-12 max-w-lg">
                The Blueprint is our precise methodology for structural correction and performance optimization. We don't just treat pain; we redesign how you move.
              </p>
              <Link href="/booking/modal" className="inline-block bg-[#132644] text-white font-bold px-12 py-6 uppercase tracking-widest hover:bg-[#fe7833] transition-all">
                Schedule Assessment
              </Link>
            </div>
            <div className="aspect-[3/4] border-2 border-[#132644]/5 relative bg-white/50 backdrop-blur-sm overflow-hidden">
               <ConceptScene concept="blueprint" type="inline" />
               <div className="absolute top-0 left-0 w-full p-8 border-b border-[#132644]/5">
                 <span className="text-[10px] uppercase tracking-[0.4em] opacity-40">Structural Scan // Active</span>
               </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
