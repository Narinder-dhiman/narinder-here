"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor")
    const cursorFollower = document.querySelector(".cursor-follower")

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      // Animate main cursor
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      })

      // Animate follower with delay
      gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseEnter = () => {
      gsap.to([cursor, cursorFollower], {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to([cursor, cursorFollower], {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("button, a, .hover-target")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

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
      <div
        className="custom-cursor fixed w-4 h-4 bg-emerald-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ left: "-8px", top: "-8px" }}
      />
      <div
        className="cursor-follower fixed w-8 h-8 border-2 border-emerald-400/50 rounded-full pointer-events-none z-40"
        style={{ left: "-16px", top: "-16px" }}
      />
    </>
  )
}
