"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const graphicsShowcase = [
  {
    id: 1,
    title: "The Catsinn",
    category: "React",
    image: "/portfolio/the-catsinn.png",
    description: "Modern React applications with advanced state management",
    url: "https://app.thecatsinn.net/",
  },
  {
    id: 2,
    title: "Law Office",
    category: "Next Js",
    image: "/portfolio/placeholder-jz2hk.png",
    description: "Server-side rendered applications with optimal performance",
  },
  {
    id: 3,
    title: "Driving License",
    category: "Next Js",
    image: "/portfolio/gdtau.png",
    description: "Server-side rendered applications with optimal performance",
    url: "https://gdtau.com.au/",
  },
  {
    id: 4,
    title: "Secure365",
    category: "Animation",
    image: "/portfolio/secure365.png",
    description: "Advanced animations and interactive experiences",
  },
  {
    id: 5,
    title: "Epos",
    category: "Supabase",
    image: "/portfolio/epos.png",
    description: "Real-time database and authentication systems",
    url: "https://epos-lemon.vercel.app/",
  },
  {
    id: 6,
    title: "Healthi Wealthi",
    category: "React",
    image: "/portfolio/healthi-wealthi.png",
    description: "Custom themes and coding work add with help of supabase",
  },
  {
    id: 7,
    title: "GroupWish",
    category: "React",
    image: "/portfolio/groupwish.png",
    description: "For choose cards and edit then send as a gift to our card holder.",
  },
  {
    id: 8,
    title: "Jewelry Ai",
    category: "E-commerce",
    image: "/portfolio/placeholder-jz2hk.png",
    description:
      "AI-powered Shopify app where users can generate jewelry images by uploading demo images and selecting jewelry type, color, etc. If they wish to purchase, they can submit a quote request through a form And also create admin for show data o users and dynamic feilds add.",
  },
  {
    id: 9,
    title: "Course",
    category: "E-commerce",
    image: "/portfolio/placeholder-jz2hk.png",
    description:
      "Course management platform where admins can create courses and lessons, while students can buy courses, create accounts, and access their purchased content. It also provides course previews and tracks student progress to show how much has been completed and how much is pending.",
  },
  {
    id: 10,
    title: "UI/UX Design",
    category: "Design",
    image: "/portfolio/coin3.jpg",
    description: "User-centered design with modern aesthetics",
    url:"#"
  },
  {
    id: 11,
    title: "UI/UX Design",
    category: "Design",
    image: "/portfolio/coin12.jpg",
    description: "User-centered design with modern aesthetics",
  },
  {
    id: 12,
    title: "UI/UX Design",
    category: "Design",
    image: "/portfolio/coin13.jpg",
    description: "User-centered design with modern aesthetics",
  },
  {
    id: 13,
    title: "UI/UX Design",
    category: "Design",
    image: "/portfolio/coin13.jpg",
    description: "User-centered design with modern aesthetics",
  },
  {
    id: 14,
    title: "UI/UX Design",
    category: "Design",
    image: "/portfolio/digital-marketing-banner.jpg",
    description: "User-centered design with modern aesthetics",
  },
  {
    id: 15,
    title: "UI/UX Design",
    category: "Design",
    image: "/portfolio/office-bannner.jpg",
    description: "User-centered design with modern aesthetics",
  },
  {
    id: 16,
    title: "UI/UX Design",
    category: "Design",
    image: "/portfolio/shapes-design1.jpg",
    description: "User-centered design with modern aesthetics",
  },
  {
    id: 17,
    title: "UI/UX Design",
    category: "Design",
    image: "/portfolio/coin-banner.jpg",
    description: "User-centered design with modern aesthetics",
  },
  {
    id: 18,
    title: "UI/UX Design",
    category: "Design",
    image: "/portfolio/shapes-design.jpg",
    description: "User-centered design with modern aesthetics",
  },
  {
    id: 19,
    title: "Web Analyzer",
    category: "Next Js",
    image: "/portfolio/web-analyzer.png",
    description:
      "A powerful website analyzer built with Next.js that evaluates websites, highlights progress, and identifies issues for improvement. Initially, only partial blurred data is shown, and users need to fill a form to unlock complete results—ensuring client information is collected before revealing full insights. Once submitted, the platform displays a detailed analysis report to guide website enhancements.",
  },

  {
    id: 20,
    title: "NAHB",
    category: "Next Js",
    image: "/portfolio/nahb.png",
    description:
      "A platform built with Next.js to streamline company growth tracking and reporting. Every six months, companies participate in structured meetings where they upload their work details, photos, and fill forms related to their furniture projects. The system has a Super Admin who manages and adds questions, while company users provide answers and submit their details. During the review cycle, companies present their progress with reports and PDFs in seminars, highlighting how much growth they have achieved.",
    url: "https://nahbcraftsmen.com/",
  },

  {
    id: 21,
    title: "Nova Ai",
    category: "Next Js",
    image: "/portfolio/nova-chatbot.png",
    description:
      "An AI-powered chatbot platform built with Next.js. Users can log in to the website, take a free demo of the chatbot, or purchase a plan to build their own custom chatbot. The system generates a unique script for each chatbot, which can be integrated into any project—enabling seamless chatbot functionality through the embedded script.",
    url: "https://v0-novachatbot.vercel.app/",
  },

  {
    id: 22,
    title: "Image Editor",
    category: "React",
    image: "/portfolio/image-editor.png",
    description:
      "A custom image editor built with React that provides essential editing features such as resize, crop, and rotate. After editing, users can seamlessly add products to Shopify’s cart. My primary role in this project was developing and implementing the editor functionality.",
    url: "https://custom-image-editor-one.vercel.app/",
  },

  {
    id: 23,
    title: "P2p Blockchain",
    category: "React & rainbow kit",
    image: "/portfolio/p2p.png",
    description:
      "This blockchain project integrates MetaMask login via RainbowKit for secure access. Users can view transactions and track referrals through a dynamic referral tree. It provides a transparent and interactive platform for managing blockchain activities.",
    url: "https://p2-p-admin.vercel.app/",
  },
    {
    id: 23,
    title: "Donate Bright Sparks",
    category: "Wordpress",
    image: "/portfolio/Donate-Bright-Sparks.png",
    description:
      "This project is a school donation platform where users can donate to support children. It was built using the Hello Elementor theme, Contact Form 7 for form handling, and Razorpay for secure payment collection. After each donation, confirmation emails are automatically sent to both the admin and the donor.",
    url: "https://brightsparksschool.org/",
  },
]

export function TerminalGraphics() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
 
  const categories = ["All", ...Array.from(new Set(graphicsShowcase.map((item) => item.category)))]

  const filteredItems =
    selectedCategory === "All"
      ? graphicsShowcase
      : graphicsShowcase.filter((item) => item.category === selectedCategory)


        const handleViewDetails = (item: any) => {
    if (item.category === "Design") {
      // Open modal for UI/UX design category
      setSelectedImage(item.image);
      setIsModalOpen(true);
    } else if (item.url) {
      // Open external link
      window.open(item.url, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-orange-400 p-8 font-mono">
      <div className="border border-orange-400/30 rounded-lg">
        <div className="p-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
            <h2 className="text-4xl font-bold text-orange-400 mb-4">GRAPHICS SHOWCASE</h2>
            <div className="text-orange-400 mb-6">
              <span>&gt; boot_sequence: visual_portfolio.load</span>
              <br />
              <span>&gt; system_status: ✓</span>
            </div>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 border transition-all duration-300 ${
                  selectedCategory === category
                    ? "border-orange-400 bg-orange-400 text-slate-900 font-semibold"
                    : "border-orange-400/30 text-orange-400/70 hover:border-orange-400/60"
                }`}
              >
                &gt; {category.toLowerCase()}
              </button>
            ))}
          </div>

          {/* Graphics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-orange-400/30 overflow-hidden hover:border-orange-400/60 transition-all duration-300 group bg-slate-800/50 rounded-lg"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {hoveredItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                     <button
                        onClick={() => handleViewDetails(item)}
                        className="border border-orange-400 px-4 py-2 text-orange-400 bg-slate-900/90 hover:bg-orange-400/10 transition-colors duration-300 rounded"
                      >
                        &gt; view_details
                      </button>
                    </motion.div>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-orange-400 font-semibold">{item.title}</h3>
                    <span className="text-blue-400 text-xs border border-blue-400/40 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-orange-400/70 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <span className="text-orange-400/60">&gt; scroll_down</span>
          </div>
        </div>
      </div>

       {/* Modal */}
{isModalOpen && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    onClick={() => setIsModalOpen(false)}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative bg-slate-800 p-4 rounded-xl max-w-5xl w-full flex items-center justify-center shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-3 right-3 text-orange-400 border border-orange-400/40 rounded px-2 py-1 hover:bg-orange-400/10 transition"
      >
        ✕
      </button>

      {/* Image */}
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Full Design"
          className="max-h-[80vh] w-auto rounded-lg object-contain mx-auto"
        />
      )}
    </motion.div>
  </div>
)}

    </div>
  )
}
