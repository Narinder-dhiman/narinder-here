"use client"

import * as React from "react"
import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const colorThemes = [
  { name: "Orange", value: "orange", colors: "from-orange-500 to-red-500", preview: "#f97316" },
  { name: "Blue", value: "blue", colors: "from-blue-500 to-cyan-500", preview: "#3b82f6" },
  { name: "Purple", value: "purple", colors: "from-purple-500 to-pink-500", preview: "#8b5cf6" },
  { name: "Emerald", value: "emerald", colors: "from-emerald-500 to-teal-500", preview: "#10b981" },
  { name: "Rose", value: "rose", colors: "from-rose-500 to-pink-500", preview: "#f43f5e" },
]

export function ColorThemeToggle() {
  const [currentTheme, setCurrentTheme] = React.useState("orange")

  const applyColorTheme = (theme: string) => {
    const root = document.documentElement

    // Remove existing theme classes
    colorThemes.forEach((t) => {
      root.classList.remove(`theme-${t.value}`)
    })

    // Add new theme class
    root.classList.add(`theme-${theme}`)

    const selectedTheme = colorThemes.find((t) => t.value === theme)
    if (selectedTheme) {
      root.setAttribute("data-theme", theme)
    }

    setCurrentTheme(theme)

    // Store preference in localStorage
    localStorage.setItem("color-theme", theme)

    root.style.transition = "all 0.3s ease"
    setTimeout(() => {
      root.style.transition = ""
    }, 300)
  }

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme") || "orange"
    applyColorTheme(savedTheme)
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="hover:scale-110 transition-all duration-300 hover:bg-primary/10">
          <Palette className="h-4 w-4 text-foreground" />
          <span className="sr-only">Change color theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-card/95 backdrop-blur-md border-border/50">
        {colorThemes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => applyColorTheme(theme.value)}
            className="cursor-pointer hover:bg-primary/10 transition-colors"
          >
            <div className="flex items-center space-x-3 w-full">
              <div
                className="w-4 h-4 rounded-full border border-border/50"
                style={{ backgroundColor: theme.preview }}
              />
              <span className="flex-1 text-foreground">{theme.name}</span>
              {currentTheme === theme.value && <span className="text-primary font-semibold">✓</span>}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
