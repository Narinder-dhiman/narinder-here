"use client"

import type React from "react"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize scroll progress indicator
    const scrollProgress = document.createElement("div")
    scrollProgress.className = "scroll-progress"
    document.body.appendChild(scrollProgress)

    // Update scroll progress
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      gsap.set(scrollProgress, { scaleX: scrollPercent })
    }

    // Smooth scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
          // Remove will-change after animation completes
          setTimeout(() => {
            entry.target.classList.add("animation-complete")
          }, 1000)
        }
      })
    }, observerOptions)

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll(
      ".scroll-reveal, .scroll-stagger, .scroll-slide-left, .scroll-slide-right, .scroll-fade, .scroll-scale, .scroll-rotate, .scroll-glow, .border-animate, .bg-animate",
    )

    animateElements.forEach((el) => {
      el.classList.add("will-animate")
      observer.observe(el)
    })

    // Text reveal animation
    const textRevealElements = document.querySelectorAll(".text-reveal")
    textRevealElements.forEach((element) => {
      const text = element.textContent || ""
      const words = text.split(" ")
      element.innerHTML = words.map((word) => `<span>${word}</span>`).join(" ")

      observer.observe(element)
    })

    // Enhanced scroll event listener
    const handleScroll = () => {
      updateScrollProgress()

      // Add scroll-based parallax effects
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll(".section-parallax")

      parallaxElements.forEach((element, index) => {
        const rate = scrolled * -0.5 * (index + 1)
        gsap.set(element, { y: rate })
      })
    }

    // Throttled scroll listener for performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })

    // Smooth scroll for navigation links
    const smoothScrollToSection = (targetId: string) => {
      const target = document.getElementById(targetId)
      if (target) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: {
            y: target,
            offsetY: 80,
          },
          ease: "power3.inOut",
        })
      }
    }

    // Add smooth scroll to navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const href = link.getAttribute("href")
        if (href && href.startsWith("#")) {
          const targetId = href.substring(1)
          smoothScrollToSection(targetId)
        }
      })
    })

    // Cleanup
    return () => {
      window.removeEventListener("scroll", throttledScroll)
      observer.disconnect()
      if (scrollProgress.parentNode) {
        scrollProgress.parentNode.removeChild(scrollProgress)
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
