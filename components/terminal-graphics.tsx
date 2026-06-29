"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ExternalLink, Maximize2, X } from "lucide-react"

const graphicsShowcase = [
  {
    id: 1,
    title: "The Catsinn",
    category: "React",
    image: "/portfolio/the-catsinn.png",
    description: "This project was centered around cats, incorporating features for buying and selling cats along with boarding and grooming services. It provided detailed insights into the condition and care of cats, ensuring transparency and trust in the process. Users could book various services, including grooming and boarding, tailored to their cats' needs. Additionally, the platform facilitated the management of cat medications, allowing for seamless tracking and scheduling of treatments. This comprehensive solution aimed to provide a holistic approach to cat care and services.",
    url: "https://app.thecatsinn.net/sign-in",
  },
  {
    id: 2,
    title: "Law Office",
    category: "Supabase",
    image: "/portfolio/MyLawOffice.png",
    description: "This project was developed for advocates, providing them with a powerful tool to manage their cases efficiently. In this project, I have worked extensively on designing, developing, Node.js, and Supabase. Advocates could add their cases, view them date-wise, and seamlessly download, print, or email case data in PDF format. The application featured a streamlined login process using Supabase, enabling 'Continue with Google' for easy access. Users could create and manage their profiles, including adding subscription plans. The project also included a fully functional admin panel, designed and implemented by me, featuring capabilities such as displaying total users, managing subscriptions, adding data, and handling actions like blocking or unblocking users.",
    url: "https://mylawoffice.in/",
  },
  {
    id: 3,
    title: "Driving License",
    category: "Next Js",
    image: "/portfolio/gdtau.png",
    description: "This project featured a comprehensive client and booking management system with advanced functionality. Users could log in to add new clients and schedule their bookings in advance. When a client requested a schedule change, it allowed seamless swapping of bookings to accommodate their needs. Additionally, the system enabled the addition of trainers, assigning them to specific clients based on schedules. A dedicated trainer account was also integrated, allowing trainers to log in, view their assigned clients, and manage their schedules efficiently. This streamlined approach ensured a smooth and organized workflow for both clients and trainers.",
    url: "https://gdtau.com.au/",
  },
  {
    id: 4,
    title: "Secure365",
    category: "React",
    image: "/portfolio/secure365.png",
    description: "This portfolio website features a modern design and smooth GSAP animations. It features engaging parallax effects for an interactive user experience. The site is dynamic and fully manageable from the WordPress admin panel. Admins can easily add, edit, or update text, images, and sections in real time. The website blends creative visuals with seamless functionality. It provides a professional platform to showcase work with flexibility and style.",
    url: "https://secure365.com",
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
      "I built an AI-powered Shopify extension that allows users to generate custom jewelry images by uploading demo images and selecting attributes like type, color, and style. If users are interested in purchasing, they can submit a quote request through a form. On the admin side, I created a custom panel to manage user data and add dynamic fields for flexibility. The extension integrates seamlessly with Shopify, providing a personalized shopping experience powered by AI. This solution helped the client offer interactive product visualization and streamline customer engagement.",
  },
  {
    id: 9,
    title: "Course",
    category: "E-commerce",
    image: "/portfolio/placeholder-jz2hk.png",
    description:
      "In this project, I developed a custom Shopify extension and admin panel using React, jQuery, and JavaScript. The admin side allows creating a structured flow of Courses → Modules → Lessons, which are then displayed on the Shopify frontend. Students can purchase courses and access them in their personal dashboard. The dashboard also shows learning progress tracking, similar to YouTube playlists. The admin panel manages user data with add, edit, and view functionalities. This solution provided a complete e-learning system integrated with Shopify.",
  },
  {
    id: 10,
    title: "UI/UX Design",
    category: "Design",
    image: "/portfolio/coin3.jpg",
    description: "User-centered design with modern aesthetics",
    url: "#"
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
      "A platform built with Next.js to streamline company growth tracking and reporting. Every six months, companies participate in structured meetings where they upload their work details, photos, and fill out forms related to their furniture projects. The system has a Super Admin who manages and adds questions, while company users provide answers and submit their details. During the review cycle, companies present their progress with reports and PDFs in seminars, highlighting how much growth they have achieved.",
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
    category: "React",
    image: "/portfolio/p2p.png",
    description:
      "This blockchain project integrates MetaMask login via RainbowKit for secure access. Users can view transactions and track referrals through a dynamic referral tree. It provides a transparent and interactive platform for managing blockchain activities.",
    url: "https://p2-p-admin.vercel.app/",
  },
  {
    id: 24,
    title: "Donate Bright Sparks",
    category: "Wordpress",
    image: "/portfolio/Donate-Bright-Sparks.png",
    description:
      "Worked on the Bright Sparks School website by resolving payment gateway issues, implementing and configuring Razorpay integration, fixing form validation errors, and ensuring secure payment processing. Improved website functionality by resolving broken links, fixing navigation issues, and enhancing the overall user experience across donation and registration forms.",
    url: "https://brightsparksschool.org/",
  },
  {
    id: 25,
    title: "Love-Craft",
    category: "React",
    image: "/portfolio/love-craft.png",
    description: "This was a gaming project where the primary requirement was to display only the game pages without revealing the game's documentation, using placeholders such as 'Coming Soon' where necessary. A unique aspect of the project was its seamless responsiveness—users could interact with carousels and other image elements effortlessly, even after rotating their devices. Ensuring a flawless responsive design was critical, allowing the application to adapt smoothly to different screen orientations and sizes while maintaining an engaging and intuitive user experience.",
    url: "https://love-craft-2w41.vercel.app/"
  },
  {
    id: 26,
    title: "Matrimonial",
    category: "React",
    image: "/portfolio/placeholder-jz2hk.png",
    description: "This project was designed as a matchmaking platform, aimed at connecting individuals for potential relationships. Users could create profiles, upload their photos, and share details to showcase themselves. The platform facilitated seamless communication, allowing users to interact and connect effortlessly. The design emphasized user-friendliness, ensuring a smooth experience for browsing profiles, managing preferences, and initiating contact, making it an ideal solution for fostering meaningful connections."
  },
  {
    id: 27,
    title: "Ayewa-Admin",
    category: "Next Js",
    image: "/portfolio/ayewa-admin.png",
    description: "This project included a robust admin panel designed to manage and display key data metrics effectively. The admin side featured functionalities for viewing and managing total users, total subscriptions, and actions like blocking or unblocking users. Additionally, it provided options to edit or delete data, ensuring complete control over the platform's operations. The dashboard offered an intuitive interface, presenting a comprehensive overview of the platform's performance and user activity, enabling efficient administration and decision-making."
  },
  {
    id: 28,
    title: "Fintu",
    category: "React",
    image: "/portfolio/Fintu-Payment.png",
    description: "This website is designed for a dental clinic to showcase its plans and services. Visitors can explore detailed information about the treatments and packages offered. Each service is clearly defined along with the specialists who provide them. A contact form is integrated, allowing patients to easily connect with the clinic owner. The platform helps build trust by presenting professional services in a structured way. It serves as a complete online presence for promoting dental care and client engagement.",
    url: "https://dentist-landig-page.vercel.app"
  },
  {
    id: 29,
    title: "Cynova-connect",
    category: "Next Js",
    image: "/portfolio/placeholder-jz2hk.png",
    description: "In this project, I worked on debugging and fixing errors in the client's existing code. The system was designed to generate prompts from text and then create videos and voice outputs from those prompts. The client had already added the base code, but it was not functioning properly due to multiple issues. I resolved the errors, set up the workflow correctly, and ensured smooth execution of the process. The implementation now allows seamless text-to-prompt, prompt-to-video, and prompt-to-voice generation. This helped the client achieve the intended functionality with a fully working solution."
  },
  {
    id: 30,
    title: "Bike Formers",
    category: "E-commerce",
    image: "/portfolio/BikeFormers.png",
    description: "Designed and developed a motorcycle parts eCommerce store on Shopify. Created UI/UX in Figma and implemented a modern, responsive storefront. Built collections, product filtering, and fitment-based search for better user experience. Integrated secure payment gateway and optimized store performance. Customized theme, improved navigation, and ensured smooth shopping flow from product discovery to checkout.",
    url: "https://bikeformers.com/"
  },
  {
    id: 31,
    title: "Nanuan's Travel",
    category: "PHP",
    image: "/portfolio/nanuans.png",
    description: "Developed a luxury car rental web application using Core PHP and MySQL. Designed modern UI in Figma and implemented a responsive frontend. Fixed major backend issues, optimized booking flow, and improved database performance using phpMyAdmin. Integrated dynamic car listings, booking system, and travel packages. Handled deployment via cPanel and ensured smooth functionality across devices with better performance and stability.",
    url: "https://www.nanuantravels.com/"

  },
  {
    id: 32,
    title: "Nominel",
    category: "E-commerce",
    image: "/portfolio/nominal.png",
    description: "Designed and developed a premium Shopify skincare website from scratch, creating the complete UI/UX with a modern, luxury-focused design. Built custom layouts for the homepage, collection pages, product pages, ingredient sections, and brand storytelling. Implemented a fully responsive design optimized for desktop, tablet, and mobile devices, ensuring a seamless user experience across all screen sizes. Customized Shopify themes using Liquid, HTML, CSS, JavaScript, and Shopify sections, while optimizing performance, visual consistency, typography, spacing, animations, and cross-browser compatibility to deliver a fast, engaging, and conversion-focused shopping experience.",
    url: "https://nominel.in/"
  }
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
    <div className="w-full">
      <div className="border border-border/50 rounded-2xl bg-background/50 backdrop-blur-md shadow-lg overflow-hidden">
        <div className="p-6 md:p-8 lg:p-10">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground border border-transparent hover:border-border/50"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Graphics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col rounded-xl overflow-hidden border border-border bg-card text-card-foreground shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="relative aspect-[2] overflow-hidden bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredItem === item.id ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <button
                        onClick={() => handleViewDetails(item)}
                        className="flex items-center gap-2 bg-primary/90 text-primary-foreground backdrop-blur-sm px-6 py-3 rounded-full font-medium hover:bg-primary hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                      >
                        {item.category === "Design" ? (
                          <>
                            <Maximize2 className="w-4 h-4" /> View Design
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-4 h-4" /> View Project
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3 gap-2">
                      <h3 className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">{item.title}</h3>
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-card rounded-2xl max-w-5xl w-full flex items-center justify-center shadow-2xl overflow-hidden border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 p-4 flex justify-end bg-gradient-to-b from-black/50 to-transparent z-10">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white bg-black/50 hover:bg-primary transition-colors duration-200 rounded-full p-2 backdrop-blur-md"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {selectedImage && (
                <div className="w-full max-h-[85vh] overflow-auto custom-scrollbar p-2">
                  <img
                    src={selectedImage}
                    alt="Full Design"
                    className="w-auto mx-auto rounded-lg"
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
