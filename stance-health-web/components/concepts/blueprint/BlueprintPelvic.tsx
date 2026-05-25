"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ConceptScene } from '../../three/ConceptScene'

export default function BlueprintPelvic() {
  const searchParams = useSearchParams()
  const concept = searchParams.get('concept') || 'blueprint'

  return (
    <div className="bg-[#fbf9ed] text-[#132644] font-['Montserrat'] min-h-screen">
      <header className="fixed top-0 w-full z-50 p-8 flex justify-between items-center">
         <Link href={`/?concept=${concept}`} className="font-bold tracking-[0.3em] text-xs uppercase">The Blueprint // Structural</Link>
         <Link href="/booking/modal" className="border-2 border-[#132644] px-8 py-2 font-bold text-xs uppercase tracking-widest">
           Book
         </Link>
      </header>

      <main className="pt-32 px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32">
          <div>
            <h1 className="text-7xl font-bold tracking-tighter leading-none mb-12">PELVIC <br/>INTEGRATION</h1>
            <p className="text-xl opacity-80 leading-relaxed mb-12">
              Our pelvic health protocol focuses on the structural alignment of the pelvic girdle as the central hub of all human movement.
            </p>
            <div className="space-y-8">
              {['Postural Correction', 'Force Distribution', 'Lumbopelvic Rhythm'].map(t => (
                <div key={t} className="flex items-center gap-6 group cursor-default">
                  <div className="w-8 h-[2px] bg-[#132644] group-hover:w-12 transition-all"></div>
                  <span className="font-bold uppercase tracking-widest text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border-2 border-[#132644]/5 p-12 relative overflow-hidden h-[600px]">
            <div className="absolute inset-0">
               <ConceptScene concept="blueprint" part="pelvis" type="inline" />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-widest opacity-30 block mb-12">Anatomical Blueprint // 004</span>
            </div>
            <div className="absolute bottom-12 left-12 right-12 z-10">
               <p className="text-xs opacity-50 uppercase tracking-widest leading-loose bg-white/80 backdrop-blur-sm p-4">
                 Precise analysis of the pubococcygeus and iliococcygeus muscle groups through VALD technology.
               </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
