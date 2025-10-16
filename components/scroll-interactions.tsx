"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ScrollInteractions() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const progressBar = progressRef.current
    if (progressBar) {
      gsap.to(progressBar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.1,
        },
      })
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
          // Remove observer after animation to improve performance
          revealObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll(
      ".scroll-reveal, .scroll-stagger, .scroll-slide-left, .scroll-slide-right, .scroll-fade, .scroll-scale, .scroll-rotate, .scroll-glow, .border-animate, .bg-animate",
    )

    scrollElements.forEach((element, index) => {
      // Add will-change for performance
      element.classList.add("will-animate")

      // Stagger delay for elements with scroll-stagger class
      if (element.classList.contains("scroll-stagger")) {
        ;(element as HTMLElement).style.transitionDelay = `${index * 0.1}s`
      }

      revealObserver.observe(element)
    })

    const textRevealElements = document.querySelectorAll(".text-reveal")
    textRevealElements.forEach((element) => {
      const text = element.textContent || ""
      element.innerHTML = text
        .split("")
        .map(
          (char, index) => `<span style="transition-delay: ${index * 0.05}s">${char === " " ? "&nbsp;" : char}</span>`,
        )
        .join("")

      revealObserver.observe(element)
    })

    const parallaxElements = document.querySelectorAll(".section-parallax")
    parallaxElements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 0 },
        {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      )
    })

    const snapContainer = document.querySelector(".scroll-snap-container")
    if (snapContainer) {
      const snapSections = document.querySelectorAll(".scroll-snap-section")

      snapSections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(section, {
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            })
          },
          onLeave: () => {
            gsap.to(section, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            })
          },
        })
      })
    }

    const counterElements = document.querySelectorAll(".counter-animate")
    counterElements.forEach((element) => {
      const target = Number.parseInt(element.getAttribute("data-target") || "0")
      const duration = Number.parseFloat(element.getAttribute("data-duration") || "2")

      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            { value: 0 },
            {
              value: target,
              duration: duration,
              ease: "power2.out",
              onUpdate: function () {
                element.textContent = Math.round(this.targets()[0].value).toString()
              },
            },
          )
        },
      })
    })

    const magneticElements = document.querySelectorAll(".magnetic-hover")
    magneticElements.forEach((element) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(element, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        })
      }

      element.addEventListener("mousemove", handleMouseMove)
      element.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      revealObserver.disconnect()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

      // Remove will-change after animations complete
      scrollElements.forEach((element) => {
        element.classList.remove("will-animate")
        element.classList.add("animation-complete")
      })
    }
  }, [])

  return (
    <>
      <div
        ref={progressRef}
        className="scroll-progress fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 z-50"
      />

      <button
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 opacity-0 pointer-events-none scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  )
}
