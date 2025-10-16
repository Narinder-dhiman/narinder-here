"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { X, Linkedin, MessageCircle } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("Sending...")
    setIsLoading(true)

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus("Message sent successfully ✅")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("Failed to send ❌")
      }
    } catch (error) {
      setStatus("Error sending ❌")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 dark:bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 border-2 border-primary p-6 rounded-xl shadow-2xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-primary hover:text-red-500 transition-colors">
          <X size={22} />
        </button>

        <h2 className="text-primary font-mono text-2xl mb-4 font-bold">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-primary bg-white dark:bg-black text-black dark:text-primary font-mono rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-primary bg-white dark:bg-black text-black dark:text-primary font-mono rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-3 border-2 border-primary bg-white dark:bg-black text-black dark:text-primary font-mono rounded focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 border-2 border-primary bg-primary text-primary-foreground font-bold font-mono rounded hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {status && <p className="mt-3 text-sm text-primary font-mono text-center animate-pulse">{status}</p>}

        <div className="flex justify-center space-x-6 mt-6 pt-4 border-t-2 border-primary/30">
          <a
            href="https://wa.me/8278747969"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-all hover:scale-110"
            aria-label="WhatsApp"
          >
            <MessageCircle size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/narinder-dhiman/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
        </div>
      </div>
    </div>
  )
}
