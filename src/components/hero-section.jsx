"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowDown, Calendar } from "lucide-react"

export default function HeroSection({
  title = "Castillo Real",
  subtitle = "Subtítulo descriptivo",
  buttonText = "Reservar Ahora",
  buttonLink = "/",
  imageUrl = "/new2.webp",
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  // Mouse position for subtle image movement
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Array of rotating texts
  const rotatingItems = ["Hosteria", "Sala de eventos", "Restaurante", "Piscinas", "Areas verdes"]

  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Change text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingItems.length)
        setIsAnimating(false)
      }, 500) // Half of the interval for smooth transition
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Split the title into parts
  const titleParts = title.split(" ")
  const firstWord = titleParts[0] || "Castillo"
  const secondWord = titleParts[1] || "Real"

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  // Availability status
  const [availability, setAvailability] = useState({
    status: "Disponible",
    percentage: 85,
  })

  return (
    <section ref={ref} className="relative w-[100vw] h-[100vh] overflow-hidden">
      {/* Background image with subtle parallax effect */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y,
          opacity,
          x: mousePosition.x * -15, // Very subtle movement
          scale: 1 + Math.abs(mousePosition.y) * 0.03,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/10 z-10" />
        <img
          src={imageUrl || "/public/hcrnight.webp"}
          alt={title}
          className="object-cover object-center h-full w-full"
        />
      </motion.div>

      {/* Main content - extremely minimal */}
      <motion.div
        className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4"
        style={{ y: textY }}
      >
        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 relative w-full max-w-6xl mx-auto"
        >
          <h1 className="font-cinzelbold text-4xl md:text-6xl lg:text-8xl text-shadow-lg text-center tracking-[1.5rem]">
            <span className="text-pyellow">{firstWord}</span> <span className="text-white">{secondWord}</span>
          </h1>

          {/* Rotating text section with minimal styling */}
          <div className="relative mt-3 md:mt-4 w-full text-center">
            <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pyellow to-transparent top-0"></div>
            <div className="h-[40px] md:h-[60px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-cinzelsmb text-white text-md md:text-3xl tracking-[0.5em] md:tracking-[0.8em] lg:tracking-[1.2em] uppercase py-2 px-4 text-center inline-flex items-center justify-center text-shadow-md"
                >
                  <span className="inline-flex items-center ml-[0.5em] md:ml-[0.8em] lg:ml-[1.2em]">
                    {rotatingItems[currentTextIndex]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pyellow to-transparent bottom-0"></div>
          </div>
        </motion.div>

        {/* Essential tagline - one impactful line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 font-poppinslight"
        >
          Una experiencia única de lujo y confort en un entorno natural
        </motion.p>

        {/* Availability indicator - essential information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3">
            <div className="text-sm text-white/80 font-poppinslight">Estado:</div>
            <div className="text-sm font-poppinsmd text-pyellow">{availability.status}</div>
            <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-pyellow"
                initial={{ width: 0 }}
                animate={{ width: `${availability.percentage}%` }}
                transition={{ duration: 1, delay: 1 }}
              />
            </div>
            <div className="text-sm text-white/80 font-poppinslight">{availability.percentage}% ocupación</div>
          </div>
        </motion.div>

        {/* CTA button - clean and minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            href={buttonLink}
            className="flex items-center justify-center gap-2 px-10 py-3 bg-pyellow hover:bg-white text-primary hover:text-primary rounded-md text-lg font-poppinsreg tracking-wider transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-5 h-5" />
            {buttonText}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Minimal feature indicators */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-lg"
      >
        <div className="flex justify-center gap-8 md:gap-16">
          {["Hospedaje", "Gastronomía", "Eventos"].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 + index * 0.2 }}
              className="text-center"
            >
              <div className="w-2 h-2 bg-pyellow rounded-full mx-auto mb-2"></div>
              <div className="text-white/80 text-xs md:text-sm font-poppinsreg tracking-wide">{feature}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll down button - minimal */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center text-white/70 hover:text-white group transition-colors"
          aria-label="Desplazarse hacia abajo"
        >
          <span className="text-sm mb-2 font-poppinslight">Descubrir</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}

