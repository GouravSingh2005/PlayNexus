"use client"

import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60"
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Play className="h-6 w-6 text-violet-600 dark:text-violet-500" />
            <span className="inline-block font-bold">Playnexus</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#features"
              className="flex items-center text-lg font-medium transition-colors hover:text-violet-600 dark:hover:text-violet-500"
            >
              Features
            </Link>
            <Link
              href="#streamers"
              className="flex items-center text-lg font-medium transition-colors hover:text-violet-600 dark:hover:text-violet-500"
            >
              Top Streamers
            </Link>
            <Link
              href="#pricing"
              className="flex items-center text-lg font-medium transition-colors hover:text-violet-600 dark:hover:text-violet-500"
            >
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Log in
            </Button>
            <Button
              size="sm"
              className="hidden sm:inline-flex bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700 text-white"
            >
              Sign up
            </Button>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
