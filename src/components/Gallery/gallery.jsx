"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// Sample gallery images
const galleryImages = [
  {
    src: "/images/hosteria-1.jpg",
    alt: "Fachada principal de Castillo Real Hostería",
  },
  {
    src: "/images/hosteria-2.jpg",
    alt: "Suite de lujo con vista panorámica",
  },
  {
    src: "/images/hosteria-3.jpg",
    alt: "Restaurante gourmet con decoración elegante",
  },
  {
    src: "/images/hosteria-4.jpg",
    alt: "Piscina infinity con vista a las montañas",
  },
  {
    src: "/images/hosteria-5.jpg",
    alt: "Salón de eventos para celebraciones especiales",
  },
  {
    src: "/images/hosteria-6.jpg",
    alt: "Habitación premium con cama king size",
  },
  {
    src: "/images/hosteria-7.jpg",
    alt: "Área de spa y bienestar",
  },
  {
    src: "/images/hosteria-8.jpg",
    alt: "Jardines y áreas verdes",
  },
]

export default function Gallery({ images = galleryImages }) {
  const [selectedImage, setSelectedImage] = useState(null)

  const openLightbox = (index) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction) => {
    const newIndex = selectedImage + direction
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex)
    }
  }

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <ImageCard key={index} image={image} index={index} onClick={() => openLightbox(index)} />
          ))}
        </div>
      </div>

      {/* Minimalist Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <motion.button
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 z-10"
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-8 w-8" />
            </motion.button>

            <motion.button
              className="absolute left-6 text-white/80 hover:text-white p-2 z-10"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage(-1)
              }}
              disabled={selectedImage === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ opacity: selectedImage === 0 ? 0.3 : 1 }}
            >
              <ChevronLeft className="h-8 w-8" />
            </motion.button>

            <motion.button
              className="absolute right-6 text-white/80 hover:text-white p-2 z-10"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage(1)
              }}
              disabled={selectedImage === images.length - 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ opacity: selectedImage === images.length - 1 ? 0.3 : 1 }}
            >
              <ChevronRight className="h-8 w-8" />
            </motion.button>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-6xl h-[85vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[selectedImage]?.src || "/placeholder.svg"}
                  alt={images[selectedImage]?.alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function ImageCard({ image, index, onClick }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="aspect-[4/3] overflow-hidden"
    >
      <motion.div
        className="w-full h-full relative cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
      >
        <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
        <motion.div
          className="absolute inset-0 bg-black/0"
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}
