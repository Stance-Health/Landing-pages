"use client"
import React from 'react'

export default function BookingModalPage() {
  return (
    <div className="min-h-screen bg-black/90 flex items-center justify-center p-6">
      <div className="bg-[#121414] border border-white/10 max-w-4xl w-full p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-lime blur-[80px] opacity-20"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white mb-4 uppercase">
            SECURE YOUR <span className="text-lime">SLOT</span>
          </h1>
          <p className="text-white/60 mb-12 uppercase tracking-widest text-xs font-bold">Bangalore Clinics: HSR • Indiranagar • Whitefield</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="p-6 border border-white/10 hover:border-lime transition-colors cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-lime">Initial Assessment</h3>
                <p className="text-sm opacity-60">Full body biomechanical scan + consultation (60 mins)</p>
              </div>
              <div className="p-6 border border-white/10 hover:border-lime transition-colors cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-lime">Performance Session</h3>
                <p className="text-sm opacity-60">Data-driven recovery & strength optimization (45 mins)</p>
              </div>
            </div>

            <div className="bg-white/5 p-8 border border-white/5">
               <p className="text-center opacity-40 mb-8 italic text-sm">Select a date and time to continue</p>
               <div className="grid grid-cols-7 gap-2 mb-8">
                 {[...Array(31)].map((_, i) => (
                   <div key={i} className="aspect-square flex items-center justify-center text-[10px] border border-white/5 opacity-40 hover:opacity-100 hover:bg-lime hover:text-black cursor-pointer">
                     {i+1}
                   </div>
                 ))}
               </div>
               <button className="w-full bg-lime text-black font-bold py-4 uppercase tracking-widest text-xs">
                 Confirm Appointment
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
