"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Map, Image, Mail, Calendar } from "lucide-react"
import LogoHosteria from "../LogoHosteria/logoHosteria"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-emerald-700/90 backdrop-blur-md shadow-lg py-1"
            : isHovered
              ? "bg-white/10 backdrop-blur-sm py-3"
              : "bg-transparent py-2"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <LogoHosteria />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 text-xl tracking-wider text-shadow-sm">
              <a
                href="/"
                className={`font-poppinsmd group flex items-center gap-1.5 transition-colors duration-300 ${
                  isScrolled ? "text-white hover:text-pyellow" : "text-white hover:text-pyellow"
                }`}
              >
                <Home className="w-5 h-5" />
                <span>Inicio</span>
                <span
                  className={`block h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-in-out ${
                    isScrolled ? "bg-pyellow" : "bg-pyellow"
                  }`}
                ></span>
              </a>
              <a
                href="/turismo"
                className={`font-poppinsmd group flex items-center gap-1.5 transition-colors duration-300 ${
                  isScrolled ? "text-white hover:text-pyellow" : "text-white hover:text-pyellow"
                }`}
              >
                <Map className="w-5 h-5" />
                <span>Turismo</span>
                <span
                  className={`block h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-in-out ${
                    isScrolled ? "bg-pyellow" : "bg-pyellow"
                  }`}
                ></span>
              </a>
              <a
                href="/galeria"
                className={`font-poppinsmd group flex items-center gap-1.5 transition-colors duration-300 ${
                  isScrolled ? "text-white hover:text-pyellow" : "text-white hover:text-pyellow"
                }`}
              >
                <Image className="w-5 h-5" />
                <span>Galería</span>
                <span
                  className={`block h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-in-out ${
                    isScrolled ? "bg-pyellow" : "bg-pyellow"
                  }`}
                ></span>
              </a>
              <a
                href="/contacto"
                className={`font-poppinsmd group flex items-center gap-1.5 transition-colors duration-300 ${
                  isScrolled ? "text-white hover:text-pyellow" : "text-white hover:text-pyellow"
                }`}
              >
                <Mail className="w-5 h-5" />
                <span>Contacto</span>
                <span
                  className={`block h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-in-out ${
                    isScrolled ? "bg-pyellow" : "bg-pyellow"
                  }`}
                ></span>
              </a>
            </nav>

            {/* Reservation Button */}
            <div className="hidden md:block">
              <a
                href="/reservar"
                className={`px-4 py-2 rounded-md font-poppinsmd tracking-wide flex items-center gap-2 transition-all duration-300 ${
                  isScrolled
                    ? "bg-pyellow text-primary hover:bg-white hover:text-moss"
                    : "bg-white/90 text-primary hover:bg-pyellow hover:scale-105"
                }`}
              >
                <Calendar className="w-5 h-5" />
                <span>Reservar</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden relative z-50" onClick={toggleMobileMenu} aria-label="Menu">
              {mobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? "text-pyellow" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? "text-pyellow" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-b from-moss/95 to-primary/95 backdrop-blur-md z-40 pt-20 px-4 overflow-y-auto"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-6 text-center">
              <a
                href="/"
                className="text-xl font-poppinsmd text-pyellow hover:text-white py-2 flex items-center justify-center gap-3 transition-colors relative group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="w-6 h-6" />
                <span>Inicio</span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-24 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
              </a>
              <a
                href="/turismo"
                className="text-xl font-poppinsmd text-pyellow hover:text-white py-2 flex items-center justify-center gap-3 transition-colors relative group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Map className="w-6 h-6" />
                <span>Turismo</span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-24 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
              </a>
              <a
                href="/galeria"
                className="text-xl font-poppinsmd text-pyellow hover:text-white py-2 flex items-center justify-center gap-3 transition-colors relative group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image className="w-6 h-6" />
                <span>Galería</span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-24 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
              </a>
              <a
                href="/contacto"
                className="text-xl font-poppinsmd text-pyellow hover:text-white py-2 flex items-center justify-center gap-3 transition-colors relative group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Mail className="w-6 h-6" />
                <span>Contacto</span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-24 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
              </a>

              <div className="pt-6">
                <a
                  href="/reservar"
                  className="text-xl font-poppinsmd bg-pyellow text-primary hover:bg-white hover:text-moss py-3 px-8 rounded-md inline-flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Calendar className="w-6 h-6" />
                  <span>Reservar Ahora</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

