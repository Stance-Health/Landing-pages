export const content = {
  home: {
    title: "Pain → Performance. Physiotherapy that goes further.",
    subtitle: "Stance Health",
    hero: "Science-Backed Recovery for the Modern Athlete.",
    tech: "Powered by VALD Technology — ForceFrame, ForceDecks, RunScribe and more.",
    benefits: [
      {
        title: "Performance × Recovery × Science",
        description: "We don't just treat symptoms; we optimize your entire kinetic chain using data-driven insights from world-class VALD technology."
      },
      {
        title: "Precision Diagnostics",
        description: "Every treatment starts with a comprehensive biomechanical assessment. We see what the human eye misses."
      }
    ],
    sections: [
      { id: 'back', title: 'Back & Spine', link: '/back-spine' },
      { id: 'knee', title: 'Knee Rehab', link: '/knee-pain' },
      { id: 'sports', title: 'Sports Injury', link: '/sports-injury' },
      { id: 'womens', title: 'Women\'s Health', link: '/womens-health' }
    ],
    footer: {
      locations: ["HSR Layout", "Indiranagar", "Whitefield"],
      tagline: "Move better. Perform longer."
    }
  },
  back: {
    title: "Back pain that won't go away? Find what's actually driving it.",
    subtitle: "Back & Spine Performance",
    hero: "Precision Spinal Rehabilitation.",
    tech: "Powered by VALD Technology — ForceFrame, ForceDecks, RunScribe and more.",
    description: "Chronic back pain isn't just a physical burden; it's a performance killer. We analyze biomechanical deficits, breathing mechanics, asymmetries, load tolerance and movement limitations to find the root cause.",
    trust: {
      patients: "5000+",
      centers: "3 Bengaluru centres",
      assessment: "VALD powered assessment"
    },
    cases: {
      total: "450+",
      types: [
        { label: "Back Pain", count: 226 },
        { label: "Sciatica", count: 212 },
        { label: "Disc Bulge", count: 13 }
      ]
    },
    valdMetrics: [
      {
        name: "ForceDecks",
        metrics: ["force asymmetry", "rate of force development", "balance control", "load acceptance", "force production"]
      },
      {
        name: "ForceFrame",
        metrics: ["isometric strength", "trunk contribution", "hip deficits"]
      },
      {
        name: "DynaMo",
        metrics: ["force progression", "rehab tracking"]
      },
      {
        name: "RunScribe",
        metrics: ["impact loading", "running symmetry"]
      },
      {
        name: "Speed Gates",
        metrics: ["return to sport metrics"]
      }
    ],
    painJourney: [
      { step: "Pain", sub: "Initial injury or flare-up" },
      { step: "Rest", sub: "Stopping activity, hoping it heals" },
      { step: "Temporary relief", sub: "Medication or generic physio" },
      { step: "Pain returns", sub: "Frustration as symptoms persist" }
    ],
    hotspots: ["Lower lumbar", "Glutes", "Core", "Hip mobility", "Thoracic spine", "Hamstrings"],
    outcomes: ["Move confidently again", "Build capacity", "Reduce recurrence risk", "Return to performance"],
    seoKeywords: ["back pain treatment Bangalore", "disc bulge rehab Bangalore", "sciatica physiotherapy Bangalore", "spine rehab Bangalore"]
  }
}
