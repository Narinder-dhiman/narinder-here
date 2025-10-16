"use client"

import { useState, useEffect } from "react"
import { gsap } from "gsap"

export default function TerminalPreloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(".line-left", { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power2.out" })
      .fromTo(".line-right", { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.5")
      .fromTo(".center-text", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3")
      .to(
        ".progress-fill",
        {
          width: "100%",
          duration: 3,
          ease: "power2.inOut",
          onUpdate: function () {
            setProgress(Math.round(this.progress() * 100))
          },
        },
        "-=0.5",
      )
      .to(".preloader-container", {
        y: -window.innerHeight,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.5,
        onComplete: () => setLoading(false),
      })

    return () => {
      tl.kill()
    }
  }, [])

  if (!loading) return null
  return (
    <div className="preloader-container fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="line-left absolute left-8 top-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-transparent transform -translate-y-1/2"></div>
      <div className="line-right absolute right-8 top-1/2 w-32 h-1 bg-gradient-to-l from-orange-500 to-transparent transform -translate-y-1/2"></div>

      <div className="center-text text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 font-mono">Narinder Dhiman</h1>
          <p className="text-xl md:text-2xl text-orange-400 font-mono">Wait to see my portfolio</p>
        </div>

        <div className="w-80 mx-auto">
          <div className="flex justify-between text-sm text-orange-500 mb-2 font-mono">
            <span>Loading...</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-orange-900/30 rounded-full h-2 overflow-hidden border border-orange-500/50">
            <div className="progress-fill h-full bg-orange-500 rounded-full w-0 shadow-lg shadow-orange-500/50"></div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/8 text-orange-500/30 text-2xl animate-bounce font-mono">
            &lt;/&gt;
          </div>
          <div className="absolute top-2/2 right-1/8 text-orange-500/30 text-2xl animate-pulse font-mono">{`{}`}</div>
          <div className="absolute top-3/5 left-3/10 text-orange-500/30 text-xl animate-bounce delay-300 font-mono">
            ( )
          </div>
          <div className="absolute bottom-1/4 right-3/10 text-orange-500/30 text-xl animate-pulse delay-500 font-mono">
            [ ]
          </div>
        </div>
      </div>
    </div>
  )
}
