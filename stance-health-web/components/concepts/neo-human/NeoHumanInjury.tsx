"use client"
import React from 'react'
import Link from 'next/link'

export default function NeoHumanInjury() {
  return (
    <div className="bg-[#1a1a1a] text-white font-['Montserrat']">
      <main className="pt-24 px-12 md:px-24">
        <div className="max-w-4xl">
          <Link href="/" className="text-lime font-bold uppercase tracking-widest text-xs mb-12 inline-block">← Back to Overview</Link>
          <h1 className="text-7xl font-bold uppercase tracking-tighter mb-8">INJURY <br/><span className="text-lime italic">PROTOCOL</span></h1>
          <div className="h-1 w-24 bg-lime mb-12"></div>
          <p className="text-2xl opacity-60 mb-24 max-w-2xl">
            Custom-built recovery pathways powered by VALD technology. Your data determines your path.
          </p>

          <div className="grid gap-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="group border border-white/10 p-8 hover:border-lime transition-colors">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold uppercase tracking-tight">Phase 0{i}: Stability & Control</h3>
                  <span className="text-lime font-black opacity-20 group-hover:opacity-100 transition-opacity">0{i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
