"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowDown, Calendar } from "lucide-react"

export default function HeroSection({
  title = "Castillo Real",
  subtitle = "Subtítulo descriptivo",
  buttonText = "Acción Principal",
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

  // Array of rotating texts
  const rotatingTexts = ["Hosteria", "Sala de eventos", "Restaurante", "Piscinas", "Areas verdes"]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Change text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
        setIsAnimating(false)
      }, 500) // Half of the interval for smooth transition
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Split the title into parts (assuming it's "Castillo Real")
  const titleParts = title.split(" ")
  const firstWord = titleParts[0] || "Castillo"
  const secondWord = titleParts[1] || "Real"

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section ref={ref} className="relative w-[100vw]  h-[100vh] overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <img
          src={imageUrl || "/public/hcrnight.webp"}
          alt={title}
          className="object-cover object-center h-auto w-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/20 z-10" />
      <motion.div
        className="mt-10 relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4"
        style={{ y: textY }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-2 relative w-full max-w-6xl mx-auto"
        >
          <h1 className="font-cinzelbold text-4xl md:text-6xl lg:text-8xl text-shadow-lg text-center tracking-[1.5rem]">
            <span className="text-pyellow">{firstWord}</span> <span className="text-white">{secondWord}</span>
          </h1>

          <div className="relative mt-3 md:mt-4 w-full text-center">
            <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pyellow to-transparent top-0"></div>
            <div className="h-[40px] md:h-[60px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-cinzelsmb bg-gradient-to-r from-transparent via-gray-50/20 to-transparent bottom-0 text-white text-xl md:text-3xl tracking-[0.5em] md:tracking-[0.8em] lg:tracking-[1.2em] uppercase py-2 px-4 text-center inline-block text-shadow-md"
                >
                  <span className="inline-block ml-[0.5em] md:ml-[0.8em] lg:ml-[1.2em]">
                    {rotatingTexts[currentTextIndex]}
                  </span>
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pyellow to-transparent bottom-0"></div>
          </div>
        </motion.div>
        {/* <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-poppinslight bg-gradient-to-r from-transparent via-gray-50/30 to-transparent bottom-0 text-white tracking-wide text-xl md:text-3xl max-w-6xl mb-8 text-shadow-lg mt-16"
        >
          {subtitle}
        </motion.p> */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href={buttonLink}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-pyellow hover:bg-white text-primary hover:text-primary rounded-md text-lg font-poppinsreg tracking-wider transition duration-300 mt-20"
          >
          <Calendar />
            {buttonText}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center text-white font-poppinsmd text-shadow-sm"
          aria-label="Desplazarse hacia abajo"
        >
          <span className="text-sm mb-2">Descubrir más</span>
          <ArrowDown className="h-6 w-6" />
        </button>
      </motion.div>
    </section>
  )
}

