"use client"
import React from 'react'
import { Navigation } from './ui/Navigation'
import { CTAButton } from './ui/CTAButton'
import Scene from './three/Scene'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ConceptLayout({
  content,
  concept = 1,
  pageType = 'home'
}: {
  content: any,
  concept?: number,
  pageType?: 'home' | 'injury'
}) {
  const isDark = concept === 2 || concept === 4;
  const { scrollYProgress } = useScroll();

  // Concept-specific style overrides
  const getBackground = () => {
    if (concept === 2) return 'bg-navy';
    if (concept === 4) return 'bg-[#0a1128]'; // Deep navy for neural flow
    if (concept === 5) return 'bg-[#fbf9ed]';
    return 'bg-off-white';
  }

  const getTextColor = () => {
    if (isDark) return 'text-off-white';
    return 'text-navy';
  }

  return (
    <main className={`relative min-h-[400vh] ${getBackground()} ${getTextColor()} transition-colors duration-1000`}>
      <Navigation type={pageType === 'home' ? 'top' : 'sidebar'} />

      {/* 3D Scene Background */}
      <Scene concept={concept} part={content.id || 'body'} />

      {/* Concept 1: The Kinetic Lab - Grid Overlay */}
      {concept === 1 && (
        <div className="fixed inset-0 pointer-events-none border-[0.5px] border-navy/10 grid grid-cols-12 grid-rows-12 opacity-40">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-navy/10" />
          ))}
        </div>
      )}

      {/* Concept 2: Elite Performance - Scanline Effect */}
      {concept === 2 && (
        <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden opacity-20">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-full h-1 bg-lime blur-sm shadow-[0_0_20px_#ddfe71]"
          />
        </div>
      )}

      {/* Concept 3: The Blueprint - Architectural Guides */}
      {concept === 3 && (
        <div className="fixed inset-0 pointer-events-none p-8 flex flex-col justify-between text-[10px] font-unbounded opacity-30">
          <div className="flex justify-between uppercase">
            <span>Lat: 12.9716° N</span>
            <span>Lon: 77.5946° E</span>
          </div>
          <div className="flex justify-between uppercase">
            <span>Scale: 1:1.0</span>
            <span>System: VALD_FORCE</span>
          </div>
        </div>
      )}

      {/* Content Content Content */}
      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="h-screen flex flex-col justify-center px-12 md:px-24">
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-12 bg-lime" />
              <p className="font-unbounded text-lime text-sm uppercase tracking-widest">
                {content.subtitle}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`text-6xl md:text-[12rem] font-unbounded leading-[0.8] mb-12 tracking-tighter ${concept === 2 ? 'text-lime italic' : ''}`}
            >
              {content.title.split(' ').map((word: string, i: number) => (
                <span key={i} className="block">{word}</span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <CTAButton />
            </motion.div>
          </div>
        </section>

        {/* DATA / SCIENCE SECTION */}
        <section className="h-screen flex items-center justify-end px-12 md:px-24 relative overflow-hidden">
          {concept === 4 && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-lime/5" />
          )}
          <div className="max-w-2xl relative z-10">
            <h2 className={`text-4xl font-unbounded mb-8 ${isDark ? 'text-lime' : 'text-navy'}`}>
              Performance × Science
            </h2>
            <p className="text-2xl leading-tight mb-12 font-light opacity-80">
              {content.description || content.hero}
            </p>
            <div className={`p-12 border ${isDark ? 'border-lime/30' : 'border-navy/30'} sharp-border backdrop-blur-xl bg-white/5`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 bg-lime flex items-center justify-center">
                  <div className="w-4 h-1 bg-navy" />
                </div>
                <p className="font-unbounded text-xs uppercase tracking-widest text-lime">Technology Stack</p>
              </div>
              <p className="text-xl font-unbounded leading-none italic">{content.tech}</p>
            </div>
          </div>
        </section>

        {/* INJURY TRANSITION / FIX SECTION */}
        <section className="h-screen flex flex-col justify-center px-12 md:px-24 bg-lime text-navy">
           <motion.h2
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             className="text-7xl md:text-[15rem] font-unbounded leading-none tracking-tighter text-center uppercase"
           >
             The Fix.
           </motion.h2>
           <p className="text-center font-unbounded text-sm mt-8 tracking-[1em] uppercase opacity-50">Scrolling to Recovery</p>
        </section>

        {/* BENEFITS SECTION */}
        <section className="h-screen flex items-center px-12 md:px-24">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-5xl font-unbounded mb-16 leading-none">Engineered for Your Success</h2>
              <div className="space-y-12">
                {(content.benefits || []).map((benefit: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="text-4xl font-unbounded text-lime">0{i+1}</span>
                      <h3 className="text-2xl font-unbounded uppercase">{typeof benefit === 'string' ? benefit : benefit.title}</h3>
                    </div>
                    {benefit.description && (
                      <p className="pl-12 opacity-60 text-lg leading-relaxed">
                        {benefit.description}
                      </p>
                    )}
                    <div className="mt-6 h-[1px] w-full bg-current opacity-10 group-hover:bg-lime group-hover:opacity-100 transition-all duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>
            {concept === 5 && (
              <div className="aspect-[3/4] bg-navy/5 border border-navy/10 sharp-border p-12 flex flex-col justify-end">
                <p className="font-unbounded text-6xl leading-[0.8] opacity-10 uppercase">Recovery<br/>Is<br/>Science</p>
              </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-near-black text-off-white px-12 md:px-24 py-32">
          <div className="flex flex-col md:flex-row justify-between gap-24">
            <div className="flex-1">
              <p className="font-unbounded text-lime text-sm mb-12 tracking-widest uppercase">Visit Us</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['HSR Layout', 'Indiranagar', 'Whitefield'].map(loc => (
                  <div key={loc} className="p-8 border border-white/10 group hover:border-lime transition-colors">
                    <h4 className="font-unbounded text-xl mb-4">{loc}</h4>
                    <p className="text-xs uppercase opacity-40">Bangalore, KA</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start md:items-end justify-between">
              <p className="text-right font-unbounded text-5xl md:text-8xl leading-none tracking-tighter mb-12">STANCE HEALTH</p>
              <CTAButton label="Book Your Assessment" />
            </div>
          </div>
          <div className="mt-32 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.5em] opacity-40 gap-8">
            <p>© 2024 Stance Health. All Rights Reserved.</p>
            <p>Designed for Performance</p>
            <div className="flex gap-4">
              <span>Insta</span>
              <span>Linkd</span>
              <span>Twtr</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
