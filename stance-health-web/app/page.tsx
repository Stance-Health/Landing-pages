"use client"
import React from 'react'
import { Navigation } from '../components/ui/Navigation'
import { CTAButton } from '../components/ui/CTAButton'
import Scene from '../components/three/Scene'
import { motion } from 'framer-motion'
import { content } from './content'
import Link from 'next/link'

export default function Home({ searchParams }: { searchParams: { concept?: string } }) {
  const concept = parseInt(searchParams?.concept || '5')
  const isDark = concept === 2 || concept === 4;

  return (
    <main className={`relative min-h-[600vh] ${isDark ? 'bg-navy text-off-white' : 'bg-off-white text-navy'}`}>
      <Navigation type="top" />
      <Scene concept={concept} part="body" />

      <div className="relative z-10">
        {/* HERO */}
        <section className="h-screen flex flex-col justify-center px-12 md:px-24">
          <p className="font-unbounded text-lime text-sm mb-4 uppercase tracking-widest">{content.home.subtitle}</p>
          <h1 className="text-6xl md:text-9xl font-unbounded leading-none tracking-tighter mb-8 italic">
            {content.home.title}
          </h1>
          <CTAButton label="Book an Appointment" />
        </section>

        {/* 2 SECTIONS BELOW HERO */}
        <section className="min-h-screen flex flex-col justify-center px-12 md:px-24 bg-navy text-off-white">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-unbounded mb-12 text-lime">{content.home.benefits[0].title}</h2>
            <p className="text-3xl leading-tight opacity-80 mb-24">{content.home.benefits[0].description}</p>

            <h2 className="text-4xl font-unbounded mb-12 text-lime">{content.home.benefits[1].title}</h2>
            <p className="text-3xl leading-tight opacity-80">{content.home.benefits[1].description}</p>
          </div>
        </section>

        {/* INJURY SECTIONS */}
        {content.home.sections.map((section, i) => (
          <section key={section.id} className="h-screen flex items-center px-12 md:px-24 border-b border-navy/5">
            <div className="flex flex-col items-start">
              <span className="text-lime font-unbounded text-6xl mb-4">0{i+1}</span>
              <h2 className="text-7xl md:text-[10rem] font-unbounded leading-none tracking-tighter mb-8 uppercase">
                {section.title}
              </h2>
              <Link href={section.link} className="text-xl font-unbounded border-b-2 border-lime pb-2 hover:text-lime transition-colors">
                Explore Recovery →
              </Link>
            </div>
          </section>
        ))}

        {/* FOOTER */}
        <footer className="bg-near-black text-off-white p-12 md:p-24">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h2 className="text-lime text-2xl font-unbounded mb-8">Our Bangalore Clinics</h2>
              <ul className="space-y-4">
                {content.home.footer.locations.map(loc => (
                  <li key={loc} className="text-3xl font-unbounded uppercase opacity-60 hover:opacity-100 cursor-default transition-opacity">
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start justify-end">
              <p className="text-xl mb-8 italic opacity-60">{content.home.footer.tagline}</p>
              <CTAButton label="Book an Appointment" />
            </div>
          </div>
          <div className="mt-24 pt-8 border-t border-white/10 text-[10px] uppercase tracking-[0.5em] opacity-40">
            STANCE HEALTH • PERFORMANCE × RECOVERY × SCIENCE
          </div>
        </footer>
      </div>
    </main>
  )
}
