"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Hero3DScene() {
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return

    // Create 3D perspective container
    gsap.set(scene, {
      perspective: 1000,
      transformStyle: "preserve-3d",
    })

    // Animate 3D layers
    const layers = scene.querySelectorAll(".layer-3d")

    layers.forEach((layer, index) => {
      gsap.set(layer, {
        transformOrigin: "center center",
        z: index * -100,
      })

      // Parallax effect on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window

        const xPercent = (clientX / innerWidth - 0.5) * 2
        const yPercent = (clientY / innerHeight - 0.5) * 2

        gsap.to(layer, {
          rotationY: xPercent * (5 + index * 2),
          rotationX: -yPercent * (3 + index),
          duration: 1,
          ease: "power2.out",
        })
      }

      window.addEventListener("mousemove", handleMouseMove)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    })

    // Floating animation for 3D elements
    gsap.to(".floating-3d", {
      y: "+=20",
      rotationZ: "+=5",
      duration: 3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
    })
  }, [])

  return (
    <div ref={sceneRef} className="absolute inset-0 pointer-events-none">
      {/* Background layer */}
      <div className="layer-3d absolute inset-0">
        <div className="floating-3d absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl"></div>
        <div className="floating-3d absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-xl"></div>
      </div>

      {/* Middle layer */}
      <div className="layer-3d absolute inset-0">
        <div className="floating-3d absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-2xl"></div>
        <div className="floating-3d absolute bottom-1/4 right-1/3 w-28 h-28 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Foreground layer */}
      <div className="layer-3d absolute inset-0">
        <div className="floating-3d absolute top-1/2 left-1/6 w-20 h-20 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-lg"></div>
        <div className="floating-3d absolute top-2/3 right-1/6 w-36 h-36 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl"></div>
      </div>
    </div>
  )
}
