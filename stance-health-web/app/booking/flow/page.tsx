"use client"
import React from 'react'

export default function BookingFlowPage() {
  return (
    <div className="min-h-screen bg-black text-white font-['Unbounded'] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-lime/20">
        <div className="w-[66%] h-full bg-lime shadow-[0_0_10px_#ddfe71]"></div>
      </div>

      <div className="h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <span className="text-lime text-xs font-bold tracking-[0.8em] uppercase mb-12 block">Processing Biometrics</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16 uppercase">CALIBRATING YOUR <br/><span className="italic">PROTOCOL</span></h2>

          <div className="flex justify-center gap-2 mb-24">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`w-12 h-1 ${i < 3 ? 'bg-lime' : 'bg-white/10'}`}></div>
            ))}
          </div>

          <p className="text-white/40 text-xs tracking-widest uppercase mb-12 max-w-sm mx-auto">
            Our AI is analyzing your intake data against 50,000+ movement profiles...
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-white text-black px-12 py-4 font-bold uppercase text-xs tracking-widest hover:bg-lime transition-colors">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
