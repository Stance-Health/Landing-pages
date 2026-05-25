"use client"
import React from 'react'

export function ConceptComponentWrapper({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`concept-wrapper ${className}`}>
      {children}
    </div>
  )
}
