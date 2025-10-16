"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => setIsLoading(false), 500)
      },
    })

    // Progress animation
    const progressTl = gsap.timeline({ repeat: -1 })
    progressTl.to(
      {},
      {
        duration: 0.1,
        onUpdate: () => {
          setProgress((prev) => {
            const newProgress = prev + Math.random() * 15
            return newProgress >= 100 ? 100 : newProgress
          })
        },
      },
    )

    // Enhanced galaxy formation animation
    tl.from(".galaxy-ring", {
      scale: 0,
      rotation: -180,
      duration: 1.2,
      ease: "back.out(1.7)",
      stagger: 0.2,
    })
      .from(
        ".constellation",
        {
          opacity: 0,
          scale: 0,
          rotation: 360,
          duration: 0.8,
          stagger: 0.1,
        },
        "-=0.8",
      )
      .to(".rocket", {
        y: -30,
        rotation: 15,
        scale: 1.2,
        duration: 0.8,
        ease: "power2.out",
      })
      .to(".rocket", {
        y: -80,
        x: 50,
        rotation: 45,
        scale: 1.5,
        duration: 1,
        ease: "power2.inOut",
      })
      .to(".rocket", {
        y: -200,
        x: 200,
        rotation: 90,
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "power3.in",
      })
      .to(
        ".stars",
        {
          opacity: 1,
          scale: 1.5,
          rotation: 360,
          duration: 0.8,
          stagger: 0.05,
        },
        "-=1",
      )
      .to(".loading-text", {
        opacity: 0,
        y: -30,
        scale: 0.8,
        duration: 0.5,
      })
      .to(
        ".progress-bar",
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
        },
        "-=0.3",
      )
      .to(
        ".galaxy-ring",
        {
          scale: 3,
          opacity: 0,
          rotation: 720,
          duration: 1,
          ease: "power2.in",
        },
        "-=0.5",
      )
      .to(".preloader-bg", {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      })

    return () => {
      tl.kill()
      progressTl.kill()
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="preloader-bg fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Enhanced galaxy background */}
      <div className="absolute inset-0 galaxy-bg opacity-60">
        <div className="shooting-stars"></div>
        <div className="floating-particles"></div>
        <div className="cosmic-dust"></div>
      </div>

      <div className="relative z-10">
        {/* Galaxy rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="galaxy-ring absolute border-2 border-emerald-400/30 rounded-full"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        {/* Constellation pattern */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="constellation absolute"
              style={{
                left: `${150 + Math.cos((i * 30 * Math.PI) / 180) * 120}px`,
                top: `${150 + Math.sin((i * 30 * Math.PI) / 180) * 120}px`,
              }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse" />
              {i < 11 && (
                <div
                  className="absolute w-px bg-gradient-to-r from-emerald-400/50 to-transparent"
                  style={{
                    height: `${Math.sqrt(Math.pow(Math.cos(((i + 1) * 30 * Math.PI) / 180) * 120 - Math.cos((i * 30 * Math.PI) / 180) * 120, 2) + Math.pow(Math.sin(((i + 1) * 30 * Math.PI) / 180) * 120 - Math.sin((i * 30 * Math.PI) / 180) * 120, 2))}px`,
                    transform: `rotate(${(Math.atan2(Math.sin(((i + 1) * 30 * Math.PI) / 180) * 120 - Math.sin((i * 30 * Math.PI) / 180) * 120, Math.cos(((i + 1) * 30 * Math.PI) / 180) * 120 - Math.cos((i * 30 * Math.PI) / 180) * 120) * 180) / Math.PI}deg)`,
                    transformOrigin: "top left",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Enhanced stars */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="stars absolute opacity-0"
              style={{
                left: `${Math.random() * 500}px`,
                top: `${Math.random() * 500}px`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              <div
                className={`w-1 h-1 bg-white rounded-full ${i % 3 === 0 ? "animate-pulse" : i % 3 === 1 ? "animate-ping" : "animate-bounce"}`}
              />
            </div>
          ))}
        </div>

        {/* Adventure-themed rocket with trail */}
        <div className="rocket relative text-6xl mb-8 text-center filter drop-shadow-lg">
          <div className="absolute -z-10 w-20 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-transparent rounded-full blur-sm opacity-70 -translate-x-8 translate-y-8"></div>
          🚀
        </div>

        {/* Enhanced loading text with adventure theme */}
        <div className="loading-text text-center space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Launching Galaxy Portfolio
          </h2>
          <p className="text-emerald-300/80 text-sm font-mono">Initializing adventure mode...</p>

          {/* Progress bar */}
          <div className="progress-bar w-64 mx-auto">
            <div className="flex justify-between text-xs text-emerald-400/60 mb-2">
              <span>Loading</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Animated dots */}
          <div className="flex space-x-2 justify-center">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>

        {/* Adventure status messages */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-emerald-400/60 text-xs font-mono space-y-1">
            <div className="animate-pulse">→ Calibrating warp drive...</div>
            <div className="animate-pulse" style={{ animationDelay: "0.5s" }}>
              → Loading stellar coordinates...
            </div>
            <div className="animate-pulse" style={{ animationDelay: "1s" }}>
              → Preparing for adventure...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
