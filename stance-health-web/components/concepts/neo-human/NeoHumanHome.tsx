"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ConceptScene } from '../../three/ConceptScene'

export default function NeoHumanHome() {
  const searchParams = useSearchParams()
  const concept = searchParams.get('concept') || 'neo-human'

  return (
    <div className="bg-[#1a1a1a] text-white font-['Montserrat'] min-h-screen">
      <ConceptScene concept="neo-human" type="background" />

      <header className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-black/20 backdrop-blur-md">
        <Link href={`/?concept=${concept}`} className="font-bold text-2xl tracking-tighter">
          STANCE<span className="text-lime">HEALTH</span>
        </Link>
        <div className="flex items-center gap-12">
          <nav className="hidden md:flex gap-8 font-bold text-[10px] uppercase tracking-[0.3em]">
             <Link href={`/womens-health?concept=${concept}`} className="hover:text-lime">Women's Health</Link>
             <Link href="#" className="hover:text-lime">Clinics</Link>
          </nav>
          <Link href="/booking/modal" className="bg-lime text-black px-6 py-2 font-bold uppercase text-xs tracking-widest">
            Book Appointment
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        <section className="h-screen flex items-center px-12 md:px-24 border-b border-white/5">
          <div className="max-w-4xl bg-black/40 backdrop-blur-xl p-12 border border-white/10">
            <span className="text-lime text-sm font-bold tracking-[0.5em] uppercase block mb-8">Evolution of Care</span>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-12 uppercase">
              THE <br/><span className="italic">NEO-HUMAN</span> <br/>EXPERIENCE
            </h1>
            <p className="text-xl opacity-60 max-w-xl mb-12">
              The next generation of physiotherapy. Merging human expertise with advanced biomechanical scanning technology.
            </p>
            <Link href="/booking/modal" className="inline-block border-2 border-lime text-lime px-12 py-4 font-bold uppercase tracking-widest hover:bg-lime hover:text-black transition-all">
              Join the Future
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
