"use client"
import React, { useRef } from 'react'
import { Navigation } from './ui/Navigation'
import { CTAButton } from './ui/CTAButton'
import Scene from './three/Scene'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'

export default function BackSpineLayout({
  content,
  concept = 3
}: {
  content: any,
  concept?: number
}) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const galleryX = useTransform(smoothProgress, [0.6, 0.8], ["0%", "-60%"])

  return (
    <main ref={containerRef} className="relative min-h-[800vh] bg-off-white text-navy selection:bg-lime selection:text-navy">
      <Navigation type="sidebar" />
      <Scene concept={concept} part="back" />

      {concept === 3 && (
        <div className="fixed inset-0 pointer-events-none p-8 flex flex-col justify-between text-[10px] font-unbounded opacity-30 z-20">
          <div className="flex justify-between uppercase">
            <span>Lat: 12.9716° N</span>
            <span>Lon: 77.5946° E</span>
          </div>
          <div className="flex justify-between uppercase text-lime">
            <span>System: VALD_SPINE_ASSESS</span>
            <span>Status: ANALYZING_LOAD</span>
          </div>
        </div>
      )}

      <div className="relative z-10">
        <section className="h-screen flex flex-col justify-center px-12 md:px-24">
          <div className="max-w-6xl">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-lime" />
              <p className="font-unbounded text-lime text-sm uppercase tracking-widest">{content.subtitle}</p>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-[8rem] font-unbounded leading-[0.9] mb-12 tracking-tighter uppercase">
              {content.title}
            </motion.h1>
            <div className="flex flex-wrap gap-12 mb-12">
               {Object.entries(content.trust || {}).map(([key, value]: [string, any]) => (
                 <div key={key} className="border-l-4 border-lime pl-6">
                   <p className="text-4xl font-unbounded">{value}</p>
                   <p className="text-xs uppercase opacity-50 font-unbounded tracking-[0.2em]">{key}</p>
                 </div>
               ))}
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <CTAButton />
            </motion.div>
          </div>
        </section>

        <section className="h-screen flex items-center px-12 md:px-24 bg-navy text-off-white">
           <div className="grid md:grid-cols-2 gap-24 w-full items-center">
              <div className="space-y-8">
                 <h2 className="text-7xl font-unbounded leading-none text-lime uppercase tracking-tighter">
                   {content.cases.total}<br/>Spine Cases
                 </h2>
                 <p className="text-2xl font-light opacity-70 max-w-md">Our data-driven approach has successfully managed complex spinal conditions through objective measurement.</p>
              </div>
              <div className="space-y-6">
                 {content.cases.types.map((c: any) => (
                   <div key={c.label} className="flex justify-between items-end border-b border-white/10 pb-6 group hover:border-lime transition-colors">
                      <span className="text-3xl font-unbounded uppercase group-hover:text-lime transition-colors">{c.label}</span>
                      <span className="text-6xl font-unbounded text-lime">{c.count}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <section className="h-[200vh] relative">
           <div className="sticky top-0 h-screen flex flex-col justify-center px-12 md:px-24 overflow-hidden">
              <h2 className="text-2xl font-unbounded mb-24 opacity-30 uppercase tracking-[0.5em]">The Pain Journey</h2>
              <div className="relative h-[200px]">
                 {content.painJourney.map((step: any, i: number) => (
                    <JourneyStep key={i} step={step} index={i} progress={smoothProgress} />
                 ))}
              </div>
           </div>
        </section>

        <section className="min-h-screen py-48 px-12 md:px-24 bg-near-black text-off-white relative">
           <div className="mb-24 max-w-4xl">
              <p className="font-unbounded text-lime mb-4 tracking-widest uppercase">Precision Diagnostics</p>
              <h2 className="text-7xl font-unbounded leading-none uppercase tracking-tighter">Objective Data Over<br/>Symptom Management</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-1px bg-white/10 border border-white/10">
              {content.valdMetrics.map((tech: any, i: number) => (
                <div key={tech.name} className="p-12 bg-near-black hover:bg-white/5 transition-colors">
                   <h3 className="text-2xl font-unbounded text-lime mb-8 uppercase italic tracking-tighter">{tech.name}</h3>
                   <ul className="space-y-6">
                      {tech.metrics.map((m: string) => (
                        <li key={m} className="flex items-start gap-4 opacity-70 group cursor-default">
                           <div className="w-2 h-2 bg-lime mt-1.5 flex-shrink-0" />
                           <span className="text-sm uppercase font-unbounded tracking-widest group-hover:text-lime transition-colors">{m}</span>
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
        </section>

        <section className="h-[250vh] relative bg-off-white">
           <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
              <div className="px-12 md:px-24 mb-12">
                 <h2 className="text-5xl font-unbounded uppercase tracking-tighter">Inside the Lab</h2>
              </div>
              <motion.div style={{ x: galleryX }} className="flex gap-12 px-12 md:px-24">
                 {["physio with patient.png", "forceframe.jpg", "reformer.jpg", "football pitch.jpg", "new stance sanket.png"].map((img, i) => (
                   <div key={i} className="flex-shrink-0 w-[500px] h-[600px] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                      <Image src={`/images/${img}`} alt={img} fill className="object-cover scale-110 hover:scale-100 transition-transform duration-1000" />
                   </div>
                 ))}
              </motion.div>
           </div>
        </section>

        <section className="h-screen flex flex-col justify-center px-12 md:px-24 bg-lime text-navy">
           <div className="max-w-6xl">
              <h2 className="text-8xl md:text-[12rem] font-unbounded mb-16 leading-[0.8] tracking-tighter uppercase">Return to<br/>Performance.</h2>
              <div className="grid md:grid-cols-2 gap-12">
                 {content.outcomes.map((outcome: string) => (
                   <div key={outcome} className="flex items-center gap-6 border-b-2 border-navy/10 pb-6 group hover:border-navy transition-colors">
                      <div className="w-6 h-6 bg-navy flex-shrink-0" />
                      <span className="text-3xl font-unbounded uppercase tracking-tighter">{outcome}</span>
                   </div>
                 ))}
              </div>
              <div className="mt-24"><CTAButton invert label="Book Your Recovery" /></div>
           </div>
        </section>
      </div>
    </main>
  )
}

function JourneyStep({ step, index, progress }: { step: any, index: number, progress: any }) {
  const start = 0.35 + (index * 0.05)
  const end = start + 0.05
  const opacity = useTransform(progress, [start - 0.02, start, end, end + 0.02], [0, 1, 1, 0])
  const y = useTransform(progress, [start - 0.02, start, end, end + 0.02], [100, 0, 0, -100])

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <div className="flex items-center gap-4 mb-4">
         <span className="text-lime font-unbounded text-xl">0{index + 1}</span>
         <div className="h-px flex-1 bg-lime/30" />
      </div>
      <h3 className="text-7xl font-unbounded uppercase mb-4 tracking-tighter italic">{step.step}</h3>
      <p className="text-3xl font-light opacity-60 uppercase tracking-widest">{step.sub}</p>
    </motion.div>
  )
}
