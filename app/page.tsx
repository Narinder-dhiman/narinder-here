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
  Calendar,
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
            y: 50,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
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
    <ThemeProvider attribute="class" defaultTheme="light">
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
                  className="text-xl font-bold text-primary"
                  style={{
                    background: "linear-gradient(135deg, var(--primary), var(--secondary))",
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

        <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-24">
          <div className="w-full px-4 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Hero Content */}
              <div className="hero-content space-y-8">
                <div className="space-y-6">
                  <Badge variant="outline" className="text-sm px-4 py-2 border-primary/50 text-primary">
                    <Code className="w-4 h-4 mr-2" />
                    Frontend Engineer | React.js | Next.js | UI/UX Designer
                  </Badge>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span
                      className="text-foreground"
                      style={{
                        background: "linear-gradient(135deg, var(--foreground), var(--muted-foreground))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Narinder
                    </span>

                    <span
                      className="text-primary"
                      style={{
                        paddingLeft: "15px",
                        background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Dhiman
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    Creative developer with 3+ years of experience delivering visually engaging, high-performance web applications that combine exceptional user experience with clean, scalable code. Experienced in turning design concepts into production-ready digital products while emphasizing performance, accessibility, and maintainability.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary"><span className="stat-number">3</span>+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary"><span className="stat-number">32</span>+</div>
                    <div className="text-sm text-muted-foreground">Projects Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary"><span className="stat-number">25</span>+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={downloadCv} size="lg" className="bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground">
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/50 hover:bg-primary/10 bg-transparent text-primary"
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
                    className="hover:bg-primary/10 hover:text-primary h-12 w-12"
                    onClick={() => window.open("https://github.com/Narinder-dhiman", "_blank")}
                  >
                    <Github className="w-7 h-7" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 hover:text-primary h-12 w-12"
                    onClick={() => window.open("https://www.linkedin.com/in/narinder-dhiman/", "_blank")}
                  >
                    <Linkedin className="w-7 h-7" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 hover:text-primary h-12 w-12"
                    onClick={() => window.open("mailto:dhimannarinder746@gmail.com", "_blank")}
                  >
                    <Mail className="w-7 h-7" />
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

        {/* About & Skills Bento Box */}
        <section ref={aboutRef} className="pb-20 lg:py-24 animate-section">
          <div className="w-full px-4 sm:px-8 lg:px-12">
            <div className="w-full">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                  <span className="text-primary">About & </span>Expertise
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  A dynamic mix of creative design and robust frontend development.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Large Bio Card */}
                <Card className="md:col-span-2 lg:col-span-2 lg:row-span-2 hover:shadow-lg transition-shadow duration-300 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        I am a creative developer with 3+ years of experience delivering visually engaging, high-performance web applications that combine exceptional user experience with clean, scalable code.
                      </p>
                      <p>
                        Passionate about solving complex problems and building products that create real business value. Proficient in Next.js, React.js, and modern UI/UX design tools like Figma and Adobe XD.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Frontend Skills */}
                <Card className="hover:shadow-lg transition-shadow duration-300 bg-background/50 backdrop-blur md:col-span-1 lg:col-span-1">
                  <CardContent className="p-6">
                    <Code className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-2">Frontend Development</h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary">React.js</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">JavaScript (ES6+)</Badge>
                      <Badge variant="secondary">Redux</Badge>
                      <Badge variant="secondary">Three.js</Badge>
                      <Badge variant="secondary">GSAP</Badge>
                      <Badge variant="secondary">HTML5 / CSS3</Badge>
                      <Badge variant="secondary">Bootstrap</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Design Skills */}
                <Card className="hover:shadow-lg transition-shadow duration-300 bg-background/50 backdrop-blur md:col-span-1 lg:col-span-1">
                  <CardContent className="p-6">
                    <Palette className="w-8 h-8 text-secondary mb-4" />
                    <h4 className="font-semibold mb-2">UI/UX Design</h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary">Figma</Badge>
                      <Badge variant="secondary">Adobe XD</Badge>
                      <Badge variant="secondary">Photoshop</Badge>
                      <Badge variant="secondary">Illustrator</Badge>
                      <Badge variant="secondary">Responsive Design</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Backend / Tech Skills */}
                <Card className="hover:shadow-lg transition-shadow duration-300 bg-background/50 backdrop-blur md:col-span-2 lg:col-span-1">
                  <CardContent className="p-6">
                    <Database className="w-8 h-8 text-accent mb-4" />
                    <h4 className="font-semibold mb-2">Backend & Tech</h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Express.js</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">Supabase</Badge>
                      <Badge variant="secondary">REST APIs / GraphQL</Badge>
                      <Badge variant="secondary">Shopify</Badge>
                      <Badge variant="secondary">WordPress</Badge>
                      <Badge variant="secondary">Git / GitHub</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Education */}
                <Card className="hover:shadow-lg transition-shadow duration-300 bg-background/50 backdrop-blur md:col-span-2 lg:col-span-2">
                  <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div>
                      <Globe className="w-8 h-8 text-primary mb-4" />
                      <h4 className="font-semibold mb-2">Education</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>• 10th Class - 2018 (HP Board)</p>
                        <p>• 12th Class - 2020 (HP Board)</p>
                        <p>• Web Designing - 2022 (Institute)</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 mt-4 md:mt-0 max-w-xs text-right">
                      <h4 className="font-semibold">Interests</h4>
                      <p className="text-sm text-muted-foreground">Listening to Music, Playing Cricket, Learning New Things</p>
                      <div className="flex gap-2 mt-2 justify-end">
                        <Badge variant="outline" className="border-primary/30">English</Badge>
                        <Badge variant="outline" className="border-primary/30">Hindi</Badge>
                        <Badge variant="outline" className="border-primary/30">Punjabi</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} className="py-20 lg:py-24 animate-section">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="w-full">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                  <span className="text-primary">Work </span>Experience
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  My professional journey in web development and design
                </p>
              </div>

              <div className="relative border-l-2 border-primary/30 ml-3 space-y-12 pb-8">
                {/* Company 1: Block Coders */}
                <div className="relative pl-8 group">
                  <div className="absolute left-[-9px] top-2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transition-transform duration-300 group-hover:scale-125"></div>
                  <Card className="hover:shadow-xl transition-all duration-300 border-primary/20 bg-background/50 backdrop-blur">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 border-b border-border/50 pb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-3">Block Coders</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
                            <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                              <Calendar className="w-4 h-4" />
                              17 Jan 2022 to 13 Jan 2025
                            </div>
                            <div className="flex items-center gap-2 bg-secondary/20 text-muted-foreground px-3 py-1 rounded-full">
                              <MapPin className="w-4 h-4 text-red-500" />
                              Sector 74, Sahibzada Ajit Singh Nagar
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-8">
                        {/* Role 1 */}
                        <div className="relative pl-4 border-l-2 border-primary/20 hover:border-primary transition-colors">
                          <h4 className="text-lg font-bold text-foreground mb-2">Six-Month Internship in Web Design :</h4>
                          <ul className="text-sm text-muted-foreground leading-relaxed space-y-2 list-disc ml-4">
                            <li>Developed responsive UI/UX using HTML5, CSS3, and Bootstrap.</li>
                            <li>Created wireframes and prototypes with Adobe XD, Figma, and Photoshop, enhancing design-to-development workflow.</li>
                          </ul>
                        </div>
                        {/* Role 2 */}
                        <div className="relative pl-4 border-l-2 border-primary/20 hover:border-primary transition-colors">
                          <h4 className="text-lg font-bold text-foreground mb-2">Six-Month Web Designer :</h4>
                          <ul className="text-sm text-muted-foreground leading-relaxed space-y-2 list-disc ml-4">
                            <li>Created mobile-friendly, SEO-optimized websites with JavaScript enhancements and CSS animations.</li>
                            <li>Designed a responsive, visually engaging UI/UX using HTML5, CSS3, and Bootstrap.</li>
                          </ul>
                        </div>
                        {/* Role 3 */}
                        <div className="relative pl-4 border-l-2 border-primary/20 hover:border-primary transition-colors">
                          <h4 className="text-lg font-bold text-foreground mb-2">Frontend Developer (Block Coders Company, 2+ Years) :</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed ml-4">
                            Engineered dynamic web applications with JavaScript, Next.js, and React.js. Implemented core functionalities, including advanced search, API integration, and user authentication, to enhance application performance and user experience.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Company 2: Cybersify */}
                <div className="relative pl-8 group">
                  <div className="absolute left-[-9px] top-2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transition-transform duration-300 group-hover:scale-125"></div>
                  <Card className="hover:shadow-xl transition-all duration-300 border-primary/20 bg-background/50 backdrop-blur">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 border-b border-border/50 pb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-3">Cybersify Cloud computing Pvt Ltd</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
                            <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                              <Calendar className="w-4 h-4" />
                              21 Feb 2024 to 30 Sep 2024
                            </div>
                            <div className="flex items-center gap-2 bg-secondary/20 text-muted-foreground px-3 py-1 rounded-full">
                              <MapPin className="w-4 h-4 text-red-500" />
                              Sector 74, Sahibzada Ajit Singh Nagar
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div className="relative pl-4 border-l-2 border-primary/20 hover:border-primary transition-colors">
                          <h4 className="text-lg font-bold text-foreground mb-2">Frontend Developer (Cybersify Cloud computing Pvt Ltd, 6+ Months) :</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed ml-4">
                            Contributed to Shopify projects, utilizing React and Figma for UI/UX design. Implemented smooth and engaging animations with GSAP to improve user interaction.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Company 3: Freelance */}
                <div className="relative pl-8 group">
                  <div className="absolute left-[-9px] top-2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transition-transform duration-300 group-hover:scale-125"></div>
                  <Card className="hover:shadow-xl transition-all duration-300 border-primary/20 bg-background/50 backdrop-blur">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 border-b border-border/50 pb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-3">Freelance Frontend Developer</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
                            <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                              <Calendar className="w-4 h-4" />
                              Oct 2024 to Jun 2026
                            </div>
                            <div className="flex items-center gap-2 bg-secondary/20 text-muted-foreground px-3 py-1 rounded-full">
                              <MapPin className="w-4 h-4 text-red-500" />
                              Self
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div className="relative pl-4 border-l-2 border-primary/20 hover:border-primary transition-colors">
                          <h4 className="text-lg font-bold text-foreground mb-2">Freelance Frontend Developer (1+ Year) :</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed ml-4">
                            Delivered high-quality freelance web development services. Developed and maintained robust frontend applications for various clients, ensuring responsive designs, optimal performance, and seamless user experiences.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={projectsRef} className="py-20 lg:py-24 animate-section">
          <div className="w-full px-4 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                <span className="text-primary">Featured </span>Projects
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Showcasing my latest work in web development, from AI-powered applications to complex admin dashboards
              </p>
            </div>

            <TerminalGraphics />
          </div>
        </section>



        {/* Contact Section */}
        <section ref={contactRef} className="py-20 lg:py-24 animate-section">
          <div className="w-full px-4 sm:px-8 lg:px-12">
            <div className="w-full">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                  <span className="text-primary">Get In </span>Touch
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

                <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                    <form className="space-y-4" onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.target as HTMLFormElement;
                      const data = new FormData(form);
                      try {
                        const res = await fetch("/api/send-email", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(Object.fromEntries(data)),
                        });
                        if (res.ok) {
                          alert("Message sent successfully ✅");
                          form.reset();
                        } else {
                          alert("Failed to send ❌");
                        }
                      } catch (error) {
                        alert("Error sending ❌");
                      }
                    }}>
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                          className="w-full p-3 rounded-md border-2 border-border bg-background focus:outline-none focus:border-primary transition-colors shadow-sm"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          required
                          className="w-full p-3 rounded-md border-2 border-border bg-background focus:outline-none focus:border-primary transition-colors shadow-sm"
                        />
                      </div>
                      <div>
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          required
                          rows={4}
                          className="w-full p-3 rounded-md border-2 border-border bg-background focus:outline-none focus:border-primary transition-colors shadow-sm resize-none"
                        ></textarea>
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
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
                  className="text-lg font-bold text-primary"
                  style={{
                    background: "linear-gradient(135deg, var(--primary), var(--secondary))",
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
                  className="hover:bg-primary/10 hover:text-primary h-12 w-12"
                  onClick={() => window.open("https://github.com/Narinder-dhiman", "_blank")}
                >
                  <Github className="w-7 h-7" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary h-12 w-12"
                  onClick={() => window.open("https://www.linkedin.com/in/narinder-dhiman/", "_blank")}
                >
                  <Linkedin className="w-7 h-7" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary h-12 w-12"
                  onClick={() => window.open("mailto:dhimannarinder746@gmail.com", "_blank")}
                >
                  <Mail className="w-7 h-7" />
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
