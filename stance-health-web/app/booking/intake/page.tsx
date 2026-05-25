"use client"
import React from 'react'

export default function BookingIntakePage() {
  return (
    <div className="min-h-screen bg-[#fbf9ed] text-[#132644] p-12 md:p-24 font-['Montserrat']">
      <div className="max-w-3xl mx-auto">
        <span className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-40 block mb-8">Step 02 // Intake</span>
        <h1 className="text-6xl font-bold tracking-tighter mb-12">TELL US ABOUT <br/><span className="text-[#fe7833]">YOUR GOALS</span></h1>

        <form className="space-y-12">
          <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest opacity-60">Full Name</label>
            <input type="text" className="w-full bg-transparent border-b-2 border-[#132644] py-4 text-2xl focus:outline-none focus:border-[#fe7833]" placeholder="Enter your name" />
          </div>

          <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest opacity-60">Primary Concern</label>
            <div className="flex flex-wrap gap-4">
              {['Back & Spine', 'Sports Injury', 'Knee Pain', 'Performance'].map(tag => (
                <button key={tag} type="button" className="px-6 py-2 border-2 border-[#132644] font-bold text-xs uppercase tracking-widest hover:bg-[#132644] hover:text-white transition-all">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-12">
            <button className="bg-[#132644] text-white px-12 py-6 font-bold uppercase tracking-widest hover:bg-[#fe7833] transition-all">
              Next Step →
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
