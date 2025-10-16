"use client"

import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projectTabs = [
  {
    id: "featured-01",
    title: "FEATURED WORK 01",
    project: {
      title: "Secure365 AI Chatbot",
      description: "Next.js • AI Integration • Real-time Animations",
      content:
        "Advanced cybersecurity platform with integrated AI chatbot featuring real-time chat expressions, animated responses, and dynamic personality changes based on conversation context. The chatbot adapts its expressions and responses in real-time, creating an engaging and interactive security consultation experience.",
      tags: ["Next.js", "AI Chatbot", "GSAP Animations", "Real-time", "Cybersecurity", "Expression AI"],
      year: "2024",
      category: "AI & SECURITY",
      link: "https://secure365-new.vercel.app/",
      features: [
        "AI-powered responses",
        "Expression animations",
        "Real-time chat",
        "Security analytics",
        "Dynamic personality",
        "Emotion recognition",
      ],
      tech: "Built with Next.js, integrated AI APIs for natural language processing, and GSAP for smooth chat animations that respond to user emotions and conversation flow. Features advanced expression mapping and real-time personality adaptation.",
    },
  },
  {
    id: "featured-02",
    title: "FEATURED WORK 02",
    project: {
      title: "Cybersify SellMac Platform",
      description: "React.js • E-commerce • Interactive Chatbot",
      content:
        "Comprehensive Mac selling platform with intelligent chatbot assistant that guides users through device evaluation, pricing, and sales process with animated interactions. The platform features automated device assessment, real-time pricing, and seamless transaction management.",
      tags: ["React.js", "E-commerce", "Chatbot", "Device Evaluation", "Interactive UI", "Automated Pricing"],
      year: "2024",
      category: "E-COMMERCE AI",
      link: "https://cybersify.tech/sellmacdev/",
      features: [
        "Smart device evaluation",
        "Animated chatbot",
        "Price estimation",
        "User guidance",
        "Transaction management",
        "Device diagnostics",
      ],
      tech: "React.js with custom chatbot integration, real-time device assessment algorithms, automated pricing engine, and smooth animations for enhanced user experience throughout the selling process.",
    },
  },
  {
    id: "featured-03",
    title: "FEATURED WORK 03",
    project: {
      title: "Law Office Management",
      description: "Next.js • Supabase • PDF Generation",
      content:
        "Comprehensive case management system for advocates with PDF export, Google authentication, admin panel for user management, and subscription tracking with advanced analytics. Features date-wise case viewing, email integration, and complete profile management with subscription plans.",
      tags: ["Next.js", "Supabase", "PDF Export", "Authentication", "Admin Panel", "Case Management"],
      year: "2024",
      category: "LEGAL TECH",
      features: [
        "Case management",
        "PDF generation",
        "Google Auth",
        "Admin dashboard",
        "Email integration",
        "Subscription tracking",
      ],
      tech: "Built with Next.js and Supabase for backend, featuring OAuth integration, comprehensive document management, PDF generation with custom templates, and advanced user analytics dashboard.",
    },
  },
  {
    id: "featured-04",
    title: "FEATURED WORK 04",
    project: {
      title: "Driving License Management",
      description: "Next.js • Client Booking • Trainer Assignment",
      content:
        "Advanced client and booking management system with trainer assignment capabilities. Features advance booking scheduling, seamless booking swaps, trainer account integration, and comprehensive schedule management for both clients and trainers.",
      tags: ["Next.js", "Booking System", "Trainer Management", "Schedule Swapping", "Client Management"],
      year: "2024",
      category: "MANAGEMENT SYSTEM",
      features: [
        "Advance booking",
        "Schedule swapping",
        "Trainer assignment",
        "Client management",
        "Trainer accounts",
        "Schedule optimization",
      ],
      tech: "Next.js with advanced scheduling algorithms, real-time booking management, trainer-client matching system, and comprehensive dashboard for both administrators and trainers.",
    },
  },
  {
    id: "featured-05",
    title: "FEATURED WORK 05",
    project: {
      title: "Ayewa Admin Dashboard",
      description: "Next.js • Admin Panel • User Analytics",
      content:
        "Robust admin panel featuring comprehensive user management, subscription tracking, data visualization, and administrative controls. Includes user blocking/unblocking, data editing/deletion, and detailed analytics dashboard with performance metrics.",
      tags: ["Next.js", "Admin Panel", "User Management", "Analytics", "Data Visualization", "Subscription Management"],
      year: "2024",
      category: "ADMIN SYSTEMS",
      features: [
        "User management",
        "Subscription tracking",
        "Data analytics",
        "User controls",
        "Performance metrics",
        "Data visualization",
      ],
      tech: "Next.js with advanced admin controls, real-time user analytics, subscription management system, and comprehensive data visualization using modern charting libraries.",
    },
  },
  {
    id: "featured-06",
    title: "FEATURED WORK 06",
    project: {
      title: "The Catsinn Platform",
      description: "React.js • Pet Services • Booking System",
      content:
        "Comprehensive cat care platform featuring buying/selling, boarding and grooming services, health tracking, and medication management. Provides detailed cat condition insights, service booking, and complete pet care management system.",
      tags: ["React.js", "Pet Services", "Booking System", "Health Tracking", "E-commerce", "Service Management"],
      year: "2023",
      category: "PET CARE PLATFORM",
      features: [
        "Pet buying/selling",
        "Service booking",
        "Health tracking",
        "Medication management",
        "Grooming services",
        "Boarding facilities",
      ],
      tech: "React.js with comprehensive pet management system, service booking engine, health tracking database, and integrated payment processing for seamless pet care services.",
    },
  },
  {
    id: "featured-07",
    title: "FEATURED WORK 07",
    project: {
      title: "Matrimonial Platform",
      description: "React.js • Matchmaking • Profile Management",
      content:
        "Advanced matchmaking platform designed for connecting individuals for relationships. Features comprehensive profile creation, photo uploads, preference management, and seamless communication tools for meaningful connections.",
      tags: ["React.js", "Matchmaking", "Profile Management", "Communication", "Photo Upload", "Preferences"],
      year: "2023",
      category: "SOCIAL PLATFORM",
      features: [
        "Profile creation",
        "Photo management",
        "Matchmaking algorithm",
        "Communication tools",
        "Preference settings",
        "Connection management",
      ],
      tech: "React.js with advanced matchmaking algorithms, secure profile management, photo upload system, and real-time communication features for enhanced user connections.",
    },
  },
  {
    id: "featured-08",
    title: "FEATURED WORK 08",
    project: {
      title: "Love-Craft Gaming",
      description: "Responsive Design • Gaming Platform • Interactive UI",
      content:
        "Gaming platform with seamless responsive design and device rotation adaptability. Features interactive carousels, smooth animations, and optimized performance across all devices with engaging user interface elements.",
      tags: ["Responsive Design", "Gaming", "Interactive UI", "Device Adaptation", "Carousel", "Animations"],
      year: "2023",
      category: "GAMING PLATFORM",
      features: [
        "Responsive design",
        "Device rotation support",
        "Interactive carousels",
        "Smooth animations",
        "Cross-platform compatibility",
        "Engaging UI",
      ],
      tech: "Advanced responsive design techniques with CSS Grid and Flexbox, JavaScript-powered interactive elements, and optimized performance for gaming experiences across all devices.",
    },
  },
]

function TabbedProjects() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    gsap.fromTo(
      ".tab-content",
      { opacity: 0, y: 30, rotationX: 15 },
      { opacity: 1, y: 0, rotationX: 0, duration: 0.6, ease: "power3.out" },
    )

    // Animate project cards with stagger
    gsap.fromTo(
      ".project-feature",
      { opacity: 0, x: -20, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 0.4, stagger: 0.1, delay: 0.2, ease: "back.out(1.7)" },
    )
  }, [activeTab])

  const handleTabClick = (index: number) => {
    if (index !== activeTab) {
      gsap.to(".tab-content", {
        opacity: 0,
        y: -30,
        rotationX: -15,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setActiveTab(index)
        },
      })
    }
  }

  const currentProject = projectTabs[activeTab].project

  const getProjectIcon = (index: number) => {
    const icons = ["🤖", "💻", "⚖️", "🚗", "👥", "🐱", "💕", "🎮"]
    return icons[index] || "🚀"
  }

  const getFeatureIcon = (index: number) => {
    const featureIcons = [
      ["💬", "🔒"], // AI Chat, Security
      ["💰", "📱"], // Pricing, Mobile
      ["📄", "👥"], // PDF, User Management
      ["📅", "🔄"], // Booking, Swapping
      ["📊", "⚙️"], // Analytics, Settings
      ["🏥", "💊"], // Health, Medicine
      ["❤️", "📸"], // Love, Photos
      ["🎯", "📱"], // Gaming, Responsive
    ]
    return featureIcons[activeTab] || ["⭐", "✨"]
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center mb-12 gap-2">
        {projectTabs.slice(0, 4).map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(index)}
            className={`
              relative px-4 py-3 font-semibold text-xs md:text-sm tracking-wider transition-all duration-300 hover-3d
              ${
                index === activeTab
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border"
              }
              ${index === 0 ? "rounded-l-xl" : ""}
              ${index === 3 ? "rounded-r-xl" : ""}
              hover:scale-105 hover:shadow-xl backdrop-blur-sm
            `}
          >
            {tab.title}
            {index === activeTab && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl -z-10 animate-pulse"></div>
            )}
          </button>
        ))}
        <Button
          variant="outline"
          className="ml-2 md:ml-6 bg-background/80 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 hover-3d backdrop-blur-sm text-xs md:text-sm"
          onClick={() => {
            // Cycle through all 8 projects
            const nextTab = (activeTab + 4) % projectTabs.length
            handleTabClick(nextTab)
          }}
        >
          MORE WORKS →
        </Button>
      </div>

      <div className="tab-content bg-gradient-to-br from-card via-card/95 to-background rounded-3xl p-6 md:p-12 min-h-[600px] border border-border/50 backdrop-blur-sm shadow-2xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Enhanced Project Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-muted-foreground">
                <Badge variant="secondary" className="text-xs font-medium tracking-wider">
                  {currentProject.year}
                </Badge>
                <Badge variant="outline" className="text-xs font-medium tracking-wider border-primary/30">
                  {currentProject.category}
                </Badge>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold text-foreground mb-4 hover:text-primary transition-colors duration-300">
                {currentProject.title}
              </h2>

              <p className="text-lg md:text-xl text-primary/80 font-medium mb-2">{currentProject.description}</p>
            </div>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{currentProject.content}</p>

            {currentProject.tech && (
              <div className="bg-background/50 rounded-xl p-4 md:p-6 border border-border/30">
                <h4 className="font-semibold text-foreground mb-3">Technical Implementation</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{currentProject.tech}</p>
              </div>
            )}

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentProject.features?.map((feature, index) => (
                  <div
                    key={index}
                    className="project-feature flex items-center space-x-3 bg-background/30 rounded-lg p-3 hover:bg-background/50 transition-colors duration-300 hover-3d"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {currentProject.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-background/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover-3d text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {currentProject.link && (
                <Button
                  className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover-3d"
                  size="lg"
                  onClick={() => window.open(currentProject.link, "_blank")}
                >
                  VIEW LIVE PROJECT →
                </Button>
              )}
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-secondary hover:text-secondary-foreground hover:scale-105 transition-all duration-300 hover-3d bg-transparent"
              >
                VIEW DETAILS
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-background/80 to-card/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-border/30 shadow-xl">
              <div className="space-y-6">
                {/* Main project showcase */}
                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 hover:shadow-lg transition-all duration-300 hover-3d">
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="text-5xl md:text-6xl mb-4">{getProjectIcon(activeTab)}</div>
                    <h4 className="font-semibold text-lg mb-2">{currentProject.title}</h4>
                    <p className="text-muted-foreground text-sm">{currentProject.description}</p>
                  </CardContent>
                </Card>

                {/* Feature highlights grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-background/50 hover:bg-background/70 transition-all duration-300 hover:scale-105 hover-3d">
                    <CardContent className="p-4 md:p-6 text-center">
                      <div className="text-2xl md:text-3xl mb-2">{getFeatureIcon(activeTab)[0]}</div>
                      <p className="text-xs text-muted-foreground">
                        {currentProject.features?.[0]?.split(" ")[0] || "Feature"}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-background/50 hover:bg-background/70 transition-all duration-300 hover:scale-105 hover-3d">
                    <CardContent className="p-4 md:p-6 text-center">
                      <div className="text-2xl md:text-3xl mb-2">{getFeatureIcon(activeTab)[1]}</div>
                      <p className="text-xs text-muted-foreground">
                        {currentProject.features?.[1]?.split(" ")[0] || "Feature"}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Technology stack indicator */}
                <div className="flex justify-center space-x-4 pt-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse delay-200"></div>
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-400"></div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/15 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-pulse delay-500"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {projectTabs.map((_, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === activeTab
                ? "bg-primary shadow-lg shadow-primary/50"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export { TabbedProjects }
export default TabbedProjects
