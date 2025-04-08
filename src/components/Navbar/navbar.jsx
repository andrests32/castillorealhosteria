"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Map, Image, Mail, Calendar, Instagram, Facebook, Twitter, Youtube } from "lucide-react"
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

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
              <LogoHosteria 
               />
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
                href="/services"
                className={`font-poppinsmd group flex items-center gap-1.5 transition-colors duration-300 ${
                  isScrolled ? "text-white hover:text-pyellow" : "text-white hover:text-pyellow"
                }`}
              >
                <Map className="w-5 h-5" />
                <span>Servicios</span>
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
                href="/contact"
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
            <button
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center transition duration-500"
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-pyellow" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-emerald-700 z-50 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            >
              <div className="flex flex-col h-full">
                {/* Logo area */}
                <div className="flex justify-center items-center py-6 border-b border-white/10">
                  <LogoHosteria />
                </div>

                {/* Navigation */}
                <nav className="flex flex-col py-6">
                  <a
                    href="/"
                    className="text-lg font-poppinsreg text-white py-3 px-8 flex items-center gap-3 hover:bg-white/5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Home className="w-5 h-5 text-pyellow" />
                    <span>Inicio</span>
                  </a>
                  <a
                    href="/services"
                    className="text-lg font-poppinsmd text-white py-3 px-8 flex items-center gap-3 hover:bg-white/5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Map className="w-5 h-5 text-pyellow" />
                    <span>Servicios</span>
                  </a>
                  <a
                    href="/galeria"
                    className="text-lg font-poppinsmd text-white py-3 px-8 flex items-center gap-3 hover:bg-white/5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image className="w-5 h-5 text-pyellow" />
                    <span>Galería</span>
                  </a>
                  <a
                    href="/contact"
                    className="text-lg font-poppinsmd text-white py-3 px-8 flex items-center gap-3 hover:bg-white/5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Mail className="w-5 h-5 text-pyellow" />
                    <span>Contacto</span>
                  </a>
                </nav>

                {/* Reservation Button */}
                <div className="px-8 py-6 mt-auto">
                  <a
                    href="/reservar"
                    className="w-full text-lg font-poppinsmd bg-pyellow text-primary hover:bg-white hover:text-moss py-3 rounded-md flex items-center justify-center gap-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Reservar Ahora</span>
                  </a>
                </div>

                {/* Social Media */}
                <div className="px-8 py-6 border-t border-white/10">
                  <div className="flex justify-between">
                    <a href="#" className="text-white hover:text-pyellow transition-colors" aria-label="Instagram">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-white hover:text-pyellow transition-colors" aria-label="Facebook">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-white hover:text-pyellow transition-colors" aria-label="Twitter">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-white hover:text-pyellow transition-colors" aria-label="YouTube">
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

