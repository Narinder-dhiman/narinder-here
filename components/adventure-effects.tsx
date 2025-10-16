"use client"

import { useEffect } from "react"
import { gsap } from "gsap"

export default function AdventureEffects() {
  useEffect(() => {
    const createFloatingElements = () => {
      const container = document.querySelector(".adventure-container")
      if (!container) return

      // Create floating code symbols
      const symbols = ["{ }", "< />", "( )", "[ ]", "=>", "&&", "||", "++"]

      symbols.forEach((symbol, index) => {
        const element = document.createElement("div")
        element.className = "floating-symbol absolute text-emerald-400/20 font-mono text-sm pointer-events-none"
        element.textContent = symbol
        element.style.left = `${Math.random() * 100}%`
        element.style.top = `${Math.random() * 100}%`

        container.appendChild(element)

        gsap.to(element, {
          y: -100,
          x: Math.random() * 100 - 50,
          rotation: Math.random() * 360,
          opacity: 0,
          duration: 8 + Math.random() * 4,
          delay: index * 0.5,
          repeat: -1,
          ease: "power1.out",
        })
      })
    }

    // Create particle burst effect on scroll
    const createParticleBurst = (x: number, y: number) => {
      const particles = []
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement("div")
        particle.className = "particle absolute w-1 h-1 bg-emerald-400 rounded-full pointer-events-none"
        particle.style.left = `${x}px`
        particle.style.top = `${y}px`
        document.body.appendChild(particle)
        particles.push(particle)

        gsap.to(particle, {
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
          opacity: 0,
          scale: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            document.body.removeChild(particle)
          },
        })
      }
    }

    // Add scroll-triggered particle effects
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = Math.abs(currentScrollY - lastScrollY)

      if (scrollDelta > 50) {
        createParticleBurst(Math.random() * window.innerWidth, Math.random() * window.innerHeight)
        lastScrollY = currentScrollY
      }
    }

    createFloatingElements()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="adventure-container fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Ambient light effects */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/2 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/5 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
    </div>
  )
}
