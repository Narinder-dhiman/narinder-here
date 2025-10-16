"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"

export default function AdventureCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const cursor = document.querySelector(".adventure-cursor")
    const cursorTrail = document.querySelector(".cursor-trail")

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      if (cursor) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out",
        })
      }

      if (cursorTrail) {
        gsap.to(cursorTrail, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power2.out",
        })
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll("button, a, .hover-3d, .magnetic-hover")

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        className={`adventure-cursor fixed pointer-events-none z-50 mix-blend-difference transition-all duration-300 ${
          isHovering ? "scale-150" : "scale-100"
        }`}
        style={{
          left: "-10px",
          top: "-10px",
        }}
      >
        <div className="relative">
          <div className="w-5 h-5 border-2 border-emerald-400 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-1 w-3 h-3 bg-emerald-400/50 rounded-full animate-pulse"></div>
          {isHovering && (
            <div className="absolute -inset-2 w-9 h-9 border border-emerald-400/30 rounded-full animate-ping"></div>
          )}
        </div>
      </div>

      {/* Cursor trail */}
      <div
        className="cursor-trail fixed pointer-events-none z-40 mix-blend-difference"
        style={{
          left: "-15px",
          top: "-15px",
        }}
      >
        <div className="w-8 h-8 border border-emerald-400/20 rounded-full"></div>
      </div>
    </>
  )
}
