"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Floating3DElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create floating 3D elements
    const elements = container.querySelectorAll(".floating-element")

    elements.forEach((element, index) => {
      // Initial 3D positioning
      gsap.set(element, {
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        z: Math.random() * 200 - 100,
      })

      // Continuous floating animation
      gsap.to(element, {
        rotationX: `+=${360 + Math.random() * 180}`,
        rotationY: `+=${360 + Math.random() * 180}`,
        rotationZ: `+=${180 + Math.random() * 90}`,
        y: `+=${Math.sin(index) * 50}`,
        x: `+=${Math.cos(index) * 30}`,
        duration: 10 + Math.random() * 10,
        ease: "none",
        repeat: -1,
        yoyo: true,
      })

      // Scroll-triggered depth animation
      ScrollTrigger.create({
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.set(element, {
            z: progress * 300 - 150,
            scale: 0.8 + progress * 0.4,
          })
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="floating-element absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg backdrop-blur-sm border border-primary/10"></div>
      <div className="floating-element absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full backdrop-blur-sm border border-accent/10"></div>
      <div className="floating-element absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl backdrop-blur-sm border border-secondary/10"></div>
      <div className="floating-element absolute bottom-1/4 right-1/3 w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg backdrop-blur-sm border border-primary/10"></div>
      <div className="floating-element absolute top-1/2 left-1/6 w-10 h-10 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full backdrop-blur-sm border border-accent/10"></div>
      <div className="floating-element absolute top-2/3 right-1/6 w-18 h-18 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl backdrop-blur-sm border border-secondary/10"></div>
    </div>
  )
}
