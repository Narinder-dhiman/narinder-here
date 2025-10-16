"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { ColorThemeToggle } from "@/components/color-theme-toggle"
import { TerminalGraphics } from "@/components/terminal-graphics"
import ContactModal from "@/components/contact-modal"
import TerminalPreloader from "@/components/terminal-preloader"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Zap,
} from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Portfolio() {
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.2,
      })

      gsap.from(".hero-image", {
        duration: 1.5,
        scale: 0.8,
        opacity: 0,
        ease: "power3.out",
        delay: 0.3,
      })

      const sections = document.querySelectorAll(".animate-section")
      sections.forEach((section, index) => {
        gsap.fromTo(
          section,
          {
            rotateX: -90,
            opacity: 0,
            scale: 0.8,
            transformOrigin: "top center",
          },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              scrub: 1,
            },
            rotateX: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
            delay: index * 0.1,
          },
        )
      })

      gsap.to(".parallax-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-bg",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })

      const statsElements = document.querySelectorAll(".stat-number")
      statsElements.forEach((stat) => {
        const finalValue = Number.parseInt(stat.textContent || "0")
        gsap.fromTo(
          stat,
          { textContent: 0 },
          {
            textContent: finalValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
            },
          },
        )
      })
    })

    return () => ctx.revert()
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }


  async function downloadCv() {
    const fileUrl = "/Narinder_Dhiman_CV.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Narinder_Dhiman_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    
  }
  return (
    <ThemeProvider>
      <TerminalPreloader />
      <div className="min-h-screen bg-background text-foreground">
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-orange-900/20 to-blue-900/20 -z-10 parallax-bg"></div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-orange-500/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/logo.png"
                  alt="Narinder Dhiman Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span
                  className="text-xl font-bold text-orange-500"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Narinder Dhiman
                </span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection(heroRef)}
                  className="text-sm font-medium hover:text-orange-500 transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="text-sm font-medium hover:text-orange-500 transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection(experienceRef)}
                  className="text-sm font-medium hover:text-orange-500 transition-colors duration-200"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection(projectsRef)}
                  className="text-sm font-medium hover:text-orange-500 transition-colors duration-200"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection(skillsRef)}
                  className="text-sm font-medium hover:text-orange-500 transition-colors duration-200"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="text-sm font-medium hover:text-orange-500 transition-colors duration-200"
                >
                  Contact
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <ColorThemeToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-20 pb-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Hero Content */}
              <div className="hero-content space-y-8">
                <div className="space-y-6">
                  <Badge variant="outline" className="text-sm px-4 py-2 border-orange-500/50 text-orange-500">
                    <Code className="w-4 h-4 mr-2" />
                    Frontend Developer
                  </Badge>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span
                      className="text-white"
                      style={{
                        background: "linear-gradient(135deg, #ffffff, #d1d5db)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Narinder
                    </span>
                    <br />
                    <span
                      className="text-orange-500"
                      style={{
                        background: "linear-gradient(135deg, #f97316, #3b82f6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Dhiman
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    Skilled graphic and web designer with expertise in React.js frontend development, dedicated to
                    creating visually captivating designs and dynamic web experiences. Successfully collaborated on
                    various design projects, ensuring seamless integration of aesthetics and functionality.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-500 stat-number">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-500 stat-number">20+</div>
                    <div className="text-sm text-muted-foreground">Projects Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-500 stat-number">16+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={downloadCv} size="lg" className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white">
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-orange-500/50 hover:bg-orange-500/10 bg-transparent text-orange-500"
                    onClick={() => setIsContactModalOpen(true)}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 pt-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 hover:text-primary"
                    onClick={() => window.open("https://github.com/Narinder-dhiman", "_blank")}
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 hover:text-primary"
                    onClick={() => window.open("https://www.linkedin.com/in/narinder-dhiman/", "_blank")}
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 hover:text-primary"
                    onClick={() => window.open("mailto:dhimannarinder746@gmail.com", "_blank")}
                  >
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="hero-image relative">
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/profiler.jpg"
                      alt="Narinder Dhiman - Frontend Developer"
                      width={500}
                      height={600}
                      className="w-full h-auto object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-primary/20 backdrop-blur-sm rounded-lg p-3 floating-element">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-secondary/20 backdrop-blur-sm rounded-lg p-3 floating-element">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="absolute top-1/2 -left-8 bg-accent/20 backdrop-blur-sm rounded-lg p-2 floating-element">
                    <Palette className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-20 animate-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-6 text-orange-500"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  About Me
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  I am a skilled graphic and web designer, as well as a proficient React.js frontend developer. I
                  specialize in crafting visually captivating designs and building dynamic, user-friendly web
                  experiences.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">My Journey</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Proficient in Adobe Creative Suite, JavaScript, and CSS, committed to continuous growth and
                      enhancing design and development skills. My creative flair and strategic thinking enable me to
                      collaborate seamlessly with teams on design projects.
                    </p>
                    <p>
                      My expertise in React.js allows me to translate designs into interactive and responsive web
                      applications. Ready to contribute innovative solutions and bring ideas to life through code and
                      design.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <Palette className="w-8 h-8 text-primary mx-auto mb-4" />
                      <h4 className="font-semibold mb-2">Design</h4>
                      <p className="text-sm text-muted-foreground">UI/UX Design, Figma, Adobe XD</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <Code className="w-8 h-8 text-secondary mx-auto mb-4" />
                      <h4 className="font-semibold mb-2">Frontend</h4>
                      <p className="text-sm text-muted-foreground">React.js, Next.js, TypeScript</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <Smartphone className="w-8 h-8 text-accent mx-auto mb-4" />
                      <h4 className="font-semibold mb-2">Mobile</h4>
                      <p className="text-sm text-muted-foreground">Responsive Design, PWA</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <Database className="w-8 h-8 text-primary mx-auto mb-4" />
                      <h4 className="font-semibold mb-2">Backend</h4>
                      <p className="text-sm text-muted-foreground">Node.js, Supabase, APIs</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} className="py-20 animate-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-6 text-orange-500"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Work Experience
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  My professional journey in web development and design
                </p>
              </div>

              <div className="space-y-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 animate-section">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-primary">Frontend Developer</h3>
                        <p className="text-lg text-muted-foreground">Block Coders Company</p>
                      </div>
                      <Badge variant="secondary" className="mt-2 sm:mt-0 w-fit">
                        17 Jan 2022 - 13 Jan 2025
                      </Badge>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Engineered dynamic web applications with JavaScript, Next.js, and React.js
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Implemented core functionalities, including advanced search, API integration, and user
                        authentication, to enhance application performance and user experience
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Designed responsive, visually engaging UI/UX using HTML5, CSS3, and Bootstrap
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 animate-section">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-secondary">Frontend Developer</h3>
                        <p className="text-lg text-muted-foreground">Cybersify Cloud Computing Pvt Ltd</p>
                      </div>
                      <Badge variant="outline" className="mt-2 sm:mt-0 w-fit">
                        11 Mar 2024 - 11 Sep 2024
                      </Badge>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Contributed to Shopify projects, utilizing React and Figma for UI/UX design
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Implemented smooth and engaging animations with GSAP to improve user interaction
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Web Designer Experience */}
                <Card className="hover:shadow-lg transition-shadow duration-300 animate-section">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-secondary">Web Designer</h3>
                        <p className="text-lg text-muted-foreground">Six-Month Position</p>
                      </div>
                      <Badge variant="outline">6 Months</Badge>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Created mobile-friendly, SEO-optimized websites with JavaScript enhancements and CSS animations
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Designed responsive, visually engaging UI/UX using HTML5, CSS3, and Bootstrap
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Web Design Internship */}
                <Card className="hover:shadow-lg transition-shadow duration-300 animate-section">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-accent">Web Design Intern</h3>
                        <p className="text-lg text-muted-foreground">Six-Month Internship</p>
                      </div>
                      <Badge variant="outline">6 Months</Badge>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Developed responsive UI/UX using HTML5, CSS3, and Bootstrap
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Created wireframes and prototypes with Adobe XD, Figma, and Photoshop, enhancing
                        design-to-development workflow
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section ref={projectsRef} className="py-20 animate-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6 text-orange-500"
                style={{
                  background: "linear-gradient(135deg, #f97316, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Featured Projects
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Showcasing my latest work in web development, from AI-powered applications to complex admin dashboards
              </p>
            </div>

            <TerminalGraphics />
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="py-20 animate-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-6 text-orange-500"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Skills & Technologies
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  The tools and technologies I use to bring ideas to life
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Frontend Skills */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Code className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-xl font-bold">Languages</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">HTML5</Badge>
                        <Badge variant="secondary">CSS3</Badge>
                        <Badge variant="secondary">JavaScript (ES6+)</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Frameworks & Libraries */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Code className="w-6 h-6 text-secondary mr-3" />
                      <h3 className="text-xl font-bold">Frameworks & Libraries</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">React.js</Badge>
                        <Badge variant="secondary">Redux</Badge>
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">Bootstrap</Badge>
                        <Badge variant="secondary">Three.js</Badge>
                        <Badge variant="secondary">GSAP</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Technologies */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Database className="w-6 h-6 text-accent mr-3" />
                      <h3 className="text-xl font-bold">Technologies</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">RESTful APIs</Badge>
                        <Badge variant="secondary">GraphQL (Basic)</Badge>
                        <Badge variant="secondary">WordPress</Badge>
                        <Badge variant="secondary">RainbowKit</Badge>
                        <Badge variant="secondary">Supabase</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Backend & Databases */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Database className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-xl font-bold">Backend & Databases (Basic)</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Node.js</Badge>
                        <Badge variant="secondary">Express.js</Badge>
                        <Badge variant="secondary">WebSockets</Badge>
                        <Badge variant="secondary">MongoDB</Badge>
                        <Badge variant="secondary">MySQL</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Deployment & Tools */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Globe className="w-6 h-6 text-secondary mr-3" />
                      <h3 className="text-xl font-bold">Deployment & Tools</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Git</Badge>
                        <Badge variant="secondary">GitHub</Badge>
                        <Badge variant="secondary">Postman</Badge>
                        <Badge variant="secondary">Vercel</Badge>
                        <Badge variant="secondary">Netlify</Badge>
                        <Badge variant="secondary">FileZilla</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Design Tools */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Palette className="w-6 h-6 text-accent mr-3" />
                      <h3 className="text-xl font-bold">Tools & Design</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Photoshop</Badge>
                        <Badge variant="secondary">Illustrator</Badge>
                        <Badge variant="secondary">Figma</Badge>
                        <Badge variant="secondary">Adobe XD</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Core Frontend Skills */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Zap className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-xl font-bold">Core Frontend</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Responsive Design</Badge>
                        <Badge variant="secondary">UI/UX</Badge>
                        <Badge variant="secondary">Animations</Badge>
                        <Badge variant="secondary">State Management</Badge>
                        <Badge variant="secondary">Debugging</Badge>
                        <Badge variant="secondary">Testing</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Expertise */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Smartphone className="w-6 h-6 text-secondary mr-3" />
                      <h3 className="text-xl font-bold">Expertise</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Web Designing</Badge>
                        <Badge variant="secondary">Graphic Design</Badge>
                        <Badge variant="secondary">Frontend Development</Badge>
                        <Badge variant="secondary">Web3</Badge>
                        <Badge variant="secondary">Next UI</Badge>
                        <Badge variant="secondary">Figma-to-Code Convert</Badge>
                        <Badge variant="secondary">Blockchain</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Education & Languages */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Globe className="w-6 h-6 text-accent mr-3" />
                      <h3 className="text-xl font-bold">Education & Languages</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <p className="text-sm font-semibold">Education:</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">10th Class HP Board (2018)</Badge>
                          <Badge variant="outline">12th Class HP Board (2020)</Badge>
                          <Badge variant="outline">Web Designing (2022)</Badge>
                        </div>
                      </div>
                      <div className="space-y-2 pt-2">
                        <p className="text-sm font-semibold">Languages:</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">English</Badge>
                          <Badge variant="outline">Hindi</Badge>
                          <Badge variant="outline">Punjabi</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Zap className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-xl font-bold">Hobbies</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Listening to Music</Badge>
                      <Badge variant="secondary">Playing Cricket</Badge>
                      <Badge variant="secondary">Learning New Things</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section ref={contactRef} className="py-20 animate-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-6 text-orange-500"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Get In Touch
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  Ready to bring your ideas to life? Let's create something amazing together.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-muted-foreground">+91 8278747969</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">dhimannarinder746@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-muted-foreground">VPO Nangran Teh. & Distt. Una (HP)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                    <div className="space-y-4">
                      <Button
                        size="lg"
                        className="w-full bg-orange-500 hover:bg-orange-600"
                        onClick={() => setIsContactModalOpen(true)}
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Open Contact Form
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full bg-transparent"
                        onClick={() => window.open("https://wa.me/8278747969", "_blank")}
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        WhatsApp Chat
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full bg-transparent"
                        onClick={() => window.open("https://www.linkedin.com/in/narinder-dhiman/", "_blank")}
                      >
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                <Image
                  src="/images/logo.png"
                  alt="Narinder Dhiman Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span
                  className="text-lg font-bold text-orange-500"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Narinder Dhiman
                </span>
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary"
                  onClick={() => window.open("https://github.com/Narinder-dhiman", "_blank")}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary"
                  onClick={() => window.open("https://www.linkedin.com/in/narinder-dhiman/", "_blank")}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary"
                  onClick={() => window.open("mailto:dhimannarinder746@gmail.com", "_blank")}
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="text-center mt-8 pt-8 border-t border-border/50">
              <p className="text-muted-foreground text-sm">
                © 2025 Narinder Dhiman. All rights reserved. Built with React.js, Next.js & GSAP.
              </p>
            </div>
          </div>
        </footer>

        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      </div>
    </ThemeProvider>
  )
}
